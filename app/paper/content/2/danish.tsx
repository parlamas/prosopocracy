import styles from "../../paper.module.css";
import { PageBreak, OneColumn, FrontPage, Story, Continue, Def, type Edition } from "../../Paginator";

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
  number: "Nr. 2",
  date: "9. november 2026",
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
    <FrontPage>

      <Story id="voice">
        <h2 className={styles.headlineSpan}>Genus verbi er ikke diatese</h2>
        <h3 className={styles.headline}>Et ord, der betyder lyd</h3>
        <p>Slå op i en hvilken som helst grammatikbog om dansk, engelsk eller næsten ethvert andet sprog, og du finder »aktiv« og »passiv« under betegnelsen genus verbi, på engelsk <em>voice</em>. Du finder ikke en definition af <em>voice</em>.</p>
        <p>Ordet kommer af latin <em>vox</em>, som betyder lyd. Det siger intet om et subjekt eller en handling. I bedste fald beskriver bøgerne, hvad de mener: »det viser, om subjektet handler eller bliver handlet på«. Men en beskrivelse under det forkerte navn er ikke en definition. Eleven lærer navnet og forstår intet.</p>
        <p>Det, bøgerne mener, er ikke <em>voice</em>. Det er <strong>diatese</strong> (διάθεσις, flertal διαθέσεις). De to er forskellige ting, og de skal defineres hver for sig.</p>
        <h3 className={styles.headline}>To definitioner</h3>
        <p className={styles.lead}><Def term="Diatese">er energiens oprindelse i sætningen, sådan som den angår subjektet.</Def><span className={styles.defLabel}>(def-18)</span></p>
        <p>Energi betyder her energi, sådan som vi studerer den i fysikken. Det er ikke en metafor; hvert ord er ment bogstaveligt. For at finde diatesen spørger vi, hvor energien kommer fra, og hvad den gør ved subjektet.</p>
        <p className={styles.lead}><Def term="Voice">er et særligt, fuldstændigt sæt af verbalformer, der ledsager en diatese.</Def><span className={styles.defLabel}>(def-19)</span></p>
        <p><em>Voice</em> er morfologi: verbets form. Diatese er energiens forhold til subjektet. Det ene hører til formen, det andet til betydningen. Et sprog kan udtrykke en diatese uden at have en <em>voice</em> for den.</p>
        <h3 className={styles.headline}>Hvilke sprog har voice</h3>
        <p>Testen er streng. Sættet skal være <strong>fuldstændigt</strong>: hver person, hver tid, hver modus. Hver form skal være <strong>ét ord</strong>: et hjælpeverbum plus den aktive form er en omskrivning, ikke en <em>voice</em>. Og sættet skal være <strong>særligt</strong>: dets former skal være forskellige fra det samme verbums aktive former.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Klassisk græsk: λύω, »løsne«</div>
          <p><strong>Præsens:</strong> λύω, λύεις, λύει → λύομαι, λύῃ, λύεται</p>
          <p><strong>Aorist:</strong> ἔλυσα, ἔλυσας, ἔλυσε → ἐλύθην, ἐλύθης, ἐλύθη</p>
          <p>Hver person, tid og modus har sin egen passive form i ét ord, forskellig fra den aktive form.</p>
        </div>
        <p>Blandt de veldokumenterede sprog består kun klassisk græsk og sanskrit alle tre test. Begge har to fuldstændige sæt verbalformer, et aktivt og et medium-passivt, i alle tider og modi: græsk λύει → λύεται, sanskrit <em>bharati</em> → <em>bhriyate</em>.</p>
        <p>Alle andre sprog dumper i mindst én test. Engelsk, spansk og hindi bruger et hjælpeverbum, og det er en omskrivning. Latin gør det i perfektum (<em>amatus sum</em>). Arabisk og hebraisk har passive former i ét ord kun i nogle tider (<em>kataba</em> → <em>kutiba</em>); de andre tider kræver et hjælpeord, og der findes ingen passiv imperativ. Tyrkisk og japansk indskyder et element, der danner et nyt verbum (<em>yazmak</em>, skrive → <em>yazılmak</em>, blive skrevet); dets former er det nye verbums aktive former, ikke et sæt i det samme verbum. Dansk og svensk har én form på <em>-s</em>, og én form er ikke et sæt. Nygræsk har passive former i ét ord i præsens og datid (κοιτάζω → κοιτάζομαι, κοίταξα → κοιτάχτηκα), men dets perfektum kræver et hjælpeord (έχω κοιταχτεί).</p>
        <p><em>Voice</em> i fuld forstand tilhører klassisk græsk og sanskrit. Intet sprog, der tales i dag, har det. Så når en grammatikbog i dag underviser i »passiv« som <em>voice</em>, underviser den i noget, sproget ikke har.</p>
        <h3 className={styles.headline}>De fem diateser</h3>
        <p>Alle sprog har de samme fem, fordi hver af dem afgøres af ét spørgsmål med et fysisk svar: hvor kommer energien fra, og hvad gør den ved subjektet?</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>De fem diateser</div>
          <p><strong>Aktiv.</strong> Energien kommer fra subjektet og forlader det. <em className={styles.example}>Jeg skriver brevet.</em></p>
          <p><strong>Passiv.</strong> Energien kommer udefra, og subjektet selv bliver forandret, fysisk eller i status. <em className={styles.example}>Ruden blev knust. Han blev valgt.</em></p>
          <p><strong>Medium.</strong> Energien kommer fra subjektet, forlader det og vender tilbage til det. <em className={styles.example}>Λούζομαι.</em> (Jeg vasker mit hår.)</p>
          <p><strong>Indre.</strong> Energien kommer fra subjektet og forlader det aldrig. <em className={styles.example}>Jeg er bekymret.</em></p>
          <p><strong>Receptiv.</strong> Energien kommer udefra; kun det modtagende organ påvirkes, og subjektet forbliver, som det var. <em className={styles.example}>Jeg ser en blå fugl i det træ.</em></p>
        </div>
        <p>To tilfælde viser, hvordan testen virker.</p>
        <p><em className={styles.example}>Jeg er bekymret.</em> Hvor kommer energien fra? Ikke udefra: sætningen nævner ingen kilde, og bekymringen sker i subjektets egen krop og sind. Den går ikke ud og vender tilbage som i medium. Den begynder i subjektet og bliver der. <strong>Indre.</strong></p>
        <p><em className={styles.example}>Jeg ser en blå fugl i det træ.</em> Energien er lys. Den kommer fra solen, kastes tilbage af fuglen og rammer øjet. Subjektet sender intet ud. Øjet påvirkes, men subjektet forandres ikke. <strong>Receptiv</strong>, ikke passiv.</p>
        <h3 className={styles.headline}>Hvorfor skolens definition svigter</h3>
        <p>Græsk skolegrammatik siger: <em>Διάθεση του ρήματος είναι η σχέση του υποκειμένου με την ενέργεια που φανερώνει το ρήμα</em> (subjektets forhold til den handling, verbet udtrykker). Derefter opregner den fire: aktiv, passiv, medium og neutral.</p>
        <p>Tre ting er forkerte.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Tre fejl</div>
          <p>1. <strong>Den stiller det forkerte spørgsmål.</strong> Et »forhold til handlingen« har intet fast holdepunkt. Spørgsmålet er energiens <em>oprindelse</em>, og det har et fysisk svar.</p>
          <p>2. <strong>Den bruger »ενέργεια« uden at definere det.</strong> Ordet står der, men bøgerne siger aldrig, hvad det er, eller hvor det kommer fra.</p>
          <p>3. <strong>Dens fjerde klasse er defineret ved, hvad den ikke er.</strong> »Neutral« betyder, at subjektet hverken virker på noget andet eller modtager. En klasse, der kun er defineret ved nægtelse, er en restkasse. Indre og receptiv diatese havner begge i den, uadskilte.</p>
        </div>
        <p>Resultatet er, at et verbum kan flyttes fra én klasse til en anden af vane eller bekvemmelighed. Med energiens oprindelse som test kan det ikke.</p>
        <p>Formen afgør heller ikke diatesen. <em>Ανησυχώ</em> (jeg bekymrer mig) har aktiv form, men dens diatese er indre. <em>Jeg ser</em> har aktiv form, men dens diatese er receptiv. <em>Voice</em> og diatese skal holdes adskilt.</p>
        <h3 className={styles.headline}>Grammatik og paragrammatik</h3>
        <p>Diatese er grammatik, og grammatik er universel. Energien kommer de samme steder fra i alle sprog, så alle sprog har de samme fem diateser, helt identiske.</p>
        <p><em>Voice</em> er paragrammatik. Den afhænger af sproget: den er én måde, et sprog kan markere en diatese på, med et fuldstændigt, særligt sæt af verbalformer. Klassisk græsk og sanskrit havde den. De sprog, der tales i dag, markerer diatese på andre måder: med hjælpeord, med ændringer i stammen eller med et indskudt element.</p>
        <p>Grammatikbøgerne blander de to sammen. De kalder diatese for <em>voice</em>, et ord, der betyder lyd. De definerer det aldrig. Og de underviser i det på sprog, der slet ikke har nogen <em>voice</em>. Det er tre fejl i ét begreb, kopieret fra bog til bog.</p>
        <p>Kuren er den samme som altid: definér begrebet, forankr definitionen i noget, der ikke flytter sig, og test hvert tilfælde mod den. Her er ankeret energiens oprindelse. Det er stabilt, og det bøjer sig ikke for nogens luner eller bekvemmelighed.</p>
      </Story>

      <Story id="also">
        <h2 className={styles.headlineSpan}>Hvorfor »also« ikke er et adverbium</h2>
        <h3 className={styles.headline}>Et lille ord</h3>
        <p>Tag en enkel engelsk sætning: <em className={styles.example}>I like fish; I also like beef.</em> (Jeg kan lide fisk; jeg kan også lide oksekød.)</p>
        <p>Alle grammatikbøger om engelsk, dansk og mange andre sprog fastslår med sikkerhed, at »also« er et adverbium. Lærerne gentager det, eleverne lærer det, og ingen spørger, om det er sandt. Denne artikel stiller det spørgsmål og besvarer det med ét redskab alene: definitionen.</p>
        <h3 className={styles.headline}>Testen: hvad er et adverbium?</h3>
        <p className={styles.lead}><Def term="Et adverbium">er et ord, der fortæller hvordan, hvornår, hvor, hvor ofte eller i hvilken grad.</Def><span className={styles.defLabel}>(def-13, revideret)</span></p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Tre kontroller</div>
          <p><strong>1. De fem spørgsmål.</strong> <em className={styles.example}>She runs quickly</em> (hvordan). <em className={styles.example}>She left yesterday</em> (hvornår). <em className={styles.example}>She lives here</em> (hvor). <em className={styles.example}>She never eats fish</em> (hvor ofte). <em className={styles.example}>It is very cold</em> (i hvilken grad).</p>
          <p><strong>2. Hvad det bestemmer:</strong> et verbum, et adjektiv eller et andet adverbium. <em className={styles.example}>She runs quickly</em> (verbet). <em className={styles.example}>It is very cold</em> (adjektivet). <em className={styles.example}>She walks too slowly</em> (adverbiet).</p>
          <p><strong>3. Svaret med ét ord.</strong> How does she run? <em>Quickly.</em> When did she leave? <em>Yesterday.</em> How often does she eat fish? <em>Never.</em></p>
        </div>
        <p>Sæt nu »also« på prøve. I <em className={styles.example}>I also like beef</em> fortæller <em className={styles.target}>also</em> så, hvordan jeg kan lide oksekød? Nej. Hvornår? Nej. Hvor? Nej. Hvor ofte? Nej. I hvilken grad? Nej.</p>
        <p>Anden kontrol: bestemmer <em className={styles.target}>also</em> verbet »like«? Nej. Det at kunne lide forbliver det samme; »also« føjer blot oksekød til fisk.</p>
        <p>Tredje kontrol: kan <em className={styles.target}>also</em> stå alene som svar med ét ord? Nej. Der findes intet spørgsmål, som »Also.« er svaret på.</p>
        <p>»Also« dumper i alle tre kontroller. Det passer ikke til definitionen. Derfor er det ikke et adverbium.</p>
        <p>Man kunne prøve at redde betegnelsen ved at strække definitionen, tilføje et sjette spørgsmål eller kalde »also« et »særligt« adverbium. Men en definition, der bøjes, så den passer til hvert ord, der allerede bærer betegnelsen, definerer ikke længere noget. Vi holder os til definitionen.</p>
        <h3 className={styles.headline}>Hvad »also« er: en konjunktion</h3>
        <p className={styles.lead}><Def term="En konjunktion">er et ord, der forbinder sætninger og viser, hvordan de forholder sig til hinanden: tilføjelse, modsætning, årsag, følge, betingelse, tid.</Def><span className={styles.defLabel}>(def-16, revideret)</span></p>
        <p>Konjunktioner forbinder sætninger, ikke ord. Når en konjunktion ser ud til at forbinde to ord, er der underforstået to sætninger: <em className={styles.example}>I bought a book and a pen</em> = <em>I bought a book and I bought a pen.</em> Den anden sætning er forkortet, men den er stadig en sætning, og »and« forbinder de to.</p>
        <p>Se nu på »also« igen: <em className={styles.example}>I like fish; I also like beef.</em> <em className={styles.target}>Also</em> forbinder den anden sætning med den første og giver dem et kumulativt forhold: den anden føjer sig til den første. Det er præcis, hvad definitionen kræver af en konjunktion. »Also« er en konjunktion.</p>
        <p>Semikolonet ændrer ikke på det. Tegnsætning er et tegn, ikke et ord; det har ingen ordklasse. Hvad »also« er, afhænger kun af, hvad »also« gør.</p>
        <h3 className={styles.headline}>»Too« er også en konjunktion</h3>
        <p>Den samme test gælder »too«: <em className={styles.example}>He likes fish. I like fish, too.</em> <em className={styles.target}>Too</em> forbinder den anden sætning med den første og giver dem et kumulativt forhold. Det passer til definitionen af en konjunktion, præcis som »also«. Det står i slutningen af sætningen i stedet for foran verbet, men placeringen afgør ikke ordklassen; det gør funktionen.</p>
        <p>Dansk viser det samme fra en anden side. Det har ét ord for begge: <em className={styles.example}>Jeg kan også lide fisk</em> = <em>I also like fish</em> / <em>I like fish, too.</em> Dansk har kun brug for <em className={styles.target}>også</em>, fordi »also« og »too« udfører én og samme funktion: at forbinde sætninger i et kumulativt forhold. Begge er konjunktioner.</p>
        <p>(Det andet engelske »too«, som i <em>too hot</em>, er et andet ord med en anden funktion. Dansk holder det adskilt: <em>for varm</em>.)</p>
        <h3 className={styles.headline}>Hvorfor bøgerne tager fejl</h3>
        <p>Bøgerne testede ikke »also« mod en definition. De så på, hvor det står i sætningen: <em className={styles.example}>I never eat fish.</em> <em className={styles.example}>I also eat fish.</em> Begge ord står samme sted, mellem subjekt og verbum. Så bøgerne lagde dem i samme kasse. Men placering er ikke funktion, og ordstilling definerer ikke en ordklasse.</p>
        <p>»Never« fortæller hvor ofte, så det passer til definitionen af et adverbium. »Also« forbinder sætninger og giver dem et kumulativt forhold, så det passer til definitionen af en konjunktion. Samme placering, forskellig funktion.</p>
        <h3 className={styles.headline}>Én fejl, tusinder af kopier</h3>
        <p>Hvordan overlever en sådan fejl i alle grammatikbøger? Én ekspert begår den, og tusinder følger efter. Hver bog kopierer betegnelsen fra bogen før. Ingen tester ordet mod en definition, fordi ingen arbejder med definitioner. Det er sciolisme: det ydre skin af viden uden substansen. En betegnelse, der videregives på den måde, er en vane, ikke viden.</p>
        <p>Når fejlen påpeges, er svaret sjældent et argument. Det er »det står i alle bøgerne« eller en bemærkning om den, der spurgte. Ingen af delene er en grund.</p>
        <p>Kuren er enkel, og alle kan bruge den. Definér begrebet. Test ordet mod definitionen. Passer det, så behold betegnelsen; passer det ikke, så drop den, uanset hvor mange bøger der bærer den. Én kontrol var nok til at vise, at »also« ikke er et adverbium. Den samme kontrol, brugt ærligt, ville rydde meget af forvirringen i grammatikken, og langt ud over den.</p>
      </Story>

    </FrontPage>

    <Continue id="voice" />

    <Continue id="also" />

    <h2 className={styles.headlineSpan}>Der findes ingen konjunktionelle adverbier</h2>
    <h3 className={styles.headline}>Ét ord, to kategorier</h3>
    <p>Grammatikbøger underviser i en ordklasse, der kaldes »konjunktionelt adverbium« (på engelsk <em>conjunctive adverb</em>). Under den opregner de ord som <em>however, therefore, moreover, furthermore, consequently, nevertheless, nonetheless, hence, otherwise, accordingly, likewise, besides, also</em>.</p>
    <p>Selve navnet er problemet. Det placerer ét ord i to kategorier på én gang: det er et adverbium, og det udfører en konjunktions arbejde. En ordklasse kan ikke være begge dele. Enten passer et ord til definitionen af et adverbium, eller også passer det til definitionen af en konjunktion. Denne artikel tester disse ord mod begge definitioner, def-13 og def-16, som de er revideret i dette nummer, og viser, at hvert eneste af dem er en konjunktion.</p>
    <h3 className={styles.headline}>Testen</h3>
    <p>Tag hvert ord i en sætning med to led. Spørg, hvad det gør, og udfør så de tre adverbiumskontroller: de fem spørgsmål, hvad det bestemmer, og svaret med ét ord.</p>
    <div className={styles.box}>
      <div className={styles.boxTitle}>Ti ord, to sætninger</div>
      <p><em className={styles.target}>however</em>: <em className={styles.example}>It rained; however, we went out.</em> (modsætning)</p>
      <p><em className={styles.target}>nevertheless</em>: <em className={styles.example}>It rained; nevertheless, we went out.</em> (modsætning)</p>
      <p><em className={styles.target}>therefore</em>: <em className={styles.example}>It rained; therefore, we stayed in.</em> (følge)</p>
      <p><em className={styles.target}>consequently</em>: <em className={styles.example}>It rained; consequently, we stayed in.</em> (følge)</p>
      <p><em className={styles.target}>hence</em>: <em className={styles.example}>It rained; hence the mud.</em> (følge)</p>
      <p><em className={styles.target}>moreover</em>: <em className={styles.example}>It is cheap; moreover, it is good.</em> (tilføjelse)</p>
      <p><em className={styles.target}>furthermore</em>: <em className={styles.example}>It is cheap; furthermore, it is good.</em> (tilføjelse)</p>
      <p><em className={styles.target}>also</em>: <em className={styles.example}>I like fish; I also like beef.</em> (tilføjelse)</p>
      <p><em className={styles.target}>likewise</em>: <em className={styles.example}>She left early; likewise, he left.</em> (tilføjelse ved lighed)</p>
      <p><em className={styles.target}>otherwise</em>: <em className={styles.example}>Hurry; otherwise, you will be late.</em> (betingelse)</p>
    </div>
    <p>Hvert ord dumper i alle tre adverbiumskontroller. Tag <em className={styles.target}>however</em>: det fortæller ikke, hvordan vi gik ud, eller hvornår, eller hvor. Det ændrer intet ved »went«. Og der findes intet spørgsmål, som »However.« er svaret på.</p>
    <p>Hvert ord består konjunktionstesten. Hvert af dem forbinder den anden sætning med den første og angiver forholdet mellem dem. Det er definitionen af en konjunktion, og mere skal der ikke til. Disse ord er konjunktioner.</p>
    <h3 className={styles.headline}>Ét ord, flere roller</h3>
    <p>En ordklasse afgøres af den rolle, et ord spiller i sin sætning, ikke af dets stavemåde. Det samme ord kan være et adverbium i én sætning, en præposition i en anden og en konjunktion i en tredje. Det er ingen grund til en blandet kategori; det er en grund til at teste hver brug.</p>
    <div className={styles.box}>
      <div className={styles.boxTitle}>»Before« i tre roller</div>
      <p><strong>Adverbium:</strong> <em className={styles.example}>He was here before.</em> Det fortæller hvornår. When was he here? <em>Before.</em></p>
      <p><strong>Præposition:</strong> <em className={styles.example}>It is before your eyes.</em> Det tager et objekt: »your eyes«.</p>
      <p><strong>Konjunktion:</strong> <em className={styles.example}>Call before you come.</em> Det forbinder to sætninger og viser deres forhold i tid.</p>
    </div>
    <p>Definitionerne adskiller de tre anvendelser klart. Hvor »before« svarer på hvornår, er det et adverbium. Hvor det tager et objekt, er det en præposition. Hvor det forbinder sætninger og viser deres forhold, er det en konjunktion. Der er ikke brug for nogen blandet kategori.</p>
    <h3 className={styles.headline}>Hvor betegnelsen kommer fra</h3>
    <p>Betegnelsen er gammel. Goold Browns <em>The Grammar of English Grammars</em> (1851) definerer den allerede: konjunktionelle adverbier er dem, »som udfører konjunktioners hverv og tjener til at forbinde sætninger, og samtidig udtrykker en omstændighed af tid, sted, grad eller lignende«.</p>
    <p>Definitionen afslører sagen. Ifølge Browns egne ord udfører disse ord konjunktioners arbejde: de forbinder sætninger. Adverbiumsdelen bliver kun påstået, »en omstændighed … eller lignende«, og for ordene i rammen ovenfor er den slet ikke til stede.</p>
    <p>Brown vidste, at grænsen var tvivlsom. Han beretter, at nogle forfattere allerede havde placeret <em>also, since, too, then, therefore</em> og <em>wherefore</em> blandt konjunktionerne, og <em>as, so, still, however</em> blandt de disjunktive konjunktioner, mens Johnson og Webster markerede de fleste af dem som adverbier. Hans svar: »Det er måske af ringe betydning, hvilket navn de kaldes ved.«</p>
    <p>Han havde endda den rigtige test i hånden: »Jeg kalder dem adverbier, når de hovedsageligt udtrykker tid, måde eller grad, og konjunktioner, når de synes at være rene forbindeord.« Brugt strengt efterlader den test intet til en tredje kategori. Brown brugte den, trak på skuldrene og beholdt den blandede betegnelse. Bøgerne har kopieret den lige siden.</p>
    <h3 className={styles.headline}>Hvorfor betegnelsen overlever</h3>
    <p>Bøgerne forsvarer betegnelsen med to iagttagelser. Ingen af dem berører definitionen.</p>
    <div className={styles.box}>
      <div className={styles.boxTitle}>To iagttagelser</div>
      <p>1. <strong>Tegnsætning.</strong> De siger, at et konjunktionelt adverbium har semikolon foran og komma efter: <em className={styles.example}>It rained; however, we went out.</em> Men tegnsætning er et tegn, ikke et ord. Den har ingen ordklasse, og den kan ikke give et ord en.</p>
      <p>2. <strong>Placering.</strong> De siger, at disse ord kan flytte sig inden for sætningen: <em className={styles.example}>We, however, went out. We went out, however.</em> Men placeringen definerer heller ikke en ordklasse. Et ord, der forbinder to sætninger og angiver deres forhold, udfører det samme arbejde, hvor det end står.</p>
    </div>
    <p>Det, der holder betegnelsen i live, er ikke et argument. Det er kopiering. Hver bog overtager begrebet fra bogen før, og ingen tester ordene mod definitionerne.</p>
    <p>Kuren er den, der afgør ethvert tilfælde af denne art. Definér ordklasserne. Test hvert ord, i hver brug, mod definitionerne. Hvor et ord forbinder sætninger og viser deres forhold, er det en konjunktion. Der findes ingen ordklasse, der hedder konjunktionelt adverbium.</p>
    <div className={styles.box}>
      <div className={styles.boxTitle}>En bemærkning om definitioner</div>
      <p>Definitionerne af adverbiet (def-13) og konjunktionen (def-16) i dette nummer erstatter dem i nr. 1.</p>
    </div>
    <p><em>Modi følger i nr. 3.</em></p>

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
