// app/el/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import '../styles.css';
import LanguageSwitcher from '../../components/LanguageSwitcher';

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
            <a href="#notconfuse">Όχι Αυτό</a>
            <a href="#definition">Ορισμός</a>
            <a href="#beyond">Πέρα από τη Δημοκρατία</a>
            <a href="#accountability">Ευθύνη</a>
            <a href="#rota">ROTA</a>
            <LanguageSwitcher current="el" />
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

      <section id="notconfuse" className="section">
        <div className="wrap">
          <div className="sectionLabel">Να Μην Συγχέεται Με</div>
          <h2 className="sectionTitle">Εξουσία που ασκείται από όλους &mdash; όχι λατρεία ενός</h2>
          <p className="sectionIntro">
            Η ρίζα πρόσωπο μπορεί να συνδυαστεί με πολύ διαφορετικές καταλήξεις. Μόνο μία
            από αυτές περιγράφει αυτό που σημαίνει η λέξη.
          </p>
          <div className="confuseGrid reveal">
            <div className="confuseItem">
              <span className="mark no">Όχι αυτό</span>
              <div className="term">Προσωπολατρεία</div>
              <span className="suffix">-λατρεία &middot; λατρεία</span>
              <p className="desc">
                Μια λατρεία γύρω από έναν μόνο ηγέτη, ενώ όλοι οι υπόλοιποι παραμένουν
                παθητικοί. Λατρεία προσώπου.
              </p>
            </div>
            <div className="confuseItem">
              <span className="mark no">Όχι αυτό</span>
              <div className="term">Προσωπολαγνεία</div>
              <span className="suffix">-λαγνεία &middot; εμμονή</span>
              <p className="desc">
                Εμμονή με το πρόσωπο ή την εικόνα ενός ηγέτη, αντί για όσα πράττει. Εμμονή με
                την προσωπικότητα.
              </p>
            </div>
            <div className="confuseItem correct">
              <span className="mark yes">Αυτό</span>
              <div className="term">Προσωποκρατία</div>
              <span className="suffix">-κρατία &middot; κράτος, εξουσία</span>
              <p className="desc">
                Εξουσία που κατανέμεται σε κάθε πολίτη, προσωπικά, έναν έναν. Όχι ένα
                πρόσωπο εξυμνημένο &mdash; εξουσία που περνά, αυτοπροσώπως, μέσα από όλους.
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

      <section id="accountability" className="section">
        <div className="wrap">
          <div className="sectionLabel">Κανείς Άλλος για να Κατηγορήσεις</div>
          <h2 className="sectionTitle">Ο διάβολος δεν κρύβεται στις λεπτομέρειες &mdash; οι διάβολοι είναι οι ίδιοι οι πολίτες</h2>
          <div className="reveal">
            <p className="sectionIntro">
              Στα αντιπροσωπευτικά συστήματα, η αποτυχία έχει πάντα πού να κρυφτεί.
            </p>
            <p style={{ marginTop: 18, color: 'var(--ink-soft)', fontSize: 16.5, maxWidth: '62ch' }}>
              «Ο διάβολος κρύβεται στις λεπτομέρειες» γίνεται δικαιολογία: η ευθύνη
              μετατοπίζεται προς απόμακρους τεχνοκράτες, προς ένα σύστημα πολύ πολύπλοκο για
              να αποδοθεί σε ένα μόνο πρόσωπο. Η προσωποκρατία αφαιρεί αυτόν τον κρυψώνα
              δομικά, όχι ηθικά &mdash; ο πολίτης που κατέχει την εξουσία είναι η ίδια η
              λεπτομέρεια. Δεν υπάρχει αλλού διάβολος να βρεθεί.
            </p>
            <div className="quoteBlock">
              Στην προσωποκρατία, δεν θα μπορείς να κατηγορήσεις έναν πρόεδρο, ένα κόμμα ή
              ένα σύστημα για τις αποτυχίες σου. Αν αποτύχεις, είναι επειδή εσύ απέτυχες.
            </div>
          </div>

          <div className="rotaBox reveal" style={{ marginTop: 40 }}>
            <h3>
              Ο Ακρογωνιαίος Λίθος: Οριστική{' '}
              <span style={{ fontWeight: 400, fontSize: 14, color: 'var(--brass)' }}>(Horistics)</span>
            </h3>
            <p style={{ fontStyle: 'italic', color: 'var(--civic-blue)', fontWeight: 600, marginBottom: 4 }}>
              «Οριστική είναι η εύστοχη και αεροστεγής διατύπωση της ειδοποιού διαφοράς
              εννοιών.»
            </p>
            <p style={{ fontStyle: 'italic', color: 'var(--ink-soft)', fontSize: 14, marginBottom: 16 }}>
              &quot;Horistics is the apposite and airtight formulation of the differentia of
              concepts.&quot;
            </p>
            <p>
              Η αφαίρεση κάθε δικαιολογίας λειτουργεί μόνο αν οι πολίτες μπορούν να βλέπουν
              αρκετά καθαρά ώστε να κυβερνούν καλά αφού οι δικαιολογίες εξαφανιστούν. Γι&apos;
              αυτό ο ακρογωνιαίος λίθος της προσωποκρατίας είναι η Οριστική &mdash; η
              επιστήμη που περιγράφει αυτός ο ορισμός. Ένας πολίτης που δεν μπορεί να ορίσει
              με ακρίβεια την ελευθερία, τη δικαιοσύνη ή τη διαφθορά δεν μπορεί να
              αναμένεται να ασκήσει εξουσία πάνω σε αυτές με ακρίβεια. Η προσωποκρατία
              απαιτεί πολίτες ικανούς να βλέπουν πολιτικά· η Οριστική είναι ο τρόπος με τον
              οποίο χτίζεται αυτή η όραση.
            </p>
            <a href="https://horistics.ai" className="rotaLink">
              Εξασκήσου στην Οριστική &rarr;
            </a>
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
            <a href="/el/rota" className="rotaLink">
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
