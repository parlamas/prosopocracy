import styles from "../../paper.module.css";
import { PageBreak, OneColumn, FrontPage, Story, Continue, Def, type Edition } from "../../Paginator";

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
  number: "N.º 2",
  date: "1 de diciembre de 2026",
  price: "20 DKK · 2,70 €",
  editor: "Isidoros Parlamas",
  publisher: "Horistics · Vejle · CVR 43109324",
  issn: "ISSN 3151-9164 (impresa) · ISSN 3151-9172 (en línea)",
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
    <FrontPage>

      <Story id="voice">
        <h2 className={styles.headlineSpan}>La voz no es diátesis</h2>
        <h3 className={styles.headline}>Una palabra que significa sonido</h3>
        <p>Abra cualquier libro de gramática del inglés, del danés o de casi cualquier otra lengua, y encontrará la «voz activa» y la «voz pasiva». No encontrará una definición de «voz».</p>
        <p>La palabra viene del latín <em>vox</em>, que significa sonido. No dice nada de un sujeto ni de una acción. En el mejor de los casos, los libros describen lo que quieren decir: «la voz indica si el sujeto realiza la acción o la recibe». Pero una descripción con un nombre equivocado no es una definición. El alumno aprende el nombre y no entiende nada.</p>
        <p>Lo que los libros quieren decir no es voz. Es <strong>diátesis</strong> (διάθεσις, plural διαθέσεις). Son dos cosas distintas, y hay que definirlas por separado.</p>
        <h3 className={styles.headline}>Dos definiciones</h3>
        <p className={styles.lead}><Def term="Diátesis">es el origen de la energía en la oración, en cuanto afecta al sujeto.</Def><span className={styles.defLabel}>(def-18)</span></p>
        <p>Energía significa aquí energía tal como la estudia la física. No es una metáfora; cada palabra se entiende en sentido literal. Para hallar la diátesis, preguntamos de dónde viene la energía y qué le hace al sujeto.</p>
        <p className={styles.lead}><Def term="Voz">es un conjunto propio y completo de formas verbales que acompaña a una diátesis.</Def><span className={styles.defLabel}>(def-19)</span></p>
        <p>La voz es morfología: la forma de la palabra, su raíz y sus terminaciones. La diátesis es la relación de la energía con el sujeto. Una pertenece a la forma; la otra, al significado. Una lengua puede expresar una diátesis sin tener una voz para ella.</p>
        <h3 className={styles.headline}>Qué lenguas tienen voz</h3>
        <p>La prueba es estricta. El conjunto debe ser <strong>completo</strong>: cada persona, cada tiempo, cada modo. Cada forma debe ser <strong>una sola palabra</strong>: un verbo auxiliar más la forma activa es una perífrasis, no una voz. Y el conjunto debe ser <strong>propio</strong>: sus terminaciones deben ser distintas de las terminaciones de las formas activas del mismo verbo.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Griego clásico: λύω, «desatar»</div>
          <p><strong>Presente:</strong> λύ-ω, λύ-εις, λύ-ει → λύ-ομαι, λύ-ῃ, λύ-εται</p>
          <p><strong>Aoristo:</strong> ἔλυσ-α, ἔλυσ-ας, ἔλυσ-ε → ἐλύθη-ν, ἐλύθη-ς, ἐλύθη</p>
          <p>Cada persona, tiempo y modo tiene su propia forma pasiva en una sola palabra, con terminaciones distintas de las activas.</p>
        </div>
        <p>Entre las lenguas bien documentadas, solo el griego clásico y el sánscrito superan las tres pruebas. Ambos heredaron de su antepasado indoeuropeo común dos conjuntos completos de terminaciones, uno activo y otro medio-pasivo, y los conservaron en todos los tiempos y modos: griego λύ-ει → λύ-εται, sánscrito <em>bhara-ti</em> → <em>bhriya-te</em>.</p>
        <p>Todas las demás lenguas fallan al menos una prueba. El inglés, el español y el hindi usan un verbo auxiliar, que es una perífrasis: <em>la carta fue escrita</em>. El latín lo usa en el perfecto (<em>amatus sum</em>). El árabe y el hebreo cambian la raíz pero conservan las terminaciones activas (<em>katab-tu</em> → <em>kutib-tu</em>). El turco y el japonés insertan un elemento y conservan las terminaciones activas (<em>yaz-dı-m</em> → <em>yaz-ıl-dı-m</em>). El danés y el sueco tienen una sola forma en <em>-s</em>, y una forma no es un conjunto. El griego moderno conserva terminaciones propias solo en el presente (κοιτάζ-ω → κοιτάζ-ομαι); en el pasado las terminaciones son las mismas (κοίταξ-α → κοιτάχθηκ-α).</p>
        <p>La voz, en sentido pleno, pertenece al griego clásico y al sánscrito. Ninguna lengua que se hable hoy la tiene. Así que cuando un libro de gramática actual enseña «la voz pasiva», enseña algo que la lengua no tiene.</p>
        <h3 className={styles.headline}>Las cinco diátesis</h3>
        <p>Todas las lenguas tienen las mismas cinco, porque cada una se decide con una sola pregunta de respuesta física: ¿de dónde viene la energía y qué le hace al sujeto?</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Las cinco diátesis</div>
          <p><strong>Activa.</strong> La energía sale del sujeto y lo abandona. <em className={styles.example}>Escribo la carta.</em></p>
          <p><strong>Pasiva.</strong> La energía viene de fuera del sujeto, y el propio sujeto cambia, físicamente o en su condición. <em className={styles.example}>El cristal fue roto. Fue elegido.</em></p>
          <p><strong>Media.</strong> La energía sale del sujeto, lo abandona y vuelve a él. <em className={styles.example}>Λούζομαι.</em> (Me lavo el pelo.)</p>
          <p><strong>Interna.</strong> La energía sale del sujeto y nunca lo abandona. <em className={styles.example}>Estoy preocupado.</em></p>
          <p><strong>Receptiva.</strong> La energía viene de fuera del sujeto; solo se ve afectado el órgano que la recibe, y el sujeto queda como estaba. <em className={styles.example}>Veo un pájaro azul en ese árbol.</em></p>
        </div>
        <p>Dos casos muestran cómo funciona la prueba.</p>
        <p><em className={styles.example}>Estoy preocupado.</em> ¿De dónde viene la energía? No de fuera: la oración no nombra ninguna fuente, y la preocupación la producen el cuerpo y la mente del propio sujeto. No sale para volver, como en la media. Empieza en el sujeto y se queda allí. <strong>Interna.</strong></p>
        <p><em className={styles.example}>Veo un pájaro azul en ese árbol.</em> La energía es la luz. Viene del sol, se refleja en el pájaro y entra en el ojo. El sujeto no emite nada. El ojo se ve afectado, pero el sujeto no cambia. <strong>Receptiva</strong>, no pasiva.</p>
        <h3 className={styles.headline}>Por qué falla la definición escolar</h3>
        <p>La gramática escolar griega dice: <em>Διάθεση του ρήματος είναι η σχέση του υποκειμένου με την ενέργεια που φανερώνει το ρήμα</em> (la relación del sujeto con la acción que expresa el verbo). Luego enumera cuatro: activa, pasiva, media y neutra.</p>
        <p>Hay tres errores.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Tres errores</div>
          <p>1. <strong>Plantea la pregunta equivocada.</strong> Una «relación con la acción» no tiene punto de anclaje. La pregunta es el <em>origen</em> de la energía, y eso tiene una respuesta física.</p>
          <p>2. <strong>Usa «ενέργεια» sin definirla.</strong> La palabra está ahí, pero los libros nunca dicen qué es ni de dónde viene.</p>
          <p>3. <strong>Su cuarta clase se define por lo que no es.</strong> «Neutra» significa que el sujeto ni actúa sobre otra cosa ni recibe. Una clase definida solo por negación es un cajón de sastre. La diátesis interna y la receptiva caen ambas en él, sin distinguirse.</p>
        </div>
        <p>El resultado es que un verbo puede pasar de una clase a otra por costumbre o por conveniencia. Con el origen de la energía como prueba, no puede.</p>
        <p>La forma tampoco decide la diátesis. <em>Ανησυχώ</em> (me preocupo) tiene terminaciones activas, pero su diátesis es interna. <em>Veo</em> tiene forma activa, pero su diátesis es receptiva. Voz y diátesis deben mantenerse separadas.</p>
        <h3 className={styles.headline}>Gramática y paragramática</h3>
        <p>La diátesis es gramática, y la gramática es universal. La energía viene de los mismos lugares en todas las lenguas, así que todas las lenguas tienen las mismas cinco diátesis, exactamente idénticas.</p>
        <p>La voz es paragramática. Depende de la lengua: es una de las maneras en que una lengua puede marcar una diátesis, con un conjunto completo y propio de formas verbales. El griego clásico y el sánscrito la tenían. Las lenguas que se hablan hoy marcan la diátesis de otras maneras: con palabras auxiliares, con cambios en la raíz o con un elemento insertado.</p>
        <p>Los libros de gramática mezclan las dos. Llaman «voz» a la diátesis, una palabra que significa sonido. Nunca la definen. Y la enseñan en lenguas que no tienen voz en absoluto. Son tres errores en un solo término, copiados de libro en libro.</p>
        <p>El remedio es el de siempre: definir el término, anclar la definición en algo que no se mueva y comprobar cada caso con ella. Aquí el ancla es el origen de la energía. Es estable y no se doblega al capricho ni a la conveniencia de nadie.</p>
      </Story>

      <Story id="also">
        <h2 className={styles.headlineSpan}>Por qué «also» no es un adverbio</h2>
        <h3 className={styles.headline}>Una palabra pequeña</h3>
        <p>Tomemos una oración inglesa sencilla: <em className={styles.example}>I like fish; I also like beef.</em> (Me gusta el pescado; también me gusta la carne de res.)</p>
        <p>Todos los libros de gramática del inglés, del danés y de muchas otras lenguas afirman con seguridad que «also» es un adverbio. Los profesores lo repiten, los alumnos lo aprenden y nadie pregunta si es verdad. Este artículo hace esa pregunta y la responde con una sola herramienta: la definición.</p>
        <h3 className={styles.headline}>La prueba: ¿qué es un adverbio?</h3>
        <p className={styles.lead}><Def term="Un adverbio">es una palabra que dice cómo, cuándo, dónde, con qué frecuencia o en qué grado.</Def><span className={styles.defLabel}>(def-13, revisada)</span></p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Tres comprobaciones</div>
          <p><strong>1. Las cinco preguntas.</strong> <em className={styles.example}>She runs quickly</em> (cómo). <em className={styles.example}>She left yesterday</em> (cuándo). <em className={styles.example}>She lives here</em> (dónde). <em className={styles.example}>She never eats fish</em> (con qué frecuencia). <em className={styles.example}>It is very cold</em> (en qué grado).</p>
          <p><strong>2. Qué califica:</strong> un verbo, un adjetivo u otro adverbio. <em className={styles.example}>She runs quickly</em> (el verbo). <em className={styles.example}>It is very cold</em> (el adjetivo). <em className={styles.example}>She walks too slowly</em> (el adverbio).</p>
          <p><strong>3. La respuesta de una palabra.</strong> How does she run? <em>Quickly.</em> When did she leave? <em>Yesterday.</em> How often does she eat fish? <em>Never.</em></p>
        </div>
        <p>Pongamos ahora a prueba «also». En <em className={styles.example}>I also like beef</em>, ¿dice <em className={styles.target}>also</em> cómo me gusta la carne? No. ¿Cuándo? No. ¿Dónde? No. ¿Con qué frecuencia? No. ¿En qué grado? No.</p>
        <p>Segunda comprobación: ¿califica <em className={styles.target}>also</em> al verbo «like»? No. El gusto sigue siendo el mismo; «also» solo añade la carne al pescado.</p>
        <p>Tercera comprobación: ¿puede <em className={styles.target}>also</em> ser por sí solo una respuesta de una palabra? No. No hay ninguna pregunta cuya respuesta sea «Also.».</p>
        <p>«Also» falla las tres comprobaciones. No encaja en la definición. Por lo tanto, no es un adverbio.</p>
        <p>Se podría intentar salvar la etiqueta estirando la definición, añadiendo una sexta pregunta o llamando a «also» un adverbio «especial». Pero una definición que se dobla para que quepa cada palabra que ya lleva la etiqueta ya no define nada. Nos atenemos a la definición.</p>
        <h3 className={styles.headline}>Qué es «also»: una conjunción</h3>
        <p className={styles.lead}><Def term="Una conjunción">es una palabra que une cláusulas y muestra cómo se relacionan: adición, contraste, causa, consecuencia, condición, tiempo.</Def><span className={styles.defLabel}>(def-16, revisada)</span></p>
        <p>Las conjunciones unen cláusulas, no palabras. Cuando una conjunción parece unir dos palabras, hay dos cláusulas implícitas: <em className={styles.example}>I bought a book and a pen</em> = <em>I bought a book and I bought a pen.</em> La segunda cláusula está abreviada, pero sigue siendo una cláusula, y «and» une las dos.</p>
        <p>Miremos de nuevo «also»: <em className={styles.example}>I like fish; I also like beef.</em> <em className={styles.target}>Also</em> une la segunda cláusula a la primera y les da una relación acumulativa: la segunda se suma a la primera. Eso es exactamente lo que la definición exige de una conjunción. «Also» es una conjunción.</p>
        <p>El punto y coma no cambia esto. La puntuación es un signo, no una palabra; no tiene parte del discurso. Lo que es «also» depende solo de lo que «also» hace.</p>
        <h3 className={styles.headline}>«Too» también es una conjunción</h3>
        <p>La misma prueba vale para «too»: <em className={styles.example}>He likes fish. I like fish, too.</em> <em className={styles.target}>Too</em> une la segunda cláusula a la primera y les da una relación acumulativa. Encaja en la definición de conjunción, exactamente como «also». Se coloca al final de la cláusula en lugar de delante del verbo, pero la posición no decide la parte del discurso; la decide la función.</p>
        <p>El danés muestra lo mismo desde otro lado. Tiene una sola palabra para ambas: <em className={styles.example}>Jeg kan også lide fisk</em> = <em>I also like fish</em> / <em>I like fish, too.</em> Al danés le basta <em className={styles.target}>også</em> porque «also» y «too» hacen una y la misma función: unir cláusulas en una relación acumulativa. Ambas son conjunciones.</p>
        <p>(El otro «too» inglés, como en <em>too hot</em>, es una palabra distinta con otra función. El danés las mantiene separadas: <em>for varm</em>.)</p>
        <h3 className={styles.headline}>Por qué se equivocan los libros</h3>
        <p>Los libros no pusieron a prueba «also» con una definición. Miraron dónde se coloca en la oración: <em className={styles.example}>I never eat fish.</em> <em className={styles.example}>I also eat fish.</em> Las dos palabras están en el mismo lugar, entre el sujeto y el verbo. Así que los libros las archivaron juntas. Pero la posición no es la función, y el orden de las palabras no define una parte del discurso.</p>
        <p>«Never» dice con qué frecuencia, así que encaja en la definición de adverbio. «Also» une cláusulas y les da una relación acumulativa, así que encaja en la definición de conjunción. Misma posición, distinta función.</p>
        <h3 className={styles.headline}>Un error, miles de copias</h3>
        <p>¿Cómo sobrevive un error así en todos los libros de gramática? Un experto lo comete y miles lo siguen. Cada libro copia la etiqueta del anterior. Nadie comprueba la palabra con una definición, porque nadie trabaja con definiciones. Esto es sciolismo: la apariencia del saber sin su sustancia. Una etiqueta transmitida así es un hábito, no un conocimiento.</p>
        <p>Cuando se señala el error, la respuesta rara vez es un argumento. Es «así lo dicen todos los libros» o un comentario sobre quien preguntó. Ninguna de las dos cosas es una razón.</p>
        <p>La cura es sencilla y cualquiera puede aplicarla. Defina el término. Compruebe la palabra con la definición. Si encaja, conserve la etiqueta; si no, descártela, por muchos libros que la lleven. Bastó una comprobación para mostrar que «also» no es un adverbio. La misma comprobación, aplicada con honradez, despejaría gran parte de la confusión en la gramática, y mucho más allá de ella.</p>
      </Story>

    </FrontPage>

    <Continue id="voice" />

    <Continue id="also" />

    <h2 className={styles.headlineSpan}>No existen los adverbios conjuntivos</h2>
    <h3 className={styles.headline}>Una palabra, dos categorías</h3>
    <p>Los libros de gramática enseñan una parte del discurso llamada «adverbio conjuntivo» (en inglés, <em>conjunctive adverb</em>). Bajo ella incluyen palabras como <em>however, therefore, moreover, furthermore, consequently, nevertheless, nonetheless, hence, otherwise, accordingly, likewise, besides, also</em>.</p>
    <p>El problema es el propio nombre. Coloca una palabra en dos categorías a la vez: es un adverbio y hace el trabajo de una conjunción. Una parte del discurso no puede ser ambas cosas. O una palabra encaja en la definición de adverbio, o encaja en la definición de conjunción. Este artículo pone a prueba estas palabras con ambas definiciones, def-13 y def-16 tal como se revisan en este número, y muestra que todas ellas son conjunciones.</p>
    <h3 className={styles.headline}>La prueba</h3>
    <p>Tome cada palabra en una oración de dos cláusulas. Pregunte qué hace y luego aplique las tres comprobaciones del adverbio: las cinco preguntas, qué califica y la respuesta de una palabra.</p>
    <div className={styles.box}>
      <div className={styles.boxTitle}>Diez palabras, dos cláusulas</div>
      <p><em className={styles.target}>however</em>: <em className={styles.example}>It rained; however, we went out.</em> (contraste)</p>
      <p><em className={styles.target}>nevertheless</em>: <em className={styles.example}>It rained; nevertheless, we went out.</em> (contraste)</p>
      <p><em className={styles.target}>therefore</em>: <em className={styles.example}>It rained; therefore, we stayed in.</em> (consecuencia)</p>
      <p><em className={styles.target}>consequently</em>: <em className={styles.example}>It rained; consequently, we stayed in.</em> (consecuencia)</p>
      <p><em className={styles.target}>hence</em>: <em className={styles.example}>It rained; hence the mud.</em> (consecuencia)</p>
      <p><em className={styles.target}>moreover</em>: <em className={styles.example}>It is cheap; moreover, it is good.</em> (adición)</p>
      <p><em className={styles.target}>furthermore</em>: <em className={styles.example}>It is cheap; furthermore, it is good.</em> (adición)</p>
      <p><em className={styles.target}>also</em>: <em className={styles.example}>I like fish; I also like beef.</em> (adición)</p>
      <p><em className={styles.target}>likewise</em>: <em className={styles.example}>She left early; likewise, he left.</em> (adición por semejanza)</p>
      <p><em className={styles.target}>otherwise</em>: <em className={styles.example}>Hurry; otherwise, you will be late.</em> (condición)</p>
    </div>
    <p>Cada palabra falla las tres comprobaciones del adverbio. Tome <em className={styles.target}>however</em>: no dice cómo salimos, ni cuándo, ni dónde. No cambia «went» en nada. Y no hay ninguna pregunta cuya respuesta sea «However.».</p>
    <p>Cada palabra supera la prueba de la conjunción. Cada una une la segunda cláusula a la primera y expresa la relación entre ellas. Esa es la definición de conjunción, y no hace falta nada más. Estas palabras son conjunciones.</p>
    <h3 className={styles.headline}>Una palabra, varias funciones</h3>
    <p>La parte del discurso la decide la función que una palabra cumple en su cláusula, no su ortografía. La misma palabra puede ser adverbio en una oración, preposición en otra y conjunción en una tercera. Eso no justifica una categoría mixta; justifica comprobar cada uso.</p>
    <div className={styles.box}>
      <div className={styles.boxTitle}>«Before» en tres funciones</div>
      <p><strong>Adverbio:</strong> <em className={styles.example}>He was here before.</em> Dice cuándo. When was he here? <em>Before.</em></p>
      <p><strong>Preposición:</strong> <em className={styles.example}>It is before your eyes.</em> Lleva un objeto: «your eyes».</p>
      <p><strong>Conjunción:</strong> <em className={styles.example}>Call before you come.</em> Une dos cláusulas y muestra su relación en el tiempo.</p>
    </div>
    <p>Las definiciones separan limpiamente los tres usos. Donde «before» responde a cuándo, es adverbio. Donde lleva un objeto, es preposición. Donde une cláusulas y muestra su relación, es conjunción. No hace falta ninguna categoría mixta.</p>
    <h3 className={styles.headline}>De dónde viene la etiqueta</h3>
    <p>La etiqueta es antigua. <em>The Grammar of English Grammars</em> de Goold Brown (1851) ya la define: los adverbios conjuntivos son aquellos «que desempeñan el oficio de las conjunciones y sirven para unir oraciones, a la vez que expresan alguna circunstancia de tiempo, lugar, grado o similar».</p>
    <p>La definición delata el asunto. Según las propias palabras de Brown, estas palabras hacen el trabajo de las conjunciones: unen oraciones. La parte adverbial solo se afirma, «alguna circunstancia … o similar», y en las palabras del recuadro de arriba no aparece en absoluto.</p>
    <p>Brown sabía que el límite era dudoso. Cuenta que algunos autores ya habían colocado <em>also, since, too, then, therefore</em> y <em>wherefore</em> entre las conjunciones, y <em>as, so, still, however</em> entre las conjunciones disyuntivas, mientras que Johnson y Webster marcaban la mayoría como adverbios. Su respuesta: «Quizá importe poco con qué nombre se las llame».</p>
    <p>Incluso tenía en la mano la prueba correcta: «Las llamo adverbios cuando expresan principalmente tiempo, modo o grado, y conjunciones cuando parecen meros conectores». Aplicada con rigor, esa prueba no deja nada para una tercera categoría. Brown la aplicó, se encogió de hombros y mantuvo la etiqueta mixta. Los libros la copian desde entonces.</p>
    <h3 className={styles.headline}>Por qué sobrevive la etiqueta</h3>
    <p>Los libros defienden la etiqueta con dos observaciones. Ninguna toca la definición.</p>
    <div className={styles.box}>
      <div className={styles.boxTitle}>Dos observaciones</div>
      <p>1. <strong>La puntuación.</strong> Dicen que el adverbio conjuntivo lleva punto y coma delante y coma detrás: <em className={styles.example}>It rained; however, we went out.</em> Pero la puntuación es un signo, no una palabra. No tiene parte del discurso y no puede dársela a una palabra.</p>
      <p>2. <strong>La posición.</strong> Dicen que estas palabras pueden moverse dentro de la cláusula: <em className={styles.example}>We, however, went out. We went out, however.</em> Pero la posición tampoco define una parte del discurso. Una palabra que une dos cláusulas y expresa su relación hace el mismo trabajo dondequiera que esté.</p>
    </div>
    <p>Lo que mantiene viva la etiqueta no es un argumento. Es la copia. Cada libro toma el término del anterior, y nadie pone a prueba las palabras con las definiciones.</p>
    <p>El remedio es el que resuelve cada caso de este tipo. Defina las partes del discurso. Compruebe cada palabra, en cada uso, con las definiciones. Donde una palabra une cláusulas y muestra su relación, es una conjunción. No existe ninguna parte del discurso llamada adverbio conjuntivo.</p>
    <div className={styles.box}>
      <div className={styles.boxTitle}>Una nota sobre las definiciones</div>
      <p>Las definiciones del adverbio (def-13) y de la conjunción (def-16) que se dan en este número sustituyen a las del n.º 1.</p>
    </div>
    <p><em>Los modos, en el n.º 3.</em></p>

    {/* ═════════════ SUSCRIPCIÓN + DATOS DE LA EDICIÓN ═════════════ */}
    <PageBreak />
    <h2 className={styles.headlineSpan} data-nonum>Suscripción</h2>
    <OneColumn>
      <p>
        Se publica cada mes en español, danés, polaco y griego, cada edición
        junto con la inglesa. Disponible impresa y en PDF.
      </p>
      <h3 className={styles.headline}>Escuelas</h3>
      <p>1.995 DKK (268 €) al año por escuela. Incluye la edición en PDF en todas las lenguas, que la escuela puede copiar para sus propios alumnos y profesores.</p>
      <h3 className={styles.headline}>Empresas y organizaciones</h3>
      <p>1.495 DKK (200 €) al año. Incluye la edición en PDF para un máximo de 10 lectores. Grupos mayores, a consultar.</p>
      <h3 className={styles.headline}>Particulares</h3>
      <p>Impresa: 799 DKK (107 €) al año. PDF: 399 DKK (54 €) al año. Ejemplar suelto: 20 DKK (2,70 €).</p>
      <h3 className={styles.headline}>Clases de gramática</h3>
      <p>Clases de gramática individuales y en grupo, en inglés, griego y español. Consultas: mind@horistics.com.</p>
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
export const spanishSchools: Edition = { ...spanish, content: content(true), oneColumn: true };
