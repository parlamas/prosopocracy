import styles from "../paper.module.css";
import { PageBreak, OneColumn, FrontPage, Story, Continue, Def, type Edition } from "../Paginator";

/*
  SÅDAN SKRIVER DU (same rules as the English file)
  - Ét afsnit = én <p>...</p>.
  - Overskrift over begge spalter:  <h2 className={styles.headlineSpan}>...</h2>
  - Overskrift i én spalte:         <h3 className={styles.headline}>...</h3>
  - Ny side:                        <PageBreak />
  - Én spalte:                      <OneColumn> ... </OneColumn>
  - Definition:                     <Def term="Retfærdighed">er forebyggelse af kriminalitet.</Def>
  - Forside:                        to <Story id="..."> i <FrontPage>; resten fortsætter ved <Continue id="..." />.
*/

const ISSUE = {
  name: "HORISTICS",
  tagline: "Grammatik · Paragrammatik · Politik · Livskvalitet · Fortolkende nyheder",
  number: "Nr. 1",
  date: "9. oktober 2026",
  price: "20 kr. · 2,70 €",
  editor: "Isidoros Parlamas",
  publisher: "Horistics · Vejle · CVR 43109324",
  issn: "ISSN 3151-9164 (trykt) · ISSN 3151-9172 (online)",
};

const masthead = (
  <header className={styles.masthead}>
    <div className={styles.mastheadTop}>
      <span>{ISSUE.number}</span>
      <span>{ISSUE.date} · CVR 43109324  · MobilePay 27 13 44 83</span>
      <span>{ISSUE.price}</span>
    </div>
    <h1 className={styles.title}>{ISSUE.name}</h1>
    <div className={styles.motto}>Definitionernes afslørende kraft</div>
    <div className={styles.tagline}>{ISSUE.tagline}</div>
  </header>
);

const content = (schools: boolean) => (
  <>
    {/* ═════════════ SIDE 1: TO ARTIKLER SIDE OM SIDE ═════════════ */}
    <FrontPage>

      {/* Venstre spalte */}
      <Story id="grammar">
        <h2 className={styles.headlineSpan}>Hvad grammatik er – ikke hvad den består af</h2>

        <p className={styles.lead}><Def term="Grammatik">er frembringelse af tanke.</Def><span className={styles.defLabel}>(def-1)</span></p>

        <p>Med andre ord er det grammatikken, der frembringer tankerne.</p>

        <p>Det lyder enkelt, men det siger, hvad grammatik er, ikke hvad den består af. Det, der gælder for definitioner af grammatik, er i virkeligheden beskrivelser, ikke definitioner.</p>

        <p className={styles.lead}><Def term="Tanker">er mentale, sammensatte, simulerede repræsentationer af hændelser.</Def><span className={styles.defLabel}>(def-2)</span></p>

        <p>Grammatikken frembringer tanker gennem seks grundlæggende begreber: ordklasser, modi, diateser, aspekter, sætninger og syntaks. Alt andet (morfologi, ordforråd, tegnsætning, udtale og så videre) er paragrammatik.</p>

        <p>Disse begreber er ikke nye. Grammatik som disciplin blev grundlagt af grækerne: af Sokrates (470–399 før år 1) i Platons <em>Kratylos</em>, som undersøger navnenes rigtighed og skelner mellem substantiver (<em>ὀνόματα</em>) og verber (<em>ῥήματα</em>); af Dionysios Thrax (ca. 170–90 før år 1), hvis <em>Grammatikkens kunst</em> opstillede de otte ordklasser; og af Apollonios Dyskolos (2. århundrede efter år 1), som grundlagde studiet af syntaksen.</p>

        <p>Når vi tænker på noget, sættes alle seks begreber i gang. Ingen tanke er mulig uden alle seks.</p>

        <p>Den menneskelige hjerne er indrettet til at frembringe tanke på nøjagtig samme måde, uanset sprog. Grammatik er derfor et almenmenneskeligt træk, der forener os alle på en helt særlig, men overset måde. Grammatik er universel; sprog er ikke.</p>

        <p className={styles.lead}><Def term="Kommunikation">er udveksling af budskaber, der bærer mening.</Def><span className={styles.defLabel}>(def-3)</span></p>

        <p>Ethvert budskab, der bærer mening, bærer tanke, og ingen tanke findes uden grammatik. Al kommunikation er derfor grammatisk.</p>

        <p>Det siges ofte, at sproget er det, der giver tankerne en stemme, men det er en metafor, ikke en definition.</p>

        <p className={styles.lead}><Def term="Sprog">er paragrammatisk kommunikation.</Def><span className={styles.defLabel}>(def-4)</span></p>

        <p>Med andre ord er sprog kommunikation gennem paragrammatik. Al kommunikation er grammatisk, men kun sprog er både grammatisk og paragrammatisk. Grammatik er det, alle sprog deler med al tanke; paragrammatik er den dragt, hvert sprog giver den.</p>

        <p>Tag en enkel sætning: <em className={styles.example}>Vi købte fisk i morges.</em> Sig den på engelsk, græsk, spansk eller et hvilket som helst andet sprog, og ordene ændrer sig, endelserne ændrer sig, ordstillingen kan ændre sig. Men grammatikken gør ikke.</p>
        <h3 className={styles.headline}>Ordklasser</h3>
        <p>
          <em className={styles.target}>Vi</em> er et pronomen, <em className={styles.target}>købte</em> er
          et verbum, <em className={styles.target}>fisk</em> er et substantiv, <em className={styles.target}>i</em> er
          en præposition, og <em className={styles.target}>morges</em> er et substantiv.</p>
        <p>Mange ord kan tilhøre forskellige ordklasser i forskellige sammenhænge, men i en given sammenhæng tilhører hvert ord kun én. Taget ét for ét tilhører deres modsvarigheder de samme ordklasser på alle sprog.</p>
        <p>På græsk eller spansk kan <em className={styles.target}>vi</em> udtrykkes (<em>εμείς</em>, <em>nosotros/as</em>) eller overlades til verbets endelse. Pronomenet er der under alle omstændigheder. Kun dets markering er forskellig, og det er paragrammatik.</p>
        <h3 className={styles.headline}>Modus</h3>
        <p>
          Sætningen fremsætter et faktum. Den står i indikativ – på alle sprog.
        </p>
        <h3 className={styles.headline}>Diatese</h3>
        <p>
          Subjektet udfører handlingen: det var os, der købte. Sætningen er
          aktiv – på alle sprog.
        </p>
        <h3 className={styles.headline}>Aspekt</h3>
        <p>
          Købet ses som én afsluttet handling. Aspektet er synoptisk – på alle
          sprog.
        </p>
        <h3 className={styles.headline}>Sætning</h3>
        <p>
          Det er en fremsættende hovedsætning – på alle sprog.
        </p>
        <h3 className={styles.headline}>Syntaks</h3>
        <p>
          <em className={styles.target}>Vi</em> er subjekt, <em className={styles.target}>købte</em> er
          verbum, <em className={styles.target}>fisk</em> er direkte objekt, og <em className={styles.target}>i morges</em> er
          adverbium – på alle sprog.
        </p>
        <p>
          Seks begreber, og ikke ét af dem ændrer sig på tværs af sprog. Det,
          der varierer <em>fra sprog til sprog</em>, er, hvordan hvert sprog
          markerer dem: dets endelser, dets ordstilling, dets stavemåde, dets
          udtale og så videre. Det er paragrammatik.
        </p>
        <h3 className={styles.headline}>Tanken kommer først</h3>
        <p>Før noget bliver sagt eller skrevet, findes det som en tanke. Vi finder ikke først ordene og regner derefter ud, hvad de betyder. Vi tænker først, og så leder vi efter ordene. Tanken er allerede fuldendt i sindet, med alle seks begreber på plads, før noget sprog giver den form.</p>
        <p>Sproget kommer bagefter. Det vælger ordene, endelserne og ordstillingen og afgør, hvor meget af tanken der bliver sagt højt. Til den tid har grammatikken allerede gjort sit arbejde. Grammatikken frembringer tanken; sproget kommunikerer den. De næste to eksempler viser det.</p>
        <h3 className={styles.headline}>Et andet eksempel</h3>
        <p>Tag en anden sætning: <em className={styles.example}>Børnene legede i haven.</em></p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Børnene legede i haven.</div>
          <p><strong>Ordklasser:</strong> <em className={styles.target}>børn</em> substantiv, <em className={styles.target}>-ene</em> artikel (hæftet på substantivet), <em className={styles.target}>legede</em> verbum, <em className={styles.target}>i</em> præposition, <em className={styles.target}>have</em> substantiv, <em className={styles.target}>-n</em> artikel (hæftet på substantivet).</p>
          <p><strong>Modus:</strong> indikativ.</p>
          <p><strong>Diatese:</strong> aktiv.</p>
          <p><strong>Aspekt:</strong> progressivt. Legen ses som igangværende, ikke som én afsluttet handling.</p>
          <p><strong>Sætning:</strong> fremsættende hovedsætning.</p>
          <p><strong>Syntaks:</strong> <em className={styles.target}>børnene</em> subjekt, <em className={styles.target}>legede</em> verbum, <em className={styles.target}>i haven</em> adverbium.</p>
        </div>
        <p>Sammenlignet med den første sætning er det kun aspektet, der er anderledes. Ét begreb ændrer sig, og tanken ændrer sig med det: et afsluttet indkøb bliver til en igangværende leg. På dansk har <em>købte</em> og <em>legede</em> samme form, men aspektet er der alligevel, i tanken. Dansk markerer det bare ikke, og det er paragrammatik.</p>
        <h3 className={styles.headline}>Det, der ikke bliver sagt</h3>
        <p>Nogen spørger: <em>Hvornår rejser du?</em> Du svarer kun: <em className={styles.example}>I morgen.</em></p>
        <p>Kun <em>i morgen</em> bliver sagt, men tilhøreren forstår en hel tanke: <em className={styles.target}>[Jeg rejser]</em> <em>i morgen</em>. Ordene i klammer bliver ikke sagt. De er underforståede, og grammatikken leverer dem.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>[Jeg rejser] i morgen.</div>
          <p><strong>Ordklasser:</strong> <em className={styles.target}>[jeg]</em> pronomen, <em className={styles.target}>[rejser]</em> verbum, <em className={styles.target}>i morgen</em> adverbium.</p>
          <p><strong>Modus:</strong> indikativ.</p>
          <p><strong>Diatese:</strong> aktiv.</p>
          <p><strong>Aspekt:</strong> progressivt.</p>
          <p><strong>Sætning:</strong> fremsættende hovedsætning.</p>
          <p><strong>Syntaks:</strong> <em className={styles.target}>[jeg]</em> subjekt, <em className={styles.target}>[rejser]</em> verbum, <em className={styles.target}>i morgen</em> adverbium.</p>
        </div>
        <p>Alle seks begreber er i funktion, selv om kun to ord blev sagt. Det er, hvad det betyder, at grammatikken frembringer tanken: tanken er fuldendt, før et eneste ord er valgt. Hvor meget af den vi siger højt, er paragrammatik.</p>
        <h3 className={styles.headline}>Ordklasserne</h3>
        <p>Før vi opregner ordklasserne, lad os definere dem.</p>
        <p className={styles.lead}><Def term="Ordklasserne">er ikke-semiotiske kategorier af samvirkende begreber, der tydeliggør talens semantik.</Def><span className={styles.defLabel}>(def-5)</span></p>
        <p><em>Ikke-semiotisk</em> betyder, at ordklasserne ikke har nogen morfologi; det vil sige, at vi ikke tager morfologien i betragtning, når vi beskæftiger os med ordklasserne. <em>Semantik</em> betyder betydning.</p>
        <p>Det følger heraf, at definitionen af hver ordklasse skal overholdes strengt og uden undtagelse.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Note 1</div>
          <p>Den ordklasse, et ord tilhører i en given sætning, afgøres udelukkende af den definition, hvis kriterier ordet faktisk opfylder.</p>
          <p>Hver ordklasse har en bestemt definition. Definitionernes kriterier er udelukkende semantiske, aldrig morfologiske.</p>
        </div>
        <p>Der er ti ordklasser, de samme på alle sprog. Nogle sprog, som polsk og kinesisk, har ingen artikler, så de har ni.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>De ti ordklasser</div>
          <p>1. Substantiver</p>
          <p>2. Artikler</p>
          <p>3. Pronomener</p>
          <p>4. Adjektiver</p>
          <p>5. Verber</p>
          <p>6. Participier</p>
          <p>7. Adverbier</p>
          <p>8. Præpositioner</p>
          <p>9. Konjunktioner</p>
          <p>10. Interjektioner</p>
        </div>
        <p className={styles.lead}><Def term="Substantiver">er ord, der navngiver entiteter.</Def><span className={styles.defLabel}>(def-6)</span></p>
        <p>En entitet er alt, hvad vi kan navngive: en person, en ting, et sted, en idé. <em className={styles.target}>Fisk</em>, <em className={styles.target}>København</em>, <em className={styles.target}>lærer</em> og <em className={styles.target}>retfærdighed</em> er alle substantiver, fordi hvert af dem navngiver en entitet.</p>
        <p>Definitionen afgør det, ikke formen. I <em className={styles.example}>At svømme er sundt</em> har <em className={styles.target}>at svømme</em> form som et verbum, men her navngiver det en aktivitet som en entitet. Det opfylder definitionen af et substantiv, så det er et substantiv.</p>
        <p className={styles.lead}><Def term="Artikler">er de ord, der bestemmer substantivers selektivitet.</Def><span className={styles.defLabel}>(def-7)</span></p>
        <p>Sammenlign <em className={styles.example}>Jeg købte en fisk</em> med <em className={styles.example}>Jeg købte fisken</em>. Med <em className={styles.target}>en</em> er fisken ikke udvalgt: det er en hvilken som helst fisk. Med <em className={styles.target}>-en</em> er fisken udvalgt: det er en bestemt fisk, som både den talende og den lyttende kender. Substantivet er det samme; artiklen bestemmer, hvor selektivt det er. At dansk hæfter den bestemte artikel på substantivet, er paragrammatik.</p>
        <p className={styles.lead}><Def term="Pronomener">er ord, der bruges i stedet for substantiver.</Def><span className={styles.defLabel}>(def-8)</span></p>
        <p>I <em className={styles.example}>Maria købte en fisk. Hun stegte den.</em> står <em className={styles.target}>hun</em> i stedet for <em className={styles.target}>Maria</em>, og <em className={styles.target}>den</em> står i stedet for <em className={styles.target}>fisk</em>. I vores første sætning står <em className={styles.target}>vi</em> i stedet for navnene på dem, der købte fisken.</p>
        <p className={styles.lead}><Def term="Adjektiver">er ord eller grupper af ord, der karakteriserer substantiver.</Def><span className={styles.defLabel}>(def-9)</span></p>
        <p>I <em className={styles.example}>frisk fisk</em> karakteriserer <em className={styles.target}>frisk</em> substantivet <em className={styles.target}>fisk</em>, så det er et adjektiv.</p>
        <p>Et adjektiv kan også være en gruppe af ord. I <em className={styles.example}>fisk fra torvet</em> karakteriserer gruppen <em className={styles.target}>fra torvet</em> substantivet <em className={styles.target}>fisk</em>. Ifølge definitionen er den et adjektiv.</p>
        <p className={styles.lead}><Def term="Verber">er ord, der tager et subjekt.</Def><span className={styles.defLabel}>(def-10)</span></p>
        <p className={styles.lead}><Def term="Subjekter">instantierer verbers betydning.</Def><span className={styles.defLabel}>(def-11)</span></p>
        <p>Alene er <em className={styles.target}>købte</em> kun en betydning: en handling at købe, udført af ingen bestemt. I <em className={styles.example}>Vi købte fisk</em> instantierer subjektet <em className={styles.target}>vi</em> den betydning: købet bliver en handling, som nogen faktisk har udført.</p>
        <p className={styles.lead}><Def term="Participier">er afledninger af verber, der indleder genfindelige elliptiske sætninger.</Def><span className={styles.defLabel}>(def-12)</span></p>
        <p>Et participium står for en hel sætning, der er blevet forkortet. Sætningen kan altid genfindes:</p>
        <p><em className={styles.example}>Ankommet til byen fandt han et hotel.</em> = <em>Da han var ankommet til byen, fandt han et hotel.</em></p>
        <p><em className={styles.example}>Overrasket over nyheden sagde hun ingenting.</em> = <em>Fordi hun var overrasket over nyheden, sagde hun ingenting.</em></p>
        <p>I begge tilfælde er den elliptiske sætning blevet genfundet, og betydningen er uændret.</p>
        <p className={styles.lead}><Def term="Adverbier">er ord eller grupper af ord, der bestemmer verber, adjektiver, andre adverbier og også sætninger med hensyn til tid, sted, måde, hyppighed, grad, holdning eller opfattelse.</Def><span className={styles.defLabel}>(def-13)</span></p>
        <p>Adverbier svarer på spørgsmålene <em>hvor?</em>, <em>hvordan?</em>, <em>hvornår?</em> og <em>hvor meget?</em> Det sidste kan udvides: <em>hvor ofte? hvor højt? hvor sikkert? hvor meget bedre?</em> Et adverbium kan endda være et svar i sig selv.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Fire eksempler</div>
          <p>1. <em className={styles.example}>Maria synger smukt.</em> Adverbiet <em className={styles.target}>smukt</em> bestemmer verbet <em className={styles.target}>synger</em>. <em>Hvordan synger Maria? Smukt!</em> Det er et mådesadverbium.</p>
          <p>2. <em className={styles.example}>Nogle mennesker er utroligt naive.</em> Adverbiet <em className={styles.target}>utroligt</em> bestemmer adjektivet <em className={styles.target}>naive</em>. Det er et gradsadverbium: det fortæller, hvor naive.</p>
          <p>3. <em className={styles.example}>Vi går og bader meget tidligt.</em> Adverbiet <em className={styles.target}>meget</em> bestemmer adverbiet <em className={styles.target}>tidligt</em>. <em>Meget</em> er et gradsadverbium; <em>tidligt</em> er et tidsadverbium.</p>
          <p>4. <em className={styles.example}>Måske tror de ikke på dig.</em> Adverbiet <em className={styles.target}>måske</em> bestemmer hele sætningen <em className={styles.target}>de tror ikke på dig</em>. Det udtrykker sandsynlighed.</p>
        </div>
        <p className={styles.lead}><Def term="Præpositioner">er ord eller grupper af ord, der tager substantiver eller nominalfraser som objekt og udtrykker sted, tid, retning, årsag, måde og så videre.</Def><span className={styles.defLabel}>(def-14)</span></p>
        <p>Der findes ingen præposition uden objekt.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Tre eksempler</div>
          <p>1. <em className={styles.example}>Jeg gav bøgerne til dem.</em> Præpositionen <em className={styles.target}>til</em> tager objektet <em className={styles.target}>dem</em>, et pronomen, der står i stedet for et substantiv, og udtrykker retning.</p>
          <p>2. <em className={styles.example}>Nøglerne er i min lomme.</em> Præpositionen <em className={styles.target}>i</em> tager nominalfrasen <em className={styles.target}>min lomme</em> og udtrykker sted.</p>
          <p>3. <em className={styles.example}>Jeg studerede problemet i dybden.</em> Præpositionen <em className={styles.target}>i</em> tager substantivet <em className={styles.target}>dybden</em> og udtrykker måde.</p>
        </div>
        <p className={styles.lead}><Def term="Nominalfraser">er fraser, der indeholder substantiver eller pronomener og kan fungere som subjekter, objekter eller prædikativer.</Def><span className={styles.defLabel}>(def-15)</span></p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Tre eksempler</div>
          <p>1. <em className={styles.target}>drama</em> → substantiv; <em className={styles.target}>meget drama</em> → nominalfrase. <em className={styles.example}>Hvis en film har meget drama, er den som regel trættende.</em> <em>Meget drama</em> er direkte objekt for verbet <em>har</em>.</p>
          <p>2. <em className={styles.target}>historie</em> → substantiv; <em className={styles.target}>en lang historie</em> → nominalfrase. <em className={styles.example}>Hendes liv er en lang historie.</em> <em>En lang historie</em> er prædikativ til verbet <em>er</em>.</p>
          <p>3. <em className={styles.target}>øjeblikke</em> → substantiv; <em className={styles.target}>de svære øjeblikke</em> → nominalfrase. <em className={styles.example}>De svære øjeblikke former karakteren.</em> <em>De svære øjeblikke</em> er subjekt for verbet <em>former</em>.</p>
        </div>
        <p className={styles.lead}><Def term="Konjunktioner">er ord eller grupper af ord, der etablerer et underordningsforhold, det vil sige et gensidigt afhængighedsforhold, mellem sætninger.</Def><span className={styles.defLabel}>(def-16)</span></p>
        <p>Alle konjunktioner er hypotaktiske. Forestillingen om, at nogle konjunktioner er parataktiske, er ubegrundet og vil blive behandlet <strong>til sin tid</strong>.</p>
        <p>Konventionelle grammatikbøger deler konjunktionerne i to kategorier: sideordnende og underordnende. Men hvorfor foretages denne opdeling, og hvad bidrager den med til forståelsen af grammatikken?</p>
        <p>Konjunktionerne opdeles på denne måde, fordi de såkaldte grammatikere ikke har forstået, at hvis vi fjerner konjunktionen fra en hvilken som helst bisætning, bliver den – med undtagelse af betingelsessætninger – automatisk en hovedsætning. Det sker ikke kun med de »sideordnende« konjunktioner, men med alle konjunktioner.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Fjern konjunktionen</div>
          <p>1. <em className={styles.example}>Jeg blev hjemme, fordi det regnede.</em> Uden <em className={styles.target}>fordi</em>: <em>Det regnede.</em> En hovedsætning.</p>
          <p>2. <em className={styles.example}>Jeg blev hjemme, men hun gik ud.</em> Uden <em className={styles.target}>men</em>: <em>Hun gik ud.</em> En hovedsætning.</p>
        </div>
        <p>Som regel er det tilstedeværelsen af en konjunktion, der gør en sætning til en bisætning. Historien slutter dog ikke her. Som vi skal se, er selv sætninger uden nogen konjunktion undertiden bisætninger, fordi semantikken selv kræver det.</p>
        <p>De nominelle forfattere af grammatikbøger kopierer simpelthen andre grammatikbøger og indsætter kopien i en »ny« bog, idet de kun ændrer nogle få overfladiske detaljer for at bevare skinnet. Det siger sig selv, at det eneste, denne opdeling af konjunktionerne bidrager med til grammatikken, er rigelig og gennemgribende forvirring.</p>
        <p>Det er også meget vigtigt at påpege, at definitionerne af begreber i disse bøger, når de overhovedet gives, ikke opfylder horistikkens krav. Derudover overtræder »forfatterne« af disse bøger gang på gang netop de definitioner, de angiveligt selv har formuleret. Sandheden er, at de simpelthen kopierer den definition fra andre bøger, der tilfældigvis fanger deres opmærksomhed.</p>
        <p className={styles.lead}><Def term="Interjektioner">er ord eller grupper af ord, der udtrykker følelse og ikke har nogen syntaktisk rolle.</Def><span className={styles.defLabel}>(def-17)</span></p>
        <p>Ved følelse forstår vi også <strong>vilje</strong> (<em className={styles.target}>sch!</em> i betydningen stilhed, <em className={styles.target}>kom så!</em>), <strong>tøven</strong> (<em className={styles.target}>hm</em>, <em className={styles.target}>øh</em>) og <strong>social konvention</strong> (<em className={styles.target}>hej</em>, <em className={styles.target}>tak</em>), når disse ord bruges som udråb.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Fire eksempler</div>
          <p>1. <em className={styles.example}>Puha, endelig er det overstået!</em> Ordet <em className={styles.target}>puha</em> har ingen syntaktisk rolle: det er hverken subjekt, prædikativ, objekt eller noget andet. Det gælder for alle interjektioner.</p>
          <p>2. <em className={styles.example}>Åh, hvor jeg savner min mor!</em></p>
          <p>3. <em className={styles.example}>Av, hvad er der sket med mig!</em></p>
          <p>4. <em className={styles.example}>Bravo, det gjorde du perfekt!</em></p>
        </div>
        <p>En håndfuld ord passer ikke til nogen af de ti ordklassers definitioner. Dem kalder vi partikler.</p>
        <p>
          <em>I næste udgave: modi, gennemgået i detaljer.</em>
        </p>
      </Story>

      {/* Højre spalte */}
      <Story id="politics">
        <h2 className={styles.headlineSpan}>Loven vs. straffen for at bryde loven</h2>
        <p className={styles.lead}>At håndhæve straffen for at bryde loven er ikke selve loven.</p>
        <p>Hvad er retfærdighed? Lad os definere den:</p>
        <p className={styles.lead}><Def term="Retfærdighed">er forebyggelse af kriminalitet.</Def></p>
        <p>
          Når en forbrydelse først er begået, kan der ikke ske retfærdighed, fordi
          retfærdighed er at forebygge kriminalitet. Det, der følger – anholdelse,
          retssag, fængsling – har med straffen for at bryde loven at gøre, og det
          er ikke retfærdighed. Det, der kaldes retshåndhævelse, er altså i
          virkeligheden strafhåndhævelse.
        </p>
        <p>
          Dette afslører meget om definitionernes afslørende kraft, og det, den
          afslører, er centralt for et utal af misforståelser, der afsporer
          millioner af menneskers liv.
        </p>
        <p>
          Tænk på den vending, vi hører i nyhederne efter hver dom:
          »Retfærdigheden er sket fyldest.« Det er den ikke. Der er sket straf.
          Den retfærdighed, der kunne være sket, var forebyggelsen af
          forbrydelsen, og det øjeblik var forbi, før forbrydelsen fandt sted. Det,
          der er tilbage bagefter, er en konsekvens, ikke en afhjælpning.
        </p>
        <p>
          Tænk på offeret. Vi fortæller offeret, at der vil ske retfærdighed, at
          dommen vil bringe retfærdighed. Men skaden er allerede sket, og ingen dom
          gør den ugjort. Offeret bliver lovet én ting og får en anden. Mange venter
          i årevis på en retssag i håb om lettelse, og når dommen falder, føler de
          sig underligt tomme. De tog ikke fejl i at føle det. De fik det forkerte
          ord.
        </p>
        <p>
          Retfærdighed forveksles med straf, med hævn, med økonomisk erstatning og
          med det lovlige. Den er ingen af dem. Straf er den sanktion, der pålægges
          efter forbrydelsen. Hævn er skade gengældt med skade. Erstatning er penge
          betalt for skade, der allerede er sket. Det lovlige er det, loven tillader
          eller forbyder, og det er ikke usædvanligt, at det lovlige er
          uretfærdigt, og at det retfærdige er ulovligt. Opioider blev lovligt
          markedsført og ordineret i massivt omfang, og en afhængighedsepidemi
          fulgte. I mange lande straffes mennesker for at ytre sig frit. Alle fire
          kommer efter forbrydelsen eller står ved siden af den. Ingen af dem
          forebygger den, og derfor er ingen af dem retfærdighed.
        </p>
        <p>
          Tænk på politikeren. Når politikere lover at slå hårdt ned på
          kriminalitet, mener de næsten altid hårdere straffe: længere domme, flere
          fængsler, mere politi efter gerningen. Hver af disse handler først, efter
          at en forbrydelse er begået. Ifølge definitionen er ingen af dem
          retfærdighed. En regering, der bruger det meste af sin indsats på
          straffe, er ikke en regering, der skaber retfærdighed. Den forvalter
          retfærdighedens fiasko.
        </p>
        <p>
          Hvis retfærdighed er forebyggelse af kriminalitet, betyder retfærdighed
          at fjerne de årsager, der får nogen til at begå en forbrydelse, så
          borgerne slet ikke har nogen grund til at begå forbrydelser. Bag enhver
          forbrydelse ligger der en årsag, hvad enten det er nød, uvidenhed,
          udstødelse eller fortvivlelse. Fjern årsagen, og forbrydelsen har intet
          at vokse af.
        </p>
        <p>
          Det er først og fremmest politikkens pligt, når politik defineres
          korrekt. Ikke domstolenes, som kommer for sent. Ikke politiets, som
          kommer efter opkaldet. Ikke fængslernes, som rummer konsekvenserne af en
          fiasko, der allerede er sket. Politik er den eneste institution, der står
          før forbrydelsen, der hvor årsagerne til den formes, og derfor er den den
          eneste, der overhovedet kan skabe retfærdighed.
        </p>
        <OneColumn>
          <p>
            Én definition, præcist formuleret, flytter retfærdigheden fra retssalen
            til klasseværelset, fra fængslet til hjemmet, fra slutningen af
            historien til dens begyndelse. Det er definitionernes afslørende kraft.
            Et samfund, der forveksler straf med retfærdighed, vil blive ved med at
            bygge fængsler og undre sig over, hvorfor kriminaliteten ikke forsvinder.
            Et samfund, der definerer retfærdighed korrekt, vil stille et andet
            spørgsmål: ikke hvordan man straffer, men hvordan man forebygger.
          </p>
        </OneColumn>
      </Story>

    </FrontPage>

    {/* ═════════════ FORTSÆTTELSE AF GRAMMATIKARTIKLEN ═════════════ */}
    <Continue id="grammar" />

    {/* ═════════════ FORTSÆTTELSE AF RETFÆRDIGHEDSARTIKLEN ═════════════ */}
    <Continue id="politics" />

    {/* ═════════════ FORTOLKENDE NYHEDER ═════════════ */}
    {!schools && (<>
    <div className={styles.kicker}>Fortolkende nyheder</div>
    <h2 className={styles.headlineSpan}>Brugen af atomvåben er ikke længere utænkelig</h2>
    <OneColumn>
      <p className={styles.lead}>Theodor Herzl var visionæren bag Stor-Israel</p>
      <figure className={styles.figure}>
        <img src="/paper/images/Herzl.jpeg" alt="Theodor Herzl" />
        <figcaption>Theodor Herzl</figcaption>
      </figure>
      <p>
        Theodor Herzl (1860–1904) var en østrig-ungarsk jødisk journalist,
        forfatter og politisk aktivist, som blev den centrale grundlægger af den
        moderne politiske zionisme.
      </p>

      <div className={styles.box}>
        <div className={styles.boxTitle}>Theodor Herzl</div>
        <p><strong>Født:</strong> Budapest, 2. maj 1860</p>
        <p><strong>Død:</strong> Edlach, Østrig, 3. juli 1904 (begravet i Wien)</p>
        <p><strong>Erhverv:</strong> journalist, dramatiker, forfatter</p>
        <p><strong>Hovedværk:</strong> <em>Der Judenstaat</em> (Jødestaten), 1896</p>
        <p>
          <strong>Politisk rolle:</strong> organiserede den første zionistiske
          kongres i Basel i 1897 og blev præsident for den nyoprettede
          Zionistiske Organisation.
        </p>
        <p>
          <strong>Mål:</strong> et offentligt og retligt sikret hjemland for det
          jødiske folk.
        </p>
      </div>

      <p>
        Han søgte international diplomatisk støtte til projektet, herunder
        gennem forhandlinger med Det Osmanniske Rige og den britiske regering.
      </p>
      <p>
        Herzl døde årtier før oprettelsen af staten Israel i 1948 og deltog
        derfor ikke i selve statens tilblivelse. Hans skrifter og politiske
        organisation blev ikke desto mindre grundlæggende for den zionistiske
        bevægelse.
      </p>
      <p>
        For at slå tonen an, lad os gå tilbage til London i oktober 1902. Den
        23. oktober trådte Herzl ifølge sin egen dagbog ind på kontoret hos Joseph
        Chamberlain, Storbritanniens kolonisekretær, kvart over tolv. Han kom med
        en anmodning: et territorium under britisk kontrol til jødisk
        kolonisering. Han nævnte tre steder: Cypern, El-Arish og Sinaihalvøen.
      </p>
      <p>
        Der findes intet referat af mødet. Det, der er bevaret, er Herzls egen
        beretning, skrevet i hans dagbog dagen efter. Den er primærkilden, og den
        er afslørende netop fordi den er hans.
      </p>
      <p>
        Herzl forklarede, hvorfor han ikke bare kunne vente på sine forhandlinger
        med den osmanniske sultan, som herskede over Palæstina. Han sammenlignede
        dem med at købe et tæppe: »Hvis man vil købe et tæppe, må man først drikke
        et halvt dusin kopper kaffe og ryge hundrede cigaretter; så taler man om
        familiehistorier, og en gang imellem siger man igen et par ord om tæppet.
        Jeg har tid til at forhandle, men det har mit folk ikke. De sulter i
        bosættelsesområdet. Jeg må bringe dem øjeblikkelig hjælp.«
      </p>
      <p>
        Chamberlain svarede, at han kun kunne udtale sig med myndighed om Cypern,
        fordi El-Arish og Sinai hørte under udenrigsministeriet. Om Cypern
        gengiver Herzl hans svar:
      </p>
      <blockquote className={styles.pull}>
        »Cypern er beboet af grækere og muslimer. Jeg kunne ikke fortrænge dem for
        nye indvandreres skyld. Tværtimod ville det være min pligt at tage deres
        parti.«
      </blockquote>
      <p>
        Chamberlain tilføjede derefter, at hvis Herzl kunne pege på et sted i
        Storbritanniens besiddelser, hvor der ikke boede hvide, ville han være
        villig til at drøfte det.
      </p>
      <p>
        Herzl slap ikke Cypern. Han foreslog at skabe en strømning til fordel for
        jødisk bosættelse på øen, drevet af jødisk kapital. Med hans egne ord:
      </p>
      <blockquote className={styles.pull}>
        »Når vi først opretter Det Jødiske Østlige Kompagni med 5 millioner pund
        i kapital til bosættelse af Sinai og El-Arish, vil cyprioterne også
        begynde at ønske den gyldne regn over deres ø. Muslimerne vil flytte væk,
        grækerne vil gerne sælge deres jord til en god pris og udvandre til Athen
        eller Kreta.«
      </blockquote>
      <p>
        Og Herzl noterer straks Chamberlains reaktion: »Han syntes at tage godt
        imod idéen.«
      </p>
      <p>
        Rækkefølgen er vigtig. Chamberlain nægtede at fortrænge Cyperns grækere
        og muslimer. Herzl svarede med en plan, hvorefter de ville forlade øen af
        sig selv: muslimerne ville flytte væk, grækerne ville sælge og udvandre.
        Og ifølge Herzls beretning syntes Chamberlain at tage godt imod den. Dette
        er ikke en senere fortolkning af Herzls holdning. Det står i hans egen
        dagbog, skrevet under hans forhandlinger i London i oktober 1902.
      </p>
      <p>
        Dagen efter sørgede Chamberlain for, at Herzl kunne mødes med
        udenrigsminister Lord Lansdowne. Men han bad Herzl holde Cypern uden for
        det møde: »Den del af planen, der vedrører Cypern, er min sag.«
      </p>
      <p>
        Dermed lukkede Cypern-muligheden. Storbritannien undersøgte El-Arish, men
        den plan strandede på den egyptiske regerings holdning og mangel på vand.
        I 1903 tilbød Chamberlain noget helt andet: et territorium i Britisk
        Østafrika, den såkaldte Uganda-plan.
      </p>
      <p>
        Mange hævder, at angrebet den 7. oktober 2023 blev tilladt at finde sted,
        så Netanyahu-regeringen kunne bruge det til at retfærdiggøre fordrivelsen
        af palæstinensere fra Gaza. Dette genlyder et aspekt af Theodor Herzls
        tænkning: da han drøftede Cypern med Joseph Chamberlain i 1902,
        forestillede Herzl sig, at den muslimske befolkning ville rejse, og at den
        græske befolkning ville sælge og udvandre til Athen eller Kreta.
      </p>
      <p>
        Israel fører nu en politik, der sigter mod at ændre det iranske regime.
        Givet Irans størrelse, befolkning, geografi, militære kapacitet og
        dokumenterede modstandskraft er det dog langt fra sikkert, at Iran ville
        kapitulere alene gennem konventionelle militære operationer. Konflikten
        har allerede vist Irans evne til at absorbere betydeligt militært pres og
        samtidig fortsætte med at gengælde.
      </p>
      <p>
        Alligevel kan hverken Israel eller USA let opgive målet. Begge har
        investeret massivt i regimeskifte, og at opgive det ville betyde et
        alvorligt prestigetab og et hårdt psykologisk slag for dem begge.
      </p>
      <p>
        Samtidig foreligger der rapporter om et stigende israelsk engagement på
        Cypern, herunder israelske investeringer og sikkerhedssamarbejde. Hvis den
        israelske regering på et tidspunkt konkluderer, at militært pres ikke vil
        føre til regimeskifte i Iran, opstår et farligt spørgsmål: Ville den
        eskalere til brug af taktiske atomvåben? Et sådant skridt ville ikke
        nødvendigvis garantere den iranske stats sammenbrud og kunne i stedet
        udløse en ukontrollabel eskalering.
      </p>
      <p>
        Konsekvenserne kunne række langt ud over Mellemøsten. Et israelsk
        atomangreb kunne skabe pres på andre atommagter, herunder Rusland og
        Kina, for at gribe ind eller svare militært. Om de faktisk ville bruge
        atomvåben, kan ikke forudsiges, men muligheden ville gøre en sådan
        eskalering til en trussel mod hele det internationale samfund.
      </p>
      <p>
        Donald Trumps trussel ved FN's Generalforsamling den 22. september 2026,
        da han spurgte, om han skulle »udslette Den Islamiske Republik«, hvis der
        ikke blev indgået en fredsaftale, viser, hvor ekstrem den nuværende
        retorik er blevet. Muligheden for yderligere eskalering vedrører derfor
        ikke blot Israel, Iran eller Mellemøsten, men potentielt hele
        menneskeheden.
      </p>
    </OneColumn>
    </>)}

    {/* ═════════════ ABONNEMENT + KOLOFON ═════════════ */}
    <PageBreak />
    <h2 className={styles.headlineSpan} data-nonum>Abonnement</h2>
    <OneColumn>
      <p>
        Udkommer hver måned på dansk, polsk, græsk og spansk, hver med en engelsk
        udgave. Fås på tryk og som PDF.
      </p>
      <h3 className={styles.headline}>Skoler</h3>
      <p>1.995 kr. (268 €) om året pr. skole. Omfatter PDF-udgaven på alle sprog, som skolen må kopiere til egne elever og lærere.</p>
      <h3 className={styles.headline}>Virksomheder og organisationer</h3>
      <p>1.495 kr. (200 €) om året. Omfatter PDF-udgaven til op til 10 læsere. Større grupper efter aftale.</p>
      <h3 className={styles.headline}>Privatpersoner</h3>
      <p>Tryk: 799 kr. (107 €) om året. PDF: 399 kr. (54 €) om året. Enkeltnummer: 20 kr. (2,70 €).</p>
      <h3 className={styles.headline}>Grammatikundervisning</h3>
      <p>Individuel undervisning og holdundervisning i grammatik på engelsk, græsk og spansk. Henvendelse: mind@horistics.com.</p>
      <h3 className={styles.headline}>Kontakt</h3>
      <p>Abonnér ved at skrive til mind@horistics.com med navn, adresse og den udgave, du ønsker. Betal med MobilePay 27 13 44 83.</p>

      <div className={styles.imprint}>
        <div><strong>Ansvarshavende redaktør:</strong> {ISSUE.editor}</div>
        <div><strong>Udgiver:</strong> {ISSUE.publisher}</div>
        <div>{ISSUE.issn} · {ISSUE.number}, {ISSUE.date}</div>
      </div>
    </OneColumn>
  </>
);

export const danish: Edition = {
  lang: "da",
  name: ISSUE.name,
  date: ISSUE.date,
  masthead,
  continuedOn: "Fortsættes på side {n} →",
  continuedFrom: "Fortsat fra side 1",
  content: content(false),
};

// Skoleudgave: samme avis uden artiklen under Fortolkende nyheder.
export const danishSchools: Edition = { ...danish, content: content(true), oneColumn: true };
