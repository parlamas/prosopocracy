// app/api/agora/circles/route.ts
// Returns open circles within RADIUS_KM of a point.
// POST (not GET) so the searched location is sent in the request body and
// does not end up in URLs or request logs. The location is not saved.
import { NextResponse } from 'next/server';
import { auth } from '../../../../lib/auth';
import { prisma } from '../../../../lib/prisma';
import {
  MAX_DURATION_MIN,
  MAX_RADIUS_KM,
  MIN_RADIUS_KM,
  RADIUS_KM,
  boundingBox,
  circleEndsAt,
  haversineKm,
} from '../../../../lib/agora';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

    const { lat, lng, radiusKm } = (body ?? {}) as {
    lat?: unknown;
    lng?: unknown;
    radiusKm?: unknown;
  };
  const requestedRadius = Number(radiusKm);
  const radius =
        Number.isFinite(requestedRadius) && requestedRadius >= MIN_RADIUS_KM
      ? Math.min(requestedRadius, MAX_RADIUS_KM)
      : RADIUS_KM;
  const latitude = Number(lat);
  const longitude = Number(lng);
  if (
    !Number.isFinite(latitude) ||
    !Number.isFinite(longitude) ||
    Math.abs(latitude) > 90 ||
    Math.abs(longitude) > 180
  ) {
    return NextResponse.json({ error: 'Invalid location.' }, { status: 400 });
  }

  const session = await auth();
  const userId = session?.user?.id ?? '';

  const box = boundingBox(latitude, longitude, radius);
  const now = new Date();
  const earliestStart = new Date(now.getTime() - MAX_DURATION_MIN * 60_000);

  const rows = await prisma.agoraCircle.findMany({
    where: {
      status: { not: 'CLOSED' },
      startsAt: { gte: earliestStart },
      latitude: { gte: box.minLat, lte: box.maxLat },
      longitude: { gte: box.minLng, lte: box.maxLng },
    },
    orderBy: { startsAt: 'asc' },
    take: 200,
    include: {
      _count: { select: { members: true } },
      members: { where: { userId }, select: { id: true } },
    },
  });

  const circles = rows
    .filter((c) => circleEndsAt(c) > now)
    .map((c) => ({
      id: c.id,
      format: c.format,
      question: c.question,
      placeName: c.placeName,
      latitude: c.latitude,
      longitude: c.longitude,
      startsAt: c.startsAt.toISOString(),
      durationMin: c.durationMin,
      maxSeats: c.maxSeats,
      seatsTaken: c._count.members,
      joined: c.members.length > 0,
      isCreator: userId !== '' && c.createdById === userId,
      distanceKm: haversineKm(latitude, longitude, c.latitude, c.longitude),
    }))
        .filter((c) => c.distanceKm <= radius);

  return NextResponse.json({ circles });
}
