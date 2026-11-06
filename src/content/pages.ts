// The topic pages and articles. Each one also becomes its own built page with search labels,
// so add new entries here, then add the page to public/sitemap.xml and public/llms.txt.

export type Block = { heading: string; paragraphs?: string[]; list?: string[] };
export type Faq = { q: string; a: string };

export type ContentPage = {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  blocks: Block[];
  faqs?: Faq[];
};

const NAME = "Sarah Ateia Khattab, LPC Associate";
const PUBLISHED = "2026-11-05";

export const TOPICS: ContentPage[] = [
  {
    path: "arabic-counseling",
    title: `Arabic-Speaking Counselor in Irving & Dallas–Fort Worth | ${NAME}`,
    description:
      "Counseling in Arabic or English, outdoors in Dallas–Fort Worth parks or by telehealth anywhere in Texas. $100 per session, reduced rates available, free 15-minute consultation.",
    eyebrow: "Counseling in Arabic",
    heading: "Counseling in Arabic in Dallas–Fort Worth and across Texas.",
    intro:
      "I’m an Arabic-speaking counselor based in Irving, Texas. I offer sessions in Arabic or English, outdoors in Dallas–Fort Worth parks or by telehealth anywhere in Texas.",
    blocks: [
      {
        heading: "Why language can matter in counseling",
        paragraphs: [
          "For some people, certain feelings are easier to name in the language they grew up with. For others, a second language can feel easier. You can tell me which language you prefer.",
          "I grew up in a multicultural environment, and it shaped how I connect with people. I won’t assume I already know your story. I stay curious about your culture, faith, family, and language, and I welcome being corrected when I get something wrong.",
        ],
      },
      {
        heading: "What we can work on",
        list: [
          "Anxiety and stress",
          "Depression and low mood",
          "Emotional overwhelm",
          "Burnout and emotional exhaustion",
          "Relationship patterns",
          "Identity and self-understanding",
          "Self-esteem concerns",
        ],
      },
      {
        heading: "How sessions work",
        list: [
          "Outdoors in a quiet Dallas–Fort Worth park we choose together, or by telehealth",
          "$100 per session, with reduced rates based on household income",
          "Self-pay only, with no insurance billing",
          "A free 15-minute phone consultation to see if we’re a good fit",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you offer counseling sessions in Arabic?",
        a: "Yes. Sessions are available in Arabic or English, outdoors around Dallas–Fort Worth or by telehealth for clients located in Texas at the time of each session.",
      },
      {
        q: "Do I need to be from a certain background or faith?",
        a: "No. I welcome clients of every culture, language, faith or none, and background.",
      },
      {
        q: "Is what I share kept private?",
        a: "Counseling is confidential, with limits set by law, such as when someone’s safety is at risk. We go over those limits before we begin. Outdoor sessions take place in public parks, where complete privacy can’t be guaranteed, so telehealth is also available.",
      },
      {
        q: "Can I get sessions in Arabic if I live outside Dallas–Fort Worth?",
        a: "Yes, if you’re located in Texas at the time of each session. Telehealth is available anywhere in the state.",
      },
    ],
  },
  {
    path: "outdoor-counseling",
    title: `Outdoor Counseling in Dallas–Fort Worth Parks | ${NAME}`,
    description:
      "In-person counseling held outdoors in a quiet Dallas–Fort Worth park. Walk or sit, in English or Arabic. Here’s how privacy, weather, consent, and fees work.",
    eyebrow: "Outdoor sessions",
    heading: "Outdoor counseling in Dallas–Fort Worth parks.",
    intro:
      "My in-person sessions happen outdoors instead of in an office. We meet in a quiet park in the Dallas–Fort Worth area that we choose together, and we either walk at an easy pace or sit.",
    blocks: [
      {
        heading: "What a session looks like",
        list: [
          "We choose a quiet park that’s easy for you to reach",
          "We walk at an easy pace or settle on a bench or blanket",
          "You set the pace, and we can stop anytime",
          "Sessions are available in English or Arabic",
        ],
      },
      {
        heading: "Privacy",
        paragraphs: [
          "Parks are public, so complete privacy can’t be guaranteed. We pick quieter spots and can pause or move whenever someone’s nearby. You can also switch to telehealth at any time.",
        ],
      },
      {
        heading: "Weather",
        paragraphs: [
          "Texas heat and storms happen. If it’s too hot, cold, or stormy to meet comfortably outside, we move that session to telehealth.",
        ],
      },
      {
        heading: "When telehealth may suit you better",
        paragraphs: [
          "Outdoor sessions aren’t for everyone. If being in a public place would make it hard to talk openly, or if getting to a park is difficult, telehealth may be the better choice. We can talk it through during your free consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Where do in-person sessions take place?",
        a: "Outdoors, in a quiet park in the Dallas–Fort Worth area that we choose together. I don’t see clients in an office.",
      },
      {
        q: "Is there a consent form for outdoor sessions?",
        a: "Yes. Before your first outdoor session, you’ll review and sign a short consent form that covers privacy, weather, and safety. I’ll walk you through it when we get started.",
      },
      {
        q: "What happens if the weather is bad?",
        a: "We move that session to telehealth.",
      },
      {
        q: "How much does an outdoor session cost?",
        a: "The standard fee is $100 per session, and reduced rates are available based on household income. I don’t bill insurance.",
      },
    ],
  },
  {
    path: "telehealth-counseling",
    title: `Telehealth Counseling Anywhere in Texas | ${NAME}`,
    description:
      "Telehealth counseling in English or Arabic for clients located in Texas at the time of each session. $100 per session, reduced rates available, free 15-minute consultation.",
    eyebrow: "Telehealth",
    heading: "Telehealth counseling anywhere in Texas.",
    intro:
      "I offer telehealth sessions in English or Arabic to clients who are physically located in Texas at the time of each session.",
    blocks: [
      {
        heading: "Who can use telehealth",
        paragraphs: [
          "You need to be in Texas during every session, because that’s where I’m licensed. If you’ll be traveling outside the state, tell me ahead of time so we can plan around it. If you live outside Texas, I’m glad to help point you toward other options.",
        ],
      },
      {
        heading: "Getting ready for a session",
        list: [
          "Find a private place where you’re unlikely to be interrupted",
          "Use headphones if others are nearby",
          "Keep your location and a way to reach you handy, in case we get disconnected",
        ],
      },
      {
        heading: "Fees",
        paragraphs: [
          "The standard fee is $100 per session, and reduced rates are available based on household income. My practice is self-pay only, and I don’t bill insurance. You have the right to receive a Good Faith Estimate of expected charges before services begin.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you offer telehealth?",
        a: "Yes. Telehealth is available to clients who are located in Texas at the time of each session.",
      },
      {
        q: "Can I have a telehealth session while I’m out of state?",
        a: "No. You need to be physically located in Texas at the time of each session. Tell me ahead of time if you’ll be away so we can reschedule.",
      },
      {
        q: "Can I do both outdoor and telehealth sessions?",
        a: "Yes. An outdoor session can move to telehealth when the weather is bad or when you’d simply prefer it.",
      },
      {
        q: "Are telehealth sessions available in Arabic?",
        a: "Yes. Telehealth sessions are available in Arabic or English.",
      },
    ],
  },
];

export const ARTICLES: ContentPage[] = [
  {
    path: "resources/free-counseling-consultation",
    title: `What Happens in a Free Counseling Consultation? | ${NAME}`,
    description:
      "What to expect from a free 15-minute counseling consultation, what you can ask, and what you don’t need to share yet.",
    eyebrow: "Getting started",
    heading: "What happens in a free counseling consultation?",
    intro:
      "A free consultation is a short phone call to see whether a counselor might be a good fit for you. It isn’t a counseling session, and you don’t have to commit to anything.",
    blocks: [
      {
        heading: "What we usually cover",
        list: [
          "What you’re looking for, in as much or as little detail as you’d like",
          "Whether you’d prefer outdoor sessions or telehealth, and English or Arabic",
          "Fees, including how reduced rates work",
          "What the next step would be, if we both think it’s a good fit",
        ],
      },
      {
        heading: "What you don’t need to do",
        paragraphs: [
          "You don’t need to tell your whole story or have the right words for what’s going on. “I’ve been feeling off and I’d like to talk to someone” is a perfectly good place to start.",
        ],
      },
      {
        heading: "Questions you might want to ask",
        list: [
          "What are your license and training, and do you work under supervision?",
          "What would our first session look like?",
          "How much will sessions cost, and do you offer reduced rates?",
          "What happens if I need to cancel?",
          "What are the limits of confidentiality?",
        ],
      },
      {
        heading: "If it isn’t a good fit",
        paragraphs: [
          "That’s okay. Finding the right counselor sometimes takes more than one call. If I’m not the right fit, I’m glad to help point you toward other options.",
        ],
      },
    ],
  },
  {
    path: "resources/what-is-an-lpc-associate",
    title: `What Is an LPC Associate in Texas? | ${NAME}`,
    description:
      "A plain-language explanation of what an LPC Associate is in Texas, what supervision means, and how to verify a counselor’s license.",
    eyebrow: "Understanding counseling",
    heading: "What is an LPC Associate in Texas?",
    intro:
      "An LPC Associate is a counselor licensed by the Texas Behavioral Health Executive Council who provides counseling under the supervision of a Licensed Professional Counselor–Supervisor (LPC-S).",
    blocks: [
      {
        heading: "What supervision means",
        paragraphs: [
          "An LPC Associate works with an approved supervisor, who oversees their counseling work. I’m an LPC Associate (#104391), and my supervisor is Don Zablosky, LPC-S.",
        ],
      },
      {
        heading: "How to check a counselor’s license",
        paragraphs: [
          "You can look up a Texas counselor’s license through the state’s online license search, using the “Verify license” link at the bottom of this page. It’s reasonable to ask any counselor about their license and training.",
        ],
      },
      {
        heading: "What NCC means",
        paragraphs: [
          "NCC stands for National Certified Counselor, a certification from the National Board for Certified Counselors (NBCC). It’s separate from a state license. My NCC number is 1746909.",
        ],
      },
    ],
  },
  {
    path: "resources/is-outdoor-counseling-right-for-you",
    title: `Is Outdoor Counseling Right for You? | ${NAME}`,
    description:
      "Questions to help you decide between outdoor counseling and telehealth, including privacy, weather, comfort, and getting to the park.",
    eyebrow: "Choosing a format",
    heading: "Is outdoor counseling right for you?",
    intro:
      "Outdoor counseling means meeting in a park instead of an office. Some people like talking while walking or sitting outside. Others would rather be somewhere more private. Neither choice is the right one for everyone.",
    blocks: [
      {
        heading: "Questions to ask yourself",
        list: [
          "Would being in a public place make it harder to talk openly?",
          "Could you get to a park and move around comfortably there?",
          "How do you handle heat, cold, pollen, or sun?",
          "Would you rather walk, sit, or have the choice each time?",
          "Is there anyone you’d be concerned about running into nearby?",
        ],
      },
      {
        heading: "What to know about privacy",
        paragraphs: [
          "A park is a public place, so complete privacy can’t be guaranteed. Choosing a quieter spot and being able to pause or move can help, but it’s still worth thinking about before you decide.",
        ],
      },
      {
        heading: "You can change your mind",
        paragraphs: [
          "Your choice doesn’t have to be permanent. With me, you can switch a session to telehealth at any time, whether because of the weather or just because you’d prefer it that day.",
        ],
      },
    ],
  },
  {
    path: "resources/choosing-a-counselor-language-culture",
    title: `Choosing a Counselor When Language and Culture Matter | ${NAME}`,
    description:
      "Questions to ask when you’re looking for a counselor who respects your language, culture, faith, and family.",
    eyebrow: "Choosing a counselor",
    heading: "Choosing a counselor when language and culture matter.",
    intro:
      "If your language, culture, or faith is an important part of your life, you can ask about it before you begin. A good first conversation should leave you feeling respected, not like you have to explain or defend who you are.",
    blocks: [
      {
        heading: "Questions you might want to ask",
        list: [
          "Do you offer sessions in my language, and can I choose which language to use?",
          "How do you approach culture, faith, and family in your work?",
          "What will you do if you don’t understand something about my background?",
          "How do you handle confidentiality, especially if we know people in common?",
        ],
      },
      {
        heading: "Sharing a background isn’t the only thing that matters",
        paragraphs: [
          "Some people want a counselor who shares their background. Others would rather have someone from outside their community. Either preference is okay. What often matters most is whether you feel heard and whether the counselor stays curious instead of assuming.",
        ],
      },
      {
        heading: "How I approach it",
        paragraphs: [
          "I offer sessions in English and Arabic, and I welcome clients of every culture, language, faith or none, and background. I won’t assume I already know your story, and I welcome being corrected when I get something wrong.",
        ],
      },
    ],
  },
];

const url = (path: string) => `https://www.sarahateia.com/${path}/`;
const PRACTICE = { "@id": "https://www.sarahateia.com/#practice" };
const SARAH = { "@id": "https://www.sarahateia.com/#sarah" };

const faqLabel = (page: ContentPage) =>
  page.faqs
    ? [
        {
          "@type": "FAQPage",
          "@id": `${url(page.path)}#faq`,
          mainEntity: page.faqs.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        },
      ]
    : [];

const breadcrumbs = (...crumbs: [string, string][]) => ({
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map(([name, item], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item,
  })),
});

/** Everything the build needs to give each page its own title, description, and search labels. */
export const SITE_PAGES = [
  ...TOPICS.map((page) => ({
    path: page.path,
    title: page.title,
    description: page.description,
    graph: [
      {
        "@type": "Service",
        "@id": `${url(page.path)}#service`,
        name: page.eyebrow,
        description: page.description,
        url: url(page.path),
        provider: PRACTICE,
        areaServed: { "@type": "State", name: "Texas" },
        availableLanguage: ["English", "Arabic"],
      },
      breadcrumbs(["Home", "https://www.sarahateia.com/"], [page.eyebrow, url(page.path)]),
      ...faqLabel(page),
    ],
  })),
  {
    path: "resources",
    title: `Counseling Resources and Guides | ${NAME}`,
    description:
      "Plain-language guides on starting counseling in Texas, choosing a counselor, outdoor sessions, and what an LPC Associate is.",
    graph: [
      {
        "@type": "CollectionPage",
        "@id": `${url("resources")}#page`,
        name: "Counseling resources and guides",
        url: url("resources"),
        isPartOf: { "@id": "https://www.sarahateia.com/#website" },
        hasPart: ARTICLES.map((a) => ({ "@id": `${url(a.path)}#article` })),
      },
      breadcrumbs(["Home", "https://www.sarahateia.com/"], ["Resources", url("resources")]),
    ],
  },
  ...ARTICLES.map((page) => ({
    path: page.path,
    title: page.title,
    description: page.description,
    graph: [
      {
        "@type": "Article",
        "@id": `${url(page.path)}#article`,
        headline: page.heading,
        description: page.description,
        url: url(page.path),
        datePublished: PUBLISHED,
        dateModified: PUBLISHED,
        inLanguage: "en-US",
        author: SARAH,
        publisher: PRACTICE,
      },
      breadcrumbs(
        ["Home", "https://www.sarahateia.com/"],
        ["Resources", url("resources")],
        [page.eyebrow, url(page.path)],
      ),
    ],
  })),
];

export const PUBLISHED_LABEL = "November 2026";
