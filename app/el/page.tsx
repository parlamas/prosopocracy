// app/el/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import '../styles.css';

export default function ProsopocracyPageGreek() {
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
    <div className="prosopoRoot" ref={rootRef} lang="el">
      <header className="masthead">
        <div className="wrap mastheadInner">
          <div className="wordmark">
            <b>ΠΡΟΣΩΠΟΚΡΑΤΙΑ</b> &middot; PROSOPOCRACY
          </div>
          <nav className="nav">
            <a href="#etymology">Ετυμολογία</a>
            <a href="#definition">Ορισμός</a>
            <a href="#beyond">Πέρα από τη Δημοκρατία</a>
            <a href="#rota">ROTA</a>
            <a href="/">English</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">Μια λέξη για την εξουσία που ασκείται αυτοπροσώπως</div>
          <h1 className="thesis">Προσωποκρατία</h1>
          <span className="greekTerm">Prosopocracy</span>
          <p className="lede">
            Προσωποκρατία είναι διακυβέρνηση στην οποία οι πολίτες ασκούν την εξουσία
            προσωπικά, όχι μέσω αντιπροσώπων. Όχι μία ψήφος που δίνεται εκ μέρους τους. Όχι
            μία θητεία που ανατίθεται σε κάποιον άλλο. Η ίδια η εξουσία, στο πρόσωπο.
          </p>
        </div>
      </section>

      <section id="etymology" className="section">
        <div className="wrap">
          <div className="sectionLabel">Ετυμολογία</div>
          <h2 className="sectionTitle">Από τα ελληνικά</h2>
          <p className="sectionIntro">
            Δύο ρίζες, ενωμένες για να ονομάσουν κάτι που δεν είχε, ως τώρα, δικό του καθαρό
            όνομα.
          </p>

          <div className="etymBlock reveal">
            <div className="etymPiece">
              <div className="greek">πρόσωπον</div>
              <div className="gloss">πρόσωπο, άτομο</div>
            </div>
            <div className="etymText">
              <p>
                Η λέξη <strong>πρόσωπον</strong> σημαίνει το άτομο &mdash; τον εαυτό που
                ενεργεί, όχι έναν ρόλο που εκτελείται εκ μέρους κάποιου άλλου. Είναι η ρίζα
                πίσω από τη λατινική <em>persona</em>, και επιβιώνει στη νέα ελληνική στο
                &laquo;νομικό πρόσωπο&raquo;.
              </p>
              <p>
                Σε συνδυασμό με το <strong>-κρατία</strong> (από το <em>κράτος</em>,
                εξουσία), η προσωποκρατία σημαίνει, κυριολεκτικά, εξουσία του προσώπου
                &mdash; εξουσία που παραμένει εκεί όπου βρίσκεται το άτομο, αντί να περνά σε
                έναν αντιπρόσωπο που ενεργεί στη θέση του.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="definition" className="section">
        <div className="wrap">
          <div className="sectionLabel">Ορισμός</div>
          <h2 className="sectionTitle">Τι σημαίνει η λέξη</h2>

          <div className="defBox reveal">
            <div className="term">Προσωποκρατία</div>
            <span className="termGreek">Prosopocracy</span>
            <p className="defEn">
              Προσωποκρατία είναι διακυβέρνηση στην οποία οι πολίτες ασκούν την εξουσία
              προσωπικά, όχι μέσω αντιπροσώπων.
            </p>
            <p className="defEl">
              Prosopocracy is a government in which citizens exercise power personally, not
              through representatives.
            </p>
          </div>
        </div>
      </section>

      <section id="beyond" className="section">
        <div className="wrap">
          <div className="sectionLabel">Όχι Ενάντια στη Δημοκρατία &mdash; Πέρα Από Αυτήν</div>
          <h2 className="sectionTitle">Ενισχύοντας τη λέξη, όχι αντικαθιστώντας την</h2>
          <div className="reveal">
            <p className="sectionIntro">
              Η προσωποκρατία δεν αντικαθιστά τη δημοκρατία &mdash; ολοκληρώνει αυτό στο
              οποίο η λέξη πάντα απέβλεπε.
            </p>
            <p style={{ marginTop: 18, color: 'var(--ink-soft)', fontSize: 16.5, maxWidth: '62ch' }}>
              Η λέξη &laquo;δημοκρατία&raquo; σημαίνει εξουσία του λαού, αλλά δεν λέει τίποτα
              για το πώς ασκείται αυτή η εξουσία. Αφημένο ανοιχτό, αυτό το κενό επέτρεψε στη
              λέξη να καλύψει σχεδόν τα πάντα: ένας πολίτης που ψηφίζει μία φορά κάθε λίγα
              χρόνια για να κυβερνήσει κάποιος άλλος στο όνομά του ονομάζεται δημοκρατία,
              όπως και ένας πολίτης που κυβερνά ο ίδιος, αυτοπροσώπως. Η προσωποκρατία
              ονομάζει το δεύτερο μισό αυτής της υπόσχεσης &mdash; το μέρος που η δημοκρατία
              υπόσχεται αλλά ποτέ δεν εγγυάται. Δεν είναι αντίπαλος της δημοκρατίας &middot;
              είναι ο μηχανισμός που κάνει τη λέξη να σημαίνει αυτό που πάντα ισχυριζόταν.
            </p>
            <div className="quoteBlock">
              Δήμου κράτος, εξουσία του λαού. Προσώπου κράτος, εξουσία στο πρόσωπο. Το
              δεύτερο είναι ο τρόπος με τον οποίο το πρώτο παύει να είναι απλώς μια
              υπόσχεση.
            </div>
          </div>
        </div>
      </section>

      <section id="rota" className="section" style={{ borderBottom: 'none' }}>
        <div className="wrap">
          <div className="sectionLabel">Ο Μηχανισμός</div>
          <h2 className="sectionTitle">Η προσωποκρατία είναι η αρχή. Το ROTA είναι το πώς.</h2>
          <div className="rotaBox reveal">
            <h3>Διακυβέρνηση εκ Περιτροπής</h3>
            <p>
              Η προσωποκρατία ονομάζει το πώς πρέπει να μοιάζει η εξουσία &mdash; ασκούμενη
              από τους ίδιους τους πολίτες, όχι ανατιθέμενη αλλού. Το ROTA είναι η
              συγκεκριμένη πρόταση για το πώς αυτό χτίζεται στην πράξη: πολίτες που
              εναλλάσσονται σε σύντομες θητείες πολιτικού καθήκοντος, ώστε η εξουσία να
              περνά μέσα από όλους αυτοπροσώπως, και κανείς να μην την κρατά αρκετά καιρό
              ώστε να πάψει να είναι δική του.
            </p>
            <a href="https://www.malakia.company/democracy/el" className="rotaLink">
              Διαβάστε την πρόταση ROTA &rarr;
            </a>
          </div>
        </div>
      </section>

      <footer className="prosopoFooter">
        <div className="wrap">
          <p>Προσωποκρατία &middot; Εξουσία που ασκείται αυτοπροσώπως, όχι ανατιθέμενη</p>
        </div>
      </footer>
    </div>
  );
}
