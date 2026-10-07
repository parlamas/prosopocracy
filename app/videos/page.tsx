// app/videos/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import '../styles.css';
import { VIDEOS } from '../../lib/videos';

export const metadata: Metadata = {
  title: 'Videos — Prosopocracy',
  description:
    'Short videos on prosopocracy and civic philosophy, hosted directly on prosopocracy.com rather than through YouTube or another third-party platform.',
  alternates: {
    canonical: '/videos',
  },
};

export default function VideosIndexPage() {
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
        A Horistics project &middot; by &copy; Isidoros Parlamas
      </div>

      <header className="masthead">
        <div className="wrap mastheadInner">
          <div className="wordmark">
            <b>PROSOPOCRACY</b> &middot; Videos
          </div>
          <nav className="nav">
            <a href="/">Home</a>
            <span aria-hidden="true"> | </span>
            <a href="/rota">ROTA</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">Hosted here, not on YouTube</div>
          <h1 className="thesis">Videos</h1>
          <p className="lede">
            A growing series of short videos, hosted directly on prosopocracy.com rather
            than through a third-party platform.
          </p>
        </div>
      </section>

      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="wrap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 24,
            }}
          >
            {VIDEOS.map((v) => (
              <Link
                key={v.slug}
                href={`/videos/${v.slug}`}
                className="rotaBox"
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
              >
                <h3 style={{ marginTop: 0 }}>{v.title}</h3>
                <p>{v.description}</p>
              </Link>
            ))}
          </div>
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
