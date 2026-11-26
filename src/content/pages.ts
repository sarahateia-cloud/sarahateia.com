import { GLOSSARY } from "./glossary";

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
  /** Short "Key takeaways" bullets shown at the top of a guide, for readers and AI answer engines. */
  takeaways?: string[];
  /** Blog posts: a byline under the title, a Sources list, and a closing disclaimer. */
  byline?: string;
  sources?: { label: string; url: string }[];
  disclaimer?: string;
  blocks: Block[];
  faqs?: Faq[];
  /** Other pages on the site to suggest at the end, so every page is linked from more than one place. */
  related?: { label: string; href: string }[];
  /** City pages only: the city this page serves in person. */
  city?: string;
  /** Optional intro in Arabic, shown under the English intro with lang="ar" and right-to-left text. */
  arabicIntro?: string;
  /** Articles only: the date this article first went live (YYYY-MM-DD). Defaults to PUBLISHED. */
  published?: string;
  /** Articles only: the date the content was last meaningfully changed (YYYY-MM-DD). Defaults to published. */
  updated?: string;
};

const LINK = {
  arabic: { label: "Counseling in Arabic", href: "/arabic-counseling/" },
  outdoor: {
    label: "Walk and talk therapy in Dallas–Fort Worth",
    href: "/walk-and-talk-therapy-dallas/",
  },
  telehealth: {
    label: "Telehealth counseling anywhere in Texas",
    href: "/telehealth-counseling-texas/",
  },
  youngAdult: { label: "Counseling for young adults", href: "/young-adult-counseling/" },
  anxiety: { label: "Anxiety therapist in Dallas, TX", href: "/anxiety-therapy-dallas/" },
  depression: {
    label: "Depression counseling in Dallas, TX",
    href: "/depression-counseling-dallas/",
  },
  cost: {
    label: "How much does therapy cost without insurance in Texas?",
    href: "/resources/therapy-cost-without-insurance/",
  },
  slidingScale: {
    label: "What is sliding scale therapy?",
    href: "/resources/what-is-sliding-scale-therapy/",
  },
  adhdDiagnose: {
    label: "Can a therapist diagnose ADHD?",
    href: "/resources/can-a-therapist-diagnose-adhd/",
  },
  holistic: { label: "What is holistic therapy?", href: "/resources/what-is-holistic-therapy/" },
  youngAdultGuide: {
    label: "Is therapy right for my young adult?",
    href: "/resources/therapy-for-young-adults/",
  },
  walkTalk: {
    label: "What is walk and talk therapy?",
    href: "/resources/what-is-walk-and-talk-therapy/",
  },
  consultation: {
    label: "What happens in a free counseling consultation?",
    href: "/resources/free-counseling-consultation/",
  },
  associate: {
    label: "What is an LPC Associate in Texas?",
    href: "/resources/what-is-an-lpc-associate/",
  },
  outdoorFit: {
    label: "Is outdoor counseling right for you?",
    href: "/resources/is-outdoor-counseling-right-for-you/",
  },
  culture: {
    label: "Choosing a counselor when language and culture matter",
    href: "/resources/choosing-a-counselor-language-culture/",
  },
  muslimFaith: {
    label: "How do I find a therapist who respects my Muslim faith?",
    href: "/resources/therapist-who-respects-muslim-faith/",
  },
  adhd: {
    label: "What are some creative strategies for adults with ADHD?",
    href: "/resources/adhd-creative-strategies/",
  },
  attachment: {
    label: "How do attachment styles affect relationships?",
    href: "/resources/attachment-styles-in-relationships/",
  },
  abuseRecovery: {
    label: "How do you heal after an abusive relationship?",
    href: "/resources/healing-after-an-abusive-relationship/",
  },
  selfCare: {
    label: "What does self-care for mental health actually look like?",
    href: "/resources/self-care-for-mental-health/",
  },
  adhdAnxiety: {
    label: "Is it ADHD, anxiety, or both?",
    href: "/resources/adhd-and-anxiety/",
  },
  giftGuide: {
    label: "A counselor’s gift guide: gifts that teach coping skills",
    href: "/resources/calming-gift-guide/",
  },
  screening: { label: "Optional screening tools", href: "/screening-tools/" },
  affordable: { label: "Affordable therapy in Dallas", href: "/affordable-therapy-dallas/" },
  irving: { label: "Counseling in Irving, TX", href: "/counseling-irving-tx/" },
  coppell: { label: "Counseling in Coppell, TX", href: "/counseling-coppell-tx/" },
  grandPrairie: { label: "Counseling in Grand Prairie, TX", href: "/counseling-grand-prairie-tx/" },
  farmersBranch: {
    label: "Counseling in Farmers Branch, TX",
    href: "/counseling-farmers-branch-tx/",
  },
  grounding: {
    label: "Grounding techniques for anxiety",
    href: "/resources/grounding-techniques-for-anxiety/",
  },
  boxBreathing: { label: "Box breathing: how to do it", href: "/resources/box-breathing/" },
  lpcVsLcsw: { label: "LPC vs. LCSW: what’s the difference?", href: "/resources/lpc-vs-lcsw/" },
  aboutSarah: { label: "About Sarah Ateia, LPC Associate", href: "/about/" },
  selfReflection: {
    label: "Quotes and self-reflection tools",
    href: "/resources/self-reflection/",
  },
  genes: {
    label: "Can your genes affect your mental health?",
    href: "/blog/genes-and-mental-health/",
  },
  comt: {
    label: "The COMT gene and anxiety: warrior or worrier?",
    href: "/blog/comt-gene-anxiety/",
  },
  lasColinas: { label: "Counseling in Las Colinas, TX", href: "/counseling-las-colinas-tx/" },
  newClients: { label: "New client forms", href: "/new-clients/" },
  choose: {
    label: "How to choose a therapist in Dallas",
    href: "/resources/how-to-choose-a-therapist-dallas/",
  },
  lpcVs: {
    label: "LPC vs. LPC Associate vs. psychologist",
    href: "/resources/lpc-vs-lpc-associate-vs-psychologist/",
  },
  adhdWomen: {
    label: "What are the signs of ADHD in women?",
    href: "/resources/adhd-signs-in-women/",
  },
  burnout: { label: "Burnout vs. depression", href: "/resources/burnout-vs-depression/" },
  firstSession: {
    label: "What happens in a first counseling session?",
    href: "/resources/first-counseling-session/",
  },
  regulation: {
    label: "Nervous system regulation techniques",
    href: "/resources/nervous-system-regulation-techniques/",
  },
  walkBenefits: {
    label: "Benefits of walk and talk therapy",
    href: "/resources/walk-and-talk-therapy-benefits/",
  },
  dallas: { label: "Counseling in Dallas, TX", href: "/counseling-dallas-tx/" },
  adhdTherapy: { label: "ADHD therapy in Dallas–Fort Worth", href: "/adhd-therapy/" },
  holisticCounseling: {
    label: "Holistic counseling in Dallas–Fort Worth",
    href: "/holistic-counseling/",
  },
  groundingGuide: {
    label: "Free grounding guide (PDF)",
    href: "/guides/grounding-guide.pdf",
  },
  glossary: { label: "Counseling glossary in English and Arabic", href: "/glossary/" },
  crisis: { label: "Crisis resources in Dallas–Fort Worth", href: "/crisis/" },
  tools: { label: "Free calming tools: box breathing and grounding", href: "/tools/" },
  familyBoundaries: {
    label: "How to set boundaries with family",
    href: "/resources/setting-boundaries-with-family/",
  },
  personCentered: {
    label: "What is person-centered therapy?",
    href: "/resources/what-is-person-centered-therapy/",
  },
  rsd: {
    label: "What is rejection sensitive dysphoria in ADHD?",
    href: "/resources/rejection-sensitive-dysphoria-adhd/",
  },
  adhdBurnout: { label: "What is ADHD burnout?", href: "/resources/adhd-burnout/" },
  stress: {
    label: "How to manage stress, and when to see a counselor",
    href: "/resources/stress-management/",
  },
  panicVsAnxiety: {
    label: "Panic attack vs. anxiety attack",
    href: "/resources/panic-attack-vs-anxiety-attack/",
  },
  anxietyOrStress: {
    label: "Is it anxiety or just stress?",
    href: "/resources/anxiety-or-stress/",
  },
  lifeTransitions: {
    label: "What is life transitions counseling?",
    href: "/resources/life-transitions-counseling/",
  },
};

// Titles stay under 60 characters: keyword first, then this ending.
const title = (keyword: string) => `${keyword} | Sarah Ateia, LPC Associate`;
const PUBLISHED = "2026-11-05";

export const TOPICS: ContentPage[] = [
  {
    path: "arabic-counseling",
    // Sarah will provide the Arabic intro text. It stays hidden until this is filled in.
    arabicIntro: "",
    related: [
      LINK.culture,
      LINK.familyBoundaries,
      LINK.glossary,
      LINK.telehealth,
      LINK.irving,
      LINK.consultation,
    ],
    title: "Arabic-Speaking Counselor in Dallas, TX",
    description:
      "Arabic-speaking therapist in Dallas, TX, and Arabic counselor online across Texas. Sessions in Arabic, English, or both, with room for culture and family.",
    eyebrow: "Counseling in Arabic",
    heading: "Arabic-speaking counselor in Dallas, TX.",
    intro:
      "Yes, you can see an Arabic-speaking counselor in Dallas: I offer sessions in Arabic, English, or a mix of both. I’m based in Irving, Texas, and I meet clients for walk and talk sessions outdoors in Dallas–Fort Worth or online anywhere in Texas.",
    blocks: [
      {
        heading: "Is there an Arabic-speaking therapist in Dallas?",
        paragraphs: [
          "Yes. I’m Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S, and I offer counseling in Arabic and English for people in Dallas–Fort Worth and online across Texas.",
          "You don’t need to choose one language before we start. Tell me what feels most natural, and you can change your mind at any point.",
          "Sessions can happen outdoors as [walk and talk therapy](/walk-and-talk-therapy-dallas/) or by video through [telehealth anywhere in Texas](/telehealth-counseling-texas/).",
        ],
      },
      {
        heading: "Why does language matter in counseling?",
        paragraphs: [
          "Language can matter in counseling because some feelings are easier to name in the language you grew up with, while others feel easier to say in a second language.",
          "There’s no right answer. For some people, Arabic brings them closer to family, memories, and the way things were said at home. For others, English gives a little distance that makes a hard topic easier to say out loud.",
          "I grew up in a multicultural environment, and it shaped how I connect with people. I won’t assume I already know your story. I stay curious about your culture, family, and language, and I welcome being corrected when I get something wrong.",
          "If you’d like to see common counseling words side by side, the [counseling glossary in English and Arabic](/glossary/) is a gentle place to start.",
        ],
      },
      {
        heading: "Can I switch between Arabic and English in a session?",
        paragraphs: [
          "Yes, switching between Arabic and English in the same session is welcome. Many bilingual people move between languages mid-sentence, especially when something feels close to the heart.",
          "You don’t need to translate yourself or stick with one language for the whole session. If a word or saying only fits in one language, use that one.",
        ],
      },
      {
        heading: "How can counseling make room for culture and family?",
        paragraphs: [
          "Culturally responsive counseling makes room for family roles, community expectations, and life between two cultures, without asking you to explain the basics first.",
          "Family roles, a parent’s hopes, living between two cultures, or carrying expectations from back home can shape how stress and sadness show up. We can talk about those things in your own words.",
          "Your culture isn’t treated as the problem, and it isn’t ignored either. You decide how much of your culture and family belongs in the conversation.",
          "For more on what to look for, read [choosing a counselor when language and culture matter](/resources/choosing-a-counselor-language-culture/).",
        ],
      },
      {
        heading: "What can Arabic-speaking clients work on in counseling?",
        paragraphs: [
          "Arabic-speaking clients can work on the same concerns anyone brings to counseling, in whichever language feels right that day.",
        ],
        list: [
          "[Anxiety and stress](/anxiety-therapy-dallas/)",
          "[Depression and low mood](/depression-counseling-dallas/)",
          "Emotional overwhelm",
          "Burnout and emotional exhaustion",
          "Relationship patterns",
          "Identity and self-understanding",
          "Self-esteem concerns",
          "Family expectations and living between cultures",
        ],
      },
      {
        heading: "What if I’m worried someone in my community will find out?",
        paragraphs: [
          "Counseling is confidential within the limits of the law, so whether you’re in counseling at all is your information to share.",
          "In close-knit communities, privacy can be the biggest worry about starting. Meeting by video from home can feel more private than a park, where we might be seen by someone you know.",
          "We can talk through what feels safest during your free consultation, and you can switch between outdoor and online sessions whenever you need to.",
        ],
      },
      {
        heading: "How do Arabic counseling sessions work?",
        paragraphs: [
          "Arabic counseling sessions happen either outdoors as walk and talk sessions in Dallas–Fort Worth or online by video for anyone located in Texas.",
        ],
        list: [
          "[Walk and talk sessions](/walk-and-talk-therapy-dallas/), usually at Sam Houston Trail Park in Irving",
          "[Online sessions anywhere in Texas](/telehealth-counseling-texas/), in Arabic or English",
          "$100 per session, with reduced rates based on household income",
          "Self-pay only, with no insurance billing",
          "A free 15-minute phone consultation to see if we’re a good fit",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you offer counseling sessions in Arabic?",
        a: "Yes, counseling sessions are available in Arabic or English. You can meet outdoors around Dallas–Fort Worth or by telehealth if you’re located in Texas at the time of each session.",
      },
      {
        q: "Is it okay to mix Arabic and English?",
        a: "Yes, mixing Arabic and English is completely fine. Many people move between both languages in the same session, and you never have to pick one.",
      },
      {
        q: "Do I need to be from a certain background or faith?",
        a: "No, you don’t need to be from any particular background or faith. I welcome clients of every culture, language, faith or none, and background.",
      },
      {
        q: "Is what I share kept private?",
        a: "Counseling is confidential, with limits set by law, such as when someone’s safety is at risk. We go over those limits before we begin. Outdoor sessions take place in public parks, where complete privacy can’t be guaranteed, so telehealth is also available.",
      },
      {
        q: "Can I get sessions in Arabic if I live outside Dallas–Fort Worth?",
        a: "Yes, you can have sessions in Arabic from anywhere in Texas. Telehealth is available across the state, as long as you’re located in Texas at the time of each session.",
      },
      {
        q: "Can I start in English and switch to Arabic later?",
        a: "Yes, you can start in English and switch to Arabic whenever you like. Some people find it easier to begin in one language and move into the other as trust builds.",
      },
    ],
  },
  {
    path: "walk-and-talk-therapy-dallas",
    related: [LINK.walkTalk, LINK.outdoorFit, LINK.anxiety, LINK.telehealth, LINK.walkBenefits],
    title: "Walk and Talk Therapy in Dallas | Outdoor Therapy",
    description:
      "Walk and talk therapy for Dallas and outdoor therapy on a trail in Irving, TX. How sessions, privacy, weather, and getting started work.",
    eyebrow: "Walk and talk therapy",
    heading: "Walk and talk therapy in Dallas.",
    intro:
      "Walk and talk therapy in Dallas is counseling held outdoors instead of in an office: we walk side by side at an easy pace, or sit if that feels better. All my in-person sessions happen this way, usually on a trail in Irving or another quiet park we choose together.",
    blocks: [
      {
        heading: "Where can I find walk and talk therapy in Dallas?",
        paragraphs: [
          "I offer walk and talk therapy for adults across Dallas–Fort Worth, with most sessions on a trail in Irving, a central meeting point for Dallas and nearby cities.",
          "Irving is my home base, so it’s a practical spot for people in [Irving](/counseling-irving-tx/), [Las Colinas](/counseling-las-colinas-tx/), [Coppell](/counseling-coppell-tx/), [Grand Prairie](/counseling-grand-prairie-tx/), [Farmers Branch](/counseling-farmers-branch-tx/), and [Dallas](/counseling-dallas-tx/).",
        ],
      },
      {
        heading: "Who is walk and talk therapy for?",
        paragraphs: [
          "Walk and talk therapy is for adults who want counseling in a setting that feels less formal than an office, and you don’t need to be fit or sporty to try it.",
          "Sessions are open to adults across Dallas–Fort Worth, including Irving, Las Colinas, Dallas, Fort Worth, Arlington, Grand Prairie, Carrollton, Coppell, and Plano. The pace is gentle, and we can sit the whole time.",
          "Not sure the outdoors suits you? Read [is outdoor counseling right for you?](/resources/is-outdoor-counseling-right-for-you/)",
        ],
      },
      {
        heading: "How much does walk and talk therapy cost in Dallas?",
        paragraphs: [
          "Walk and talk therapy with me costs $100 per session, the same as an online session, with reduced rates available based on household income.",
          "Sessions are self-pay, and I don’t bill insurance. [Affordable therapy in Dallas](/affordable-therapy-dallas/) explains how the sliding scale and optional packages work.",
        ],
      },
      {
        heading: "When might online therapy be a better fit than walking outdoors?",
        paragraphs: [
          "Online therapy may be a better fit if being in a public place would make it hard to talk openly, or if getting to a park is difficult.",
          "[Telehealth counseling](/telehealth-counseling-texas/) is available anywhere in Texas, and we can talk through which setting suits you during your free consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is walk and talk therapy?",
        a: "Walk and talk therapy is counseling while walking side by side outdoors, instead of sitting across from each other in an office. If walking isn’t comfortable, we sit on a bench or blanket instead. It’s the same counseling, just outside.",
      },
      {
        q: "Where do in-person sessions take place?",
        a: "In-person sessions take place outdoors, usually on a trail in Irving, or another quiet park we choose together. I don’t see clients in an office.",
      },
      {
        q: "Do I need to be in good shape?",
        a: "No, you don’t need to be in good shape for walk and talk therapy. We walk at whatever pace feels comfortable, and we can sit for the whole session if you’d like.",
      },
      {
        q: "Is there a consent form for outdoor sessions?",
        a: "Yes, there’s a short consent form for outdoor sessions that covers privacy, weather, and safety. You’ll review and sign it before your first outdoor session, and I’ll walk you through it when we get started.",
      },
      {
        q: "What should I wear to a walk and talk session?",
        a: "Wear comfortable shoes and clothes you can walk in, and bring water. In summer, a hat and sunscreen help; in winter, a layer you can take off. We keep an easy pace, so there’s no need for workout gear.",
      },
      {
        q: "Do sessions get canceled for weather?",
        a: "No, sessions don’t get canceled for weather. We move that session online instead.",
      },
      {
        q: "How much does an outdoor session cost?",
        a: "An outdoor session costs $100, the standard fee, and reduced rates are available based on household income. I don’t bill insurance.",
      },
      {
        q: "Can I mix walk and talk sessions with online sessions?",
        a: "Yes, you can mix walk and talk sessions with online sessions. Many people meet outdoors when the weather is good and switch to video when it isn’t.",
      },
    ],
  },
  {
    path: "telehealth-counseling-texas",
    related: [
      LINK.youngAdult,
      LINK.anxiety,
      LINK.depression,
      LINK.cost,
      LINK.consultation,
      LINK.firstSession,
      LINK.newClients,
    ],
    title: title("Online Therapy in Texas"),
    description:
      "Online therapy by video for anyone in Texas, from Houston to El Paso: how it works, privacy, and fees. Self-pay, sliding scale, free 15-minute call.",
    eyebrow: "Online therapy",
    heading: "Online therapy and telehealth counseling anywhere in Texas.",
    intro:
      "Yes, you can get telehealth counseling anywhere in Texas: I offer online therapy by video to anyone who is physically located in Texas during each session. That includes Dallas–Fort Worth, Houston, Austin, San Antonio, the Rio Grande Valley, and El Paso, with sessions in English or Arabic.",
    blocks: [
      {
        heading: "Who can use online therapy in Texas?",
        paragraphs: [
          "Anyone who is physically in Texas at the time of each session can use online therapy with me, because Texas is where I’m licensed as an LPC Associate, supervised by Don Zablosky, LPC-S.",
          "Where you are during the session is what counts, not where you live. If you’ll be traveling outside the state, tell me ahead of time so we can plan around it.",
          "If you live outside Texas, I’m glad to help point you toward other options.",
        ],
      },
      {
        heading: "Does online therapy work as well as in-person therapy?",
        paragraphs: [
          "For many people, online therapy by video works about as well as meeting in person.",
          "A 2021 meta-analysis that included 47 studies comparing video therapy with other conditions found the difference between video and in-person therapy was negligible ([Fernandez et al., 2021](https://doi.org/10.1002/cpp.2594)).",
          "Fit still matters more than format. Some people feel more at ease talking from home, and others prefer being outdoors or in person. If video ever feels like it isn’t working for you, we talk about it and adjust.",
        ],
      },
      {
        heading: "What can we work on in online therapy?",
        paragraphs: [
          "Online therapy can cover most of the same concerns as in-person counseling, from anxiety and low mood to ADHD and big life changes.",
        ],
        list: [
          "[Anxiety, stress, and overthinking](/anxiety-therapy-dallas/)",
          "[Depression and low mood](/depression-counseling-dallas/)",
          "[Adult ADHD, focus, and keeping up with daily life](/adhd-therapy/)",
          "[Young adult transitions, like school, work, and moving out](/young-adult-counseling/)",
          "Burnout, relationship patterns, and self-esteem",
        ],
      },
      {
        heading: "How do online therapy sessions work?",
        paragraphs: [
          "Online therapy sessions happen by video at a time we set together, and you join from a private place in Texas.",
          "Many people find video sessions easier to keep up week to week, because there’s no commute.",
          "Before we begin, we agree on where you’ll usually be and an emergency contact, in case the connection drops or you need urgent help. If you’re curious what the start looks like, read [what happens in a first counseling session](/resources/first-counseling-session/).",
        ],
      },
      {
        heading: "Is online therapy right if I’m in a crisis?",
        paragraphs: [
          "Online therapy isn’t an emergency service, so if you’re in crisis, call or text 988 to reach the Suicide & Crisis Lifeline, or call 911.",
          "Weekly sessions are for ongoing support. For urgent help in Dallas–Fort Worth and across Texas, see the [crisis resources page](/crisis/).",
        ],
      },
      {
        heading: "What time zone are online sessions scheduled in?",
        paragraphs: [
          "Most of Texas is on Central Time, but El Paso and Hudspeth counties are on Mountain Time, so I confirm every session time in your local time if you’re in far West Texas.",
          "That way nobody shows up an hour early or an hour late.",
        ],
      },
      {
        heading: "How do I get ready for an online therapy session?",
        paragraphs: [
          "To get ready for an online session, find a private spot, check your connection, and keep a way to reach you handy in case the call drops.",
        ],
        list: [
          "Find a private place where you’re unlikely to be interrupted",
          "Use headphones if others are nearby",
          "Check your camera, sound, and internet a few minutes before we start",
          "Keep your location and a way to reach you handy, in case we get disconnected",
        ],
      },
      {
        heading: "How much does online therapy cost in Texas without insurance?",
        paragraphs: [
          "Online therapy with me costs $100 per session, with reduced rates available based on household income.",
          "Sessions are self-pay only, and I don’t bill insurance. You have the right to receive a Good Faith Estimate of expected charges before services begin.",
          "To compare options, read [how much therapy costs without insurance in Texas](/resources/therapy-cost-without-insurance/) or see how the [sliding scale in Dallas](/affordable-therapy-dallas/) works.",
        ],
      },
      {
        heading: "Can I meet in person instead of online?",
        paragraphs: [
          "If you live near Irving, you can meet outdoors for walk and talk therapy instead of online, or mix the two.",
          "You can [meet outdoors for walk and talk therapy](/walk-and-talk-therapy-dallas/), usually at Sam Houston Trail Park. See [counseling in Irving](/counseling-irving-tx/) or [counseling in Dallas](/counseling-dallas-tx/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you offer online therapy?",
        a: "Yes, I offer online therapy by video. It’s available to clients who are located in Texas at the time of each session.",
      },
      {
        q: "Can I have a session while I’m out of state?",
        a: "No, you can’t have a session while you’re out of state. You need to be physically located in Texas at the time of each session, so tell me ahead of time if you’ll be away and we’ll reschedule.",
      },
      {
        q: "Can I do both walk and talk and online sessions?",
        a: "Yes, you can do both walk and talk and online sessions. A walk and talk session can move online when the weather is bad or when you’d simply prefer it.",
      },
      {
        q: "Are online sessions available in Arabic?",
        a: "Yes, online sessions are available in Arabic or English. You can also mix both languages in the same session.",
      },
      {
        q: "Is online therapy confidential?",
        a: "Online therapy is confidential within the limits of the law, the same as in-person counseling. We go over those limits before we begin, and joining from a private space helps keep what you share between us.",
      },
    ],
  },
  {
    path: "young-adult-counseling",
    related: [
      LINK.youngAdultGuide,
      LINK.adhdTherapy,
      LINK.anxiety,
      LINK.outdoor,
      LINK.slidingScale,
      LINK.firstSession,
      LINK.familyBoundaries,
      LINK.lifeTransitions,
    ],
    title: "Therapist for Young Adults in Dallas, TX",
    description:
      "Therapy for young adults in Dallas facing anxiety, low mood, ADHD, and big life changes. Walk and talk in DFW or online anywhere in Texas.",
    eyebrow: "Young adults",
    heading: "Young adult counseling in Dallas.",
    intro:
      "Young adult counseling is talk therapy for people in their late teens and twenties who are dealing with a lot at once: leaving home, school or a first job, relationships, money, and figuring out who you are apart from what others expect. I offer counseling for young adults in Dallas–Fort Worth and online anywhere in Texas, with room to slow down and make sense of it all.",
    blocks: [
      {
        heading: "What do young adults come to counseling for?",
        paragraphs: [
          "Young adults often come to counseling for anxiety, low mood, focus and ADHD struggles, and the pressure of big life transitions.",
        ],
        list: [
          "[Anxiety, stress, and overthinking](/anxiety-therapy-dallas/)",
          "[Low mood or feeling stuck](/depression-counseling-dallas/)",
          "[ADHD and trouble keeping up with school, work, or daily tasks](/adhd-therapy/)",
          "Big transitions like college, graduating, moving, or starting a career",
          "Identity, self-esteem, and figuring out what you want",
          "Relationship patterns with partners, friends, and family",
          "Burnout and pressure to have everything figured out",
        ],
      },
      {
        heading: "Why is young adulthood a common time to start therapy?",
        paragraphs: [
          "Young adulthood is a common time for mental health struggles: in 2022, 36.2% of U.S. adults ages 18 to 25 had a mental illness, the highest rate of any adult age group, according to the [National Institute of Mental Health](https://www.nimh.nih.gov/health/statistics/mental-illness).",
          "Struggling during these years is common, and it isn’t a sign that you’re failing at being an adult. Many changes stack up at once, and the support that worked at home or in high school may not be there anymore.",
          "If you’re weighing whether now is the right time, [is therapy right for my young adult?](/resources/therapy-for-young-adults/) walks through common signs and options.",
        ],
      },
      {
        heading: "What does counseling for young adults look like?",
        paragraphs: [
          "Counseling for young adults with me is talk therapy where you lead, I listen closely without judgment, and we work toward small next steps that feel doable.",
          "My approach is person-centered, which means you decide what we focus on. I also draw on solution-focused therapy, which looks at what’s already working, and on Jungian ideas that help you explore the deeper patterns that show up in your choices and relationships.",
          "I take a [holistic view](/holistic-counseling/). Sleep, movement, stress, and the people around you all affect how you feel, so we look at the whole picture, not just the hard parts.",
          "Counseling with me is talk therapy, and I don’t prescribe medication. If a medical or psychiatric evaluation would help, I can point you toward one.",
        ],
      },
      {
        heading: "How do young adult counseling sessions work?",
        paragraphs: [
          "Young adult counseling sessions happen either outdoors as walk and talk sessions in Dallas–Fort Worth or online by video from anywhere in Texas.",
        ],
        list: [
          "[Walk and talk sessions](/walk-and-talk-therapy-dallas/) outdoors, usually at Sam Houston Trail Park in Irving, or another quiet park we choose together",
          "[Online therapy from anywhere in Texas](/telehealth-counseling-texas/), including your dorm or apartment",
          "Self-pay, with a sliding scale available",
          "A free 15-minute phone call to see if we’re a good fit",
        ],
      },
      {
        heading: "What should I look for in a therapist for young adults?",
        paragraphs: [
          "A good therapist for young adults takes your goals seriously, explains counseling in plain language, and respects that you’re the one deciding what to focus on.",
          "The right fit matters more than any single method. It’s fine to ask questions on the first call, like how sessions run, how confidentiality works, and what happens if something isn’t helping.",
        ],
        list: [
          "They talk with you, not at you, and don’t treat you like a kid",
          "They’re open about fees and scheduling from the start",
          "They understand school, first jobs, money stress, and family expectations",
          "They’re clear that counseling is your choice, even if a parent is helping pay",
          "They’ll tell you honestly if someone else would be a better fit",
        ],
      },
      {
        heading: "How can a parent help a young adult start therapy?",
        paragraphs: [
          "A parent can help a young adult start therapy by offering support with logistics or cost, while leaving the choice to begin, and what to talk about, with them.",
          "Counseling tends to go best when a young adult wants to be there. You can share a few options, offer to help pay, and let them make the first call.",
          "Once someone is 18 or older, what they share in counseling is confidential within the limits of the law. I can’t update a parent on sessions without the client’s written permission. For more on finding a good match, read [how to choose a therapist in Dallas](/resources/how-to-choose-a-therapist-dallas/).",
        ],
      },
    ],
    faqs: [
      {
        q: "What age counts as a young adult?",
        a: "Young adult counseling usually means people somewhere between 18 and 30. There’s no strict cutoff.",
      },
      {
        q: "Do I need my parents’ permission to start counseling?",
        a: "No, if you’re 18 or older you don’t need your parents’ permission to start counseling. You can start on your own, and what you share is confidential within the limits of the law. We go over those limits before we begin.",
      },
      {
        q: "Can I do sessions from my dorm or apartment?",
        a: "Yes, you can do sessions from your dorm or apartment, as long as you’re located in Texas at the time of the session and have a private space where you won’t be overheard.",
      },
      {
        q: "Do you take insurance?",
        a: "No, I don’t take insurance. Sessions are self-pay only, with a sliding scale available. Ask about it during your free consultation.",
      },
      {
        q: "Can a parent pay for my sessions?",
        a: "Yes, a parent or family member can pay for your sessions. Paying doesn’t give them access to what you share, which stays confidential within the limits of the law.",
      },
    ],
  },
  {
    path: "anxiety-therapy-dallas",
    related: [
      LINK.holisticCounseling,
      LINK.holistic,
      LINK.adhdAnxiety,
      LINK.depression,
      LINK.youngAdult,
      LINK.screening,
      LINK.regulation,
      LINK.tools,
      LINK.stress,
      LINK.groundingGuide,
      LINK.grounding,
      LINK.boxBreathing,
      LINK.panicVsAnxiety,
      LINK.anxietyOrStress,
    ],
    title: "Anxiety Therapist in Dallas, TX | Anxiety Therapy",
    description:
      "Anxiety therapist in Dallas, TX offering talk therapy for worry and stress. Walk and talk sessions in DFW or online across Texas. Sliding scale available.",
    eyebrow: "Anxiety therapy",
    heading: "Anxiety therapist in Dallas, TX.",
    intro:
      "An anxiety therapist in Dallas can help you understand what keeps your worry switched on and practice steadier ways to calm your body and mind. I offer talk therapy for anxiety through walk and talk sessions in Dallas–Fort Worth and online anywhere in Texas. Anxiety can look like constant worry, a racing mind at night, a tight chest before work, or avoiding things you used to handle fine.",
    blocks: [
      {
        heading: "What does anxiety feel like?",
        paragraphs: [
          "Anxiety often feels like your body’s alarm system staying switched on after the danger has passed, with worry that’s hard to turn off and tension that won’t settle.",
          "It shows up a little differently for everyone. Common signs include:",
        ],
        list: [
          "Worry that’s hard to switch off, especially at night",
          "A racing heart, tight chest, or shallow breathing",
          "Muscle tension, restlessness, or a jumpy stomach",
          "Irritability or feeling on edge",
          "Avoiding people, places, or tasks that set it off",
          "Overthinking decisions or replaying conversations",
        ],
      },
      {
        heading: "How common is anxiety in adults?",
        paragraphs: [
          "Anxiety disorders are among the most common mental health conditions in the United States. The National Institute of Mental Health estimates that 19.1% of U.S. adults had an anxiety disorder in the past year, and 31.1% have one at some point in their lives ([NIMH](https://www.nimh.nih.gov/health/statistics/any-anxiety-disorder)).",
          "If anxiety is part of your days, you’re far from alone.",
        ],
      },
      {
        heading: "What does anxiety therapy in Dallas look like?",
        paragraphs: [
          "Anxiety therapy in Dallas with me is talk therapy that starts by getting curious about your anxiety: when it shows up, what it might be trying to protect you from, and what tends to make it better or worse.",
          "From there, we practice ways to turn the alarm down, like slowing your breathing, noticing anxious thoughts without getting pulled under, and grounding yourself in what’s around you.",
          "Avoidance keeps anxiety going, so we also take small, planned steps toward the things you’ve been avoiding, at a pace you choose. Over time, many people find their body learns those situations aren’t as dangerous as they felt.",
        ],
      },
      {
        heading: "What anxiety coping skills will we practice?",
        paragraphs: [
          "Anxiety coping skills in therapy are simple, repeatable tools for calming your body and loosening the grip of anxious thoughts, practiced in session and then tried in daily life.",
          "Which ones we use depends on what fits you. You can read more in [nervous system regulation techniques](/resources/nervous-system-regulation-techniques/).",
        ],
        list: [
          "Slow breathing with a longer exhale to settle a racing heart",
          "Grounding through your senses, like naming what you can see, hear, and feel",
          "Noticing and naming anxious thoughts instead of arguing with them",
          "Small, planned steps toward situations you’ve been avoiding",
          "Wind-down routines for nights when your mind won’t stop",
        ],
      },
      {
        heading: "How does the body affect anxiety?",
        paragraphs: [
          "Anxiety lives in the body as much as the mind, so sleep, caffeine, movement, and stress all change how loud the alarm gets.",
          "Movement is one of the better-studied pieces. A large 2023 review of 97 systematic reviews found that physical activity had a medium-sized effect on anxiety symptoms compared with usual care ([Singh et al., 2023](https://doi.org/10.1136/bjsports-2022-106195)).",
          "Some people find that moving while they talk calms the body enough to think clearly, which is one reason I offer [walk and talk therapy](/walk-and-talk-therapy-dallas/).",
        ],
      },
      {
        heading: "Is it anxiety, depression, or both?",
        paragraphs: [
          "Anxiety and low mood often travel together, and counseling can work on both at once.",
          "If heaviness, exhaustion, or losing interest in things is the bigger struggle for you, read about [depression counseling](/depression-counseling-dallas/). If restlessness and trouble focusing go back to childhood, [ADHD and anxiety](/resources/adhd-and-anxiety/) can look a lot alike.",
        ],
      },
      {
        heading: "Where do anxiety therapy sessions happen?",
        paragraphs: [
          "Anxiety therapy sessions happen outdoors as walk and talk sessions in Dallas–Fort Worth, or online from anywhere in Texas.",
        ],
        list: [
          "Walk and talk sessions outdoors, usually at Sam Houston Trail Park in Irving, or another quiet park we choose together",
          "[Online therapy](/telehealth-counseling-texas/) from anywhere in Texas, if a calm room at home feels safer",
          "In person for people in Irving, Las Colinas, Dallas, Coppell, Grand Prairie, and Farmers Branch",
        ],
      },
      {
        heading: "What if anxiety feels like an emergency?",
        paragraphs: [
          "If anxiety ever comes with thoughts of suicide or harming yourself, call or text 988, call 911, or go to the nearest emergency room.",
          "Counseling isn’t a crisis service. You can also [find 24/7 crisis lines in Dallas–Fort Worth](/crisis/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Can talk therapy help with anxiety?",
        a: "Talk therapy can help many people understand their anxiety and practice skills to manage it. Some people also benefit from medication, which a doctor or psychiatrist can talk through with you. I don’t prescribe medication.",
      },
      {
        q: "How long does anxiety therapy take?",
        a: "How long anxiety therapy takes depends on what you’re working on. Some people come for a few months to build skills, others for longer. We check in regularly about how it’s going and what you want next.",
      },
      {
        q: "Can I try a screening questionnaire first?",
        a: "Yes, you can try a free anxiety questionnaire before starting therapy. The GAD-7 is a widely used one, linked on the [screening tools page](/screening-tools/). It isn’t a diagnosis, and we can look at your results together.",
      },
      {
        q: "How do I find an anxiety therapist in Dallas, TX?",
        a: "Look for a licensed counselor whose approach and format fit you, check their license on the state’s lookup, and ask how they work with anxiety before you commit. I’m Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S, and I see adults for anxiety in Dallas–Fort Worth parks or by telehealth across Texas. A [free 15-minute consultation](/resources/free-counseling-consultation/) is an easy way to see if we’re a good fit, and [how to choose a therapist in Dallas](/resources/how-to-choose-a-therapist-dallas/) lists questions worth asking.",
      },
      {
        q: "Do you offer a sliding scale?",
        a: "Yes, a sliding scale is available based on household income. I’m self-pay only, so nothing is billed to insurance. You can read more about [affordable therapy in Dallas](/affordable-therapy-dallas/).",
      },
      {
        q: "Is there a free consultation?",
        a: "Yes, a free 15-minute consultation is available. It’s a low-pressure way to see whether working together feels like a fit. Read [what happens in a free counseling consultation](/resources/free-counseling-consultation/).",
      },
    ],
  },
  {
    path: "depression-counseling-dallas",
    related: [
      LINK.holisticCounseling,
      LINK.holistic,
      LINK.anxiety,
      LINK.youngAdultGuide,
      LINK.screening,
      LINK.burnout,
      LINK.anxietyOrStress,
    ],
    title: "Depression Counseling in Dallas, TX",
    description:
      "Depression counseling in Dallas, TX for low mood and exhaustion. Walk and talk sessions in DFW or online across Texas. Sliding scale, free 15-minute call.",
    eyebrow: "Depression counseling",
    heading: "Depression counseling in Dallas, TX.",
    intro:
      "Depression counseling in Dallas is talk therapy that gives you a steady place to work through low mood, numbness, or exhaustion, at a pace that feels manageable. I offer depression counseling through walk and talk sessions in Dallas–Fort Worth and online anywhere in Texas. Depression isn’t only sadness. It can feel like losing interest in things you used to enjoy, or a heaviness that makes ordinary days hard.",
    blocks: [
      {
        heading: "What are common signs of depression?",
        paragraphs: [
          "Common signs of depression include low mood most days, losing interest in things you used to enjoy, and changes in sleep, appetite, or energy.",
          "Where anxiety feels like too much, depression often feels like too little: too little energy, interest, or hope.",
          "If several of the signs below have lasted two weeks or more, it’s worth talking to someone. A counselor or your doctor is a good place to start.",
        ],
        list: [
          "Low mood most days, or feeling empty or flat",
          "Losing interest in friends, hobbies, or work",
          "Sleeping much more or much less than usual",
          "Changes in appetite or energy",
          "Trouble concentrating or making decisions",
          "Feeling worthless, guilty, or like a burden",
        ],
      },
      {
        heading: "How common is depression in adults?",
        paragraphs: [
          "Depression is common. The National Institute of Mental Health estimates that 21.0 million U.S. adults, or 8.3% of all adults, had at least one major depressive episode in 2021 ([NIMH](https://www.nimh.nih.gov/health/statistics/major-depression)).",
          "Feeling this way doesn’t mean you’re weak or failing. It means you’re carrying something heavy, and you don’t have to carry it alone.",
        ],
      },
      {
        heading: "What does depression counseling in Dallas look like?",
        paragraphs: [
          "Depression counseling with me starts with listening, so you have a steady place to talk about what’s weighing on you without having to hold it all together.",
          "I don’t rush you toward feeling better. We go at a pace that feels manageable for you.",
          "Depression tends to shrink life down: you do less, which drains your mood further. So alongside talking, we bring back small, doable activities that matter to you, one at a time, and notice how your mood responds.",
          "We also make room for self-compassion, because the inner critic is usually loud during depression.",
        ],
      },
      {
        heading: "Can daily rhythm and movement help with depression?",
        paragraphs: [
          "Regular sleep, daylight, gentle movement, and time with people you trust can all support mood alongside counseling.",
          "Movement is one of the better-studied pieces. A large 2023 review of 97 systematic reviews found that physical activity had a medium-sized effect on depression symptoms compared with usual care ([Singh et al., 2023](https://doi.org/10.1136/bjsports-2022-106195)).",
          "We look at your daily rhythm together and adjust what’s realistic, even on low-energy days. [Walk and talk sessions](/walk-and-talk-therapy-dallas/) build a little movement and daylight into the hour itself.",
        ],
      },
      {
        heading: "Is it depression or burnout?",
        paragraphs: [
          "Burnout and depression can feel alike, with exhaustion, low motivation, and pulling away from people.",
          "Burnout is usually tied to work or caregiving stress, while depression tends to color most areas of life. If you’re not sure which fits, read [burnout vs. depression](/resources/burnout-vs-depression/).",
        ],
      },
      {
        heading: "Is it depression, anxiety, or both?",
        paragraphs: [
          "Low mood often comes with worry, and counseling can work on depression and anxiety together.",
          "If racing thoughts, tension, or avoidance is the bigger struggle, read about [anxiety therapy](/anxiety-therapy-dallas/).",
        ],
      },
      {
        heading: "Where do depression counseling sessions happen?",
        paragraphs: [
          "Depression counseling sessions happen online from anywhere in Texas, or outdoors as gentle walk and talk sessions in Dallas–Fort Worth.",
        ],
        list: [
          "[Online therapy](/telehealth-counseling-texas/) from anywhere in Texas, for days when leaving home feels like too much",
          "Gentle walk and talk sessions with some daylight built in, usually at Sam Houston Trail Park in Irving or another park we pick together",
          "Outdoor sessions for people living in or near Irving, Las Colinas, Dallas, Coppell, Grand Prairie, or Farmers Branch",
        ],
      },
      {
        heading: "What if I need help right away?",
        paragraphs: [
          "If you’re thinking about suicide or harming yourself, call or text 988, call 911, or go to the nearest emergency room.",
          "Counseling isn’t a crisis service. You can also [find 24/7 crisis lines in Dallas–Fort Worth](/crisis/).",
        ],
      },
    ],
    faqs: [
      {
        q: "What’s the difference between sadness and depression?",
        a: "Sadness usually eases with time, while depression tends to last longer and affects sleep, energy, and interest in life. Depression also gets in the way of daily functioning. You don’t need a diagnosis to start counseling.",
      },
      {
        q: "Should I see a counselor or a psychiatrist?",
        a: "Many people with depression see both a counselor and a psychiatrist or doctor. A psychiatrist or doctor can talk with you about medication. Counseling focuses on talking things through and building skills. I don’t prescribe medication, and with your permission I can coordinate with your doctor.",
      },
      {
        q: "Can I try a screening questionnaire first?",
        a: "Yes, you can try a free depression questionnaire before starting counseling. The PHQ-9 is a widely used one, linked on the [screening tools page](/screening-tools/). It isn’t a diagnosis, and we can go over your results together.",
      },
      {
        q: "Where can I get depression counseling in Dallas, TX?",
        a: "I offer depression counseling in Dallas, TX through walk and talk sessions in Dallas–Fort Worth parks, or by telehealth if you’re anywhere in Texas. I’m Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S. Sessions are self-pay, with [reduced rates](/affordable-therapy-dallas/) available, and you can start with a [free 15-minute consultation](/resources/free-counseling-consultation/).",
      },
      {
        q: "Do you offer a sliding scale?",
        a: "Yes, fees can be reduced based on household income. I’m self-pay only, so nothing is billed to insurance. You can read more about [affordable therapy in Dallas](/affordable-therapy-dallas/).",
      },
      {
        q: "Is there a free consultation?",
        a: "Yes, a free 15-minute call is available before you decide anything. It’s a chance to ask questions and see whether working together feels right. Read [what happens in a free counseling consultation](/resources/free-counseling-consultation/).",
      },
    ],
  },
  {
    path: "adhd-therapy",
    related: [
      LINK.adhdDiagnose,
      LINK.adhd,
      LINK.youngAdult,
      LINK.screening,
      LINK.adhdWomen,
      LINK.rsd,
      LINK.adhdBurnout,
    ],
    title: "ADHD Therapist in Dallas, TX | Adult ADHD Counseling",
    description:
      "Adult ADHD counseling in Dallas, TX for focus, routines, work, and the stress ADHD brings. Talk therapy, walk and talk in DFW or online across Texas.",
    eyebrow: "Adult ADHD counseling",
    heading: "ADHD therapist for adults in Dallas, TX.",
    intro:
      "An ADHD therapist for adults helps with the everyday side of ADHD: time, focus, follow-through, and the frustration and self-doubt that often build up over years of feeling behind. I offer talk therapy for adults and young adults with ADHD or suspected ADHD, through walk and talk sessions in Dallas–Fort Worth or online anywhere in Texas. Many adults only start to wonder about ADHD in college, at work, or after a child is diagnosed.",
    blocks: [
      {
        heading: "What can an ADHD therapist in Dallas help with?",
        paragraphs: [
          "Adult ADHD counseling can help with planning, focus, and follow-through, and with the emotional side of ADHD, like overwhelm and self-criticism.",
        ],
        list: [
          "Planning, managing time, and keeping track of tasks",
          "Starting things, and finishing them",
          "Focus at school or work",
          "Emotional ups and downs, frustration, and overwhelm",
          "Shame, self-criticism, or feeling “lazy” when you’re not",
          "Relationships strained by forgetfulness or missed plans",
          "Anxiety or low mood that often comes along with ADHD",
        ],
      },
      {
        heading: "How common is ADHD in adults?",
        paragraphs: [
          "Adult ADHD is more common than many people expect. Based on national diagnostic interview data, the National Institute of Mental Health estimates that 4.4% of U.S. adults ages 18 to 44 have current ADHD, and that 8.1% of adults in that age group have had ADHD at some point in their lives ([NIMH](https://www.nimh.nih.gov/health/statistics/attention-deficit-hyperactivity-disorder-adhd)).",
          "Those figures come from a survey done in 2001–2003, so they’re older estimates. Still, they show you’re far from the only adult figuring out ADHD.",
          "ADHD can also look different in women, often quieter and easier to miss. Read [what are the signs of ADHD in women?](/resources/adhd-signs-in-women/)",
        ],
      },
      {
        heading: "What does adult ADHD counseling look like with me?",
        paragraphs: [
          "Adult ADHD counseling with me starts with how ADHD shows up in your life, not a checklist.",
          "From there we build practical systems that fit how your brain works, like breaking tasks into first steps, using reminders and visual cues, and planning around your energy. Solution-focused work helps us notice what already works so you can do more of it.",
          "I also take a holistic view. Sleep, movement, and stress all affect focus, and some people find it easier to think while walking, which is one reason I offer [walk and talk sessions](/walk-and-talk-therapy-dallas/).",
        ],
      },
      {
        heading: "What does ADHD therapy look like day to day?",
        paragraphs: [
          "Day to day, ADHD therapy stays practical: we pick one or two areas that are costing you the most, try small changes between sessions, and adjust based on what actually happened rather than what should have happened.",
          "Over time, many people find it easier to plan, start tasks, and be kinder to themselves when things slip. For ideas you can try now, see [creative strategies for adults with ADHD](/resources/adhd-creative-strategies/).",
        ],
        list: [
          "Setting up reminders, visual schedules, and routines that fit how your brain works",
          "Breaking big tasks into first steps small enough to start",
          "Planning around energy, sleep, and the times of day you focus best",
          "Working through shame and self-criticism from years of feeling behind",
          "Talking through how ADHD shows up at work, in school, and in relationships",
        ],
      },
      {
        heading: "Can therapy help with ADHD?",
        paragraphs: [
          "Therapy can help adults with ADHD cope with daily challenges, but it doesn’t replace an evaluation, or medication when that’s needed.",
          "The National Institute of Mental Health notes that therapy may not treat the core symptoms of ADHD, but adding therapy to a treatment plan can help some people better cope with daily challenges, gain confidence, or manage impulsive and risky behaviors ([NIMH](https://www.nimh.nih.gov/health/publications/adhd-what-you-need-to-know)).",
          "If worry comes along with ADHD, [is it ADHD, anxiety, or both?](/resources/adhd-and-anxiety/) explains how the two overlap.",
        ],
      },
      {
        heading: "Do you diagnose ADHD or prescribe medication?",
        paragraphs: [
          "No. I don’t do ADHD evaluations or prescribe medication.",
          "If you’re looking for an evaluation, a psychologist, psychiatrist, or your doctor can help, and we can talk through where to start. [Can a therapist diagnose ADHD?](/resources/can-a-therapist-diagnose-adhd/) explains who does evaluations in Texas.",
          "If you take ADHD medication, therapy can work alongside it, and with your permission I can coordinate with your prescriber.",
        ],
      },
      {
        heading: "Where do ADHD therapy sessions happen?",
        paragraphs: [
          "ADHD therapy sessions happen outdoors as walk and talk sessions in Dallas–Fort Worth, or online from anywhere in Texas.",
        ],
        list: [
          "Walk and talk sessions outdoors, usually at Sam Houston Trail Park in Irving, or another quiet park we choose together",
          "[Online therapy](/telehealth-counseling-texas/) from anywhere in Texas",
          "Within driving distance of Dallas, Fort Worth, Arlington, Plano, Carrollton, Grand Prairie, and Coppell",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need an ADHD diagnosis to start therapy?",
        a: "No, you don’t need an ADHD diagnosis to start therapy. You can start whether you have a diagnosis, suspect ADHD, or are waiting for an evaluation.",
      },
      {
        q: "Is there a free ADHD screening questionnaire?",
        a: "Yes, the ASRS v1.1 is a free adult ADHD screening questionnaire, linked on the [screening tools page](/screening-tools/). It isn’t a diagnosis, and we can look at your results together.",
      },
      {
        q: "Can ADHD therapy be done online?",
        a: "Yes, ADHD therapy can be done online from anywhere in Texas. Some people with ADHD prefer walk and talk sessions because they find moving helps them focus.",
      },
      {
        q: "Can I start therapy if I already take ADHD medication?",
        a: "Yes, therapy can work alongside ADHD medication. Questions about dose or side effects belong with your prescriber, and with your permission I can coordinate with them.",
      },
      {
        q: "Do you offer a sliding scale?",
        a: "Yes, a sliding scale is available based on household income. I’m self-pay only, so nothing is billed to insurance. You can read more about [affordable therapy in Dallas](/affordable-therapy-dallas/).",
      },
    ],
  },
  {
    path: "holistic-counseling",
    related: [
      LINK.holistic,
      LINK.personCentered,
      LINK.walkTalk,
      LINK.anxiety,
      LINK.depression,
      LINK.outdoor,
      LINK.regulation,
      LINK.burnout,
      LINK.stress,
    ],
    title: "Holistic Counseling in Dallas | Holistic Therapist",
    description:
      "Holistic counseling in Dallas that looks at mind and body together: stress, sleep, movement, and meaning. Walk and talk or online across Texas.",
    eyebrow: "Holistic counseling",
    heading: "Holistic counseling in Dallas.",
    intro:
      "Holistic counseling is talk therapy that looks at the whole person: alongside your thoughts and feelings, we pay attention to your body, sleep, stress, relationships, and what gives your life meaning. I offer holistic counseling in Dallas–Fort Worth through walk and talk sessions and online anywhere in Texas.",
    blocks: [
      {
        heading: "What does a holistic therapist do?",
        paragraphs: [
          "A holistic therapist offers talk therapy that considers how your mind, body, relationships, and daily life affect each other, rather than looking at one symptom on its own.",
          "In practice, that can mean noticing where stress shows up in your body, looking at sleep and movement, or talking about values and culture alongside whatever is weighing on you.",
          "For a broader overview, read [what is holistic therapy?](/resources/what-is-holistic-therapy/)",
        ],
      },
      {
        heading: "What does holistic counseling include?",
        paragraphs: [
          "Holistic counseling includes ordinary talk therapy plus attention to the body, daily habits, and meaning, always at your pace.",
        ],
        list: [
          "Talking through what’s going on, at your pace",
          "Noticing where stress shows up in your body",
          "Breathing and grounding skills to help calm your nervous system",
          "Looking at sleep, movement, and daily rhythms",
          "Time outdoors through [walk and talk sessions](/walk-and-talk-therapy-dallas/)",
          "Exploring values, meaning, culture, and faith, if they matter to you",
          "Learning how things like genetics, sleep, and stress can affect mood, as education only, not testing or diagnosis",
        ],
      },
      {
        heading: "How is holistic counseling different from regular therapy?",
        paragraphs: [
          "Holistic counseling is still talk therapy, with the same training, ethics, and confidentiality. The difference is focus: we look at how mind, body, and life fit together.",
          "Instead of treating one symptom as the whole story, we notice how sleep, stress, relationships, and your surroundings play into it.",
          "My approach draws on person-centered, solution-focused, and Jungian ideas, along with research on movement, sleep, and time in nature.",
        ],
      },
      {
        heading: "What happens in a holistic counseling session?",
        paragraphs: [
          "A holistic counseling session is still talk therapy, and it may also include a short grounding or breathing exercise or a look at how sleep, movement, and stress affected your week.",
          "We might slow down to notice what’s happening in your body. Slow, steady breathing has research behind it for calming the body’s stress response ([Zaccaro et al., 2018](https://doi.org/10.3389/fnhum.2018.00353)). You’ll find more simple practices in [nervous system regulation techniques](/resources/nervous-system-regulation-techniques/).",
        ],
        list: [
          "Grounding exercises that use your senses to bring you back to the present",
          "Paced breathing you can use before a hard conversation or at bedtime",
          "Noticing body signals, like a tight jaw or shallow breath, as early cues of stress",
          "Small, realistic changes to sleep, movement, and time outdoors",
          "Making room for culture, values, and what gives your life meaning",
        ],
      },
      {
        heading: "What does research say about mind-body approaches in counseling?",
        paragraphs: [
          "Some mind-body approaches used in holistic counseling have solid research behind them, especially physical activity, slow breathing, and time in nature.",
          "A review of 97 earlier reviews, covering 1,039 trials and 128,119 participants, found that regular movement was linked with lower symptoms of anxiety and depression ([Singh et al., 2023](https://doi.org/10.1136/bjsports-2022-106195)).",
          "Time in nature has also been linked with lower levels of the stress hormone cortisol ([Hunter et al., 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6458297/)).",
          "Other ideas, like how genetics can affect mood, are shared as education only. I’m open about what each approach is based on and where the research is still limited.",
        ],
      },
      {
        heading: "What isn’t holistic counseling?",
        paragraphs: [
          "Holistic counseling isn’t medical treatment: I don’t prescribe medication, recommend supplements, or tell anyone to stop a treatment their doctor prescribed.",
          "If something medical might be going on, I’ll encourage you to check with your doctor. Counseling can work alongside medical care, not in place of it.",
        ],
      },
      {
        heading: "Who is holistic counseling for?",
        paragraphs: [
          "Holistic counseling is for people dealing with anxiety, stress, low mood, burnout, or ADHD who want care that considers the whole picture.",
          "That includes [anxiety therapy](/anxiety-therapy-dallas/), [depression counseling](/depression-counseling-dallas/), and [ADHD therapy](/adhd-therapy/), each with attention to sleep, stress, and daily rhythms.",
          "Walk and talk sessions are open to people across Dallas, Fort Worth, Irving, Arlington, Plano, Carrollton, Grand Prairie, and Coppell, and [online sessions](/telehealth-counseling-texas/) are available anywhere in Texas.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is holistic counseling evidence-based?",
        a: "Parts of holistic counseling are well supported by research, like movement for depression and anxiety, mindfulness-based approaches, and better sleep. I’m open about what each approach I use is based on.",
      },
      {
        q: "Do I have to be spiritual?",
        a: "No, you don’t have to be spiritual. Faith and meaning are part of the conversation only if you want them to be.",
      },
      {
        q: "Can holistic counseling be done online?",
        a: "Yes, holistic counseling can be done online. Online sessions are available anywhere in Texas, and we can still work on breathing, grounding, and routines.",
      },
      {
        q: "Do you offer a sliding scale?",
        a: "Yes, I offer a sliding scale based on household income. Sessions are self-pay only.",
      },
      {
        q: "Can holistic counseling help with burnout?",
        a: "Holistic counseling can be a good fit for burnout, because it looks at sleep, stress, and daily rhythms along with how you feel. If you’re not sure whether it’s burnout or something more, read [burnout vs. depression](/resources/burnout-vs-depression/).",
      },
    ],
  },
  {
    path: "affordable-therapy-dallas",
    related: [LINK.cost, LINK.slidingScale, LINK.telehealth, LINK.dallas, LINK.choose],
    title: "Sliding Scale Therapy in Dallas, TX",
    description:
      "Sliding scale therapy in Dallas without insurance: self-pay counseling with fees based on household income, optional packages, and a free 15-minute call.",
    eyebrow: "Sliding scale, self-pay therapy",
    heading: "Sliding scale therapy in Dallas.",
    intro:
      "Yes, you can get sliding scale therapy in Dallas without insurance: my fees can be lowered based on your household income, and you never have to explain your circumstances. I’m Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S, and I offer self-pay walk and talk sessions in Irving and online sessions anywhere in Texas.",
    blocks: [
      {
        heading: "How does sliding scale therapy work in Dallas?",
        paragraphs: [
          "With my sliding scale, your session fee is based on the household income you tell me, and we agree on that fee before your first session.",
          "There’s no application to fill out and nothing to prove. The steps are simple:",
        ],
        list: [
          "Your fee is based on household income, which you simply tell me. There’s no need to show paperwork or explain your circumstances.",
          "We agree on your fee before your first session, so there are no surprises",
          "Your rate stays private and is reviewed every six months, or sooner if your income changes",
          "Optional prepaid packages lower the cost of each session",
          "Current standard fees are listed in the [fees section](/#fees) on the home page",
          "A free 15-minute phone consultation comes before you commit to anything",
        ],
      },
      {
        heading: "Why is cost such a common barrier to therapy?",
        paragraphs: [
          "Cost is one of the most common reasons people go without counseling they feel they need.",
          "In 2018, cost was the most common reason adults gave for not getting mental health care they felt they needed, cited by 39% of them, according to [the American Psychological Association’s summary of SAMHSA survey data](https://www.apa.org/monitor/2020/07/datapoint-care).",
          "A sliding scale is one way to close that gap, so that income isn’t the thing that decides who gets support.",
        ],
      },
      {
        heading: "How do prepaid therapy packages work?",
        paragraphs: [
          "Prepaid packages are optional bundles of sessions, paid upfront, that lower the cost of each session.",
          "If you decide not to continue, any sessions you haven’t used are refunded at the package rate, so you’re never locked in. The current package options are listed in the [fees section](/#fees).",
        ],
      },
      {
        heading: "Is sliding scale therapy the same quality as full-fee therapy?",
        paragraphs: [
          "Yes. A lower fee doesn’t mean shorter sessions, less attention, or a different kind of care.",
          "You get the same counselor, the same session length, and the same approach as anyone paying the standard fee.",
          "A review of 295 studies covering more than 30,000 people found that the working relationship between you and your counselor is one of the strongest predictors of progress ([Flückiger et al., 2018](https://doi.org/10.1037/pst0000172)). That relationship doesn’t depend on what you pay.",
        ],
      },
      {
        heading: "Who is sliding scale therapy for?",
        paragraphs: [
          "Sliding scale therapy is for anyone who wants counseling but would find the standard fee hard to manage.",
        ],
        list: [
          "Students and young adults starting out",
          "People between jobs or working part time",
          "Anyone whose insurance doesn’t cover counseling, or who has a high deductible",
          "Families supporting several people on one income",
          "Anyone who would otherwise go without support because of cost",
        ],
      },
      {
        heading: "Why do some people choose self-pay therapy instead of insurance?",
        paragraphs: [
          "Some people choose self-pay therapy because nothing is sent to an insurance company, so no diagnosis goes on an insurance claim.",
          "When therapy is billed to insurance, the insurer usually needs a diagnosis code before it will pay. When you pay for yourself, you and I also decide together how often to meet, without needing an insurer’s approval.",
          "The trade-off is cost, which is why the sliding scale and packages exist. You also have the right to a written Good Faith Estimate of expected charges before we begin.",
        ],
      },
      {
        heading: "How can I make therapy more affordable in Dallas?",
        paragraphs: [
          "You can make therapy more affordable by asking about a sliding scale, checking whether an HSA, FSA, or employee program can help, and choosing the session format that saves you the most time and travel.",
        ],
        list: [
          "Check whether your HSA or FSA can be used for counseling. Your plan administrator can confirm.",
          "Ask whether your employer offers an Employee Assistance Program with a few free sessions",
          "Choose online sessions to save on travel time and gas",
          "Read [how much therapy costs without insurance in Texas](/resources/therapy-cost-without-insurance/) and [how sliding scale therapy works](/resources/what-is-sliding-scale-therapy/)",
          "Compare options with [how to choose a therapist in Dallas](/resources/how-to-choose-a-therapist-dallas/)",
        ],
      },
      {
        heading: "Where do sliding scale sessions happen?",
        paragraphs: [
          "Sliding scale sessions happen outdoors in Irving or online anywhere in Texas, and the fee is the same either way.",
          "Walk and talk sessions usually happen at Sam Houston Trail Park in Irving, for people in [Dallas](/counseling-dallas-tx/), [Irving](/counseling-irving-tx/), and nearby cities. [Online sessions](/telehealth-counseling-texas/) are available anywhere in Texas.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you take insurance?",
        a: "No, I don’t take insurance. Sessions are self-pay only, so nothing is billed to an insurance company.",
      },
      {
        q: "How low does the sliding scale go?",
        a: "How low the sliding scale goes depends on your household income. Ask during your free 15-minute call, and we’ll agree on a fee before your first session.",
      },
      {
        q: "Can I use my HSA or FSA?",
        a: "Often, yes, you can use an HSA or FSA when counseling is for your mental health. Rules vary by plan, so check with your plan administrator first.",
      },
      {
        q: "Is self-pay therapy private?",
        a: "Self-pay therapy is confidential within the limits of the law, the same as any counseling. Paying privately also means no insurance company receives a claim or diagnosis.",
      },
      {
        q: "Do I need to show proof of income for the sliding scale?",
        a: "No, you don’t need to show proof of income. You tell me your household income, and we agree on a fee from there, with no paperwork or explanations needed.",
      },
    ],
  },
];

export const CITY_PAGES: ContentPage[] = [
  {
    path: "counseling-irving-tx",
    city: "Irving",
    related: [
      LINK.outdoor,
      LINK.anxiety,
      LINK.arabic,
      LINK.telehealth,
      LINK.walkBenefits,
      LINK.coppell,
      LINK.grandPrairie,
      LINK.farmersBranch,
    ],
    title: title("Counseling in Irving, TX"),
    description:
      "Counseling in Irving, TX with walk and talk sessions at Sam Houston Trail Park or online. English or Arabic. Self-pay, sliding scale, free 15-minute call.",
    eyebrow: "Irving, TX",
    heading: "Counseling in Irving, TX.",
    intro:
      "You can get counseling in Irving, TX by meeting me outdoors for walk and talk sessions, usually at Sam Houston Trail Park, or online from a private space anywhere in Texas. Irving is my home base, so there’s no office and no waiting room, just a conversation at a pace that suits you.",
    blocks: [
      {
        heading: "How do I find a counselor in Irving, TX?",
        paragraphs: [
          "The simplest way to find a counselor in Irving, TX is to shortlist two or three people whose approach, format, and fees fit your life, then book a free phone consultation with each one.",
          "Check that the counselor is licensed in Texas, meets in the way you prefer, and works with what you’re going through.",
          "How a short call feels matters as much as any checklist. Notice whether you felt listened to and whether you could picture talking openly with that person. My guide on [how to choose a therapist in Dallas](/resources/how-to-choose-a-therapist-dallas/) goes through these questions step by step.",
          "I’m an LPC Associate supervised by Don Zablosky, LPC-S. You can read what that means in [what an LPC Associate is in Texas](/resources/what-is-an-lpc-associate/).",
        ],
      },
      {
        heading: "Where do in-person counseling sessions take place in Irving?",
        paragraphs: [
          "In-person counseling sessions in Irving take place outdoors, usually at Sam Houston Trail Park, where we can walk at an easy pace or find a quiet spot to sit.",
          "Because I’m based in Irving, sessions here are the simplest to arrange. If a different park in Irving is easier for you to reach, we can talk about it during your free call.",
          "Whether you live in North Irving, South Irving, Valley Ranch, or near the Las Colinas offices, you can switch between outdoor and online sessions from week to week.",
        ],
      },
      {
        heading: "Why try walk and talk therapy close to home in Irving?",
        paragraphs: [
          "Walk and talk therapy close to home in Irving means less time in traffic and more of the hour spent on what you came to talk about.",
          "Walking side by side can also make hard topics a little easier to say out loud.",
          "If a park feels too public on a given day, we meet online instead. To weigh it up, read about the [benefits of walk and talk therapy](/resources/walk-and-talk-therapy-benefits/) and [whether outdoor counseling is right for you](/resources/is-outdoor-counseling-right-for-you/).",
        ],
      },
      {
        heading: "What can counseling in Irving help with?",
        paragraphs: [
          "Counseling in Irving can help with the everyday weight people carry, from worry and low mood to burnout, attention struggles, and big life changes.",
          "You don’t need a clear label for what you’re feeling before you reach out. Some of the things I often work on:",
        ],
        list: [
          "[Anxiety and stress](/anxiety-therapy-dallas/)",
          "[Depression and low mood](/depression-counseling-dallas/)",
          "[Adult ADHD](/adhd-therapy/)",
          "[Young adult transitions](/young-adult-counseling/)",
          "Burnout, relationship patterns, and self-esteem",
        ],
      },
      {
        heading: "Can I see an Arabic-speaking counselor in Irving?",
        paragraphs: [
          "Yes, counseling sessions in Irving are available in Arabic, English, or a mix of both, outdoors or online.",
          "Some feelings are easier to name in the language you grew up with, and switching languages mid-sentence is completely fine. Your culture, family, and values can be part of the conversation as much as you want them to be. Read more about [counseling in Arabic](/arabic-counseling/).",
        ],
      },
      {
        heading: "How much does therapy cost in Irving without insurance?",
        paragraphs: [
          "Counseling sessions with me in Irving are $100 each, and I’m self-pay only, so nothing goes through insurance.",
          "Packages lower the price of each session: 6 sessions for $540 or 8 sessions for $640, paid upfront. A sliding scale based on household income is available for people who need it, and we agree on your fee before the first session.",
          "Paying privately also means no insurance company needs a diagnosis for you to begin. For a wider look at prices across the state, see [how much therapy costs without insurance in Texas](/resources/therapy-cost-without-insurance/).",
        ],
      },
      {
        heading: "How do I start counseling in Irving?",
        paragraphs: [
          "Starting counseling in Irving begins with a free 15-minute phone call, and there’s no commitment to continue afterward.",
          "Counseling isn’t an emergency service. If you’re in crisis or thinking about harming yourself, please don’t wait for a consultation: call or text 988, or use these [crisis resources in Dallas–Fort Worth](/crisis/). Otherwise, the steps look like this:",
        ],
        list: [
          "Book a time online or call to set up your free 15-minute consultation",
          "Talk about what you’re looking for and whether we seem like a good fit",
          "Fill out the [new client forms](/new-clients/) before your first session",
          "Meet outdoors in Irving or online, whichever feels right that week",
        ],
      },
    ],
    faqs: [
      {
        q: "Where do in-person sessions in Irving take place?",
        a: "In-person sessions in Irving usually take place at Sam Houston Trail Park. If another quiet park is easier for you, we can choose one together. I don’t see clients in an office.",
      },
      {
        q: "Are sessions available in Arabic in Irving?",
        a: "Yes, sessions in Irving are available in English or Arabic, outdoors or online.",
      },
      {
        q: "What happens if it rains?",
        a: "If it rains, we move that session online, so the appointment still happens.",
      },
      {
        q: "Do I need to live in Irving?",
        a: "No, you don’t need to live in Irving. Anyone located in Texas can meet online, and people from nearby cities can meet outdoors in Irving too.",
      },
      {
        q: "Do I need a diagnosis or referral to start counseling in Irving?",
        a: "No, you don’t need a diagnosis or a referral. Because I’m self-pay, there’s no insurance company asking for one, and you can start with a free 15-minute call.",
      },
    ],
  },
  {
    path: "counseling-las-colinas-tx",
    city: "Las Colinas",
    related: [
      LINK.depression,
      LINK.holisticCounseling,
      LINK.telehealth,
      LINK.outdoor,
      LINK.burnout,
      LINK.coppell,
      LINK.grandPrairie,
      LINK.farmersBranch,
    ],
    title: title("Counseling in Las Colinas, TX"),
    description:
      "Counseling in Las Colinas, TX that fits a busy work week: online sessions or walk and talk in Irving. Help with burnout, anxiety, and stress. Self-pay.",
    eyebrow: "Las Colinas, TX",
    heading: "Counseling in Las Colinas, TX.",
    intro:
      "Counseling in Las Colinas, TX can fit around a full work week through online sessions from home or another private space anywhere in Texas, or walk and talk sessions close by in Irving. If work stress, burnout, or a constant sense of being “on” is wearing you down, you don’t have to wait for things to fall apart before reaching out.",
    blocks: [
      {
        heading: "How can I fit counseling into a busy Las Colinas work week?",
        paragraphs: [
          "Online counseling is usually the easiest way to fit therapy into a Las Colinas work week, because it removes the drive and parking from the hour.",
          "Las Colinas is home to many corporate offices, and long workdays can leave little room for anything else. A video session means you only need the time the session takes, plus a few minutes to settle in.",
          "When you’d rather step away from screens, walk and talk sessions happen nearby, usually at Sam Houston Trail Park in Irving. You can mix the two, online on heavy weeks and outdoors when you have more room to breathe.",
        ],
      },
      {
        heading: "Is online therapy private enough if I work in Las Colinas?",
        paragraphs: [
          "Online therapy can be private for Las Colinas professionals as long as you join from a room where no one can overhear you.",
          "Please don’t join from an open office, a shared conference room, or a phone booth with thin walls. Home is usually the most private choice.",
          "A parked car can work in a pinch, but never while driving. Headphones help, and closing work chat and email keeps the hour your own. More on [how telehealth counseling works in Texas](/telehealth-counseling-texas/).",
        ],
      },
      {
        heading: "How can counseling help with burnout and work stress in Las Colinas?",
        paragraphs: [
          "Counseling can help with burnout and work stress by giving you a regular space to notice how pressure shows up in your body, set limits that protect your evenings, and decide what needs to change.",
          "Work pressure is a common reason people look for support. In the American Psychological Association’s [2023 Work in America survey](https://www.apa.org/pubs/reports/work-in-america/2023-workplace-health-well-being), 77% of workers reported work-related stress in the last month.",
          "Part of the work is sorting out what you’re feeling. Burnout, anxiety, and low mood can look alike from the inside, and [burnout vs. depression](/resources/burnout-vs-depression/) explains some of the differences.",
          "We can also practice simple ways to calm a stressed body between meetings, like the [nervous system regulation techniques](/resources/nervous-system-regulation-techniques/) in the resources section.",
        ],
      },
      {
        heading: "What else can counseling in Las Colinas help with?",
        paragraphs: [
          "Beyond work stress, counseling in Las Colinas can help with worry, low mood, attention struggles, and the way all of it spills into home life.",
          "Some of the other things we can work on:",
        ],
        list: [
          "[Anxiety and overthinking](/anxiety-therapy-dallas/)",
          "[Low mood and exhaustion](/depression-counseling-dallas/)",
          "[ADHD and keeping up with demands at work](/adhd-therapy/)",
          "[A whole-person, mind-body approach](/holistic-counseling/)",
        ],
      },
      {
        heading: "How much does counseling cost in Las Colinas?",
        paragraphs: [
          "Counseling sessions are $100 each, and because I’m self-pay, neither your employer nor your insurer is involved.",
          "Packages of 6 sessions for $540 or 8 sessions for $640 lower the cost of each session if you plan to come regularly. A sliding scale based on household income is available too.",
          "If your health plan includes a health savings or flexible spending account, check with your plan administrator about whether counseling qualifies.",
        ],
      },
      {
        heading: "Should I use my employer’s EAP or pay for counseling myself?",
        paragraphs: [
          "An Employee Assistance Program (EAP) can be a good place to start if your employer offers one, since it may cover a few free sessions with one of its own providers.",
          "EAP counseling is often short term, and you usually see someone from the program’s network. Self-pay counseling lets you choose who you work with and continue for as long as it’s helpful.",
          "Either choice is reasonable. If you’d like to talk it through, bring it up during a [free counseling consultation](/resources/free-counseling-consultation/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I join an online session from my office?",
        a: "You can join from your office only if it’s a private room where no one can overhear you. Home is usually more private. A parked car can work too, but never while driving.",
      },
      {
        q: "Will my employer know I’m in counseling?",
        a: "Your employer won’t hear about it from me. I’m self-pay and don’t bill insurance, and counseling is confidential within the limits of the law. If you use your employer’s EAP instead, ask the program how it handles privacy.",
      },
      {
        q: "Where would we meet in person?",
        a: "In-person sessions for Las Colinas clients usually happen at Sam Houston Trail Park in Irving, or another quiet park we choose together.",
      },
      {
        q: "Can counseling help with ADHD at work?",
        a: "Yes, talk therapy can help adults with ADHD build routines and handle work demands with less stress. I don’t diagnose ADHD or prescribe medication, so if you’re looking for an evaluation, I can suggest where to start.",
      },
    ],
  },
  {
    path: "counseling-dallas-tx",
    city: "Dallas",
    related: [
      LINK.anxiety,
      LINK.depression,
      LINK.telehealth,
      LINK.cost,
      LINK.lpcVs,
      LINK.choose,
      LINK.coppell,
      LINK.grandPrairie,
      LINK.farmersBranch,
    ],
    title: title("Counseling in Dallas, TX"),
    description:
      "Counseling in Dallas, TX without the cross-town drive: online sessions or walk and talk just west in Irving. Self-pay, sliding scale, free 15-minute call.",
    eyebrow: "Dallas, TX",
    heading: "Counseling in Dallas, TX.",
    intro:
      "If you live in Dallas, you can start counseling without adding another drive across town: I offer online sessions anywhere in Texas and walk and talk sessions outdoors, usually at Sam Houston Trail Park in Irving, just west of Dallas. Sessions are available in English or Arabic, and the first step is a free 15-minute phone call.",
    blocks: [
      {
        heading: "How do I find a therapist in Dallas, TX?",
        paragraphs: [
          "To find a therapist in Dallas, TX, start by deciding what matters most to you, such as format, cost, language, or the kind of help you want, then talk with a few counselors before you commit.",
          "Dallas has a lot of counselors, and the long list can feel overwhelming when you’re already struggling. Narrowing by one or two must-haves makes the search smaller and calmer.",
          "Fit matters more than a long list of credentials. A short call can tell you a lot about whether someone’s style feels right. For a fuller checklist, see [how to choose a therapist in Dallas](/resources/how-to-choose-a-therapist-dallas/).",
        ],
      },
      {
        heading: "Can I do online counseling from anywhere in Dallas?",
        paragraphs: [
          "Yes, online counseling works from anywhere in Dallas, as long as you’re in Texas during each session and have a private space to talk.",
          "From Oak Cliff to Lake Highlands, online sessions let you talk from home in the time a session takes, with no traffic on either end. You’ll need a private space where you can speak freely and a steady connection.",
          "Learn more about [telehealth counseling anywhere in Texas](/telehealth-counseling-texas/), including how to get ready for a video session.",
        ],
      },
      {
        heading: "Is there walk and talk therapy near Dallas?",
        paragraphs: [
          "Walk and talk therapy for Dallas residents happens outdoors in Irving, just west of the city, usually at Sam Houston Trail Park.",
          "Some people like ending the day with a walk and a conversation instead of another hour on a screen. The pace is gentle, and we can sit on a bench instead of walking. If the weather turns, that session moves online.",
          "You can read more about how sessions work on the [walk and talk therapy in Dallas](/walk-and-talk-therapy-dallas/) page.",
        ],
      },
      {
        heading: "What should I ask a Dallas counselor during a free consultation?",
        paragraphs: [
          "A free consultation is the right time to ask how a counselor works, what sessions cost, and what the first few weeks would look like.",
          "My approach is person-centered, solution-focused, and holistic, which means we start from your goals, look for practical steps, and pay attention to how stress shows up in your body as well as your thoughts. Questions you might ask any counselor:",
        ],
        list: [
          "How would you describe your approach, in plain words?",
          "Have you worked with concerns like mine?",
          "Do you meet in person, online, or both?",
          "What does a session cost, and do you offer reduced rates?",
          "What happens if we’re not a good fit?",
        ],
      },
      {
        heading: "What can a Dallas counselor help with?",
        paragraphs: [
          "A counselor can help with anxiety, low mood, attention struggles, life transitions, and stress that lives in both the mind and the body.",
          "Here’s what I help with most often:",
        ],
        list: [
          "[Anxiety, worry, and stress](/anxiety-therapy-dallas/)",
          "[Depression and low mood](/depression-counseling-dallas/)",
          "[Adult ADHD](/adhd-therapy/)",
          "[Young adults and life transitions](/young-adult-counseling/)",
          "[Holistic, mind-body counseling](/holistic-counseling/)",
        ],
      },
      {
        heading: "What is the difference between an LPC Associate and other therapists in Dallas?",
        paragraphs: [
          "An LPC Associate is a counselor licensed by the Texas Behavioral Health Executive Council who provides counseling under the supervision of an LPC-S. Psychologists have different training and can do formal psychological testing, and psychiatrists are medical doctors who can prescribe medication.",
          "I’m an LPC Associate supervised by Don Zablosky, LPC-S. I offer talk therapy only, and I don’t diagnose ADHD or prescribe medication. [LPC vs. LPC Associate vs. psychologist](/resources/lpc-vs-lpc-associate-vs-psychologist/) explains the differences in more detail.",
        ],
      },
      {
        heading: "What does counseling cost in Dallas?",
        paragraphs: [
          "Counseling sessions with me are $100, with packages and a sliding scale available for Dallas clients.",
          "Because I’m self-pay, nothing is billed to insurance, so no insurance company needs a diagnosis for you to start. More on [affordable therapy in Dallas](/affordable-therapy-dallas/) and [what sliding scale therapy is](/resources/what-is-sliding-scale-therapy/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you have an office in Dallas?",
        a: "No, I don’t have an office in Dallas or anywhere else. Sessions happen online or outdoors, usually at Sam Houston Trail Park in Irving.",
      },
      {
        q: "Can I see you if I live in another part of Texas?",
        a: "Yes, you can meet online from anywhere in Texas, as long as you’re located in the state during each session.",
      },
      {
        q: "Do you offer counseling in Arabic in Dallas?",
        a: "Yes, sessions are available in Arabic or English, online or outdoors.",
      },
      {
        q: "Do I need a referral to start counseling in Dallas?",
        a: "No, you don’t need a referral from a doctor or anyone else. You can reach out directly and start with a free 15-minute phone call.",
      },
    ],
  },
  {
    path: "counseling-coppell-tx",
    city: "Coppell",
    related: [LINK.youngAdult, LINK.youngAdultGuide, LINK.telehealth, LINK.outdoor],
    title: title("Counseling in Coppell, TX"),
    description:
      "Counseling in Coppell, TX: online sessions from home or walk and talk in neighboring Irving. Support for adults and young adults. Self-pay, sliding scale.",
    eyebrow: "Coppell, TX",
    heading: "Counseling in Coppell, TX.",
    intro:
      "For people in Coppell, I offer counseling online from home or anywhere in Texas, and walk and talk sessions just south of Coppell in Irving. Sessions are available in English or Arabic for adults and young adults, and you can start with a free 15-minute phone call.",
    blocks: [
      {
        heading: "How do I find a counselor in Coppell, TX?",
        paragraphs: [
          "Finding a counselor in Coppell, TX usually comes down to three questions: can you get to them easily, can you afford them week after week, and do you feel comfortable talking with them.",
          "Coppell is a smaller city, so in-person options can mean looking a little beyond its borders. Online counseling widens the choice to anyone licensed in Texas, while neighboring Irving keeps in-person sessions close.",
          "A short consultation call is the easiest way to answer the comfort question. [What happens in a free counseling consultation?](/resources/free-counseling-consultation/) explains what to expect.",
        ],
      },
      {
        heading: "Can I meet with a counselor in person near Coppell?",
        paragraphs: [
          "Yes, in-person sessions for Coppell residents happen outdoors in neighboring Irving, usually at Sam Houston Trail Park.",
          "Some weeks we cover a lot of ground, and other weeks we sit on a bench for the whole hour. Many people find it easier to open up side by side than face to face across a desk.",
          "You can meet outdoors some weeks and online others, whatever works. See how [outdoor sessions work](/walk-and-talk-therapy-dallas/).",
        ],
      },
      {
        heading: "How does online counseling work from home in Coppell?",
        paragraphs: [
          "Online counseling from home in Coppell works by video, and you’ll need a private room, a reliable connection, and to be physically in Texas at session time.",
          "It saves a drive on days already packed with school pickups, practices, and errands. If others are home, headphones and a closed door go a long way. See [telehealth counseling anywhere in Texas](/telehealth-counseling-texas/) for more on getting set up.",
        ],
      },
      {
        heading: "How can I make time for counseling as a busy Coppell parent or caregiver?",
        paragraphs: [
          "Making time for counseling often starts with treating one hour a week as yours, the same way you would protect a doctor’s appointment or a child’s activity.",
          "Between school schedules, commutes, and caring for others, it’s easy to put your own needs last. Counseling is a set hour that belongs to you.",
          "We can work on stress, low mood, anxiety, or the pressure to hold everything together, without needing a crisis to justify the time.",
        ],
      },
      {
        heading: "Is counseling a good idea for young adults in Coppell?",
        paragraphs: [
          "Counseling can be a good idea for young adults in Coppell who feel anxious, stuck, or unsure about what comes next, because that stage brings a lot of change at once.",
          "You wouldn’t be alone in it. In 2022, 36.2% of adults aged 18 to 25 had any mental illness in the past year, the highest rate of any adult age group, according to the [National Institute of Mental Health](https://www.nimh.nih.gov/health/statistics/mental-illness).",
          "If you’re finishing school, starting college, or living at home while figuring out what’s next, [counseling for young adults](/young-adult-counseling/) can help with the anxiety and identity questions that often come with that stage. If you’re 18 or older, you can start on your own.",
        ],
      },
      {
        heading: "How can Coppell parents support a young adult who might need therapy?",
        paragraphs: [
          "Parents can support a young adult by sharing information about counseling, offering practical help like a ride or a quiet room, and leaving the final choice to them.",
          "Pressure tends to backfire, while a calm, open offer usually lands better. You’re welcome to call and ask how counseling works.",
          "If your young adult is 18 or older, they decide whether to start and give consent themselves. The guide [Is therapy right for my young adult?](/resources/therapy-for-young-adults/) covers signs to watch for and how to bring it up.",
        ],
      },
      {
        heading: "What can counseling in Coppell help with?",
        paragraphs: [
          "Counseling in Coppell can help with worry, low mood, focus, and the strain of balancing family, school, and work. Some common reasons people reach out:",
        ],
        list: [
          "[Anxiety and worry](/anxiety-therapy-dallas/)",
          "[Depression and feeling stuck](/depression-counseling-dallas/)",
          "[ADHD in adults](/adhd-therapy/)",
          "[Holistic, whole-person support](/holistic-counseling/)",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you meet in person in Coppell?",
        a: "In-person sessions for Coppell clients usually happen at Sam Houston Trail Park in neighboring Irving. Online sessions work from anywhere in Coppell, or anywhere in Texas.",
      },
      {
        q: "Can a parent call on behalf of a young adult?",
        a: "Yes, a parent can call to ask how counseling works. If your young adult is 18 or older, they choose whether to start and give consent themselves.",
      },
      {
        q: "How much does counseling cost?",
        a: "Counseling is $100 per session, or 6 sessions for $540 and 8 sessions for $640 as packages, with a sliding scale available based on household income. I’m self-pay only and don’t bill insurance.",
      },
      {
        q: "Can a college student keep sessions going while away at school?",
        a: "A college student can keep meeting online only while they’re physically in Texas. If school is out of state, sessions can pick up again during breaks at home, and I can help point them toward support near campus.",
      },
    ],
  },
  {
    path: "counseling-grand-prairie-tx",
    city: "Grand Prairie",
    related: [LINK.telehealth, LINK.arabic, LINK.anxiety, LINK.outdoor],
    title: title("Grand Prairie, TX Counseling"),
    description:
      "Counseling for Grand Prairie, TX across Dallas, Tarrant, and Ellis counties: online sessions or walk and talk in nearby Irving. Self-pay, sliding scale.",
    eyebrow: "Grand Prairie, TX",
    heading: "Counseling in Grand Prairie, TX.",
    intro:
      "You can get counseling in Grand Prairie, TX by meeting with me online from anywhere in Texas, or by coming up to Irving for a walk and talk session outdoors. Grand Prairie sits between Dallas and Fort Worth and stretches across Dallas, Tarrant, and Ellis counties, so having both options helps wherever you are in it.",
    blocks: [
      {
        heading: "How do I find a counselor in Grand Prairie, TX?",
        paragraphs: [
          "In a city as spread out as Grand Prairie, TX, it helps to choose your format first, online or in person, and then look for a counselor whose approach and fees fit you.",
          "A drive that looks short on a map can take a long time at rush hour on I-30 or I-20. If travel is going to be the hard part, online sessions keep counseling steady from week to week.",
          "Once you know the format, a few short consultation calls will tell you who feels easy to talk to. [How to choose a therapist in Dallas](/resources/how-to-choose-a-therapist-dallas/) has a checklist that works for the whole area.",
        ],
      },
      {
        heading: "Does online counseling work in every part of Grand Prairie?",
        paragraphs: [
          "Yes, online counseling works in every part of Grand Prairie, because what matters is being located in Texas during each session, not which county you live in.",
          "Because Grand Prairie covers a lot of ground, online sessions are often the simplest choice. All you need is a private space, a phone or computer, and a steady connection.",
          "Before we begin, we agree on a backup plan in case the connection drops. More details are on the [telehealth counseling anywhere in Texas](/telehealth-counseling-texas/) page.",
        ],
      },
      {
        heading: "Where can I do walk and talk therapy near Grand Prairie?",
        paragraphs: [
          "Walk and talk therapy for Grand Prairie residents happens in Irving, just north of the city, usually at Sam Houston Trail Park.",
          "We walk at an easy pace or sit, and you set the pace. You don’t need to be fit or sporty, and if the Texas heat or a storm makes it uncomfortable to be outside, we move that session online.",
          "Learn more about [walk and talk therapy in Dallas–Fort Worth](/walk-and-talk-therapy-dallas/).",
        ],
      },
      {
        heading: "How do I keep an online therapy session private at home?",
        paragraphs: [
          "To keep an online session private at home, pick a room where you won’t be overheard, use headphones, and let others know you need the hour undisturbed.",
          "Small steps make a big difference when you share a home with family or roommates:",
        ],
        list: [
          "Choose a room with a door, or a parked car if home is too full (never while driving)",
          "Use headphones so only you can hear my side of the conversation",
          "Close other apps and silence notifications",
          "Have a word or signal ready if someone walks in and you need to pause",
        ],
      },
      {
        heading: "What can counseling in Grand Prairie help with?",
        paragraphs: [
          "Counseling in Grand Prairie can help with constant worry, low mood, trouble focusing, and the stress of carrying family and cultural expectations.",
          "People come to counseling for many reasons. Some I work with often:",
        ],
        list: [
          "[Anxiety and constant worry](/anxiety-therapy-dallas/)",
          "[Low mood and depression](/depression-counseling-dallas/)",
          "[ADHD and focus](/adhd-therapy/)",
          "[Counseling in Arabic or English](/arabic-counseling/), with room for culture and family",
        ],
      },
      {
        heading: "Can I bring my culture and family into counseling?",
        paragraphs: [
          "Yes, your culture, family, and values are welcome in counseling, and you decide how much of them belongs in the conversation.",
          "Living between two cultures, or carrying expectations from home, can shape how stress shows up. I stay curious about your story rather than assuming I already know it.",
          "Sessions are available in English or Arabic. [Choosing a counselor when language and culture matter](/resources/choosing-a-counselor-language-culture/) offers questions to ask any counselor.",
        ],
      },
      {
        heading: "How much does counseling cost in Grand Prairie?",
        paragraphs: [
          "Counseling sessions are $100 each, and packages of 6 sessions for $540 or 8 sessions for $640 lower the price of each session.",
          "If cost is a barrier, ask about the sliding scale during your free call. It’s based on household income. I’m self-pay only, so there’s no insurance paperwork. Read [what sliding scale therapy is](/resources/what-is-sliding-scale-therapy/) to see how it works.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does it matter which county I live in?",
        a: "No, your county doesn’t matter. What matters is being located in Texas during each session, whether you’re in the Dallas, Tarrant, or Ellis County part of Grand Prairie.",
      },
      {
        q: "Do you offer in-person sessions in Grand Prairie?",
        a: "In-person sessions for Grand Prairie clients happen outdoors in nearby Irving, usually at Sam Houston Trail Park. Online sessions are available anywhere in Grand Prairie.",
      },
      {
        q: "Is online counseling private?",
        a: "Online counseling can be private when you choose a room where you won’t be overheard, use headphones, and close other apps. We go over privacy before your first session.",
      },
      {
        q: "What happens if my internet drops during a session?",
        a: "If the connection drops, we follow the backup plan we agreed on before your first session, so the session isn’t simply lost. We also agree on an emergency contact ahead of time, just in case.",
      },
    ],
  },
  {
    path: "counseling-farmers-branch-tx",
    city: "Farmers Branch",
    related: [LINK.holisticCounseling, LINK.depression, LINK.arabic, LINK.telehealth],
    title: title("Farmers Branch, TX Counseling"),
    description:
      "Counseling for Farmers Branch, TX: online sessions from home or walk and talk outdoors in nearby Irving. English or Arabic. Self-pay, free 15-minute call.",
    eyebrow: "Farmers Branch, TX",
    heading: "Counseling in Farmers Branch, TX.",
    intro:
      "If you live in Farmers Branch, you can choose between online counseling from home and walk and talk sessions outdoors in nearby Irving, usually at Sam Houston Trail Park. You can use both, depending on the week, in English or Arabic.",
    blocks: [
      {
        heading: "How do I find a counselor in Farmers Branch, TX?",
        paragraphs: [
          "A good first step in finding a counselor in Farmers Branch, TX is to write down what you want help with and how you’d like to meet, then look for someone who matches both.",
          "It can be as simple as “I want to feel less on edge” and “I’d rather not drive after work.” Clear wants like these make it easier to spot the right fit when you read profiles or make calls.",
          "If you’re not sure what to expect from the first meeting, [what happens in a first counseling session](/resources/first-counseling-session/) walks through it.",
        ],
      },
      {
        heading: "Should I choose online or walk and talk counseling in Farmers Branch?",
        paragraphs: [
          "Online counseling suits Farmers Branch residents who want the easiest fit around work and family, while walk and talk sessions suit people who want movement and fresh air in the hour.",
          "Online sessions mean no drive and no parking, just a private space and a connection. Walk and talk sessions take place outdoors in Irving, a short trip away.",
          "You don’t have to pick one forever. You can switch between them as your weeks, the weather, and your energy change. [Is outdoor counseling right for you?](/resources/is-outdoor-counseling-right-for-you/) can help you decide.",
        ],
      },
      {
        heading: "How can counseling help when life in North Dallas feels nonstop?",
        paragraphs: [
          "Counseling gives you a regular pause to notice what you’re carrying, which can be hard to find when everything around you moves fast.",
          "Living close to some of the busiest parts of North Dallas can make it hard to slow down. Traffic, long hours, and full calendars add up quietly.",
          "In that pause, we can look at worry, low mood, burnout, or big life changes, and figure out which pieces you can set down.",
        ],
      },
      {
        heading: "What is a mind-body approach to counseling?",
        paragraphs: [
          "A mind-body approach to counseling pays attention to how stress shows up in your body, like a tight chest, shallow breathing, or poor sleep, as well as in your thoughts.",
          "Alongside talking, we might practice slowing your breath, noticing your feet on the ground, or other simple grounding skills you can use on your own between sessions.",
          "It’s still talk therapy, just with room for the whole person. Read more about [holistic counseling in Dallas–Fort Worth](/holistic-counseling/) and [nervous system regulation techniques](/resources/nervous-system-regulation-techniques/).",
        ],
      },
      {
        heading: "Can my language and culture be part of counseling in Farmers Branch?",
        paragraphs: [
          "Yes, sessions are available in English or Arabic, and your culture, family, and values are welcome in the conversation.",
          "You can stay in one language or move between both. You won’t have to explain the basics of where you come from before we can talk about what matters.",
          "Read more about [counseling in Arabic](/arabic-counseling/), or find terms in both languages in the [counseling glossary in English and Arabic](/glossary/).",
        ],
      },
      {
        heading: "What can a Farmers Branch counselor help with?",
        paragraphs: [
          "A counselor can help Farmers Branch residents with worry, low energy, stress, and the uncertainty of finding your footing. Here’s what I help with:",
        ],
        list: [
          "[Worry and anxiety](/anxiety-therapy-dallas/)",
          "[Depression and low energy](/depression-counseling-dallas/)",
          "[Burnout and stress, with a mind-body approach](/holistic-counseling/)",
          "[Young adults finding their footing](/young-adult-counseling/)",
        ],
      },
      {
        heading: "How much does counseling cost in Farmers Branch?",
        paragraphs: [
          "Counseling sessions are $100 each, and reduced rates based on household income are available if that’s a stretch.",
          "Ask about reduced rates on your free 15-minute call. You don’t have to explain your circumstances.",
          "Paying privately means no insurance paperwork and no diagnosis sent to an insurer. The first step is just a short phone call, with no commitment. For more, see [affordable therapy in Dallas](/affordable-therapy-dallas/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Where would we meet in person?",
        a: "Outdoor sessions take place in Irving, most often at Sam Houston Trail Park, though we can pick another quiet park together. If you’d rather not meet outside, online sessions are always an option.",
      },
      {
        q: "Can I switch between outdoor and online sessions?",
        a: "Yes, you can mix outdoor and online sessions based on the weather and your schedule.",
      },
      {
        q: "Do you take insurance?",
        a: "No, I don’t take insurance. I’m self-pay, with a sliding scale and session packages available.",
      },
      {
        q: "Do I have to commit to a set number of sessions?",
        a: "No, you don’t have to commit to a set number of sessions. You can pay one session at a time, and packages are an option only if you want a lower price per session.",
      },
    ],
  },
];

export const ARTICLES: ContentPage[] = [
  {
    path: "resources/free-counseling-consultation",
    related: [
      LINK.associate,
      LINK.outdoor,
      LINK.telehealth,
      LINK.firstSession,
      LINK.choose,
      LINK.newClients,
      LINK.aboutSarah,
    ],
    title: title("Free Counseling Consultation"),
    description:
      "What to expect from a free 15-minute counseling consultation, what you can ask, and what you don’t need to share yet.",
    eyebrow: "Getting started",
    heading: "What happens in a free counseling consultation?",
    intro:
      "A free counseling consultation is a short phone call to see whether a counselor might be a good fit for you before you book a session. It isn’t a counseling session, and you don’t have to commit to anything. Mine is a free 15-minute call.",
    takeaways: [
      "A free consultation is a short call to check fit, not a therapy session.",
      "You don’t need to tell your whole story or have the right words.",
      "It’s a good time to ask about license, supervision, fees, and confidentiality.",
      "There’s no obligation to book, and it’s okay if it isn’t a fit.",
    ],
    blocks: [
      {
        heading: "What is a free counseling consultation?",
        paragraphs: [
          "A free counseling consultation is a brief, no-cost conversation where you and a counselor see whether working together makes sense.",
          "It’s different from therapy. The goal is to check practical details and get a feel for the person, not to work through what’s bringing you in.",
        ],
      },
      {
        heading: "What happens during a free consultation call?",
        paragraphs: [
          "During a free consultation call, you and the counselor usually talk briefly about what you’re looking for, how sessions would work, fees, and next steps.",
        ],
        list: [
          "What you’re looking for, in as much or as little detail as you’d like",
          "Whether you’d prefer [outdoor sessions](/walk-and-talk-therapy-dallas/) or [telehealth](/telehealth-counseling-texas/), and English or Arabic",
          "Fees, including how reduced rates work",
          "What the next step would be, if we both think it’s a good fit",
        ],
      },
      {
        heading: "Do I need to prepare for a counseling consultation?",
        paragraphs: [
          "You don’t need to prepare for a counseling consultation, tell your whole story, or have the right words for what’s going on.",
          "“I’ve been feeling off and I’d like to talk to someone” is a perfectly good place to start.",
          "If it helps, you can jot down two or three questions beforehand, like the ones below.",
        ],
      },
      {
        heading: "What questions should I ask in a therapy consultation?",
        paragraphs: [
          "Useful questions for a therapy consultation cover the counselor’s license and supervision, what sessions look like, cost, cancellations, and confidentiality.",
        ],
        list: [
          "What are your license and training, and do you work under supervision?",
          "What would our first session look like?",
          "How much will sessions cost, and do you offer reduced rates?",
          "What happens if I need to cancel?",
          "What are the limits of confidentiality?",
        ],
      },
      {
        heading: "What does it mean if a counselor works under supervision?",
        paragraphs: [
          "A counselor who works under supervision, such as an LPC Associate in Texas, is licensed and practices with an approved supervisor who oversees their counseling work.",
          "[What is an LPC Associate?](/resources/what-is-an-lpc-associate/) explains the license in plain language.",
        ],
      },
      {
        heading: "What happens after a free consultation?",
        paragraphs: [
          "After a free consultation, you decide whether to book a first session, take some time to think, or keep looking, with no obligation either way.",
          "If you book, the next steps are usually a few forms and a written Good Faith Estimate. You can preview the forms on the [new client page](/new-clients/), and [what happens in a first counseling session](/resources/first-counseling-session/) walks through the first meeting.",
        ],
      },
      {
        heading: "What if the counselor isn’t a good fit?",
        paragraphs: [
          "If a counselor isn’t a good fit, that’s okay, and finding the right counselor sometimes takes more than one call.",
          "If I’m not the right fit, I’m glad to help point you toward other options. [How to choose a therapist in Dallas](/resources/how-to-choose-a-therapist-dallas/) has more on what to look for.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a free consultation the same as a therapy session?",
        a: "No. A free consultation is a short call to check fit, and counseling itself starts in the first session.",
      },
      {
        q: "Do I have to book a session after the call?",
        a: "No. There’s no obligation to book, and you can take as much time as you need to decide.",
      },
    ],
  },
  {
    path: "resources/what-is-an-lpc-associate",
    related: [
      LINK.consultation,
      LINK.arabic,
      LINK.outdoor,
      LINK.lpcVs,
      LINK.glossary,
      LINK.lpcVsLcsw,
      LINK.aboutSarah,
    ],
    title: title("What Is an LPC Associate?"),
    description:
      "A plain-language explanation of what an LPC Associate is in Texas, what supervision means, and how to verify a counselor’s license.",
    eyebrow: "Understanding counseling",
    heading: "What is an LPC Associate in Texas?",
    intro:
      "An LPC Associate is a counselor licensed by the Texas Behavioral Health Executive Council who provides counseling under the supervision of a Licensed Professional Counselor–Supervisor (LPC-S). It’s the license a counselor holds after finishing a graduate degree in counseling, while completing supervised experience toward the full LPC license.",
    takeaways: [
      "An LPC Associate holds a Texas counseling license and practices under an approved supervisor.",
      "Associates complete supervised experience before upgrading to a full LPC license.",
      "You can verify any Texas counselor’s license online.",
      "NCC is a national certification, separate from a state license.",
    ],
    blocks: [
      {
        heading: "What does LPC Associate mean?",
        paragraphs: [
          "LPC Associate stands for Licensed Professional Counselor Associate, a Texas license for counselors who have a graduate degree in counseling and practice under an approved supervisor.",
          "It’s a state-issued license, not a student role.",
        ],
      },
      {
        heading: "How does someone become an LPC Associate in Texas?",
        paragraphs: [
          "To become an LPC Associate, a counselor finishes a graduate degree in counseling, passes the required exams, and applies to the state board with an approved supervisor already lined up.",
          "The Texas Behavioral Health Executive Council lists what an application needs ([BHEC LPC Associate requirements](https://bhec.texas.gov/texas-state-board-of-examiners-of-professional-counselors/applying-for-an-lpc-license/lpc-associate/)):",
        ],
        list: [
          "A master’s degree or higher in counseling or a counseling-related field. Students who started their program on or after August 1, 2017 need at least 60 semester hours of coursework ([22 TAC §681.82](https://www.law.cornell.edu/regulations/texas/22-Tex-Admin-Code-SS-681-82)).",
          "Official transcripts sent straight from the school to the board, plus proof of a supervised practicum.",
          "A passing score on a national counseling exam, either the National Counselor Examination (NCE) or the National Clinical Mental Health Counseling Examination (NCMHCE).",
          "A certificate for the Texas Jurisprudence Examination, which covers state laws and rules for counselors.",
          "A signed supervisory agreement with a board-approved LPC-S, plus fingerprinting for a background check.",
        ],
      },
      {
        heading: "What does supervision mean for an LPC Associate?",
        paragraphs: [
          "Supervision means the associate works with an approved LPC Supervisor (LPC-S) who oversees their counseling work. An associate can’t practice independently ([BHEC](https://bhec.texas.gov/texas-state-board-of-examiners-of-professional-counselors/applying-for-an-lpc-license/lpc-associate/)).",
          "I’m an LPC Associate (#104391), and my supervisor is Don Zablosky, LPC-S.",
        ],
      },
      {
        heading: "How long does someone stay an LPC Associate in Texas?",
        paragraphs: [
          "A counselor stays an associate for at least 18 months, until they finish the supervised hours required for a full LPC license.",
          "To move to a full LPC license, an associate completes at least 3,000 hours of supervised experience over at least 18 months, including at least 1,500 hours of direct counseling ([BHEC supervision FAQs](https://bhec.texas.gov/tbhec/supervision-faqs/); [22 TAC §681.92](https://www.law.cornell.edu/regulations/texas/22-Tex-Admin-Code-SS-681-92)).",
        ],
      },
      {
        heading: "What is the difference between an LPC Associate and an LPC?",
        paragraphs: [
          "The main difference between an LPC Associate and an LPC is that an associate practices under supervision while completing required experience, and an LPC has finished it.",
          "[LPC vs. LPC Associate vs. psychologist](/resources/lpc-vs-lpc-associate-vs-psychologist/) compares all three titles.",
        ],
      },
      {
        heading: "How do I check a counselor’s license in Texas?",
        paragraphs: [
          "You can look up a Texas counselor’s license through the state’s online license search, using the “Verify license” link at the bottom of this page.",
          "Licenses are issued by the [Texas Behavioral Health Executive Council](https://bhec.texas.gov/). It’s reasonable to ask any counselor about their license and training.",
        ],
      },
      {
        heading: "Can I ask a counselor about their supervision?",
        paragraphs: [
          "You can ask any counselor about their license and supervision, and a good counselor will answer plainly.",
          "A [free consultation](/resources/free-counseling-consultation/) is a natural time to ask. [How to choose a therapist in Dallas](/resources/how-to-choose-a-therapist-dallas/) lists other questions worth asking.",
        ],
      },
      {
        heading: "What does NCC mean after a counselor’s name?",
        paragraphs: [
          "NCC stands for National Certified Counselor, a certification from the National Board for Certified Counselors (NBCC).",
          "It’s separate from a state license. My NCC number is 1746909.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is an LPC Associate still a student?",
        a: "No. An LPC Associate has finished a graduate degree in counseling and holds a Texas license.",
      },
      {
        q: "Can an LPC Associate see clients online?",
        a: "Yes, an LPC Associate can see clients online within the rules of the license and supervision. I offer telehealth to clients located anywhere in Texas.",
      },
    ],
  },
  {
    path: "resources/is-outdoor-counseling-right-for-you",
    related: [LINK.outdoor, LINK.telehealth, LINK.consultation],
    title: title("Is Outdoor Counseling for You?"),
    description:
      "Questions to help you decide between outdoor counseling and telehealth, including privacy, weather, comfort, and getting to the park.",
    eyebrow: "Choosing a format",
    heading: "Is outdoor counseling right for you?",
    intro:
      "Outdoor counseling is right for you if you’d feel comfortable talking in a park, can get there and move around easily, and don’t mind adjusting for the weather. If privacy or getting to a park would hold you back, telehealth may suit you better. Neither choice is the right one for everyone.",
    takeaways: [
      "Outdoor counseling means meeting in a park instead of an office, walking or sitting.",
      "The biggest questions are privacy, comfort in the heat or pollen, and whether you can get to the park easily.",
      "A park is public, so complete privacy can’t be guaranteed.",
      "Your choice isn’t permanent. You can switch between outdoor and telehealth sessions.",
    ],
    blocks: [
      {
        heading: "How do I know if outdoor counseling is right for me?",
        paragraphs: [
          "Outdoor counseling is likely a good fit if you’d feel at ease talking in a public park and the weather and travel wouldn’t get in the way.",
          "These questions can help you decide:",
        ],
        list: [
          "Would being in a public place make it harder to talk openly?",
          "Could you get to a park and move around comfortably there?",
          "How do you handle heat, cold, pollen, or sun?",
          "Would you rather walk, sit, or have the choice each time?",
          "Is there anyone you’d be concerned about running into nearby?",
        ],
      },
      {
        heading: "Is outdoor counseling private enough?",
        paragraphs: [
          "Outdoor counseling is confidential in the same way as any counseling, but a park is a public place, so complete privacy can’t be guaranteed.",
          "Choosing a quieter spot and being able to pause or move can help. It’s still worth thinking about before you decide, especially if you live or work near the park.",
          "If the chance of being overheard or seen would make it hard to talk, that’s a good reason to choose telehealth instead.",
        ],
      },
      {
        heading: "Do I have to walk during outdoor counseling?",
        paragraphs: [
          "No, outdoor counseling doesn’t require walking; you can sit on a bench or in the shade for part or all of the session.",
          "Some people like the steady rhythm of walking. Others prefer to sit and take in the view. You can choose each time, depending on how you feel that day.",
        ],
      },
      {
        heading: "What if heat, pollen, or sun bother me?",
        paragraphs: [
          "If heat, pollen, or sun bother you, outdoor sessions can be planned around them, moved earlier in the day, or switched to telehealth.",
          "North Texas summers are hot, and spring and fall can bring heavy pollen. Shade, water, and earlier times help. On days when the weather isn’t safe or comfortable, a video session is the simplest answer.",
        ],
      },
      {
        heading: "Why do some people prefer counseling outdoors?",
        paragraphs: [
          "Some people prefer counseling outdoors because moving and being in nature help them relax and think more clearly.",
          "Time in green spaces has been linked with lower stress ([Hunter et al., 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6458297/)), and some people find it easier to talk while walking side by side. You can read more about [the benefits of walk and talk therapy](/resources/walk-and-talk-therapy-benefits/).",
        ],
      },
      {
        heading: "Is telehealth a better choice than outdoor counseling?",
        paragraphs: [
          "Telehealth can be a better choice than outdoor counseling if you want more privacy, live far from the park, or have a schedule that makes travel hard.",
          "[Telehealth counseling](/telehealth-counseling-texas/) lets you talk from home or another private space anywhere in Texas. The counseling itself is the same. Only the setting changes.",
        ],
      },
      {
        heading: "Can I switch between outdoor counseling and telehealth?",
        paragraphs: [
          "Yes, your choice doesn’t have to be permanent, and you can move between outdoor and telehealth sessions.",
          "With me, you can switch a session to telehealth at any time, whether because of the weather or just because you’d prefer it that day.",
          "If you’d like to try it, read [what walk and talk therapy is](/resources/what-is-walk-and-talk-therapy/), see how [walk and talk therapy in Dallas–Fort Worth](/walk-and-talk-therapy-dallas/) works, or start with a [free consultation](/resources/free-counseling-consultation/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Is outdoor counseling the same as walk and talk therapy?",
        a: "Outdoor counseling and walk and talk therapy usually mean the same thing: counseling held in a park instead of an office. Walk and talk puts more focus on walking, but sitting is always an option.",
      },
      {
        q: "What happens if it rains on the day of my session?",
        a: "If it rains or storms, the session moves to telehealth by video, so you don’t lose the appointment.",
      },
    ],
  },
  {
    path: "resources/choosing-a-counselor-language-culture",
    related: [
      LINK.arabic,
      LINK.muslimFaith,
      LINK.familyBoundaries,
      LINK.consultation,
      LINK.telehealth,
      LINK.glossary,
    ],
    title: title("Culture & Language in Therapy"),
    description:
      "Questions to ask when you’re looking for a counselor who respects your language, culture, faith, and family.",
    eyebrow: "Choosing a counselor",
    heading: "Choosing a counselor when language and culture matter.",
    intro:
      "When language and culture matter to you, the simplest way to choose a counselor is to ask about them in a short consultation before you begin. A good first conversation should leave you feeling respected, not like you have to explain or defend who you are.",
    takeaways: [
      "You can ask any counselor how they approach language, culture, faith, and family before you begin.",
      "Talking in the language you feel most at home in can make it easier to say what you mean.",
      "Sharing a background with your counselor is optional. Feeling heard and respected matters most.",
      "A good counselor stays curious about your story instead of assuming.",
      "Ask how confidentiality works, especially if you might know people in common.",
    ],
    blocks: [
      {
        heading: "Why does language matter in counseling?",
        paragraphs: [
          "Language matters in counseling because many people find it easier to describe feelings, memories, and family life in the language they grew up with. Being able to switch languages can also help when a word in one language says something the other can’t.",
          "Research points the same way. A 2006 meta-analysis of 76 studies found that culturally adapted mental health interventions conducted in clients’ native language, when that language wasn’t English, were twice as effective as those conducted in English ([Griner & Smith, 2006](https://pubmed.ncbi.nlm.nih.gov/22122142/)).",
          "That doesn’t mean counseling only works in your first language. It means it’s fair to ask for the language that feels most natural to you.",
        ],
      },
      {
        heading: "What should I ask a counselor about culture and language?",
        paragraphs: [
          "Good questions to ask a counselor about culture and language include which languages they offer, how they approach faith and family, and what they do when they don’t understand something about your background. Their answers show whether they’ll stay curious or make assumptions.",
          "A [free counseling consultation](/resources/free-counseling-consultation/) is a good time to ask. For more general tips, see [how to choose a therapist in Dallas](/resources/how-to-choose-a-therapist-dallas/).",
          "Questions you might want to ask:",
        ],
        list: [
          "Do you offer sessions in my language, and can I choose which language to use?",
          "Can we switch between languages in the same session?",
          "How do you approach culture, faith, and family in your work?",
          "What will you do if you don’t understand something about my background?",
          "How do you handle confidentiality, especially if we know people in common?",
        ],
      },
      {
        heading: "Do I need a counselor who shares my background?",
        paragraphs: [
          "You don’t need a counselor who shares your background, though some people prefer one. What often matters most is whether you feel heard and whether the counselor stays curious instead of assuming.",
          "Some people want a counselor from their own culture. Others would rather have someone from outside their community, sometimes for privacy. Either preference is okay.",
          "Feeling understood is part of the working relationship between you and your counselor, and research consistently links that relationship with how well counseling goes ([Flückiger et al., 2018](https://doi.org/10.1037/pst0000172)).",
        ],
      },
      {
        heading: "What if faith is part of my culture?",
        paragraphs: [
          "If faith is part of your culture, you can ask a counselor how they approach it and decide for yourself how much it comes into your sessions. A counselor should follow your lead.",
          "This guide on [how to find a therapist who respects your Muslim faith](/resources/therapist-who-respects-muslim-faith/) covers questions to ask in more detail.",
        ],
      },
      {
        heading: "Can I get counseling in Arabic in Dallas–Fort Worth?",
        paragraphs: [
          "I’m Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S, and I offer [counseling in Arabic](/arabic-counseling/) and English through walk and talk sessions in Dallas–Fort Worth or [telehealth anywhere in Texas](/telehealth-counseling-texas/).",
          "I welcome clients of every culture, language, faith or none, and background. I won’t assume I already know your story, and I welcome being corrected when I get something wrong.",
          "If you’d like to see common counseling words in both languages before you start, the [counseling glossary in English and Arabic](/glossary/) may help.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I switch between English and Arabic during a session?",
        a: "With a bilingual counselor, you can usually switch languages whenever it helps you say what you mean. Ask about it during your first consultation.",
      },
      {
        q: "What if my family doesn’t believe in counseling?",
        a: "You can still choose counseling for yourself. As an adult, your sessions are confidential within the limits of the law, and you decide what to share with family.",
      },
    ],
  },
  {
    path: "resources/therapist-who-respects-muslim-faith",
    published: "2026-11-18",
    related: [
      LINK.arabic,
      LINK.holisticCounseling,
      LINK.selfCare,
      LINK.attachment,
      LINK.adhd,
      LINK.abuseRecovery,
      LINK.culture,
      LINK.consultation,
    ],
    title: title("How to Find a Muslim Therapist"),
    description:
      "How to find a therapist who respects your Muslim faith and culture, what holistic, mind-body counseling looks like, and what research says about it.",
    eyebrow: "Choosing a counselor",
    heading: "How do I find a therapist who respects my Muslim faith?",
    intro:
      "To find a therapist who respects your Muslim faith, start with a short consultation and ask how the counselor approaches faith, culture, and the whole person, including the body. You don’t need a counselor who shares your religion, but you deserve one who respects your values, stays curious, and lets you decide how much faith comes into your sessions.",
    takeaways: [
      "A short consultation is the easiest way to learn how a counselor approaches faith and culture.",
      "You don’t need a counselor who shares your religion. Respect and curiosity matter most.",
      "You decide how much faith comes into your sessions.",
      "Holistic counseling looks at thoughts, emotions, the body, relationships, and values.",
      "Counseling isn’t religious guidance. For questions about religious practice, an imam or scholar you trust is the right person to ask.",
    ],
    blocks: [
      {
        heading: "Do I need a Muslim therapist?",
        paragraphs: [
          "You don’t need a Muslim therapist to get counseling that respects your faith, though some people prefer one. What matters most is whether you feel respected and heard, and whether the counselor asks instead of assuming.",
          "Some people want a counselor who shares their faith or background. Others prefer someone outside their community, sometimes for privacy. Both are okay.",
          "For more on finding the right fit, see [choosing a counselor when language and culture matter](/resources/choosing-a-counselor-language-culture/).",
        ],
      },
      {
        heading: "What should I ask a therapist about faith in a consultation?",
        paragraphs: [
          "In a consultation, ask how the therapist approaches faith and culture, whether they’ll follow your lead, and how they handle confidentiality. Their answers will tell you a lot about whether you’ll feel comfortable.",
          "[What happens in a free counseling consultation](/resources/free-counseling-consultation/) explains what a short first call usually covers. Questions you might ask:",
        ],
        list: [
          "How do you approach faith and culture? Will you follow my lead?",
          "Do you work with the body as well as thoughts and feelings?",
          "What do grounding or calming practices look like in your sessions?",
          "Can sessions be outdoors, by telehealth, or in Arabic?",
          "How do you handle confidentiality and its limits?",
        ],
      },
      {
        heading: "What does holistic, mind-body counseling look like?",
        paragraphs: [
          "Holistic, mind-body counseling looks at the whole picture of your life: thoughts, emotions, the body, relationships, and the values and meaning that guide you, including faith if it matters to you. It treats stress as something that shows up in the body as well as the mind.",
          "Stress doesn’t only live in your thoughts. It can show up as a tight chest, shallow breathing, poor sleep, or feeling on edge.",
          "In practice, holistic counseling can include grounding approaches such as slow breathing, noticing what you see and hear around you, gentle movement, and time outdoors. These are tools to help your nervous system settle so it’s easier to think clearly and talk about what’s hard.",
          "Read more in [what is holistic therapy?](/resources/what-is-holistic-therapy/) or about [holistic counseling in Dallas–Fort Worth](/holistic-counseling/).",
        ],
      },
      {
        heading: "What everyday struggles can holistic counseling address?",
        paragraphs: [
          "A holistic approach can reach into everyday struggles like ADHD-related stress, attachment and relationship patterns, healing after an abusive relationship, and self-care. Each of these has its own guide:",
        ],
        list: [
          "[What are some creative strategies for adults with ADHD?](/resources/adhd-creative-strategies/)",
          "[How do attachment styles affect relationships?](/resources/attachment-styles-in-relationships/)",
          "[How do you heal after an abusive relationship?](/resources/healing-after-an-abusive-relationship/)",
          "[What does self-care for mental health actually look like?](/resources/self-care-for-mental-health/)",
        ],
      },
      {
        heading: "What does research say about mind-body approaches to mental health?",
        paragraphs: [
          "Major health agencies point to simple mind-body habits for mental health, including regular movement, steady sleep, relaxing practices like slow breathing, and time in nature. Results vary from person to person.",
          "The [National Institute of Mental Health](https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health) lists regular exercise, making sleep a priority, and relaxing activities such as breathing exercises among the basic ways to care for your mental health. It notes that just 30 minutes of walking every day can boost your mood and improve your health, and that small amounts of exercise add up.",
          "The [National Center for Complementary and Integrative Health](https://www.nccih.nih.gov/health/mind-and-body-practices) studies mind and body practices like meditation, yoga, and relaxation techniques. Research on them is growing, and results vary from person to person.",
          "The [American Psychological Association](https://www.apa.org/monitor/2020/04/nurtured-nature) has also reported research linking time in nature with lower stress and better attention. That’s part of why some people like walking or sitting outside while they talk.",
        ],
      },
      {
        heading: "Is biohacking good for mental health?",
        paragraphs: [
          "Biohacking trends like cold plunges, sleep trackers, wearables, and supplements get a lot of attention, but the habits with the strongest research are often the simplest: sleep, movement, breathing, and connection. Counseling supports your well-being, but it doesn’t replace medical care.",
          "Cold-water immersion is a good example of where the research stands. A [2025 systematic review in PLOS One](https://doi.org/10.1371/journal.pone.0317615) pooled 11 randomized trials with 3,177 participants and found lower stress 12 hours after cold-water immersion, along with some improvement in sleep and quality of life.",
          "The authors called the evidence limited because there were few trials, small samples, and little diversity in who was studied, and the benefits were mostly short-term. Cold water also carries real risks, especially for people with heart conditions, so talk with your doctor before trying it.",
        ],
      },
      {
        heading: "Can faith and counseling work together?",
        paragraphs: [
          "Many people find counseling fits alongside prayer, family, and community. A counselor isn’t a religious authority, and counseling doesn’t replace religious guidance.",
          "For questions about religious practice, an imam or scholar you trust is the right person to ask.",
        ],
      },
      {
        heading: "Where can I find holistic counseling in Dallas–Fort Worth or online in Texas?",
        paragraphs: [
          "I’m Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S, and I offer holistic, grounding counseling outdoors in Dallas–Fort Worth parks or by telehealth for clients located in Texas at the time of each session, in English or Arabic. I’m based in Irving, and I welcome clients of every faith or none.",
          "You can read more about [walk and talk therapy in Dallas–Fort Worth](/walk-and-talk-therapy-dallas/), [telehealth counseling anywhere in Texas](/telehealth-counseling-texas/), and [counseling in Arabic](/arabic-counseling/).",
          "Sessions are $100, with packages and reduced rates available, and I’m self-pay only. A free 15-minute phone consultation is a good place to ask any of the questions above.",
          "Outdoor sessions happen in public parks, so complete privacy can’t be guaranteed, and telehealth is always an option.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is holistic counseling?",
        a: "Holistic counseling looks at the whole person: thoughts, emotions, the body, relationships, and the values that give life meaning. It often includes practical tools for calming the body alongside talking.",
      },
      {
        q: "What are grounding techniques?",
        a: "Grounding techniques are simple ways to bring your attention back to the present moment, such as slow breathing, noticing five things you can see, or feeling your feet on the ground. They can help when you feel anxious or overwhelmed.",
      },
      {
        q: "Is it okay to talk about my faith in counseling?",
        a: "It’s okay to talk about your faith in counseling. You can bring it into sessions as much or as little as you like, and a good counselor follows your lead.",
      },
      {
        q: "Do you offer Islamic or religious counseling?",
        a: "I offer general counseling, not religious counseling, and I’m not a religious authority. I welcome clients of every faith or none, and I respect the role faith plays in your life.",
      },
      {
        q: "Is biohacking part of counseling?",
        a: "Biohacking isn’t part of counseling as such. Counseling can include research-informed habits like breathing practices, movement, and time outdoors, but it doesn’t include supplements or medical advice. Talk with your doctor about anything that affects your physical health.",
      },
      {
        q: "Can counseling be in Arabic?",
        a: "Counseling can be in Arabic if your counselor speaks it. I offer sessions in English and Arabic, and you can switch between them as it helps.",
      },
    ],
  },
  {
    path: "resources/adhd-creative-strategies",
    published: "2026-11-18",
    related: [
      LINK.adhdTherapy,
      LINK.adhdDiagnose,
      LINK.adhdAnxiety,
      LINK.screening,
      LINK.selfCare,
      LINK.adhdWomen,
    ],
    title: title("ADHD Strategies for Adults"),
    description:
      "Practical, creative ADHD strategies for adults: time, tasks, focus, and stress, and where the body and counseling fit in. Educational, not a diagnosis.",
    eyebrow: "ADHD",
    heading: "What are some creative strategies for adults with ADHD?",
    intro:
      "Creative strategies that help many adults with ADHD include making time visible, shrinking tasks into tiny first steps, adding movement, and using interest and novelty to get started. The idea is to work with how your brain works, not against it. These strategies don’t replace an evaluation or treatment, but they can make daily life feel more manageable.",
    takeaways: [
      "Make time visible with timers and clocks you can actually see.",
      "Shrink every task to a first step small enough to start.",
      "Body doubling, movement, and pairing dull tasks with something you enjoy can help you get going.",
      "Sleep, regular meals, and quick grounding practices affect focus too.",
      "These strategies support, but don’t replace, an ADHD evaluation or treatment.",
    ],
    blocks: [
      {
        heading: "What does ADHD look like in adults?",
        paragraphs: [
          "In adults, ADHD can show up as trouble starting or finishing tasks, losing track of time, restlessness, forgetfulness, or feeling buried by details.",
          "The National Institute of Mental Health describes ADHD as an ongoing pattern of inattention, hyperactivity, or impulsivity that gets in the way of daily life ([NIMH](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd)). It often looks quieter in women, as [the signs of ADHD in women](/resources/adhd-signs-in-women/) explains.",
          "Stress, anxiety, poor sleep, and low mood can cause some of the same struggles, so only a qualified professional can evaluate what’s going on. [Is it ADHD, anxiety, or both?](/resources/adhd-and-anxiety/) walks through the overlap.",
          "A free screening questionnaire like the ASRS v1.1, linked on the [screening tools page](/screening-tools/), can give you something to bring to that conversation. It isn’t a diagnosis.",
        ],
      },
      {
        heading: "Which creative ADHD strategies do adults find helpful?",
        paragraphs: [
          "Adults with ADHD often find it easier to get going when time is visible, the first step is tiny, and the task has some movement, company, or interest built in.",
          "Try one or two at a time and keep what works:",
        ],
        list: [
          "Make time visible with a visual timer or a clock you can see from your desk",
          "Shrink the first step: “open the document” instead of “write the report”",
          "Try body doubling: work alongside someone, in person or on a video call",
          "Add movement: walk while you think, or stretch between tasks",
          "Get tasks out of your head with color, sticky notes, or a whiteboard",
          "Pair dull tasks with something you enjoy, like music or a podcast",
          "Set up your space so the next step is easy to see and start",
        ],
      },
      {
        heading: "How do you start a task when you have ADHD?",
        paragraphs: [
          "To start a task with ADHD, make the first step so small it feels almost too easy, like opening the document or putting one dish in the sink.",
          "Then set a short timer, maybe 10 minutes, and give yourself permission to stop when it rings. Momentum often carries you further, and if it doesn’t, you still started.",
          "Company can help too. Having someone nearby, even on a quiet video call, can make it easier to begin and keep going.",
        ],
      },
      {
        heading: "How can adults with ADHD manage time better?",
        paragraphs: [
          "Managing time with ADHD usually works better when time is something you can see and hear, not something you have to track in your head.",
          "A few ideas many people use:",
        ],
        list: [
          "Keep one calendar for everything, with alerts set early enough to actually get ready",
          "Guess how long a task will take, then add a buffer, since time is easy to underestimate",
          "Save your hardest tasks for the hours you focus best",
          "Use a timer for transitions, like leaving the house or switching tasks",
          "Put a clock in the rooms where you tend to lose time",
        ],
      },
      {
        heading: "How does the body affect focus with ADHD?",
        paragraphs: [
          "Sleep, regular meals, and movement affect focus and mood for everyone, and they can matter even more with ADHD.",
          "When you feel overwhelmed, a quick grounding practice, like a slow breath out or noticing five things you can see, can help your body settle before you pick the next step. You’ll find more ideas in [nervous system regulation techniques](/resources/nervous-system-regulation-techniques/).",
          "Movement helps mood as well. A 2023 review of 97 systematic reviews found that physical activity had medium-sized effects on symptoms of depression and anxiety compared with usual care ([Singh et al., 2023](https://doi.org/10.1136/bjsports-2022-106195)).",
        ],
      },
      {
        heading: "What treatment options are there for adult ADHD?",
        paragraphs: [
          "Treatment for adult ADHD can include medication, psychotherapy, or a combination, and a doctor can help you decide whether medication makes sense for you.",
          "The National Institute of Mental Health notes that therapy may not treat the core symptoms of ADHD, but adding therapy to a treatment plan can help some people better cope with daily challenges and gain confidence ([NIMH](https://www.nimh.nih.gov/health/publications/adhd-what-you-need-to-know)).",
          "Practical strategies like the ones on this page can sit alongside whatever care is right for you.",
        ],
      },
      {
        heading: "How can counseling help adults with ADHD?",
        paragraphs: [
          "Counseling can be a place to understand your ADHD patterns, build routines that fit your life, and work through the frustration or shame that often builds up over years of feeling behind.",
          "Some people find it easier to talk while walking, which is one reason I offer outdoor sessions in Dallas–Fort Worth parks through [ADHD therapy](/adhd-therapy/).",
          "I don’t provide ADHD evaluations or prescribe medication. If you’re looking for a formal ADHD evaluation, a psychologist, psychiatrist, or your doctor can help with that, and [can a therapist diagnose ADHD?](/resources/can-a-therapist-diagnose-adhd/) explains who does them.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can adults have ADHD?",
        a: "Yes, adults can have ADHD. It begins in childhood and often continues into adulthood ([NIMH](https://www.nimh.nih.gov/health/publications/adhd-what-you-need-to-know)), and NIMH estimates that 4.4% of U.S. adults ages 18 to 44 have current ADHD ([NIMH](https://www.nimh.nih.gov/health/statistics/attention-deficit-hyperactivity-disorder-adhd)).",
      },
      {
        q: "Do these strategies replace ADHD treatment?",
        a: "No, these strategies don’t replace ADHD treatment. They’re practical tools that many people find useful, alongside whatever care is right for them. A qualified professional can help you decide on treatment.",
      },
      {
        q: "Can I take an ADHD test online?",
        a: "You can take a free ADHD screening questionnaire online, but it can’t diagnose ADHD. Screeners like the ASRS v1.1 can help you notice patterns. Bring your results to a qualified professional.",
      },
      {
        q: "What is body doubling for ADHD?",
        a: "Body doubling means doing a task while another person is present, in the room or on a video call. Many adults with ADHD find the quiet company makes it easier to start and stay with a task.",
      },
      {
        q: "Is walk and talk counseling a good fit if I have ADHD?",
        a: "Walk and talk counseling can be a good fit for some people with ADHD who find it easier to focus and talk while moving. It isn’t right for everyone, and we can talk about it during a free 15-minute consultation.",
      },
    ],
  },
  {
    path: "resources/attachment-styles-in-relationships",
    published: "2026-11-18",
    related: [
      LINK.anxiety,
      LINK.youngAdult,
      LINK.abuseRecovery,
      LINK.selfCare,
      LINK.familyBoundaries,
    ],
    title: title("Attachment Styles Explained"),
    description:
      "A plain-language guide to secure, anxious, avoidant, and disorganized attachment, how each shows up in relationships, and how people grow more secure.",
    eyebrow: "Relationships",
    heading: "How do attachment styles affect relationships?",
    intro:
      "Attachment styles affect relationships by shaping how a person seeks closeness, handles conflict, and reacts when they feel unsure of someone. These patterns often start in early relationships and show up later with partners, friends, and family. They aren’t fixed labels, and many people move toward more secure ways of relating over time.",
    takeaways: [
      "Attachment styles describe common patterns in how people seek closeness and respond to distance.",
      "The four commonly described styles are secure, anxious, avoidant, and disorganized, also called fearful-avoidant.",
      "Attachment styles aren’t diagnoses, and most people don’t fit neatly into one.",
      "Patterns can shift over time through steady relationships, reflection, and practice.",
    ],
    blocks: [
      {
        heading: "What is attachment theory?",
        paragraphs: [
          "Attachment theory is the idea that the early bonds children form with caregivers shape how they seek comfort and closeness later in life. Psychiatrist John Bowlby and psychologist Mary Ainsworth developed it by studying how young children bond with the adults who care for them.",
          "Later researchers applied those ideas to adult relationships. In 1987, Cindy Hazan and Phillip Shaver described romantic love as an attachment process, which opened the door to research on attachment between partners ([Hazan & Shaver, 1987](https://pubmed.ncbi.nlm.nih.gov/3572722/)).",
          "Attachment styles aren’t diagnoses. They’re a way to describe common patterns, not a verdict on what’s wrong with someone.",
        ],
      },
      {
        heading: "What are the four attachment styles?",
        paragraphs: [
          "The four commonly described attachment styles are secure, anxious, avoidant, and disorganized, which is sometimes called fearful-avoidant. Each one describes a general way of balancing closeness and independence.",
          "Most people don’t fit neatly into one style. Your patterns can look different with different people, at different times in your life, or under stress.",
        ],
        list: [
          "Secure: generally comfortable with both closeness and independence",
          "Anxious: wanting closeness and worrying about being left or not mattering",
          "Avoidant: valuing independence and pulling back when things feel too close",
          "Disorganized, sometimes called fearful-avoidant: wanting closeness and fearing it at the same time",
        ],
      },
      {
        heading: "What does anxious attachment look like in a relationship?",
        paragraphs: [
          "Anxious attachment in a relationship often looks like needing frequent reassurance and feeling uneasy when a partner seems distant or slow to reply. Underneath is usually a worry about being left or not mattering.",
          "Someone with an anxious pattern may replay conversations, read a lot into small changes, or reach out more when they feel unsure. These reactions are attempts to feel close and safe, not character flaws.",
        ],
      },
      {
        heading: "What does avoidant attachment look like in a relationship?",
        paragraphs: [
          "Avoidant attachment in a relationship often looks like valuing independence and pulling back when things start to feel too close. A person with this pattern may feel more comfortable handling hard feelings alone.",
          "Pulling away doesn’t mean they don’t care. It can be a learned way of staying steady when closeness feels like too much.",
        ],
      },
      {
        heading: "What are common attachment patterns between partners?",
        paragraphs: [
          "Common attachment patterns between partners include one person pursuing while the other withdraws, needing a lot of reassurance, and shutting down during conflict. Noticing the pattern is often the first step toward changing it.",
          "In a pursue-withdraw cycle, one partner reaches for closeness, the other steps back to calm down, and both end up feeling hurt or misunderstood. Neither person is the problem. The cycle is.",
          "Patterns that often show up:",
        ],
        list: [
          "Needing a lot of reassurance, or feeling uneasy when a text goes unanswered",
          "Shutting down or needing space during conflict",
          "One person pursues while the other withdraws, and both feel hurt",
          "Being drawn to relationships that feel familiar, even when they hurt",
        ],
      },
      {
        heading: "How do you become more securely attached?",
        paragraphs: [
          "People often become more securely attached by noticing their patterns without judging themselves, naming what they need, and spending time in relationships that feel steady and safe. Change tends to be gradual.",
          "Calming your body first can make hard conversations easier. These [nervous system regulation techniques](/resources/nervous-system-regulation-techniques/) and this guide to [self-care for mental health](/resources/self-care-for-mental-health/) offer simple places to start.",
          "Small steps that can help:",
        ],
        list: [
          "Notice what happens in your body and mind when you feel distant from someone",
          "Calm your body before hard conversations, for example with slow breathing",
          "Name what you need in plain words, like “Can we check in tonight?”",
          "Spend time with people who respond in steady, caring ways",
          "Practice small repairs after conflict, like coming back to say what you meant",
        ],
      },
      {
        heading: "How can therapy help with attachment patterns?",
        paragraphs: [
          "Therapy can help with attachment patterns by giving you a steady place to explore where they came from, notice what triggers them, and practice new ways of relating, at your own pace. Results differ from person to person.",
          "If an anxious pattern shows up as constant worry, [anxiety therapy in Dallas–Fort Worth](/anxiety-therapy-dallas/) may be worth a look. Young adults working through first serious relationships may find [counseling for young adults](/young-adult-counseling/) a good fit.",
          "If a relationship involved control, threats, or harm, what comes afterward is about more than attachment style. This guide on [how to heal after an abusive relationship](/resources/healing-after-an-abusive-relationship/) covers safety and recovery.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can your attachment style change?",
        a: "Attachment patterns aren’t set in stone. Many people become more secure over time through supportive relationships, reflection, and practice.",
      },
      {
        q: "Is an online attachment style quiz accurate?",
        a: "An online quiz can help you start thinking about your patterns, but it can’t capture the whole picture. Attachment styles aren’t diagnoses, and most people don’t fit neatly into one.",
      },
      {
        q: "Can counseling help with relationship patterns?",
        a: "Counseling can be a place to understand your relationship patterns, notice what triggers them, and practice responding differently. Results differ from person to person.",
      },
      {
        q: "Is my attachment style my parents’ fault?",
        a: "Attachment patterns aren’t about blame. Early relationships can shape them, and later relationships and life experiences shape them too.",
      },
    ],
  },
  {
    path: "resources/healing-after-an-abusive-relationship",
    published: "2026-11-18",
    related: [LINK.crisis, LINK.anxiety, LINK.depression, LINK.telehealth, LINK.attachment],
    title: title("Healing After Abuse"),
    description:
      "How to heal after an abusive relationship: safety resources, common reactions, and steps that support recovery at your own pace.",
    eyebrow: "Healing",
    heading: "How do you heal after an abusive relationship?",
    intro:
      "Healing after an abusive relationship usually starts with safety, then slowly rebuilding trust in yourself, your body, and other people. There’s no set timeline, and it’s common for recovery to have ups and downs. If you’re in danger right now, call 911 or the National Domestic Violence Hotline at 1-800-799-7233.",
    takeaways: [
      "Safety comes first. If you’re in danger, call 911. The National Domestic Violence Hotline is available 24/7 at 1-800-799-7233, or text START to 88788.",
      "Abuse isn’t only physical. It can be emotional, controlling, financial, or sexual.",
      "Confusion, self-blame, and missing the person are common reactions after leaving.",
      "Healing often comes in waves. Safety, routines, grounding, and trustworthy people can support it.",
    ],
    blocks: [
      {
        heading: "What should I do if I’m not safe right now?",
        paragraphs: [
          "If you’re in danger right now, call 911. The [National Domestic Violence Hotline](https://www.thehotline.org/) is available 24/7 at 1-800-799-7233, or text START to 88788, and its advocates can help with safety planning.",
          "For a mental health crisis, call or text 988. You’ll also find local Dallas–Fort Worth crisis lines on my [crisis resources page](/crisis/).",
          "If someone checks your phone or computer, it may be safer to look for help from a device they can’t access. Hotline advocates can help you think through safer ways to reach out.",
        ],
      },
      {
        heading: "What counts as an abusive relationship?",
        paragraphs: [
          "An abusive relationship is one where a partner uses a pattern of behavior to control, frighten, or harm the other person. Abuse isn’t only physical, and it can be hard to see clearly while you’re in it.",
          "Intimate partner violence is common. In their lifetimes, nearly 1 in 3 women and about 1 in 8 men in the U.S. have experienced contact sexual violence, physical violence, or stalking by an intimate partner along with at least one related impact, according to the [CDC](https://www.cdc.gov/intimate-partner-violence/about/index.html).",
          "Abuse can also look like:",
        ],
        list: [
          "Emotional abuse, like constant criticism, put-downs, or making you doubt your memory",
          "Controlling behavior, like isolating you from friends or tracking where you go",
          "Financial abuse, like controlling your money or your ability to work",
          "Threats, intimidation, or sexual coercion",
        ],
      },
      {
        heading: "Is it normal to feel confused after leaving an abusive relationship?",
        paragraphs: [
          "Feeling confused after leaving an abusive relationship is common, and it isn’t a sign that something is wrong with you. Many people notice a mix of reactions as they adjust to life outside the relationship.",
          "These are human responses to a painful experience. They can come and go, and they often soften with time, safety, and support.",
          "Reactions many people notice after leaving:",
        ],
        list: [
          "Second-guessing your memory or judgment",
          "Feeling on edge, jumpy, or having trouble sleeping",
          "Missing the person, or feeling confused about your feelings",
          "Shame or self-blame",
          "Finding it hard to trust others",
        ],
      },
      {
        heading: "What steps help with healing after abuse?",
        paragraphs: [
          "Steps that help with healing after abuse include rebuilding a sense of safety, reconnecting with trustworthy people, caring for your body, and practicing small boundaries. There’s no right order, and small steps count.",
          "Steps that can support healing:",
        ],
        list: [
          "Rebuild a sense of safety and simple daily routines",
          "Reconnect with people who feel trustworthy",
          "Use grounding when memories or panic come up, like slow breathing or feeling your feet on the floor",
          "Care for your body with sleep, food, and gentle movement",
          "Practice small boundaries and notice how they feel",
          "Be patient with yourself. Healing isn’t a straight line.",
        ],
      },
      {
        heading: "What are grounding techniques for panic or painful memories?",
        paragraphs: [
          "Grounding techniques bring your attention back to the present moment when memories or panic come up, for example by breathing slowly, feeling your feet on the floor, or naming things you can see. They can help your body settle enough to think more clearly.",
          "Go gently with any calming practice. The [National Center for Complementary and Integrative Health](https://www.nccih.nih.gov/health/providers/digest/mind-and-body-approaches-for-stress-science) notes rare reports that certain relaxation techniques might cause or worsen symptoms in people with a history of abuse or trauma.",
          "If a practice makes you feel worse, stop and try something else, like keeping your eyes open, moving, or focusing on sounds around you. These [nervous system regulation techniques](/resources/nervous-system-regulation-techniques/) and this guide to [self-care for mental health](/resources/self-care-for-mental-health/) offer more ideas.",
        ],
      },
      {
        heading: "How can counseling help after an abusive relationship?",
        paragraphs: [
          "Counseling can help after an abusive relationship by giving you a place to make sense of what happened at your own pace, without pressure to share more than you’re ready to. You decide what to talk about and when.",
          "Some people notice the old relationship echoing in new ones, like trouble trusting or a pull toward what feels familiar. This guide on [how attachment styles affect relationships](/resources/attachment-styles-in-relationships/) explains some of those patterns.",
          "If anxiety or low mood is part of what you’re carrying, [anxiety therapy](/anxiety-therapy-dallas/) and [depression counseling](/depression-counseling-dallas/) can be part of that support.",
          "If you still live with or near the person, think about safety first: [telehealth](/telehealth-counseling-texas/) only works if no one can overhear, and outdoor sessions happen in public parks where complete privacy can’t be guaranteed. We can talk through what feels safest during a free consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does it take to heal after an abusive relationship?",
        a: "There’s no set timeline for healing after an abusive relationship. Recovery often comes in waves, and setbacks are a normal part of it.",
      },
      {
        q: "Is it normal to miss someone who hurt me?",
        a: "It’s normal to miss someone who hurt you. Many people feel attached to the person, especially after a long or intense relationship. Missing them doesn’t mean the abuse was okay.",
      },
      {
        q: "What if I’m not sure it was abuse?",
        a: "You don’t need a label to deserve support. Advocates at the National Domestic Violence Hotline (1-800-799-7233) can talk it through with you, and so can a counselor.",
      },
      {
        q: "Is telehealth safe if I still live with the person?",
        a: "Telehealth is only safe if the person can’t overhear your sessions or see your messages. Your safety comes first. The Hotline’s advocates can help you make a safety plan.",
      },
      {
        q: "Can I get support if I haven’t left the relationship?",
        a: "You can get support whether or not you’ve left. Hotline advocates at 1-800-799-7233 can help you plan for safety either way, and a counselor can support you as long as sessions can happen privately and safely.",
      },
    ],
  },
  {
    path: "resources/self-care-for-mental-health",
    published: "2026-11-18",
    related: [
      LINK.giftGuide,
      LINK.stress,
      LINK.lifeTransitions,
      LINK.holisticCounseling,
      LINK.depression,
      LINK.outdoor,
      LINK.adhd,
      LINK.regulation,
      LINK.selfReflection,
      LINK.groundingGuide,
      LINK.grounding,
      LINK.familyBoundaries,
    ],
    title: title("Self-Care for Mental Health"),
    description:
      "Research-informed self-care for mental health: sleep, movement, connection, grounding, and limits, plus signs it may be time to talk with a counselor.",
    eyebrow: "Self-care",
    heading: "What does self-care for mental health actually look like?",
    intro:
      "Self-care for mental health is the everyday care that helps your mind and body recover from stress: sleep, movement, food, rest, connection, and limits on what drains you. It’s less about treats and more about steady habits, adjusted to what you need right now.",
    takeaways: [
      "Self-care for mental health means steady basics: sleep, movement, food and water, rest, connection, and limits.",
      "The National Institute of Mental Health lists regular exercise, healthy meals, sleep, relaxing activities, gratitude, and staying connected as helpful self-care.",
      "Small steps done often tend to help more than big changes done rarely.",
      "Self-care supports mental health but doesn’t replace counseling or medical care when stress or low mood keeps getting in the way.",
    ],
    blocks: [
      {
        heading: "What does research say self-care for mental health should include?",
        paragraphs: [
          "Research-based self-care for mental health centers on a few basics: regular movement, healthy meals and enough water, good sleep, relaxing activities, and staying connected with people who support you.",
          "The [National Institute of Mental Health](https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health) suggests regular exercise, healthy meals and enough water, making sleep a priority, relaxing activities like breathing exercises, setting goals and priorities, practicing gratitude, and staying connected with people who support you.",
          "None of these needs to be perfect. Small, steady steps count.",
        ],
      },
      {
        heading: "How much exercise helps your mental health?",
        paragraphs: [
          "Any regular movement can help your mental health, and you don’t need to hit a fitness goal to benefit.",
          "A large overview of research found that physical activity improved symptoms of depression, anxiety, and psychological distress ([Singh et al., 2023](https://doi.org/10.1136/bjsports-2022-106195)).",
          "For overall health, the CDC recommends that adults get 150 minutes of moderate-intensity activity a week, which can be split into 30 minutes on 5 days ([CDC](https://www.cdc.gov/physical-activity-basics/guidelines/adults.html)). If that feels like a lot, start with a five- or ten-minute walk and build from there.",
        ],
      },
      {
        heading: "How can I check in with myself each day?",
        paragraphs: [
          "A daily self-care check-in is a quick look at your body, mind, emotions, connections, and sense of meaning, so you can notice what needs attention.",
          "A holistic check-in might ask:",
        ],
        list: [
          "Body: Have I slept, eaten, had water, and moved today?",
          "Mind: Have I had a break from screens or a moment of quiet?",
          "Emotions: Can I name how I feel right now?",
          "Connection: Who is one person I could reach out to?",
          "Meaning: What helps me feel grounded, like faith, nature, values, or creativity?",
        ],
      },
      {
        heading: "What can I do for self-care on a hard day?",
        paragraphs: [
          "On a hard day, self-care can be as simple as slowing your breath, noticing what’s around you, and stepping outside for a few minutes.",
          "Try one of these:",
        ],
        list: [
          "Breathe out slowly, a little longer than you breathe in",
          "Name five things you can see and four things you can hear",
          "Press your feet into the floor and notice the support",
          "Step outside for a few minutes, even just to your doorstep",
        ],
      },
      {
        heading: "Why do limits and boundaries count as self-care?",
        paragraphs: [
          "Limits count as self-care because protecting your time and energy keeps stress from building up faster than you can recover.",
          "That might mean saying no to one extra commitment, setting a time to stop checking work messages, or spending less time with people or apps that leave you drained. Limits don’t have to be dramatic. Small ones, held steadily, add up.",
        ],
      },
      {
        heading: "Is self-care enough for anxiety or depression?",
        paragraphs: [
          "Self-care helps, but it often isn’t enough on its own for ongoing anxiety or depression, and struggling isn’t a sign you’re doing it wrong.",
          "If stress, anxiety, or low mood has made daily life hard for more than a couple of weeks, consider talking with a counselor or your doctor. [Anxiety therapy](/anxiety-therapy-dallas/), [depression counseling](/depression-counseling-dallas/), and [holistic counseling](/holistic-counseling/) can all build on the habits you already have.",
          "A [free 15-minute consultation](/resources/free-counseling-consultation/) is a low-pressure way to start. For more research-based tools, see [nervous system regulation techniques](/resources/nervous-system-regulation-techniques/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Is self-care selfish?",
        a: "No, self-care isn’t selfish. Taking care of your health makes it easier to show up for the people and things that matter to you.",
      },
      {
        q: "What are some simple self-care ideas?",
        a: "Simple self-care ideas include going to bed at a steady time, taking a short walk, drinking water, stepping outside, texting a friend, or taking five slow breaths. Small things done often tend to help more than big things done rarely.",
      },
      {
        q: "What if I don’t have time for self-care?",
        a: "If you don’t have time for self-care, start very small. One minute of slow breathing or a five-minute walk still counts.",
      },
      {
        q: "When should I talk to a counselor?",
        a: "Talk to a counselor if stress or low mood is getting in the way of work, sleep, or relationships, or if you just want support. If you’re in crisis, call or text 988, or see [crisis resources](/crisis/).",
      },
      {
        q: "Does self-care have to cost money?",
        a: "No, most self-care is free. Sleep, walking, water, time outside, and reaching out to a friend don’t cost anything.",
      },
    ],
  },
  {
    path: "resources/therapy-cost-without-insurance",
    published: "2026-11-19",
    related: [LINK.affordable, LINK.slidingScale, LINK.telehealth, LINK.consultation],
    title: "Therapy Without Insurance: What It Costs in Texas",
    description:
      "What therapy costs without insurance in Texas, what affects the price, your right to a Good Faith Estimate, and practical ways to lower the cost.",
    eyebrow: "Fees",
    heading: "How much does therapy cost without insurance in Texas?",
    intro:
      "Without insurance, therapy in Texas costs whatever the counselor charges per session, and you pay that fee directly. Fees vary a lot depending on the counselor’s license, experience, location, and session length, so it’s worth asking up front. My standard fee is $100 per session, and a sliding scale and session packages are available.",
    takeaways: [
      "Without insurance, you pay the counselor’s session fee directly, and fees vary widely.",
      "License level, experience, location, and session length drive most of the price.",
      "Self-pay clients have a federal right to a written Good Faith Estimate before care starts.",
      "Sliding scales, packages, HSA or FSA funds, and employer EAPs can lower the cost.",
      "A free consultation lets you ask about fees before you commit to anything.",
    ],
    blocks: [
      {
        heading: "How much is therapy without insurance?",
        paragraphs: [
          "Therapy without insurance costs the counselor’s full session fee, paid directly by you. There’s no single price in Texas, because fees depend on the provider’s license, training, location, and how long each session lasts.",
          "Because the range is so wide, the most reliable way to know what you’ll pay is to ask each counselor for their fee and get it in writing before you start.",
          "If the full fee is out of reach, ask about [sliding scale therapy](/resources/what-is-sliding-scale-therapy/) and packages before you rule a counselor out.",
        ],
      },
      {
        heading: "What affects the price of therapy?",
        paragraphs: [
          "The price of a therapy session mostly reflects the provider’s license, experience, location, format, and session length.",
        ],
        list: [
          "The type of license, such as LPC Associate, LPC, psychologist, or psychiatrist",
          "Years of experience and specialized training",
          "Session length and how often you meet",
          "Where you live, and whether sessions are in an office, outdoors, or online",
          "Whether the counselor offers a sliding scale or packages",
        ],
      },
      {
        heading: "Is cost a common reason people don’t get therapy?",
        paragraphs: [
          "Yes, cost is one of the most common reasons adults go without mental health care they feel they need. In SAMHSA’s [2025 National Survey on Drug Use and Health](https://www.samhsa.gov/data/sites/default/files/reports/rpt57150/2025-nsduh-annual-national-report.pdf), 61.4 percent of adults with a mental illness who felt they needed treatment but didn’t get it said they thought treatment would cost too much.",
          "It was the second most common reason people gave in that survey.",
          "Knowing the lower-cost options below can make that barrier smaller, so it’s worth reading through them before deciding therapy isn’t affordable.",
        ],
      },
      {
        heading: "Why pay for therapy out of pocket?",
        paragraphs: [
          "Paying for therapy out of pocket means nothing is sent to an insurance company, and you and your counselor decide together how often to meet.",
          "Some people also like knowing exactly what each session costs, with no claims to sort out later.",
          "The trade-off is cost, so it helps to know your options before you start.",
        ],
      },
      {
        heading: "What is a Good Faith Estimate?",
        paragraphs: [
          "A Good Faith Estimate is a written estimate of expected charges that you have a right to receive before services start if you don’t have insurance or choose not to use it, under the federal No Surprises Act.",
          "If your bill comes in at least $400 more than the estimate, you can dispute it.",
          "You can learn more from [CMS](https://www.cms.gov/initiatives/your-patient-rights/medical-bill-rights/know-your-rights/without-insurance) or at [cms.gov/nosurprises](https://www.cms.gov/nosurprises).",
        ],
      },
      {
        heading: "How much does a therapy session cost without insurance?",
        paragraphs: [
          "A therapy session without insurance costs the counselor’s full per-session fee, unless they offer a sliding scale or a package rate.",
          "When you compare prices, check the session length too. Two counselors with the same fee may offer sessions of different lengths.",
          "Ask about other charges, such as late cancellation fees, so you know the real cost each month.",
        ],
      },
      {
        heading: "How do you get therapy without insurance, step by step?",
        paragraphs: [
          "Getting therapy without insurance starts with a monthly budget, then a few direct questions to counselors about fees and reduced rates.",
        ],
        list: [
          "Decide what you can comfortably spend each month",
          "Check whether your employer offers an EAP, or whether your HSA or FSA covers counseling",
          "Contact two or three counselors and ask about fees, sliding scales, and packages",
          "Use a [free consultation](/resources/free-counseling-consultation/) to see whether the fit feels right",
          "Ask for a Good Faith Estimate in writing before your first session",
        ],
      },
      {
        heading: "How can I lower the cost of therapy?",
        paragraphs: [
          "You can lower the cost of therapy with a sliding scale, session packages, HSA or FSA funds, an employer EAP, or a lower-cost clinic.",
        ],
        list: [
          "Ask about a sliding scale based on your income",
          "Ask whether session packages are available",
          "Check whether your HSA or FSA can be used for counseling. Your plan administrator can confirm.",
          "See if your employer offers an Employee Assistance Program (EAP), which often includes a few free sessions",
          "Look into community mental health centers and university training clinics, which often charge less",
          "Dial 211 in Texas to find low-cost services near you",
        ],
      },
      {
        heading: "How much is online therapy without insurance?",
        paragraphs: [
          "Online therapy without insurance usually costs about the same as in-person sessions with that same counselor.",
          "Subscription therapy apps price things differently, often by the week or month, so check what’s included, like how long live sessions are and how often you get them.",
          "If you’re in Texas, [online therapy anywhere in Texas](/telehealth-counseling-texas/) explains how telehealth sessions work with me.",
        ],
      },
      {
        heading: "How can I get free therapy without insurance?",
        paragraphs: [
          "Free therapy without insurance is most often available through an employer EAP, a community mental health center, or free support groups.",
        ],
        list: [
          "Your employer’s Employee Assistance Program (EAP), if you have one, often covers a few free sessions",
          "Community mental health centers may offer free or low-cost care based on income",
          "Free peer support groups, such as those run by NAMI, can be a helpful addition",
          "Dial 211 in Texas to find free services near you",
          "In a crisis, call or text 988. It’s free and available 24/7.",
        ],
      },
      {
        heading: "What should I ask about fees before starting therapy?",
        paragraphs: [
          "Before starting therapy, ask about the session fee, session length, reduced rates, payment, cancellations, and a written Good Faith Estimate.",
        ],
        list: [
          "What is the fee per session, and how long is a session?",
          "Do you offer a sliding scale or packages?",
          "When is payment due, and how can I pay?",
          "What is your cancellation policy?",
          "Will you give me a Good Faith Estimate in writing?",
          "Is the first call or consultation free?",
        ],
      },
      {
        heading: "Is cheaper therapy less effective?",
        paragraphs: [
          "Cheaper therapy is not necessarily less effective, because price mostly reflects a counselor’s license level, location, and overhead rather than the quality of the relationship.",
          "Research across many studies finds that the working relationship between client and counselor is one of the most consistent predictors of progress ([Flückiger et al., 2018](https://doi.org/10.1037/pst0000172)).",
          "A counselor you trust and can afford to see regularly is often a better choice than one you can only see once.",
        ],
      },
      {
        heading: "Can I use an HSA or FSA to pay for therapy?",
        paragraphs: [
          "You can often use an HSA or FSA to pay for therapy when counseling is for your mental health, but the rules depend on your plan.",
          "The IRS counts fees paid to mental health providers such as psychologists and psychiatrists as medical expenses ([IRS Topic 502](https://www.irs.gov/taxtopics/tc502)), and HSA and FSA plans set their own rules on top of that.",
          "Check with your plan administrator before your first session, and keep your receipts.",
        ],
      },
      {
        heading: "How much does a session cost with me?",
        paragraphs: [
          "My standard fee is $100 per session, for [walk and talk sessions in Dallas–Fort Worth](/walk-and-talk-therapy-dallas/) or online therapy anywhere in Texas.",
          "A sliding scale based on household income and session packages are available. I’m self-pay only and don’t bill insurance.",
          "You can ask about cost during a free 15-minute phone call before committing to anything. [Affordable therapy in Dallas](/affordable-therapy-dallas/) has more on reduced rates.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I get therapy without insurance?",
        a: "To get therapy without insurance, decide what you can afford each month, then ask counselors directly about their fee, sliding scale, and packages. Check your HSA, FSA, or employer EAP, and ask for a Good Faith Estimate before you start.",
      },
      {
        q: "Can I use my HSA or FSA for counseling?",
        a: "Often, yes, when counseling is for your mental health. Rules depend on your plan, so check with your plan administrator before your first session.",
      },
      {
        q: "Do you offer a sliding scale?",
        a: "Yes, I offer reduced rates based on household income. Ask during your free consultation.",
      },
      { q: "Will you bill my insurance?", a: "No. I’m self-pay only and don’t bill insurance." },
      {
        q: "Is online therapy cheaper than in-person?",
        a: "Online therapy is not always cheaper than in-person therapy, because many counselors charge the same for both. My fee is the same for online therapy and walk and talk sessions.",
      },
      {
        q: "Why do therapy prices vary so much in Dallas?",
        a: "Therapy prices in Dallas vary because fees reflect the provider’s license level, training, location, session length, and overhead. A higher price doesn’t guarantee a better fit, so it’s worth asking about sliding scales and free consultations before you decide.",
      },
      {
        q: "Does online therapy save money even when the fee is the same?",
        a: "Online therapy can still save money when the fee is the same, because you skip travel time and gas, which adds up over weeks of sessions. With me, the session fee is the same either way.",
      },
    ],
  },
  {
    path: "resources/what-is-sliding-scale-therapy",
    published: "2026-11-19",
    related: [LINK.affordable, LINK.cost, LINK.telehealth, LINK.consultation],
    title: title("What Is Sliding Scale Therapy?"),
    description:
      "What sliding scale therapy means, how it works, how to apply for a reduced fee, and other lower-cost counseling options in Dallas–Fort Worth.",
    eyebrow: "Fees",
    heading: "What is sliding scale therapy?",
    intro:
      "Sliding scale therapy is counseling where the fee is set based on what you can afford, usually your household income and how many people it supports. It makes counseling possible for people who can’t pay a full fee and don’t want to, or can’t, use insurance.",
    takeaways: [
      "A sliding scale means a counselor offers a range of fees instead of one fixed price.",
      "Your fee is usually based on household income and size, and agreed on before you start.",
      "There’s rarely a formal application. You can simply ask on the first call.",
      "The care is the same at every fee. Only the price changes.",
    ],
    blocks: [
      {
        heading: "What does sliding scale mean in therapy?",
        paragraphs: [
          "In therapy, a sliding scale means the counselor charges different fees to different clients based on what each person can afford, instead of one price for everyone.",
          "The scale is the range between the counselor’s full fee and their reduced fees. Where you land depends on your finances, not on the kind of care you receive.",
        ],
      },
      {
        heading: "How does sliding scale therapy work?",
        paragraphs: [
          "Sliding scale therapy works by matching your session fee to your financial situation and agreeing on that fee before your first session.",
        ],
        list: [
          "The counselor sets a range of fees instead of one fixed price",
          "Your fee is based on things like household income and how many people it supports",
          "Some counselors ask for income details, while others go by what you tell them",
          "The fee is agreed on before you start and included in your Good Faith Estimate",
          "Your fee can be revisited if your situation changes",
        ],
      },
      {
        heading: "Why do therapists offer a sliding scale?",
        paragraphs: [
          "Therapists offer a sliding scale so that cost is less likely to keep someone from counseling they want. In SAMHSA’s [2025 National Survey on Drug Use and Health](https://www.samhsa.gov/data/sites/default/files/reports/rpt57150/2025-nsduh-annual-national-report.pdf), 61.4 percent of adults with a mental illness who felt they needed treatment but didn’t get it said they thought treatment would cost too much.",
          "Cost was the second most common reason people gave in that survey. A sliding scale is one practical way to make that barrier smaller.",
        ],
      },
      {
        heading: "How do I apply for sliding scale therapy?",
        paragraphs: [
          "Applying for sliding scale therapy usually means simply asking the counselor, ideally on your first call, whether they offer one. There’s rarely a formal application.",
          "“Do you offer a sliding scale?” is enough. Some counselors will ask about your household income and size, and a few may ask for proof.",
          "You don’t need to explain your whole financial situation, and a good counselor will make the conversation easy.",
        ],
      },
      {
        heading: "What is a sliding scale usually based on?",
        paragraphs: [
          "A sliding scale is usually based on household income, household size, and major ongoing costs, though each counselor sets their own scale.",
        ],
        list: [
          "Household income before taxes",
          "How many people that income supports",
          "Big ongoing costs, like medical bills or student loans",
          "Whether the reduced fee is meant to be temporary or ongoing",
        ],
      },
      {
        heading: "Who is a sliding scale for?",
        paragraphs: [
          "A sliding scale is for people whose income makes a full therapy fee hard to manage, such as students, people between jobs, single-income households, or anyone paying without insurance.",
          "You don’t need to prove hardship to ask. If the counselor can’t offer a rate that works, they can usually point you toward other options.",
        ],
      },
      {
        heading: "Is it okay to ask a therapist for a lower fee?",
        paragraphs: [
          "It is completely okay to ask a therapist for a lower fee, and counselors who offer a sliding scale expect the question.",
          "Asking doesn’t make you look less committed. You can simply say, “Do you offer a sliding scale, and how does it work?” A good counselor will answer plainly and won’t ask you to justify your situation.",
        ],
        list: [
          "Ask on the first call, before you book a session",
          "Ask how the fee is set and whether you’ll need to share proof of income",
          "Ask how often the fee is reviewed",
          "Ask whether reduced-fee spots are limited, so you know where you stand",
        ],
      },
      {
        heading: "How is a sliding scale different from other low-cost options?",
        paragraphs: [
          "A sliding scale keeps you with the counselor you chose at a fee you agree on, while other low-cost options often limit the number of sessions or who you see.",
        ],
        list: [
          "A sliding scale keeps you with the counselor you chose, at a fee you agree on together",
          "An Employee Assistance Program is free but usually limited to a few sessions",
          "Community clinics and training clinics often cost less, though wait times and who you see can vary",
          "Self-pay with a sliding scale means nothing is billed to insurance. See [affordable therapy in Dallas](/affordable-therapy-dallas/).",
        ],
      },
      {
        heading: "What are other lower-cost options in Dallas–Fort Worth?",
        paragraphs: [
          "Other lower-cost counseling options in Dallas–Fort Worth include reduced-rate therapist networks, university training clinics, community mental health centers, and employer EAPs.",
        ],
        list: [
          "Open Path Collective, a nonprofit network of therapists who offer reduced-rate sessions",
          "University counseling training clinics, where supervised graduate students see clients at lower fees",
          "Community mental health centers, which often charge based on income",
          "Employee Assistance Programs (EAPs), which often include a few free sessions",
          "Dial 211 to find low-cost services near you",
        ],
      },
      {
        heading: "Is sliding scale therapy lower quality?",
        paragraphs: [
          "Sliding scale therapy is not lower quality, because a sliding scale changes the fee, not the care.",
          "You get the same counselor, the same session length, and the same approach as someone paying the full fee.",
          "Research consistently finds that the working relationship between you and your counselor is one of the strongest predictors of progress ([Flückiger et al., 2018](https://doi.org/10.1037/pst0000172)), and that has nothing to do with what you pay.",
        ],
      },
      {
        heading: "How does a sliding scale fit with the full cost of therapy?",
        paragraphs: [
          "A sliding scale is one of several ways to bring down the cost of therapy without insurance, alongside packages, HSA or FSA funds, and employer EAPs.",
          "For the bigger picture, including your right to a Good Faith Estimate, see [how much therapy costs without insurance in Texas](/resources/therapy-cost-without-insurance/).",
        ],
      },
      {
        heading: "Is there sliding scale therapy in Dallas?",
        paragraphs: [
          "Yes, sliding scale therapy is available in Dallas, and I offer reduced rates based on household income for walk and talk sessions in Dallas–Fort Worth and online therapy anywhere in Texas.",
          "I’m self-pay only, so nothing is billed to insurance. Ask during your [free 15-minute consultation](/resources/free-counseling-consultation/), and we’ll agree on a fee before your first session.",
          "You can read more about [walk and talk therapy](/walk-and-talk-therapy-dallas/) and [telehealth counseling in Texas](/telehealth-counseling-texas/).",
        ],
      },
    ],
    faqs: [
      {
        q: "What’s the simplest way to explain a sliding scale?",
        a: "A sliding scale is a fee range: people with less income pay less, and people with more income pay closer to the full fee.",
      },
      {
        q: "Will I get less attention if I pay a reduced fee?",
        a: "No. The counseling is the same at every fee. Only the price changes.",
      },
      {
        q: "Do I have to show pay stubs or tax returns?",
        a: "Whether you need to show pay stubs or tax returns depends on the counselor, so it’s fine to ask how they handle it.",
      },
      {
        q: "Does your sliding scale apply to online therapy?",
        a: "Yes. My sliding scale applies to both walk and talk sessions and online therapy.",
      },
      {
        q: "What if I can’t afford counseling right now?",
        a: "If you can’t afford counseling right now, try the options above, or dial 211 to find free and low-cost services near you. If you’re in crisis, call or text 988 any time. It’s free.",
      },
      {
        q: "Do I need to prove my income for a sliding scale?",
        a: "It depends on the counselor. Some ask for paperwork, and others, including me, simply ask you to share your household income. Ask on the first call so you know what to expect.",
      },
      {
        q: "Can my sliding scale fee change?",
        a: "Usually, yes. Many counselors review reduced fees from time to time. I review mine every six months, or sooner if your income changes in either direction.",
      },
      {
        q: "Does a sliding scale mean shorter or fewer sessions?",
        a: "No. The session length and the care are the same. Only the fee changes.",
      },
    ],
  },
  {
    path: "resources/what-is-walk-and-talk-therapy",
    published: "2026-11-19",
    related: [LINK.outdoor, LINK.outdoorFit, LINK.anxiety, LINK.walkBenefits],
    title: title("What Is Walk and Talk Therapy?"),
    description:
      "Walk and talk therapy explained: how a session works, what research says about movement and nature, privacy, and how to tell if it’s a good fit for you.",
    eyebrow: "Walk and talk therapy",
    heading: "What is walk and talk therapy?",
    intro:
      "Walk and talk therapy is counseling that happens while you and your counselor walk outdoors, usually on a quiet park path or trail, instead of sitting in an office. It’s the same talk therapy, with the same confidentiality rules and the same goals. Only the setting changes, and you can slow down, stop, or sit whenever you need to.",
    takeaways: [
      "Walk and talk therapy is regular talk therapy held outdoors, walking or sitting, with the same confidentiality rules as office counseling.",
      "Research on the format itself is still small, but it builds on strong evidence linking physical activity and time in nature with lower stress, anxiety, and depression.",
      "Insurance treats it like any other counseling session, so coverage depends on your plan and on whether the counselor bills insurance.",
      "A park is public, so privacy can’t be complete. You and your counselor plan ahead for passersby, and online sessions are always an option.",
      "In Dallas–Fort Worth, sessions on this site usually happen on a trail in Irving, with video sessions as a backup for Texas heat and storms.",
    ],
    blocks: [
      {
        heading: "How is walk and talk therapy different from office therapy?",
        paragraphs: [
          "Walk and talk therapy differs from office therapy only in its setting: the conversation, the confidentiality rules, and the goals of counseling stay the same.",
          "You still talk through what’s on your mind, set goals, and practice skills between sessions. The difference is that you do it side by side on a path, with fresh air and a gentle pace.",
          "Some people find that moving takes the edge off nervous energy. Others like having something to look at besides the counselor. Sitting on a bench for part of the session is common, and you never have to walk the whole time.",
        ],
      },
      {
        heading: "How does a walk and talk therapy session work?",
        paragraphs: [
          "A walk and talk therapy session usually lasts as long as an office session and moves at whatever pace feels comfortable, with pauses and sitting built in when you need them.",
          "A typical session looks like this:",
        ],
        list: [
          "You and the counselor agree on a place, often a quiet park or trail",
          "You walk side by side at a comfortable pace, or sit on a bench for part of it",
          "The session usually lasts as long as an office session",
          "If someone comes close, you can pause or move",
          "If the weather is bad, the session happens online instead",
        ],
      },
      {
        heading: "What does research say about walk and talk therapy?",
        paragraphs: [
          "Research on walk and talk therapy itself is still limited and mostly small, but the format builds on well-studied links between physical activity, time in nature, and mental health.",
          "Regular physical activity is linked with lower anxiety and depression. A large umbrella review of 97 reviews, covering 1,039 trials and 128,119 participants, found that physical activity improved symptoms of depression, anxiety, and psychological distress ([Singh et al., 2023](https://doi.org/10.1136/bjsports-2022-106195)).",
          "Time in green spaces is linked with lower stress. In one study of city residents, 20 to 30 minutes in a place that felt like nature gave the most stress relief for the time spent ([Hunter et al., 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6458297/)).",
          "Many people also say that walking side by side, without constant eye contact, makes hard conversations feel a little easier. That comes from experience rather than formal studies. You can read more about [the benefits of walk and talk therapy](/resources/walk-and-talk-therapy-benefits/).",
        ],
      },
      {
        heading: "Who is walk and talk therapy for?",
        paragraphs: [
          "Walk and talk therapy tends to suit people who think more clearly while moving, feel restless in an office, or want more time outdoors in their week.",
        ],
        list: [
          "People who feel restless or boxed in sitting in an office",
          "Anyone who thinks more clearly while moving",
          "People who want more time outdoors in their week",
          "People working on anxiety, low mood, or stress who want to build movement into their routine",
          "Anyone who finds face-to-face conversation intense and would rather talk side by side",
        ],
      },
      {
        heading: "Is walk and talk therapy covered by insurance?",
        paragraphs: [
          "Walk and talk therapy is covered by insurance only in the same way any counseling session would be, because insurance plans pay based on the service and the provider, not the setting.",
          "Whether yours is covered depends on your plan and on whether the counselor bills insurance at all. Many walk and talk counselors are self-pay.",
          "I’m self-pay only, with a [sliding scale](/resources/what-is-sliding-scale-therapy/) available, and you can read more about [what therapy costs without insurance](/resources/therapy-cost-without-insurance/).",
        ],
      },
      {
        heading: "What if I see someone I know during a session?",
        paragraphs: [
          "Running into someone you know during walk and talk therapy can happen in a public park, so it helps to agree on a plan before the first session.",
          "Usually the plan is simple: a quick nod or hello, a pause in the conversation, and moving on. You never have to explain who I am.",
          "If that possibility feels like too much, [online therapy](/telehealth-counseling-texas/) is always an option.",
        ],
      },
      {
        heading: "How should I prepare for walk and talk therapy?",
        paragraphs: [
          "Preparing for walk and talk therapy mostly means dressing for the weather, bringing water, and letting your counselor know about anything that affects how far or fast you can walk.",
        ],
        list: [
          "Wear comfortable shoes and clothes for the weather",
          "Bring water, especially from late spring through early fall in Texas",
          "Put your phone on silent so you can focus",
          "Mention any injuries, health conditions, or limits on walking so we can adjust the pace or sit",
          "Think about what you want to talk about, but don’t worry about having it all planned",
        ],
      },
      {
        heading: "How does weather affect walk and talk therapy in Texas?",
        paragraphs: [
          "In Texas, weather often decides where a walk and talk session happens, because summer heat, storms, and cold snaps can make a park unsafe or uncomfortable.",
          "Texas summers can be dangerously hot, so sessions may move earlier in the day, stay in the shade, or switch to online when the heat index is high. Storms and cold snaps work the same way.",
          "If the weather isn’t safe or comfortable, we meet by video instead, and the session still counts.",
        ],
      },
      {
        heading: "When is walk and talk therapy not the right fit?",
        paragraphs: [
          "Walk and talk therapy may not be the right fit if talking where others might pass by would hold you back, or if walking is physically hard right now.",
          "Parks are public, so complete privacy can’t be guaranteed. Choosing quieter paths and pausing when people pass helps, but it doesn’t remove the risk entirely.",
          "In those cases, sitting outdoors or online therapy may suit you better. There’s no wrong choice. If you’re still deciding, [is outdoor counseling right for you?](/resources/is-outdoor-counseling-right-for-you/) walks through the questions to ask yourself.",
        ],
      },
      {
        heading: "Where can I find walk and talk therapy in Dallas?",
        paragraphs: [
          "Walk and talk therapy in the Dallas area is available with me for people across Dallas–Fort Worth, usually on a trail in Irving or another quiet park we choose together.",
          "Sessions are open to people who live or work in [Irving](/counseling-irving-tx/), [Dallas](/counseling-dallas-tx/), Las Colinas, Coppell, Grand Prairie, and Farmers Branch. You can read how sessions work on the [walk and talk therapy](/walk-and-talk-therapy-dallas/) page.",
          "You can start with a [free 15-minute phone call](/resources/free-counseling-consultation/) to see if it feels right.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need to be in shape for walk and talk therapy?",
        a: "No, you don’t need to be in shape for walk and talk therapy. The pace is gentle, and you can sit for the whole session if you’d like.",
      },
      {
        q: "Is walk and talk therapy confidential?",
        a: "Yes, walk and talk therapy is confidential within the same legal limits as any counseling. Because parks are public, you and your counselor take extra care, like choosing quiet paths and pausing when people pass.",
      },
      {
        q: "What should I wear?",
        a: "Wear comfortable shoes and clothes for the weather. Bring water, especially in the Texas heat.",
      },
      {
        q: "Is walk and talk therapy covered by insurance?",
        a: "Walk and talk therapy is covered only if your plan covers counseling and the counselor bills insurance, because insurance pays based on the service, not the location. Ask both before you start. I’m self-pay only and don’t bill insurance, and a sliding scale is available.",
      },
      {
        q: "Can I switch between walking and online sessions?",
        a: "Yes, with me you can switch between walking and online sessions. You can mix walk and talk and online sessions depending on the weather and your week.",
      },
      {
        q: "How long is a walk and talk therapy session?",
        a: "A walk and talk therapy session is usually the same length as an office session. The time includes walking, pausing, and sitting, at whatever pace feels right that day.",
      },
      {
        q: "Can we sit instead of walking?",
        a: "Yes, you can sit instead of walking. Many sessions mix walking and sitting on a bench or in the shade, and some people sit the whole time. The outdoor setting matters more than the steps.",
      },
      {
        q: "Can walk and talk therapy help with anxiety?",
        a: "Walk and talk therapy can be a good setting for working on anxiety, since it combines talk therapy with gentle movement and time outdoors. It isn’t a separate treatment, and how much it helps varies from person to person. You can read more about [anxiety therapy in Dallas–Fort Worth](/anxiety-therapy-dallas/).",
      },
    ],
  },
  {
    path: "resources/can-a-therapist-diagnose-adhd",
    published: "2026-11-19",
    related: [LINK.adhdTherapy, LINK.adhd, LINK.youngAdult, LINK.screening],
    title: title("Can a Therapist Diagnose ADHD?"),
    description:
      "Who can diagnose ADHD, what an adult ADHD evaluation involves, whether therapists can prescribe ADHD medication, and how to find a therapist for ADHD.",
    eyebrow: "ADHD",
    heading: "Can a therapist diagnose ADHD?",
    intro:
      "Sometimes. Whether a therapist can diagnose ADHD depends on their license, training, and state law, and counselors and psychologists can’t prescribe ADHD medication in Texas. Psychologists, psychiatrists, and other medical providers are the most common places to get an ADHD evaluation, and many counselors refer clients there for testing, then help with the day-to-day side of ADHD.",
    takeaways: [
      "Some therapists can diagnose ADHD, depending on their license, training, and state law, so ask each provider directly.",
      "Psychologists, psychiatrists, psychiatric nurse practitioners, and primary care doctors do most ADHD evaluations.",
      "Counselors and psychologists can’t prescribe ADHD medication in Texas.",
      "An adult evaluation looks at symptoms now and in childhood, and checks for look-alikes such as anxiety, depression, and sleep problems.",
      "You don’t need a diagnosis to start therapy for ADHD.",
    ],
    blocks: [
      {
        heading: "Who can diagnose ADHD?",
        paragraphs: [
          "ADHD can be diagnosed by psychologists, psychiatrists, psychiatric nurse practitioners, and primary care doctors, and by some licensed counselors and clinical social workers, depending on their training and state law.",
          "If you want a formal diagnosis, ask the provider directly whether they do ADHD evaluations and what theirs includes.",
        ],
        list: [
          "Psychologists, who often do the most in-depth testing",
          "Psychiatrists and psychiatric nurse practitioners, who can also prescribe medication",
          "Primary care doctors and pediatricians",
          "Some licensed counselors and clinical social workers, depending on their training and state law",
        ],
      },
      {
        heading: "Can therapists diagnose ADHD in Texas?",
        paragraphs: [
          "Some therapists in Texas can diagnose ADHD, but it depends on the therapist’s license, training, and how they practice.",
          "Texas law defines professional counseling to include assessing, evaluating, and treating mental, emotional, and behavioral disorders, and it specifically excludes diagnosing or treating physical conditions ([Texas Occupations Code §503.003](https://statutes.capitol.texas.gov/Docs/OC/pdf/OC.503.pdf)).",
          "Whether a particular counselor offers formal ADHD evaluations depends on their training and how they practice, so it’s always worth asking directly.",
        ],
      },
      {
        heading: "What is an LPC Associate in Texas?",
        paragraphs: [
          "An LPC Associate in Texas is a counselor who has finished a graduate degree and passed the licensing exam and is practicing under the supervision of a fully licensed LPC Supervisor while completing supervised hours.",
          "I’m an LPC Associate, supervised by Don Zablosky, LPC-S. I don’t provide ADHD evaluations.",
          "You can read more in [what is an LPC Associate in Texas?](/resources/what-is-an-lpc-associate/) and [the difference between an LPC, an LPC Associate, and a psychologist](/resources/lpc-vs-lpc-associate-vs-psychologist/).",
        ],
      },
      {
        heading: "How common is ADHD in adults?",
        paragraphs: [
          "ADHD is common in adults. Based on national diagnostic interview data, the National Institute of Mental Health estimates that 4.4% of U.S. adults ages 18 to 44 have current ADHD, and that 8.1% of adults in that age group have had ADHD at some point in their lives ([NIMH](https://www.nimh.nih.gov/health/statistics/attention-deficit-hyperactivity-disorder-adhd)).",
          "Those figures come from a survey done in 2001–2003, so they’re older estimates. Adults can be evaluated for ADHD for the first time at any age.",
        ],
      },
      {
        heading: "What does an adult ADHD evaluation involve?",
        paragraphs: [
          "An adult ADHD evaluation usually combines a detailed interview, questions about childhood, standardized questionnaires, and checks for other conditions that can look like ADHD.",
          "Childhood history matters because adults must have shown symptoms starting before age 12 ([NIMH](https://www.nimh.nih.gov/health/publications/adhd-what-you-need-to-know)).",
          "A thorough evaluation often includes:",
        ],
        list: [
          "A detailed conversation about your attention, focus, and daily life",
          "Questions about your childhood, since ADHD symptoms begin early in life",
          "Standardized questionnaires, like the ASRS for adults",
          "Sometimes input from a partner, parent, or someone who knows you well",
          "Checking for things that can look like ADHD, such as anxiety, depression, sleep problems, or medical conditions",
        ],
      },
      {
        heading: "Can a therapist prescribe ADHD medication?",
        paragraphs: [
          "No, therapists can’t prescribe ADHD medication in Texas.",
          "Counselors and social workers can’t prescribe medication in any state, and in Texas psychologists can’t either. ADHD medication is prescribed by psychiatrists, psychiatric nurse practitioners, primary care doctors, and other medical providers.",
          "A handful of states let specially trained psychologists prescribe, but a 2025 bill to allow it in Texas did not pass ([Texas Senate Bill 2999](https://legiscan.com/TX/research/SB2999)).",
        ],
      },
      {
        heading: "When should I see a psychiatrist about ADHD?",
        paragraphs: [
          "See a psychiatrist or other prescriber about ADHD when medication is on the table, or when your symptoms are part of a bigger picture that needs a medical eye.",
          "Counseling can continue alongside that care. Signs it’s time to check in with a prescriber include:",
        ],
        list: [
          "You want to talk about whether ADHD medication could help",
          "You’re already taking medication and have side effects or questions about the dose",
          "Focus problems came on suddenly or late in life, which can point to a medical cause worth checking",
          "You also have symptoms like extreme mood swings, panic, or heavy alcohol or drug use",
          "Daily life has become very hard to manage at work, school, or home",
        ],
      },
      {
        heading: "What should I bring to an ADHD evaluation?",
        paragraphs: [
          "Bring anything that shows how attention and organization have affected you over time, from childhood records to recent examples and a list of your medications.",
        ],
        list: [
          "Old report cards or teacher comments, if you can find them",
          "Specific examples of where things go wrong now, like missed deadlines or bills",
          "A list of any medications and supplements you take",
          "Notes on your sleep, since poor sleep can look a lot like ADHD",
          "If possible, a parent, partner, or friend who can share what they’ve noticed",
        ],
      },
      {
        heading: "How do I find a therapist for ADHD?",
        paragraphs: [
          "To find a therapist for ADHD, ask how they work with ADHD and with daily skills, and notice whether you feel understood rather than judged.",
          "Questions worth asking in a first call:",
        ],
        list: [
          "Ask whether they work with ADHD, and how",
          "Ask how they help with daily skills like planning, time, and follow-through",
          "Ask whether they’ll coordinate with your doctor or prescriber, if you have one",
          "Notice whether you feel understood rather than judged. That matters as much as any technique.",
        ],
      },
      {
        heading: "How can therapy help with ADHD?",
        paragraphs: [
          "Therapy can help with what ADHD touches, like organizing time and tasks, building routines that fit how your brain works, and working through the frustration, shame, and anxiety that often build up over years.",
          "Therapy doesn’t replace an evaluation or medication. The National Institute of Mental Health notes that therapy may not treat the core symptoms of ADHD, but adding therapy to a treatment plan can help some people better cope with daily challenges, gain confidence, or manage impulsive and risky behaviors ([NIMH](https://www.nimh.nih.gov/health/publications/adhd-what-you-need-to-know)).",
          "For practical ideas, see [creative strategies for adults with ADHD](/resources/adhd-creative-strategies/). If worry is part of the picture, [is it ADHD, anxiety, or both?](/resources/adhd-and-anxiety/) explains how they overlap.",
        ],
      },
      {
        heading: "Can I get ADHD support while I wait for an evaluation?",
        paragraphs: [
          "Yes, you can get ADHD support while you wait for an evaluation, and you don’t need a diagnosis to start counseling. Waitlists for evaluations can be long.",
          "I don’t offer ADHD evaluations or prescribe medication.",
          "I offer [talk therapy for young adults and adults with ADHD](/adhd-therapy/) or suspected ADHD, through walk and talk sessions in Dallas–Fort Worth or online anywhere in Texas. If you’re looking for an evaluation, we can talk through where to go.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need an ADHD diagnosis to start therapy?",
        a: "No, you don’t need an ADHD diagnosis to start therapy. You can start while you wait for an evaluation, or without one.",
      },
      {
        q: "Can ADHD be evaluated online?",
        a: "Some providers do ADHD evaluations by telehealth. Ask what’s included, since a thorough evaluation usually involves more than one questionnaire.",
      },
      {
        q: "Can a therapist prescribe ADHD medication?",
        a: "No, a therapist can’t prescribe ADHD medication in Texas. ADHD medication is prescribed by psychiatrists, psychiatric nurse practitioners, and other medical providers, not counselors or psychologists.",
      },
      {
        q: "Can my primary care doctor diagnose ADHD?",
        a: "Yes, primary care doctors can diagnose ADHD and may prescribe medication. Some refer adults to a psychiatrist or psychologist for more in-depth testing.",
      },
      {
        q: "Is there a free ADHD screening questionnaire?",
        a: "Yes, the ASRS v1.1 is a free adult ADHD screening questionnaire, linked on the [screening tools page](/screening-tools/). It isn’t a diagnosis, but it can help you decide whether to seek an evaluation.",
      },
      {
        q: "Is ADHD testing covered by insurance?",
        a: "ADHD testing is often at least partly covered by insurance, but it depends on your plan and the provider. Ask the evaluator what the full evaluation costs, whether they bill insurance, and what your plan covers before you book.",
      },
      {
        q: "Does an LPC Associate diagnose ADHD?",
        a: "Whether an LPC Associate diagnoses ADHD depends on training, supervision, and how the counselor practices, so ask directly. I don’t provide ADHD evaluations. If you want one, I can help you think through where to go, such as a psychologist or psychiatrist.",
      },
    ],
  },
  {
    path: "resources/what-is-holistic-therapy",
    published: "2026-11-19",
    related: [
      LINK.holisticCounseling,
      LINK.personCentered,
      LINK.anxiety,
      LINK.depression,
      LINK.selfCare,
      LINK.muslimFaith,
      LINK.selfReflection,
    ],
    title: title("What Is Holistic Therapy?"),
    description:
      "What holistic therapy means, how it works in talk therapy, what research supports, and how to find a holistic therapist you can trust.",
    eyebrow: "Holistic therapy",
    heading: "What is holistic therapy?",
    intro:
      "Holistic therapy is an approach to counseling that looks at the whole person: your thoughts and feelings, and also your body, sleep, stress, relationships, culture, and sense of meaning. It isn’t one technique. It’s a way of seeing how all of those pieces affect each other, while staying within talk therapy.",
    takeaways: [
      "Holistic therapy is talk therapy that pays attention to the whole person, including the body, sleep, stress, relationships, and meaning.",
      "It isn’t a single tested method, so research looks at its parts, like exercise, mindfulness, sleep, and slow breathing.",
      "Some of those parts have strong research support. Other practices sold as holistic have little or none.",
      "Holistic counseling is not alternative medicine, and a trustworthy holistic therapist won’t tell you to stop medication or promise a cure.",
      "Check that any holistic therapist is licensed and can explain what their methods are based on.",
    ],
    blocks: [
      {
        heading: "What does holistic therapy mean?",
        paragraphs: [
          "Holistic therapy means looking at mental health as connected to the rest of your life, so that sleep, stress, the body, and relationships are part of the conversation, not just symptoms.",
          "In a holistic approach, a racing mind isn’t treated as separate from poor sleep, a tense body, or a stressful job. Mental health is shaped by many things at once, so care looks at the whole picture rather than one symptom.",
          "The word is used loosely. Some practitioners use it for talk therapy with a mind-body focus. Others use it for services like massage, acupuncture, or energy work, which are separate from counseling and have very different levels of evidence.",
        ],
      },
      {
        heading: "How does holistic therapy work?",
        paragraphs: [
          "Holistic therapy works by combining ordinary talk therapy with attention to the body, daily habits, and what gives your life meaning.",
          "In talk therapy, a holistic approach can include:",
        ],
        list: [
          "Talking through what’s going on, as in any counseling",
          "Noticing where stress shows up in your body",
          "Breathing and grounding skills to help calm your nervous system",
          "Looking at sleep, movement, and daily routines",
          "Mindfulness and attention to the present moment",
          "Time outdoors, including walk and talk sessions",
          "Values, meaning, culture, and faith, if they matter to you",
        ],
      },
      {
        heading: "Does holistic therapy work?",
        paragraphs: [
          "Holistic therapy as a whole hasn’t been tested as one method, but several of its parts, like exercise, mindfulness-based programs, and better sleep, have good research support.",
          "Because holistic is a broad label, research looks at its parts rather than the whole. Regular exercise can ease symptoms of depression and anxiety ([Singh et al., 2023](https://doi.org/10.1136/bjsports-2022-106195)).",
          "Mindfulness-based programs can help with stress and lower the chance of depression coming back. A pooled analysis of 9 randomized trials with 1,258 patients found that people who had mindfulness-based cognitive therapy were less likely to relapse into depression over 60 weeks than those who didn’t ([Kuyken et al., 2016](https://pubmed.ncbi.nlm.nih.gov/27119968/)).",
          "Better sleep is closely tied to better mood. A meta-analysis of 65 randomized trials with 8,608 participants found that improving sleep led to less depression and anxiety ([Scott et al., 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8651630/)).",
          "Other practices sold as holistic have little or no evidence. A good holistic therapist can tell you what a technique is based on.",
        ],
      },
      {
        heading: "What happens in a holistic therapy session?",
        paragraphs: [
          "A holistic therapy session is still talk therapy, with more attention than usual on the body and daily life alongside thoughts and feelings.",
          "A session might look something like this:",
        ],
        list: [
          "Checking in on how the week went, including sleep, energy, and stress",
          "Talking through what’s on your mind, at your pace",
          "Noticing what happens in your body as you talk, like a tight chest or a clenched jaw",
          "Trying a short grounding or breathing exercise if it fits the moment",
          "Choosing one small, realistic step to try before the next session",
        ],
      },
      {
        heading: "Which mind-body practices have research behind them?",
        paragraphs: [
          "The mind-body practices with the most research behind them include slow breathing, regular physical activity, and time in green spaces.",
          "Slow, paced breathing has been linked with a calmer nervous system and lower stress ([Zaccaro et al., 2018](https://doi.org/10.3389/fnhum.2018.00353)).",
          "Regular physical activity is linked with lower anxiety and depression ([Singh et al., 2023](https://doi.org/10.1136/bjsports-2022-106195)), and time in green spaces is linked with lower stress ([Hunter et al., 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6458297/)).",
          "These are supports that work alongside counseling, not replacements for it, and results vary from person to person. You can try some of them on your own with these [nervous system regulation techniques](/resources/nervous-system-regulation-techniques/).",
        ],
      },
      {
        heading: "What can holistic therapy help with?",
        paragraphs: [
          "Holistic therapy is often used for stress, anxiety, low mood, burnout, and life changes, especially when those concerns show up in the body or in sleep.",
          "It can fit well if you notice that stress lands in your shoulders, your stomach, or your sleep, or if you want counseling that includes daily habits and meaning, not only problem-solving.",
          "It isn’t a separate treatment for any one condition. It’s a way of doing talk therapy. You can read more about [anxiety therapy](/anxiety-therapy-dallas/), [depression counseling](/depression-counseling-dallas/), or [burnout vs. depression](/resources/burnout-vs-depression/).",
        ],
      },
      {
        heading: "How is holistic counseling different from alternative medicine?",
        paragraphs: [
          "Holistic counseling is talk therapy with licensed oversight, while alternative medicine usually means treatments used in place of standard medical care.",
          "Holistic counseling doesn’t involve supplements, diets, energy work, or medical treatment, and a holistic counselor shouldn’t tell you to change or stop any medication.",
          "If a practice promises a cure or asks you to give up medical care, that’s a red flag.",
        ],
      },
      {
        heading: "How do I find a holistic therapist I can trust?",
        paragraphs: [
          "A trustworthy holistic therapist is licensed, explains what their methods are based on, and still works on the concerns that brought you in.",
          "Before you book, it helps to:",
        ],
        list: [
          "Check that they’re licensed, and look up the license on your state board’s website",
          "Be cautious of anyone who promises a cure or tells you to stop medication",
          "Ask what a session actually looks like",
          "Make sure they still work on the concerns that brought you in, not only general wellness",
        ],
      },
      {
        heading: "Where can I find holistic counseling in Dallas?",
        paragraphs: [
          "Holistic counseling in Dallas–Fort Worth is available with me as talk therapy that pays attention to the body, sleep, movement, and nature.",
          "My approach is holistic and grounding, and it stays within talk therapy. I combine person-centered, solution-focused, and Jungian ideas with research on the body, sleep, movement, and nature.",
          "Sessions happen as [walk and talk sessions](/walk-and-talk-therapy-dallas/) in Dallas–Fort Worth or [online anywhere in Texas](/telehealth-counseling-texas/). I don’t prescribe medication or offer medical treatments. You can read more about [holistic counseling in Dallas–Fort Worth](/holistic-counseling/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Are holistic therapies effective?",
        a: "Some holistic therapies are effective, and some aren’t. Parts like exercise, mindfulness-based approaches, and better sleep have good research support, while others don’t. It’s fair to ask any therapist what their methods are based on.",
      },
      {
        q: "Is holistic therapy the same as alternative medicine?",
        a: "No, holistic therapy is not the same as alternative medicine. Holistic therapy can be regular, licensed counseling that pays attention to the whole person. Alternative medicine usually means treatments used instead of standard medical care, which is a different thing.",
      },
      {
        q: "Can holistic therapy help with anxiety?",
        a: "Holistic therapy can help some people with anxiety, since parts of it, like breathing skills, movement, and better sleep, are commonly used alongside talk therapy. How much it helps varies from person to person.",
      },
      {
        q: "Will a holistic therapist tell me to stop my medication?",
        a: "A trustworthy holistic therapist won’t tell you to stop your medication. Decisions about medication belong with you and your prescriber.",
      },
      {
        q: "Does holistic therapy involve religion or spirituality?",
        a: "Holistic therapy involves religion or spirituality only if you want it to. For some people, faith or spirituality is part of what gives life meaning, and for others it isn’t. Nothing is assumed, and the focus stays on what matters to you.",
      },
      {
        q: "Is holistic therapy evidence-based?",
        a: "Holistic therapy isn’t a single tested method, but holistic counseling draws on approaches with research behind them, like paced breathing, physical activity, and time outdoors. Ask any counselor which approaches they use and why.",
      },
      {
        q: "What is a holistic therapist?",
        a: "A holistic therapist is a counselor or therapist who looks at the whole person, including the body, sleep, stress, relationships, and meaning, alongside thoughts and feelings. The title isn’t a license on its own, so check that the person holds a state counseling or therapy license.",
      },
    ],
  },
  {
    path: "resources/therapy-for-young-adults",
    published: "2026-11-19",
    related: [LINK.youngAdult, LINK.anxiety, LINK.depression, LINK.consultation],
    title: title("Therapy for Young Adults"),
    description:
      "Is therapy right for your young adult? Signs it may help, how to bring it up, privacy after 18, and when therapy alone isn’t enough.",
    eyebrow: "Young adults",
    heading: "Is therapy right for my young adult?",
    intro:
      "Therapy is often a good fit for a young adult, somewhere between 18 and their late twenties, who has been struggling for more than a few weeks with worry, low mood, or a hard transition. It tends to work best when they choose it themselves, with your support in the background. This guide covers signs it may help, how to bring it up, privacy after 18, and what to do when therapy alone isn’t enough.",
    takeaways: [
      "Therapy can help young adults with worry, low mood, stress, and big transitions like college, a first job, or moving out.",
      "It usually works best when your young adult chooses it. Your role is to make it easier, not to require it.",
      "After 18, counseling is confidential. A counselor can share information with a parent only with the young adult’s written permission.",
      "Thoughts of suicide, heavy substance use, or being unable to manage daily life can mean more support is needed than weekly therapy.",
      "In a crisis, call or text 988, call 911, or go to the nearest emergency room.",
    ],
    blocks: [
      {
        heading: "Is therapy right for my young adult, or is it just a phase?",
        paragraphs: [
          "Therapy may be right for your young adult if their struggles have lasted more than a couple of weeks and are getting in the way of school, work, sleep, or relationships. Some ups and downs are a normal part of growing up, but distress that keeps going deserves attention.",
          "Mental health concerns are common at this age. In 2022, adults aged 18 to 25 had the highest rate of any mental illness of any adult age group, at 36.2%, according to the [National Institute of Mental Health](https://www.nimh.nih.gov/health/statistics/mental-illness).",
          "The same [NIMH data](https://www.nimh.nih.gov/health/statistics/mental-illness) show that 49.1% of young adults with a mental illness received mental health treatment that year. Many young people who are struggling don’t get support, so a parent who notices and offers help can make it easier to reach out.",
          "If worry or low mood is the main concern, these pages on [anxiety therapy in Dallas–Fort Worth](/anxiety-therapy-dallas/) and [depression counseling in Dallas–Fort Worth](/depression-counseling-dallas/) explain what support can look like.",
        ],
      },
      {
        heading: "What are signs therapy might help a young adult?",
        paragraphs: [
          "Signs that therapy might help a young adult include ongoing worry or low mood, pulling away from people, and trouble keeping up with daily life. No single sign means something is wrong, but several together, or one that lasts, is worth a gentle conversation.",
          "Common signs to watch for:",
        ],
        list: [
          "Ongoing worry, low mood, or irritability",
          "Pulling away from friends, family, or things they used to enjoy",
          "Struggling to keep up with school, work, or daily tasks",
          "Big changes in sleep, eating, or energy",
          "Feeling stuck during a transition, like college, graduating, or moving out",
          "Drinking or using substances to cope",
        ],
      },
      {
        heading: "How do I bring up therapy with my young adult?",
        paragraphs: [
          "The best way to bring up therapy with a young adult is in a calm, private moment, by sharing what you’ve noticed and offering help without pressure. Framing it as support, not as proof that something is wrong with them, makes it easier to hear.",
          "Some young adults are more open to a format that feels less formal. [Walk and talk therapy](/resources/what-is-walk-and-talk-therapy/) happens outdoors while walking side by side, and [online counseling anywhere in Texas](/telehealth-counseling-texas/) can fit around classes and work.",
          "A few things that tend to help:",
        ],
        list: [
          "Pick a calm moment, not the middle of an argument",
          "Describe what you’ve noticed and why you care, without labels",
          "Offer help with the practical parts, like finding options or paying",
          "Let them choose the counselor and the format, such as walk and talk or online",
          "If they say no, keep the door open and try again later",
        ],
      },
      {
        heading: "What can parents know about their young adult’s therapy?",
        paragraphs: [
          "Once a young adult turns 18, their counseling is confidential between them and their counselor, within the limits of the law, even if a parent is paying. A counselor can share information with a parent only if the young adult gives written permission.",
          "That privacy can feel hard as a parent. Many young adults open up more because of it, and trust matters in therapy: research consistently links the working relationship between client and counselor with how well therapy goes ([Flückiger et al., 2018](https://doi.org/10.1037/pst0000172)).",
          "Your young adult can choose to sign a release if they want you involved, for example with scheduling or payment. That choice stays with them.",
        ],
      },
      {
        heading: "What happens when therapy alone isn’t enough for young adults?",
        paragraphs: [
          "When therapy alone isn’t enough for young adults, the next step is usually adding more support, such as a psychiatric evaluation, a more intensive program, or a higher level of care. Weekly counseling helps many young adults, but some situations need more.",
          "Signs that more support may be needed include:",
        ],
        list: [
          "Thoughts of suicide or self-harm",
          "Not getting better, or getting worse, after a fair amount of time in therapy",
          "Being unable to go to school or work, or to take care of basic needs",
          "Heavy substance use",
          "Signs of an eating disorder",
          "Seeing or hearing things others don’t, or losing touch with reality",
        ],
      },
      {
        heading: "What does more support look like for a young adult?",
        paragraphs: [
          "More support for a young adult can mean a psychiatric evaluation to discuss medication, an intensive outpatient program with several sessions a week, or a higher level of care. A primary care doctor can be a good first stop for a referral.",
          "Counseling can often continue alongside these options. Counselors don’t prescribe medication, so a psychiatrist, nurse practitioner, or primary care doctor handles that part. This guide to [LPC vs. LPC Associate vs. psychologist](/resources/lpc-vs-lpc-associate-vs-psychologist/) explains who does what.",
          "If there’s any risk to their safety, call or text 988, call 911, or go to the nearest emergency room. You’ll find more local options on the [crisis resources page for Dallas–Fort Worth](/crisis/).",
        ],
      },
      {
        heading: "How do I find a therapist for young adults in Dallas–Fort Worth?",
        paragraphs: [
          "I’m Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S, and I offer [counseling for young adults](/young-adult-counseling/) through walk and talk sessions in Dallas–Fort Worth or online anywhere in Texas.",
          "Your young adult is welcome to call for a free 15-minute consultation themselves. If you’re the one calling, I’m glad to explain how it works so you can pass it along.",
          "If you’d like to know what that first call covers, [what happens in a free counseling consultation](/resources/free-counseling-consultation/) walks through it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I make my adult child go to therapy?",
        a: "You can’t make an adult child go to therapy, and pressure usually backfires. What you can do is make it easier: share options, offer to help pay, and let them decide.",
      },
      {
        q: "Can I talk to my young adult’s therapist?",
        a: "A therapist can share information with you only if your young adult gives written permission. Without it, they can’t confirm or discuss your young adult’s care.",
      },
      {
        q: "Is online therapy a good option for young adults?",
        a: "Online therapy is a good option for many young adults. It’s easy to fit around classes and work, as long as they have a private place to talk and are located in Texas for each session.",
      },
      {
        q: "What if my young adult is in crisis?",
        a: "If your young adult is in crisis, call or text 988, call 911, or go to the nearest emergency room. Don’t wait for a counseling appointment.",
      },
      {
        q: "What age counts as a young adult in therapy?",
        a: "In counseling, young adult usually means someone from about 18 to their late twenties. It’s a stage full of changes, like school, first jobs, relationships, and moving out.",
      },
      {
        q: "Does therapy for a young adult have to be weekly?",
        a: "Therapy doesn’t have to be weekly, though many people start that way. Your young adult and their counselor can adjust how often they meet as things change.",
      },
    ],
  },
  {
    path: "resources/adhd-and-anxiety",
    published: "2026-11-19",
    related: [LINK.adhdTherapy, LINK.anxiety, LINK.adhdDiagnose, LINK.adhdWomen, LINK.rsd],
    title: title("ADHD and Anxiety in Adults"),
    description:
      "ADHD and anxiety share signs like restlessness and poor focus. How they differ, why they often show up together, and what helps adults with both.",
    eyebrow: "ADHD",
    heading: "Is it ADHD, anxiety, or both?",
    intro:
      "It can be either one, and for many adults it’s both. ADHD and anxiety share signs like restlessness, trouble focusing, and poor sleep, and research finds that adult ADHD often occurs alongside other mental health conditions, including anxiety. Only a qualified professional can sort out which is which, but knowing how they overlap can help you ask the right questions.",
    takeaways: [
      "ADHD and anxiety share signs like restlessness, poor focus, and trouble sleeping, and many adults have both.",
      "ADHD begins in childhood. Anxiety can start at any age and often rises and falls with stress.",
      "A psychologist, psychiatrist, or other qualified provider can evaluate which one, or both, is present.",
      "Free screeners like the ASRS v1.1 and GAD-7 can start a conversation, but they aren’t a diagnosis.",
      "Talk therapy, grounding skills, movement, and steady sleep can help with both.",
    ],
    blocks: [
      {
        heading: "Can you have ADHD and anxiety at the same time?",
        paragraphs: [
          "Yes, you can have ADHD and anxiety at the same time, and many adults do.",
          "In a large U.S. survey of adults, ADHD was highly comorbid, meaning it often occurred alongside other mental health conditions measured in the survey, including anxiety disorders ([Kessler et al., 2006](https://pubmed.ncbi.nlm.nih.gov/16585449/)).",
          "Anxiety is also common on its own. The National Institute of Mental Health estimates that 19.1% of U.S. adults had an anxiety disorder in the past year ([NIMH](https://www.nimh.nih.gov/health/statistics/any-anxiety-disorder)).",
          "Living with ADHD can also bring a lot of everyday worry: about missed deadlines, forgotten bills, or letting people down again. Over time, that worry can grow into a problem of its own.",
        ],
      },
      {
        heading: "How are ADHD and anxiety different?",
        paragraphs: [
          "ADHD and anxiety differ mainly in what pulls your attention away, when the struggles began, and what restlessness feels like.",
          "From the outside they can look alike. A few general differences:",
        ],
        list: [
          "Focus: with anxiety, attention is often pulled toward worries. With ADHD, attention drifts to whatever is most interesting, even when you feel calm.",
          "Timing: ADHD begins in childhood and shows up across most of life. Anxiety can start at any age and often rises and falls with stress.",
          "Restlessness: anxious restlessness usually comes with tension or dread. ADHD restlessness can feel more like boredom or a need to move.",
          "Putting things off: with anxiety, people often avoid a task out of fear of getting it wrong. With ADHD, starting is hard even when the task isn’t scary.",
        ],
      },
      {
        heading: "Does ADHD always start in childhood?",
        paragraphs: [
          "Yes, ADHD begins in childhood, and an adult evaluation looks for symptoms that started before age 12 ([NIMH](https://www.nimh.nih.gov/health/publications/adhd-what-you-need-to-know)).",
          "That doesn’t mean it was noticed back then. Many adults only start to wonder about ADHD when school, work, or family life gets more demanding.",
          "Anxiety, on the other hand, can begin at any point in life. The timing of when struggles first showed up is one of the things an evaluator asks about.",
        ],
      },
      {
        heading: "Why does it matter whether it’s ADHD or anxiety?",
        paragraphs: [
          "Knowing whether it’s ADHD, anxiety, or both matters because the right support can be different for each.",
          "Something that helps anxiety may not touch ADHD, and the reverse is true too. When both are present, both need attention.",
          "That’s why an evaluation by a psychologist, psychiatrist, or other qualified medical provider matters more than any online quiz. [Can a therapist diagnose ADHD?](/resources/can-a-therapist-diagnose-adhd/) explains who does evaluations in Texas.",
        ],
      },
      {
        heading: "What helps with ADHD and anxiety?",
        paragraphs: [
          "Many adults with ADHD and anxiety find that talk therapy, simple systems for time and tasks, calming skills, movement, and steady sleep help with both.",
          "Plans are individual, and decisions about medication belong with you and your prescriber.",
          "Movement is one of the better-studied options. A 2023 review of 97 systematic reviews found that physical activity had a medium-sized effect on anxiety symptoms compared with usual care ([Singh et al., 2023](https://doi.org/10.1136/bjsports-2022-106195)).",
          "Alongside that, many adults find these helpful:",
        ],
        list: [
          "Talk therapy to work through worry, self-criticism, and the shame that can build up after years of feeling behind",
          "Simple systems for time and tasks, so fewer things slip and there’s less to worry about",
          "Slow breathing and grounding skills to calm your body when worry spikes, like these [nervous system regulation techniques](/resources/nervous-system-regulation-techniques/)",
          "Regular movement, like a daily walk, that fits your week",
          "Steady sleep, since poor sleep makes both focus and worry harder",
          "Time outdoors, which many people find calming",
        ],
      },
      {
        heading: "Can a free screener tell me if it’s ADHD or anxiety?",
        paragraphs: [
          "No, a free screener can’t tell you on its own whether it’s ADHD or anxiety, but it can help you decide whether to seek an evaluation.",
          "My [screening tools page](/screening-tools/) links to free questionnaires, including the ASRS v1.1 for adult ADHD and the GAD-7 for anxiety. They aren’t a diagnosis.",
          "If your results or your daily life point that way, bring them to a psychologist, psychiatrist, or doctor and ask about an evaluation.",
        ],
      },
      {
        heading: "When should you get help right away?",
        paragraphs: [
          "Get help right away if worry or low mood ever leads to thoughts of suicide or harming yourself: call or text 988, call 911, or go to the nearest emergency room.",
          "You’ll also find local Dallas–Fort Worth crisis lines on my [crisis resources page](/crisis/).",
        ],
      },
      {
        heading: "Where can I get support for ADHD and anxiety in Dallas?",
        paragraphs: [
          "Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S, offers talk therapy for adults dealing with ADHD, anxiety, or both, through walk and talk sessions in Dallas–Fort Worth or online for anyone located in Texas.",
          "I don’t offer ADHD evaluations or prescribe medication.",
          "My approach is practical and holistic: grounding skills, sleep, movement, and routines that fit how you think, at a pace you set. You can read more about [ADHD therapy](/adhd-therapy/) and [anxiety therapy](/anxiety-therapy-dallas/).",
          "A free 15-minute consultation is an easy way to see if it’s a fit.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can ADHD cause anxiety?",
        a: "ADHD can contribute to anxiety. The daily stress of ADHD, like missed deadlines and constant catching up, can feed ongoing worry. Some people also have both conditions separately. A professional can help you sort out what applies to you.",
      },
      {
        q: "Can anxiety look like ADHD?",
        a: "Yes, anxiety can look like ADHD. Anxiety can make it hard to focus, finish tasks, or sit still. That’s one reason a careful evaluation also checks for anxiety.",
      },
      {
        q: "Can ADHD medication affect anxiety?",
        a: "Some people notice changes in anxiety on ADHD medication, and others don’t. That’s a question for your prescriber. Don’t start, stop, or change medication on your own.",
      },
      {
        q: "Can therapy help with ADHD and anxiety?",
        a: "Talk therapy can help with the worry, self-criticism, and daily planning that often come with ADHD and anxiety. It doesn’t replace an evaluation or medication when those are needed.",
      },
      {
        q: "Can anxiety start in adulthood?",
        a: "Yes, anxiety can start at any age, including adulthood. ADHD is different: it begins in childhood, even if it isn’t recognized until later.",
      },
    ],
  },
  {
    path: "resources/adhd-signs-in-women",
    published: "2026-11-20",
    related: [LINK.adhdTherapy, LINK.adhdDiagnose, LINK.adhdAnxiety, LINK.screening, LINK.rsd],
    title: title("ADHD Signs in Women"),
    description:
      "Common signs of ADHD in adult women, why it’s often missed or found later, and what to do next, from free screening to evaluation and support.",
    eyebrow: "ADHD",
    heading: "What are the signs of ADHD in women?",
    intro:
      "Common signs of ADHD in women include a busy, jumping mind, losing track of time and tasks, feeling overwhelmed by daily logistics, and years of working twice as hard to keep up. ADHD in women often looks quieter than the stereotype, with less obvious hyperactivity. Many women only start to wonder about ADHD as adults.",
    takeaways: [
      "ADHD in women often looks quieter: a busy mind, forgetfulness, and overwhelm rather than obvious hyperactivity.",
      "Gender bias, anxiety, and strong coping strategies can hide ADHD, so it’s often missed or found later.",
      "Stress, other mental health conditions, and some physical health conditions can look like ADHD, so a careful evaluation matters.",
      "A free screener like the ASRS v1.1 is a starting point, not a diagnosis.",
      "You can start counseling with or without a diagnosis.",
    ],
    blocks: [
      {
        heading: "What are the most common signs of ADHD in women?",
        paragraphs: [
          "The most common signs of ADHD in adult women are often inward ones: a busy mind, forgetfulness, overwhelm, and exhaustion from working hard to look organized.",
          "Everyone’s experience is different. Some common experiences include:",
        ],
        list: [
          "Losing track of time, appointments, or tasks despite trying hard",
          "A mind that jumps between thoughts, or drifting off in conversations",
          "Feeling overwhelmed by the logistics of home, work, or school",
          "Starting many projects and struggling to finish them",
          "Putting tasks off until the pressure of a deadline finally gets you moving",
          "Strong feelings that come on fast, followed by harsh self-criticism",
          "Feeling drained from working so hard to look organized",
        ],
      },
      {
        heading: "Why is ADHD in women often missed?",
        paragraphs: [
          "ADHD in women is often missed because it tends to look more internal and less disruptive than the classic picture, and because anxiety and strong coping habits can cover it up.",
          "A consensus statement on girls and women with ADHD, written by an international group of clinicians and researchers, describes how gender bias, co-occurring conditions such as anxiety, and the coping strategies many women build can hide ADHD. It also notes that ADHD in females tends to look more internal and less disruptive than the classic picture ([Young et al., 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7422602/)).",
          "From the outside, careful lists, late nights, and constant double-checking can make life look under control. On the inside, keeping it all going can feel exhausting.",
        ],
      },
      {
        heading: "Does ADHD in women change with age?",
        paragraphs: [
          "ADHD often continues into adulthood, though symptoms can change with age, and for some people they become less severe and less impairing ([NIMH](https://www.nimh.nih.gov/health/publications/adhd-what-you-need-to-know)).",
          "Bigger life demands can also bring ADHD into focus, like starting college, taking on a demanding job, or running a household, when the old ways of coping stop being enough.",
        ],
      },
      {
        heading: "How common is ADHD in adult women?",
        paragraphs: [
          "Based on national survey data, the National Institute of Mental Health estimates that 3.2% of U.S. women ages 18 to 44 had current ADHD, compared with 5.4% of men in the same age group ([NIMH](https://www.nimh.nih.gov/health/statistics/attention-deficit-hyperactivity-disorder-adhd)).",
          "Those figures come from a survey done in 2001–2003, so they’re older estimates and newer studies may show different numbers.",
        ],
      },
      {
        heading: "What else can look like ADHD in women?",
        paragraphs: [
          "Stress, other mental health conditions, and some physical health conditions can cause symptoms that look like ADHD, which is why a careful evaluation matters.",
          "An adult evaluation also looks back for symptoms that began before age 12 ([NIMH](https://www.nimh.nih.gov/health/publications/adhd-what-you-need-to-know)).",
          "ADHD and anxiety in particular can look alike and often show up together. [Is it ADHD, anxiety, or both?](/resources/adhd-and-anxiety/) explains how they differ.",
        ],
      },
      {
        heading: "What should I do if I think I have ADHD?",
        paragraphs: [
          "If you think you have ADHD, a good first step is a free screener, and then a conversation with a doctor, psychiatrist, or psychologist about a full evaluation.",
        ],
        list: [
          "Try a free screener, such as the ASRS v1.1 linked on the [screening tools page](/screening-tools/). It isn’t a diagnosis.",
          "Ask your doctor, a psychiatrist, or a psychologist about a full ADHD evaluation",
          "Consider counseling for day-to-day support while you decide",
        ],
      },
      {
        heading: "Where can women get ADHD support in Dallas?",
        paragraphs: [
          "Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S, offers [adult ADHD counseling](/adhd-therapy/) for women who have ADHD or suspect it, through walk and talk sessions in Dallas–Fort Worth or online anywhere in Texas.",
          "I don’t diagnose ADHD or prescribe medication.",
          "Not sure who can evaluate you? Read [can a therapist diagnose ADHD?](/resources/can-a-therapist-diagnose-adhd/) For ideas you can try today, see [creative strategies for adults with ADHD](/resources/adhd-creative-strategies/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Can ADHD be diagnosed for the first time as an adult?",
        a: "Yes, ADHD can be diagnosed for the first time in adulthood. The evaluation usually looks at symptoms now and in childhood.",
      },
      {
        q: "Is it ADHD or anxiety?",
        a: "ADHD and anxiety can look alike and often happen together. An evaluation can help sort out what’s going on.",
      },
      {
        q: "Do I need a diagnosis to start counseling?",
        a: "No, you don’t need a diagnosis to start counseling. You can start with or without one, or while you wait for an evaluation.",
      },
      {
        q: "Is there a free ADHD test for women?",
        a: "Free ADHD screeners for adults, like the ASRS v1.1, work for women and men alike, but they can’t diagnose ADHD. You’ll find it on the [screening tools page](/screening-tools/), and you can bring your results to a qualified professional.",
      },
    ],
  },
  {
    path: "resources/burnout-vs-depression",
    published: "2026-11-20",
    related: [
      LINK.depression,
      LINK.holisticCounseling,
      LINK.lasColinas,
      LINK.selfCare,
      LINK.adhdBurnout,
      LINK.stress,
      LINK.lifeTransitions,
    ],
    title: title("Burnout vs. Depression"),
    description:
      "How burnout and depression differ and overlap, the signs of each, and when to talk with a counselor or doctor. Plain language, with research sources.",
    eyebrow: "Burnout",
    heading: "Burnout vs. depression: what’s the difference?",
    intro:
      "The main difference between burnout and depression is scope: burnout is tied to chronic stress at work, while depression tends to color every part of life. Both can leave you tired, flat, and running on empty, and the two can overlap.",
    takeaways: [
      "Burnout is a work-related syndrome that the World Health Organization classifies as an occupational phenomenon, not a medical condition.",
      "Depression affects mood, interest, sleep, energy, and concentration across all of life, for at least two weeks.",
      "Researchers have found substantial overlap between the two, so it isn’t always clear where one ends and the other begins.",
      "If you feel better on time off, work may be the bigger factor. If low mood follows you everywhere, it may be depression.",
      "Thoughts of hopelessness or self-harm always deserve prompt attention. Call or text 988.",
    ],
    blocks: [
      {
        heading: "What is burnout?",
        paragraphs: [
          "Burnout is a syndrome caused by chronic workplace stress that hasn’t been successfully managed, and it refers specifically to work.",
          "The World Health Organization includes burnout in ICD-11 as an occupational phenomenon, not a medical condition ([WHO](https://www.who.int/standards/classifications/frequently-asked-questions/burn-out-an-occupational-phenomenon)). It has three parts:",
        ],
        list: [
          "Feeling exhausted or depleted",
          "Feeling distant, negative, or cynical about your job",
          "Feeling less effective at work",
        ],
      },
      {
        heading: "What is depression?",
        paragraphs: [
          "Depression is a mood condition that involves low mood or loss of interest or pleasure most of the day, nearly every day, for at least two weeks.",
          "It comes with other changes, such as in sleep, appetite, energy, and concentration ([NIMH](https://www.nimh.nih.gov/health/publications/depression)). Unlike burnout, it isn’t limited to one area of life.",
          "Depression is common. In 2021, an estimated 21.0 million U.S. adults, 8.3% of all adults, had at least one major depressive episode ([NIMH](https://www.nimh.nih.gov/health/statistics/major-depression)).",
        ],
      },
      {
        heading: "Do burnout and depression overlap?",
        paragraphs: [
          "Burnout and depression overlap a great deal, and researchers still debate how separate they really are.",
          "A review of 92 studies found substantial overlap and concluded that the line between burnout and depression is conceptually fragile ([Bianchi, Schonfeld & Laurent, 2015](https://www.ccny.cuny.edu/sites/default/files/2022-03/Bianchi%2C%20Schonfeld%2C%20Laurent%2C%202015%2C%20Clinical%20Psy%20Review.pdf)).",
          "In everyday terms, long-running burnout can start to look and feel a lot like depression. That’s one reason it helps to pay attention to how long symptoms last and how far they spread.",
        ],
      },
      {
        heading: "How can I tell if it’s burnout or depression?",
        paragraphs: [
          "One way to tell burnout from depression is to notice whether you feel better away from work: burnout often eases on time off, while depression tends to follow you everywhere.",
          "These questions can help you notice the difference:",
        ],
        list: [
          "Do I feel noticeably better on weekends or time off? If so, work may be the bigger factor.",
          "Does the low mood follow me everywhere, even into things I used to enjoy? That points more toward depression.",
          "Am I having thoughts of hopelessness or self-harm? Those always deserve prompt attention.",
        ],
      },
      {
        heading: "What are the signs of burnout and depression?",
        paragraphs: [
          "Burnout and depression share signs like exhaustion and trouble concentrating, but burnout centers on work while depression reaches into all of life.",
          "Some common patterns:",
        ],
        list: [
          "Burnout: dreading work, feeling cynical about your job, and feeling less effective there",
          "Depression: low mood or loss of interest in most things, including things you used to enjoy",
          "Both: tiredness that rest doesn’t fix, poor sleep, and trouble focusing",
        ],
      },
      {
        heading: "What helps with burnout and depression?",
        paragraphs: [
          "What helps with burnout is usually change at work, while depression often calls for support from a counselor, a doctor, or both, and many people need a bit of each.",
          "For burnout, changes at work matter: workload, boundaries, and real rest. For depression, support from a counselor, your doctor, or both can help.",
          "Counseling can help you sort out what’s going on and find steps that fit your life. If your work life is the center of it, see [counseling in Las Colinas](/counseling-las-colinas-tx/), or read about [depression counseling](/depression-counseling-dallas/).",
          "Everyday habits can support either one. [Self-care for mental health](/resources/self-care-for-mental-health/) and [holistic counseling](/holistic-counseling/) both look at sleep, movement, and stress alongside how you feel.",
        ],
      },
      {
        heading: "When should I talk to a counselor or doctor about burnout?",
        paragraphs: [
          "It’s a good idea to talk with a counselor or doctor about burnout when symptoms last for weeks, spread beyond work, or don’t lift after time off.",
          "A doctor can check whether something physical is adding to the exhaustion. A counselor can help you understand what’s driving the stress and what you can change.",
          "If you’re thinking about suicide or harming yourself, call or text 988 or call 911, or see [crisis resources in Dallas–Fort Worth](/crisis/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Is burnout a medical diagnosis?",
        a: "No, burnout is not a medical diagnosis. The World Health Organization classifies burnout as an occupational phenomenon, not a medical condition.",
      },
      {
        q: "Can burnout and depression happen together?",
        a: "Yes, burnout and depression can happen together. They often overlap, and it isn’t always clear where one ends and the other begins. If symptoms spread beyond work or last for weeks, talk to a counselor or your doctor.",
      },
      {
        q: "When should I get help right away?",
        a: "Get help right away if you’re thinking about suicide or harming yourself: call or text 988 or call 911.",
      },
      {
        q: "Will time off fix burnout?",
        a: "Time off often helps with burnout, but it may not be enough if the same work conditions are waiting when you return. If your mood stays low even after a real break, it may be more than burnout, and it’s worth talking with a counselor or your doctor.",
      },
    ],
  },
  {
    path: "resources/how-to-choose-a-therapist-dallas",
    published: "2026-11-20",
    related: [
      LINK.dallas,
      LINK.lpcVs,
      LINK.consultation,
      LINK.affordable,
      LINK.lpcVsLcsw,
      LINK.aboutSarah,
    ],
    title: title("Choosing a Therapist in Dallas"),
    description:
      "How to choose a therapist in Dallas: what to look for, how to check a Texas license, questions to ask on a free call, and red flags to notice.",
    eyebrow: "Getting started",
    heading: "How to choose a therapist in Dallas.",
    intro:
      "To choose a therapist in Dallas, start with your practical needs, check the therapist’s Texas license, and notice how comfortable you feel on a first call. Finding someone in a city this size can feel like a lot, but a few clear questions can narrow it down quickly.",
    takeaways: [
      "Start with practical needs: format, language, budget, and schedule.",
      "You can check any Texas therapist’s license through the Behavioral Health Executive Council.",
      "Fit matters, because the working relationship is linked with how much people get out of therapy.",
      "Be cautious of promises of a cure or pressure to commit.",
    ],
    blocks: [
      {
        heading: "What should I look for in a therapist in Dallas?",
        paragraphs: [
          "When looking for a therapist in Dallas, start with what you need, such as format, language, cost, and schedule, before comparing individual therapists.",
        ],
        list: [
          "In person, outdoors, or online",
          "The language you’re most comfortable in",
          "Insurance or self-pay, and what you can afford each month",
          "What you’d like help with, such as anxiety, low mood, ADHD, or a life change",
          "Times that fit your schedule",
        ],
      },
      {
        heading: "How do I check a therapist’s license in Texas?",
        paragraphs: [
          "You can check a Texas therapist’s license through the [Texas Behavioral Health Executive Council](https://bhec.texas.gov/), which licenses counselors, psychologists, social workers, and marriage and family therapists.",
          "Titles differ in training and supervision. [LPC vs. LPC Associate vs. psychologist](/resources/lpc-vs-lpc-associate-vs-psychologist/) explains how.",
        ],
      },
      {
        heading: "What kind of therapist do I need?",
        paragraphs: [
          "For talk therapy for anxiety, low mood, stress, or a life change, the right therapist is usually the one whose approach and personality fit you, more than any particular title.",
          "If you’re looking for a formal evaluation, such as for ADHD, ask each provider directly whether they offer one. [Can a therapist diagnose ADHD?](/resources/can-a-therapist-diagnose-adhd/) explains more.",
          "If you’re interested in medication, talk with a psychiatrist or another medical provider.",
        ],
      },
      {
        heading: "Why does fit with a therapist matter so much?",
        paragraphs: [
          "Fit matters because the working relationship between you and your therapist, often called the alliance, is consistently linked with how much people get out of therapy.",
          "A meta-analysis of 295 studies found a reliable link between the alliance and outcomes ([Flückiger et al., 2018](https://doi.org/10.1037/pst0000172)). So it’s reasonable to choose partly on how comfortable you feel.",
        ],
      },
      {
        heading: "What questions should I ask a therapist before starting?",
        paragraphs: [
          "Before starting, ask a therapist how they usually work, what a session looks like, what they charge, and how they handle confidentiality.",
        ],
        list: [
          "How do you usually work with what I’m dealing with?",
          "What does a typical session look like?",
          "What do you charge, and is there a sliding scale?",
          "Do you offer online or outdoor sessions?",
          "How do you handle confidentiality?",
        ],
      },
      {
        heading: "What happens on a free therapy consultation call?",
        paragraphs: [
          "A free therapy consultation call is a short conversation to check fit and practical details before you book, with no obligation to continue.",
          "[What happens in a free counseling consultation?](/resources/free-counseling-consultation/) walks through what to expect and what you don’t need to share yet.",
        ],
      },
      {
        heading: "What are red flags when choosing a therapist?",
        paragraphs: [
          "Red flags when choosing a therapist include promises of a cure, pressure to commit, dismissing your concerns, and unclear fees or confidentiality.",
        ],
        list: [
          "Promises of a cure or a quick fix",
          "Pressure to commit before you’re ready",
          "Dismissing your culture, values, or concerns",
          "Not explaining fees or the limits of confidentiality",
        ],
      },
      {
        heading: "How much does therapy cost in Dallas without insurance?",
        paragraphs: [
          "Therapy fees in Dallas vary by license, experience, and format, so ask each therapist directly and request a written Good Faith Estimate if you’re paying yourself.",
          "[How much does therapy cost without insurance in Texas?](/resources/therapy-cost-without-insurance/) and [affordable therapy in Dallas](/affordable-therapy-dallas/) explain the options, including sliding scales.",
        ],
      },
      {
        heading: "Is there a walk and talk or online therapist near Dallas and Irving?",
        paragraphs: [
          "I offer a free 15-minute call to see if we’re a good fit, with [walk and talk sessions](/walk-and-talk-therapy-dallas/) near Irving and online sessions anywhere in Texas.",
          "See [counseling in Dallas](/counseling-dallas-tx/) for how that works.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many therapists should I contact?",
        a: "There’s no set number of therapists to contact. Some people talk with two or three before deciding.",
      },
      {
        q: "Is it okay to switch therapists?",
        a: "Yes, it’s okay to switch therapists. If it doesn’t feel like a fit after a few sessions, it’s okay to say so or to try someone else.",
      },
      {
        q: "Do I need a referral to see a therapist?",
        a: "You usually don’t need a referral for self-pay counseling. You can contact a therapist directly.",
      },
      {
        q: "Should I look for a therapist who shares my language or culture?",
        a: "A therapist who shares your language or understands your culture can help if that matters to you. Being able to talk without explaining your background can make sessions feel easier.",
      },
    ],
  },
  {
    path: "resources/first-counseling-session",
    published: "2026-11-20",
    related: [
      LINK.consultation,
      LINK.newClients,
      LINK.personCentered,
      LINK.telehealth,
      LINK.outdoor,
    ],
    title: title("Your First Counseling Session"),
    description:
      "What happens in a first counseling session: what to expect before, during, and after, what you can ask, and how to prepare. No pressure to share.",
    eyebrow: "Getting started",
    heading: "What happens in a first counseling session?",
    intro:
      "A first counseling session is mostly about getting to know each other: going over confidentiality, talking about what brings you in, and getting a rough sense of what to focus on. You don’t need to prepare anything or tell your whole story at once. Here’s what usually happens with me.",
    takeaways: [
      "A first session is mostly about getting to know each other and setting a direction.",
      "You decide how much to share, and you don’t need to prepare.",
      "Self-pay clients have a right to a written Good Faith Estimate before care starts.",
      "Feeling relieved, tired, or a little raw afterward are all normal.",
    ],
    blocks: [
      {
        heading: "What happens before a first counseling session?",
        paragraphs: [
          "Before a first counseling session, there’s usually a short consultation call, a few forms to sign, and a written estimate of expected charges.",
        ],
        list: [
          "A [free 15-minute phone call](/resources/free-counseling-consultation/) to see if we’re a good fit",
          "Forms to read and sign securely, including consent, an intake questionnaire, and a privacy notice. You can preview them on the [new client page](/new-clients/).",
          "A written Good Faith Estimate of expected charges, which self-pay clients have a right to receive ([CMS](https://www.cms.gov/initiatives/your-patient-rights/medical-bill-rights/know-your-rights/without-insurance))",
          "Choosing whether to meet outdoors or online",
        ],
      },
      {
        heading: "What happens during a first therapy session?",
        paragraphs: [
          "A first therapy session usually starts with confidentiality and its limits, then moves to what’s bringing you in and what you’d like to be different.",
          "I’ll ask a little about your life, such as sleep, stress, relationships, health, and culture if it matters to you. You decide how much to share.",
          "I’ll also explain how I work, and you can ask anything. By the end, we usually have a rough sense of what we’ll focus on.",
        ],
      },
      {
        heading: "How should I prepare for my first counseling session?",
        paragraphs: [
          "You don’t need to prepare much for a first counseling session, but a few small steps can help you feel more settled.",
        ],
        list: [
          "Think about one or two things you’d like to be different",
          "Write down any questions you have",
          "For a walk and talk session, wear comfortable shoes and bring water",
          "For telehealth, find a private spot with a steady connection",
          "If you can, give yourself a few quiet minutes afterward",
        ],
      },
      {
        heading: "What questions can I ask in a first session?",
        paragraphs: [
          "In a first session, you can ask about how often to meet, what sessions involve, how to tell if it’s helping, and the cancellation policy.",
        ],
        list: [
          "How often should we meet?",
          "What will we actually do in sessions?",
          "How will we know if it’s helping?",
          "What happens if I need to cancel?",
        ],
      },
      {
        heading: "How will I feel after my first therapy session?",
        paragraphs: [
          "After a first therapy session, some people feel relief and others feel tired or a little raw, and both are normal.",
          "There’s no obligation to continue. If you’d like to, we set the next session and talk about how often to meet.",
        ],
      },
      {
        heading: "Can a first counseling session be outdoors or online?",
        paragraphs: [
          "A first counseling session with me can happen outdoors as [walk and talk therapy](/walk-and-talk-therapy-dallas/) in Dallas–Fort Worth or [online anywhere in Texas](/telehealth-counseling-texas/).",
          "You can choose whichever feels more comfortable, and you can switch later if your needs change.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I have to talk about my childhood?",
        a: "Only if you want to. We start with what matters most to you now.",
      },
      {
        q: "What should I bring?",
        a: "You don’t need to bring anything special. For a walk and talk session, wear comfortable shoes and bring water.",
      },
      {
        q: "What if I don’t know what to say?",
        a: "Not knowing what to say is common and completely fine. I’ll ask questions to help us get started.",
      },
      {
        q: "Is it normal to feel nervous before a first session?",
        a: "Yes, feeling nervous before a first counseling session is very common. You can say so at the start, and we can go at a pace that feels okay.",
      },
      {
        q: "Do I have to keep going after the first session?",
        a: "No. There’s no obligation to continue, and you can decide after the first session whether it feels like a fit.",
      },
    ],
  },
  {
    path: "resources/nervous-system-regulation-techniques",
    published: "2026-11-20",
    related: [
      LINK.stress,
      LINK.holisticCounseling,
      LINK.anxiety,
      LINK.selfCare,
      LINK.outdoor,
      LINK.selfReflection,
      LINK.groundingGuide,
      LINK.tools,
      LINK.grounding,
      LINK.boxBreathing,
    ],
    title: "How to Calm Your Nervous System: Regulation Tips",
    description:
      "Research-based nervous system regulation techniques: slow breathing, movement, time in nature, and sleep, plus simple grounding and when to get support.",
    eyebrow: "Mind and body",
    heading: "Nervous system regulation: techniques for calmer days.",
    intro:
      "Nervous system regulation means helping your body come back down from a stressed, alert state, using techniques like slow breathing, movement, time in nature, and better sleep. When you’re stressed, your heartbeat speeds up, your muscles tighten, and your breath gets shallow. These techniques have research behind them and can help your body settle.",
    takeaways: [
      "Nervous system regulation means helping your body shift from a stressed state back toward calm.",
      "Slow breathing, under 10 breaths a minute, has been linked with feeling more relaxed and less anxious.",
      "Regular movement, time in nature, and better sleep are each linked with lower stress, anxiety, or depression.",
      "Simple grounding skills can help in hard moments, but ongoing stress or anxiety deserves real support.",
    ],
    blocks: [
      {
        heading: "What does nervous system regulation mean?",
        paragraphs: [
          "Nervous system regulation is the process of helping your body return to a calmer, steadier state after stress.",
          "Stress isn’t bad on its own. Your body is built to speed up when something feels urgent. Trouble starts when it stays switched on for days or weeks, and rest never quite arrives.",
          "Regulation doesn’t mean never feeling stressed. It means having ways to come back down.",
        ],
      },
      {
        heading: "How do you calm your nervous system quickly?",
        paragraphs: [
          "Slow breathing is one of the quickest, best-studied ways to calm your nervous system, and you can do it anywhere.",
          "A systematic review of 15 studies found that slow breathing, under 10 breaths a minute, was associated with higher heart rate variability and with feeling more relaxed and less anxious ([Zaccaro et al., 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC6137615/)).",
          "Try breathing in for a count of four and out for a count of six, for a few minutes. A longer exhale is the key part.",
        ],
      },
      {
        heading: "Does exercise help regulate your nervous system?",
        paragraphs: [
          "Regular exercise helps your body handle stress and is linked with fewer symptoms of depression, anxiety, and psychological distress.",
          "A large overview of 97 systematic reviews found that physical activity improved symptoms of depression, anxiety, and psychological distress compared with usual care ([Singh et al., 2023](https://doi.org/10.1136/bjsports-2022-106195)).",
          "For general health, the CDC recommends that adults get 150 minutes of moderate-intensity activity a week, such as brisk walking ([CDC](https://www.cdc.gov/physical-activity-basics/guidelines/adults.html)). You don’t have to start there. A short walk is a good place to begin.",
        ],
      },
      {
        heading: "Can time in nature calm your nervous system?",
        paragraphs: [
          "Time in nature can lower stress hormones, even in a city park.",
          "In one study of city residents, spending time in a place that felt like nature lowered stress hormones measured in saliva, with 20 to 30 minutes giving the most benefit for the time spent ([Hunter, Gillespie & Chen, 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6458297/)).",
          "A tree-lined street, a backyard, or a local trail can count. Some people combine this with counseling through [walk and talk therapy](/walk-and-talk-therapy-dallas/).",
        ],
      },
      {
        heading: "How does sleep affect stress and anxiety?",
        paragraphs: [
          "Better sleep is closely tied to better mental health, including less depression and anxiety.",
          "A meta-analysis of 65 randomized trials with 8,608 participants found that improving sleep led to better mental health, including less depression and anxiety ([Scott et al., 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8651630/)).",
          "A steady bedtime and a wind-down routine are practical first steps. Dimming screens and lights in the last hour before bed can help your body get the signal that it’s time to rest.",
        ],
      },
      {
        heading: "What are some grounding techniques for anxiety?",
        paragraphs: [
          "Grounding techniques are simple ways to bring your attention back to the present moment when anxiety or stress feels overwhelming.",
          "These are everyday practices rather than research findings, but many people find them steadying:",
        ],
        list: [
          "Name five things you can see, four you can hear, and three you can touch",
          "Press your feet into the floor and notice the support under you",
          "Hold something cool or textured and describe it to yourself",
        ],
      },
      {
        heading: "How do I build a daily routine for a calmer nervous system?",
        paragraphs: [
          "A calmer nervous system usually comes from small habits repeated most days, not one big change.",
          "A simple routine might include:",
        ],
        list: [
          "A few minutes of slow breathing in the morning or before bed",
          "A short walk, outside if you can",
          "A regular bedtime, even on weekends",
          "One check-in with yourself during the day about how your body feels",
        ],
      },
      {
        heading: "When should I get help with stress or anxiety?",
        paragraphs: [
          "If stress or anxiety keeps coming back, or gets in the way of work, sleep, or relationships, it’s worth getting support beyond self-help techniques.",
          "These tools help, but they don’t replace support when stress or anxiety keeps coming back. [Holistic counseling](/holistic-counseling/) and [anxiety therapy](/anxiety-therapy-dallas/) can help you build a routine that fits your life and understand what keeps setting your system off.",
          "For more everyday ideas, see [what self-care for mental health actually looks like](/resources/self-care-for-mental-health/).",
        ],
      },
    ],
    faqs: [
      {
        q: "What is nervous system regulation?",
        a: "Nervous system regulation means helping your body shift from a stressed, alert state back toward a calmer one, using things like breathing, movement, rest, and connection.",
      },
      {
        q: "Can breathing exercises replace therapy?",
        a: "No, breathing exercises can’t replace therapy. They’re a helpful tool, but not a replacement for support when stress, anxiety, or low mood keeps getting in the way.",
      },
      {
        q: "Which technique should I start with?",
        a: "Start with whichever technique feels easiest to repeat. A few slow breaths or a short walk each day is a good beginning.",
      },
      {
        q: "Is nervous system regulation the same as relaxation?",
        a: "Nervous system regulation is broader than relaxation. Relaxing is one part of it, but regulation also includes noticing when your body is stressed and having ways to come back down, even in the middle of a busy day.",
      },
    ],
  },
  {
    path: "resources/walk-and-talk-therapy-benefits",
    published: "2026-11-20",
    related: [LINK.outdoor, LINK.walkTalk, LINK.irving, LINK.outdoorFit],
    title: title("Walk and Talk Therapy Benefits"),
    description:
      "The benefits of walk and talk therapy, what research says about movement, nature, and walking while thinking, plus the trade-offs to consider.",
    eyebrow: "Walk and talk therapy",
    heading: "What are the benefits of walk and talk therapy?",
    intro:
      "The main benefits of walk and talk therapy come from combining counseling with gentle movement and time outdoors, two things with solid research behind them. Research on the format itself is still early, so it’s best seen as a different setting for talk therapy, not a stronger form of it.",
    takeaways: [
      "Walk and talk therapy pairs regular counseling with a gentle walk outdoors.",
      "Studies of the format itself are small, so most of the evidence comes from research on movement and time in nature.",
      "Walking or jogging has been linked with moderate reductions in depression, and short visits to nature have been linked with lower stress hormones.",
      "The trade-offs are real: parks are public, and Texas weather sometimes moves sessions online.",
    ],
    blocks: [
      {
        heading: "Is there research on walk and talk therapy itself?",
        paragraphs: [
          "Research on walk and talk therapy itself is still small and early, so most of the evidence for its benefits comes from studies of its parts: movement, nature, and walking while thinking.",
          "One study surveyed 18 therapists who use walk and talk and explored what they found helpful and challenging about it ([Revell & McLeod, 2016](https://insight.cumbria.ac.uk/id/eprint/2072)).",
          "Studies like that describe how the format feels in practice. They don’t show that it works better than office counseling. The stronger evidence comes from research on movement and time outdoors.",
        ],
      },
      {
        heading: "Does walking help with depression and anxiety?",
        paragraphs: [
          "Walking is among the forms of exercise linked with lower depression in randomized trials, and regular physical activity is also linked with lower anxiety.",
          "A 2024 network meta-analysis of randomized trials found that walking or jogging was linked with moderate reductions in depression compared with active control conditions ([Noetel et al., 2024](https://doi.org/10.1136/bmj-2023-075847)). The authors rated their confidence in that estimate as low, so it’s a promising finding rather than a settled one.",
          "A large umbrella review found that physical activity improved symptoms of depression, anxiety, and psychological distress compared with usual care ([Singh et al., 2023](https://doi.org/10.1136/bjsports-2022-106195)).",
          "In walk and talk therapy, the pace stays gentle. The goal isn’t a workout. It’s adding some movement to time you’re already spending on your mental health.",
        ],
      },
      {
        heading: "Does time in nature lower stress?",
        paragraphs: [
          "Time in nature has been linked with lower stress hormones, even in short visits to city green spaces.",
          "City residents who spent 20 to 30 minutes in a place that felt like nature showed lower stress hormones afterwards ([Hunter, Gillespie & Chen, 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6458297/)).",
          "In the same study, a nature visit lowered salivary cortisol, a stress hormone, by an extra 21.3% per hour beyond its normal daily decline ([Hunter, Gillespie & Chen, 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6458297/)). The setting didn’t need to be wilderness. A park that felt like nature to the person was enough.",
        ],
      },
      {
        heading: "Does walking help you think more clearly?",
        paragraphs: [
          "Walking has been shown to help with creative thinking, at least in lab experiments.",
          "Across four experiments, people came up with more creative ideas while walking than while sitting ([Oppezzo & Schwartz, 2014](https://www.apa.org/news/press/releases/2014/04/creativity-walk)).",
          "That doesn’t prove therapy works better on foot, but some people do find that moving helps their thoughts flow, especially when they feel stuck.",
        ],
      },
      {
        heading: "Why is it easier to talk side by side?",
        paragraphs: [
          "Some people find it easier to talk about hard things while walking side by side, without constant eye contact.",
          "This one comes from experience rather than research. Looking ahead at a path can feel less intense than sitting across from someone, and natural pauses happen on their own while you walk.",
        ],
      },
      {
        heading: "Is walk and talk therapy better than office therapy?",
        paragraphs: [
          "There’s no good evidence that walk and talk therapy is better than office therapy; it’s a different setting that some people prefer.",
          "What tends to matter most in counseling is feeling comfortable enough to talk openly. For some people that happens on a trail, and for others it happens on a couch at home over video. The best choice is the one you’ll keep showing up for.",
        ],
      },
      {
        heading: "What are the downsides of walk and talk therapy?",
        paragraphs: [
          "The main downsides of walk and talk therapy are less privacy, weather that sometimes forces a change of plans, and the physical demands of walking.",
        ],
        list: [
          "Parks are public, so complete privacy can’t be guaranteed",
          "Texas heat and storms mean some sessions move online",
          "It may not suit you if walking is physically hard right now. Sitting outdoors is an option.",
        ],
      },
      {
        heading: "Where can I try walk and talk therapy in Irving and Dallas?",
        paragraphs: [
          "Walk and talk therapy is available with me usually on a trail in Irving, for people across Irving, Dallas, and nearby cities.",
          "You can read how sessions work on the [walk and talk therapy](/walk-and-talk-therapy-dallas/) page, or see [counseling in Irving](/counseling-irving-tx/) for the area I serve in person.",
          "If you’re new to the idea, start with [what walk and talk therapy is](/resources/what-is-walk-and-talk-therapy/) or [whether outdoor counseling is right for you](/resources/is-outdoor-counseling-right-for-you/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Is walk and talk therapy evidence-based?",
        a: "Walk and talk therapy builds on strong evidence for movement and time in nature, but research on the format itself is still early and mostly small.",
      },
      {
        q: "Do I need to be fit for walk and talk therapy?",
        a: "No, you don’t need to be fit for walk and talk therapy. The pace is gentle, and you can sit for the whole session.",
      },
      {
        q: "Is walk and talk therapy private?",
        a: "Walk and talk therapy is confidential within the same legal limits as any counseling, but parks are public, so we choose quieter spots and pause when people pass.",
      },
      {
        q: "What happens if the weather is bad?",
        a: "If the weather is bad, the session moves online by video. In Texas heat, sessions can also move earlier in the day or stay in the shade.",
      },
    ],
  },
  {
    path: "resources/lpc-vs-lpc-associate-vs-psychologist",
    published: "2026-11-20",
    related: [
      LINK.associate,
      LINK.choose,
      LINK.telehealth,
      LINK.adhdDiagnose,
      LINK.glossary,
      LINK.lpcVsLcsw,
      LINK.aboutSarah,
    ],
    title: title("LPC vs. Psychologist in Texas"),
    description:
      "The differences between an LPC, an LPC Associate, and a psychologist in Texas: training, supervision, and how to decide who to see.",
    eyebrow: "Getting started",
    heading: "LPC vs. LPC Associate vs. psychologist: what’s the difference in Texas?",
    intro:
      "In Texas, an LPC Associate, an LPC, and a psychologist can all provide talk therapy; the main differences are training and supervision. Here’s how the three titles compare.",
    takeaways: [
      "All three can provide talk therapy in Texas.",
      "An LPC Associate is licensed and practices under a Council-approved supervisor.",
      "An LPC has finished the supervised experience and upgraded from the associate license.",
      "A licensed psychologist holds a doctoral degree in psychology.",
      "You can look up all three licenses through the Texas BHEC.",
    ],
    blocks: [
      {
        heading: "What is an LPC Associate?",
        paragraphs: [
          "An LPC Associate is a counselor with a graduate degree in counseling and a Texas license who practices under the supervision of a Council-approved LPC Supervisor.",
          "To move to a full LPC license, an associate completes at least 3,000 hours of supervised experience over at least 18 months, including at least 1,500 hours of direct counseling ([BHEC supervision FAQs](https://bhec.texas.gov/tbhec/supervision-faqs/); [22 TAC §681.92](https://www.law.cornell.edu/regulations/texas/22-Tex-Admin-Code-SS-681-92)).",
          "I’m an LPC Associate (#104391), supervised by Don Zablosky, LPC-S. More in [what is an LPC Associate?](/resources/what-is-an-lpc-associate/)",
        ],
      },
      {
        heading: "What is an LPC?",
        paragraphs: [
          "A Licensed Professional Counselor (LPC) in Texas is a counselor who has finished the required supervised experience and upgraded from the associate license ([BHEC](https://bhec.texas.gov/texas-state-board-of-examiners-of-professional-counselors/applying-for-an-lpc-license/upgrade-to-full-lpc/)).",
          "Like an LPC Associate, an LPC holds a graduate degree in counseling and provides talk therapy.",
        ],
      },
      {
        heading: "What is the difference between an LPC and an LPC Associate?",
        paragraphs: [
          "The main difference between an LPC and an LPC Associate in Texas is supervision: an associate works under a Council-approved supervisor while completing required experience, and an LPC has already completed it.",
          "Supervision means a more experienced, approved supervisor oversees the associate’s counseling work.",
        ],
      },
      {
        heading: "What is a psychologist?",
        paragraphs: [
          "A licensed psychologist in Texas holds a doctoral degree in psychology, completes supervised experience, and passes national and state exams ([BHEC](https://bhec.texas.gov/texas-state-board-of-examiners-of-psychologists/applying-for-a-psychology-license/how-to-become-a-licensed-psychologist); [22 TAC §463.10](https://www.law.cornell.edu/regulations/texas/22-Tex-Admin-Code-SS-463-10)).",
        ],
      },
      {
        heading: "What is the difference between a counselor and a psychologist?",
        paragraphs: [
          "The main difference between a counselor and a psychologist in Texas is training: counselors hold a graduate degree in counseling, while licensed psychologists hold a doctoral degree in psychology.",
          "Both can provide talk therapy. If you need a formal evaluation, ask the provider directly whether they offer one.",
        ],
      },
      {
        heading: "Should I see a counselor or a psychologist?",
        paragraphs: [
          "For talk therapy for anxiety, low mood, stress, or life changes, an LPC Associate, an LPC, or a psychologist can each be a good fit, and fit often matters more than the title.",
        ],
        list: [
          "For talk therapy, choose the person you feel comfortable with and can see regularly.",
          "If you’re looking for an ADHD or other formal evaluation, ask each provider directly whether they offer one. [Can a therapist diagnose ADHD?](/resources/can-a-therapist-diagnose-adhd/) explains more.",
          "If you’re interested in medication, talk with a psychiatrist or another medical provider.",
        ],
      },
      {
        heading: "How do I check a counselor’s or psychologist’s license in Texas?",
        paragraphs: [
          "You can check an LPC Associate, LPC, or psychologist license in Texas through the [Texas Behavioral Health Executive Council](https://bhec.texas.gov/), which lets you look up a license.",
          "For more on choosing, read [how to choose a therapist in Dallas](/resources/how-to-choose-a-therapist-dallas/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Is an LPC Associate a real license?",
        a: "Yes. LPC Associate is a Texas license held while completing supervised experience under an approved supervisor.",
      },
      {
        q: "Can an LPC Associate offer telehealth?",
        a: "Yes, an LPC Associate can offer telehealth within the rules of the license and supervision. I offer telehealth to clients located anywhere in Texas.",
      },
      {
        q: "What if I want to explore medication?",
        a: "To explore medication, talk with a psychiatrist or another medical provider, such as your primary care doctor.",
      },
      {
        q: "Is an LPC Associate still a student?",
        a: "No. An LPC Associate has finished a graduate degree in counseling and holds a Texas license.",
      },
    ],
  },
  {
    path: "resources/grounding-techniques-for-anxiety",
    published: "2026-11-21",
    related: [
      LINK.boxBreathing,
      LINK.tools,
      LINK.regulation,
      LINK.anxiety,
      LINK.outdoor,
      LINK.groundingGuide,
      LINK.panicVsAnxiety,
    ],
    title: "Grounding Techniques for Anxiety: How to Use Them",
    description:
      "Grounding techniques for anxiety, including the 5-4-3-2-1 method: step-by-step how to use them, what research says, and when to get more support.",
    eyebrow: "Grounding techniques",
    heading: "Grounding techniques for anxiety: what they are and how to use them",
    intro:
      "Grounding techniques are simple exercises that pull your attention out of anxious thoughts and back to the present moment, using your senses, your body, or your breath. They’re free, take a few minutes, and you can use them anywhere.",
    takeaways: [
      "Grounding techniques bring your attention back to the present when anxiety pulls it into worry or panic.",
      "The 5-4-3-2-1 method uses your five senses and is one of the easiest to remember.",
      "There’s little research on 5-4-3-2-1 itself, but related practices like slow breathing have research behind them.",
      "Grounding is a coping skill, not a treatment on its own. If anxiety keeps getting in the way, counseling can help.",
    ],
    blocks: [
      {
        heading: "What are grounding techniques?",
        paragraphs: [
          "Grounding techniques are short exercises that help you notice where you are right now, through what you can see, hear, feel, or breathe.",
          "When anxiety spikes, your mind races ahead to what might go wrong. Grounding gives your attention something concrete to hold onto, which can make the wave of anxiety easier to ride out.",
        ],
      },
      {
        heading: "How does the 5-4-3-2-1 grounding technique work?",
        paragraphs: [
          "The 5-4-3-2-1 technique walks you through your five senses, counting down from five. Go slowly and name each thing silently or out loud.",
        ],
        list: [
          "Name 5 things you can see",
          "Name 4 things you can feel, like your feet in your shoes or the chair under you",
          "Name 3 things you can hear",
          "Name 2 things you can smell, or two smells you like",
          "Name 1 thing you can taste, or one thing you’re grateful for",
        ],
      },
      {
        heading: "What other grounding techniques help with anxiety?",
        paragraphs: [
          "Other grounding techniques use your body, temperature, or breath instead of counting senses. Try a few and keep the ones that work for you.",
        ],
        list: [
          "Press your feet into the floor and notice the pressure for a few slow breaths",
          "Hold something cold, like an ice cube or a cold drink, or run cool water over your hands",
          "Describe an object near you in detail: its color, shape, weight, and texture",
          "Pick a category, like dog breeds or cities, and name one for each letter of the alphabet",
          "Slow your breathing, for example with [box breathing](/resources/box-breathing/)",
          "Go for a short walk and notice each step",
        ],
      },
      {
        heading: "Do grounding techniques actually work?",
        paragraphs: [
          "Grounding techniques are widely used in counseling, but the 5-4-3-2-1 method itself hasn’t been tested in large studies.",
          "Related practices do have research behind them. A review of 15 studies found slow breathing was linked with calmer heart and brain activity and less anxiety ([Zaccaro et al., 2018](https://doi.org/10.3389/fnhum.2018.00353)). In a small month-long randomized trial, five minutes a day of structured breathing or mindfulness improved mood and lowered anxiety ([Balban et al., 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC9873947/)).",
          "It’s fair to think of grounding as a low-risk tool that helps many people in the moment, not a treatment on its own.",
        ],
      },
      {
        heading: "When should I use grounding?",
        paragraphs: [
          "Grounding is most useful in the moment, when anxiety starts to rise and you want to steady yourself.",
        ],
        list: [
          "During a wave of panic or racing thoughts",
          "Before a hard conversation, meeting, or appointment",
          "At night, when worries keep you awake",
          "After a stressful moment, to come back to yourself",
        ],
      },
      {
        heading: "What if grounding makes me feel worse?",
        paragraphs: [
          "If a grounding exercise brings up upsetting memories or makes you feel more on edge, stop and try a different one.",
          "Some people do better with movement or cold water than with focusing on their body or breath. That’s normal, and it doesn’t mean you’re doing it wrong.",
        ],
      },
      {
        heading: "When is grounding not enough?",
        paragraphs: [
          "Grounding helps in the moment, but it doesn’t address why anxiety keeps showing up.",
          "If anxiety is affecting your sleep, work, or relationships, or you’re avoiding things you used to handle, it may be time to talk with a counselor. [Anxiety therapy in Dallas](/anxiety-therapy-dallas/) and [nervous system regulation techniques](/resources/nervous-system-regulation-techniques/) are good next reads.",
          "If you’re in crisis, call or text 988, or see [local 24/7 crisis lines](/crisis/).",
        ],
      },
      {
        heading: "Can I practice grounding with a counselor in Dallas–Fort Worth?",
        paragraphs: [
          "Yes. Grounding is part of how I work in walk and talk sessions outdoors in Dallas–Fort Worth and in telehealth sessions across Texas.",
          "I’m Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S. You can also download my free [grounding guide](/guides/grounding-guide.pdf) or try [walk and talk therapy](/walk-and-talk-therapy-dallas/).",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does grounding take to work?",
        a: "It varies. Many people notice a small shift within a few minutes, and practicing when you’re calm makes it easier to use when you’re anxious.",
      },
      {
        q: "Is grounding the same as mindfulness?",
        a: "They overlap. Grounding is a short, practical way to bring your attention to the present, while mindfulness is a broader practice of noticing your thoughts and feelings without judging them.",
      },
      {
        q: "Can grounding replace therapy?",
        a: "No. Grounding is a helpful coping skill, but counseling can help you understand and change the patterns behind ongoing anxiety.",
      },
    ],
  },
  {
    path: "resources/box-breathing",
    published: "2026-11-21",
    related: [
      LINK.grounding,
      LINK.tools,
      LINK.regulation,
      LINK.anxiety,
      LINK.holisticCounseling,
      LINK.panicVsAnxiety,
    ],
    title: "Box Breathing: How to Do It and Why It Helps",
    description:
      "How to do box breathing step by step, what a 2023 randomized trial found about breathing exercises and anxiety, and when to use it.",
    eyebrow: "Breathing exercise",
    heading: "Box breathing: how to do it, step by step",
    intro:
      "Box breathing is a slow breathing exercise where you breathe in, hold, breathe out, and hold again, each for the same count, usually four seconds. It takes about a minute to learn and can help your body settle when you feel stressed or anxious.",
    takeaways: [
      "Box breathing has four equal steps: breathe in, hold, breathe out, hold.",
      "A common pattern is 4 seconds for each step, repeated for a few minutes.",
      "In a small 2023 randomized trial, five minutes a day of box breathing, cyclic sighing, or mindfulness improved mood and lowered anxiety.",
      "Stop if you feel lightheaded, and use a shorter count if holding your breath feels uncomfortable.",
    ],
    blocks: [
      {
        heading: "What is box breathing?",
        paragraphs: [
          "Box breathing is a breathing pattern with four equal parts, like the four sides of a box: inhale, hold, exhale, hold.",
          "Because every step is the same length, it’s easy to remember and easy to do anywhere, with your eyes open or closed.",
        ],
      },
      {
        heading: "How do you do box breathing?",
        paragraphs: [
          "Sit or stand comfortably, relax your shoulders, and follow these steps for two to five minutes.",
        ],
        list: [
          "Breathe in slowly through your nose for a count of 4",
          "Hold your breath gently for a count of 4",
          "Breathe out slowly through your mouth for a count of 4",
          "Hold again for a count of 4",
          "Repeat, and let your breathing stay soft rather than forced",
        ],
      },
      {
        heading: "Does box breathing help with anxiety?",
        paragraphs: [
          "Box breathing can help some people feel calmer, and there’s early research behind structured breathing exercises.",
          "In a month-long randomized trial, people did five minutes a day of box breathing, cyclic sighing, cyclic hyperventilation, or mindfulness meditation. All four groups reported better mood and less anxiety each day, and the exhale-focused cyclic sighing group improved mood and lowered breathing rate more than mindfulness ([Balban et al., 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC9873947/)). It was a small study, so the results are promising rather than proven.",
          "A review of 15 studies also linked slow breathing with calmer heart and brain activity and less anxiety ([Zaccaro et al., 2018](https://doi.org/10.3389/fnhum.2018.00353)).",
        ],
      },
      {
        heading: "What is cyclic sighing, and is it better than box breathing?",
        paragraphs: [
          "Cyclic sighing is a breathing pattern with two inhales through the nose followed by one long, slow exhale through the mouth.",
          "In the 2023 trial, cyclic sighing did slightly better than mindfulness on mood. It’s a good option if holding your breath feels uncomfortable.",
        ],
      },
      {
        heading: "When should you use box breathing?",
        paragraphs: [
          "Box breathing works well whenever you want to slow down your body’s stress response.",
        ],
        list: [
          "Before a test, interview, or hard conversation",
          "When you notice your heart racing or your breath getting shallow",
          "At bedtime, to help your body wind down",
          "After a stressful moment at work or at home",
        ],
      },
      {
        heading: "Who should be careful with box breathing?",
        paragraphs: [
          "Most people can try box breathing safely, but stop if you feel dizzy, lightheaded, or more anxious.",
          "If holding your breath makes you feel panicky, shorten the count to 2 or 3, or skip the holds and simply lengthen your exhale. If you have a heart or lung condition, check with your doctor before starting new breathing exercises.",
        ],
      },
      {
        heading: "Where can I practice breathing exercises?",
        paragraphs: [
          "You can practice right now with the guided [breathing exercise on my home page](/#breathe).",
          "Breathing pairs well with [grounding techniques for anxiety](/resources/grounding-techniques-for-anxiety/) and other [nervous system regulation techniques](/resources/nervous-system-regulation-techniques/). If anxiety keeps coming back, [anxiety therapy in Dallas](/anxiety-therapy-dallas/) can help you build skills that last.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long should I do box breathing?",
        a: "Two to five minutes is a good start. In the 2023 trial, people practiced for five minutes a day.",
      },
      {
        q: "Can I do box breathing with a different count?",
        a: "Yes. Use whatever count feels comfortable, like 3 or 5 seconds. Keeping all four steps the same length is what makes it box breathing.",
      },
      {
        q: "Is box breathing safe for everyone?",
        a: "It’s safe for most people. Stop if you feel lightheaded, and talk with your doctor first if you have a heart or lung condition.",
      },
    ],
  },
  {
    path: "resources/lpc-vs-lcsw",
    published: "2026-11-21",
    related: [LINK.lpcVs, LINK.associate, LINK.choose, LINK.glossary],
    title: "LPC vs. LCSW: What’s the Difference in Texas?",
    description:
      "LPC vs. LCSW in Texas: what each license means, training and supervision requirements, and how to choose a therapist who fits you.",
    eyebrow: "Therapist licenses",
    heading: "LPC vs. LCSW: what’s the difference?",
    intro:
      "An LPC (Licensed Professional Counselor) and an LCSW (Licensed Clinical Social Worker) can both provide talk therapy in Texas. The main differences are their graduate training and the supervised experience each license requires.",
    takeaways: [
      "LPC stands for Licensed Professional Counselor. LCSW stands for Licensed Clinical Social Worker.",
      "Both can provide talk therapy in Texas, and both are licensed through the Texas Behavioral Health Executive Council.",
      "LPCs train in counseling; LCSWs train in social work, which also covers community resources and systems.",
      "Neither LPCs nor LCSWs prescribe medication. Fit with your therapist usually matters more than the letters.",
    ],
    blocks: [
      {
        heading: "What does LPC stand for?",
        paragraphs: [
          "LPC stands for Licensed Professional Counselor, a mental health license for counselors with a graduate degree in counseling.",
          "In Texas, a new counselor first practices as an LPC Associate under an approved supervisor, then upgrades to a full LPC after at least 3,000 hours of supervised experience over at least 18 months, including 1,500 hours of direct client contact ([BHEC supervision FAQs](https://bhec.texas.gov/tbhec/supervision-faqs/); [22 TAC §681.92](https://www.law.cornell.edu/regulations/texas/22-Tex-Admin-Code-SS-681-92)).",
        ],
      },
      {
        heading: "What does LCSW stand for?",
        paragraphs: [
          "LCSW stands for Licensed Clinical Social Worker, a license for social workers with a master’s degree in social work who provide clinical services like therapy.",
          "In Texas, a social worker first holds an LMSW (Licensed Master Social Worker) license, then completes 3,000 hours of supervised clinical experience over at least 24 months, with at least 100 hours of supervision, before becoming an LCSW ([BHEC LCSW requirements](https://bhec.texas.gov/texas-state-board-of-social-worker-examiners/applying-for-a-social-work-license/how-to-become-an-lcsw/requirements-for-holders-of-an-lmsw-seeking-an-lcsw/); [22 TAC §781.401](https://regulations.justia.com/states/texas/title-22/part-34/chapter-781/subchapter-c/section-781-401)).",
        ],
      },
      {
        heading: "What is the difference between an LPC and an LCSW?",
        paragraphs: [
          "The biggest difference is training: LPCs study counseling, while LCSWs study social work.",
        ],
        list: [
          "LPC training centers on counseling theories, skills, assessment, and human development",
          "LCSW training adds a focus on social systems, community resources, and advocacy",
          "Both complete years of supervised experience before full licensure",
          "Both can provide talk therapy for concerns like anxiety, depression, stress, and relationships",
          "Neither can prescribe medication in Texas",
        ],
      },
      {
        heading: "Is an LPC or LCSW better for therapy?",
        paragraphs: [
          "Neither license is better overall; the right therapist is the one whose approach and experience fit what you need.",
          "Research across many studies finds that the working relationship between you and your therapist is one of the most consistent predictors of progress ([Flückiger et al., 2018](https://doi.org/10.1037/pst0000172)). Ask about approach, experience, fees, and availability, and notice whether you feel understood.",
        ],
      },
      {
        heading: "How do LPCs and LCSWs compare with psychologists and LMFTs?",
        paragraphs: [
          "Psychologists usually hold a doctorate and can do formal psychological testing, and LMFTs (Licensed Marriage and Family Therapists) focus on relationships and family systems.",
          "You can read more in [LPC vs. LPC Associate vs. psychologist](/resources/lpc-vs-lpc-associate-vs-psychologist/) and [how to choose a therapist in Dallas](/resources/how-to-choose-a-therapist-dallas/).",
        ],
      },
      {
        heading: "How can I check a therapist’s license in Texas?",
        paragraphs: [
          "You can look up any LPC, LPC Associate, or LCSW license on the Texas Behavioral Health Executive Council’s [license verification site](https://vo.licensing.hpc.texas.gov/datamart/selSearchType.do).",
          "A license lookup shows whether the license is active and whether there are any public disciplinary actions.",
        ],
      },
      {
        heading: "What kind of license does Sarah Ateia have?",
        paragraphs: [
          "I’m Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S.",
          "That means I’m a counselor in the supervised stage of the LPC path, and I offer talk therapy through walk and talk sessions in Dallas–Fort Worth and telehealth across Texas. Read more in [what is an LPC Associate in Texas?](/resources/what-is-an-lpc-associate/)",
        ],
      },
    ],
    faqs: [
      {
        q: "Can LPCs and LCSWs prescribe medication?",
        a: "No. In Texas, medication is prescribed by psychiatrists, other physicians, and some nurse practitioners and physician assistants, not by counselors or social workers.",
      },
      {
        q: "What is an LPC Associate?",
        a: "An LPC Associate is a counselor with a graduate degree and a Texas license who practices under an approved supervisor while completing the supervised hours needed for a full LPC license.",
      },
      {
        q: "Do LPCs and LCSWs cost different amounts?",
        a: "Fees vary by therapist rather than by license. Ask about fees, sliding scales, and free consultations before you start.",
      },
    ],
  },
  {
    path: "resources/setting-boundaries-with-family",
    published: "2026-11-22",
    related: [LINK.attachment, LINK.anxiety, LINK.selfCare, LINK.grounding, LINK.consultation],
    title: title("Setting Boundaries With Family"),
    description:
      "A calm, practical guide to setting boundaries with family: what a boundary is, how to say it, handling guilt and pushback, and when counseling can help.",
    eyebrow: "Relationships",
    heading: "How do you set boundaries with family?",
    intro:
      "You set boundaries with family by getting clear on what you need, saying it simply and kindly, and then following through on what you’ll do if it isn’t respected. A boundary isn’t a way to control anyone else. It’s a decision about what you will and won’t take part in, so you can stay connected without losing yourself.",
    takeaways: [
      "A boundary describes what you will do, not what someone else must do.",
      "Short, calm “I” statements usually land better than long explanations.",
      "Guilt after setting a boundary is common and doesn’t mean you did something wrong.",
      "You don’t have to cut family off to protect your peace, and you don’t have to stay in every situation either.",
    ],
    blocks: [
      {
        heading: "What is a boundary with family?",
        paragraphs: [
          "A boundary with family is a limit you choose about your time, space, energy, money, or the topics you’re willing to discuss. Mental Health America describes boundaries as lists of what is and isn’t okay for you ([MHA](https://screening.mhanational.org/content/how-can-i-set-boundaries-my-family/)).",
          "Boundaries can be small, like leaving a gathering at a set time, or bigger, like not discussing your relationship or body. Either way, the point is to make closeness more sustainable, not to punish anyone.",
        ],
      },
      {
        heading: "How do I know I need a boundary?",
        paragraphs: [
          "You may need a boundary when certain conversations or visits leave you tense, drained, or dreading the next one. Your body often notices before your mind does.",
          "Signs worth paying attention to:",
        ],
        list: [
          "You feel anxious or on edge for days before a family event",
          "You say yes to things and then feel resentful",
          "The same comments about your choices, body, faith, or relationships keep coming up",
          "You leave conversations feeling smaller or less like yourself",
        ],
      },
      {
        heading: "How do I say a boundary out loud?",
        paragraphs: [
          "Say a boundary out loud with a short, calm statement about what you feel and what you’ll do. You don’t need to defend it at length. MHA suggests “I” statements and practicing with a trusted friend first ([MHA](https://screening.mhanational.org/content/how-can-i-set-boundaries-my-family/)).",
          "A few examples:",
        ],
        list: [
          "“I’m not going to talk about my weight. If it comes up, I’ll change the subject.”",
          "“I can stay until 7. After that I’m heading home.”",
          "“I feel hurt when decisions about my life are discussed without me. I’d like to be asked directly.”",
          "“I’m not able to lend money right now.”",
        ],
      },
      {
        heading: "What if my family pushes back?",
        paragraphs: [
          "If your family pushes back, stay calm, repeat the boundary once, and follow through on what you said you’d do. Pushback is common when a pattern changes, especially in families that are used to things a certain way.",
          "Following through might mean ending a call, leaving a room, or stepping outside for a few minutes. MHA notes that a boundary works best when you’re clear about what happens if it’s crossed and you act on it ([MHA](https://screening.mhanational.org/content/how-can-i-set-boundaries-my-family/)).",
          "You don’t have to win the argument. Your job is to keep your word to yourself.",
        ],
      },
      {
        heading: "Why do I feel guilty after setting a boundary?",
        paragraphs: [
          "Many people feel guilty after setting a boundary because they’re going against a long-standing family role, like being the peacemaker or the one who always helps. Guilt is a sign that something changed, not proof that it was wrong.",
          "It can help to name the guilt, take a few slow breaths, and remind yourself why the boundary matters. [Grounding techniques](/resources/grounding-techniques-for-anxiety/) can help when guilt or worry feels physical.",
        ],
      },
      {
        heading: "How do boundaries work across cultures?",
        paragraphs: [
          "Boundaries look different across cultures, and they don’t have to mean distance. In many families, including many Arab and immigrant families, respect for parents and close ties are deeply valued, and a boundary may need to be gentler or more indirect.",
          "A culturally sensitive boundary might sound like honoring a parent’s concern while still making your own decision. You can keep your values and your relationships while protecting your peace. [Choosing a counselor who understands your language and culture](/resources/choosing-a-counselor-language-culture/) can make these conversations easier to explore.",
        ],
      },
      {
        heading: "Can counseling help with family boundaries?",
        paragraphs: [
          "Counseling can help you understand your family patterns, figure out what you need, and practice what to say before you say it. MHA also suggests individual or family counseling as a source of support ([MHA](https://screening.mhanational.org/content/how-can-i-set-boundaries-my-family/)).",
          "I’m Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S. I offer individual counseling in English and Arabic through walk and talk sessions in Dallas–Fort Worth and telehealth across Texas. I don’t diagnose your relatives, and I don’t offer couples or family sessions. Our work focuses on you. A [free 15-minute consultation](/resources/free-counseling-consultation/) is a good first step.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is setting boundaries with family disrespectful?",
        a: "No. A calm, clear boundary can be respectful to both you and your family. It tells people how to stay close to you in a way that works.",
      },
      {
        q: "Do I have to cut off my family to have boundaries?",
        a: "No. Most boundaries are about specific topics, times, or behaviors, not ending a relationship. Some people choose more distance in serious situations, and that’s a personal decision a counselor can help you think through.",
      },
      {
        q: "What if I’m not safe with a family member?",
        a: "If you’re in danger, call 911. For support, call or text 988, or see [local 24/7 crisis lines](/crisis/).",
      },
    ],
  },
  {
    path: "resources/what-is-person-centered-therapy",
    published: "2026-11-21",
    related: [LINK.holisticCounseling, LINK.holistic, LINK.firstSession, LINK.aboutSarah],
    title: title("Person-Centered Therapy Guide"),
    description:
      "Person-centered therapy explained: where it comes from, what sessions feel like, what research says, and who it may suit. Plain language, no jargon.",
    eyebrow: "Counseling approaches",
    heading: "What is person-centered therapy?",
    intro:
      "Person-centered therapy is a form of talk therapy where you, not the therapist, lead what you talk about and where it goes. The therapist’s job is to understand you accurately and without judgment, so you can make sense of your own experience and find your own next steps.",
    takeaways: [
      "Person-centered therapy (also called client-centered therapy) was developed by psychologist Carl Rogers in the 1940s and 1950s.",
      "You set the pace and the topics. The therapist listens closely, reflects back what they hear, and doesn’t judge.",
      "Research links therapist empathy with better outcomes across many kinds of therapy.",
      "Many counselors combine it with other approaches, such as solution-focused or mind-body work.",
    ],
    blocks: [
      {
        heading: "Where does person-centered therapy come from?",
        paragraphs: [
          "Person-centered therapy grew out of the work of American psychologist Carl Rogers, who argued that people tend to grow in healthy directions when they feel truly understood and accepted.",
          "In a well-known 1957 paper, Rogers described the conditions he believed help people change, including a therapist who is genuine, offers unconditional positive regard, and understands the client with empathy ([Rogers, 1957](https://doi.org/10.1037/h0045357)).",
        ],
      },
      {
        heading: "What are the core conditions of person-centered therapy?",
        paragraphs: ["Three therapist qualities sit at the heart of the approach:"],
        list: [
          "Genuineness (congruence): the therapist is real with you, not playing a role",
          "Unconditional positive regard: you’re accepted as a person, whatever you bring",
          "Empathy: the therapist works to understand your experience the way you feel it",
        ],
      },
      {
        heading: "What happens in a person-centered therapy session?",
        paragraphs: [
          "A session usually feels like a calm, focused conversation where you choose what matters most that day.",
          "The therapist listens, reflects what they hear in their own words, and asks questions that help you notice your feelings and values. They don’t hand you a fixed plan or tell you what you should do. If you want practical tools, you can ask, and a counselor who blends approaches can bring them in at your pace. You can read more about [what happens in a first counseling session](/resources/first-counseling-session/).",
        ],
      },
      {
        heading: "Does person-centered therapy work?",
        paragraphs: [
          "Research supports the main ingredient of the approach: a meta-analysis of 82 studies with more than 6,000 clients found that therapist empathy was linked with better client outcomes, a moderate and consistent effect ([Elliott et al., 2018](https://doi.org/10.1037/pst0000175)).",
          "Reviews of humanistic and person-centered therapies have found them helpful for many people, with results broadly similar to other established talk therapies for concerns like depression and relationship difficulties ([Elliott et al., 2021](https://strathprints.strath.ac.uk/74362/)). Like any therapy, it doesn’t work the same way for everyone, and fit with your counselor matters.",
        ],
      },
      {
        heading: "Who might person-centered therapy suit?",
        paragraphs: ["It can be a good fit if you:"],
        list: [
          "Want space to talk things through without being rushed or judged",
          "Are dealing with stress, low mood, anxiety, life transitions, or questions about who you are",
          "Have felt unheard or pushed in past therapy",
          "Prefer to set your own goals rather than follow a set program",
        ],
      },
      {
        heading: "When might another approach be a better fit?",
        paragraphs: [
          "If you want a highly structured program with homework every week, or you need help for a specific condition with a well-defined treatment, ask a counselor how they would approach it.",
          "Counseling isn’t a crisis service. If you’re thinking about harming yourself, call or text 988 or see these [crisis resources](/crisis/).",
        ],
      },
      {
        heading: "How does Sarah use person-centered therapy?",
        paragraphs: [
          "I’m Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S, and person-centered work is the base of how I counsel: you decide what we focus on.",
          "I also draw on solution-focused ideas when you want practical steps, and on [holistic, mind-body counseling](/holistic-counseling/) that pays attention to sleep, breathing, movement, and time outdoors. Sessions happen outdoors through [walk and talk therapy in Dallas–Fort Worth](/walk-and-talk-therapy-dallas/) or by [telehealth anywhere in Texas](/telehealth-counseling-texas/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Is person-centered therapy the same as client-centered therapy?",
        a: "Yes. Carl Rogers first called it client-centered therapy, and the name person-centered became more common later. Both describe the same approach.",
      },
      {
        q: "Does a person-centered therapist give advice?",
        a: "Usually not in the sense of telling you what to do. The focus is on helping you understand your own feelings and choices. Many counselors who blend approaches will share practical ideas when you ask for them.",
      },
      {
        q: "How long does person-centered therapy take?",
        a: "There’s no fixed length. Some people come for a few sessions during a hard stretch, and others come for longer. You and your counselor can check in on how it’s going along the way.",
      },
      {
        q: "Can person-centered therapy be done online?",
        a: "Yes. The approach depends on the conversation and the relationship, so it works by video as well as in person.",
      },
    ],
  },
  {
    path: "resources/rejection-sensitive-dysphoria-adhd",
    published: "2026-11-23",
    related: [LINK.adhdTherapy, LINK.adhdWomen, LINK.regulation, LINK.adhdAnxiety],
    title: title("Rejection Sensitive Dysphoria"),
    description:
      "What rejection sensitive dysphoria (RSD) means in ADHD, what it can feel like, what research says, and calm, practical ways to cope with rejection.",
    eyebrow: "ADHD",
    heading: "What is rejection sensitive dysphoria in ADHD?",
    intro:
      "Rejection sensitive dysphoria (RSD) is a name for intense emotional pain set off by rejection or criticism, whether it’s real or only feels that way. Many adults with ADHD say a small comment or a slow reply can hit them hard and fast, sometimes in the body as much as the mind. RSD isn’t a formal diagnosis, but the experience is real, and there are ways to soften it.",
    takeaways: [
      "RSD describes strong, fast emotional pain after real or perceived rejection or criticism.",
      "It’s a descriptive term, not a formal diagnosis, and research on it is still early.",
      "Big emotional reactions are common in adults with ADHD and can cause real problems day to day.",
      "Calming the body first, then checking the story you’re telling yourself, can take some of the sting out.",
      "A free screener like the ASRS v1.1 is a starting point, not a diagnosis.",
    ],
    blocks: [
      {
        heading: "What does rejection sensitive dysphoria feel like?",
        paragraphs: [
          "RSD often feels like a sudden wave of hurt, shame, or panic that seems much bigger than the moment that set it off.",
          "Everyone’s experience is different. Some common experiences include:",
        ],
        list: [
          "Replaying a comment or a look for hours, sure it meant something bad",
          "Feeling crushed by mild feedback at work or school",
          "Reading a late text reply as a sign someone is upset with you",
          "Physical reactions, like a tight chest, a sick stomach, or feeling frozen",
          "Pulling away from people, or working hard to please everyone so no one is disappointed",
          "Avoiding new things because the risk of failing feels too painful",
        ],
      },
      {
        heading: "Is rejection sensitive dysphoria a real diagnosis?",
        paragraphs: [
          "No. Rejection sensitive dysphoria is a descriptive term, not a formal diagnosis. Psychiatrist William Dodson popularized the name to describe the intense pain of rejection that many people with ADHD report ([CHADD](https://chadd.org/adhd-weekly/rejection-can-more-painful-with-adhd/)).",
          "Strong emotional reactions are widely recognized in ADHD, though. A major review in the American Journal of Psychiatry estimated that emotion dysregulation shows up in roughly 30% to 70% of adults with ADHD and is a major source of difficulty. It’s treated as an associated feature of ADHD rather than one of its diagnostic criteria ([Shaw et al., 2014](https://doi.org/10.1176/appi.ajp.2013.13070966)).",
        ],
      },
      {
        heading: "What does research say about RSD and ADHD?",
        paragraphs: [
          "Research on rejection sensitivity in ADHD is still early, and most studies are small.",
          "In one small qualitative study, university students with ADHD described rejection sensitivity as a full-body experience, with sensations like nausea, chest tightness, or feeling paralyzed. They also described hiding their feelings and withdrawing from others, which often left them lonely. Participants suggested that understanding, reassurance, and acceptance could ease its intensity ([Brighton and Sussex Medical School](https://www.bsms.ac.uk/about/news/2026/it-hurts-in-your-body-new-bsms-research-explores-rejection-sensitivity-in-adhd.aspx); [PLOS ONE study](https://doi.org/10.1371/journal.pone.0314669)).",
          "A survey of 304 college students found that higher ADHD symptom scores were linked with greater rejection sensitivity ([European Psychiatry, 2024](https://doi.org/10.1192/j.eurpsy.2024.594)). Studies like these show a connection, not a cause.",
        ],
      },
      {
        heading: "How can I cope with rejection sensitivity in the moment?",
        paragraphs: [
          "When rejection hits, it often helps to calm your body first and question the story second. These ideas are gentle starting points, not a treatment plan:",
        ],
        list: [
          "Name it: “This is the rejection feeling.” Some people find a label gives them a little space.",
          "Slow your breathing, for example with [box breathing](/resources/box-breathing/)",
          "Ground yourself through your senses with [grounding techniques](/resources/grounding-techniques-for-anxiety/)",
          "Move: a short walk outside can help your body come down from the spike",
          "Wait before you reply, quit, or send that message",
          "Ask: what are two other ways to read what happened?",
          "Tell someone you trust, and let them reassure you",
        ],
      },
      {
        heading: "What helps with rejection sensitivity over time?",
        paragraphs: [
          "Over time, many people find it helps to understand their own patterns, care for the basics that steady the nervous system, and practice kinder self-talk.",
          "Caring for the basics, like sleep, movement, time outdoors, and connection with people who feel safe, is part of a [holistic, mind-body approach](/holistic-counseling/). [Nervous system regulation techniques](/resources/nervous-system-regulation-techniques/) explains simple ways to practice calming your body before a hard moment arrives.",
          "If you have ADHD or think you might, a full evaluation and a treatment plan with your doctor, a psychiatrist, or a psychologist may also help. You can start with a free screener, such as the ASRS v1.1 on the [screening tools page](/screening-tools/). It isn’t a diagnosis.",
        ],
      },
      {
        heading: "When should I talk to someone about rejection sensitivity?",
        paragraphs: [
          "It may be time to reach out if fear of rejection keeps you from work, school, or relationships, or if the hurt lingers for days.",
          "Counseling isn’t a crisis service. If rejection ever leaves you thinking about harming yourself, call or text 988 or see these [crisis resources](/crisis/).",
        ],
      },
      {
        heading: "Where can I get support for ADHD and rejection sensitivity in Dallas?",
        paragraphs: [
          "Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S, offers [adult ADHD counseling](/adhd-therapy/) that looks at both the practical and the emotional side of ADHD, through walk and talk sessions in Dallas–Fort Worth or by telehealth anywhere in Texas.",
          "I don’t diagnose ADHD or prescribe medication. In counseling, you set the pace and the goals. We can look at what sets off the rejection feeling, practice calming your body, and work on clear, practical steps for the moments that hit hardest.",
          "Wondering whether it’s ADHD or anxiety? Read [is it ADHD, anxiety, or both?](/resources/adhd-and-anxiety/)",
        ],
      },
    ],
    faqs: [
      {
        q: "Is rejection sensitive dysphoria only found in ADHD?",
        a: "The term is most often used with ADHD. Many people feel sensitive to rejection in some way, and a doctor, psychiatrist, or psychologist can help sort out what’s behind strong reactions.",
      },
      {
        q: "Can a counselor diagnose RSD?",
        a: "RSD isn’t a formal diagnosis, so there’s nothing to diagnose on its own. I don’t diagnose ADHD either. A doctor, psychiatrist, or psychologist can evaluate for ADHD and other conditions.",
      },
      {
        q: "Is there a test for rejection sensitive dysphoria?",
        a: "There’s no official test for RSD. A free adult ADHD screener like the ASRS v1.1 can be a starting point to bring to a qualified professional, but it isn’t a diagnosis.",
      },
      {
        q: "Does counseling help with rejection sensitivity?",
        a: "Counseling can give you a calm place to understand your reactions and practice new ways to respond. Results differ from person to person, and there’s no guarantee, so it helps to check in on what’s working as you go.",
      },
    ],
  },
  {
    path: "resources/adhd-burnout",
    published: "2026-11-24",
    related: [LINK.adhdTherapy, LINK.burnout, LINK.rsd, LINK.adhdAnxiety, LINK.regulation],
    title: title("ADHD Burnout: Signs & Recovery"),
    description:
      "What ADHD burnout is, common signs, how it differs from depression and job burnout, what early research says, and gentle ways to recover.",
    eyebrow: "ADHD",
    heading: "What is ADHD burnout?",
    intro:
      "ADHD burnout is a name many adults use for deep exhaustion that builds up after months or years of working hard to keep up, stay organized, and hide how much effort everyday life takes. It isn’t a formal diagnosis, and research on it is new, but the experience is common and there are practical ways to ease it.",
    takeaways: [
      "ADHD burnout describes physical, emotional, and mental exhaustion from the constant effort of managing ADHD in daily life.",
      "It’s an emerging, descriptive term, not a formal diagnosis.",
      "A 2024 study of 171 employees found that those who screened positive for ADHD reported more job burnout, partly because of difficulties with time management and organization.",
      "Recovery usually starts with lowering the load, protecting sleep and rest, and building systems that take pressure off willpower.",
      "If exhaustion comes with hopelessness or lasts for weeks, talk to a doctor or counselor, because it can overlap with depression.",
    ],
    blocks: [
      {
        heading: "What does ADHD burnout mean?",
        paragraphs: [
          "ADHD burnout is a descriptive term for the exhaustion that can follow long stretches of pushing through ADHD symptoms: forcing focus, double-checking everything, catching up late at night, and masking struggles so others don’t notice.",
          "Researchers have only started to study it. A 2025 qualitative study in Psychology in the Schools called ADHD burnout “an emerging concept” and described it as ongoing bodily, emotional, and mental exhaustion from living in a constant “hyper” state of managing symptoms ([Hossain and Bain, 2025](https://www.open-access.bcu.ac.uk/16467/)). That study listened to parents of children with ADHD, so it’s an early look, not a final definition.",
        ],
      },
      {
        heading: "What are the signs of ADHD burnout?",
        paragraphs: [
          "Everyone’s experience is different. People describing ADHD burnout often mention:",
        ],
        list: [
          "Feeling drained even after rest, or waking up already tired",
          "Systems and routines that used to work suddenly falling apart",
          "More forgetfulness, missed deadlines, or trouble starting tasks than usual",
          "Shorter fuse: irritability, tears, or shutting down over small things",
          "Pulling away from friends, hobbies, or anything that takes extra energy",
          "A harsh inner voice that says you’re lazy or failing, even though you’re trying hard",
        ],
      },
      {
        heading: "Is ADHD burnout the same as job burnout or depression?",
        paragraphs: [
          "Not exactly, though they can overlap. The World Health Organization describes burnout as an occupational phenomenon from chronic workplace stress, not a medical condition ([WHO](https://www.who.int/standards/classifications/frequently-asked-questions/burn-out-an-occupational-phenomenon)). ADHD burnout is used more broadly, for exhaustion that comes from managing ADHD across work, home, school, and relationships.",
          "ADHD does seem to raise the risk of job burnout. In a 2024 study of 171 employees, those who screened positive for ADHD reported noticeably higher burnout, and difficulties with managing time and getting organized helped explain the link ([Turjeman-Levi et al., 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11007411/)). The study used a self-report screener rather than a diagnosis, so it shows a connection, not a cause.",
          "Depression is different. It tends to bring low mood and loss of interest across most of life, not only tiredness. Read [burnout vs. depression](/resources/burnout-vs-depression/) for the differences, and talk with a doctor if you’re unsure.",
        ],
      },
      {
        heading: "How do you recover from ADHD burnout?",
        paragraphs: [
          "Recovery is usually less about trying harder and more about needing less effort to get through the day. These are gentle starting points, not a treatment plan:",
        ],
        list: [
          "Lower the load where you can: drop, delay, or delegate one or two things this week",
          "Protect sleep and plan real rest, not just collapse at the end of the day",
          "Make tasks visible and small: a short list, a timer, a body double, a reminder on your phone",
          "Move your body, ideally outside; even a short walk can help your nervous system settle",
          "Notice where you’re masking, and find one place where you don’t have to",
          "Swap self-criticism for curiosity: what made this week harder than usual?",
        ],
      },
      {
        heading: "How can I prevent ADHD burnout from coming back?",
        paragraphs: [
          "Many people find it helps to notice their early warning signs, like routines slipping or sleep getting shorter, and to act before exhaustion takes over.",
          "Steady basics, such as sleep, movement, time outdoors, and people who feel safe, are part of a [holistic, mind-body approach](/holistic-counseling/). [Nervous system regulation techniques](/resources/nervous-system-regulation-techniques/) and [creative strategies for adults with ADHD](/resources/adhd-creative-strategies/) have more practical ideas.",
          "If you haven’t had an ADHD evaluation and wonder whether ADHD is part of the picture, a free screener like the ASRS v1.1 on the [screening tools page](/screening-tools/) is a starting point to bring to a doctor, psychiatrist, or psychologist. It isn’t a diagnosis.",
        ],
      },
      {
        heading: "When should I talk to someone about ADHD burnout?",
        paragraphs: [
          "It may be time to reach out if exhaustion lasts for weeks, if you feel hopeless, or if work, school, or relationships are slipping in ways that worry you.",
          "Counseling isn’t a crisis service. If you’re thinking about harming yourself, call or text 988 or see these [crisis resources](/crisis/).",
        ],
      },
      {
        heading: "Where can I get support for ADHD burnout in Dallas?",
        paragraphs: [
          "Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S, offers [adult ADHD counseling](/adhd-therapy/) through walk and talk sessions in Dallas–Fort Worth or by [telehealth anywhere in Texas](/telehealth-counseling-texas/).",
          "I don’t diagnose ADHD or prescribe medication. In counseling, we can look at what’s draining you, practice ways to calm your body, and build simple routines that ask less of you. You set the pace and the goals.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is ADHD burnout a real diagnosis?",
        a: "No. ADHD burnout is a descriptive term, not a formal diagnosis, and research on it is still early. The exhaustion people describe is real, and a doctor or counselor can help sort out what’s behind it.",
      },
      {
        q: "How long does ADHD burnout last?",
        a: "There’s no set timeline, and no research yet that measures it. Many people notice it eases as the load drops and rest improves. If it lasts for weeks or comes with hopelessness, talk with a doctor or counselor.",
      },
      {
        q: "Can a counselor help with ADHD burnout?",
        a: "Counseling can give you a steady place to understand what’s draining you and try practical changes. Results differ from person to person and there’s no guarantee. Sarah Ateia, LPC Associate, offers talk therapy only and doesn’t diagnose ADHD or prescribe.",
      },
    ],
  },
  {
    path: "resources/stress-management",
    published: "2026-11-24",
    related: [
      LINK.giftGuide,
      LINK.anxiety,
      LINK.holisticCounseling,
      LINK.boxBreathing,
      LINK.burnout,
      LINK.tools,
      LINK.anxietyOrStress,
    ],
    title: title("Stress Management in Dallas"),
    description:
      "What stress is, how it differs from anxiety, research-based ways to manage it day to day, and when to see a stress counselor in Dallas–Fort Worth.",
    eyebrow: "Stress",
    heading: "How do you manage stress, and when should you see a counselor?",
    intro:
      "Stress is your body and mind responding to pressure, like a deadline, a move, money worries, or caring for someone. A little stress can help you rise to a challenge. When it doesn’t let up, it can wear on sleep, mood, and health. Here’s what stress is, what helps, and when talking to a counselor makes sense.",
    takeaways: [
      "Stress is a response to an outside pressure and usually eases once the situation is resolved; anxiety can continue even when there’s no current threat.",
      "Simple, research-supported basics help: regular movement, sleep, slow breathing, time outdoors, and connection with people.",
      "In the American Psychological Association’s 2025 survey, 69% of U.S. adults said they needed more emotional support in the past year than they got.",
      "It may be time to talk to a professional if stress won’t go away or you’re struggling to cope.",
      "Counseling is available in English or Arabic, walking outdoors in Dallas–Fort Worth or by telehealth across Texas.",
    ],
    blocks: [
      {
        heading: "What is stress?",
        paragraphs: [
          "The National Institute of Mental Health describes stress as the physical or mental response to an outside cause, such as a heavy workload or an illness ([NIMH](https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet)). It can show up as tense muscles, headaches, poor sleep, irritability, or trouble focusing.",
        ],
      },
      {
        heading: "What’s the difference between stress and anxiety?",
        paragraphs: [
          "Stress is tied to a situation and usually goes away once that situation is resolved. Anxiety is the body’s reaction to stress and can stay even when there’s no current threat ([NIMH](https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet)).",
          "If worry hangs on after the pressure has passed, [anxiety therapy](/anxiety-therapy-dallas/) explains how counseling for anxiety works.",
        ],
      },
      {
        heading: "Why do so many people feel stressed right now?",
        paragraphs: [
          "Many people are carrying more than they used to. In the American Psychological Association’s Stress in America 2025 survey of more than 3,000 U.S. adults, more than six in 10 named societal division as a significant source of stress, about half said they felt isolated or left out at least some of the time, and 69% said they needed more emotional support in the past year than they received ([APA, 2025](https://www.apa.org/news/press/releases/2025/11/nation-suffering-division-loneliness)).",
          "The same survey found that 92% of adults see relationships as a key source of meaning, which is one reason connection is part of managing stress, not an extra.",
        ],
      },
      {
        heading: "What are healthy ways to manage stress?",
        paragraphs: ["These everyday basics have research behind them:"],
        list: [
          "Move your body regularly; the CDC recommends 150 minutes a week of moderate activity for adults ([CDC](https://www.cdc.gov/physical-activity-basics/guidelines/adults.html))",
          "Keep a steady sleep routine and go easy on caffeine ([NIMH](https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet))",
          "Slow your breathing for a few minutes, for example with [box breathing](/resources/box-breathing/)",
          "Ground yourself through your senses with [grounding techniques](/resources/grounding-techniques-for-anxiety/)",
          "Try mind and body practices like relaxation, yoga, or mindfulness ([NCCIH](https://www.nccih.nih.gov/health/providers/digest/mind-and-body-approaches-for-stress-science))",
          "Write things down: a short journal can get worries out of your head",
          "Reach out to a friend or family member you trust",
        ],
      },
      {
        heading: "Can walking outdoors help with stress?",
        paragraphs: [
          "Many people find that walking outside takes the edge off. Movement is one of the most consistent stress helpers in research, and being outdoors adds a change of scene. [Walk and talk therapy](/resources/what-is-walk-and-talk-therapy/) brings counseling outside for people who think more clearly on the move.",
        ],
      },
      {
        heading: "When should you see a counselor for stress?",
        paragraphs: [
          "NIMH suggests talking to a professional if you’re struggling to cope or your stress or anxiety symptoms won’t go away ([NIMH](https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet)). Other signs it may help:",
        ],
        list: [
          "Stress is affecting sleep, eating, work, or relationships",
          "You’re relying on alcohol or other things to get through the day",
          "You feel stuck, numb, or on edge most of the time",
          "You can’t tell whether it’s stress, [burnout, or depression](/resources/burnout-vs-depression/)",
        ],
      },
      {
        heading: "Where can I find stress counseling in Dallas?",
        paragraphs: [
          "Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S, offers [holistic counseling](/holistic-counseling/) for stress through walk and talk sessions in Dallas–Fort Worth, usually at Sam Houston Trail Park in Irving, or by [telehealth anywhere in Texas](/telehealth-counseling-texas/), in English or Arabic.",
          "In counseling, we can look at where stress sits in your body and your week, practice ways to calm down, and decide what needs to change. Fees are self-pay; see [affordable therapy in Dallas](/affordable-therapy-dallas/) for costs and reduced rates.",
          "Counseling isn’t a crisis service. If you’re in crisis, call or text 988 or see these [crisis resources](/crisis/).",
        ],
      },
    ],
    faqs: [
      {
        q: "What’s the fastest way to calm stress in the moment?",
        a: "Slow breathing is one of the quickest tools. Try breathing in for 4 counts, holding for 4, breathing out for 4, and holding for 4, for about a minute. Grounding through your senses can also help.",
      },
      {
        q: "Is stress the same as anxiety?",
        a: "No. Stress is a response to an outside pressure and usually eases when the situation is resolved. Anxiety can continue even when there’s no current threat, according to the National Institute of Mental Health.",
      },
      {
        q: "Does insurance cover stress counseling?",
        a: "Sarah Ateia, LPC Associate, is self-pay only and doesn’t bill insurance. Sessions are $100, with reduced rates available based on household income and optional session packages.",
      },
    ],
  },
  {
    path: "resources/panic-attack-vs-anxiety-attack",
    published: "2026-11-25",
    related: [LINK.anxiety, LINK.anxietyOrStress, LINK.grounding, LINK.boxBreathing, LINK.tools],
    title: title("Panic Attack vs Anxiety Attack"),
    description:
      "How a panic attack differs from an “anxiety attack,” what each feels like, what helps in the moment, and when to get support in Dallas–Fort Worth.",
    eyebrow: "Anxiety",
    heading: "What’s the difference between a panic attack and an anxiety attack?",
    intro:
      "People use “panic attack” and “anxiety attack” to mean the same thing, but they usually describe two different experiences. A panic attack hits suddenly and hard. What people call an anxiety attack tends to build over time around a worry. Knowing which one you’re dealing with can make it less frightening and help you pick what to try.",
    takeaways: [
      "A panic attack is a sudden wave of intense fear or a sense of losing control, often with a racing heart, chest pain, shaking, or trouble breathing, even when there’s no clear danger.",
      "“Anxiety attack” isn’t a medical term. People usually use it for anxiety that builds gradually around a stressor.",
      "Panic attacks can feel like a heart attack. If you’re not sure what’s happening, get medical care right away.",
      "Slow breathing and grounding through your senses can help you ride out the peak.",
      "Psychotherapy is a commonly used treatment for both panic and ongoing anxiety, according to the National Institute of Mental Health.",
    ],
    blocks: [
      {
        heading: "What is a panic attack?",
        paragraphs: [
          "The National Institute of Mental Health (NIMH) describes panic attacks as a sudden wave of fear or discomfort, or a sense of losing control, even when there is no clear danger or trigger. They can happen at any time, sometimes even during sleep ([NIMH](https://www.nimh.nih.gov/health/publications/panic-disorder-when-fear-overwhelms)).",
          "Common physical signs include ([NIMH](https://www.nimh.nih.gov/health/publications/panic-disorder-when-fear-overwhelms)):",
        ],
        list: [
          "A pounding or racing heart",
          "Sweating, chills, or trembling",
          "Trouble breathing",
          "Weakness or dizziness",
          "Tingly or numb hands",
          "Chest pain, stomach pain, or nausea",
        ],
      },
      {
        heading: "Is an “anxiety attack” a real thing?",
        paragraphs: [
          "Not as a diagnosis. Cleveland Clinic notes that the DSM-5-TR, the manual clinicians use to define mental health conditions, doesn’t recognize or define an anxiety attack ([Cleveland Clinic](https://health.clevelandclinic.org/panic-attack-vs-anxiety-attack)). The feeling is still real. People usually use the phrase for anxiety that builds up around something stressful, like a big exam, a hard conversation, or a flight.",
        ],
      },
      {
        heading: "How can you tell them apart?",
        paragraphs: ["These differences are general patterns, not a way to diagnose yourself:"],
        list: [
          "Onset: anxiety tends to build gradually around a stressor, while panic attacks typically come on suddenly and unexpectedly ([Cleveland Clinic](https://health.clevelandclinic.org/panic-attack-vs-anxiety-attack))",
          "Intensity: panic usually feels sharper and more physical; building anxiety often feels like worry, tension, and restlessness that rises and falls",
          "Trigger: anxiety usually has a clear focus; a panic attack can arrive with no obvious cause",
          "Length: Cleveland Clinic says panic attacks usually last 15 to 20 minutes, and NIMH notes they can last from a few minutes to an hour or sometimes longer",
        ],
      },
      {
        heading: "Can a panic attack feel like a heart attack?",
        paragraphs: [
          "Yes. NIMH notes that panic attacks often include physical symptoms that might feel like a heart attack ([NIMH](https://www.nimh.nih.gov/health/publications/panic-disorder-when-fear-overwhelms)). Don’t assume chest pain is “just anxiety.” If you have chest pain, trouble breathing, or you’re unsure what’s happening, call 911 or go to the nearest emergency room. A primary care doctor can also check for physical causes.",
        ],
      },
      {
        heading: "What helps during a panic or anxiety attack?",
        paragraphs: [
          "The goal in the moment isn’t to force the feeling away. It’s to give your body signals that you’re safe enough to let it pass. These can help:",
        ],
        list: [
          "Slow your breathing, for example with [box breathing](/resources/box-breathing/): in for 4, hold for 4, out for 4, hold for 4",
          "Name what’s happening: “This is panic. It’s uncomfortable, and it will pass.”",
          "Ground yourself through your senses with the [5-4-3-2-1 method](/resources/grounding-techniques-for-anxiety/)",
          "Put your feet flat on the floor or hold something cold",
          "Once it eases, move gently: a short walk can help your body settle",
        ],
      },
      {
        heading: "How common are panic attacks?",
        paragraphs: [
          "Panic attacks are common, and panic disorder (repeated, unexpected attacks plus ongoing worry about having more) affected an estimated 2.7% of U.S. adults in the past year, based on national survey data NIMH reports ([NIMH](https://www.nimh.nih.gov/health/statistics/panic-disorder)). Having one panic attack doesn’t mean you have panic disorder. Only a qualified health care provider can diagnose it.",
        ],
      },
      {
        heading: "When should you talk to someone?",
        paragraphs: [
          "NIMH says treatment for panic disorder typically involves psychotherapy, medication, or both, and that cognitive behavioral therapy is commonly used ([NIMH](https://www.nimh.nih.gov/health/publications/panic-disorder-when-fear-overwhelms)). It may help to reach out if:",
        ],
        list: [
          "You’ve had more than one panic attack, or you’re worried about the next one",
          "You’re avoiding places, driving, or people because of anxiety",
          "Worry is affecting sleep, work, school, or relationships",
          "You can’t tell whether it’s [anxiety or just stress](/resources/anxiety-or-stress/)",
        ],
      },
      {
        heading: "Where can I get anxiety counseling in Dallas?",
        paragraphs: [
          "Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S, offers [talk therapy for anxiety](/anxiety-therapy-dallas/) through walk and talk sessions in Dallas–Fort Worth, usually at Sam Houston Trail Park in Irving, or by [telehealth anywhere in Texas](/telehealth-counseling-texas/), in English or Arabic. Sessions focus on understanding what keeps your alarm system switched on and practicing calming skills you can use on your own.",
          "Sarah offers talk therapy only. She doesn’t diagnose or prescribe; if medication might help, your doctor or a psychiatric provider is the right person to ask.",
          "Counseling isn’t a crisis service. If you’re in crisis, call or text 988 or see these [crisis resources](/crisis/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a panic attack the same as an anxiety attack?",
        a: "Not quite. A panic attack is a sudden wave of intense fear with strong physical symptoms, often with no clear trigger. “Anxiety attack” isn’t a medical term; people usually use it for anxiety that builds gradually around a stressor.",
      },
      {
        q: "How long does a panic attack last?",
        a: "Cleveland Clinic says panic attacks usually last 15 to 20 minutes. The National Institute of Mental Health notes they can last from a few minutes to an hour or sometimes longer.",
      },
      {
        q: "Can counseling help with panic attacks?",
        a: "Psychotherapy is a commonly used treatment for panic, according to the National Institute of Mental Health. Results differ from person to person and there’s no guarantee. Sarah Ateia, LPC Associate, offers talk therapy only.",
      },
    ],
  },
  {
    path: "resources/anxiety-or-stress",
    published: "2026-11-25",
    related: [LINK.anxiety, LINK.stress, LINK.panicVsAnxiety, LINK.screening, LINK.burnout],
    title: title("Anxiety or Stress? How to Tell"),
    description:
      "How to tell whether you’re stressed or dealing with anxiety, signs that it’s more than stress, what helps, and when to see a counselor in Dallas.",
    eyebrow: "Anxiety",
    heading: "How do I know if I have anxiety or I’m just stressed?",
    intro:
      "Stress and anxiety feel a lot alike: a tight chest, a busy mind, bad sleep. The main difference is what happens when the pressure lifts. Stress usually eases once the situation does. Anxiety tends to stick around, or show up when nothing is wrong. Here’s how to think it through, and when it makes sense to get support.",
    takeaways: [
      "Stress is a response to an outside cause; anxiety can continue even when there’s no current threat, according to the National Institute of Mental Health.",
      "A useful question: does the feeling ease when the stressful situation ends?",
      "Worry that’s hard to control on most days for months, with restlessness, tiredness, irritability, tension, or sleep problems, is worth talking to a health care provider about.",
      "Only a qualified provider can diagnose an anxiety disorder; free screening tools can help you decide whether to ask.",
      "Movement, a steady sleep routine, less caffeine, and slow breathing help with both.",
    ],
    blocks: [
      {
        heading: "What’s the difference between stress and anxiety?",
        paragraphs: [
          "NIMH describes stress as the physical or mental response to an external cause, like a heavy workload or an illness. Anxiety is the body’s reaction to stress and can occur even if there is no current threat ([NIMH](https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet)).",
          "In everyday terms: stress is usually about something (a deadline, a move, a bill). Anxiety can feel like the alarm keeps ringing after the thing is handled, or rings before anything has happened.",
        ],
      },
      {
        heading: "Questions to ask yourself",
        paragraphs: ["These aren’t a test, just a way to notice patterns:"],
        list: [
          "Can I name what I’m worried about, and is it happening now?",
          "When that situation ends, do I feel better within a few days?",
          "Do I worry about many different things, even when life is calm?",
          "Is it hard to stop worrying once I start?",
          "Am I avoiding things I used to handle fine?",
          "Is it affecting my sleep, work, school, or relationships?",
        ],
      },
      {
        heading: "When might it be more than stress?",
        paragraphs: [
          "NIMH explains that generalized anxiety disorder involves finding it hard to control worry on most days for at least six months, along with symptoms like feeling restless or on edge, fatigue, trouble concentrating, irritability, muscle tension, or problems with sleep ([NIMH](https://www.nimh.nih.gov/health/publications/generalized-anxiety-disorder-gad)).",
          "Sudden waves of intense fear with a racing heart or trouble breathing may be panic attacks; see [panic attack vs. anxiety attack](/resources/panic-attack-vs-anxiety-attack/).",
          "A health care provider can check for physical causes and make a diagnosis if one fits ([NIMH](https://www.nimh.nih.gov/health/publications/generalized-anxiety-disorder-gad)). If you want a starting point, these optional [screening tools](/screening-tools/) are free and private.",
        ],
      },
      {
        heading: "What helps with both stress and anxiety?",
        paragraphs: [
          "NIMH suggests everyday steps like these ([NIMH](https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet)):",
        ],
        list: [
          "Exercise regularly and eat healthy, regular meals",
          "Stick to a sleep routine",
          "Avoid too much caffeine, like coffee and soft drinks",
          "Keep a journal to get worries out of your head",
          "Practice slow breathing, such as [box breathing](/resources/box-breathing/), or [grounding](/resources/grounding-techniques-for-anxiety/)",
          "Stay connected with people who are good for you",
        ],
      },
      {
        heading: "When should you see a counselor?",
        paragraphs: [
          "NIMH says it may be time to talk to a professional if you’re struggling to cope or if the symptoms of your stress or anxiety won’t go away. It also notes that psychotherapy (talk therapy) and medication are the two main treatments for anxiety ([NIMH](https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet)).",
          "You don’t need to be sure it’s anxiety before reaching out. Not knowing is a fine reason to talk it through. For more on stress specifically, see [how to manage stress](/resources/stress-management/).",
        ],
      },
      {
        heading: "Where can I get help for anxiety or stress in Dallas?",
        paragraphs: [
          "Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S, offers [anxiety therapy](/anxiety-therapy-dallas/) and [holistic counseling](/holistic-counseling/) through walk and talk sessions in Dallas–Fort Worth, usually at Sam Houston Trail Park in Irving, or by [telehealth anywhere in Texas](/telehealth-counseling-texas/), in English or Arabic. Sarah offers talk therapy only and doesn’t diagnose or prescribe.",
          "Fees are self-pay; see [affordable therapy in Dallas](/affordable-therapy-dallas/) for costs and reduced rates. Counseling isn’t a crisis service. If you’re in crisis, call or text 988 or see these [crisis resources](/crisis/).",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I know if I have anxiety or I’m just stressed?",
        a: "Stress is usually tied to a situation and eases when it ends. Anxiety can continue even when there’s no current threat, according to the National Institute of Mental Health. If worry is hard to control on most days, or won’t go away, talk to a health care provider or counselor.",
      },
      {
        q: "Can stress turn into anxiety?",
        a: "NIMH describes anxiety as the body’s reaction to stress, so long-running stress and anxiety are closely linked. If you still feel on edge after a stressful period has passed, it’s worth checking in with a professional.",
      },
      {
        q: "Does Sarah diagnose anxiety?",
        a: "No. Sarah Ateia, LPC Associate, offers talk therapy only and doesn’t diagnose or prescribe. A primary care doctor or other qualified provider can evaluate symptoms and rule out physical causes.",
      },
    ],
  },
  {
    path: "resources/life-transitions-counseling",
    published: "2026-11-24",
    related: [
      LINK.youngAdult,
      LINK.familyBoundaries,
      LINK.culture,
      LINK.personCentered,
      LINK.selfCare,
    ],
    title: title("Life Transitions Counseling"),
    description:
      "What life transitions counseling is, the changes it can help with, what sessions look like, and how to find support in Dallas–Fort Worth or online.",
    eyebrow: "Life transitions",
    heading: "What is life transitions counseling?",
    intro:
      "Life transitions counseling is talk therapy focused on a big change, like a move, a new job or job loss, graduation, a breakup, becoming a parent, or a loss. Even good changes can shake your sense of who you are. Counseling gives you a steady place to sort through what’s ending, what’s beginning, and what you want next.",
    takeaways: [
      "Life transitions counseling is talk therapy for adjusting to a major change, wanted or unwanted.",
      "Common transitions include moves, immigration, school to work, job changes, relationships, family changes, and loss.",
      "Feeling unsettled during a big change is normal; counseling can help when it starts to affect sleep, work, or relationships.",
      "Sessions usually focus on your values, practical next steps, and steadying your body during uncertainty.",
      "Support is available in English or Arabic, walking outdoors in Dallas–Fort Worth or by telehealth across Texas.",
    ],
    blocks: [
      {
        heading: "What counts as a life transition?",
        paragraphs: [
          "Any change that reshapes your daily life or your sense of who you are. Some common ones:",
        ],
        list: [
          "Moving to a new city or country, or adjusting to a new culture",
          "Starting or finishing college, or a first full-time job",
          "A new job, a promotion, a layoff, or retirement",
          "A new relationship, marriage, separation, or divorce",
          "Becoming a parent, or children leaving home",
          "Caring for a parent, a health change, or losing someone close",
        ],
      },
      {
        heading: "Why can big changes feel so hard, even good ones?",
        paragraphs: [
          "Change asks you to let go of routines, roles, and people that helped you feel steady, often before the new ones are in place. That in-between stretch can bring stress, doubt, loneliness, or grief, even when the change is one you wanted.",
          "Connection matters during these stretches. In the American Psychological Association’s 2025 Stress in America survey, about half of U.S. adults said they felt isolated at least some of the time, and 69% said they needed more emotional support in the past year than they received ([APA, 2025](https://www.apa.org/news/press/releases/2025/11/nation-suffering-division-loneliness)).",
        ],
      },
      {
        heading: "What happens in life transitions counseling?",
        paragraphs: ["Every counselor works differently. In my sessions, the work often includes:"],
        list: [
          "Naming what you’re losing and what you’re gaining, so both have room",
          "Clarifying what matters to you now, which may have shifted",
          "Breaking the next stage into practical, doable steps",
          "Calming your body during uncertainty, with tools like [grounding](/resources/grounding-techniques-for-anxiety/) and slow breathing",
          "Looking at family, cultural, or faith expectations that shape the decision",
        ],
      },
      {
        heading: "Who is life transitions counseling for?",
        paragraphs: [
          "It can suit anyone facing a major change, and it’s especially common for [young adults](/young-adult-counseling/) moving from school to work or living on their own for the first time.",
          "It can also help people adjusting to life in a new country or balancing two cultures. [Choosing a counselor: language and culture](/resources/choosing-a-counselor-language-culture/) covers what to ask if that’s part of your story.",
        ],
      },
      {
        heading: "When is it time to talk to someone about a life change?",
        paragraphs: ["It may help to reach out if:"],
        list: [
          "The change is affecting your sleep, eating, work, or relationships",
          "You feel stuck and can’t make a decision you need to make",
          "Sadness or worry lasts for weeks rather than easing",
          "You feel alone with it, or the people around you see it differently",
        ],
      },
      {
        heading: "Where can I find life transitions counseling in Dallas?",
        paragraphs: [
          "Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S, offers counseling for life transitions through [walk and talk sessions in Dallas–Fort Worth](/walk-and-talk-therapy-dallas/), usually at Sam Houston Trail Park in Irving, or by [telehealth anywhere in Texas](/telehealth-counseling-texas/), in English or [Arabic](/arabic-counseling/).",
          "My approach is [person-centered](/resources/what-is-person-centered-therapy/): you set the pace and the goals. The first step is a free 15-minute phone consultation to see if it feels like a fit.",
          "Counseling isn’t a crisis service. If you’re in crisis, call or text 988 or see these [crisis resources](/crisis/).",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does life transitions counseling take?",
        a: "It varies. Some people come for a handful of sessions around one decision or change; others stay longer while things settle. You can decide together with your counselor and change your mind at any time.",
      },
      {
        q: "Do I need a diagnosis to get counseling for a life change?",
        a: "No. Sarah Ateia, LPC Associate, is self-pay and doesn’t bill insurance, so counseling for a life change doesn’t require an insurance diagnosis.",
      },
      {
        q: "Can I do life transitions counseling online?",
        a: "Yes. Telehealth sessions are available to anyone located in Texas at the time of the session.",
      },
    ],
  },
];

// Blog posts live at /blog/. Educational only: each ends with the medical disclaimer.
export const BLOG_POSTS: ContentPage[] = [
  {
    path: "blog/genes-and-mental-health",
    published: "2026-11-21",
    related: [LINK.comt, LINK.anxiety, LINK.depression, LINK.outdoor],
    title: "Genes and Mental Health: What COMT and MTHFR Tell You",
    description:
      "Can genes like COMT and MTHFR affect anxiety or depression? What the research says, what DNA tests can’t tell you, and what helps whatever your genes.",
    eyebrow: "Genes and mental health",
    heading:
      "Can Your Genes Affect Your Mental Health? What COMT and MTHFR Can (and Can’t) Tell You",
    byline: "By Sarah Ateia, LPC Associate (supervised by Don Zablosky, LPC-S)",
    disclaimer:
      "This article is for education only and isn't medical advice. Talk to your doctor before getting genetic testing or starting any supplement.",
    sources: [
      {
        label:
          "Gilbody S, Lewis S, Lightfoot T. MTHFR genetic polymorphisms and psychiatric disorders: a HuGE review. Am J Epidemiol. 2007.",
        url: "https://doi.org/10.1093/aje/kwj347",
      },
      {
        label:
          "Hickey SE et al. ACMG Practice Guideline: lack of evidence for MTHFR polymorphism testing. Genet Med. 2013;15(2):153-6.",
        url: "https://pubmed.ncbi.nlm.nih.gov/23288205/",
      },
      {
        label:
          "Stein DJ et al. Warriors versus worriers: the role of COMT gene variants. CNS Spectr. 2006.",
        url: "https://pubmed.ncbi.nlm.nih.gov/17008817/",
      },
    ],
    intro:
      "Yes, a little. Genes like COMT and MTHFR can slightly raise or lower how sensitive you are to stress, anxiety or low mood, but no single gene causes anxiety or depression.",
    takeaways: [
      "Genes like COMT and MTHFR can slightly raise or lower how sensitive you are to stress, anxiety or low mood.",
      "No single gene causes anxiety or depression. Sleep, stress, relationships, nutrition and life events matter a lot.",
      "Your genes aren’t your destiny. Therapy, movement and healthy routines help no matter what your DNA says.",
    ],
    blocks: [
      {
        heading: "Do genes cause anxiety or depression?",
        paragraphs: [
          "No single gene causes anxiety or depression. Genes can nudge how your brain handles stress and mood chemicals, but they work together with your environment, habits and life experiences.",
        ],
      },
      {
        heading: "What are COMT and MTHFR?",
        paragraphs: [
          "They’re two genes people often hear about from DNA tests.",
          "COMT helps break down dopamine and other stress chemicals in the front of the brain, the part that handles focus and emotions. You can read more in [the COMT gene and anxiety](/blog/comt-gene-anxiety/).",
          "MTHFR helps your body process folate (vitamin B9) and a substance called homocysteine ([Gilbody et al., 2007](https://doi.org/10.1093/aje/kwj347)).",
        ],
      },
      {
        heading: "Should I get tested?",
        paragraphs: [
          "Talk to your doctor first.",
          "Medical genetics experts say routine MTHFR testing has limited usefulness for most people, and a result usually doesn’t change what you should do day to day ([ACMG, 2013](https://pubmed.ncbi.nlm.nih.gov/23288205/)).",
        ],
      },
      {
        heading: "What actually helps, whatever your genes?",
        paragraphs: [
          "Consistent sleep, movement and time outside, steady meals, real connection with people, and therapy that teaches you how your own stress response works.",
          "Therapy can be part of that, including [walk and talk therapy](/walk-and-talk-therapy-dallas/) outdoors, [anxiety therapy](/anxiety-therapy-dallas/) and [depression counseling](/depression-counseling-dallas/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Is anxiety genetic?",
        a: "Partly. Genes can make some people more sensitive to stress, but environment and experience shape whether anxiety develops.",
      },
      {
        q: "Can a therapist read my DNA results?",
        a: "A counselor can talk with you about how stress and mood affect your life, but genetic results should be reviewed with your doctor or a genetic counselor.",
      },
    ],
  },
  {
    path: "blog/comt-gene-anxiety",
    published: "2026-11-21",
    related: [LINK.genes, LINK.anxiety, LINK.depression, LINK.regulation],
    title: "The COMT Gene and Anxiety: Warrior or Worrier?",
    description:
      "What the COMT gene does, what the Val158Met variant means, and why the “warrior vs. worrier” idea is a tendency, not a diagnosis.",
    eyebrow: "Genes and anxiety",
    heading: "The COMT Gene and Anxiety: Are You a “Warrior” or a “Worrier”?",
    byline: "By Sarah Ateia, LPC Associate (supervised by Don Zablosky, LPC-S)",
    disclaimer:
      "This article is for education only and isn't medical advice. Talk to your doctor before getting genetic testing or starting any supplement.",
    sources: [
      {
        label:
          "Stein DJ et al. Warriors versus worriers: the role of COMT gene variants. CNS Spectr. 2006.",
        url: "https://pubmed.ncbi.nlm.nih.gov/17008817/",
      },
      {
        label:
          "Lee LO, Prescott CA. Association of the COMT val158met polymorphism and anxiety-related traits: a meta-analysis.",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3991696/",
      },
      {
        label:
          "Mier D, Kirsch P, Meyer-Lindenberg A. Neural substrates of pleiotropic action of genetic variation in COMT: a meta-analysis. Mol Psychiatry. 2010.",
        url: "https://pubmed.ncbi.nlm.nih.gov/19417742/",
      },
    ],
    intro:
      "COMT is a gene that controls how fast your brain clears dopamine in the area that handles focus and emotions. One common version may make some people more sensitive to stress and anxiety, but it’s a tendency, not a diagnosis.",
    takeaways: [
      "COMT is a gene that controls how fast your brain clears dopamine in the area that handles focus and emotions.",
      "One common version (called “Met”) slows the enzyme down by about 2 to 4 times, which may sharpen focus but can make some people more sensitive to stress and anxiety.",
      "Researchers call this the “warrior vs. worrier” idea, but it’s a tendency, not a diagnosis.",
    ],
    blocks: [
      {
        heading: "What does the COMT gene do?",
        paragraphs: [
          "COMT makes an enzyme that breaks down dopamine, adrenaline and noradrenaline.",
          "It matters most in the prefrontal cortex, the part of your brain behind your forehead that helps you plan, focus and calm emotions.",
        ],
      },
      {
        heading: "What is the Val158Met variant?",
        paragraphs: [
          "People carry two copies of COMT, and each copy is usually one of two versions: “Val” or “Met.”",
          "The Met version makes the enzyme work about 2 to 4 times slower, so more dopamine stays active in the front of the brain.",
        ],
      },
      {
        heading: "What is the “warrior vs. worrier” idea?",
        paragraphs: [
          "Scientists noticed a trade-off ([Stein et al., 2006](https://pubmed.ncbi.nlm.nih.gov/17008817/)).",
          "People with Val versions may handle sudden stress a little better (“warriors”). People with Met versions may have an edge in memory and attention but can be more prone to worry and anxiety under pressure (“worriers”) ([Mier et al., 2010](https://pubmed.ncbi.nlm.nih.gov/19417742/)).",
        ],
      },
      {
        heading: "Does COMT cause anxiety?",
        paragraphs: [
          "No. It may make some people more stress-sensitive.",
          "Studies show the effect depends on things like sex and ethnicity, and life experiences matter just as much ([Lee & Prescott](https://pmc.ncbi.nlm.nih.gov/articles/PMC3991696/)). You can read more in [can your genes affect your mental health?](/blog/genes-and-mental-health/)",
        ],
      },
      {
        heading: "What helps if you feel like a “worrier”?",
        paragraphs: [
          "Learning your stress signals, calming your body (breathing, grounding, movement outdoors), steady sleep, and therapy that builds coping skills.",
          "Being a “worrier” often comes with real strengths: attention to detail, empathy and focus.",
          "If worry is getting in the way, [anxiety therapy](/anxiety-therapy-dallas/) can help you build those skills, and [depression counseling](/depression-counseling-dallas/) is there if low mood is part of it too.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I change my COMT gene?",
        a: "No, but you can change how your body and mind respond to stress.",
      },
      {
        q: "Should I take supplements for COMT?",
        a: "Talk to your doctor. Don’t start supplements based on a DNA test alone.",
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
            // Schema gets plain text: [label](url) links become just their label.
            acceptedAnswer: { "@type": "Answer", text: a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") },
          })),
        },
      ]
    : [];

// Every outside source an article links to, so answer engines can see what each claim rests on.
const citations = (page: ContentPage) => {
  const text = [
    page.intro,
    ...(page.takeaways ?? []),
    ...page.blocks.flatMap((b) => [...(b.paragraphs ?? []), ...(b.list ?? [])]),
    ...(page.faqs ?? []).map((f) => f.a),
  ].join(" ");
  const links = [...text.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)].map((m) => m[1]);
  return [...new Set([...links, ...(page.sources ?? []).map((s) => s.url)])];
};

// The page's own visible heading, so the search label names what the reader sees.
const crumb = (page: ContentPage) => page.heading.replace(/\.$/, "");

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
export const SITE_PAGES: {
  path: string;
  title: string;
  description: string;
  graph: object[];
}[] = [
  ...[...TOPICS, ...CITY_PAGES].map((page) => ({
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
        // Outdoor sessions only happen in Dallas–Fort Worth parks. Telehealth reaches all of Texas.
        areaServed: page.city
          ? { "@type": "City", name: `${page.city}, TX` }
          : page.path === "walk-and-talk-therapy-dallas"
            ? { "@type": "Place", name: "Dallas–Fort Worth metroplex" }
            : { "@type": "State", name: "Texas" },
      },
      breadcrumbs(["Home", "https://www.sarahateia.com/"], [crumb(page), url(page.path)]),
      ...faqLabel(page),
    ],
  })),
  {
    path: "resources",
    title: title("Counseling Resources & Guides"),
    description:
      "Plain-language guides on therapy costs and sliding scales, walk and talk and holistic therapy, ADHD, young adults, choosing a counselor, and self-care.",
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
        datePublished: page.published ?? PUBLISHED,
        dateModified: page.updated ?? page.published ?? PUBLISHED,
        inLanguage: "en-US",
        author: { ...SARAH, "@type": "Person", name: "Sarah Ateia", jobTitle: "LPC Associate" },
        publisher: PRACTICE,
        citation: citations(page),
      },
      breadcrumbs(
        ["Home", "https://www.sarahateia.com/"],
        ["Resources", url("resources")],
        [crumb(page), url(page.path)],
      ),
      ...faqLabel(page),
    ],
  })),
  {
    path: "blog",
    title: title("Mind-Body Mental Health Blog"),
    description:
      "Plain-language articles on how genes, stress and the body shape mental health, and what helps whatever your DNA says. Educational only.",
    graph: [
      {
        "@type": "CollectionPage",
        "@id": `${url("blog")}#page`,
        name: "Blog",
        url: url("blog"),
        isPartOf: { "@id": "https://www.sarahateia.com/#website" },
        hasPart: BLOG_POSTS.map((a) => ({ "@id": `${url(a.path)}#article` })),
      },
      breadcrumbs(["Home", "https://www.sarahateia.com/"], ["Blog", url("blog")]),
    ],
  },
  ...BLOG_POSTS.map((page) => ({
    path: page.path,
    title: page.title,
    description: page.description,
    graph: [
      {
        "@type": "BlogPosting",
        "@id": `${url(page.path)}#article`,
        headline: page.heading,
        description: page.description,
        url: url(page.path),
        datePublished: page.published ?? PUBLISHED,
        dateModified: page.updated ?? page.published ?? PUBLISHED,
        inLanguage: "en-US",
        author: { ...SARAH, "@type": "Person", name: "Sarah Ateia", jobTitle: "LPC Associate" },
        publisher: PRACTICE,
        citation: citations(page),
      },
      breadcrumbs(
        ["Home", "https://www.sarahateia.com/"],
        ["Blog", url("blog")],
        [crumb(page), url(page.path)],
      ),
      ...faqLabel(page),
    ],
  })),
];

SITE_PAGES.push({
  path: "glossary",
  title: title("Counseling Glossary"),
  description:
    "Plain-language meanings of common counseling words, each with its Arabic term, from anxiety and burnout to informed consent and telehealth.",
  graph: [
    {
      "@type": "DefinedTermSet",
      "@id": `${url("glossary")}#terms`,
      name: "Counseling glossary in English and Arabic",
      url: url("glossary"),
      hasDefinedTerm: GLOSSARY.map(({ term, arabic, definition }) => ({
        "@type": "DefinedTerm",
        name: term,
        alternateName: arabic,
        description: definition,
      })),
    },
    breadcrumbs(
      ["Home", "https://www.sarahateia.com/"],
      ["Resources", url("resources")],
      ["Glossary", url("glossary")],
    ),
  ],
});

export const PUBLISHED_LABEL = "November 2026";

/** The month and year an article went live, for the byline under it. */
export const publishedLabel = (page: ContentPage) =>
  page.published
    ? new Date(`${page.published}T12:00:00Z`).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      })
    : PUBLISHED_LABEL;
