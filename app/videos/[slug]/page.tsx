// app/videos/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../../styles.css';
import { VIDEOS, getVideoBySlug, videoUrl } from '../../../lib/videos';

export function generateStaticParams() {
  return VIDEOS.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const video = getVideoBySlug(slug);
  if (!video) return {};

  return {
    title: `${video.title} — Prosopocracy`,
    description: video.description,
    alternates: {
      canonical: `/videos/${video.slug}`,
    },
  };
}

export default async function VideoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const video = getVideoBySlug(slug);
  if (!video) notFound();

  return (
    <div className="prosopoRoot">
      <div
        className="topRibbon"
        style={{
          width: '100%',
          textAlign: 'center',
          padding: '6px 12px',
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 11,
          letterSpacing: '0.04em',
          color: 'var(--ink-soft)',
          background: 'var(--paper-alt, rgba(0,0,0,0.02))',
          borderBottom: '1px solid var(--line)',
        }}
      >
        A Horistics project &middot; by Isidoros Parlamas
      </div>

      <header className="masthead">
        <div className="wrap mastheadInner">
          <div className="wordmark">
            <b>PROSOPOCRACY</b> &middot; Videos
          </div>
          <nav className="nav">
            <a href="/">Home</a>
            <span aria-hidden="true"> | </span>
            <a href="/videos">All Videos</a>
            <span aria-hidden="true"> | </span>
            <a href="/rota">ROTA</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <h1 className="thesis" style={{ fontSize: '2rem' }}>{video.title}</h1>
          <p className="lede">{video.description}</p>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="wrap">
          <video
            controls
            preload="metadata"
            style={{
              width: '100%',
              maxWidth: 960,
              display: 'block',
              margin: '0 auto',
              background: '#000',
              borderRadius: 4,
            }}
          >
            <source src={videoUrl(video.filename)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <footer className="prosopoFooter">
        <div className="wrap">
          <p>Prosopocracy &middot; Power exercised in person, not delegated</p>
        </div>
      </footer>
    </div>
  );
}
