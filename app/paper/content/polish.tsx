import styles from "../paper.module.css";
import { PageBreak, OneColumn, FrontPage, Story, Continue, Def, type Edition } from "../Paginator";

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
  number: "Nr 1",
  date: "9 października 2026",
  price: "[cena]",
  editor: "Isidoros Parlamas",
  publisher: "Horistics · CVR 43109324",
  issn: "ISSN w przygotowaniu",
};

const masthead = (
  <header className={styles.masthead}>
    <div className={styles.mastheadTop}>
      <span>{ISSUE.number}</span>
      <span>{ISSUE.date}</span>
      <span>{ISSUE.price}</span>
    </div>
    <h1 className={styles.title}>{ISSUE.name}</h1>
    <div className={styles.tagline}>{ISSUE.tagline}</div>
  </header>
);

const content = (
  <>
    {/* ═════════════ STRONA 1: DWA ARTYKUŁY OBOK SIEBIE ═════════════ */}
    <FrontPage>

      {/* Lewa kolumna */}
      <Story id="grammar">
        <h2 className={styles.headlineSpan}>Czym jest gramatyka – a nie co robi</h2>
        <p className={styles.lead}>
          <Def term="Gramatyka">jest syntezą myśli.</Def>
        </p>
        <p>
          Brzmi to prosto, ale tym właśnie jest gramatyka – a nie tym, co robi.
          Większość definicji opisuje, co gramatyka robi. Bardzo niewiele mówi,
          czym jest.
        </p>
        <p>
          Gramatyka obejmuje tylko sześć podstawowych pojęć: części mowy, tryby,
          strony (diatezy), aspekty, zdania i składnię. Wszystko inne to
          paragramatyka.
        </p>
        <p>
          Weźmy jedno proste zdanie: <em>My kupiliśmy rybę tego ranka.</em> Powiedz
          je po duńsku, grecku, hiszpańsku czy w jakimkolwiek innym języku –
          zmienią się słowa, zmienią się końcówki, może zmienić się szyk wyrazów.
          Ale gramatyka się nie zmienia.
        </p>
        <h3 className={styles.headline}>Części mowy</h3>
        <p>
          <em className={styles.target}>My</em> to zaimek, <em className={styles.target}>kupiliśmy</em> to
          czasownik, <em className={styles.target}>rybę</em> to rzeczownik, <em className={styles.target}>tego</em> to
          przymiotnik, a <em className={styles.target}>ranka</em> to rzeczownik. W każdym języku,
          w którym można wypowiedzieć to zdanie, te same słowa pełnią te same
          funkcje.
        </p>
        <h3 className={styles.headline}>Tryb</h3>
        <p>
          Zdanie stwierdza fakt. Jest w trybie oznajmującym – we wszystkich
          językach.
        </p>
        <h3 className={styles.headline}>Strona</h3>
        <p>
          Podmiot wykonuje czynność: to my kupiliśmy. Zdanie jest w stronie
          czynnej – we wszystkich językach.
        </p>
        <h3 className={styles.headline}>Aspekt</h3>
        <p>
          Kupno jest ujęte jako jedna zakończona czynność. Aspekt jest
          synoptyczny – we wszystkich językach.
        </p>
        <h3 className={styles.headline}>Zdanie</h3>
        <p>
          To zdanie główne oznajmujące – we wszystkich językach.
        </p>
        <h3 className={styles.headline}>Składnia</h3>
        <p>
          <em className={styles.target}>My</em> to podmiot, <em className={styles.target}>kupiliśmy</em> to
          czasownik, <em className={styles.target}>rybę</em> to dopełnienie bliższe,
          a <em className={styles.target}>tego ranka</em> to przysłówek – we wszystkich językach.
        </p>
        <p>
          Sześć pojęć i żadne z nich nie zmienia się od języka do języka. To, co
          się zmienia <em>od języka do języka</em>, to sposób, w jaki każdy język
          je oznacza: jego końcówki, szyk wyrazów, pisownia, wymowa i tak dalej.
          To jest paragramatyka. Gramatyka jest tym, co wspólne wszystkim językom;
          paragramatyka – strojem, w który ubiera ją każdy język.
        </p>
        <p>
          <em>W następnym wydaniu: części mowy, omówione szczegółowo.</em>
        </p>
      </Story>

      {/* Prawa kolumna */}
      <Story id="politics">
        <h2 className={styles.headlineSpan}>Odkrywcza moc definicji</h2>
        <p className={styles.lead}>Egzekwowanie kary za złamanie prawa nie jest samym prawem.</p>
        <p>
          Czym jest sprawiedliwość? Zdefiniujmy ją: <Def term="Sprawiedliwość">to zapobieganie przestępstwom.</Def>{" "}
          Gdy przestępstwo zostało już popełnione, sprawiedliwość nie może się
          dokonać, ponieważ sprawiedliwość to zapobieganie przestępstwom. To, co
          następuje potem – aresztowanie, proces, więzienie – dotyczy kary za
          złamanie prawa, a to nie jest sprawiedliwość. Tak zwane egzekwowanie
          prawa jest więc w rzeczywistości egzekwowaniem kary.
        </p>
        <p>
          To wiele mówi o odkrywczej mocy definicji, a to, co odsłania, leży u
          podstaw niezliczonych nieporozumień, które wykolejają życie milionów
          ludzi.
        </p>
        <p>
          Pomyślmy o zdaniu, które słyszymy w wiadomościach po każdym wyroku:
          „Sprawiedliwości stało się zadość”. Nie stało się. Stała się kara.
          Sprawiedliwość, która mogła się dokonać, polegała na zapobieżeniu
          przestępstwu, a ta chwila minęła, zanim przestępstwo zostało popełnione.
          To, co pozostaje po fakcie, to konsekwencja, a nie naprawa.
        </p>
        <p>
          Pomyślmy o ofierze. Mówimy ofierze, że sprawiedliwości stanie się zadość,
          że wyrok przyniesie sprawiedliwość. Ale krzywda już się stała i żaden
          wyrok jej nie cofnie. Ofierze obiecuje się jedno, a daje drugie. Wielu
          latami czeka na proces w nadziei na ulgę, a gdy zapada wyrok, czują
          dziwną pustkę. Nie mylili się, czując ją. Dano im niewłaściwe słowo.
        </p>
        <p>
          Sprawiedliwość myli się z karą, zemstą, odszkodowaniem i tym, co legalne.
          Nie jest żadną z tych rzeczy. Kara to sankcja nakładana po przestępstwie.
          Zemsta to krzywda odpłacona krzywdą. Odszkodowanie to pieniądze zapłacone
          za szkodę, która już się stała. Legalne jest to, na co prawo pozwala lub
          czego zabrania, i nierzadko to, co legalne, jest niesprawiedliwe, a to,
          co sprawiedliwe, jest nielegalne. Opioidy były legalnie reklamowane i
          przepisywane na masową skalę, a w ślad za tym przyszła epidemia
          uzależnień. W wielu krajach karze się ludzi za swobodne wypowiadanie
          się. Wszystkie cztery przychodzą po przestępstwie albo stoją obok niego.
          Żadna z nich mu nie zapobiega, a zatem żadna z nich nie jest
          sprawiedliwością.
        </p>
        <p>
          Pomyślmy o polityku. Gdy politycy obiecują twardą walkę z
          przestępczością, niemal zawsze mają na myśli twardsze kary: dłuższe
          wyroki, więcej więzień, więcej policji po fakcie. Każde z tych działań
          następuje dopiero po popełnieniu przestępstwa. Zgodnie z definicją żadne
          z nich nie jest sprawiedliwością. Rząd, który większość wysiłków
          poświęca karom, nie jest rządem, który wymierza sprawiedliwość. Jest
          rządem, który zarządza porażką sprawiedliwości.
        </p>
        <p>
          Jeśli sprawiedliwość to zapobieganie przestępstwom, to sprawiedliwość
          oznacza usuwanie przyczyn, które skłaniają kogokolwiek do popełnienia
          przestępstwa, tak aby obywatele w ogóle nie mieli powodu, by przestępstwa
          popełniać. Za każdym przestępstwem stoi przyczyna – niedostatek,
          niewiedza, wykluczenie czy rozpacz. Usuń przyczynę, a przestępstwo nie
          będzie miało z czego wyrosnąć.
        </p>
        <p>
          Jest to przede wszystkim obowiązek polityki – polityki właściwie
          zdefiniowanej. Nie sądów, które przychodzą za późno. Nie policji, która
          przyjeżdża po wezwaniu. Nie więzień, które przechowują skutki porażki,
          która już się dokonała. Polityka jest jedyną instytucją umiejscowioną
          przed przestępstwem, tam gdzie kształtują się jego przyczyny, i dlatego
          tylko ona w ogóle może czynić sprawiedliwość.
        </p>
        <OneColumn>
          <p>
            Jedna definicja, precyzyjnie sformułowana, przenosi sprawiedliwość z
            sali sądowej do klasy szkolnej, z więzienia do domu, z końca historii
            na jej początek. Na tym polega odkrywcza moc definicji. Społeczeństwo,
            które myli karę ze sprawiedliwością, będzie dalej budować więzienia i
            dziwić się, że przestępczość nie znika. Społeczeństwo, które poprawnie
            definiuje sprawiedliwość, zada inne pytanie: nie jak karać, ale jak
            zapobiegać.
          </p>
        </OneColumn>
      </Story>

    </FrontPage>

    {/* ═════════════ CIĄG DALSZY ARTYKUŁU O GRAMATYCE ═════════════ */}
    <Continue id="grammar" />

    {/* ═════════════ CIĄG DALSZY ARTYKUŁU O SPRAWIEDLIWOŚCI ═════════════ */}
    <Continue id="politics" />

    {/* ═════════════ INTERPRETACJA WYDARZEŃ ═════════════ */}
    <div className={styles.kicker}>Interpretacja wydarzeń</div>
    <h2 className={styles.headlineSpan}>Użycie broni jądrowej przestało być nie do pomyślenia</h2>
    <OneColumn>
      <p className={styles.lead}>Theodor Herzl był wizjonerem Wielkiego Izraela</p>
      <figure className={styles.figure}>
        <img src="/paper/images/Herzl.jpeg" alt="Theodor Herzl" />
        <figcaption>Theodor Herzl</figcaption>
      </figure>
      <p>
        Theodor Herzl (1860–1904) był austro-węgierskim żydowskim dziennikarzem,
        pisarzem i działaczem politycznym, który stał się głównym twórcą
        nowoczesnego syjonizmu politycznego.
      </p>

      <div className={styles.box}>
        <div className={styles.boxTitle}>Theodor Herzl</div>
        <p><strong>Urodzony:</strong> Budapeszt, 2 maja 1860</p>
        <p><strong>Zmarł:</strong> Edlach, Austria, 3 lipca 1904 (pochowany w Wiedniu)</p>
        <p><strong>Zawód:</strong> dziennikarz, dramatopisarz, pisarz</p>
        <p><strong>Główne dzieło:</strong> <em>Der Judenstaat</em> (Państwo żydowskie), 1896</p>
        <p>
          <strong>Rola polityczna:</strong> zorganizował Pierwszy Kongres
          Syjonistyczny w Bazylei w 1897 roku i został przewodniczącym nowo
          utworzonej Organizacji Syjonistycznej.
        </p>
        <p>
          <strong>Cel:</strong> publicznie i prawnie zabezpieczona ojczyzna dla
          narodu żydowskiego.
        </p>
      </div>

      <p>
        Zabiegał o międzynarodowe poparcie dyplomatyczne dla tego projektu,
        prowadząc m.in. negocjacje z Imperium Osmańskim i rządem brytyjskim.
      </p>
      <p>
        Herzl zmarł kilkadziesiąt lat przed powstaniem Państwa Izrael w 1948 roku,
        nie uczestniczył więc w samym tworzeniu państwa. Jego pisma i działalność
        organizacyjna stały się jednak fundamentem ruchu syjonistycznego.
      </p>
      <p>
        Aby nadać ton, cofnijmy się do Londynu w październiku 1902 roku.
        23 października, według jego własnego dziennika, Herzl wszedł do gabinetu
        Josepha Chamberlaina, brytyjskiego sekretarza ds. kolonii, kwadrans po
        dwunastej. Przyszedł z prośbą o terytorium pod kontrolą brytyjską dla
        żydowskiego osadnictwa. Wymienił trzy miejsca: Cypr, El-Arisz i Półwysep
        Synaj.
      </p>
      <p>
        Nie istnieje stenogram tego spotkania. Zachowała się relacja samego
        Herzla, zapisana w dzienniku następnego dnia. Jest ona źródłem
        pierwotnym i jest odkrywcza właśnie dlatego, że pochodzi od niego.
      </p>
      <p>
        Herzl wyjaśnił, dlaczego nie może po prostu czekać na wynik negocjacji z
        sułtanem osmańskim, który panował nad Palestyną. Porównał je do kupowania
        dywanu: „Jeśli chce się kupić dywan, najpierw trzeba wypić pół tuzina
        filiżanek kawy i wypalić sto papierosów; potem rozmawia się o sprawach
        rodzinnych, a od czasu do czasu znów zamienia kilka słów o dywanie. Ja mam
        czas na negocjacje, ale mój lud go nie ma. Głoduje w strefie osiedlenia.
        Muszę przynieść mu natychmiastową pomoc”.
      </p>
      <p>
        Chamberlain odpowiedział, że może wypowiadać się wiążąco tylko w sprawie
        Cypru, ponieważ El-Arisz i Synaj podlegały Ministerstwu Spraw
        Zagranicznych. Na temat Cypru Herzl zapisuje jego odpowiedź:
      </p>
      <blockquote className={styles.pull}>
        „Cypr zamieszkują Grecy i muzułmanie. Nie mogę ich wypierać ze względu na
        nowych imigrantów. Przeciwnie, moim obowiązkiem byłoby stanąć po ich
        stronie”.
      </blockquote>
      <p>
        Chamberlain dodał następnie, że jeśli Herzl wskaże miejsce w brytyjskich
        posiadłościach, gdzie nie mieszkają biali, będzie gotów o tym rozmawiać.
      </p>
      <p>
        Herzl nie zrezygnował z Cypru. Zaproponował wywołanie prądu sprzyjającego
        osadnictwu żydowskiemu na wyspie, napędzanego żydowskim kapitałem. Jego
        własnymi słowami:
      </p>
      <blockquote className={styles.pull}>
        „Gdy tylko założymy Żydowską Kompanię Wschodnią z kapitałem 5 milionów
        funtów na osadnictwo na Synaju i w El-Arisz, Cypryjczycy również zapragną
        tego złotego deszczu na swojej wyspie. Muzułmanie się wyprowadzą, Grecy
        chętnie sprzedadzą ziemię po dobrej cenie i wyemigrują do Aten albo na
        Kretę”.
      </blockquote>
      <p>
        I Herzl od razu odnotowuje reakcję Chamberlaina: „Wydawało się, że pomysł
        przypadł mu do gustu”.
      </p>
      <p>
        Kolejność ma znaczenie. Chamberlain odmówił wypierania Greków i muzułmanów
        z Cypru. Herzl odpowiedział planem, według którego odejdą oni sami:
        muzułmanie się wyprowadzą, Grecy sprzedadzą ziemię i wyemigrują. A według
        relacji Herzla pomysł przypadł Chamberlainowi do gustu. Nie jest to
        późniejsza interpretacja stanowiska Herzla. Jest to w jego własnym
        dzienniku, spisanym podczas londyńskich negocjacji w październiku 1902
        roku.
      </p>
      <p>
        Następnego dnia Chamberlain umówił Herzla na spotkanie z ministrem spraw
        zagranicznych, lordem Lansdowne’em. Polecił mu jednak pominąć w tej
        rozmowie Cypr: „Część planu dotycząca Cypru to moja sprawa”.
      </p>
      <p>
        Na tym sprawa Cypru się zamknęła. Wielka Brytania zbadała możliwość
        osadnictwa w El-Arisz, ale plan upadł z powodu stanowiska rządu
        egipskiego i braku wody. W 1903 roku Chamberlain zaproponował coś
        zupełnie innego: terytorium w Brytyjskiej Afryce Wschodniej, tak zwany
        plan ugandyjski.
      </p>
      <p>
        Wielu twierdzi, że atak z 7 października 2023 roku dopuszczono celowo,
        aby rząd Netanjahu mógł wykorzystać go do uzasadnienia wysiedlenia
        Palestyńczyków ze Strefy Gazy. Brzmi to jak echo pewnego elementu myśli
        Theodora Herzla: rozmawiając w 1902 roku z Josephem Chamberlainem o
        Cyprze, Herzl przewidywał odejście ludności muzułmańskiej oraz sprzedaż
        ziemi i emigrację ludności greckiej do Aten lub na Kretę.
      </p>
      <p>
        Izrael prowadzi obecnie politykę zmierzającą do zmiany reżimu w Iranie.
        Biorąc jednak pod uwagę wielkość Iranu, jego ludność, położenie
        geograficzne, potencjał militarny i wykazaną odporność, wcale nie jest
        pewne, że Iran skapitulowałby wyłącznie w wyniku konwencjonalnych działań
        wojskowych. Konflikt już pokazał zdolność Iranu do znoszenia znacznej
        presji militarnej przy jednoczesnym kontynuowaniu odwetu.
      </p>
      <p>
        A jednak ani Izrael, ani Stany Zjednoczone nie mogą łatwo porzucić tego
        celu. Oba państwa dużo zainwestowały w zmianę reżimu, a rezygnacja z niej
        oznaczałaby poważną utratę twarzy i ciężki cios psychologiczny dla obu.
      </p>
      <p>
        Tymczasem pojawiają się doniesienia o rosnącym zaangażowaniu Izraela na
        Cyprze, w tym o izraelskich inwestycjach i współpracy w dziedzinie
        bezpieczeństwa. Jeśli rząd izraelski dojdzie w końcu do wniosku, że
        presja militarna nie doprowadzi do zmiany reżimu w Iranie, pojawi się
        niebezpieczne pytanie: czy posunie się do użycia taktycznej broni
        jądrowej? Taki krok niekoniecznie zagwarantowałby upadek państwa
        irańskiego, a mógłby wywołać niekontrolowaną eskalację.
      </p>
      <p>
        Konsekwencje mogłyby sięgnąć daleko poza Bliski Wschód. Izraelski atak
        jądrowy mógłby wywrzeć presję na inne mocarstwa atomowe, w tym Rosję i
        Chiny, by interweniowały lub odpowiedziały militarnie. Czy rzeczywiście
        użyłyby broni jądrowej, tego nie da się przewidzieć, ale sama taka
        możliwość uczyniłaby eskalację zagrożeniem dla całej społeczności
        międzynarodowej.
      </p>
      <p>
        Groźba Donalda Trumpa wygłoszona na Zgromadzeniu Ogólnym ONZ 22 września
        2026 roku, gdy zapytał, czy powinien „unicestwić Republikę Islamską”,
        jeśli nie dojdzie do porozumienia pokojowego, pokazuje, jak skrajna stała
        się obecna retoryka. Możliwość dalszej eskalacji dotyczy więc nie tylko
        Izraela, Iranu czy Bliskiego Wschodu, lecz potencjalnie całej ludzkości.
      </p>
    </OneColumn>

        {/* ═════════════ PRENUMERATA + STOPKA REDAKCYJNA ═════════════ */}
    <div className={styles.kicker}>Informacje</div>
    <h2 className={styles.headlineSpan} data-nonum>Prenumerata</h2>
    <OneColumn>
      <p>
        Ukazuje się co tydzień po polsku, duńsku, grecku i hiszpańsku, każde
        wydanie wraz z wersją angielską. Dostępna w druku i jako PDF.
      </p>
      <h3 className={styles.headline}>Szkoły</h3>
      <p>[Licencja szkolna: cena, co obejmuje.]</p>
      <h3 className={styles.headline}>Firmy i organizacje</h3>
      <p>[Prenumerata dla organizacji: cena, co obejmuje.]</p>
      <h3 className={styles.headline}>Osoby prywatne</h3>
      <p>[Ceny prenumeraty drukowanej i PDF.]</p>
      <h3 className={styles.headline}>Lekcje gramatyki</h3>
      <p>W sprawie indywidualnych lub grupowych lekcji gramatyki prosimy pisać na adres mind@horistics.com.</p>
      <h3 className={styles.headline}>Kontakt</h3>
      <p>mind@horistics.com<br />prosopocracy.com/paper</p>

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
  content,
};
