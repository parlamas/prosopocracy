// app/agora/actions.ts
// Server actions for the agora: start, join and leave circles.
// Every action re-checks on the server that the member is signed in,
// not banned, email-verified and aged 18 or over.
'use server';

import { revalidatePath } from 'next/cache';
import { auth } from '../../lib/auth';
import { prisma } from '../../lib/prisma';
import {
  DURATIONS,
  MAX_DAYS_AHEAD,
  MAX_SEATS,
  MAX_UPCOMING_PER_USER,
  MIN_SEATS,
  RADIUS_OPTIONS,
  circleEndsAt,
  formatDistance,
  formatRadius,
  isAdult,
  type DeviceLocation,
} from '../../lib/agora';
import { checkLocation, roundCoord } from '../../lib/locationCheck';

export type ActionResult = { ok: true; id?: string } | { ok: false; error: string };

export type CreateCircleInput = {
  format: 'ONLINE' | 'IN_PERSON';
  question: string; // the issue to discuss, chosen by the creator
  placeName: string; // meeting place (in person) or area (online)
  latitude: number;
  longitude: number;
  startsAt: string; // ISO string, converted from the member's local time in the browser
    durationMin: number;
  maxSeats: number;
  localOnly: boolean; // only people within radiusKm may join
  radiusKm: number; // the circle's local area
  creatorLocation: DeviceLocation | null; // the creator's device location, if shared
};

async function requireParticipant(): Promise<{ userId: string } | { error: string }> {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return { error: 'Please sign in first.' };

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { banned: true, emailVerified: true, dateOfBirth: true },
  });
  if (!user || user.banned || !user.emailVerified) {
    return { error: 'Your account cannot take part in the agora.' };
  }
  if (!isAdult(user.dateOfBirth)) {
    return { error: 'The agora is open to members aged 18 and over.' };
  }
  return { userId };
}

export async function createCircle(input: CreateCircleInput): Promise<ActionResult> {
  const participant = await requireParticipant();
  if ('error' in participant) return { ok: false, error: participant.error };

  const format =
  input.format === 'IN_PERSON' ? 'IN_PERSON' : input.format === 'ONLINE' ? 'ONLINE' : null;
  const question = String(input.question ?? '').trim();
  const placeName = String(input.placeName ?? '').trim();
  const latitude = Number(input.latitude);
  const longitude = Number(input.longitude);
  const startsAt = new Date(input.startsAt);
  const durationMin = Number(input.durationMin);
  const maxSeats = Number(input.maxSeats);
  const localOnly = input.localOnly === true;
  const radiusKm = Number(input.radiusKm);
  const now = new Date();

    if (!format) {
    return { ok: false, error: 'Choose online or in person.' };
  }
    if (question.length < 5 || question.length > 500) {
    return { ok: false, error: 'The issue must be between 5 and 500 characters.' };
  }
  if (placeName.length < 2 || placeName.length > 80) {
        return { ok: false, error: 'The place or area name must be between 2 and 80 characters.' };
  }
  if (
    !Number.isFinite(latitude) ||
    !Number.isFinite(longitude) ||
    Math.abs(latitude) > 90 ||
    Math.abs(longitude) > 180
  ) {
    return { ok: false, error: 'Choose a point on the map for the circle.' };
  }
  if (Number.isNaN(startsAt.getTime())) {
    return { ok: false, error: 'Choose a start time.' };
  }
    // A start time up to an hour in the past means "start now"
  // (for example, when the form was left open for a while).
  if (startsAt.getTime() < now.getTime() - 60 * 60_000) {
    return { ok: false, error: 'The start time is in the past.' };
  }
  if (startsAt.getTime() < now.getTime()) {
    startsAt.setTime(now.getTime());
  }
  if (startsAt.getTime() > now.getTime() + MAX_DAYS_AHEAD * 24 * 60 * 60_000) {
    return { ok: false, error: `Circles can be scheduled at most ${MAX_DAYS_AHEAD} days ahead.` };
  }
  if (!(DURATIONS as readonly number[]).includes(durationMin)) {
    return { ok: false, error: 'Choose a valid duration.' };
  }
    if (!Number.isInteger(maxSeats) || maxSeats < MIN_SEATS || maxSeats > MAX_SEATS) {
    return { ok: false, error: `Seats must be between ${MIN_SEATS} and ${MAX_SEATS}.` };
  }
  if (!(RADIUS_OPTIONS as readonly number[]).includes(radiusKm)) {
    return { ok: false, error: 'Choose a valid local area.' };
  }

  // The creator is checked like any member. A local-only circle must be
  // started from within its own area.
  const verdict = await checkLocation(input.creatorLocation, { latitude, longitude });
  const creatorLocal = verdict.valid && verdict.distanceKm <= radiusKm;
  if (localOnly && !creatorLocal) {
    return {
      ok: false,
      error: verdict.valid
        ? `A local-only circle must be started from within its area (${formatRadius(radiusKm)}). You appear to be ${formatDistance(verdict.distanceKm)} away.`
        : verdict.reason,
    };
  }

  const upcoming = await prisma.agoraCircle.count({
    where: {
      createdById: participant.userId,
      status: { not: 'CLOSED' },
      startsAt: { gte: now },
    },
  });
  if (upcoming >= MAX_UPCOMING_PER_USER) {
    return {
      ok: false,
      error: `You can have at most ${MAX_UPCOMING_PER_USER} upcoming circles at a time.`,
    };
  }

     // The exact point is stored for the local checks; for online circles the
  // public list shows it rounded to about 1 km (see api/agora/circles).
  const circle = await prisma.agoraCircle.create({
    data: {
      format,
      question,
      placeName,
      latitude,
      longitude,
      startsAt,
      durationMin,
      maxSeats,
      localOnly,
      radiusKm,
      createdById: participant.userId,
      // the creator takes the first seat
      members: {
        create: {
          userId: participant.userId,
          local: creatorLocal,
          checkedAt: verdict.valid ? now : null,
          checkedLat: verdict.valid ? roundCoord(verdict.lat) : null,
          checkedLng: verdict.valid ? roundCoord(verdict.lng) : null,
        },
      },
    },
    select: { id: true },
  });

  revalidatePath('/agora');
  return { ok: true, id: circle.id };
}

export async function joinCircle(
  circleId: string,
  location: DeviceLocation | null = null
): Promise<ActionResult> {
  const participant = await requireParticipant();
  if ('error' in participant) return { ok: false, error: participant.error };

  const circle = await prisma.agoraCircle.findUnique({
    where: { id: String(circleId) },
    include: { _count: { select: { members: true } } },
  });
  if (!circle || circle.status === 'CLOSED' || circleEndsAt(circle) <= new Date()) {
    return { ok: false, error: 'This circle is no longer open.' };
  }

  const existing = await prisma.agoraMember.findUnique({
    where: { circleId_userId: { circleId: circle.id, userId: participant.userId } },
    select: { id: true },
  });
  if (existing) return { ok: true };

   if (circle._count.members >= circle.maxSeats) {
    return { ok: false, error: 'This circle is full.' };
  }

  // Local or visiting? In a local-only circle, only local members may join.
  const verdict = await checkLocation(location, circle);
  const local = verdict.valid && verdict.distanceKm <= circle.radiusKm;
  if (circle.localOnly && !local) {
    return {
      ok: false,
      error: verdict.valid
        ? `This circle is only for people within ${formatRadius(circle.radiusKm)}. You appear to be ${formatDistance(verdict.distanceKm)} away.`
        : verdict.reason,
    };
  }

  await prisma.agoraMember.create({
    data: {
      circleId: circle.id,
      userId: participant.userId,
      local,
      checkedAt: verdict.valid ? new Date() : null,
      checkedLat: verdict.valid ? roundCoord(verdict.lat) : null,
      checkedLng: verdict.valid ? roundCoord(verdict.lng) : null,
    },
  });

  revalidatePath('/agora');
  return { ok: true };
}

export async function leaveCircle(circleId: string): Promise<ActionResult> {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return { ok: false, error: 'Please sign in first.' };

  await prisma.agoraMember.deleteMany({
    where: { circleId: String(circleId), userId },
  });

  revalidatePath('/agora');
  return { ok: true };
}


// ── The live dialogue (online circles) ─────────────────────────

export type MoveKind = 'COMMENT' | 'PROPOSAL' | 'REFINEMENT' | 'COUNTEREXAMPLE' | 'RIVAL';

const MOVE_KINDS: readonly MoveKind[] = [
  'COMMENT',
  'PROPOSAL',
  'REFINEMENT',
  'COUNTEREXAMPLE',
  'RIVAL',
];

export async function postMove(
  circleId: string,
  kind: MoveKind,
  text: string,
  replyToId: string | null
): Promise<ActionResult> {
  const participant = await requireParticipant();
  if ('error' in participant) return { ok: false, error: participant.error };

  if (!MOVE_KINDS.includes(kind)) return { ok: false, error: 'Unknown move.' };

  const body = String(text ?? '').trim();
    if (body.length < 1 || body.length > 500) {
    return { ok: false, error: 'A message can be at most 500 characters.' };
  }

  const circle = await prisma.agoraCircle.findUnique({ where: { id: String(circleId) } });
  if (!circle || circle.status === 'CLOSED') {
    return { ok: false, error: 'This circle is not available.' };
  }
  if (circle.format !== 'ONLINE') {
    return { ok: false, error: 'In-person circles hold their dialogue face to face.' };
  }

  const now = new Date();
  if (now < circle.startsAt) return { ok: false, error: 'The dialogue has not started yet.' };
  if (now >= circleEndsAt(circle)) return { ok: false, error: 'The time for this circle is up.' };

    const member = await prisma.agoraMember.findUnique({
    where: { circleId_userId: { circleId: circle.id, userId: participant.userId } },
    select: { id: true, local: true, checkedAt: true },
  });
  if (!member) return { ok: false, error: 'Only members of this circle can post. Join it first.' };
  if (
    circle.localOnly &&
    !(member.local && member.checkedAt && member.checkedAt >= circle.startsAt)
  ) {
    return { ok: false, error: 'This circle is local only. Confirm your location to take part.' };
  }

    // Messages (COMMENT) and proposals stand alone. Refinements, counterexamples
  // and rival definitions each answer one definition (a proposal or a rival definition).
  let target: string | null = null;
  if (kind === 'REFINEMENT' || kind === 'COUNTEREXAMPLE' || kind === 'RIVAL') {
    if (!replyToId) return { ok: false, error: 'Choose which definition you are responding to.' };
    const answered = await prisma.agoraMove.findUnique({
      where: { id: String(replyToId) },
      select: { circleId: true, kind: true },
    });
    if (
      !answered ||
      answered.circleId !== circle.id ||
      (answered.kind !== 'PROPOSAL' && answered.kind !== 'RIVAL')
    ) {
      return { ok: false, error: 'You can only respond to a proposed definition.' };
    }
    target = String(replyToId);
  }

  const last = await prisma.agoraMove.findFirst({
    where: { circleId: circle.id, authorId: participant.userId },
    orderBy: { createdAt: 'desc' },
    select: { createdAt: true },
  });
    if (last && now.getTime() - last.createdAt.getTime() < 2_000) {
    return { ok: false, error: 'Please wait a moment between messages.' };
  }

  await prisma.agoraMove.create({
    data: {
      circleId: circle.id,
      authorId: participant.userId,
      kind,
      text: body,
      replyToId: target,
    },
  });

  return { ok: true };
}

export async function cancelCircle(circleId: string): Promise<ActionResult> {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return { ok: false, error: 'Please sign in first.' };

  const circle = await prisma.agoraCircle.findUnique({
    where: { id: String(circleId) },
    select: { id: true, createdById: true, status: true, startsAt: true, durationMin: true },
  });
  if (!circle) return { ok: false, error: 'Circle not found.' };
  if (circle.createdById !== userId) {
    return { ok: false, error: 'Only the member who started this circle can cancel it.' };
  }
  if (circle.status === 'CLOSED') return { ok: true };
  if (circleEndsAt(circle) <= new Date()) {
    return { ok: false, error: 'This circle has already ended.' };
  }

  await prisma.agoraCircle.update({ where: { id: circle.id }, data: { status: 'CLOSED' } });

  revalidatePath('/agora');
  return { ok: true };
}


// ── Deleting (My circles) ──────────────────────────────────────

/** Permanently deletes a circle, with its members and conversation. Creator only. */
export async function deleteCircle(circleId: string): Promise<ActionResult> {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return { ok: false, error: 'Please sign in first.' };

  const circle = await prisma.agoraCircle.findUnique({
    where: { id: String(circleId) },
    select: { id: true, createdById: true },
  });
  if (!circle) return { ok: true }; // already gone
  if (circle.createdById !== userId) {
    return { ok: false, error: 'Only the member who started this circle can delete it.' };
  }

  // Members and messages are removed with it (onDelete: Cascade in the schema).
  await prisma.agoraCircle.delete({ where: { id: circle.id } });

  revalidatePath('/agora');
  revalidatePath('/agora/mine');
  return { ok: true };
}


// ── Location confirmation (local-only circles) ─────────────────

/**
 * A member confirms they are (still) within the circle's local area.
 * Local-only online circles require this after the circle has started,
 * before the member can write.
 */
export async function confirmLocation(
  circleId: string,
  location: DeviceLocation | null
): Promise<ActionResult> {
  const participant = await requireParticipant();
  if ('error' in participant) return { ok: false, error: participant.error };

  const circle = await prisma.agoraCircle.findUnique({ where: { id: String(circleId) } });
  if (!circle || circle.status === 'CLOSED') {
    return { ok: false, error: 'This circle is not available.' };
  }

  const member = await prisma.agoraMember.findUnique({
    where: { circleId_userId: { circleId: circle.id, userId: participant.userId } },
    select: { id: true, checkedLat: true, checkedLng: true, checkedAt: true },
  });
  if (!member) return { ok: false, error: 'Join the circle first.' };

  const verdict = await checkLocation(location, circle, {
    lat: member.checkedLat,
    lng: member.checkedLng,
    at: member.checkedAt,
  });
  if (!verdict.valid) return { ok: false, error: verdict.reason };

  const local = verdict.distanceKm <= circle.radiusKm;
  await prisma.agoraMember.update({
    where: { id: member.id },
    data: {
      local,
      checkedAt: new Date(),
      checkedLat: roundCoord(verdict.lat),
      checkedLng: roundCoord(verdict.lng),
    },
  });

  if (circle.localOnly && !local) {
    return {
      ok: false,
      error: `You appear to be ${formatDistance(verdict.distanceKm)} away, outside this circle's area (${formatRadius(circle.radiusKm)}).`,
    };
  }
  return { ok: true };
}