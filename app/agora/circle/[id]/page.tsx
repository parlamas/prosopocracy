// app/agora/circle/[id]/page.tsx
// One circle: its details, members and the dialogue (live, or the saved record).
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import '../../../styles.css';
import '../../../../components/AgoraContent.css';
import AgoraCircleRoom from '../../../../components/AgoraCircleRoom';
import { auth } from '../../../../lib/auth';
import { prisma } from '../../../../lib/prisma';
import { HOMEPAGE_TRANSLATIONS } from '../../../../lib/homepage-translations';

const FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans:wght@400;600&family=Newsreader:ital,wght@0,600;0,700;1,400&display=swap';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
    const circle = await prisma.agoraCircle.findUnique({
    where: { id },
    select: { question: true, format: true, placeName: true },
  });
  if (!circle) return { title: 'Agora · Prosopocracy' };
  const description = `${circle.format === 'ONLINE' ? 'Online' : 'In person'} discussion circle · ${circle.placeName}. Join on prosopocracy.com.`;
  return {
    title: `${circle.question} · Agora · Prosopocracy`,
    description,
    openGraph: { title: circle.question, description, siteName: 'Prosopocracy' },
  };
}

export default async function AgoraCirclePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const circle = await prisma.agoraCircle.findUnique({ where: { id }, select: { id: true } });
  if (!circle) notFound();

  const session = await auth();
  const userName = session?.user?.name ?? null;
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
            {userName && <Link href="/agora/mine">My circles</Link>}
            <Link href="/agora/login">{userName ?? 'Sign in'}</Link>
          </nav>
        </div>
      </header>

      <main>
        <AgoraCircleRoom circleId={circle.id} />
      </main>

      <footer className="prosopoFooter">
        <div className="wrap">
          <p>{home.footerText}</p>
        </div>
      </footer>
    </div>
  );
}
