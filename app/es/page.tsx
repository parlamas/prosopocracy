// app/es/page.tsx
'use client';

import { useEffect, useRef } from 'react';
import '../styles.css';
import LanguageSwitcher from '../../components/LanguageSwitcher';

export default function ProsopocracyPageSpanish() {
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
    <div className="prosopoRoot" ref={rootRef} lang="es">
      <header className="masthead">
        <div className="wrap mastheadInner">
          <div className="wordmark">
            <b>PROSOPOCRACIA</b> &middot; PROSOPOCRACY
          </div>
          <nav className="nav">
            <a href="#etymology">Etimología</a>
            <a href="#notconfuse">No Esto</a>
            <a href="#definition">Definición</a>
            <a href="#beyond">Más Allá de la Democracia</a>
            <a href="#rota">ROTA</a>
            <LanguageSwitcher current="es" />
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">Una palabra para el poder ejercido en persona</div>
          <h1 className="thesis">Prosopocracia</h1>
          <span className="greekTerm">Prosopocracy</span>
          <p className="lede">
            La prosopocracia es un gobierno en el que los ciudadanos ejercen el poder
            personalmente, no a través de representantes. No un voto emitido en su nombre.
            No un mandato delegado a otra persona. El poder mismo, en la persona.
          </p>
        </div>
      </section>

      <section id="etymology" className="section">
        <div className="wrap">
          <div className="sectionLabel">Etimología</div>
          <h2 className="sectionTitle">Del griego</h2>
          <p className="sectionIntro">
            Dos raíces, unidas para nombrar algo que hasta ahora no tenía un nombre propio y
            preciso.
          </p>

          <div className="etymBlock reveal">
            <div className="etymPiece">
              <div className="greek">πρόσωπον</div>
              <div className="gloss">persona, rostro</div>
            </div>
            <div className="etymText">
              <p>
                La palabra griega <strong>πρόσωπον</strong> (prósopon) significa persona
                &mdash; el yo que actúa, no un papel desempeñado en nombre de otro. Es la
                raíz detrás del latín <em>persona</em>, y sobrevive en el griego moderno en{' '}
                <em>νομικό πρόσωπο</em>, &laquo;persona jurídica&raquo;.
              </p>
              <p>
                Combinada con <strong>-cracia</strong> (del griego <em>kratos</em>, poder),
                prosopocracia significa, literalmente, poder de la persona &mdash; un poder
                que permanece donde está la persona, en lugar de pasar a un representante
                que actúa en su lugar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="notconfuse" className="section">
        <div className="wrap">
          <div className="sectionLabel">No Confundir Con</div>
          <h2 className="sectionTitle">Poder ejercido por todos &mdash; no venerado en uno solo</h2>
          <p className="sectionIntro">
            La raíz griega πρόσωπο (persona) puede combinarse con terminaciones muy
            distintas. Solo una de ellas describe lo que significa esta palabra.
          </p>
          <div className="confuseGrid reveal">
            <div className="confuseItem">
              <span className="mark no">No es esto</span>
              <div className="term">Προσωπολατρεία</div>
              <span className="suffix">-λατρεία &middot; latreia, adoración</span>
              <p className="desc">
                Un culto construido alrededor de un único gobernante, venerado, mientras
                todos los demás permanecen pasivos. Culto a la personalidad.
              </p>
            </div>
            <div className="confuseItem">
              <span className="mark no">No es esto</span>
              <div className="term">Προσωπολαγνεία</div>
              <span className="suffix">-λαγνεία &middot; lagneia, obsesión</span>
              <p className="desc">
                Fijación en el rostro o la imagen de un líder, en lugar de en lo que
                realmente hace. Obsesión con la personalidad.
              </p>
            </div>
            <div className="confuseItem correct">
              <span className="mark yes">Esto</span>
              <div className="term">Προσωποκρατία</div>
              <span className="suffix">-κρατία &middot; kratos, poder</span>
              <p className="desc">
                Poder distribuido en cada ciudadano, personalmente, uno a uno. No una persona
                exaltada &mdash; poder que pasa, en persona, a través de todos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="definition" className="section">
        <div className="wrap">
          <div className="sectionLabel">Definición</div>
          <h2 className="sectionTitle">Qué significa la palabra</h2>

          <div className="defBox reveal">
            <div className="term">Prosopocracia</div>
            <span className="termGreek">Prosopocracy</span>
            <p className="defEn">
              La prosopocracia es un gobierno en el que los ciudadanos ejercen el poder
              personalmente, no a través de representantes.
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
          <div className="sectionLabel">No en Contra de la Democracia &mdash; Más Allá de Ella</div>
          <h2 className="sectionTitle">Reforzando la palabra, no reemplazándola</h2>
          <div className="reveal">
            <p className="sectionIntro">
              La prosopocracia no reemplaza a la democracia &mdash; completa aquello a lo
              que la palabra siempre aspiró.
            </p>
            <p style={{ marginTop: 18, color: 'var(--ink-soft)', fontSize: 16.5, maxWidth: '62ch' }}>
              La palabra &laquo;democracia&raquo; significa poder del pueblo, pero no dice
              nada sobre cómo se ejerce ese poder. Dejado abierto, ese vacío ha permitido que
              la palabra cubra casi cualquier cosa: un ciudadano que vota una vez cada varios
              años para que otro gobierne en su nombre se llama democracia, y también un
              ciudadano que gobierna él mismo, en persona. La prosopocracia nombra la segunda
              mitad de esa promesa &mdash; la parte que la democracia sugiere pero nunca
              garantiza. No es una rival de la democracia; es el mecanismo que hace que la
              palabra signifique lo que siempre afirmó significar.
            </p>
            <div className="quoteBlock">
              Demos kratos, poder del pueblo. Prosopo kratos, poder en la persona. El segundo
              es la forma en que el primero deja de ser solo una promesa.
            </div>
          </div>
        </div>
      </section>

      <section id="rota" className="section" style={{ borderBottom: 'none' }}>
        <div className="wrap">
          <div className="sectionLabel">El Mecanismo</div>
          <h2 className="sectionTitle">La prosopocracia es el principio. ROTA es el cómo.</h2>
          <div className="rotaBox reveal">
            <h3>Gobierno por Rotación</h3>
            <p>
              La prosopocracia nombra cómo debería ser el poder &mdash; ejercido por los
              propios ciudadanos, no delegado a otros. ROTA es la propuesta concreta de cómo
              construir esto en la práctica: ciudadanos que rotan en turnos breves de deber
              cívico, de modo que el poder pase por todos en persona, y nadie lo retenga el
              tiempo suficiente para dejar de ser suyo.
            </p>
            <a href="https://www.malakia.company/democracy" className="rotaLink">
              Leer la propuesta ROTA (EN) &rarr;
            </a>
          </div>
        </div>
      </section>

      <footer className="prosopoFooter">
        <div className="wrap">
          <p>Prosopocracia &middot; Poder ejercido en persona, no delegado</p>
        </div>
      </footer>
    </div>
  );
}
