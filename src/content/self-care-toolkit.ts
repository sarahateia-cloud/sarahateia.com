// The self-care toolkit (/self-care-toolkit/): free things to try, grouped by how much time you
// have. No products, brands, prices or shopping links. Each research claim links to its source;
// items without a source make no research claim.

export type ToolkitIcon =
  | "wind"
  | "eye"
  | "tag"
  | "gauge"
  | "pen"
  | "droplet"
  | "message"
  | "footprints"
  | "moon"
  | "file";

export type ToolkitItem = {
  id: string;
  icon: ToolkitIcon;
  title: string;
  time: string;
  /** One plain sentence on what it is. */
  summary: string;
  steps: string[];
  why?: { text: string; source?: { label: string; url: string } };
  action?: { label: string; href: string };
};

export type ToolkitGroup = { id: string; title: string; intro: string; items: ToolkitItem[] };

export const TOOLKIT: ToolkitGroup[] = [
  {
    id: "one-minute",
    title: "If you have 1 minute",
    intro: "For a tight chest, a racing mind, or the moment before a hard conversation.",
    items: [
      {
        id: "box-breathing",
        icon: "wind",
        title: "Box breathing",
        time: "1 minute",
        summary: "Breathe in, hold, breathe out and hold, each for a count of 4.",
        steps: [
          "Breathe in through your nose for 4.",
          "Hold gently for 4, breathe out for 4, hold for 4.",
          "Repeat four rounds. Skip the holds if they feel uncomfortable.",
        ],
        why: {
          text: "Slow breathing has been linked with feeling more relaxed and less anxious.",
          source: {
            label: "Zaccaro et al., 2018",
            url: "https://doi.org/10.3389/fnhum.2018.00353",
          },
        },
        action: { label: "Breathe along with the guide", href: "/tools/#box-breathing" },
      },
      {
        id: "grounding",
        icon: "eye",
        title: "5-4-3-2-1 grounding",
        time: "1 to 2 minutes",
        summary: "Bring your attention back to the room, one sense at a time.",
        steps: [
          "Name 5 things you can see and 4 you can feel.",
          "Then 3 you can hear, 2 you can smell, 1 you can taste.",
        ],
        why: {
          text: "It gives your attention a concrete job in the present moment, which can make a wave of worry easier to ride out.",
        },
        action: { label: "Walk through it step by step", href: "/tools/#grounding" },
      },
      {
        id: "name-it",
        icon: "tag",
        title: "Name the feeling",
        time: "30 seconds",
        summary: "Put what you feel into a word or two, without judging it.",
        steps: [
          "Pause and ask, “What am I feeling right now?”",
          "Say it plainly: “This is worry,” or “I’m frustrated.”",
        ],
        why: {
          text: "In a brain-imaging study, putting feelings into words was linked with less activity in the amygdala, a part of the brain involved in alarm responses.",
          source: {
            label: "Lieberman et al., 2007",
            url: "https://doi.org/10.1111/j.1467-9280.2007.01916.x",
          },
        },
      },
    ],
  },
  {
    id: "five-minutes",
    title: "If you have 5 minutes",
    intro: "For the middle of a long day, when you need a short reset before the next thing.",
    items: [
      {
        id: "check-in",
        icon: "gauge",
        title: "A quick stress check-in",
        time: "2 minutes",
        summary: "Notice how your sleep, stress and energy are doing today.",
        steps: [
          "Rate each from 0 to 10, roughly.",
          "Pick one small thing that would help the lowest one.",
        ],
        action: { label: "Use the check-in sliders", href: "/tools/#check-in" },
      },
      {
        id: "write-it-out",
        icon: "pen",
        title: "Write it out",
        time: "5 minutes",
        summary: "Get the swirl of thoughts out of your head and onto paper.",
        steps: [
          "Set a 5-minute timer and write without editing or rereading.",
          "When it ends, close the notebook. You don’t have to keep it.",
          "If writing stirs up more than it settles, stop and try something else.",
        ],
        why: {
          text: "A large review of studies found that writing about feelings had a small benefit on average.",
          source: { label: "Frattaroli, 2006", url: "https://doi.org/10.1037/0033-2909.132.6.823" },
        },
      },
      {
        id: "water-snack",
        icon: "droplet",
        title: "Water and a real snack",
        time: "5 minutes",
        summary: "Check the basics before deciding how you feel about the day.",
        steps: [
          "Drink a glass of water.",
          "Eat something with some protein, away from your screen if you can.",
        ],
      },
      {
        id: "reach-out",
        icon: "message",
        title: "Text one person",
        time: "2 minutes",
        summary: "A short message to someone you trust, with no need to explain everything.",
        steps: [
          "Something like “Rough day. Can I call you later?” is enough.",
          "If no one comes to mind, that’s worth bringing to a counselor.",
        ],
      },
    ],
  },
  {
    id: "fifteen-minutes",
    title: "If you have 15 minutes or more",
    intro: "For the end of the day, a weekend morning, or when you want to build a steadier week.",
    items: [
      {
        id: "walk-outside",
        icon: "footprints",
        title: "A walk outside",
        time: "15 to 30 minutes",
        summary: "An easy walk somewhere with trees or open sky, no step goal needed.",
        steps: [
          "Leave your phone in your pocket for the first ten minutes.",
          "Notice three things you hadn’t seen before.",
        ],
        why: {
          text: "In a study of city residents, a nature break of 20 to 30 minutes gave the biggest drop in the stress hormone cortisol for the time spent.",
          source: {
            label: "Hunter et al., 2019",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6458297/",
          },
        },
        action: {
          label: "See how walk and talk sessions work",
          href: "/walk-and-talk-therapy-dallas/",
        },
      },
      {
        id: "wind-down",
        icon: "moon",
        title: "A gentler wind-down",
        time: "30 minutes before bed",
        summary: "Give your body a clear signal that the day is ending.",
        steps: [
          "Dim lights and screens for the last half hour.",
          "Keep the same wake-up time, even after a rough night.",
          "Save caffeine for the morning.",
        ],
        why: {
          text: "Most adults need 7 or more hours of sleep a night.",
          source: { label: "Watson et al., 2015", url: "https://doi.org/10.5664/jcsm.4758" },
        },
      },
      {
        id: "grounding-guide",
        icon: "file",
        title: "Print the grounding guide",
        time: "10 minutes",
        summary: "A free one-page guide in English and Arabic to keep by your bed or desk.",
        steps: [
          "Print it or save it to your phone.",
          "Circle the one or two ideas you’ll try first.",
        ],
        action: { label: "Open the free guide (PDF)", href: "/guides/grounding-guide.pdf" },
      },
    ],
  },
];
