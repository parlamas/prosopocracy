// components/RotaContent.tsx
'use client';

import { useEffect, useRef } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { RotaText } from '../lib/rota-translations';
import { HOMEPAGE_TRANSLATIONS, LanguageCode } from '../lib/homepage-translations';

const DIAL_COLORS = {
  seg1: '#DED4B9',
  seg2: '#2C3A55',
  seg3: '#4A5D52',
  seg4: '#A9824E',
};

export default function RotaContent({ lang, t }: { lang: LanguageCode; t: RotaText }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const dir = HOMEPAGE_TRANSLATIONS[lang]?.dir ?? 'ltr';
  const homeHref = lang === 'en' ? '/' : `/${lang}`;

  useEffect(() => {
    const els = rootRef.current?.querySelectorAll('.reveal');
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="prosopoRoot" ref={rootRef} lang={lang} dir={dir}>
      <header className="masthead">
        <div className="wrap mastheadInner">
          <div className="wordmark">
            <b>ROTA</b> &middot; {t.wordmarkSecondary}
          </div>
          <nav className="nav">
            <a href={homeHref}>{t.navBack}</a>
            <a href="#argument">{t.navArgument}</a>
            <a href="#precedent">{t.navPrecedent}</a>
            <a href="#rotation">{t.navRotation}</a>
            <a href="#fund">{t.navSupport}</a>
            <LanguageSwitcher current={lang} />
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">{t.heroEyebrow}</div>
          <h1 className="thesis">{t.heroThesis}</h1>
          <p className="lede">{t.heroLede}</p>
          <div className="heroMeta">
            <div><strong>{t.heroMetaUnit}</strong>{t.heroMeta1Desc}</div>
            <div><strong>{t.heroMetaUnit}</strong>{t.heroMeta2Desc}</div>
            <div><strong>{t.heroMetaUnit}</strong>{t.heroMeta3Desc}</div>
          </div>
        </div>
      </section>

      <section id="argument" className="section">
        <div className="wrap">
          <div className="sectionLabel">{t.argLabel}</div>
          <h2 className="sectionTitle">{t.argTitle}</h2>
          <p className="sectionIntro">{t.argIntro}</p>

          <div className="ledger reveal">
            {[
              [t.claim1Title, t.claim1Body],
              [t.claim2Title, t.claim2Body],
              [t.claim3Title, t.claim3Body],
              [t.claim4Title, t.claim4Body],
              [t.claim5Title, t.claim5Body],
            ].map(([title, body], i) => (
              <div className="ledgerRow" key={i}>
                <div className="ledgerMark">{t.claimWord} {i + 1}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="precedent" className="section">
        <div className="wrap">
          <div className="sectionLabel">{t.precedentLabel}</div>
          <h2 className="sectionTitle">{t.precedentTitle}</h2>
          <div className="precedentGrid reveal">
            <div>
              <p>{t.precedentPara1}</p>
              <p>{t.precedentPara2}</p>
              <p>{t.precedentPara3}</p>
            </div>
            <div className="quoteBlock">{t.precedentQuote}</div>
          </div>
        </div>
      </section>

      <section id="rotation" className="section dialSection">
        <div className="wrap">
          <div className="sectionLabel">{t.rotationLabel}</div>
          <h2 className="sectionTitle">{t.rotationTitle}</h2>
          <p className="sectionIntro">{t.rotationIntro}</p>

          <div className="dialWrap reveal">
            <svg
              className="dialSvg"
              viewBox="0 0 320 320"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label={t.dialAriaLabel}
            >
              <circle cx="160" cy="160" r="140" fill="none" stroke="#C9BD9D" strokeWidth="1" />
              <path d="M 160 160 L 160 20 A 140 140 0 0 1 281.2 90.1 Z" fill={DIAL_COLORS.seg1} className="dialSeg" />
              <path d="M 160 160 L 281.2 90.1 A 140 140 0 0 1 296.3 188.9 Z" fill={DIAL_COLORS.seg2} className="dialSeg" />
              <path d="M 160 160 L 296.3 188.9 A 140 140 0 0 1 235.6 283.0 Z" fill={DIAL_COLORS.seg3} className="dialSeg" />
              <path d="M 160 160 L 235.6 283.0 A 140 140 0 0 1 160 20 Z" fill={DIAL_COLORS.seg4} className="dialSeg" />
              <circle cx="160" cy="160" r="46" fill="#E9E2CF" stroke="#C9BD9D" strokeWidth="1" />
              <text x="160" y="155" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#4B4E54" letterSpacing="0.5">
                {t.dialCenterWord1}
              </text>
              <text x="160" y="172" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="#4B4E54" letterSpacing="0.5">
                {t.dialCenterWord2}
              </text>
            </svg>
            <div className="dialLegend">
              <div className="dialLegendItem">
                <div className="dialSwatch" style={{ background: DIAL_COLORS.seg1, border: '1px solid #C9BD9D' }} />
                <div>
                  <h4>{t.legend1Title}</h4>
                  <p>{t.legend1Desc}</p>
                </div>
              </div>
              <div className="dialLegendItem">
                <div className="dialSwatch" style={{ background: DIAL_COLORS.seg2 }} />
                <div>
                  <h4>{t.legend2Title}</h4>
                  <p>{t.legend2Desc}</p>
                </div>
              </div>
              <div className="dialLegendItem">
                <div className="dialSwatch" style={{ background: DIAL_COLORS.seg3 }} />
                <div>
                  <h4>{t.legend3Title}</h4>
                  <p>{t.legend3Desc}</p>
                </div>
              </div>
              <div className="dialLegendItem">
                <div className="dialSwatch" style={{ background: DIAL_COLORS.seg4 }} />
                <div>
                  <h4>{t.legend4Title}</h4>
                  <p>{t.legend4Desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="questions" className="section">
        <div className="wrap">
          <div className="sectionLabel">{t.questionsLabel}</div>
          <h2 className="sectionTitle">{t.questionsTitle}</h2>
          <p className="sectionIntro">{t.questionsIntro}</p>
          <div className="questions reveal">
            <div className="qRow">
              <h4>{t.q1Title}</h4>
              <p>{t.q1Body}</p>
            </div>
            <div className="qRow">
              <h4>{t.q2Title}</h4>
              <p>{t.q2Body}</p>
            </div>
            <div className="qRow">
              <h4>{t.q3Title}</h4>
              <p>{t.q3Body}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="fund" className="section fund">
        <div className="wrap">
          <div className="sectionLabel">{t.fundLabel}</div>
          <h2 className="sectionTitle">{t.fundTitle}</h2>
          <p className="sectionIntro">{t.fundIntro}</p>

          <div className="fundBox reveal">
            <h3>{t.fundBoxTitle}</h3>
            <ul className="fundList">
              <li>{t.fundList1}</li>
              <li>{t.fundList2}</li>
              <li>{t.fundList3}</li>
            </ul>
            {/* TODO: replace href with your real payment processor link (Stripe / Donorbox / Open Collective) */}
            <a href="#" className="ctaBtn">{t.ctaBtnText}</a>
            <p className="ctaNote">{t.ctaNote}</p>
          </div>
        </div>
      </section>

      <footer className="prosopoFooter">
        <div className="wrap">
          <p>{t.footerText}</p>
        </div>
      </footer>
    </div>
  );
}
