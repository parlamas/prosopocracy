import styles from "../../paper.module.css";
import { PageBreak, OneColumn, FrontPage, Story, Continue, Def, type Edition } from "../../Paginator";

/*
  HOW TO WRITE
  - One paragraph = one <p>...</p>. Text fills the left column, then the right,
    then continues on the next page automatically.
  - Headline across both columns:  <h2 className={styles.headlineSpan}>...</h2>
  - Headline inside one column:    <h3 className={styles.headline}>...</h3>
  - New page:                      <PageBreak />
  - One column:                    put blocks inside <OneColumn> ... </OneColumn>
  - Definition:                    <Def term="Justice">is the prevention of crime.</Def>
  - Front page:                    two <Story id="..."> inside <FrontPage>;
                                   the rest appears where you put <Continue id="..." />.
  - Keep blocks directly inside the content, <Story> or <OneColumn> —
    don't wrap them in extra <div>s.
*/

const ISSUE = {
  name: "HORISTICS",
  tagline: "Grammar · Paragrammar · Politics · Quality Of Life · Interpretive News",
  number: "No. 2",
  date: "1 December 2026",
  price: "€2.70",
  editor: "Isidoros Parlamas",
  publisher: "Horistics · Vejle · CVR 43109324",
  issn: "ISSN 3151-9164 (print) · ISSN 3151-9172 (online)",
};

const masthead = (
  <header className={styles.masthead}>
    <div className={styles.mastheadTop}>
      <span>{ISSUE.number}</span>
      <span>{ISSUE.date} · CVR 43109324 · MobilePay 27 13 44 83</span>
      <span>{ISSUE.price}</span>
    </div>
        <h1 className={styles.title}>{ISSUE.name}</h1>
    <div className={styles.motto}>The Revealing Power Of Definitions</div>
    <div className={styles.tagline}>{ISSUE.tagline}</div>
  </header>
);

const content = (schools: boolean) => (
  <>
    <FrontPage>

      <Story id="voice">
        <h2 className={styles.headlineSpan}>Voice Is Not Diathesis</h2>
        <h3 className={styles.headline}>A word that means sound</h3>
        <p>Open any grammar book of English, Danish or almost any other language, and you will find “active voice” and “passive voice.” You will not find a definition of “voice.”</p>
        <p>The word comes from Latin <em>vox</em>, which means sound. It says nothing about a subject or an action. At best, the books describe what they mean: “voice shows whether the subject acts or is acted upon.” But a description under the wrong name is not a definition. The student learns the name and understands nothing.</p>
        <p>What the books mean is not voice. It is <strong>diathesis</strong> (διάθεσις, plural διαθέσεις). The two are different things, and they must be defined apart.</p>
        <h3 className={styles.headline}>Two definitions</h3>
        <p className={styles.lead}><Def term="Diathesis">is the origin of the energy in the sentence, as it bears on the subject.</Def><span className={styles.defLabel}>(def-18)</span></p>
        <p>Energy here means energy as we study it in physics. It is not a metaphor; every word is meant literally. To find the diathesis, we ask where the energy comes from and what it does to the subject.</p>
        <p className={styles.lead}><Def term="Voice">is a dedicated, full set of verb forms that accompanies a diathesis.</Def><span className={styles.defLabel}>(def-19)</span></p>
        <p>Voice is morphology: the form of the word, its stem and its endings. Diathesis is the relation of energy to the subject. One belongs to form, the other to meaning. A language can express a diathesis without having a voice for it.</p>
        <h3 className={styles.headline}>Who has voice</h3>
        <p>The test is strict. The set must be <strong>full</strong>: every person, every tense, every mood. Each form must be <strong>one word</strong>: a helper word plus the active form is a periphrasis, not a voice. And the set must be <strong>dedicated</strong>: its endings must differ from the endings of the active forms of the same verb.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Classical Greek: λύω, “loosen”</div>
          <p><strong>Present:</strong> λύ-ω, λύ-εις, λύ-ει → λύ-ομαι, λύ-ῃ, λύ-εται</p>
          <p><strong>Aorist:</strong> ἔλυσ-α, ἔλυσ-ας, ἔλυσ-ε → ἐλύθη-ν, ἐλύθη-ς, ἐλύθη</p>
          <p>Every person, tense and mood has its own one-word passive form, with endings different from the active.</p>
        </div>
        <p>Among the well-documented languages, only Classical Greek and Sanskrit pass all three tests. Both inherited from their common Indo-European ancestor two complete sets of endings, one active and one middle/passive, and both kept them in every tense and mood: Greek λύ-ει → λύ-εται, Sanskrit <em>bhara-ti</em> → <em>bhriya-te</em>.</p>
        <p>Every other language fails at least one test. English, Spanish and Hindi use a helper verb, which is a periphrasis. Latin uses one in the perfect (<em>amatus sum</em>). Arabic and Hebrew change the stem but keep the active endings (<em>katab-tu</em> → <em>kutib-tu</em>). Turkish and Japanese insert one element and keep the active endings (<em>yaz-dı-m</em> → <em>yaz-ıl-dı-m</em>). Danish and Swedish have a single form in <em>-s</em>, and one form is not a set. Modern Greek keeps its own endings only in the present (κοιτάζ-ω → κοιτάζ-ομαι); in the past the endings are the same (κοίταξ-α → κοιτάχθηκ-α).</p>
        <p>Voice, in the full sense, belongs to Classical Greek and Sanskrit. No language spoken today has it. So when a grammar book today teaches “the passive voice,” it teaches something the language does not have.</p>
        <h3 className={styles.headline}>The five diatheseis</h3>
        <p>Every language has the same five, because each is decided by one question with a physical answer: where does the energy come from, and what does it do to the subject?</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>The five diatheseis</div>
          <p><strong>Active.</strong> The energy comes from the subject and leaves it. <em className={styles.example}>I write the letter.</em></p>
          <p><strong>Passive.</strong> The energy comes from outside the subject, and the subject itself is changed, physically or in status. <em className={styles.example}>The window was broken. He was elected.</em></p>
          <p><strong>Middle.</strong> The energy comes from the subject, leaves it and returns to it. <em className={styles.example}>Λούζομαι.</em> (I wash my hair.)</p>
          <p><strong>Internal.</strong> The energy comes from the subject and never leaves it. <em className={styles.example}>I am worried.</em></p>
          <p><strong>Receptive.</strong> The energy comes from outside the subject; only the receiving organ is affected, and the subject stays as it was. <em className={styles.example}>I see a blue bird in that tree.</em></p>
        </div>
        <p>Two cases show how the test works.</p>
        <p><em className={styles.example}>I am worried.</em> Where does the energy come from? Not from outside: the sentence names no source, and the worrying is done by the subject’s own body and mind. It does not go out and come back, as in the middle. It starts in the subject and stays there. <strong>Internal.</strong></p>
        <p><em className={styles.example}>I see a blue bird in that tree.</em> The energy is light. It comes from the sun, is reflected by the bird, and enters the eye. The subject sends nothing out. The eye is affected, but the subject is not changed. <strong>Receptive</strong>, not passive.</p>
        <h3 className={styles.headline}>Why the school definition fails</h3>
        <p>Greek school grammar says: <em>Διάθεση του ρήματος είναι η σχέση του υποκειμένου με την ενέργεια που φανερώνει το ρήμα</em> (the relation of the subject to the action the verb shows). It then lists four: active, passive, middle and neuter.</p>
        <p>Three things are wrong.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Three errors</div>
          <p>1. <strong>It asks the wrong question.</strong> A “relation to the action” has no anchor. The question is the <em>origin</em> of the energy, and that has a physical answer.</p>
          <p>2. <strong>It uses “ενέργεια” without defining it.</strong> The word is there, but the books never say what it is or where it comes from.</p>
          <p>3. <strong>Its fourth class is defined by what it is not.</strong> “Neuter” means the subject neither acts on something else nor receives. A class defined only by negation is a leftover box. Internal and receptive diathesis both fall into it, unseparated.</p>
        </div>
        <p>The result is that a verb can be moved from one class to another by habit or convenience. With the origin of energy as the test, it cannot.</p>
        <p>Form does not decide diathesis either. <em>Ανησυχώ</em> (I worry) has active endings, but its diathesis is internal. <em>I see</em> has active form, but its diathesis is receptive. Voice and diathesis must be kept apart.</p>
        <h3 className={styles.headline}>Grammar and paragrammar</h3>
        <p>Diathesis is grammar, and grammar is universal. Energy comes from the same places in every language, so every language has the same five diatheseis, exactly identical.</p>
        <p>Voice is paragrammar. It depends on the language: it is one way a language may mark a diathesis, with a full, dedicated set of verb forms. Classical Greek and Sanskrit had it. Languages spoken today mark diathesis in other ways: with helper words, with changes to the stem, or with an inserted element.</p>
        <p>The grammar books mix the two. They call diathesis “voice,” a word that means sound. They never define it. And they teach it in languages that have no voice at all. That is three errors in one term, copied from book to book.</p>
        <p>The remedy is the same as always: define the term, anchor the definition to something that does not move, and test every case against it. Here the anchor is the origin of the energy. It is stable, and it does not bend to anyone’s whim or convenience.</p>
      </Story>

      <Story id="also">
        <h2 className={styles.headlineSpan}>Why “Also” Is Not an Adverb</h2>
        <h3 className={styles.headline}>One small word</h3>
        <p>Take a plain sentence: <em className={styles.example}>I like fish; I also like beef.</em></p>
        <p>Every grammar book of English, Danish and many other languages states with certainty that “also” is an adverb. Teachers repeat it, students learn it, and nobody asks whether it is true. This article asks that question, and answers it with one tool only: the definition.</p>
        <h3 className={styles.headline}>The test: what is an adverb?</h3>
        <p className={styles.lead}><Def term="An adverb">is a word that tells how, when, where, how often or to what degree.</Def><span className={styles.defLabel}>(def-13, revised)</span></p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Three checks</div>
          <p><strong>1. The five questions.</strong> <em className={styles.example}>She runs quickly</em> (how). <em className={styles.example}>She left yesterday</em> (when). <em className={styles.example}>She lives here</em> (where). <em className={styles.example}>She never eats fish</em> (how often). <em className={styles.example}>It is very cold</em> (to what degree).</p>
          <p><strong>2. What it qualifies:</strong> a verb, an adjective or another adverb. <em className={styles.example}>She runs quickly</em> (the verb). <em className={styles.example}>It is very cold</em> (the adjective). <em className={styles.example}>She walks too slowly</em> (the adverb).</p>
          <p><strong>3. The one-word answer.</strong> How does she run? <em>Quickly.</em> When did she leave? <em>Yesterday.</em> How often does she eat fish? <em>Never.</em></p>
        </div>
        <p>Now put “also” to the test. In <em className={styles.example}>I also like beef</em>, does <em className={styles.target}>also</em> tell how I like beef? No. When? No. Where? No. How often? No. To what degree? No.</p>
        <p>Second check: does <em className={styles.target}>also</em> qualify the verb “like”? No. The liking stays the same; “also” only adds beef to fish.</p>
        <p>Third check: can <em className={styles.target}>also</em> stand alone as a one-word answer? No. There is no question to which “Also.” is an answer.</p>
        <p>“Also” fails all three checks. It does not fit the definition. Therefore it is not an adverb.</p>
        <p>One could try to save the label by stretching the definition, adding a sixth question or calling “also” a “special” adverb. But a definition that is bent to fit every word that already wears the label no longer defines anything. We stick to the definition.</p>
        <h3 className={styles.headline}>What “also” is: a conjunction</h3>
        <p className={styles.lead}><Def term="A conjunction">is a word that joins clauses and shows how they relate: addition, contrast, cause, result, condition, time.</Def><span className={styles.defLabel}>(def-16, revised)</span></p>
        <p>Conjunctions join clauses, not words. When a conjunction seems to join two words, two clauses are implied: <em className={styles.example}>I bought a book and a pen</em> = <em>I bought a book and I bought a pen.</em> The second clause is shortened, but it is still a clause, and “and” joins the two.</p>
        <p>Now look at “also” again: <em className={styles.example}>I like fish; I also like beef.</em> <em className={styles.target}>Also</em> joins the second clause to the first, and it gives them a cumulative relation: the second adds to the first. That is exactly what the definition asks of a conjunction. “Also” is a conjunction.</p>
        <p>The semicolon does not change this. Punctuation is a mark, not a word; it has no part of speech. What “also” is depends only on what “also” does.</p>
        <h3 className={styles.headline}>“Too” is a conjunction as well</h3>
        <p>The same test applies to “too”: <em className={styles.example}>He likes fish. I like fish, too.</em> <em className={styles.target}>Too</em> joins the second clause to the first and gives them a cumulative relation. It fits the definition of a conjunction, exactly as “also” does. It sits at the end of the clause instead of before the verb, but position does not decide the part of speech; the job does.</p>
        <p>Danish shows the same thing from another side. It has one word for both: <em className={styles.example}>Jeg kan også lide fisk</em> = <em>I also like fish</em> / <em>I like fish, too.</em> Danish needs only <em className={styles.target}>også</em> because “also” and “too” do one and the same job: joining clauses in a cumulative relation. Both are conjunctions.</p>
        <p>(The other English “too,” as in <em>too hot</em>, is a different word with a different job. Danish keeps it apart: <em>for varm</em>.)</p>
        <h3 className={styles.headline}>Why the books get it wrong</h3>
        <p>The books did not test “also” against a definition. They looked at where it sits in the sentence: <em className={styles.example}>I never eat fish.</em> <em className={styles.example}>I also eat fish.</em> Both words stand in the same place, between the subject and the verb. So the books filed them together. But position is not function, and word order does not define a part of speech.</p>
        <p>“Never” tells how often, so it fits the definition of an adverb. “Also” joins clauses and gives them a cumulative relation, so it fits the definition of a conjunction. Same position, different job.</p>
        <h3 className={styles.headline}>One error, thousands of copies</h3>
        <p>How does a mistake like this survive in every grammar book? One expert makes it, and thousands follow. Each book copies the label from the book before. Nobody checks the word against a definition, because nobody works with definitions. This is sciolism: the look of knowledge without the substance. A label passed on that way is a habit, not knowledge.</p>
        <p>When the error is pointed out, the answer is rarely an argument. It is “all the books say so,” or a comment about the person who asked. Neither is a reason.</p>
        <p>The cure is simple, and anyone can apply it. Define the term. Test the word against the definition. If it fits, keep the label; if it does not, drop it, no matter how many books carry it. One check was enough to show that “also” is not an adverb. The same check, applied honestly, would clear much of the confusion in grammar, and far beyond it.</p>
      </Story>

    </FrontPage>

    <Continue id="voice" />

    <Continue id="also" />

    <h2 className={styles.headlineSpan}>There Are No Conjunctive Adverbs</h2>
    <h3 className={styles.headline}>One word, two categories</h3>
    <p>Grammar books teach a part of speech called the “conjunctive adverb.” Under it they list words such as <em>however, therefore, moreover, furthermore, consequently, nevertheless, nonetheless, hence, otherwise, accordingly, likewise, besides, also</em>.</p>
    <p>The name itself is the problem. It places one word in two categories at once: it is an adverb, and it does the work of a conjunction. A part of speech cannot be both. Either a word fits the definition of an adverb, or it fits the definition of a conjunction. This article tests these words against both definitions, def-13 and def-16 as revised in this issue, and shows that every one of them is a conjunction.</p>
    <h3 className={styles.headline}>The test</h3>
    <p>Take each word in a sentence of two clauses. Ask what it does, then run the three adverb checks: the five questions, what it qualifies, and the one-word answer.</p>
    <div className={styles.box}>
      <div className={styles.boxTitle}>Ten words, two clauses</div>
      <p><em className={styles.target}>however</em>: <em className={styles.example}>It rained; however, we went out.</em> (contrast)</p>
      <p><em className={styles.target}>nevertheless</em>: <em className={styles.example}>It rained; nevertheless, we went out.</em> (contrast)</p>
      <p><em className={styles.target}>therefore</em>: <em className={styles.example}>It rained; therefore, we stayed in.</em> (result)</p>
      <p><em className={styles.target}>consequently</em>: <em className={styles.example}>It rained; consequently, we stayed in.</em> (result)</p>
      <p><em className={styles.target}>hence</em>: <em className={styles.example}>It rained; hence the mud.</em> (result)</p>
      <p><em className={styles.target}>moreover</em>: <em className={styles.example}>It is cheap; moreover, it is good.</em> (addition)</p>
      <p><em className={styles.target}>furthermore</em>: <em className={styles.example}>It is cheap; furthermore, it is good.</em> (addition)</p>
      <p><em className={styles.target}>also</em>: <em className={styles.example}>I like fish; I also like beef.</em> (addition)</p>
      <p><em className={styles.target}>likewise</em>: <em className={styles.example}>She left early; likewise, he left.</em> (addition by likeness)</p>
      <p><em className={styles.target}>otherwise</em>: <em className={styles.example}>Hurry; otherwise, you will be late.</em> (condition)</p>
    </div>
    <p>Every word fails all three adverb checks. Take <em className={styles.target}>however</em>: it does not tell how we went out, or when, or where. It does not change “went” in any way. And there is no question to which “However.” is an answer.</p>
    <p>Every word passes the conjunction test. Each joins the second clause to the first and states the relation between them. That is the definition of a conjunction, and nothing more is needed. These words are conjunctions.</p>
    <h3 className={styles.headline}>One word, two roles</h3>
    <p>A part of speech is decided by the role a word plays in its clause, not by its spelling. The same word can be an adverb in one sentence, a preposition in another, and a conjunction in a third. That is no reason for a mixed category; it is a reason to test each use.</p>
    <div className={styles.box}>
      <div className={styles.boxTitle}>“Before” in three roles</div>
      <p><strong>Adverb:</strong> <em className={styles.example}>He was here before.</em> It tells when. When was he here? <em>Before.</em></p>
      <p><strong>Preposition:</strong> <em className={styles.example}>It is before your eyes.</em> It takes an object: “your eyes.”</p>
      <p><strong>Conjunction:</strong> <em className={styles.example}>Call before you come.</em> It joins two clauses and shows their relation in time.</p>
    </div>
    <p>The definitions separate the three uses cleanly. Where “before” answers when, it is an adverb. Where it takes an object, it is a preposition. Where it joins clauses and shows their relation, it is a conjunction. No mixed category is needed.</p>
    <h3 className={styles.headline}>Where the label comes from</h3>
    <p>The label is old. Goold Brown’s <em>The Grammar of English Grammars</em> (1851) already defines it: conjunctive adverbs are “those which perform the office of conjunctions, and serve to connect sentences, as well as to express some circumstance of time, place, degree, or the like.”</p>
    <p>The definition gives the case away. By Brown’s own words, these words do the work of conjunctions: they connect sentences. The adverb part is only claimed, “some circumstance … or the like,” and for the words in the box above it is not there at all.</p>
    <p>Brown knew the boundary was in doubt. He reports that some writers had already placed <em>also, since, too, then, therefore</em> and <em>wherefore</em> among the conjunctions, and <em>as, so, still, however</em> among the disjunctive conjunctions, while Johnson and Webster marked most of them as adverbs. His response: “It is perhaps of little moment, by which name they are called.”</p>
    <p>He even had the right test in hand: “I call them adverbs when they chiefly express time, manner, or degree; and conjunctions when they appear to be mere connectives.” Applied strictly, that test leaves nothing for a third category. Brown applied it, shrugged, and kept the mixed label. The books have copied it since.</p>
    <h3 className={styles.headline}>Why the label survives</h3>
    <p>The books defend the label with two observations. Neither one touches the definition.</p>
    <div className={styles.box}>
      <div className={styles.boxTitle}>Two observations</div>
      <p>1. <strong>Punctuation.</strong> They say a conjunctive adverb takes a semicolon before it and a comma after it: <em className={styles.example}>It rained; however, we went out.</em> But punctuation is a mark, not a word. It has no part of speech, and it cannot give one to a word.</p>
      <p>2. <strong>Position.</strong> They say these words can move inside the clause: <em className={styles.example}>We, however, went out. We went out, however.</em> But position does not define a part of speech either. A word that joins two clauses and states their relation does the same job wherever it stands.</p>
    </div>
    <p>What keeps the label alive is not an argument. It is copying. Each book takes the term from the book before, and nobody tests the words against the definitions.</p>
    <p>The remedy is the one that settles every case of this kind. Define the parts of speech. Test each word, in each use, against the definitions. Where a word joins clauses and shows their relation, it is a conjunction. There is no part of speech called the conjunctive adverb.</p>
    <div className={styles.box}>
      <div className={styles.boxTitle}>A note on definitions</div>
      <p>The definitions of the adverb (def-13) and the conjunction (def-16) given in this issue replace those given in No. 1.</p>
    </div>
    <p><em>The moods follow in No. 3.</em></p>

    {/* ═════════════ SUBSCRIBE + IMPRINT ═════════════ */}
    <PageBreak />
        <h2 className={styles.headlineSpan} data-nonum>Subscribe</h2>
    <OneColumn>
    <p>
      Published monthly in English, Danish, Polish, Greek and Spanish. Available in
      print and as PDF.
    </p>
    <h3 className={styles.headline}>Schools</h3>
    <p>1,995 kr. (€268) a year per school. Includes the PDF edition in every language, which the school may copy for its own pupils and teachers.</p>
    <h3 className={styles.headline}>Businesses and organisations</h3>
    <p>1,495 kr. (€200) a year. Includes the PDF edition for up to 10 readers. Larger groups on request.</p>
    <h3 className={styles.headline}>Individuals</h3>
    <p>Print: 799 kr. (€107) a year. PDF: 399 kr. (€54) a year. Single copy: 20 kr. (€2.70).</p>
        <h3 className={styles.headline}>Grammar lessons</h3>
    <p>Individual and group lessons in grammar, in English, Greek and Spanish. Enquiries: mind@horistics.com.</p>
    <h3 className={styles.headline}>Contact</h3>
    <p>To subscribe, write to mind@horistics.com with your name, address and the edition you want. Pay by MobilePay 27 13 44 83.</p>

    <div className={styles.imprint}>
      <div><strong>Responsible editor:</strong> {ISSUE.editor}</div>
      <div><strong>Publisher:</strong> {ISSUE.publisher}</div>
      <div>{ISSUE.issn} · {ISSUE.number}, {ISSUE.date}</div>
    </div>
    </OneColumn>
  </>
);

export const english: Edition = {
  lang: "en",
  name: ISSUE.name,
  date: ISSUE.date,
  masthead,
  continuedOn: "Continued on page {n} →",
  continuedFrom: "Continued from page 1",
    content: content(false),
};

// Schools edition: same paper without the Interpretive News article.
export const englishSchools: Edition = { ...english, content: content(true), oneColumn: true };
