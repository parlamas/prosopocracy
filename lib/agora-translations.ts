// lib/agora-translations.ts
//
// Text for prosopocracy.com/agora.
// English only for now. Other languages can be added later using the
// same LanguageCode keys as HOMEPAGE_TRANSLATIONS.

import type { LanguageCode } from './homepage-translations';

export type AgoraStep = { title: string; body: string };
export type AgoraMove = { term: string; desc: string };

export type AgoraText = {
  metaTitle: string;
  metaDescription: string;
  navHome: string;
  navSignIn: string;
  heroEyebrow: string;
  heroThesis: string;
  heroGreekTerm: string;
  heroLede: string;
  howLabel: string;
  howTitle: string;
  steps: AgoraStep[];
  movesLabel: string;
  movesTitle: string;
  movesIntro: string;
  moves: AgoraMove[];
  statusTitle: string;
  statusBody: string;
  statusLinkText: string;
};

export const AGORA_TRANSLATIONS: Partial<Record<LanguageCode, AgoraText>> = {
  en: {
    metaTitle: "Agora · Prosopocracy",
    metaDescription:
            "Live local discussion circles: people near a place meet, online or in person, to discuss an issue or define a civic concept together.",
    navHome: "Home",
    navSignIn: "Sign in",
    heroEyebrow: "Live discussion circles, near you",
    heroThesis: "Agora",
    heroGreekTerm: "Αγορά",
    heroLede:
            "The Athenian agora was where citizens met to question one another. This is its modern form: small, timed circles of 4–8 people near a place you choose, meeting online or in person to discuss an issue, or to work toward the definition of a civic concept.",
    howLabel: "How It Works",
        howTitle: "One circle, from issue to record",
    steps: [
      {
        title: "An issue is posted",
        body: "The member who starts the circle sets the issue: a concept to define, a local question, or anything worth discussing.",
      },
           {
        title: "Online or in person",
        body: "The member who starts the circle chooses. Online circles meet here on the site; in-person circles meet at a named place, such as a café or a square.",
      },
      {
        title: "People nearby join",
                body: "Circles belong to a place. Anyone searching within 1 to 20 km of it can see the circle and take one of 4–8 seats.",
      },
      {
        title: "The circle talks",
        body: "Members talk freely, as in a chat. When the circle works on a definition, anyone can use the four moves below.",
      },
      {
        title: "It stays on record",
        body: "When the time is up, the whole conversation is kept as the circle's record, including every definition proposed and the counterexamples raised against it.",
      },
    ],
    movesLabel: "For Definitions",
    movesTitle: "Four moves for defining a concept",
    movesIntro:
      "Ordinary messages are always allowed. When a circle works on a definition, these four moves keep the dialogue rigorous.",
    moves: [
      { term: "Proposal", desc: "A definition of the concept, stated in one sentence." },
      { term: "Refinement", desc: "A correction that keeps the definition but makes it more precise." },
      {
        term: "Counterexample",
        desc: "A case the definition includes but shouldn't, or excludes but should include.",
      },
      { term: "Rival definition", desc: "A different definition altogether, offered as a better one." },
    ],
    statusTitle: "Opening soon",
    statusBody:
      "The agora is being built. The first circles will open here as soon as the first version is ready.",
    statusLinkText: "Read the definition of prosopocracy →",
  },
};
