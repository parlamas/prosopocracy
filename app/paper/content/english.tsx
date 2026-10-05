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
  price: "20 kr.",
  editor: "Isidoros Parlamas",
  publisher: "Horistics · CVR 43109324",
  issn: "ISSN pending",
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

const content = (
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
          <em className={styles.target}>We</em> is the subject, <em className={styles.target}>bought</em> is the verb, <em className={styles.target}>fish</em>  
          is the direct object and <em className={styles.target}>this morning</em> is the adverb, in all
          languages.
        </p>
        <p>
          Six concepts, and not one of them changes across languages.
                    What varies <em>from language to language</em> is how each language marks them: its endings, its word
                    order, its spelling, its pronunciation and so on. That is paragrammar.
        </p>
        <p>
          <em>In the next edition: the parts of speech, discussed in detail.</em>
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

    {/* ═════════════ SUBSCRIBE + IMPRINT ═════════════ */}
    <PageBreak />
        <h2 className={styles.headlineSpan} data-nonum>Subscribe</h2>
    <OneColumn>
    <p>
      Published weekly in English, Danish, Polish, Greek and Spanish. Available in
      print and as PDF.
    </p>
    <h3 className={styles.headline}>Schools</h3>
    <p>[School licence: price, what it includes.]</p>
    <h3 className={styles.headline}>Businesses and organisations</h3>
    <p>[Organisation subscription: price, what it includes.]</p>
    <h3 className={styles.headline}>Individuals</h3>
    <p>[Print and PDF subscription prices.]</p>
    <h3 className={styles.headline}>Contact</h3>
    <p>mind@horistics.com<br />prosopocracy.com/paper</p>

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
  content,
};
