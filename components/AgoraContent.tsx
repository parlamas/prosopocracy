// components/AgoraContent.tsx
import Link from 'next/link';
import './AgoraContent.css';
import { HOMEPAGE_TRANSLATIONS, type LanguageCode } from '../lib/homepage-translations';
import type { AgoraText } from '../lib/agora-translations';
import AgoraExplorer from './AgoraExplorer';
import type { RepeatSource } from '../lib/agora';

const FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans:wght@400;600&family=Newsreader:ital,wght@0,600;0,700;1,400&display=swap';

export default function AgoraContent({
  lang,
  t,
    userName,
  repeatFrom = null,
}: {
  lang: LanguageCode;
  t: AgoraText;
  userName: string | null;
  repeatFrom?: RepeatSource | null;
}) {
  const home = HOMEPAGE_TRANSLATIONS[lang] ?? HOMEPAGE_TRANSLATIONS.en!;
  const homeHref = lang === 'en' ? '/' : `/${lang}`;

  return (
    <div className="prosopoRoot" lang={lang} dir={home.dir}>
      <link rel="stylesheet" href={FONTS_HREF} precedence="default" />

      <header className="masthead">
        <div className="wrap mastheadInner">
          <Link href={homeHref} className="wordmark agoraWordmark">
            <b>{home.wordmarkNative}</b> · {home.wordmarkSecondary}
          </Link>
            <nav className="nav">
                        <Link href={homeHref}>{t.navHome}</Link>
            {userName && <Link href="/agora/mine">My circles</Link>}
            <Link href="/agora/login">{userName ?? t.navSignIn}</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap">
            <div className="eyebrow">{t.heroEyebrow}</div>
            <h1 className="thesis">{t.heroThesis}</h1>
            <span className="greekTerm">{t.heroGreekTerm}</span>
                        <p className="lede">{t.heroLede}</p>
          </div>
        </section>

                <AgoraExplorer signedIn={!!userName} repeatFrom={repeatFrom} />

        <section className="section">
          <div className="wrap">
            <div className="sectionLabel">{t.howLabel}</div>
            <h2 className="sectionTitle">{t.howTitle}</h2>
            <div className="ledger">
              {t.steps.map((step, i) => (
                <div className="ledgerRow" key={i}>
                  <div className="ledgerMark">{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="sectionLabel">{t.movesLabel}</div>
            <h2 className="sectionTitle">{t.movesTitle}</h2>
            <p className="sectionIntro">{t.movesIntro}</p>
            <div className="confuseGrid agoraMoves">
              {t.moves.map((move, i) => (
                <div className="confuseItem" key={i}>
                  <div className="term">{move.term}</div>
                  <p className="desc">{move.desc}</p>
                </div>
              ))}
            </div>
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
