import styles from "../../paper.module.css";
import { PageBreak, OneColumn, FrontPage, Story, Continue, Def, type Edition } from "../../Paginator";

/*
  JAK PISAĆ (same rules as the English file)
  - Jeden akapit = jedno <p>...</p>.
  - Nagłówek przez obie kolumny:  <h2 className={styles.headlineSpan}>...</h2>
  - Nagłówek w jednej kolumnie:   <h3 className={styles.headline}>...</h3>
  - Nowa strona:                  <PageBreak />
  - Jedna kolumna:                <OneColumn> ... </OneColumn>
  - Definicja:                    <Def term="Sprawiedliwość">to zapobieganie przestępstwom.</Def>
  - Strona tytułowa:              dwa <Story id="..."> w <FrontPage>; reszta pojawia się przy <Continue id="..." />.
*/

const ISSUE = {
  name: "HORISTICS",
  tagline: "Gramatyka · Paragramatyka · Polityka · Jakość życia · Interpretacja wydarzeń",
  number: "Nr 2",
  date: "9 listopada 2026",
  price: "12 zł",
  editor: "Isidoros Parlamas",
  publisher: "Horistics · Vejle · CVR 43109324",
  issn: "ISSN 3151-9164 (druk) · ISSN 3151-9172 (online)",
};

const masthead = (
  <header className={styles.masthead}>
    <div className={styles.mastheadTop}>
      <span>{ISSUE.number}</span>
      <span>{ISSUE.date} · CVR 43109324 · MobilePay 27 13 44 83</span>
      <span>{ISSUE.price}</span>
    </div>
    <h1 className={styles.title}>{ISSUE.name}</h1>
    <div className={styles.motto}>Odkrywcza moc definicji</div>
    <div className={styles.tagline}>{ISSUE.tagline}</div>
  </header>
);

const content = (schools: boolean) => (
  <>
    <FrontPage>

      <Story id="voice">
        <h2 className={styles.headlineSpan}>Strona to nie diateza</h2>
        <h3 className={styles.headline}>Słowo, które znaczy dźwięk</h3>
        <p>Otwórz dowolny podręcznik gramatyki angielskiej, duńskiej czy niemal każdego innego języka, a znajdziesz „stronę czynną” i „stronę bierną” (po angielsku <em>active voice</em> i <em>passive voice</em>). Nie znajdziesz definicji <em>voice</em>.</p>
        <p>Słowo <em>voice</em> pochodzi od łacińskiego <em>vox</em>, które znaczy dźwięk. Nie mówi nic o podmiocie ani o czynności. W najlepszym razie podręczniki opisują, co mają na myśli: „strona pokazuje, czy podmiot działa, czy podlega działaniu”. Ale opis pod niewłaściwą nazwą nie jest definicją. Uczeń uczy się nazwy i niczego nie rozumie.</p>
        <p>To, co podręczniki mają na myśli, to nie <em>voice</em>. To <strong>diateza</strong> (διάθεσις, liczba mnoga διαθέσεις). To dwie różne rzeczy i trzeba je definiować osobno.</p>
        <h3 className={styles.headline}>Dwie definicje</h3>
        <p className={styles.lead}><Def term="Diateza">jest pochodzeniem energii w zdaniu, w jej odniesieniu do podmiotu.</Def><span className={styles.defLabel}>(def-18)</span></p>
        <p>Energia oznacza tu energię w takim sensie, w jakim bada ją fizyka. To nie metafora; każde słowo należy rozumieć dosłownie. Aby znaleźć diatezę, pytamy, skąd pochodzi energia i co robi z podmiotem.</p>
        <p className={styles.lead}><Def term="Voice">jest odrębnym, pełnym zestawem form czasownika, który towarzyszy diatezie.</Def><span className={styles.defLabel}>(def-19)</span></p>
        <p><em>Voice</em> to morfologia: forma czasownika. Diateza to stosunek energii do podmiotu. Jedno należy do formy, drugie do znaczenia. Język może wyrażać diatezę, nie mając dla niej <em>voice</em>.</p>
        <h3 className={styles.headline}>Które języki mają voice</h3>
        <p>Test jest surowy. Zestaw musi być <strong>pełny</strong>: każda osoba, każdy czas, każdy tryb. Każda forma musi być <strong>jednym słowem</strong>: czasownik posiłkowy plus forma czynna to peryfraza, a nie <em>voice</em>. A zestaw musi być <strong>odrębny</strong>: jego formy muszą się różnić od form czynnych tego samego czasownika.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Greka klasyczna: λύω, „rozwiązywać”</div>
          <p><strong>Czas teraźniejszy:</strong> λύω, λύεις, λύει → λύομαι, λύῃ, λύεται</p>
          <p><strong>Aoryst:</strong> ἔλυσα, ἔλυσας, ἔλυσε → ἐλύθην, ἐλύθης, ἐλύθη</p>
          <p>Każda osoba, czas i tryb ma własną bierną formę w jednym słowie, różną od formy czynnej.</p>
        </div>
        <p>Spośród dobrze udokumentowanych języków tylko greka klasyczna i sanskryt przechodzą wszystkie trzy testy. Oba mają dwa pełne zestawy form czasownikowych, czynny i medialno-bierny, we wszystkich czasach i trybach: greka λύει → λύεται, sanskryt <em>bharati</em> → <em>bhriyate</em>.</p>
        <p>Każdy inny język nie przechodzi co najmniej jednego testu. Angielski, hiszpański i hindi używają czasownika posiłkowego, czyli peryfrazy. Łacina robi to w perfektum (<em>amatus sum</em>). Arabski i hebrajski mają bierne formy w jednym słowie tylko w niektórych czasach (<em>kataba</em> → <em>kutiba</em>); pozostałe czasy wymagają słowa posiłkowego i nie ma biernego trybu rozkazującego. Turecki i japoński wstawiają element, który tworzy nowy czasownik (<em>yazmak</em>, pisać → <em>yazılmak</em>, być pisanym); jego formy to formy czynne tego nowego czasownika, a nie zestaw tego samego czasownika. Duński i szwedzki mają jedną formę na <em>-s</em>, a jedna forma to nie zestaw. Polski tworzy stronę bierną z czasownikiem posiłkowym (<em>list został napisany</em>), czyli peryfrazą. Nowogrecki ma bierne formy w jednym słowie w czasie teraźniejszym i przeszłym (κοιτάζω → κοιτάζομαι, κοίταξα → κοιτάχτηκα), ale jego perfektum wymaga słowa posiłkowego (έχω κοιταχτεί).</p>
        <p><em>Voice</em> w pełnym sensie należy do greki klasycznej i sanskrytu. Żaden język, którym mówi się dziś, jej nie ma. Kiedy więc dzisiejszy podręcznik gramatyki uczy „strony biernej” jako <em>voice</em>, uczy czegoś, czego dany język nie ma.</p>
        <h3 className={styles.headline}>Pięć diatez</h3>
        <p>Każdy język ma tych samych pięć, ponieważ każdą rozstrzyga jedno pytanie z fizyczną odpowiedzią: skąd pochodzi energia i co robi z podmiotem?</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Pięć diatez</div>
          <p><strong>Czynna.</strong> Energia pochodzi od podmiotu i go opuszcza. <em className={styles.example}>Piszę list.</em></p>
          <p><strong>Bierna.</strong> Energia pochodzi spoza podmiotu, a sam podmiot ulega zmianie, fizycznej lub co do statusu. <em className={styles.example}>Szyba została wybita. Został wybrany.</em></p>
          <p><strong>Medialna.</strong> Energia pochodzi od podmiotu, opuszcza go i do niego wraca. <em className={styles.example}>Λούζομαι.</em> (Myję włosy.)</p>
          <p><strong>Wewnętrzna.</strong> Energia pochodzi od podmiotu i nigdy go nie opuszcza. <em className={styles.example}>Martwię się.</em></p>
          <p><strong>Receptywna.</strong> Energia pochodzi spoza podmiotu; zmienia się tylko narząd, który ją odbiera, a podmiot pozostaje taki, jaki był. <em className={styles.example}>Widzę niebieskiego ptaka na tamtym drzewie.</em></p>
        </div>
        <p>Dwa przypadki pokazują, jak działa ten test.</p>
        <p><em className={styles.example}>Martwię się.</em> Skąd pochodzi energia? Nie z zewnątrz: zdanie nie wskazuje żadnego źródła, a zmartwienie wytwarzają ciało i umysł samego podmiotu. Energia nie wychodzi i nie wraca, jak w diatezie medialnej. Zaczyna się w podmiocie i w nim zostaje. <strong>Wewnętrzna.</strong></p>
        <p><em className={styles.example}>Widzę niebieskiego ptaka na tamtym drzewie.</em> Energią jest światło. Pochodzi od słońca, odbija się od ptaka i wpada do oka. Podmiot niczego nie wysyła. Oko podlega działaniu, ale podmiot się nie zmienia. <strong>Receptywna</strong>, nie bierna.</p>
        <h3 className={styles.headline}>Dlaczego szkolna definicja zawodzi</h3>
        <p>Grecka gramatyka szkolna mówi: <em>Διάθεση του ρήματος είναι η σχέση του υποκειμένου με την ενέργεια που φανερώνει το ρήμα</em> (stosunek podmiotu do czynności wyrażanej przez czasownik). Następnie wymienia cztery: czynną, bierną, medialną i nijaką.</p>
        <p>Trzy rzeczy są tu błędne.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Trzy błędy</div>
          <p>1. <strong>Stawia niewłaściwe pytanie.</strong> „Stosunek do czynności” nie ma stałego punktu odniesienia. Pytaniem jest <em>pochodzenie</em> energii, a ono ma fizyczną odpowiedź.</p>
          <p>2. <strong>Używa słowa „ενέργεια” bez definicji.</strong> Słowo jest, ale podręczniki nigdy nie mówią, czym ono jest ani skąd pochodzi.</p>
          <p>3. <strong>Jej czwarta klasa jest zdefiniowana przez to, czym nie jest.</strong> „Nijaka” znaczy, że podmiot ani nie działa na coś innego, ani nie przyjmuje działania. Klasa zdefiniowana tylko przez zaprzeczenie to szuflada na resztki. Diateza wewnętrzna i receptywna lądują w niej obie, nierozdzielone.</p>
        </div>
        <p>W rezultacie czasownik można przenosić z jednej klasy do drugiej z przyzwyczajenia lub dla wygody. Gdy testem jest pochodzenie energii, nie można.</p>
        <p>Forma też nie rozstrzyga o diatezie. <em>Ανησυχώ</em> (martwię się) ma formę czynną, ale jego diateza jest wewnętrzna. <em>Widzę</em> ma formę czynną, ale jego diateza jest receptywna. <em>Voice</em> i diatezę trzeba trzymać osobno.</p>
        <h3 className={styles.headline}>Gramatyka i paragramatyka</h3>
        <p>Diateza to gramatyka, a gramatyka jest uniwersalna. Energia pochodzi z tych samych miejsc w każdym języku, więc każdy język ma tych samych pięć diatez, dokładnie takich samych.</p>
        <p><em>Voice</em> to paragramatyka. Zależy od języka: jest jednym ze sposobów, w jaki język może oznaczać diatezę, za pomocą pełnego, odrębnego zestawu form czasownika. Miały ją greka klasyczna i sanskryt. Języki, którymi mówi się dziś, oznaczają diatezę inaczej: słowami posiłkowymi, zmianami tematu albo wstawionym elementem.</p>
        <p>Podręczniki gramatyki mieszają jedno z drugim. Nazywają diatezę <em>voice</em>, słowem, które znaczy dźwięk. Nigdy jej nie definiują. I uczą jej w językach, które w ogóle nie mają <em>voice</em>. To trzy błędy w jednym terminie, przepisywane z podręcznika do podręcznika.</p>
        <p>Lekarstwo jest takie jak zawsze: zdefiniuj termin, zakotwicz definicję w czymś, co się nie przesuwa, i sprawdź każdy przypadek względem niej. Tu kotwicą jest pochodzenie energii. Jest stałe i nie ugina się przed niczyim kaprysem ani wygodą.</p>
      </Story>

      <Story id="also">
        <h2 className={styles.headlineSpan}>Dlaczego „also” nie jest przysłówkiem</h2>
        <h3 className={styles.headline}>Jedno małe słowo</h3>
        <p>Weźmy proste angielskie zdanie: <em className={styles.example}>I like fish; I also like beef.</em> (Lubię ryby; lubię też wołowinę.)</p>
        <p>Każdy podręcznik gramatyki angielskiej, duńskiej i wielu innych języków stwierdza z pewnością, że „also” jest przysłówkiem. Nauczyciele to powtarzają, uczniowie się tego uczą i nikt nie pyta, czy to prawda. Ten artykuł zadaje to pytanie i odpowiada na nie jednym tylko narzędziem: definicją.</p>
        <h3 className={styles.headline}>Test: czym jest przysłówek?</h3>
        <p className={styles.lead}><Def term="Przysłówek">jest słowem, które mówi jak, kiedy, gdzie, jak często lub w jakim stopniu.</Def><span className={styles.defLabel}>(def-13, poprawiona)</span></p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Trzy sprawdziany</div>
          <p><strong>1. Pięć pytań.</strong> <em className={styles.example}>She runs quickly</em> (jak). <em className={styles.example}>She left yesterday</em> (kiedy). <em className={styles.example}>She lives here</em> (gdzie). <em className={styles.example}>She never eats fish</em> (jak często). <em className={styles.example}>It is very cold</em> (w jakim stopniu).</p>
          <p><strong>2. Co określa:</strong> czasownik, przymiotnik lub inny przysłówek. <em className={styles.example}>She runs quickly</em> (czasownik). <em className={styles.example}>It is very cold</em> (przymiotnik). <em className={styles.example}>She walks too slowly</em> (przysłówek).</p>
          <p><strong>3. Odpowiedź jednym słowem.</strong> How does she run? <em>Quickly.</em> When did she leave? <em>Yesterday.</em> How often does she eat fish? <em>Never.</em></p>
        </div>
        <p>Sprawdźmy teraz „also”. Czy w <em className={styles.example}>I also like beef</em> słowo <em className={styles.target}>also</em> mówi, jak lubię wołowinę? Nie. Kiedy? Nie. Gdzie? Nie. Jak często? Nie. W jakim stopniu? Nie.</p>
        <p>Drugi sprawdzian: czy <em className={styles.target}>also</em> określa czasownik „like”? Nie. Lubienie pozostaje takie samo; „also” tylko dodaje wołowinę do ryby.</p>
        <p>Trzeci sprawdzian: czy <em className={styles.target}>also</em> może samo stanowić odpowiedź jednym słowem? Nie. Nie ma pytania, na które „Also.” byłoby odpowiedzią.</p>
        <p>„Also” nie przechodzi żadnego z trzech sprawdzianów. Nie pasuje do definicji. Dlatego nie jest przysłówkiem.</p>
        <p>Można by próbować ratować tę etykietę, rozciągając definicję, dodając szóste pytanie albo nazywając „also” „szczególnym” przysłówkiem. Ale definicja wygięta tak, by pasowała do każdego słowa, które już nosi daną etykietę, niczego już nie definiuje. Trzymamy się definicji.</p>
        <h3 className={styles.headline}>Czym jest „also”: spójnikiem</h3>
        <p className={styles.lead}><Def term="Spójnik">jest słowem, które łączy zdania i pokazuje, w jakim są stosunku: dodanie, przeciwstawienie, przyczyna, skutek, warunek, czas.</Def><span className={styles.defLabel}>(def-16, poprawiona)</span></p>
        <p>Spójniki łączą zdania, nie słowa. Gdy spójnik zdaje się łączyć dwa słowa, domyślne są dwa zdania: <em className={styles.example}>I bought a book and a pen</em> = <em>I bought a book and I bought a pen.</em> Drugie zdanie jest skrócone, ale wciąż jest zdaniem, a „and” łączy oba.</p>
        <p>Spójrzmy znów na „also”: <em className={styles.example}>I like fish; I also like beef.</em> <em className={styles.target}>Also</em> łączy drugie zdanie z pierwszym i nadaje im stosunek kumulatywny: drugie dodaje się do pierwszego. Dokładnie tego definicja wymaga od spójnika. „Also” jest spójnikiem.</p>
        <p>Średnik tego nie zmienia. Interpunkcja to znak, nie słowo; nie jest żadną częścią mowy. To, czym jest „also”, zależy wyłącznie od tego, co „also” robi.</p>
        <h3 className={styles.headline}>„Too” też jest spójnikiem</h3>
        <p>Ten sam test dotyczy „too”: <em className={styles.example}>He likes fish. I like fish, too.</em> <em className={styles.target}>Too</em> łączy drugie zdanie z pierwszym i nadaje im stosunek kumulatywny. Pasuje do definicji spójnika dokładnie tak jak „also”. Stoi na końcu zdania, a nie przed czasownikiem, ale pozycja nie rozstrzyga o części mowy; rozstrzyga funkcja.</p>
        <p>Duński pokazuje to samo z innej strony. Ma jedno słowo na oba: <em className={styles.example}>Jeg kan også lide fisk</em> = <em>I also like fish</em> / <em>I like fish, too.</em> Duńskiemu wystarcza <em className={styles.target}>også</em>, bo „also” i „too” pełnią jedną i tę samą funkcję: łączą zdania w stosunku kumulatywnym. Oba są spójnikami.</p>
        <p>(Drugie angielskie „too”, jak w <em>too hot</em>, to inne słowo o innej funkcji. Duński je rozróżnia: <em>for varm</em>.)</p>
        <h3 className={styles.headline}>Dlaczego podręczniki się mylą</h3>
        <p>Podręczniki nie sprawdziły „also” względem definicji. Spojrzały, gdzie stoi w zdaniu: <em className={styles.example}>I never eat fish.</em> <em className={styles.example}>I also eat fish.</em> Oba słowa stoją w tym samym miejscu, między podmiotem a czasownikiem. Więc podręczniki wrzuciły je do jednej szuflady. Ale pozycja to nie funkcja, a szyk wyrazów nie definiuje części mowy.</p>
        <p>„Never” mówi, jak często, więc pasuje do definicji przysłówka. „Also” łączy zdania i nadaje im stosunek kumulatywny, więc pasuje do definicji spójnika. Ta sama pozycja, inna funkcja.</p>
        <h3 className={styles.headline}>Jeden błąd, tysiące kopii</h3>
        <p>Jak taki błąd przetrwa w każdym podręczniku gramatyki? Jeden ekspert go popełnia, a tysiące idą za nim. Każdy podręcznik przepisuje etykietę z poprzedniego. Nikt nie sprawdza słowa względem definicji, bo nikt nie pracuje z definicjami. To jest pozorna wiedza: wygląd wiedzy bez jej treści. Etykieta przekazywana w ten sposób to nawyk, nie wiedza.</p>
        <p>Gdy błąd zostaje wskazany, odpowiedzią rzadko jest argument. Jest nią „tak piszą wszystkie podręczniki” albo uwaga o osobie, która zapytała. Ani jedno, ani drugie nie jest powodem.</p>
        <p>Lekarstwo jest proste i każdy może je zastosować. Zdefiniuj termin. Sprawdź słowo względem definicji. Jeśli pasuje, zachowaj etykietę; jeśli nie, porzuć ją, bez względu na to, ile podręczników ją nosi. Jeden sprawdzian wystarczył, by pokazać, że „also” nie jest przysłówkiem. Ten sam sprawdzian, zastosowany uczciwie, rozwiałby wiele zamieszania w gramatyce, i daleko poza nią.</p>
      </Story>

    </FrontPage>

    <Continue id="voice" />

    <Continue id="also" />

    <h2 className={styles.headlineSpan}>Nie ma przysłówków spójnikowych</h2>
    <h3 className={styles.headline}>Jedno słowo, dwie kategorie</h3>
    <p>Podręczniki gramatyki uczą części mowy zwanej „przysłówkiem spójnikowym” (po angielsku <em>conjunctive adverb</em>). Zaliczają do niej słowa takie jak <em>however, therefore, moreover, furthermore, consequently, nevertheless, nonetheless, hence, otherwise, accordingly, likewise, besides, also</em>.</p>
    <p>Problemem jest sama nazwa. Umieszcza jedno słowo w dwóch kategoriach naraz: jest przysłówkiem i wykonuje pracę spójnika. Część mowy nie może być jednym i drugim. Albo słowo pasuje do definicji przysłówka, albo do definicji spójnika. Ten artykuł sprawdza te słowa względem obu definicji, def-13 i def-16 w wersji poprawionej w tym numerze, i pokazuje, że każde z nich jest spójnikiem.</p>
    <h3 className={styles.headline}>Test</h3>
    <p>Weź każde słowo w zdaniu złożonym z dwóch zdań. Zapytaj, co robi, a potem przeprowadź trzy sprawdziany przysłówka: pięć pytań, co określa, i odpowiedź jednym słowem.</p>
    <div className={styles.box}>
      <div className={styles.boxTitle}>Dziesięć słów, dwa zdania</div>
      <p><em className={styles.target}>however</em>: <em className={styles.example}>It rained; however, we went out.</em> (przeciwstawienie)</p>
      <p><em className={styles.target}>nevertheless</em>: <em className={styles.example}>It rained; nevertheless, we went out.</em> (przeciwstawienie)</p>
      <p><em className={styles.target}>therefore</em>: <em className={styles.example}>It rained; therefore, we stayed in.</em> (skutek)</p>
      <p><em className={styles.target}>consequently</em>: <em className={styles.example}>It rained; consequently, we stayed in.</em> (skutek)</p>
      <p><em className={styles.target}>hence</em>: <em className={styles.example}>It rained; hence the mud.</em> (skutek)</p>
      <p><em className={styles.target}>moreover</em>: <em className={styles.example}>It is cheap; moreover, it is good.</em> (dodanie)</p>
      <p><em className={styles.target}>furthermore</em>: <em className={styles.example}>It is cheap; furthermore, it is good.</em> (dodanie)</p>
      <p><em className={styles.target}>also</em>: <em className={styles.example}>I like fish; I also like beef.</em> (dodanie)</p>
      <p><em className={styles.target}>likewise</em>: <em className={styles.example}>She left early; likewise, he left.</em> (dodanie przez podobieństwo)</p>
      <p><em className={styles.target}>otherwise</em>: <em className={styles.example}>Hurry; otherwise, you will be late.</em> (warunek)</p>
    </div>
    <p>Każde słowo nie przechodzi żadnego z trzech sprawdzianów przysłówka. Weźmy <em className={styles.target}>however</em>: nie mówi, jak wyszliśmy, ani kiedy, ani gdzie. W żaden sposób nie zmienia „went”. I nie ma pytania, na które „However.” byłoby odpowiedzią.</p>
    <p>Każde słowo przechodzi test spójnika. Każde łączy drugie zdanie z pierwszym i określa stosunek między nimi. To jest definicja spójnika i nic więcej nie trzeba. Te słowa są spójnikami.</p>
    <h3 className={styles.headline}>Jedno słowo, różne role</h3>
    <p>O części mowy decyduje rola, jaką słowo pełni w zdaniu, a nie jego pisownia. To samo słowo może być przysłówkiem w jednym zdaniu, przyimkiem w drugim i spójnikiem w trzecim. To nie powód do tworzenia kategorii mieszanej; to powód, by sprawdzać każde użycie.</p>
    <div className={styles.box}>
      <div className={styles.boxTitle}>„Before” w trzech rolach</div>
      <p><strong>Przysłówek:</strong> <em className={styles.example}>He was here before.</em> Mówi kiedy. When was he here? <em>Before.</em></p>
      <p><strong>Przyimek:</strong> <em className={styles.example}>It is before your eyes.</em> Przyjmuje dopełnienie: „your eyes”.</p>
      <p><strong>Spójnik:</strong> <em className={styles.example}>Call before you come.</em> Łączy dwa zdania i pokazuje ich stosunek w czasie.</p>
    </div>
    <p>Definicje czysto rozdzielają te trzy użycia. Gdzie „before” odpowiada na pytanie kiedy, jest przysłówkiem. Gdzie przyjmuje dopełnienie, jest przyimkiem. Gdzie łączy zdania i pokazuje ich stosunek, jest spójnikiem. Kategoria mieszana nie jest potrzebna.</p>
    <h3 className={styles.headline}>Skąd pochodzi ta etykieta</h3>
    <p>Etykieta jest stara. <em>The Grammar of English Grammars</em> Goolda Browna (1851) już ją definiuje: przysłówki spójnikowe to te, „które pełnią funkcję spójników i służą do łączenia zdań, wyrażając zarazem jakąś okoliczność czasu, miejsca, stopnia lub podobną”.</p>
    <p>Ta definicja zdradza sprawę. Według słów samego Browna te słowa wykonują pracę spójników: łączą zdania. Część przysłówkowa jest tylko deklarowana, „jakaś okoliczność … lub podobna”, a w przypadku słów z ramki powyżej w ogóle jej nie ma.</p>
    <p>Brown wiedział, że granica jest wątpliwa. Odnotowuje, że niektórzy autorzy już zaliczyli <em>also, since, too, then, therefore</em> i <em>wherefore</em> do spójników, a <em>as, so, still, however</em> do spójników rozłącznych, podczas gdy Johnson i Webster oznaczali większość z nich jako przysłówki. Jego odpowiedź: „Być może ma niewielkie znaczenie, jak się je nazywa”.</p>
    <p>Miał nawet w ręku właściwy test: „Nazywam je przysłówkami, gdy wyrażają głównie czas, sposób lub stopień, a spójnikami, gdy wydają się zwykłymi łącznikami”. Zastosowany ściśle, ten test nie zostawia nic dla trzeciej kategorii. Brown go zastosował, wzruszył ramionami i zachował mieszaną etykietę. Podręczniki przepisują ją od tamtej pory.</p>
    <h3 className={styles.headline}>Dlaczego etykieta przetrwała</h3>
    <p>Podręczniki bronią etykiety dwiema obserwacjami. Żadna nie dotyka definicji.</p>
    <div className={styles.box}>
      <div className={styles.boxTitle}>Dwie obserwacje</div>
      <p>1. <strong>Interpunkcja.</strong> Mówią, że przed przysłówkiem spójnikowym stoi średnik, a po nim przecinek: <em className={styles.example}>It rained; however, we went out.</em> Ale interpunkcja to znak, nie słowo. Nie jest częścią mowy i nie może nadać części mowy słowu.</p>
      <p>2. <strong>Pozycja.</strong> Mówią, że te słowa mogą się przesuwać w obrębie zdania: <em className={styles.example}>We, however, went out. We went out, however.</em> Ale pozycja też nie definiuje części mowy. Słowo, które łączy dwa zdania i określa ich stosunek, wykonuje tę samą pracę, gdziekolwiek stoi.</p>
    </div>
    <p>Tym, co utrzymuje etykietę przy życiu, nie jest argument. Jest nim przepisywanie. Każdy podręcznik bierze termin z poprzedniego i nikt nie sprawdza słów względem definicji.</p>
    <p>Lekarstwo jest tym, które rozstrzyga każdy przypadek tego rodzaju. Zdefiniuj części mowy. Sprawdź każde słowo, w każdym użyciu, względem definicji. Gdzie słowo łączy zdania i pokazuje ich stosunek, jest spójnikiem. Nie ma części mowy zwanej przysłówkiem spójnikowym.</p>
    <div className={styles.box}>
      <div className={styles.boxTitle}>Uwaga o definicjach</div>
      <p>Definicje przysłówka (def-13) i spójnika (def-16) podane w tym numerze zastępują definicje z nr 1.</p>
    </div>
    <p><em>Tryby w nr 3.</em></p>

        {/* ═════════════ PRENUMERATA + STOPKA REDAKCYJNA ═════════════ */}
    <div className={styles.kicker}>Informacje</div>
    <h2 className={styles.headlineSpan} data-nonum>Prenumerata</h2>
    <OneColumn>
      <p>
        Ukazuje się co miesiąc po polsku, duńsku, grecku i hiszpańsku, każde
        wydanie wraz z wersją angielską. Dostępna w druku i jako PDF.
      </p>
      <h3 className={styles.headline}>Szkoły</h3>
      <p>1995 DKK (268 €) rocznie za szkołę. Obejmuje wydanie PDF we wszystkich językach, które szkoła może kopiować dla własnych uczniów i nauczycieli.</p>
      <h3 className={styles.headline}>Firmy i organizacje</h3>
      <p>1495 DKK (200 €) rocznie. Obejmuje wydanie PDF dla maksymalnie 10 czytelników. Większe grupy – na zapytanie.</p>
      <h3 className={styles.headline}>Osoby prywatne</h3>
      <p>Druk: 799 DKK (107 €) rocznie. PDF: 399 DKK (54 €) rocznie. Pojedynczy egzemplarz: 20 DKK (2,70 €).</p>
      <h3 className={styles.headline}>Lekcje gramatyki</h3>
      <p>Lekcje gramatyki indywidualne i grupowe – po angielsku, grecku i hiszpańsku. Zapytania: mind@horistics.com.</p>
      <h3 className={styles.headline}>Kontakt</h3>
      <p>Aby zamówić prenumeratę, napisz na adres mind@horistics.com, podając imię i nazwisko, adres oraz wybrane wydanie. Płatność przez MobilePay 27 13 44 83.</p>

      <div className={styles.imprint}>
        <div><strong>Redaktor odpowiedzialny:</strong> {ISSUE.editor}</div>
        <div><strong>Wydawca:</strong> {ISSUE.publisher}</div>
        <div>{ISSUE.issn} · {ISSUE.number}, {ISSUE.date}</div>
      </div>
    </OneColumn>
  </>
);

export const polish: Edition = {
  lang: "pl",
  name: ISSUE.name,
  date: ISSUE.date,
  masthead,
  continuedOn: "Ciąg dalszy na stronie {n} →",
  continuedFrom: "Ciąg dalszy ze strony 1",
  content: content(false),
};

// Wydanie szkolne: ta sama gazeta bez artykułu z działu Interpretacja wydarzeń.
export const polishSchools: Edition = { ...polish, content: content(true), oneColumn: true };
