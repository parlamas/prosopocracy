// app/agora/mine/page.tsx
// "My circles": every circle the member started or joined, upcoming and past,
// each linking to its page (and record), with a Repeat button.
import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import '../../styles.css';
import '../../../components/AgoraContent.css';
import '../../../components/AgoraExplorer.css';
import '../../../components/AgoraCircleRoom.css';
import LocalTime from '../../../components/LocalTime';
import MyCircleActions from '../../../components/MyCircleActions';
import CircleLink from '../../../components/CircleLink';
import { auth } from '../../../lib/auth';
import { prisma } from '../../../lib/prisma';
import { circleEndsAt } from '../../../lib/agora';
import { HOMEPAGE_TRANSLATIONS } from '../../../lib/homepage-translations';

export const metadata: Metadata = {
  title: 'My circles · Agora · Prosopocracy',
};

const FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans:wght@400;600&family=Newsreader:ital,wght@0,600;0,700;1,400&display=swap';

type Row = {
  id: string;
  format: 'ONLINE' | 'IN_PERSON';
  question: string;
  placeName: string;
  startsAt: string;
  durationMin: number;
  maxSeats: number;
  memberCount: number;
  messageCount: number;
  status: 'Upcoming' | 'Live now' | 'Ended' | 'Cancelled';
  started: boolean;
};

function CircleList({ rows }: { rows: Row[] }) {
  return (
    <ul className="agoraList">
      {rows.map((r) => (
        <li key={r.id} className="agoraCircleItem">
          <div>
            <span className={r.format === 'ONLINE' ? 'agoraFormat' : 'agoraFormat inPerson'}>
              {r.format === 'ONLINE' ? 'Online' : 'In person'}
            </span>
            <h3>
              <Link href={`/agora/circle/${r.id}`} className="agoraCircleLink">
                {r.question}
              </Link>
            </h3>
            <p className="agoraMeta">
              {r.placeName} · <LocalTime iso={r.startsAt} /> · {r.durationMin} min
            </p>
            <p className="agoraMeta">
              {r.status === 'Live now' ? <span className="agoraNow">Live now</span> : r.status} ·{' '}
              {r.started ? 'You started this' : 'You joined'} · {r.memberCount}/{r.maxSeats} members
              {r.messageCount > 0 &&
                                ` · ${r.messageCount} message${r.messageCount === 1 ? '' : 's'}`}
            </p>
            <CircleLink id={r.id} />
          </div>
                    <div className="agoraCircleAction">
            <MyCircleActions id={r.id} started={r.started} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default async function MyCirclesPage() {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) redirect('/agora/login');

  const circles = await prisma.agoraCircle.findMany({
    where: {
      OR: [{ createdById: userId }, { members: { some: { userId } } }],
    },
    orderBy: { startsAt: 'desc' },
    take: 200,
    include: { _count: { select: { members: true, moves: true } } },
  });

  const now = new Date();
  const rows: Row[] = circles.map((c) => ({
    id: c.id,
    format: c.format,
    question: c.question,
    placeName: c.placeName,
    startsAt: c.startsAt.toISOString(),
    durationMin: c.durationMin,
    maxSeats: c.maxSeats,
    memberCount: c._count.members,
    messageCount: c._count.moves,
    status:
      c.status === 'CLOSED'
        ? 'Cancelled'
        : circleEndsAt(c) <= now
          ? 'Ended'
          : now >= c.startsAt
            ? 'Live now'
            : 'Upcoming',
    started: c.createdById === userId,
  }));

  // Current circles soonest first; past circles newest first.
  const current = rows
    .filter((r) => r.status === 'Upcoming' || r.status === 'Live now')
    .reverse();
  const past = rows.filter((r) => r.status === 'Ended' || r.status === 'Cancelled');

  const home = HOMEPAGE_TRANSLATIONS.en!;

  return (
    <div className="prosopoRoot" lang="en" dir="ltr">
      <link rel="stylesheet" href={FONTS_HREF} precedence="default" />

      <header className="masthead">
        <div className="wrap mastheadInner">
          <Link href="/" className="wordmark agoraWordmark">
            <b>{home.wordmarkNative}</b> · {home.wordmarkSecondary}
          </Link>
          <nav className="nav">
            <Link href="/agora">Agora</Link>
            <Link href="/agora/login">{session?.user?.name}</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="wrap">
            <div className="sectionLabel">Agora</div>
            <h1 className="sectionTitle">My circles</h1>
            <p className="sectionIntro">
              Every circle you started or joined. Open one to see its conversation and record, or
              press Repeat to start a new circle with the same issue and settings.
            </p>

            <h2 className="sectionLabel" style={{ marginTop: 40 }}>
              Upcoming and live
            </h2>
            {current.length > 0 ? (
              <CircleList rows={current} />
            ) : (
              <p className="agoraEmpty">
                None right now. <Link href="/agora">Find or start a circle</Link>.
              </p>
            )}

            <h2 className="sectionLabel" style={{ marginTop: 48 }}>
              Past circles
            </h2>
            {past.length > 0 ? (
              <CircleList rows={past} />
            ) : (
              <p className="agoraEmpty">No past circles yet.</p>
            )}
          </div>
        </section>
      </main>

      <footer className="prosopoFooter">
        <div className="wrap">
          <p>{home.footerText}</p>
        </div>
      </footer>
    </div>
  );
}