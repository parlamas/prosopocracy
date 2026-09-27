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
      "Live local discussion circles: citizens within 5 km of a place meet to define one civic concept together.",
    navHome: "Home",
    navSignIn: "Sign in",
    heroEyebrow: "Live discussion circles, near you",
    heroThesis: "Agora",
    heroGreekTerm: "Αγορά",
    heroLede:
      "The Athenian agora was where citizens met in person to question one another. This is its modern form: small, timed circles of 4–8 people within 5 km of a place you choose, working together toward the definition of one civic concept.",
    howLabel: "How It Works",
    howTitle: "One circle, from question to definition",
    steps: [
      {
        title: "A question is posted",
        body: "Each circle begins with a single concept: justice, freedom, a friend, corruption.",
      },
      {
        title: "People nearby join",
        body: "Circles are pinned to a place. Anyone within 5 km can see them and take one of 4–8 seats.",
      },
      {
        title: "The circle works in rounds",
        body: "One member proposes a definition. The others may respond only with a refinement, a counterexample, or a rival definition.",
      },
      {
        title: "It closes with a result",
        body: "After 30 minutes, the circle records the definition it reached and the counterexamples it could not answer.",
      },
      {
        title: "Optionally, meet",
        body: "Circles that work well can continue face to face, at a café or a square nearby.",
      },
    ],
    movesLabel: "The Rules",
    movesTitle: "Four moves, and nothing else",
    movesIntro:
      "The structure is what makes an agora different from a chat. Every contribution must be one of these moves.",
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
