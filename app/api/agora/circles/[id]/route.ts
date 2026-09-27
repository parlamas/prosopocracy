// app/api/agora/circles/[id]/route.ts
// Everything the circle page needs: details, members, moves, and what the
// signed-in member may do. Polled every 3 seconds while the circle is open.
// Readable by anyone: an agora is public, and the record stays readable
// after the circle ends. Only members can post (see postMove in actions.ts).
import { NextResponse } from 'next/server';
import { auth } from '../../../../../lib/auth';
import { prisma } from '../../../../../lib/prisma';
import { circleEndsAt } from '../../../../../lib/agora';

export const dynamic = 'force-dynamic';

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();
  const userId = session?.user?.id ?? '';

  const c = await prisma.agoraCircle.findUnique({
    where: { id },
    include: {
      createdBy: { select: { username: true } },
      members: {
        orderBy: { joinedAt: 'asc' },
        select: { userId: true, user: { select: { username: true } } },
      },
      moves: {
        orderBy: { createdAt: 'asc' },
        select: {
          id: true,
          kind: true,
          text: true,
          replyToId: true,
          createdAt: true,
          authorId: true,
          author: { select: { username: true } },
        },
      },
    },
  });

  if (!c) return NextResponse.json({ error: 'Circle not found.' }, { status: 404 });

  const now = new Date();
  const endsAt = circleEndsAt(c);
  const phase =
    c.status === 'CLOSED'
      ? 'cancelled'
      : now < c.startsAt
        ? 'upcoming'
        : now < endsAt
          ? 'live'
          : 'ended';

  return NextResponse.json({
    circle: {
      id: c.id,
      format: c.format,
      question: c.question,
      placeName: c.placeName,
      startsAt: c.startsAt.toISOString(),
      durationMin: c.durationMin,
      maxSeats: c.maxSeats,
      creatorName: c.createdBy.username,
    },
    phase,
    members: c.members.map((m) => ({ username: m.user.username })),
    moves: c.moves.map((m) => ({
      id: m.id,
      kind: m.kind,
      text: m.text,
      replyToId: m.replyToId,
      authorName: m.author.username,
      createdAt: m.createdAt.toISOString(),
      mine: userId !== '' && m.authorId === userId,
    })),
    me: {
      signedIn: userId !== '',
      isMember: userId !== '' && c.members.some((m) => m.userId === userId),
      isCreator: userId !== '' && c.createdById === userId,
    },
    serverNow: now.toISOString(),
  });
}
