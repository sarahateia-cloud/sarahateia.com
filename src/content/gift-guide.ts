// A counselor's holiday gift guide, laid out like a shopping roundup but organized by the coping
// skill each gift supports. Products stay secondary: the point is the skill and when to seek
// counseling.
//
// Rules for this file (CLAUDE.md):
// - No specific products, prices or buy links until Sarah picks them AND her supervisor has
//   OK'd product recommendations. Until then each idea shows a typical price range only.
// - If a `shopUrl` is ever added, set `affiliate: true` when the link earns a commission. The
//   page then shows the FTC disclosure at the top and next to the button automatically.
// - Copy describes comfort, routine and coping skills, never treatment or cure. Any research
//   claim links its source.

export type GiftIdea = {
  id: string;
  name: string;
  /** Typical price range for the kind of item. Not a product price. */
  range: string;
  /** Why a counselor might suggest it. */
  blurb: string;
  /** A short way to use it as a coping skill. */
  tryThis: string;
  /** Optional caution. */
  note?: string;
  /** One research link, if the blurb makes a research claim. */
  source?: { label: string; href: string };
  /** One internal link to a related free resource on the site. */
  related?: { label: string; href: string };
  /** Left empty on purpose until products are chosen and approved. */
  shopUrl?: string;
  affiliate?: boolean;
  icon:
    | "pen"
    | "cup"
    | "sock"
    | "cards"
    | "blanket"
    | "shoe"
    | "sun"
    | "lamp"
    | "walk"
    | "letter"
    | "phone";
};

export type GiftSection = {
  id: string;
  /** Label for the jump links at the top. */
  short: string;
  heading: string;
  intro: string;
  ideas: GiftIdea[];
};

export const GIFT_GUIDE_UPDATED = "2026-11-26";

export const GIFT_SECTIONS: GiftSection[] = [
  {
    id: "grounding",
    short: "Grounding",
    heading: "Gifts for grounding when stress spikes",
    intro:
      "Grounding is one of the first skills many counselors teach: bringing attention back to the present through the body and senses.",
    ideas: [
      {
        id: "throw",
        icon: "sock",
        name: "A soft throw or cozy socks",
        range: "Under $25",
        blurb:
          "Texture gives the mind something simple and real to hold on to. A soft blanket becomes an easy anchor on a hard evening.",
        tryThis:
          "Wrap up and name five things you can see, four you can feel, three you can hear, two you can smell and one you can taste.",
        related: { label: "Try the 5-4-3-2-1 exercise", href: "/tools/" },
      },
      {
        id: "cards",
        icon: "cards",
        name: "Breathing or grounding prompt cards",
        range: "Under $25",
        blurb:
          "When stress is high, it’s hard to remember what helps. A small deck by the bed or in a bag does the remembering for you.",
        tryThis:
          "Pull one card a day and practice it while you’re calm, so it’s familiar when you need it.",
        related: { label: "Box breathing, step by step", href: "/resources/box-breathing/" },
      },
    ],
  },
  {
    id: "reflection",
    short: "Reflection",
    heading: "Gifts for putting feelings into words",
    intro: "Naming what you feel is a big part of counseling, and it can start on paper.",
    ideas: [
      {
        id: "journal",
        icon: "pen",
        name: "A simple journal and a good pen",
        range: "Under $25",
        blurb:
          "Writing can slow racing thoughts and help you notice patterns. Many people bring a few notes to counseling sessions so they remember what mattered that week.",
        tryThis:
          "Each night, write one thing that was hard, one thing you handled, and one thing you need tomorrow.",
        related: {
          label: "Self-care for mental health",
          href: "/resources/self-care-for-mental-health/",
        },
      },
    ],
  },
  {
    id: "rest",
    short: "Rest",
    heading: "Gifts for rest and a calmer night",
    intro:
      "Stress and sleep affect each other. A steady wind-down routine is something counselors often talk through with clients.",
    ideas: [
      {
        id: "tea",
        icon: "cup",
        name: "Caffeine-free tea and a favorite mug",
        range: "Under $25",
        blurb:
          "A warm drink can become a cue that the day is ending: phone down, lights low, shoulders loose.",
        tryThis:
          "Drink it slowly without a screen, and notice the warmth, the smell and the taste.",
      },
      {
        id: "blanket",
        icon: "blanket",
        name: "A weighted blanket",
        range: "Often $40 and up",
        blurb:
          "Many people like the steady, hugged feeling at night. In one randomized study of adults with insomnia and a psychiatric condition, people using a chain weighted blanket reported better sleep than those using a lighter one.",
        tryThis: "Pair it with a few minutes of slow breathing before sleep.",
        source: {
          label: "Ekholm et al., Journal of Clinical Sleep Medicine (2020)",
          href: "https://doi.org/10.5664/jcsm.8636",
        },
        note: "Not for babies or young children, and check the maker’s weight guidance. It isn’t a treatment for any condition.",
      },
      {
        id: "sunrise",
        icon: "sun",
        name: "A sunrise alarm clock",
        range: "About $30 to $75",
        blurb:
          "Light that brightens slowly can make dark winter mornings feel gentler than a loud buzzer.",
        tryThis: "Keep the same wake time every day, weekends too, to steady your rhythm.",
      },
    ],
  },
  {
    id: "outside",
    short: "Outdoors",
    heading: "Gifts that get them moving and outside",
    intro:
      "Movement and time outdoors are part of how I work: walk and talk sessions happen on park trails in Irving and Dallas.",
    ideas: [
      {
        id: "shoes",
        icon: "shoe",
        name: "Comfortable walking shoes or a small trail pack",
        range: "About $30 to $75 for a pack",
        blurb:
          "A gift that invites someone outdoors. Research reviewed by the American Psychological Association links time in nature with lower stress and better attention.",
        tryThis:
          "Take a 10-minute walk without headphones and notice three things you haven’t seen before.",
        source: {
          label: "American Psychological Association, “Nurtured by nature”",
          href: "https://www.apa.org/monitor/2020/04/nurtured-nature",
        },
        related: {
          label: "Walk and talk counseling in Dallas",
          href: "/walk-and-talk-therapy-dallas/",
        },
      },
      {
        id: "walk",
        icon: "walk",
        name: "A standing walk date",
        range: "Free",
        blurb:
          "Side by side, with no screen between you, hard conversations often come more easily. That’s the idea behind walk and talk counseling, too.",
        tryThis: "Put a weekly or monthly walk on the calendar together, and keep it.",
      },
    ],
  },
  {
    id: "connection",
    short: "Connection",
    heading: "Gifts of connection",
    intro: "Feeling less alone is one of the most protective things in hard seasons.",
    ideas: [
      {
        id: "letter",
        icon: "letter",
        name: "A handwritten letter, in your own language",
        range: "Free",
        blurb:
          "Tell them something specific you appreciate. For families who speak Arabic or another language at home, words in that language can land closer to the heart.",
        tryThis: "Name one strength you’ve seen in them this year, and one memory you treasure.",
        related: { label: "Counseling in Arabic", href: "/arabic-counseling/" },
      },
      {
        id: "phone",
        icon: "phone",
        name: "A phone-free evening",
        range: "Free",
        blurb:
          "Dinner, a board game or a movie, with phones in another room. Being fully present is a gift most people rarely get.",
        tryThis: "Agree on a start and end time, so it feels restful, not like a rule.",
      },
    ],
  },
  {
    id: "winter",
    short: "Winter light",
    heading: "For short, dark winter days",
    intro: "Some people feel heavier when the days get short. That’s worth talking about.",
    ideas: [
      {
        id: "lamp",
        icon: "lamp",
        name: "A light therapy lamp",
        range: "Often $50 and up",
        blurb:
          "The National Institute of Mental Health describes light therapy as one treatment option for seasonal affective disorder, used with guidance from a health care provider. It isn’t a substitute for that care.",
        tryThis:
          "If winter low moods come back every year, talk with a doctor or counselor before buying one.",
        source: {
          label: "National Institute of Mental Health, Seasonal Affective Disorder",
          href: "https://www.nimh.nih.gov/health/publications/seasonal-affective-disorder",
        },
        note: "Ask a doctor first, especially with eye conditions, bipolar disorder, or medicines that make skin sensitive to light.",
        related: {
          label: "Depression counseling in Dallas",
          href: "/depression-counseling-dallas/",
        },
      },
    ],
  },
];

export const HAS_AFFILIATE_LINKS = GIFT_SECTIONS.some((section) =>
  section.ideas.some((idea) => idea.shopUrl && idea.affiliate),
);
