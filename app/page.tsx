// app/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import './styles.css';

export default function ProsopocracyPage() {
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
    <div className="prosopoRoot" ref={rootRef}>
      <header className="masthead">
        <div className="wrap mastheadInner">
          <div className="wordmark">
            <b>PROSOPOCRACY</b> &middot; ΠΡΟΣΩΠΟΚΡΑΤΙΑ
          </div>
          <nav className="nav">
            <a href="#etymology">Etymology</a>
            <a href="#definition">Definition</a>
            <a href="#beyond">Beyond Democracy</a>
            <a href="#rota">ROTA</a>
            <a href="/el">Ελληνικά</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">A word for power exercised in person</div>
          <h1 className="thesis">Prosopocracy</h1>
          <span className="greekTerm">Προσωποκρατία</span>
          <p className="lede">
            Prosopocracy is a government in which citizens exercise power personally, not
            through representatives. Not a vote cast on their behalf. Not a term of office
            delegated to someone else. The power itself, in the person.
          </p>
        </div>
      </section>

      <section id="etymology" className="section">
        <div className="wrap">
          <div className="sectionLabel">Etymology</div>
          <h2 className="sectionTitle">From the Greek</h2>
          <p className="sectionIntro">
            Two roots, put together to name something that hasn&apos;t had a clean name of its own.
          </p>

          <div className="etymBlock reveal">
            <div className="etymPiece">
              <div className="greek">πρόσωπον</div>
              <div className="gloss">prósopon &middot; person, face</div>
            </div>
            <div className="etymText">
              <p>
                <strong>πρόσωπον</strong> (prósopon) means person &mdash; the self who acts,
                not a role performed on someone&apos;s behalf. It&apos;s the root behind the
                Latin <em>persona</em>, and it survives in Modern Greek in <em>νομικό
                πρόσωπο</em>, &quot;legal person.&quot;
              </p>
              <p>
                Paired with <strong>-cracy</strong> (from <em>kratos</em>, power or rule),
                prosopocracy means, literally, rule by the person &mdash; power that stays
                where the person is, rather than passing to a face acting in their place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="definition" className="section">
        <div className="wrap">
          <div className="sectionLabel">Definition</div>
          <h2 className="sectionTitle">What the word means</h2>

          <div className="defBox reveal">
            <div className="term">Prosopocracy</div>
            <span className="termGreek">Προσωποκρατία</span>
            <p className="defEn">
              Prosopocracy is a government in which citizens exercise power personally, not
              through representatives.
            </p>
            <p className="defEl">
              Προσωποκρατία είναι διακυβέρνηση στην οποία οι πολίτες ασκούν την εξουσία
              προσωπικά, όχι μέσω αντιπροσώπων.
            </p>
          </div>
        </div>
      </section>

      <section id="beyond" className="section">
        <div className="wrap">
          <div className="sectionLabel">Not Against Democracy &mdash; Beyond It</div>
          <h2 className="sectionTitle">Reinforcing the word, not replacing it</h2>
          <div className="reveal">
            <p className="sectionIntro">
              Prosopocracy doesn&apos;t replace democracy &mdash; it completes what the word
              was always reaching for.
            </p>
            <p style={{ marginTop: 18, color: 'var(--ink-soft)', fontSize: 16.5, maxWidth: '62ch' }}>
              &quot;Democracy&quot; means rule by the people, but says nothing about how that
              rule is exercised. Left open, that gap has let the word cover almost anything:
              a citizen voting once every few years for someone else to rule in their name
              gets called democracy, and so does a citizen ruling directly, in person.
              Prosopocracy names the second half of that promise &mdash; the part democracy
              gestures at but never guarantees. It isn&apos;t a rival to democracy; it&apos;s
              the mechanism that makes the word mean what it always claimed to.
            </p>
            <div className="quoteBlock">
              Demos kratos, power of the people. Prosopo kratos, power in the person. The
              second is how the first stops being a promise.
            </div>
          </div>
        </div>
      </section>

      <section id="rota" className="section" style={{ borderBottom: 'none' }}>
        <div className="wrap">
          <div className="sectionLabel">The Mechanism</div>
          <h2 className="sectionTitle">Prosopocracy is the principle. ROTA is how.</h2>
          <div className="rotaBox reveal">
            <h3>Government by Rotation</h3>
            <p>
              Prosopocracy names what power should look like &mdash; exercised by citizens
              themselves, not delegated away. ROTA is the specific proposal for how to build
              that in practice: citizens rotating through short terms of civic duty, so that
              power passes through everyone in person, and no one holds it long enough for it
              to stop being theirs.
            </p>
            <a href="https://www.malakia.company/democracy" className="rotaLink">
              Read the ROTA proposal &rarr;
            </a>
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
