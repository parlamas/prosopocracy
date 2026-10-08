//app/paper/content/english.tsx

import styles from "../paper.module.css";
import { PageBreak, OneColumn, FrontPage, Story, Continue, Def, type Edition } from "../Paginator";

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
  number: "No. 1",
  date: "9 October 2026",
  price: "€2.70",
  editor: "Isidoros Parlamas",
  publisher: "Horistics · CVR 43109324",
  issn: "ISSN pending",
};

const masthead = (
  <header className={styles.masthead}>
    <div className={styles.mastheadTop}>
      <span>{ISSUE.number}</span>
      <span>{ISSUE.date} · CVR 43109324 · Vejle · MobilePay 27 13 44 83</span>
      <span>{ISSUE.price}</span>
    </div>
        <h1 className={styles.title}>{ISSUE.name}</h1>
    <div className={styles.motto}>The Revealing Power Of Definitions</div>
    <div className={styles.tagline}>{ISSUE.tagline}</div>
  </header>
);

const content = (schools: boolean) => (
  <>
    {/* ═════════════ PAGE 1: TWO STORIES SIDE BY SIDE ═════════════ */}
    <FrontPage>

      {/* Left column */}
      <Story id="grammar">
        <h2 className={styles.headlineSpan}>What grammar is — not what it consists of</h2>

        <p className={styles.lead}><Def term="Grammar">is the generation of thought.</Def><span className={styles.defLabel}>(def-1)</span></p>

        <p>In other words, it is grammar that generates thoughts.</p>

        <p>
          That sounds simple, but it says what grammar is, not what it consists of. What pass for definitions of grammar are really descriptions, not definitions.
        </p>
        <p className={styles.lead}><Def term="Thoughts">are mental, composite, simulated representations of occurrences.</Def><span className={styles.defLabel}>(def-2)</span></p>

        <p>Grammar generates thoughts through six fundamental concepts: parts of speech, moods, diatheses, aspects, clauses and syntax. Everything else (morphology, vocabulary, punctuation, pronunciation and so on) is paragrammar.</p>

        <p>These concepts are not new. Grammar as a discipline was founded by the Greeks: by Socrates (470–399 Before Year 1, BY1) in Plato's <em>Cratylus</em>, who examines the correctness of names and distinguishes nouns (<em>ὀνόματα</em>) from verbs (<em>ῥήματα</em>); by Dionysius Thrax (c. 170–90 BY1), whose <em>Art of Grammar</em> set out the eight parts of speech; and by Apollonius Dyscolus (2nd century After Year 1, AY1), who founded the study of syntax.</p>

        <p>When we think of something, all six concepts are set in motion. No thought is possible without all six.</p>

        <p>The human brain is wired to generate thought in exactly the same way, regardless of language. Grammar is therefore a panhuman trait that unites us all in a very special but overlooked way. Grammar is universal; language is not.</p>

        <p className={styles.lead}><Def term="Communication">is the exchange of messages that carry meaning.</Def><span className={styles.defLabel}>(def-3)</span></p>

        <p>Every message that carries meaning carries thought, and no thought exists without grammar. All communication is therefore grammatical.</p>

        <p>Language is often said to be what gives thoughts a voice, but that is a metaphor, not a definition.</p>

        <p className={styles.lead}><Def term="Language">is paragrammatical communication.</Def><span className={styles.defLabel}>(def-4)</span></p>

        <p>In other words, language is communication via paragrammar. All communication is grammatical, but only language is both grammatical and paragrammatical. Grammar is what all languages share with all thought; paragrammar is how each language dresses it.</p>
                
          <p>Take one simple sentence: <em className={styles.example}>We bought fish this morning.</em> Say it
          in Danish, Greek, Spanish or any other language, and the words change,
          the endings change, the word order may change. But the grammar does not.
        </p>
        <h3 className={styles.headline}>Parts of speech</h3>
                <p>
          <em className={styles.target}>We</em> is a pronoun, <em className={styles.target}>bought</em> is a verb, <em className={styles.target}>fish</em> is a
          noun, <em className={styles.target}>this</em> is an adjective and <em className={styles.target}>morning</em> is a noun.</p>

          <p>Many words can belong to different parts of speech in different contexts, but in a given context each word belongs to only one. Taken one by one, their equivalents belong to the same parts of speech in every language.
        </p>
        <p>In Greek or Spanish, <em className={styles.target}>we</em> can be stated (<em>εμείς</em>, <em>nosotros/as</em>) or left to the verb ending. Either way, the pronoun is there. Only its marking differs, and that is paragrammar.</p>
        <h3 className={styles.headline}>Mood</h3>
        <p>
          The sentence states a fact. It is in the indicative mood, in all
          languages.
        </p>
        <h3 className={styles.headline}>Diathesis</h3>
        <p>
          The subject performs the action: we did the buying. The sentence is
          active, in all languages.
        </p>
        <h3 className={styles.headline}>Aspect</h3>
        <p>
          The buying is seen as one complete act. The aspect is synoptic, in all
          languages.
        </p>
        <h3 className={styles.headline}>Clause</h3>
        <p>
          It is a declarative main clause, in all languages.
        </p>
        <h3 className={styles.headline}>Syntax</h3>
        <p>
          <em className={styles.target}>We</em> is the subject, <em className={styles.target}>bought</em> is the verb, <em className={styles.target}>fish</em> is the direct object and <em className={styles.target}>this morning</em> is the adverb, in all
          languages.
        </p>
        <p>
          Six concepts, and not one of them changes across languages.
                    What varies <em>from language to language</em> is how each language marks them: its endings, its word
                    order, its spelling, its pronunciation and so on. That is paragrammar.
        </p>
                        <h3 className={styles.headline}>Thought comes first</h3>
        <p>Before anything is said or written, it exists as a thought. We do not first find the words and then work out what they mean. We think first, and then we look for the words. The thought is already complete in the mind, with all six concepts in place, before any language gives it form.</p>
        <p>Language comes after. It chooses the words, the endings and the word order, and decides how much of the thought is said aloud. By then, grammar has already done its work. Grammar generates the thought; language communicates it. The next two examples show this.</p>
        <h3 className={styles.headline}>A second example</h3>
        <p>Take another sentence: <em className={styles.example}>The children were playing in the garden.</em></p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>The children were playing in the garden.</div>
          <p><strong>Parts of speech:</strong> <em className={styles.target}>the</em> article, <em className={styles.target}>children</em> noun, <em className={styles.target}>were</em> verb, <em className={styles.target}>playing</em> participle, <em className={styles.target}>in</em> preposition, <em className={styles.target}>the</em> article, <em className={styles.target}>garden</em> noun.</p>
          <p><strong>Mood:</strong> indicative.</p>
          <p><strong>Diathesis:</strong> active.</p>
          <p><strong>Aspect:</strong> progressive. The playing is seen as ongoing, not as one complete act.</p>
          <p><strong>Clause:</strong> declarative main clause.</p>
          <p><strong>Syntax:</strong> <em className={styles.target}>the children</em> subject, <em className={styles.target}>were playing</em> verb, <em className={styles.target}>in the garden</em> adverb.</p>
        </div>
        <p>Compared with the first sentence, only the aspect differs. One concept changes, and the thought changes with it: a completed purchase becomes an ongoing game.</p>
        <h3 className={styles.headline}>What is not said</h3>
        <p>Someone asks: <em>When are you leaving?</em> You answer with one word: <em className={styles.example}>Tomorrow.</em></p>
        <p>One word is spoken, yet the listener understands a complete thought: <em className={styles.target}>[I am leaving]</em> <em>tomorrow</em>. The words in brackets are not said. They are implied, and grammar supplies them.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>[I am leaving] tomorrow.</div>
          <p><strong>Parts of speech:</strong> <em className={styles.target}>[I]</em> pronoun, <em className={styles.target}>[am]</em> verb, <em className={styles.target}>[leaving]</em> participle, <em className={styles.target}>tomorrow</em> adverb.</p>
          <p><strong>Mood:</strong> indicative.</p>
          <p><strong>Diathesis:</strong> active.</p>
          <p><strong>Aspect:</strong> progressive.</p>
          <p><strong>Clause:</strong> declarative main clause.</p>
          <p><strong>Syntax:</strong> <em className={styles.target}>[I]</em> subject, <em className={styles.target}>[am leaving]</em> verb, <em className={styles.target}>tomorrow</em> adverb.</p>
        </div>
        <p>All six concepts are at work, although only one word was spoken. That is what it means for grammar to generate thought: the thought is complete before a single word is chosen. How much of it we say aloud is paragrammar.</p>
                        <h3 className={styles.headline}>The parts of speech</h3>
        <p>Before we list the parts of speech, let us define them.</p>
        <p className={styles.lead}><Def term="The parts of speech">are non-semiotic categories of interacting concepts that clarify the semantics of speech.</Def><span className={styles.defLabel}>(def-5)</span></p>
        <p><em>Non-semiotic</em> means that the parts of speech have no morphology; that is, we do not take morphology into account when dealing with the parts of speech. <em>Semantics</em> means meaning.</p>
        <p>It follows that the definition of each part of speech must be honoured strictly and without exception.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Note 1</div>
          <p>The part of speech to which a word belongs in a given sentence is determined solely by the definition whose criteria that word actually satisfies.</p>
          <p>Each part of speech has a specific definition. The criteria of the definitions are exclusively semantic, never morphological.</p>
        </div>
        <p>There are ten parts of speech, the same in every language. Some languages, such as Polish and Chinese, have no articles, so they have nine.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>The ten parts of speech</div>
          <p>1. Nouns</p>
          <p>2. Articles</p>
          <p>3. Pronouns</p>
          <p>4. Adjectives</p>
          <p>5. Verbs</p>
          <p>6. Participles</p>
          <p>7. Adverbs</p>
          <p>8. Prepositions</p>
          <p>9. Conjunctions</p>
          <p>10. Interjections</p>
        </div>
                <p className={styles.lead}><Def term="Nouns">are words that name entities.</Def><span className={styles.defLabel}>(def-6)</span></p>
                <p>An entity is anything we can name: a person, a thing, a place, an idea. <em className={styles.target}>Fish</em>, <em className={styles.target}>Copenhagen</em>, <em className={styles.target}>teacher</em> and <em className={styles.target}>justice</em> are all nouns, because each one names an entity.</p>
        <p>The definition decides, not the form. In <em className={styles.example}>Swimming is healthy</em>, the word <em className={styles.target}>swimming</em> ends like a verb form, but here it names an activity as an entity. It satisfies the definition of a noun, so it is a noun.</p>
        <p className={styles.lead}><Def term="Articles">are the words that determine the selectivity of nouns.</Def><span className={styles.defLabel}>(def-7)</span></p>
        <p>Compare <em className={styles.example}>I bought a fish</em> with <em className={styles.example}>I bought the fish</em>. With <em className={styles.target}>a</em>, the fish is not selected: it is any one fish. With <em className={styles.target}>the</em>, the fish is selected: it is a particular fish that speaker and listener both know. The noun is the same; the article determines how selective it is.</p>
        <p className={styles.lead}><Def term="Pronouns">are words used in place of nouns.</Def><span className={styles.defLabel}>(def-8)</span></p>
        <p>In <em className={styles.example}>Maria bought a fish. She cooked it.</em>, the word <em className={styles.target}>she</em> stands in place of <em className={styles.target}>Maria</em>, and <em className={styles.target}>it</em> stands in place of <em className={styles.target}>fish</em>. In our first sentence, <em className={styles.target}>we</em> stands in place of the names of the people who bought the fish.</p>
        <p className={styles.lead}><Def term="Adjectives">are words or groups of words that qualify nouns.</Def><span className={styles.defLabel}>(def-9)</span></p>
        <p>In <em className={styles.example}>fresh fish</em>, the word <em className={styles.target}>fresh</em> qualifies the noun <em className={styles.target}>fish</em>, so it is an adjective. In our first sentence, <em className={styles.target}>this</em> qualifies <em className={styles.target}>morning</em>, so it is an adjective too.</p>
        <p>An adjective can also be a group of words. In <em className={styles.example}>fish from the market</em>, the group <em className={styles.target}>from the market</em> qualifies <em className={styles.target}>fish</em>. By the definition, it is an adjective.</p>
        <p className={styles.lead}><Def term="Verbs">are words that take a subject.</Def><span className={styles.defLabel}>(def-10)</span></p>
        <p className={styles.lead}><Def term="Subjects">instantiate the meaning of verbs.</Def><span className={styles.defLabel}>(def-11)</span></p>
        <p>On its own, <em className={styles.target}>bought</em> is only a meaning: an act of buying, by no one in particular. In <em className={styles.example}>We bought fish</em>, the subject <em className={styles.target}>we</em> instantiates that meaning: the buying becomes an act that someone actually performed.</p>
        <p className={styles.lead}><Def term="Participles">are derivatives of verbs that introduce retrievable elliptical clauses.</Def><span className={styles.defLabel}>(def-12)</span></p>
        <p>A participle stands for a whole clause that has been shortened. The clause can always be retrieved:</p>
        <p><em className={styles.example}>Having injured his knee, he limped home.</em> = <em>Because he had injured his knee, he limped home.</em></p>
        <p><em className={styles.example}>Once mentioned, the name went viral.</em> = <em>After the name was mentioned, it went viral.</em></p>
        <p>In each case, the elliptical clause has been retrieved, and the meaning is unchanged.</p>
        <p className={styles.lead}><Def term="Adverbs">are words or groups of words that qualify verbs, adjectives, other adverbs and also clauses, with respect to time, place, manner, frequency, degree, attitude or perception.</Def><span className={styles.defLabel}>(def-13)</span></p>
        <p>Adverbs answer the questions <em>where?</em>, <em>how?</em>, <em>when?</em> and <em>how much?</em> The last one can be extended: <em>how often? how high? how surely? how much better?</em> An adverb can even be an answer on its own.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Four examples</div>
          <p>1. <em className={styles.example}>Maria sings beautifully.</em> The adverb <em className={styles.target}>beautifully</em> qualifies the verb <em className={styles.target}>sings</em>. <em>How does Maria sing? Beautifully!</em> It is an adverb of manner.</p>
          <p>2. <em className={styles.example}>Some people are incredibly naive.</em> The adverb <em className={styles.target}>incredibly</em> qualifies the adjective <em className={styles.target}>naive</em>. It is an adverb of degree: it tells us how naive.</p>
          <p>3. <em className={styles.example}>We go swimming very early.</em> The adverb <em className={styles.target}>very</em> qualifies the adverb <em className={styles.target}>early</em>. <em>Very</em> is an adverb of degree; <em>early</em> is an adverb of time.</p>
          <p>4. <em className={styles.example}>Perhaps they don't believe you.</em> The adverb <em className={styles.target}>perhaps</em> qualifies the whole clause <em className={styles.target}>they don't believe you</em>. It expresses probability.</p>
        </div>
        <p className={styles.lead}><Def term="Prepositions">are words or groups of words that take nouns or noun phrases as objects and express place, time, direction, cause, manner and so on.</Def><span className={styles.defLabel}>(def-14)</span></p>
        <p>There is no preposition without an object.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Three examples</div>
          <p>1. <em className={styles.example}>I gave the books to them.</em> The preposition <em className={styles.target}>to</em> takes the object <em className={styles.target}>them</em>, a pronoun standing in place of a noun, and expresses direction.</p>
          <p>2. <em className={styles.example}>The keys are in my pocket.</em> The preposition <em className={styles.target}>in</em> takes the noun phrase <em className={styles.target}>my pocket</em> and expresses place.</p>
          <p>3. <em className={styles.example}>I studied the problem in depth.</em> The preposition <em className={styles.target}>in</em> takes the noun <em className={styles.target}>depth</em> and expresses manner.</p>
        </div>
        <p className={styles.lead}><Def term="Noun phrases">are phrases that contain nouns or pronouns and can function as subjects, objects or complements.</Def><span className={styles.defLabel}>(def-15)</span></p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Three examples</div>
          <p>1. <em className={styles.target}>drama</em> → noun; <em className={styles.target}>a lot of drama</em> → noun phrase. <em className={styles.example}>If a film has a lot of drama, it is usually tiring.</em> <em>A lot of drama</em> is the direct object of the verb <em>has</em>.</p>
          <p>2. <em className={styles.target}>story</em> → noun; <em className={styles.target}>a long story</em> → noun phrase. <em className={styles.example}>Her life is a long story.</em> <em>A long story</em> is the complement of the verb <em>is</em>.</p>
          <p>3. <em className={styles.target}>moments</em> → noun; <em className={styles.target}>the hard moments</em> → noun phrase. <em className={styles.example}>The hard moments forge character.</em> <em>The hard moments</em> is the subject of the verb <em>forge</em>.</p>
        </div>
                        <p className={styles.lead}><Def term="Conjunctions">are words or groups of words that establish a relation of subordination, that is, of interdependence, between clauses.</Def><span className={styles.defLabel}>(def-16)</span></p>
        
<p>All conjunctions are hypotactic. The notion that some conjunctions are paratactic is unfounded and will be dealt with <strong>in due time</strong>.</p>

        <p>Conventional grammar books divide conjunctions into two categories: coordinating and subordinating. But why is this division made, and what does it contribute to the understanding of grammar?</p>
        <p>Conjunctions are divided in this way because the so-called grammarians have not grasped that, with the exception of conditional clauses, if we remove the conjunction from any subordinate clause, it automatically becomes a main clause. This happens not only with the "coordinating" conjunctions, but with all conjunctions.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Remove the conjunction</div>
          <p>1. <em className={styles.example}>I stayed at home because it was raining.</em> Without <em className={styles.target}>because</em>: <em>It was raining.</em> A main clause.</p>
          <p>2. <em className={styles.example}>I stayed at home, but she went out.</em> Without <em className={styles.target}>but</em>: <em>She went out.</em> A main clause.</p>
        </div>
        <p>As a rule, what makes a clause subordinate is the presence of a conjunction. The story does not end there, however. As we will see, even clauses without any conjunction are sometimes subordinate, because the semantics itself requires it.</p>
        <p>The nominal authors of grammar books simply copy other grammar books and paste the copy into a "new" book, changing only a few superficial details to keep up appearances. It goes without saying that the only thing this division of conjunctions contributes to grammar is abundant and pervasive confusion.</p>
        <p>It is also very important to point out that the definitions of concepts in these books, when they are given at all, do not meet the requirements of horistics. Beyond that, the "authors" of these books repeatedly violate the very definitions they supposedly formulated. The truth is that they simply copy from other books whatever definition happens to catch their eye.</p>
        <p className={styles.lead}><Def term="Interjections">are words or groups of words that express emotion and have no syntactic role.</Def><span className={styles.defLabel}>(def-17)</span></p>
        <p>By emotion we also mean <strong>will</strong> (<em className={styles.target}>shh!</em> meaning silence, <em className={styles.target}>come on!</em>), <strong>hesitation</strong> (<em className={styles.target}>hm</em>, <em className={styles.target}>er</em>) and <strong>social convention</strong> (<em className={styles.target}>hello</em>, <em className={styles.target}>thank you</em>), when these words are used as exclamations.</p>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Four examples</div>
          <p>1. <em className={styles.example}>Phew, it's finally over!</em> The word <em className={styles.target}>phew</em> has no syntactic role: it is not a subject, a complement, an object or anything else. This holds for all interjections.</p>
          <p>2. <em className={styles.example}>Ah, how I miss my mother!</em></p>
          <p>3. <em className={styles.example}>Ouch, what happened to me!</em></p>
          <p>4. <em className={styles.example}>Bravo, you did it perfectly!</em></p>
        </div>
        <p>A handful of words fit none of the definitions of the ten parts of speech. We call those words particles.</p>
        <p>
          <em>In the next edition: the moods, discussed in detail.</em>
        </p>
      </Story>

      {/* Right column */}
      <Story id="politics">
        <h2 className={styles.headlineSpan}>The Law vs The Penalty For Breaking The Law</h2>
        <p className={styles.lead}>Enforcing the penalty for breaking the law is not the law itself.</p>
        <p>
          What is justice? Let us define it:</p> <p className={styles.lead}><Def term="Justice">is the prevention of crime.</Def></p>
          <p>Once a crime has been committed, no justice can be done, because justice
          is preventing crime. What follows — arrest, trial, imprisonment — has to
          do with the penalty for breaking the law, which is not justice. So what
          is called law enforcement is really penalty enforcement.
        </p>
        <p>
          This shows a great deal about the revealing power of definitions, and
          what it reveals is central to a myriad of misconceptions that derail
          millions of lives.
        </p>
        <p>
          Consider the phrase we hear on the news every week: the criminal was
          "brought to justice." He was not. He was brought to penalty. The justice
          that could have been done was the prevention of his crime, and that
          moment passed before the crime took place. What remains after the fact
          is a consequence, not a remedy.
        </p>
        <p>
          Consider the victim. We tell the victim that justice will be done, that
          the verdict will bring justice. But the harm has already happened, and no
          sentence undoes it. The victim is promised one thing and given another.
          Many wait years for a trial expecting relief, and when the sentence comes,
          they feel strangely empty. They were not wrong to feel it. They were
          given the wrong word.
        </p>
        <p>
          Justice is confused with punishment, with revenge, with financial
          compensation and with the legal. It is none of them. Punishment is the
          penalty imposed after the crime. Revenge is harm returned for harm.
          Compensation is money paid for damage already done. The legal is what
          the law permits or forbids, and it is not uncommon for the legal to be
          unjust and for the just to be illegal. Opioids were legally marketed and
          prescribed on a mass scale, and an epidemic of addiction followed. In
          many countries, people are penalized for speaking freely. All four
          come after the crime or stand beside it. Not one of them prevents it,
          and so not one of them is justice.
        </p>
        <p>
          Consider the politician. When politicians promise to be tough on crime,
          they nearly always mean tough on penalty: longer sentences, more prisons,
          more police after the fact. Each of these acts only after a crime has
          been committed. By the definition, none of them is justice. A government
          that spends most of its effort on penalties is not a government that
          does justice. It is a government that manages the failure of justice.
        </p>
        <p>
          If justice is the prevention of crime, then justice means eliminating the
          reasons that lead anyone to commit a crime, so that citizens have no
          reason to commit crimes in the first place. Every crime has a reason
          behind it, whether need, ignorance, exclusion or despair. Remove the
          reason, and the crime has nothing to grow from.
        </p>
        <p>
          That is primarily the duty of politics, as politics is properly defined.
          Not the courts, which arrive too late. Not the police, who arrive after
          the call. Not the prisons, which hold the consequences of a failure that
          has already happened. Politics is the only institution placed before the
          crime, where the reasons for it are formed, and so it is the only one
          that can do justice at all.
        </p>
                <OneColumn>
          <p>
            One definition, stated precisely, moves justice from the courtroom to
            the classroom, from the prison to the home, from the end of the story to
            its beginning. That is the revealing power of definitions. A society that confuses penalty with justice will keep building
            prisons and wondering why crime does not go away. A society that
            defines justice correctly will ask a different question: not how to
            punish, but how to prevent.
          </p>
        </OneColumn>
      </Story>

    </FrontPage>

    {/* ═════════════ CONTINUATION OF THE GRAMMAR STORY ═════════════ */}
    <Continue id="grammar" />

        

    {/* ═════════════ CONTINUATION OF THE POLITICS STORY ═════════════ */}
    
        
    <Continue id="politics" />

                {/* ═════════════ INTERPRETIVE NEWS ═════════════ */}
    {!schools && (<>
    
            <div className={styles.kicker}>Interpretive News</div>
        <h2 className={styles.headlineSpan}>The Use Of Nuclear Weapons Is No Longer Unthinkable</h2>
    <OneColumn>
    <p className={styles.lead}>Theodor Herzl was the visionary of Greater Israel</p>
    <figure className={styles.figure}>
      <img src="/paper/images/Herzl.jpeg" alt="Theodor Herzl" />
      <figcaption>Theodor Herzl</figcaption>
    </figure>
        
          <p>
      Theodor Herzl (1860–1904) was an Austro-Hungarian Jewish journalist,
      writer and political activist who became the central founder of modern
      political Zionism.
    </p>

    <div className={styles.box}>
      <div className={styles.boxTitle}>Theodor Herzl</div>
      <p><strong>Born:</strong> Budapest, 2 May 1860</p>
      <p><strong>Died:</strong> Edlach, Austria, 3 July 1904 (buried in Vienna)</p>
      <p><strong>Profession:</strong> journalist, playwright, writer</p>
      <p><strong>Major work:</strong> <em>Der Judenstaat</em> (The Jewish State), 1896</p>
      <p>
        <strong>Political role:</strong> organized the First Zionist Congress in
        Basel in 1897 and became president of the newly established Zionist
        Organization.
      </p>
      <p>
        <strong>Objective:</strong> a publicly and legally secured homeland for
        the Jewish people.
      </p>
    </div>

    <p>
      He pursued international diplomatic support for this project, including
      negotiations with the Ottoman Empire and the British government.
    </p>
    <p>
      Herzl died decades before the establishment of the State of Israel in
      1948, so he did not take part in the creation of the state itself. His
            writings and political organization nevertheless became foundational to
      the Zionist movement.
    </p>
    <p>
      To set the tone, let us go back to London in October 1902. On 23 October,
      according to his own diary, Herzl entered the office of Joseph
      Chamberlain, Britain's Colonial Secretary, at a quarter past twelve. He
      came with a request: territory under British control for Jewish
      colonization. He named three places: Cyprus, El-Arish and the Sinai
      Peninsula.
    </p>
    <p>
      No transcript of the meeting exists. What survives is Herzl's own
      account, written in his diary the following day. It is the primary
      source, and it is revealing precisely because it is his.
    </p>
    <p>
      Herzl explained why he could not simply wait for his negotiations with
      the Ottoman Sultan, who ruled Palestine. He compared them to buying a
      carpet: "If you want to buy a carpet, first you must drink half a dozen
      cups of coffee and smoke a hundred cigarettes; then you discuss family
      stories, and from time to time you speak again a few words about the
      carpet. Now I have time to negotiate, but my people has not. They are
      starving in the Pale. I must bring them immediate help."
    </p>
    <p>
      Chamberlain replied that he could speak with authority only about
      Cyprus, because El-Arish and Sinai fell under the Foreign Office. On
      Cyprus, Herzl records his answer:
    </p>
    <blockquote className={styles.pull}>
      "Cyprus is inhabited by Greeks and Moslems. I could not crowd them out
      for the sake of new immigrants. On the contrary, it would be my duty to
      take their side."
    </blockquote>
    <p>
            Chamberlain then added that if Herzl could point to a place in Britain's
      possessions where there were no white inhabitants, he would be willing
      to discuss it.
    </p>
    <p>
      Herzl did not let Cyprus go. He proposed creating a current in favour of
      Jewish settlement on the island, driven by Jewish capital. In his own
      words:
    </p>
    <blockquote className={styles.pull}>
      "Once we establish the Jewish Eastern Company, with 5 million pounds
      capital, for settling Sinai and El Arish, the Cypriots will begin to want
      that golden rain on their island, too. The Moslems will move away, the
      Greeks will gladly sell their lands at a good price and migrate to Athens
      or Crete."
    </blockquote>
    <p>
      And Herzl immediately records Chamberlain's reaction: "He seemed to take
      to the idea."
    </p>
    <p>
      The sequence matters. Chamberlain refused to crowd out the Greeks and
      Muslims of Cyprus. Herzl answered with a plan by which they would leave
      on their own: the Muslims would move away, the Greeks would sell and
      emigrate. And by Herzl's account, Chamberlain seemed to take to it. This
      is not a later interpretation of Herzl's position. It is in his own
      diary, written during his London negotiations of October 1902.
    </p>
    <p>
            The next day, Chamberlain arranged for Herzl to see the Foreign
      Secretary, Lord Lansdowne. But he told Herzl to leave Cyprus out of that
      meeting: "The part of the Plan relating to Cyprus is my business."
    </p>
    <p>
      The Cyprus option closed there. Britain looked into El-Arish, but that
      plan failed over the Egyptian government's position and the lack of
      water. In 1903, Chamberlain offered something else entirely: territory
      in British East Africa, the so-called Uganda Scheme.
    </p>
        <p>
      Many allege that the October 7, 2023 attack was allowed to happen so
      that the Netanyahu government could use it to justify the displacement
      of Palestinians from Gaza. This echoes an aspect of Theodor Herzl's
      thinking: when discussing Cyprus with Joseph Chamberlain in 1902, Herzl
      envisaged the departure of the Muslim population and the sale and
      migration of the Greek population to Athens or Crete.
    </p>
    <p>
      Israel is now pursuing a policy aimed at changing the Iranian regime.
      Given Iran's size, population, geography, military capabilities and
      demonstrated resilience, however, it is far from certain that Iran would
      capitulate through conventional military operations alone. The conflict
            has already demonstrated Iran's capacity to absorb substantial military
      pressure while continuing to retaliate.
    </p>
    <p>
      Yet neither Israel nor the United States can easily abandon the goal.
      Both have invested heavily in regime change, and giving it up would mean
      a serious loss of face and a heavy psychological blow to both.
    </p>
    <p>
      Meanwhile, there are reports of increasing Israeli involvement with
      Cyprus, including Israeli investment and security cooperation. If the
      Israeli government eventually concludes that military pressure will not
      produce regime change in Iran, a dangerous question arises: would it
      escalate to the use of tactical nuclear weapons? Such a step would not
      necessarily guarantee the collapse of the Iranian state and could
      instead produce an uncontrollable escalation.
    </p>
    <p>
      The consequences could extend far beyond the Middle East. A nuclear
      attack by Israel could create pressure for other nuclear powers,
      including Russia and China, to intervene or respond militarily. Whether
      they would actually use nuclear weapons cannot be predicted, but the
      possibility would make such an escalation a threat to the entire
      international community.
    </p>
    <p>
      Donald Trump's threat at the UN General Assembly on 22 September 2026,
      when he asked whether he should "annihilate the Islamic Republic" if no
      peace deal is reached, demonstrates how extreme the current rhetoric has
      become. The possibility of further escalation therefore concerns not
      merely Israel, Iran or the Middle East, but potentially humanity as a
      whole.
    </p>
    

        </OneColumn>

        </>)}

    {/* ═════════════ SUBSCRIBE + IMPRINT ═════════════ */}
    <PageBreak />
        <h2 className={styles.headlineSpan} data-nonum>Subscribe</h2>
    <OneColumn>
    <p>
      Published weekly in English, Danish, Polish, Greek and Spanish. Available in
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
