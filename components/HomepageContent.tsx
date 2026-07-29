// components/HomepageContent.tsx
'use client';

import { useEffect, useRef } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { HomepageText, LanguageCode } from '../lib/homepage-translations';

// These two lines are a fixed bilingual (English + Greek) epigraph and are
// intentionally NOT translated — same convention as the original EN/EL/ES
// pages, where both quotes appear verbatim regardless of page language.
const HORISTICS_QUOTE_EN =
  '"Horistics is the apposite and airtight formulation of the differentia of concepts."';
const HORISTICS_QUOTE_EL =
  '«Οριστική είναι η εύστοχη και αεροστεγής διατύπωση της ειδοποιού διαφοράς εννοιών.»';

export default function HomepageContent({ lang, t }: { lang: LanguageCode; t: HomepageText }) {
  const rootRef = useRef<HTMLDivElement>(null);

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
    <div className="prosopoRoot" ref={rootRef} lang={lang} dir={t.dir}>
      <header className="masthead">
        <div className="wrap mastheadInner">
          <div className="wordmark">
            <b>{t.wordmarkNative}</b> &middot; {t.wordmarkSecondary}
          </div>
          <nav className="nav">
            <a href="#etymology">{t.navEtymology}</a>
            <a href="#notconfuse">{t.navNotThis}</a>
            <a href="#definition">{t.navDefinition}</a>
            <a href="#beyond">{t.navBeyond}</a>
            <a href="#accountability">{t.navAccountability}</a>
            <a href="#rota">ROTA</a>
            <LanguageSwitcher current={lang} />
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">{t.heroEyebrow}</div>
          <h1 className="thesis">{t.heroThesis}</h1>
          <span className="greekTerm">{t.heroGreekTerm}</span>
          <p className="lede">{t.heroLede}</p>
        </div>
      </section>

      <section id="etymology" className="section">
        <div className="wrap">
          <div className="sectionLabel">{t.etymLabel}</div>
          <h2 className="sectionTitle">{t.etymTitle}</h2>
          <p className="sectionIntro">{t.etymIntro}</p>

          <div className="etymBlock reveal">
            <div className="etymPiece">
              <div className="greek">πρόσωπον</div>
              <div className="gloss">{t.etymGloss}</div>
            </div>
            <div className="etymText">
              <p>{t.etymText1}</p>
              <p>{t.etymText2}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="notconfuse" className="section">
        <div className="wrap">
          <div className="sectionLabel">{t.notConfuseLabel}</div>
          <h2 className="sectionTitle">{t.notConfuseTitle}</h2>
          <p className="sectionIntro">{t.notConfuseIntro}</p>
          <div className="confuseGrid reveal">
            <div className="confuseItem">
              <span className="mark no">{t.nc1Mark}</span>
              <div className="term">Προσωπολατρεία</div>
              <span className="suffix">-λατρεία &middot; latreia</span>
              <p className="desc">{t.nc1Desc}</p>
            </div>
            <div className="confuseItem">
              <span className="mark no">{t.nc2Mark}</span>
              <div className="term">Προσωπολαγνεία</div>
              <span className="suffix">-λαγνεία &middot; lagneia</span>
              <p className="desc">{t.nc2Desc}</p>
            </div>
            <div className="confuseItem correct">
              <span className="mark yes">{t.nc3Mark}</span>
              <div className="term">Προσωποκρατία</div>
              <span className="suffix">-κρατία &middot; kratos</span>
              <p className="desc">{t.nc3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="definition" className="section">
        <div className="wrap">
          <div className="sectionLabel">{t.defLabel}</div>
          <h2 className="sectionTitle">{t.defTitle}</h2>

          <div className="defBox reveal">
            <div className="term">{t.defTermNative}</div>
            <span className="termGreek">{t.defTermSecondary}</span>
            <p className="defEn">{t.defTextNative}</p>
            <p className="defEl">{t.defTextSecondary}</p>
          </div>
        </div>
      </section>

      <section id="beyond" className="section">
        <div className="wrap">
          <div className="sectionLabel">{t.beyondLabel}</div>
          <h2 className="sectionTitle">{t.beyondTitle}</h2>
          <div className="reveal">
            <p className="sectionIntro">{t.beyondIntro}</p>
            <p style={{ marginTop: 18, color: 'var(--ink-soft)', fontSize: 16.5, maxWidth: '62ch' }}>
              {t.beyondBody}
            </p>
            <div className="quoteBlock">{t.beyondQuote}</div>
          </div>
        </div>
      </section>

      <section id="accountability" className="section">
        <div className="wrap">
          <div className="sectionLabel">{t.accLabel}</div>
          <h2 className="sectionTitle">{t.accTitle}</h2>
          <div className="reveal">
            <p className="sectionIntro">{t.accIntro}</p>
            <p style={{ marginTop: 18, color: 'var(--ink-soft)', fontSize: 16.5, maxWidth: '62ch' }}>
              {t.accBody}
            </p>
            <div className="quoteBlock">{t.accQuote}</div>
          </div>

          <div className="rotaBox reveal" style={{ marginTop: 40 }}>
            <h3>
              {t.rotaBoxTitle}{' '}
              <span style={{ fontWeight: 400, fontSize: 14, color: 'var(--brass)' }}>(Οριστική)</span>
            </h3>
            <p style={{ fontStyle: 'italic', color: 'var(--civic-blue)', fontWeight: 600, marginBottom: 4 }}>
              {HORISTICS_QUOTE_EN}
            </p>
            <p style={{ fontStyle: 'italic', color: 'var(--ink-soft)', fontSize: 14, marginBottom: 16 }}>
              {HORISTICS_QUOTE_EL}
            </p>
            <p>{t.rotaBoxBody1}</p>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)', marginBottom: 16 }}>{t.rotaBoxBody2}</p>
            <a href="https://horistics.ai" className="rotaLink">
              {t.rotaBoxLinkText}
            </a>
          </div>
        </div>
      </section>

      <section id="rota" className="section" style={{ borderBottom: 'none' }}>
        <div className="wrap">
          <div className="sectionLabel">{t.finalLabel}</div>
          <h2 className="sectionTitle">{t.finalTitle}</h2>
          <div className="rotaBox reveal">
            <h3>{t.finalBoxTitle}</h3>
            <p>{t.finalBoxBody}</p>
            <a href={t.finalBoxLinkHref} className="rotaLink">
              {t.finalBoxLinkText}
            </a>
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
