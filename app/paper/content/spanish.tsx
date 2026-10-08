import styles from "../paper.module.css";
import { PageBreak, OneColumn, FrontPage, Story, Continue, Def, type Edition } from "../Paginator";

/*
  CÓMO ESCRIBIR (same rules as the English file)
  - Un párrafo = un <p>...</p>.
  - Titular a dos columnas:  <h2 className={styles.headlineSpan}>...</h2>
  - Titular en una columna:  <h3 className={styles.headline}>...</h3>
  - Página nueva:            <PageBreak />
  - Una columna:             <OneColumn> ... </OneColumn>
  - Definición:              <Def term="Justicia">es la prevención del delito.</Def>
  - Portada:                 dos <Story id="..."> dentro de <FrontPage>; el resto continúa en <Continue id="..." />.
*/

const ISSUE = {
  name: "HORISTICS",
  tagline: "Gramática · Paragramática · Política · Calidad de vida · Noticias interpretativas",
  number: "N.º 1",
  date: "9 de octubre de 2026",
  price: "20 DKK · 2,70 €",
  editor: "Isidoros Parlamas",
  publisher: "Horistics · Vejle · CVR 43109324",
  issn: "ISSN en trámite",
};

const masthead = (
  <header className={styles.masthead}>
    <div className={styles.mastheadTop}>
      <span>{ISSUE.number}</span>
      <span>{ISSUE.date} · CVR 43109324 · MobilePay 27 13 44 83</span>
      <span>{ISSUE.price}</span>
    </div>
    <h1 className={styles.title}>{ISSUE.name}</h1>
    <div className={styles.motto}>El poder revelador de las definiciones</div>
    <div className={styles.tagline}>{ISSUE.tagline}</div>
  </header>
);

const content = (schools: boolean) => (
  <>
    {/* ═════════════ PÁGINA 1: DOS ARTÍCULOS LADO A LADO ═════════════ */}
    <FrontPage>

      {/* Columna izquierda */}
      <Story id="grammar">
        <h2 className={styles.headlineSpan}>Qué es la gramática, no de qué consta</h2>

        <p className={styles.lead}><Def term="Gramática">es la generación del pensamiento.</Def><span className={styles.defLabel}>(def-1)</span></p>

        <p>Dicho de otro modo, es la gramática la que genera los pensamientos.</p>

        <p>Suena sencillo, pero dice qué es la gramática, no de qué consta. Lo que pasa por definiciones de la gramática son en realidad descripciones, no definiciones.</p>

        <p className={styles.lead}><Def term="Pensamientos">son representaciones mentales, compuestas y simuladas de sucesos.</Def><span className={styles.defLabel}>(def-2)</span></p>

        <p>La gramática genera pensamientos mediante seis conceptos fundamentales: partes del discurso, modos, diátesis, aspectos, cláusulas y sintaxis. Todo lo demás (morfología, vocabulario, puntuación, pronunciación, etc.) es paragramática.</p>

        <p>Cuando pensamos en algo, los seis conceptos se ponen en marcha. Ningún pensamiento es posible sin los seis.</p>

        <p>El cerebro humano está hecho para generar pensamiento exactamente de la misma manera, sea cual sea la lengua. La gramática es, por tanto, un rasgo panhumano que nos une a todos de una manera muy especial, aunque inadvertida. La gramática es universal; la lengua no.</p>

        <p className={styles.lead}><Def term="Comunicación">es el intercambio de mensajes que transmiten significado.</Def><span className={styles.defLabel}>(def-3)</span></p>

        <p>Todo mensaje que transmite significado transmite pensamiento, y ningún pensamiento existe sin gramática. Toda comunicación es, por tanto, gramatical.</p>

        <p>Se suele decir que la lengua es lo que da voz a los pensamientos, pero eso es una metáfora, no una definición.</p>

        <p className={styles.lead}><Def term="Lengua">es comunicación paragramatical.</Def><span className={styles.defLabel}>(def-4)</span></p>

        <p>Dicho de otro modo, la lengua es comunicación por medio de la paragramática. Toda comunicación es gramatical, pero solo la lengua es a la vez gramatical y paragramatical. La gramática es lo que todas las lenguas comparten con todo pensamiento; la paragramática es el ropaje que le da cada lengua.</p>

        <p>Tomemos una oración sencilla: <em className={styles.example}>Nosotros compramos pescado esta mañana.</em> Dígala en danés, griego, inglés o cualquier otra lengua, y las palabras cambian, las terminaciones cambian, el orden de las palabras puede cambiar. Pero la gramática no.</p>
        <h3 className={styles.headline}>Partes del discurso</h3>
        <p>
          <em className={styles.target}>Nosotros</em> es un pronombre, <em className={styles.target}>compramos</em> es un verbo, <em className={styles.target}>pescado</em> es un
          sustantivo, <em className={styles.target}>esta</em> es un adjetivo y <em className={styles.target}>mañana</em> es un sustantivo.</p>
        <p>Muchas palabras pueden pertenecer a distintas partes del discurso en distintos contextos, pero en un contexto dado cada palabra pertenece a una sola. Tomadas una a una, sus equivalentes pertenecen a las mismas partes del discurso en todas las lenguas.</p>
        <p>En español o en griego, <em className={styles.target}>nosotros</em> puede expresarse (<em>nosotros/as</em>, <em>εμείς</em>) o dejarse a la terminación del verbo. En ambos casos, el pronombre está ahí. Solo cambia su marca, y eso es paragramática.</p>
        <h3 className={styles.headline}>Modo</h3>
        <p>
          La oración enuncia un hecho. Está en modo indicativo, en todas las
          lenguas.
        </p>
        <h3 className={styles.headline}>Diátesis</h3>
        <p>
          El sujeto realiza la acción: nosotros hicimos la compra. La oración es
          activa, en todas las lenguas.
        </p>
        <h3 className={styles.headline}>Aspecto</h3>
        <p>
          La compra se ve como un solo acto completo. El aspecto es sinóptico, en
          todas las lenguas.
        </p>
        <h3 className={styles.headline}>Cláusula</h3>
        <p>
          Es una cláusula principal enunciativa, en todas las lenguas.
        </p>
        <h3 className={styles.headline}>Sintaxis</h3>
        <p>
          <em className={styles.target}>Nosotros</em> es el sujeto, <em className={styles.target}>compramos</em> es el verbo, <em className={styles.target}>pescado</em> es
          el complemento directo y <em className={styles.target}>esta mañana</em> es el adverbio, en todas
          las lenguas.
        </p>
        <p>
          Seis conceptos, y ninguno de ellos cambia entre lenguas. Lo que varía <em>de
          una lengua a otra</em> es cómo cada lengua los marca: sus terminaciones,
          su orden de palabras, su ortografía, su pronunciación, etc. Eso es
          paragramática.
        </p>
        <p>
          <em>En la próxima edición: las partes del discurso, en detalle.</em>
        </p>
      </Story>

      {/* Columna derecha */}
      <Story id="politics">
        <h2 className={styles.headlineSpan}>La ley frente a la pena por infringir la ley</h2>
        <p className={styles.lead}>Hacer cumplir la pena por infringir la ley no es la ley misma.</p>
        <p>¿Qué es la justicia? Definámosla:</p>
        <p className={styles.lead}><Def term="Justicia">es la prevención del delito.</Def></p>
        <p>
          Una vez cometido un delito, ya no puede hacerse justicia, porque la
          justicia es prevenir el delito. Lo que sigue —la detención, el juicio, la
          prisión— tiene que ver con la pena por infringir la ley, que no es
          justicia. Así que lo que se llama aplicación de la ley es en realidad
          aplicación de la pena.
        </p>
        <p>
          Esto dice mucho sobre el poder revelador de las definiciones, y lo que
          revela está en el centro de un sinfín de malentendidos que descarrilan
          millones de vidas.
        </p>
        <p>
          Piense en la frase que oímos en las noticias cada semana: el delincuente
          «fue llevado ante la justicia». No lo fue. Fue llevado ante la pena. La
          justicia que podría haberse hecho era la prevención de su delito, y ese
          momento pasó antes de que el delito se cometiera. Lo que queda después
          es una consecuencia, no un remedio.
        </p>
        <p>
          Piense en la víctima. Le decimos a la víctima que se hará justicia, que
          el veredicto traerá justicia. Pero el daño ya está hecho, y ninguna
          sentencia lo deshace. A la víctima se le promete una cosa y se le da
          otra. Muchos esperan años un juicio con la esperanza de un alivio, y
          cuando llega la sentencia se sienten extrañamente vacíos. No se
          equivocaban al sentirlo. Les dieron la palabra equivocada.
        </p>
        <p>
          La justicia se confunde con el castigo, con la venganza, con la
          indemnización económica y con lo legal. No es nada de eso. El castigo es
          la pena impuesta después del delito. La venganza es daño devuelto por
          daño. La indemnización es dinero pagado por un daño ya hecho. Lo legal es
          lo que la ley permite o prohíbe, y no es raro que lo legal sea injusto y
          que lo justo sea ilegal. Los opioides se comercializaron y recetaron
          legalmente a escala masiva, y siguió una epidemia de adicción. En muchos
          países se castiga a las personas por expresarse libremente. Los cuatro
          llegan después del delito o están a su lado. Ninguno lo previene, y por
          eso ninguno es justicia.
        </p>
        <p>
          Piense en el político. Cuando los políticos prometen mano dura contra el
          delito, casi siempre quieren decir mano dura con la pena: condenas más
          largas, más prisiones, más policía después de los hechos. Cada una de
          estas medidas actúa solo después de cometido el delito. Según la
          definición, ninguna es justicia. Un gobierno que dedica la mayor parte de
          su esfuerzo a las penas no es un gobierno que hace justicia. Es un
          gobierno que administra el fracaso de la justicia.
        </p>
        <p>
          Si la justicia es la prevención del delito, entonces la justicia
          significa eliminar las razones que llevan a alguien a cometer un delito,
          de modo que los ciudadanos no tengan motivo alguno para cometerlos. Detrás
          de cada delito hay una razón, ya sea la necesidad, la ignorancia, la
          exclusión o la desesperación. Elimine la razón, y el delito no tiene de
          dónde crecer.
        </p>
        <p>
          Ese es ante todo el deber de la política, tal como se define
          correctamente. No de los tribunales, que llegan demasiado tarde. No de la
          policía, que llega después de la llamada. No de las prisiones, que
          albergan las consecuencias de un fracaso que ya ha ocurrido. La política
          es la única institución situada antes del delito, allí donde se forman
          sus razones, y por eso es la única que puede hacer justicia.
        </p>
        <OneColumn>
          <p>
            Una sola definición, formulada con precisión, traslada la justicia de
            la sala del tribunal al aula, de la prisión al hogar, del final de la
            historia a su comienzo. Ese es el poder revelador de las definiciones.
            Una sociedad que confunde la pena con la justicia seguirá construyendo
            prisiones y preguntándose por qué el delito no desaparece. Una sociedad
            que define correctamente la justicia se hará otra pregunta: no cómo
            castigar, sino cómo prevenir.
          </p>
        </OneColumn>
      </Story>

    </FrontPage>

    {/* ═════════════ CONTINUACIÓN DEL ARTÍCULO SOBRE GRAMÁTICA ═════════════ */}
    <Continue id="grammar" />

    {/* ═════════════ CONTINUACIÓN DEL ARTÍCULO SOBRE LA JUSTICIA ═════════════ */}
    <Continue id="politics" />

    {/* ═════════════ NOTICIAS INTERPRETATIVAS ═════════════ */}
    {!schools && (<>
    <div className={styles.kicker}>Noticias interpretativas</div>
    <h2 className={styles.headlineSpan}>El uso de armas nucleares ya no es impensable</h2>
    <OneColumn>
      <p className={styles.lead}>Theodor Herzl fue el visionario del Gran Israel</p>
      <figure className={styles.figure}>
        <img src="/paper/images/Herzl.jpeg" alt="Theodor Herzl" />
        <figcaption>Theodor Herzl</figcaption>
      </figure>
      <p>
        Theodor Herzl (1860–1904) fue un periodista, escritor y activista
        político judío austrohúngaro que se convirtió en el fundador central del
        sionismo político moderno.
      </p>

      <div className={styles.box}>
        <div className={styles.boxTitle}>Theodor Herzl</div>
        <p><strong>Nacimiento:</strong> Budapest, 2 de mayo de 1860</p>
        <p><strong>Muerte:</strong> Edlach, Austria, 3 de julio de 1904 (enterrado en Viena)</p>
        <p><strong>Profesión:</strong> periodista, dramaturgo, escritor</p>
        <p><strong>Obra principal:</strong> <em>Der Judenstaat</em> (El Estado judío), 1896</p>
        <p>
          <strong>Papel político:</strong> organizó el Primer Congreso Sionista
          en Basilea en 1897 y fue presidente de la recién creada Organización
          Sionista.
        </p>
        <p>
          <strong>Objetivo:</strong> una patria para el pueblo judío asegurada
          pública y jurídicamente.
        </p>
      </div>

      <p>
        Buscó apoyo diplomático internacional para este proyecto, incluidas
        negociaciones con el Imperio otomano y el gobierno británico.
      </p>
      <p>
        Herzl murió décadas antes de la fundación del Estado de Israel en 1948,
        por lo que no participó en la creación del propio Estado. Sus escritos y
        su organización política se convirtieron, sin embargo, en la base del
        movimiento sionista.
      </p>
      <p>
        Para marcar el tono, volvamos a Londres en octubre de 1902. El 23 de
        octubre, según su propio diario, Herzl entró en el despacho de Joseph
        Chamberlain, secretario de Colonias británico, a las doce y cuarto. Llegó
        con una petición: un territorio bajo control británico para la
        colonización judía. Nombró tres lugares: Chipre, El-Arish y la península
        del Sinaí.
      </p>
      <p>
        No existe transcripción de la reunión. Lo que se conserva es el relato
        del propio Herzl, escrito en su diario al día siguiente. Es la fuente
        primaria, y es reveladora precisamente porque es suya.
      </p>
      <p>
        Herzl explicó por qué no podía simplemente esperar el resultado de sus
        negociaciones con el sultán otomano, que gobernaba Palestina. Las comparó
        con la compra de una alfombra: «Si quieres comprar una alfombra, primero
        tienes que beber media docena de tazas de café y fumar cien cigarrillos;
        luego hablas de historias familiares, y de vez en cuando vuelves a decir
        unas palabras sobre la alfombra. Yo tengo tiempo para negociar, pero mi
        pueblo no. Pasa hambre en la Zona de Asentamiento. Debo llevarle ayuda
        inmediata».
      </p>
      <p>
        Chamberlain respondió que solo podía hablar con autoridad sobre Chipre,
        porque El-Arish y el Sinaí dependían del Ministerio de Asuntos
        Exteriores. Sobre Chipre, Herzl recoge su respuesta:
      </p>
      <blockquote className={styles.pull}>
        «Chipre está habitada por griegos y musulmanes. No podría desplazarlos en
        favor de nuevos inmigrantes. Al contrario, mi deber sería ponerme de su
        lado».
      </blockquote>
      <p>
        Chamberlain añadió entonces que, si Herzl podía señalar un lugar en las
        posesiones británicas donde no hubiera habitantes blancos, estaría
        dispuesto a discutirlo.
      </p>
      <p>
        Herzl no soltó Chipre. Propuso crear una corriente favorable al
        asentamiento judío en la isla, impulsada por capital judío. En sus
        propias palabras:
      </p>
      <blockquote className={styles.pull}>
        «Una vez que fundemos la Compañía Judía de Oriente, con 5 millones de
        libras de capital, para asentar el Sinaí y El-Arish, los chipriotas
        empezarán a querer también esa lluvia de oro en su isla. Los musulmanes
        se marcharán, los griegos venderán con gusto sus tierras a buen precio y
        emigrarán a Atenas o a Creta».
      </blockquote>
      <p>
        Y Herzl anota de inmediato la reacción de Chamberlain: «Pareció acoger
        bien la idea».
      </p>
      <p>
        El orden importa. Chamberlain se negó a desplazar a los griegos y
        musulmanes de Chipre. Herzl respondió con un plan según el cual se irían
        por sí mismos: los musulmanes se marcharían, los griegos venderían y
        emigrarían. Y, según el relato de Herzl, Chamberlain pareció acogerlo
        bien. No es una interpretación posterior de la posición de Herzl. Está
        en su propio diario, escrito durante sus negociaciones en Londres en
        octubre de 1902.
      </p>
      <p>
        Al día siguiente, Chamberlain organizó una reunión de Herzl con el
        ministro de Asuntos Exteriores, lord Lansdowne. Pero le dijo que dejara
        Chipre fuera de esa reunión: «La parte del plan relativa a Chipre es
        asunto mío».
      </p>
      <p>
        La opción de Chipre se cerró ahí. Gran Bretaña estudió El-Arish, pero
        ese plan fracasó por la postura del gobierno egipcio y la falta de agua.
        En 1903, Chamberlain ofreció algo completamente distinto: un territorio
        en el África Oriental Británica, el llamado Plan Uganda.
      </p>
      <p>
        Muchos sostienen que se permitió que ocurriera el ataque del 7 de octubre
        de 2023 para que el gobierno de Netanyahu pudiera usarlo para justificar
        el desplazamiento de los palestinos de Gaza. Esto recuerda un aspecto del
        pensamiento de Theodor Herzl: al hablar de Chipre con Joseph Chamberlain
        en 1902, Herzl imaginaba la salida de la población musulmana y la venta
        de tierras y la emigración de la población griega a Atenas o a Creta.
      </p>
      <p>
        Israel aplica ahora una política dirigida a cambiar el régimen iraní.
        Sin embargo, dados el tamaño, la población, la geografía, la capacidad
        militar y la demostrada resistencia de Irán, no es en absoluto seguro que
        Irán capitulara solo mediante operaciones militares convencionales. El
        conflicto ya ha demostrado la capacidad de Irán para absorber una presión
        militar considerable sin dejar de responder.
      </p>
      <p>
        Aun así, ni Israel ni Estados Unidos pueden abandonar fácilmente el
        objetivo. Ambos han invertido mucho en el cambio de régimen, y renunciar
        a él supondría una grave pérdida de prestigio y un duro golpe
        psicológico para ambos.
      </p>
      <p>
        Mientras tanto, hay informes de una creciente implicación israelí en
        Chipre, incluidas inversiones israelíes y cooperación en materia de
        seguridad. Si el gobierno israelí llega a la conclusión de que la presión
        militar no producirá un cambio de régimen en Irán, surge una pregunta
        peligrosa: ¿escalaría hasta el uso de armas nucleares tácticas? Un paso
        así no garantizaría necesariamente el colapso del Estado iraní y podría,
        en cambio, provocar una escalada incontrolable.
      </p>
      <p>
        Las consecuencias podrían ir mucho más allá de Oriente Próximo. Un ataque
        nuclear de Israel podría presionar a otras potencias nucleares, entre
        ellas Rusia y China, para que intervinieran o respondieran militarmente.
        No se puede predecir si realmente usarían armas nucleares, pero la mera
        posibilidad haría de tal escalada una amenaza para toda la comunidad
        internacional.
      </p>
      <p>
        La amenaza de Donald Trump en la Asamblea General de la ONU el 22 de
        septiembre de 2026, cuando preguntó si debía «aniquilar la República
        Islámica» si no se alcanzaba un acuerdo de paz, demuestra hasta qué
        punto se ha vuelto extrema la retórica actual. La posibilidad de una
        nueva escalada no concierne, por tanto, solo a Israel, a Irán o a
        Oriente Próximo, sino potencialmente a toda la humanidad.
      </p>
    </OneColumn>
    </>)}

    {/* ═════════════ SUSCRIPCIÓN + DATOS DE LA EDICIÓN ═════════════ */}
    <PageBreak />
    <h2 className={styles.headlineSpan} data-nonum>Suscripción</h2>
    <OneColumn>
      <p>
        Se publica cada semana en español, danés, polaco y griego, cada edición
        junto con la inglesa. Disponible impresa y en PDF.
      </p>
      <h3 className={styles.headline}>Escuelas</h3>
      <p>1.995 DKK (268 €) al año por escuela. Incluye la edición en PDF en todas las lenguas, que la escuela puede copiar para sus propios alumnos y profesores.</p>
      <h3 className={styles.headline}>Empresas y organizaciones</h3>
      <p>1.495 DKK (200 €) al año. Incluye la edición en PDF para un máximo de 10 lectores. Grupos mayores, a consultar.</p>
      <h3 className={styles.headline}>Particulares</h3>
      <p>Impresa: 799 DKK (107 €) al año. PDF: 399 DKK (54 €) al año. Ejemplar suelto: 20 DKK (2,70 €).</p>
      <h3 className={styles.headline}>Clases de gramática</h3>
      <p>Clases de gramática individuales y en grupo, en inglés, danés, polaco, griego y español. Consultas: mind@horistics.com.</p>
      <h3 className={styles.headline}>Contacto</h3>
      <p>Para suscribirse, escriba a mind@horistics.com indicando su nombre, su dirección y la edición que desea. Pago por MobilePay 27 13 44 83.</p>

      <div className={styles.imprint}>
        <div><strong>Director responsable:</strong> {ISSUE.editor}</div>
        <div><strong>Editorial:</strong> {ISSUE.publisher}</div>
        <div>{ISSUE.issn} · {ISSUE.number}, {ISSUE.date}</div>
      </div>
    </OneColumn>
  </>
);

export const spanish: Edition = {
  lang: "es",
  name: ISSUE.name,
  date: ISSUE.date,
  masthead,
  continuedOn: "Continúa en la página {n} →",
  continuedFrom: "Viene de la página 1",
  content: content(false),
};

// Edición escolar: el mismo periódico sin el artículo de Noticias interpretativas.
export const spanishSchools: Edition = { ...spanish, content: content(true) };
