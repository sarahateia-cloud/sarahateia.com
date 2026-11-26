// Holiday gift guide: calming, low-pressure gift ideas, laid out like a shopping roundup.
//
// Rules for this file (CLAUDE.md):
// - No specific products, prices or buy links until Sarah picks them AND her supervisor has
//   OK'd product recommendations. Until then each idea shows a price range only, written as a
//   typical range, not a quote.
// - If a `shopUrl` is ever added, set `affiliate: true` when the link earns a commission. The
//   page then shows the FTC disclosure at the top and next to the button automatically.
// - Blurbs describe comfort and routine, never treatment. Any research claim links its source.

export type GiftIdea = {
  id: string;
  name: string;
  /** Typical price range for the kind of item, e.g. "Under $25". Not a product price. */
  range: string;
  blurb: string;
  /** Optional caution shown under the blurb. */
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
    | "plant"
    | "lamp"
    | "hands"
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
    id: "under-25",
    short: "Under $25",
    heading: "Small, thoughtful gifts under $25",
    intro: "Easy to wrap, easy to mail, and easy on a budget.",
    ideas: [
      {
        id: "journal",
        icon: "pen",
        name: "A simple journal and a good pen",
        range: "Under $25",
        blurb:
          "A blank or lightly guided journal gives someone a private place to put a busy mind on paper. Pick one with plenty of open space rather than strict daily prompts, so missing a day never feels like failing.",
        related: {
          label: "Self-care for mental health",
          href: "/resources/self-care-for-mental-health/",
        },
      },
      {
        id: "tea",
        icon: "cup",
        name: "Caffeine-free tea and a favorite mug",
        range: "Under $25",
        blurb:
          "A warm drink can become a small evening ritual: a cue to slow down and put the phone away. Caffeine-free blends keep it friendly for later in the day.",
      },
      {
        id: "socks",
        icon: "sock",
        name: "Soft socks or a cozy throw",
        range: "Under $25",
        blurb:
          "Comfort you can feel. Soft textures are an easy anchor for grounding: noticing what you feel is one step of the 5-4-3-2-1 exercise.",
        related: { label: "Try the 5-4-3-2-1 grounding exercise", href: "/tools/" },
      },
      {
        id: "cards",
        icon: "cards",
        name: "Breathing or reflection prompt cards",
        range: "Under $25",
        blurb:
          "A small deck of breathing patterns or gentle questions is something to pull out on a hard afternoon. Pair it with a note that points to free tools they can use any time.",
        related: { label: "Free box breathing guide", href: "/resources/box-breathing/" },
      },
    ],
  },
  {
    id: "25-to-75",
    short: "$25 to $75",
    heading: "Cozy gifts from $25 to $75",
    intro: "A little more of a treat, for winding down and getting outside.",
    ideas: [
      {
        id: "blanket",
        icon: "blanket",
        name: "A weighted blanket",
        range: "Often $40 and up",
        blurb:
          "Many people like the steady, hugged feeling of a weighted blanket at night. In one randomized study of adults with insomnia and a psychiatric condition, people using a chain weighted blanket reported better sleep than those using a lighter one.",
        source: {
          label: "Ekholm et al., Journal of Clinical Sleep Medicine (2020)",
          href: "https://doi.org/10.5664/jcsm.8636",
        },
        note: "Not for babies or young children, and check the maker’s weight guidance. It isn’t a treatment for any condition.",
      },
      {
        id: "shoes",
        icon: "shoe",
        name: "Comfortable walking shoes or a small trail pack",
        range: "About $30 to $75 for a pack",
        blurb:
          "A gift that invites someone outdoors. Research reviewed by the American Psychological Association links time in nature with lower stress and better attention.",
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
        id: "sunrise",
        icon: "sun",
        name: "A sunrise alarm clock",
        range: "About $30 to $75",
        blurb:
          "Light that brightens slowly before the alarm can make dark winter mornings feel a little gentler than a loud buzzer.",
      },
      {
        id: "plant",
        icon: "plant",
        name: "An easy-care houseplant",
        range: "About $25 to $50",
        blurb:
          "Something green and alive to look after, with low stakes. Pothos, snake plants and ZZ plants forgive a missed watering.",
      },
    ],
  },
  {
    id: "splurge",
    short: "Splurge",
    heading: "Bigger gifts worth the splurge",
    intro: "For the person who keeps saying they’ll take care of themselves later.",
    ideas: [
      {
        id: "lamp",
        icon: "lamp",
        name: "A light therapy lamp",
        range: "Often $50 and up",
        blurb:
          "Some people use a bright light box on short winter days. The National Institute of Mental Health describes light therapy as one treatment option for seasonal affective disorder, used with guidance from a health care provider.",
        source: {
          label: "National Institute of Mental Health, Seasonal Affective Disorder",
          href: "https://www.nimh.nih.gov/health/publications/seasonal-affective-disorder",
        },
        note: "Suggest they ask their doctor before using one, especially if they have eye conditions or bipolar disorder, or take medicines that make skin sensitive to light.",
      },
      {
        id: "massage",
        icon: "hands",
        name: "A massage or spa gift card",
        range: "Varies",
        blurb:
          "An hour that is fully theirs, with nothing to plan. Choose a local spot near them so it’s easy to book.",
      },
    ],
  },
  {
    id: "free",
    short: "Free",
    heading: "Free gifts that mean the most",
    intro: "Time, attention and a little planning. No shipping needed.",
    ideas: [
      {
        id: "walk",
        icon: "walk",
        name: "A standing walk date",
        range: "Free",
        blurb:
          "Offer a weekly or monthly walk together, on the calendar. Side by side, with no screen between you, conversations often come more easily.",
        related: {
          label: "The benefits of walk and talk therapy",
          href: "/walk-and-talk-therapy-dallas/",
        },
      },
      {
        id: "letter",
        icon: "letter",
        name: "A handwritten letter",
        range: "Free",
        blurb:
          "Tell them something specific you appreciate about them. It costs nothing and is often the gift people keep.",
      },
      {
        id: "phone",
        icon: "phone",
        name: "A phone-free evening",
        range: "Free",
        blurb:
          "Plan a simple night in: dinner, a board game or a movie, phones in another room. Make it about being together, not about being productive.",
      },
    ],
  },
];

export const HAS_AFFILIATE_LINKS = GIFT_SECTIONS.some((section) =>
  section.ideas.some((idea) => idea.shopUrl && idea.affiliate),
);
