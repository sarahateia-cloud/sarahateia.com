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
};

const LINK = {
  arabic: { label: "Counseling in Arabic", href: "/arabic-counseling/" },
  outdoor: { label: "Walk and talk therapy in Dallas–Fort Worth", href: "/outdoor-counseling/" },
  telehealth: {
    label: "Telehealth counseling anywhere in Texas",
    href: "/telehealth-counseling-texas/",
  },
  youngAdult: { label: "Counseling for young adults", href: "/young-adult-counseling/" },
  anxiety: { label: "Anxiety therapy in Dallas–Fort Worth", href: "/anxiety-therapy-dallas/" },
  depression: {
    label: "Depression counseling in Dallas–Fort Worth",
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
  screening: { label: "Optional screening tools", href: "/screening-tools/" },
  affordable: { label: "Affordable therapy in Dallas", href: "/affordable-therapy-dallas/" },
  irving: { label: "Counseling in Irving, TX", href: "/counseling-irving-tx/" },
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
  glossary: { label: "Counseling glossary in English and Arabic", href: "/glossary/" },
  crisis: { label: "Crisis resources in Dallas–Fort Worth", href: "/crisis/" },
};

// Titles stay under 60 characters: keyword first, then this ending.
const title = (keyword: string) => `${keyword} | Sarah Ateia, LPC Associate`;
const PUBLISHED = "2026-11-05";

export const TOPICS: ContentPage[] = [
  {
    path: "arabic-counseling",
    // Sarah will provide the Arabic intro text. It stays hidden until this is filled in.
    arabicIntro: "",
    related: [LINK.culture, LINK.glossary, LINK.telehealth, LINK.irving, LINK.consultation],
    title: "Arabic-Speaking Counselor in Dallas, TX",
    description:
      "Arabic-speaking therapist in Dallas, TX, and Arabic counselor online across Texas. Sessions in Arabic, English, or both, with room for culture and family.",
    eyebrow: "Counseling in Arabic",
    heading: "Arabic-speaking counselor in Dallas, TX.",
    intro:
      "I’m an Arabic-speaking counselor based in Irving, Texas. I offer sessions in Arabic, English, or a mix of both: walk and talk sessions outdoors in Dallas–Fort Worth, or online anywhere in Texas.",
    blocks: [
      {
        heading: "Why language can matter in counseling",
        paragraphs: [
          "For some people, certain feelings are easier to name in the language they grew up with. For others, a second language can feel easier. You can tell me which language you prefer.",
          "I grew up in a multicultural environment, and it shaped how I connect with people. I won’t assume I already know your story. I stay curious about your culture, family, and language, and I welcome being corrected when I get something wrong.",
        ],
      },
      {
        heading: "Moving between Arabic and English",
        paragraphs: [
          "Many bilingual people switch languages mid-sentence, especially when something feels close to the heart. That’s welcome here. You don’t need to translate yourself or choose one language for the whole session.",
        ],
      },
      {
        heading: "Culture, family, and expectations",
        paragraphs: [
          "Family roles, a parent’s hopes, living between two cultures, or carrying expectations from back home can shape how stress and sadness show up. We can talk about those things in your own words, without having to explain the basics first. You decide how much of your culture and family belongs in the conversation.",
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
          "[Walk and talk sessions](/outdoor-counseling/), usually at Sam Houston Trail Park in Irving",
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
        a: "Yes. Sessions are available in Arabic or English, outdoors around Dallas–Fort Worth or by telehealth for clients located in Texas at the time of each session.",
      },
      {
        q: "Is it okay to mix Arabic and English?",
        a: "Yes. Many people move between both languages in the same session, and that’s completely fine.",
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
    related: [LINK.walkTalk, LINK.outdoorFit, LINK.anxiety, LINK.telehealth],
    title: "Walk and Talk Therapy in Dallas",
    description:
      "Walk and talk therapy for Dallas and outdoor therapy in Irving, TX, usually at Sam Houston Trail Park. How sessions, privacy, and weather work.",
    eyebrow: "Walk and talk therapy",
    heading: "Walk and talk therapy in Dallas.",
    intro:
      "Walk and talk therapy is counseling outdoors instead of in an office. We walk side by side at an easy pace, or sit if that feels better. All my in-person sessions happen this way, usually at Sam Houston Trail Park in Irving, or another quiet park we choose together.",
    blocks: [
      {
        heading: "What does a walk and talk session look like?",
        list: [
          "We meet at Sam Houston Trail Park in Irving, or another quiet park that’s easy for you to reach",
          "We walk at an easy pace or settle on a bench or blanket",
          "You set the pace, and we can stop anytime",
          "Sessions are available in English or Arabic",
        ],
      },
      {
        heading: "Outdoor therapy in Irving, TX",
        paragraphs: [
          "Irving is my home base, so most outdoor sessions happen at Sam Houston Trail Park there. It’s a practical meeting point for people in [Irving](/counseling-irving-tx/), [Las Colinas](/counseling-las-colinas-tx/), [Coppell](/counseling-coppell-tx/), [Grand Prairie](/counseling-grand-prairie-tx/), [Farmers Branch](/counseling-farmers-branch-tx/), and [Dallas](/counseling-dallas-tx/). If another quiet park suits you better, we can choose one together.",
        ],
      },
      {
        heading: "Why do some people prefer walk and talk therapy?",
        paragraphs: [
          "Talking side by side can feel less intense than sitting face to face, and some people find the words come more easily while they’re moving. Research links regular physical activity ([Singh et al., 2023](https://doi.org/10.1136/bjsports-2022-106195)) and time in nature ([Hunter et al., 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6458297/)) with lower stress and better mood. Studies on walk and talk therapy itself are still small, so think of it as a different setting for counseling rather than a different treatment.",
        ],
      },
      {
        heading: "Who is walk and talk therapy for?",
        paragraphs: [
          "Walk and talk sessions are open to adults across Dallas–Fort Worth, including Irving, Las Colinas, Dallas, Fort Worth, Arlington, Grand Prairie, Carrollton, Coppell, and Plano. You don’t need to be fit or sporty. The pace is gentle, and we can sit the whole time.",
        ],
      },
      {
        heading: "Is walk and talk therapy private?",
        paragraphs: [
          "Parks are public, so complete privacy can’t be guaranteed. We pick quieter spots and can pause or move whenever someone’s nearby. You can also switch to online therapy at any time.",
        ],
      },
      {
        heading: "What if the weather is bad?",
        paragraphs: [
          "Texas heat and storms happen. If it’s too hot, cold, or stormy to meet comfortably outside, we move that session online.",
        ],
      },
      {
        heading: "When might online therapy be a better fit?",
        paragraphs: [
          "Walk and talk sessions aren’t for everyone. If being in a public place would make it hard to talk openly, or if getting to a park is difficult, online therapy may be the better choice. We can talk it through during your free consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is walk and talk therapy?",
        a: "It’s counseling while walking side by side outdoors, instead of sitting across from each other in an office. If walking isn’t comfortable, we sit on a bench or blanket instead. It’s the same counseling, just outside.",
      },
      {
        q: "Where do in-person sessions take place?",
        a: "Outdoors, usually at Sam Houston Trail Park in Irving, or another quiet park we choose together. I don’t see clients in an office.",
      },
      {
        q: "Do I need to be in good shape?",
        a: "No. We walk at whatever pace feels comfortable, and we can sit for the whole session if you’d like.",
      },
      {
        q: "Is there a consent form for outdoor sessions?",
        a: "Yes. Before your first outdoor session, you’ll review and sign a short consent form that covers privacy, weather, and safety. I’ll walk you through it when we get started.",
      },
      {
        q: "Do sessions get canceled for weather?",
        a: "No. We move that session online instead.",
      },
      {
        q: "How much does an outdoor session cost?",
        a: "The standard fee is $100 per session, and reduced rates are available based on household income. I don’t bill insurance.",
      },
    ],
  },
  {
    path: "telehealth-counseling-texas",
    related: [LINK.youngAdult, LINK.anxiety, LINK.depression, LINK.cost, LINK.consultation],
    title: title("Telehealth Counseling in Texas"),
    description:
      "Online therapy by video for anyone in Texas, from Houston to El Paso: how it works, privacy, and fees. Self-pay, sliding scale, free 15-minute call.",
    eyebrow: "Online therapy",
    heading: "Telehealth counseling anywhere in Texas.",
    intro:
      "I offer telehealth counseling by video to anyone who is physically located in Texas during each session, whether you’re in Dallas–Fort Worth, Houston, Austin, San Antonio, the Rio Grande Valley, or El Paso. Sessions are available in English or Arabic.",
    blocks: [
      {
        heading: "Who can use online therapy?",
        paragraphs: [
          "You need to be in Texas during every session, because that’s where I’m licensed. If you’ll be traveling outside the state, tell me ahead of time so we can plan around it. If you live outside Texas, I’m glad to help point you toward other options.",
        ],
      },
      {
        heading: "What can we work on online?",
        list: [
          "[Anxiety, stress, and overthinking](/anxiety-therapy-dallas/)",
          "[Depression and low mood](/depression-counseling-dallas/)",
          "[Adult ADHD, focus, and keeping up with daily life](/adhd-therapy/)",
          "[Young adult transitions, like school, work, and moving out](/young-adult-counseling/)",
          "Burnout, relationship patterns, and self-esteem",
        ],
      },
      {
        heading: "How do online sessions work?",
        paragraphs: [
          "Sessions happen by video at a time we set together. Many people find video sessions easier to keep up week to week, because there’s no commute. If video ever feels like it isn’t working for you, we talk about it and adjust.",
          "Before we begin, we agree on where you’ll usually be and an emergency contact, in case the connection drops or you need urgent help.",
        ],
      },
      {
        heading: "Time zones across Texas",
        paragraphs: [
          "Most of Texas is on Central Time, but El Paso and Hudspeth counties are on Mountain Time. If you’re in far West Texas, I confirm every session time in your local time.",
        ],
      },
      {
        heading: "How do I get ready for an online session?",
        list: [
          "Find a private place where you’re unlikely to be interrupted",
          "Use headphones if others are nearby",
          "Keep your location and a way to reach you handy, in case we get disconnected",
        ],
      },
      {
        heading: "How much does online therapy cost?",
        paragraphs: [
          "The standard fee is $100 per session, and reduced rates are available based on household income. My practice is self-pay only, and I don’t bill insurance. You have the right to receive a Good Faith Estimate of expected charges before services begin.",
        ],
      },
      {
        heading: "Prefer to meet in person?",
        paragraphs: [
          "If you live near Irving, you can also [meet outdoors for walk and talk therapy](/outdoor-counseling/), usually at Sam Houston Trail Park. See [counseling in Irving](/counseling-irving-tx/) or [counseling in Dallas](/counseling-dallas-tx/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you offer online therapy?",
        a: "Yes. Online therapy by video is available to clients who are located in Texas at the time of each session.",
      },
      {
        q: "Can I have a session while I’m out of state?",
        a: "No. You need to be physically located in Texas at the time of each session. Tell me ahead of time if you’ll be away so we can reschedule.",
      },
      {
        q: "Can I do both walk and talk and online sessions?",
        a: "Yes. A walk and talk session can move online when the weather is bad or when you’d simply prefer it.",
      },
      {
        q: "Are online sessions available in Arabic?",
        a: "Yes. Sessions are available in Arabic or English.",
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
    ],
    title: "Therapy for Young Adults in Dallas",
    description:
      "Therapy for young adults in Dallas facing anxiety, low mood, ADHD, and big life changes. Walk and talk in DFW or online anywhere in Texas.",
    eyebrow: "Young adults",
    heading: "Therapy for young adults in Dallas.",
    intro:
      "Your late teens and twenties can bring a lot at once: leaving home, school or a first job, relationships, money, and figuring out who you are apart from what others expect. I offer counseling for young adults in Dallas–Fort Worth and online anywhere in Texas, with room to slow down and make sense of it all.",
    blocks: [
      {
        heading: "What do young adults come to counseling for?",
        list: [
          "Anxiety, stress, and overthinking",
          "Low mood or feeling stuck",
          "ADHD and trouble keeping up with school, work, or daily tasks",
          "Big transitions like college, graduating, moving, or starting a career",
          "Identity, self-esteem, and figuring out what you want",
          "Relationship patterns with partners, friends, and family",
          "Burnout and pressure to have everything figured out",
        ],
      },
      {
        heading: "What does counseling for young adults look like?",
        paragraphs: [
          "My approach is person-centered, which means you lead and I listen closely, without judgment. I also draw on solution-focused therapy, which looks at what’s already working and the small next steps that feel doable, and on Jungian ideas that help you explore the deeper patterns that show up in your choices and relationships.",
          "I take a holistic view. Sleep, movement, stress, and the people around you all affect how you feel, so we look at the whole picture, not just the hard parts. Counseling with me is talk therapy, and I don’t prescribe medication. If a medical or psychiatric evaluation would help, I can point you toward one.",
        ],
      },
      {
        heading: "How do sessions work?",
        list: [
          "Walk and talk sessions outdoors, usually at Sam Houston Trail Park in Irving, or another quiet park we choose together",
          "Online therapy from anywhere in Texas, including your dorm or apartment",
          "Self-pay, with a sliding scale available",
          "A free 15-minute phone call to see if we’re a good fit",
        ],
      },
    ],
    faqs: [
      {
        q: "What age counts as a young adult?",
        a: "There’s no strict cutoff. Young adult counseling usually means people somewhere between 18 and 30.",
      },
      {
        q: "Do I need my parents’ permission to start counseling?",
        a: "If you’re 18 or older, no. You can start counseling on your own, and what you share is confidential within the limits of the law. We go over those limits before we begin.",
      },
      {
        q: "Can I do sessions from my dorm or apartment?",
        a: "Yes, as long as you’re located in Texas at the time of the session and have a private space where you won’t be overheard.",
      },
      {
        q: "Do you take insurance?",
        a: "No. I’m self-pay only, with a sliding scale available. Ask about it during your free consultation.",
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
    ],
    title: "Anxiety Therapist in Dallas, TX",
    description:
      "Anxiety therapist in Dallas, TX offering talk therapy for worry and stress. Walk and talk sessions in DFW or online across Texas. Sliding scale available.",
    eyebrow: "Anxiety therapy",
    heading: "Anxiety therapist in Dallas, TX.",
    intro:
      "Anxiety can look like constant worry, a racing mind at night, a tight chest before work, or avoiding things you used to handle fine. I work with people in Dallas, Fort Worth, and across Texas to understand what’s driving their anxiety and build steadier ways to cope.",
    blocks: [
      {
        heading: "What does anxiety feel like?",
        paragraphs: [
          "Anxiety is your body’s alarm system staying switched on after the danger has passed. It often shows up as:",
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
        heading: "What does anxiety therapy in Dallas look like?",
        paragraphs: [
          "We start by getting curious about your anxiety: when it shows up, what it might be trying to protect you from, and what tends to make it better or worse. Then we practice ways to turn the alarm down, like slowing your breathing, noticing anxious thoughts without getting pulled under, and grounding yourself in what’s around you.",
          "Avoidance keeps anxiety going, so we also take small, planned steps toward the things you’ve been avoiding, at a pace you choose. Over time, many people find their body learns those situations aren’t as dangerous as they felt.",
        ],
      },
      {
        heading: "Why the body matters for anxiety",
        paragraphs: [
          "Anxiety lives in the body as much as the mind. Sleep, caffeine, movement, and stress all change how loud the alarm gets, so we look at those too. Some people find that moving while they talk calms the body enough to think clearly, which is one reason I offer walk and talk sessions.",
        ],
      },
      {
        heading: "Anxiety, depression, or both?",
        paragraphs: [
          "Anxiety and low mood often travel together. If heaviness, exhaustion, or losing interest in things is the bigger struggle for you, read about [depression counseling](/depression-counseling-dallas/). We can work on both at once.",
        ],
      },
      {
        heading: "Where do sessions happen?",
        list: [
          "Walk and talk sessions outdoors, usually at Sam Houston Trail Park in Irving, or another quiet park we choose together",
          "Online therapy from anywhere in Texas, if a calm room at home feels safer",
          "In person for people in Irving, Las Colinas, Dallas, Coppell, Grand Prairie, and Farmers Branch",
        ],
      },
    ],
    faqs: [
      {
        q: "Can talk therapy help with anxiety?",
        a: "Talk therapy is one of the most widely recommended treatments for anxiety. Some people also benefit from medication, which a doctor or psychiatrist can talk through with you. I don’t prescribe medication.",
      },
      {
        q: "How long does anxiety therapy take?",
        a: "It depends on what you’re working on. Some people come for a few months to build skills, others for longer. We check in regularly about how it’s going and what you want next.",
      },
      {
        q: "Can I try a screening questionnaire first?",
        a: "Yes. The GAD-7 is a free, widely used anxiety questionnaire you can find on our screening tools page. It isn’t a diagnosis, and we can look at your results together.",
      },
      {
        q: "Do you offer a sliding scale?",
        a: "Yes. I’m self-pay only, and a sliding scale is available based on household income.",
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
    ],
    title: "Depression Counseling in Dallas, TX",
    description:
      "Depression counseling in Dallas, TX for low mood and exhaustion. Walk and talk sessions in DFW or online across Texas. Sliding scale, free 15-minute call.",
    eyebrow: "Depression counseling",
    heading: "Depression counseling in Dallas, TX.",
    intro:
      "Depression isn’t only sadness. It can feel like numbness, exhaustion, losing interest in things you used to enjoy, or a heaviness that makes ordinary days hard. I offer depression counseling in Dallas–Fort Worth and online across Texas, at a pace that feels manageable.",
    blocks: [
      {
        heading: "What are common signs of depression?",
        paragraphs: [
          "Where anxiety feels like too much, depression often feels like too little: too little energy, interest, or hope. If several of the signs below have lasted two weeks or more, it’s worth talking to someone. A counselor or your doctor is a good place to start.",
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
        heading: "What does depression counseling look like?",
        paragraphs: [
          "Counseling gives you a steady place to talk about what’s weighing on you without having to hold it all together. I listen first, without rushing you toward feeling better.",
          "Depression tends to shrink life down: you do less, which drains your mood further. So alongside talking, we bring back small, doable activities that matter to you, one at a time, and notice how your mood responds. We also make room for self-compassion, because the inner critic is usually loud during depression.",
        ],
      },
      {
        heading: "How rhythm and movement help",
        paragraphs: [
          "Regular sleep, daylight, gentle movement, and time with people you trust can all support mood. We look at your daily rhythm together and adjust what’s realistic. Walk and talk sessions build a little movement and daylight into the hour itself.",
        ],
      },
      {
        heading: "Depression, anxiety, or both?",
        paragraphs: [
          "Low mood often comes with worry. If racing thoughts, tension, or avoidance is the bigger struggle, read about [anxiety therapy](/anxiety-therapy-dallas/). We can work on both together.",
        ],
      },
      {
        heading: "Where do sessions happen?",
        list: [
          "Online therapy from anywhere in Texas, for days when leaving home feels like too much",
          "Gentle walk and talk sessions with some daylight built in, usually at Sam Houston Trail Park in Irving or another park we pick together",
          "Outdoor sessions for people living in or near Irving, Las Colinas, Dallas, Coppell, Grand Prairie, or Farmers Branch",
        ],
      },
      {
        heading: "What if I need help right away?",
        paragraphs: [
          "If you’re thinking about suicide or harming yourself, call or text 988, call 911, or go to the nearest emergency room. Counseling isn’t a crisis service. You can also [find 24/7 crisis lines in Dallas–Fort Worth](/crisis/).",
        ],
      },
    ],
    faqs: [
      {
        q: "What’s the difference between sadness and depression?",
        a: "Sadness usually eases with time. Depression tends to last longer, affects sleep, energy, and interest in life, and gets in the way of daily functioning. You don’t need a diagnosis to start counseling.",
      },
      {
        q: "Should I see a counselor or a psychiatrist?",
        a: "Many people see both. A psychiatrist or doctor can talk with you about medication. Counseling focuses on talking things through and building skills. I don’t prescribe medication, and with your permission I can coordinate with your doctor.",
      },
      {
        q: "Can I try a screening questionnaire first?",
        a: "Yes. The PHQ-9 is a free, widely used depression questionnaire you can find on our screening tools page. It isn’t a diagnosis, and we can go over your results together.",
      },
      {
        q: "Do you offer a sliding scale?",
        a: "Yes. Fees can be reduced based on household income, and I’m self-pay only, so nothing is billed to insurance.",
      },
    ],
  },
  {
    path: "adhd-therapy",
    related: [LINK.adhdDiagnose, LINK.adhd, LINK.youngAdult, LINK.screening],
    title: "Adult ADHD Counseling in Dallas, TX",
    description:
      "Adult ADHD counseling in Dallas, TX for focus, routines, work, and the stress ADHD brings. Talk therapy, walk and talk in DFW or online across Texas.",
    eyebrow: "Adult ADHD counseling",
    heading: "Adult ADHD counseling in Dallas, TX.",
    intro:
      "Adult ADHD counseling helps with the everyday side of ADHD: time, focus, follow-through, and the frustration and self-doubt that often build up over years of feeling behind. Many adults only start to wonder about ADHD in college, at work, or after a child is diagnosed. I offer talk therapy for adults and young adults with ADHD or suspected ADHD, through walk and talk sessions in Dallas–Fort Worth or online anywhere in Texas.",
    blocks: [
      {
        heading: "What can adult ADHD counseling help with?",
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
        heading: "What does adult ADHD counseling look like with me?",
        paragraphs: [
          "We start with how ADHD shows up in your life, not a checklist. From there we build practical systems that fit how your brain works, like breaking tasks into first steps, using reminders and visual cues, and planning around your energy. Solution-focused work helps us notice what already works so you can do more of it.",
          "I also take a holistic view. Sleep, movement, and stress all affect focus, and some people find it easier to think while walking, which is one reason I offer walk and talk sessions.",
        ],
      },
      {
        heading: "Do you diagnose ADHD or prescribe medication?",
        paragraphs: [
          "No. I don’t do ADHD evaluations or prescribe medication. If you’re looking for an evaluation, a psychologist, psychiatrist, or your doctor can help, and we can talk through where to start. If you take ADHD medication, therapy can work alongside it, and with your permission I can coordinate with your prescriber.",
        ],
      },
      {
        heading: "Where do sessions happen?",
        list: [
          "Walk and talk sessions outdoors, usually at Sam Houston Trail Park in Irving, or another quiet park we choose together",
          "Online therapy from anywhere in Texas",
          "Within driving distance of Dallas, Fort Worth, Arlington, Plano, Carrollton, Grand Prairie, and Coppell",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need an ADHD diagnosis to start therapy?",
        a: "No. You can start whether you have a diagnosis, suspect ADHD, or are waiting for an evaluation.",
      },
      {
        q: "Is there a free ADHD screening questionnaire?",
        a: "Yes. The ASRS v1.1 is a free adult ADHD screening questionnaire, linked on our screening tools page. It isn’t a diagnosis, and we can look at your results together.",
      },
      {
        q: "Can ADHD therapy be done online?",
        a: "Yes. Online sessions are available anywhere in Texas. Some people with ADHD prefer walk and talk sessions because they find moving helps them focus.",
      },
      {
        q: "Do you offer a sliding scale?",
        a: "Yes. I’m self-pay only, and a sliding scale is available based on household income.",
      },
    ],
  },
  {
    path: "holistic-counseling",
    related: [LINK.holistic, LINK.walkTalk, LINK.anxiety, LINK.depression, LINK.outdoor],
    title: "Holistic Counseling in Dallas",
    description:
      "Holistic counseling in Dallas that looks at mind and body together: stress, sleep, movement, and meaning. Walk and talk or online across Texas.",
    eyebrow: "Holistic counseling",
    heading: "Holistic counseling in Dallas.",
    intro:
      "Holistic counseling is talk therapy that looks at the whole person. Alongside your thoughts and feelings, we pay attention to your body, sleep, stress, relationships, and what gives your life meaning. I offer holistic counseling through walk and talk sessions in Dallas–Fort Worth and online anywhere in Texas.",
    blocks: [
      {
        heading: "What does holistic counseling include?",
        list: [
          "Talking through what’s going on, at your pace",
          "Noticing where stress shows up in your body",
          "Breathing and grounding skills to help calm your nervous system",
          "Looking at sleep, movement, and daily rhythms",
          "Time outdoors through walk and talk sessions",
          "Exploring values, meaning, culture, and faith, if they matter to you",
          "Learning how things like genetics, sleep, and stress can affect mood, as education only, not testing or diagnosis",
        ],
      },
      {
        heading: "How is holistic counseling different from regular therapy?",
        paragraphs: [
          "It’s still talk therapy, with the same training, ethics, and confidentiality. The difference is focus: instead of looking at one symptom on its own, we look at how mind, body, and life fit together. My approach draws on person-centered, solution-focused, and Jungian ideas, along with research on movement, sleep, and time in nature.",
        ],
      },
      {
        heading: "What isn’t holistic counseling?",
        paragraphs: [
          "It isn’t medical treatment. I don’t prescribe medication, recommend supplements, or tell anyone to stop a treatment their doctor prescribed. If something medical might be going on, I’ll encourage you to check with your doctor.",
        ],
      },
      {
        heading: "Who is holistic counseling for?",
        paragraphs: [
          "People dealing with anxiety, stress, low mood, burnout, or ADHD who want care that considers the whole picture. Walk and talk sessions are open to people across Dallas, Fort Worth, Irving, Arlington, Plano, Carrollton, Grand Prairie, and Coppell, and online sessions are available anywhere in Texas.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is holistic counseling evidence-based?",
        a: "Parts of it are well supported, like movement for depression and anxiety, mindfulness-based approaches, and better sleep. I’m open about what each approach I use is based on.",
      },
      {
        q: "Do I have to be spiritual?",
        a: "No. Faith and meaning are part of the conversation only if you want them to be.",
      },
      {
        q: "Can holistic counseling be done online?",
        a: "Yes. Online sessions are available anywhere in Texas, and we can still work on breathing, grounding, and routines.",
      },
      {
        q: "Do you offer a sliding scale?",
        a: "Yes. I’m self-pay only, and a sliding scale is available based on household income.",
      },
    ],
  },
  {
    path: "affordable-therapy-dallas",
    related: [LINK.cost, LINK.slidingScale, LINK.telehealth, LINK.dallas],
    title: title("Affordable Therapy in Dallas"),
    description:
      "Affordable therapy in Dallas without insurance: $100 self-pay sessions, a sliding scale, and 6 or 8-session packages. No diagnosis sent to an insurer.",
    eyebrow: "Self-pay therapy",
    heading: "Affordable therapy in Dallas without insurance.",
    intro:
      "I’m a self-pay therapist serving Dallas, Irving, and the rest of Texas online. Sessions are $100, a sliding scale is available for people who need it, and packages lower the price of each session. Here’s how paying for therapy without insurance works with me.",
    blocks: [
      {
        heading: "What does therapy cost without insurance?",
        list: [
          "$100 per session, online or as a walk and talk session",
          "A sliding scale based on household income. Ask about it during your free call; there’s no need to explain your circumstances.",
          "6 sessions for $540 ($90 each), paid upfront",
          "8 sessions for $640 ($80 each), paid upfront",
          "A free 15-minute phone consultation before you commit to anything",
        ],
      },
      {
        heading: "How do the packages work?",
        paragraphs: [
          "Packages are optional. If you decide not to continue, any sessions you haven’t used are refunded at the package rate. For example, if you’ve used 3 sessions of an 8-session package, you’re refunded $400 (5 × $80).",
        ],
      },
      {
        heading: "Why some people choose self-pay therapy",
        paragraphs: [
          "When therapy is billed to insurance, the insurer usually needs a diagnosis code before it will pay. When you pay for yourself, nothing is sent to an insurance company, so no diagnosis goes on an insurance claim. You and I also decide together how often to meet, without needing an insurer’s approval.",
          "The trade-off is cost, which is why the sliding scale and packages exist. You also have the right to a written Good Faith Estimate of expected charges before we begin.",
        ],
      },
      {
        heading: "Ways to make therapy more affordable",
        list: [
          "Check whether your HSA or FSA can be used for counseling. Your plan administrator can confirm.",
          "Ask whether your employer offers an Employee Assistance Program with a few free sessions",
          "Choose online sessions to save on travel time and gas",
          "Read [how much therapy costs without insurance in Texas](/resources/therapy-cost-without-insurance/) and [how sliding scale therapy works](/resources/what-is-sliding-scale-therapy/)",
        ],
      },
      {
        heading: "Where sessions happen",
        paragraphs: [
          "Walk and talk sessions usually happen at Sam Houston Trail Park in Irving, for people in [Dallas](/counseling-dallas-tx/), [Irving](/counseling-irving-tx/), and nearby cities. [Online sessions](/telehealth-counseling-texas/) are available anywhere in Texas. The fee is the same either way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you take insurance?",
        a: "No. I’m self-pay only, so nothing is billed to insurance.",
      },
      {
        q: "How low does the sliding scale go?",
        a: "It depends on household income. Ask during your free 15-minute call, and we’ll agree on a fee before your first session.",
      },
      {
        q: "Can I use my HSA or FSA?",
        a: "Often, yes, when counseling is for your mental health. Rules vary by plan, so check with your plan administrator first.",
      },
      {
        q: "Is self-pay therapy private?",
        a: "Counseling is confidential within the limits of the law, whichever way you pay. Paying privately also means no insurance company receives a claim or diagnosis.",
      },
    ],
  },
];

export const CITY_PAGES: ContentPage[] = [
  {
    path: "counseling-irving-tx",
    city: "Irving",
    related: [LINK.outdoor, LINK.anxiety, LINK.arabic, LINK.telehealth],
    title: title("Counseling in Irving, TX"),
    description:
      "Counseling in Irving, TX with walk and talk sessions at Sam Houston Trail Park or online. English or Arabic. Self-pay, sliding scale, free 15-minute call.",
    eyebrow: "Irving, TX",
    heading: "Counseling in Irving, TX.",
    intro:
      "Irving is my home base. I offer counseling for people in Irving through walk and talk sessions outdoors, usually at Sam Houston Trail Park, or online from wherever you feel most comfortable in Texas. There’s no office and no waiting room, just a conversation at a pace that suits you.",
    blocks: [
      {
        heading: "How do sessions work in Irving?",
        paragraphs: [
          "Because I’m based in Irving, in-person sessions here are the simplest to arrange. Most happen at Sam Houston Trail Park, where we can walk at an easy pace or find a quiet spot to sit. If a different park in Irving is easier for you, we can talk about it during your free call.",
          "Whether you live in North Irving, South Irving, Valley Ranch, or near the Las Colinas offices, you can switch between outdoor and online sessions from week to week.",
        ],
      },
      {
        heading: "Why walk and talk close to home?",
        paragraphs: [
          "Meeting outdoors near home means less time in traffic and more time for the session itself. Walking side by side can also make hard topics a little easier to say out loud. If a park feels too public on a given day, we meet online instead.",
        ],
      },
      {
        heading: "What can we work on?",
        list: [
          "[Anxiety and stress](/anxiety-therapy-dallas/)",
          "[Depression and low mood](/depression-counseling-dallas/)",
          "[Adult ADHD](/adhd-therapy/)",
          "[Young adult transitions](/young-adult-counseling/)",
          "Burnout, relationship patterns, and self-esteem",
        ],
      },
      {
        heading: "Fees and getting started",
        paragraphs: [
          "Sessions are $100, with packages and a sliding scale for people who need it. I’m self-pay only, so nothing goes through insurance. Start with a free 15-minute phone call, and we’ll see whether we’re a good fit.",
        ],
      },
    ],
    faqs: [
      {
        q: "Where do in-person sessions in Irving take place?",
        a: "Usually at Sam Houston Trail Park in Irving. If another quiet park is easier for you, we can choose one together. I don’t see clients in an office.",
      },
      {
        q: "Are sessions available in Arabic in Irving?",
        a: "Yes. Sessions are available in English or Arabic, outdoors or online.",
      },
      {
        q: "What happens if it rains?",
        a: "We move that session online, so the appointment still happens.",
      },
      {
        q: "Do I need to live in Irving?",
        a: "No. Anyone located in Texas can meet online, and people from nearby cities can meet outdoors in Irving too.",
      },
    ],
  },
  {
    path: "counseling-las-colinas-tx",
    city: "Las Colinas",
    related: [LINK.depression, LINK.holisticCounseling, LINK.telehealth, LINK.outdoor],
    title: title("Counseling in Las Colinas, TX"),
    description:
      "Counseling in Las Colinas, TX that fits a busy work week: online sessions or walk and talk in Irving. Help with burnout, anxiety, and stress. Self-pay.",
    eyebrow: "Las Colinas, TX",
    heading: "Counseling in Las Colinas, TX.",
    intro:
      "If you live or work in Las Colinas, counseling can fit around a full week. I offer online sessions you can join from home or another private space anywhere in Texas, and walk and talk sessions close by in Irving.",
    blocks: [
      {
        heading: "Counseling that fits a Las Colinas schedule",
        paragraphs: [
          "Las Colinas is home to many corporate offices, and long workdays can leave little room for anything else. Online sessions cut out travel completely, as long as you have a private room where you won’t be overheard. Please don’t join from an open office or a shared conference room.",
          "When you’d rather step away from screens, walk and talk sessions happen nearby, usually at Sam Houston Trail Park in Irving.",
        ],
      },
      {
        heading: "Burnout and work stress",
        paragraphs: [
          "Work pressure is a common reason people look for support. Counseling can help you notice how stress shows up in your body, set limits that protect your evenings, and sort out whether what you’re feeling is burnout, anxiety, low mood, or a mix. You don’t need everything to fall apart before reaching out.",
        ],
      },
      {
        heading: "Other things we can work on",
        list: [
          "[Anxiety and overthinking](/anxiety-therapy-dallas/)",
          "[Low mood and exhaustion](/depression-counseling-dallas/)",
          "[ADHD and keeping up with demands at work](/adhd-therapy/)",
          "[A whole-person, mind-body approach](/holistic-counseling/)",
        ],
      },
      {
        heading: "What does it cost?",
        paragraphs: [
          "I’m self-pay, so neither your employer nor your insurer is involved. Sessions are $100, with packages and a sliding scale available. If your employer offers an Employee Assistance Program, it may also cover a few free sessions with one of its own providers.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I join an online session from my office?",
        a: "Only from a private room where no one can overhear you. Home is usually more private. A parked car can work too, but never while driving.",
      },
      {
        q: "Will my employer know I’m in counseling?",
        a: "Not from me. I’m self-pay and don’t bill insurance, and counseling is confidential within the limits of the law. If you use your employer’s EAP instead, ask the program how it handles privacy.",
      },
      {
        q: "Where would we meet in person?",
        a: "Usually at Sam Houston Trail Park in Irving, or another quiet park we choose together.",
      },
    ],
  },
  {
    path: "counseling-dallas-tx",
    city: "Dallas",
    related: [LINK.anxiety, LINK.depression, LINK.telehealth, LINK.cost],
    title: title("Counseling in Dallas, TX"),
    description:
      "Counseling in Dallas, TX without the cross-town drive: online sessions or walk and talk just west in Irving. Self-pay, sliding scale, free 15-minute call.",
    eyebrow: "Dallas, TX",
    heading: "Counseling in Dallas, TX.",
    intro:
      "If you live in Dallas, you can start counseling without adding another drive across town. I offer online sessions anywhere in Texas and walk and talk sessions outdoors, usually at Sam Houston Trail Park in Irving, just west of Dallas.",
    blocks: [
      {
        heading: "Online counseling across Dallas",
        paragraphs: [
          "From Oak Cliff to Lake Highlands, online sessions let you talk from home in the time a session takes, with no traffic on either end. You’ll need a private space where you can speak freely and a steady connection.",
        ],
      },
      {
        heading: "Meeting outdoors instead",
        paragraphs: [
          "If you’d rather meet in person, walk and talk sessions happen outdoors, usually at Sam Houston Trail Park in Irving. Some people like ending the day with a walk and a conversation instead of another hour on a screen.",
        ],
      },
      {
        heading: "Finding the right fit in a big city",
        paragraphs: [
          "Dallas has many counselors, and fit matters. A free 15-minute phone call is a low-pressure way to ask about my approach, which is person-centered, solution-focused, and holistic, and to see whether it feels right. If it doesn’t, I’m glad to point you toward other options.",
        ],
      },
      {
        heading: "What I help with",
        list: [
          "[Anxiety, worry, and stress](/anxiety-therapy-dallas/)",
          "[Depression and low mood](/depression-counseling-dallas/)",
          "[Adult ADHD](/adhd-therapy/)",
          "[Young adults and life transitions](/young-adult-counseling/)",
          "[Holistic, mind-body counseling](/holistic-counseling/)",
        ],
      },
      {
        heading: "What does counseling cost in Dallas?",
        paragraphs: [
          "Sessions are $100, with packages and a sliding scale available. Because I’m self-pay, nothing is billed to insurance, so no insurance company needs a diagnosis for you to start. More on [affordable therapy in Dallas](/affordable-therapy-dallas/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you have an office in Dallas?",
        a: "No. I don’t see clients in an office. Sessions happen online or outdoors, usually at Sam Houston Trail Park in Irving.",
      },
      {
        q: "Can I see you if I live in another part of Texas?",
        a: "Yes, online, as long as you’re located in Texas during each session.",
      },
      {
        q: "Do you offer counseling in Arabic in Dallas?",
        a: "Yes. Sessions are available in Arabic or English, online or outdoors.",
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
      "For people in Coppell, I offer counseling online from anywhere in Texas and walk and talk sessions just south of Coppell in Irving. Sessions are available in English or Arabic.",
    blocks: [
      {
        heading: "How sessions work for Coppell residents",
        paragraphs: [
          "Online sessions let you talk from home without adding a drive to your day. You’ll need a private space and a reliable connection.",
          "If you’d like to meet in person, walk and talk sessions happen in neighboring Irving, usually at Sam Houston Trail Park. You can meet outdoors some weeks and online others, whatever works.",
        ],
      },
      {
        heading: "Making time for yourself",
        paragraphs: [
          "Between school schedules, commutes, and caring for others, it’s easy to put your own needs last. Counseling is a set hour that belongs to you. We can work on stress, low mood, anxiety, or the pressure to hold everything together.",
        ],
      },
      {
        heading: "Students and young adults in Coppell",
        paragraphs: [
          "If you’re finishing school, starting college, or living at home while figuring out what’s next, [counseling for young adults](/young-adult-counseling/) can help with the anxiety and identity questions that often come with that stage. If you’re 18 or older, you can start on your own.",
        ],
      },
      {
        heading: "What we can work on",
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
        a: "In-person sessions usually happen at Sam Houston Trail Park in neighboring Irving. Online sessions work from anywhere in Coppell, or anywhere in Texas.",
      },
      {
        q: "Can a parent call on behalf of a young adult?",
        a: "Yes, a parent can call to ask how counseling works. If your young adult is 18 or older, they choose whether to start and give consent themselves.",
      },
      {
        q: "How much does counseling cost?",
        a: "$100 per session, with packages and a sliding scale available. I’m self-pay only and don’t bill insurance.",
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
      "Grand Prairie sits between Dallas and Fort Worth and stretches across Dallas, Tarrant, and Ellis counties. Wherever you are in it, you can meet with me online from anywhere in Texas, or come up to Irving for a walk and talk session outdoors.",
    blocks: [
      {
        heading: "Online counseling across Grand Prairie",
        paragraphs: [
          "Because Grand Prairie covers a lot of ground, online sessions are often the simplest choice. All you need is a private space, a phone or computer, and to be in Texas during the session. We agree on a backup plan in case the connection drops.",
        ],
      },
      {
        heading: "Walk and talk in Irving",
        paragraphs: [
          "If you’d like to meet face to face, sessions happen in Irving, just north of Grand Prairie, usually at Sam Houston Trail Park. We walk at an easy pace or sit, and you set the pace.",
        ],
      },
      {
        heading: "What we can work on",
        paragraphs: ["People come to counseling for many reasons. Some I work with often:"],
        list: [
          "[Anxiety and constant worry](/anxiety-therapy-dallas/)",
          "[Low mood and depression](/depression-counseling-dallas/)",
          "[ADHD and focus](/adhd-therapy/)",
          "[Counseling in Arabic or English](/arabic-counseling/), with room for culture and family",
        ],
      },
      {
        heading: "Fees",
        paragraphs: [
          "Sessions are $100. If cost is a barrier, ask about the sliding scale during your free call. Packages of 6 or 8 sessions lower the price of each session.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does it matter which county I live in?",
        a: "No. What matters is being located in Texas during each session, whether you’re in the Dallas, Tarrant, or Ellis County part of Grand Prairie.",
      },
      {
        q: "Do you offer in-person sessions in Grand Prairie?",
        a: "In-person sessions happen outdoors in nearby Irving, usually at Sam Houston Trail Park. Online sessions are available anywhere in Grand Prairie.",
      },
      {
        q: "Is online counseling private?",
        a: "It can be. Choose a room where you won’t be overheard, use headphones, and close other apps. We go over privacy before your first session.",
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
      "If you live in Farmers Branch, you can choose between online sessions from home and walk and talk sessions outdoors in nearby Irving, usually at Sam Houston Trail Park. You can use both, depending on the week.",
    blocks: [
      {
        heading: "Two ways to meet",
        paragraphs: [
          "Online sessions are the easiest to fit around work and family: no drive and no parking, just a private space and a connection. Walk and talk sessions add movement and fresh air to the hour. You can switch between them as your weeks change.",
        ],
      },
      {
        heading: "When the pace of life catches up with you",
        paragraphs: [
          "Living close to some of the busiest parts of North Dallas can make it hard to slow down. Counseling gives you a regular pause to notice what you’re carrying, from worry and low mood to burnout and big life changes.",
        ],
      },
      {
        heading: "Language and culture",
        paragraphs: [
          "Sessions are available in English or Arabic, and your culture, family, and values are welcome in the conversation. Read more about [counseling in Arabic](/arabic-counseling/).",
        ],
      },
      {
        heading: "What I help with",
        list: [
          "[Worry and anxiety](/anxiety-therapy-dallas/)",
          "[Depression and low energy](/depression-counseling-dallas/)",
          "[Burnout and stress, with a mind-body approach](/holistic-counseling/)",
          "[Young adults finding their footing](/young-adult-counseling/)",
        ],
      },
      {
        heading: "Fees and first steps",
        paragraphs: [
          "Sessions are $100 each. If that’s a stretch, ask about reduced rates on your free 15-minute call; they’re based on household income, and you don’t have to explain your circumstances. Paying privately means no insurance paperwork and no diagnosis sent to an insurer. The first step is just a short phone call, with no commitment.",
        ],
      },
    ],
    faqs: [
      {
        q: "Where would we meet in person?",
        a: "Usually at Sam Houston Trail Park in Irving, or another quiet park we choose together. Online sessions are available too.",
      },
      {
        q: "Can I switch between outdoor and online sessions?",
        a: "Yes. You can mix them based on the weather and your schedule.",
      },
      {
        q: "Do you take insurance?",
        a: "No. I’m self-pay, with a sliding scale and session packages available.",
      },
    ],
  },
];

export const ARTICLES: ContentPage[] = [
  {
    path: "resources/free-counseling-consultation",
    related: [LINK.associate, LINK.outdoor, LINK.telehealth],
    title: title("Free Counseling Consultation"),
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
    related: [LINK.consultation, LINK.arabic, LINK.outdoor],
    title: title("What Is an LPC Associate?"),
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
    related: [LINK.outdoor, LINK.telehealth, LINK.consultation],
    title: title("Is Outdoor Counseling for You?"),
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
    related: [LINK.arabic, LINK.muslimFaith, LINK.consultation, LINK.telehealth],
    title: title("Culture & Language in Therapy"),
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
    title: title("Muslim Faith and Therapy"),
    description:
      "How to find a therapist who respects your Muslim faith and culture, what holistic, mind-body counseling looks like, and what research says about it.",
    eyebrow: "Choosing a counselor",
    heading: "How do I find a therapist who respects my Muslim faith?",
    intro:
      "Start with a short consultation and ask how the counselor approaches faith, culture, and the whole person, including the body. You don’t need a counselor who shares your religion, but you deserve one who respects your values, stays curious, and lets you decide how much faith comes into your sessions.",
    blocks: [
      {
        heading: "Look for respect, not a perfect match",
        paragraphs: [
          "Some people want a counselor who shares their faith or background. Others prefer someone outside their community. Both are okay. What matters most is whether you feel respected and heard, and whether the counselor asks instead of assuming.",
        ],
      },
      {
        heading: "Questions to ask in a consultation",
        list: [
          "How do you approach faith and culture? Will you follow my lead?",
          "Do you work with the body as well as thoughts and feelings?",
          "What do grounding or calming practices look like in your sessions?",
          "Can sessions be outdoors, by telehealth, or in Arabic?",
          "How do you handle confidentiality and its limits?",
        ],
      },
      {
        heading: "What holistic counseling means",
        paragraphs: [
          "Stress doesn’t only live in your thoughts. It can show up as a tight chest, shallow breathing, poor sleep, or feeling on edge. Holistic counseling looks at the whole picture: thoughts, emotions, the body, relationships, and the values and meaning that guide your life, including faith if it matters to you.",
          "In practice, that can include grounding approaches such as slow breathing, noticing what you see and hear around you, gentle movement, and time outdoors. These are tools to help your nervous system settle so it’s easier to think clearly and talk about what’s hard.",
          "A holistic approach can also reach into everyday struggles like ADHD-related stress, attachment and relationship patterns, healing after an abusive relationship, and self-care. You’ll find a guide on each at the end of this page.",
        ],
      },
      {
        heading: "What research says about mind and body",
        paragraphs: [
          "The National Institute of Mental Health lists regular exercise, steady sleep, and relaxing activities such as breathing exercises among the basic ways to care for mental health. The National Center for Complementary and Integrative Health studies mind and body practices like meditation, yoga, and relaxation techniques. Research on them is growing, and results vary from person to person.",
          "The American Psychological Association has also reported research linking time in nature with lower stress and better attention. That’s part of why some people like walking or sitting outside while they talk.",
        ],
      },
      {
        heading: "A note on biohacking",
        paragraphs: [
          "Biohacking trends like cold plunges, sleep trackers, wearables, and supplements get a lot of attention. Cold-water immersion is a good example of where the research stands. A 2025 systematic review in PLOS One found some studies linked it with lower stress in the hours afterward and with better sleep and quality of life, but the studies were small and mostly short-term. Cold water also carries real risks, especially for people with heart conditions, so talk with your doctor before trying it. The habits with the strongest research are often the simplest: sleep, movement, breathing, and connection. Counseling supports your well-being, but it doesn’t replace medical care.",
        ],
      },
      {
        heading: "Faith and counseling can sit side by side",
        paragraphs: [
          "Many people find counseling fits alongside prayer, family, and community. A counselor isn’t a religious authority, and counseling doesn’t replace religious guidance. For questions about religious practice, an imam or scholar you trust is the right person to ask.",
        ],
      },
      {
        heading: "How I work",
        paragraphs: [
          "I’m an LPC Associate based in Irving, supervised by Don Zablosky, LPC-S. I offer holistic, grounding counseling outdoors in Dallas–Fort Worth parks or by telehealth for clients located in Texas at the time of each session, in English or Arabic. I welcome clients of every faith or none.",
          "Sessions are $100, with packages and reduced rates available, and I’m self-pay only. A free 15-minute phone consultation is a good place to ask any of the questions above. Outdoor sessions happen in public parks, so complete privacy can’t be guaranteed, and telehealth is always an option.",
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
        a: "Yes. You can bring your faith into sessions as much or as little as you like. A good counselor follows your lead.",
      },
      {
        q: "Do you offer Islamic or religious counseling?",
        a: "No. I offer general counseling, not religious counseling, and I’m not a religious authority. I welcome clients of every faith or none, and I respect the role faith plays in your life.",
      },
      {
        q: "Is biohacking part of counseling?",
        a: "Not as such. Counseling can include research-informed habits like breathing practices, movement, and time outdoors, but it doesn’t include supplements or medical advice. Talk with your doctor about anything that affects your physical health.",
      },
    ],
  },
  {
    path: "resources/adhd-creative-strategies",
    published: "2026-11-18",
    related: [LINK.adhdTherapy, LINK.adhdDiagnose, LINK.adhdAnxiety, LINK.screening, LINK.selfCare],
    title: title("ADHD Strategies for Adults"),
    description:
      "Practical, creative ADHD strategies for adults: time, tasks, focus, and stress, and where the body and counseling fit in. Educational, not a diagnosis.",
    eyebrow: "ADHD",
    heading: "What are some creative strategies for adults with ADHD?",
    intro:
      "Many adults with ADHD find it helps to work with how their brain works, not against it: make time visible, shrink tasks into tiny first steps, add movement, and use interest and novelty to get started. These strategies don’t replace an evaluation or treatment, but they can make daily life feel more manageable.",
    blocks: [
      {
        heading: "What ADHD can look like in adults",
        paragraphs: [
          "The National Institute of Mental Health describes ADHD as an ongoing pattern of inattention, hyperactivity, or impulsivity that gets in the way of daily life. In adults, it can show up as trouble starting or finishing tasks, losing track of time, restlessness, forgetfulness, or feeling buried by details.",
          "Stress, anxiety, poor sleep, and low mood can cause some of the same struggles, so only a qualified professional can evaluate what’s going on. A free screening questionnaire like the ASRS v1.1 can give you something to bring to that conversation. It isn’t a diagnosis.",
        ],
      },
      {
        heading: "Creative strategies many people find helpful",
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
        heading: "The body matters too",
        paragraphs: [
          "Sleep, regular meals, and movement affect focus and mood for everyone, and they can matter even more with ADHD. When you feel overwhelmed, a quick grounding practice, like a slow breath out or noticing five things you can see, can help your body settle before you pick the next step.",
          "NIMH notes that treatment for adults can include medication, psychotherapy, education or skills training, or a combination. Talk with a doctor about whether medication makes sense for you.",
        ],
      },
      {
        heading: "How counseling can help",
        paragraphs: [
          "Counseling can be a place to understand your patterns, build routines that fit your life, and work through the frustration or shame that often builds up over years of feeling behind. Some people find it easier to talk while walking, which is one reason I offer outdoor sessions in Dallas–Fort Worth parks. If you’re looking for a formal ADHD evaluation, a psychologist, psychiatrist, or your doctor can help with that.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can adults have ADHD?",
        a: "Yes. NIMH notes that ADHD often continues into adulthood, and some people aren’t recognized as having it until they’re adults.",
      },
      {
        q: "Do these strategies replace ADHD treatment?",
        a: "No. They’re practical tools that many people find useful, alongside whatever care is right for them. A qualified professional can help you decide on treatment.",
      },
      {
        q: "Can I take an ADHD test online?",
        a: "Screening questionnaires like the ASRS v1.1 are free online and can help you notice patterns, but they can’t diagnose ADHD. Bring your results to a qualified professional.",
      },
      {
        q: "Is walk and talk counseling a good fit if I have ADHD?",
        a: "Some people find it easier to focus and talk while moving. It isn’t right for everyone, and we can talk about it during a free 15-minute consultation.",
      },
    ],
  },
  {
    path: "resources/attachment-styles-in-relationships",
    published: "2026-11-18",
    related: [LINK.anxiety, LINK.youngAdult, LINK.abuseRecovery, LINK.selfCare],
    title: title("Attachment Styles Explained"),
    description:
      "A plain-language guide to secure, anxious, avoidant, and disorganized attachment, how each shows up in relationships, and how people grow more secure.",
    eyebrow: "Relationships",
    heading: "How do attachment styles affect relationships?",
    intro:
      "Attachment styles are patterns in how we seek closeness, handle conflict, and react when we’re unsure of someone. They often start in early relationships and show up later with partners, friends, and family. They aren’t fixed labels, and many people move toward more secure ways of relating over time.",
    blocks: [
      {
        heading: "Where attachment theory comes from",
        paragraphs: [
          "Psychiatrist John Bowlby and psychologist Mary Ainsworth studied how young children bond with their caregivers. Later researchers applied those ideas to adult relationships. Attachment styles aren’t diagnoses. They’re a way to describe common patterns.",
        ],
      },
      {
        heading: "The four commonly described styles",
        list: [
          "Secure: generally comfortable with both closeness and independence",
          "Anxious: wanting closeness and worrying about being left or not mattering",
          "Avoidant: valuing independence and pulling back when things feel too close",
          "Disorganized, sometimes called fearful-avoidant: wanting closeness and fearing it at the same time",
        ],
        paragraphs: [
          "Researchers often describe four styles. Most people don’t fit neatly into one, and your patterns can look different with different people, at different times in your life, or under stress.",
        ],
      },
      {
        heading: "How it can show up in relationships",
        list: [
          "Needing a lot of reassurance, or feeling uneasy when a text goes unanswered",
          "Shutting down or needing space during conflict",
          "One person pursues while the other withdraws, and both feel hurt",
          "Being drawn to relationships that feel familiar, even when they hurt",
        ],
      },
      {
        heading: "Moving toward security",
        paragraphs: [
          "Change usually starts with noticing your patterns without judging yourself. It helps to name what you need, calm your body before hard conversations, and spend time in relationships that feel steady and safe. Counseling can be a place to explore where your patterns came from and practice new ways of relating, at your own pace.",
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
        a: "A quiz can help you start thinking about your patterns, but attachment styles aren’t diagnoses, and a quiz can’t capture the whole picture.",
      },
      {
        q: "Can counseling help with relationship patterns?",
        a: "Counseling can be a place to understand your patterns, notice what triggers them, and practice responding differently. Results differ from person to person.",
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
      "Healing after an abusive relationship usually starts with safety, then slowly rebuilding trust in yourself, your body, and other people. There’s no set timeline, and it’s common for recovery to have ups and downs.",
    blocks: [
      {
        heading: "If you’re not safe right now",
        paragraphs: [
          "If you’re in danger, call 911. The National Domestic Violence Hotline is available 24/7 at 1-800-799-7233, or text START to 88788, and its advocates can help with safety planning. For a mental health crisis, call or text 988. You’ll also find local Dallas–Fort Worth crisis lines on my crisis resources page.",
        ],
      },
      {
        heading: "Abuse isn’t only physical",
        list: [
          "Emotional abuse, like constant criticism, put-downs, or making you doubt your memory",
          "Controlling behavior, like isolating you from friends or tracking where you go",
          "Financial abuse, like controlling your money or your ability to work",
          "Threats, intimidation, or sexual coercion",
        ],
      },
      {
        heading: "Common reactions after leaving",
        list: [
          "Second-guessing your memory or judgment",
          "Feeling on edge, jumpy, or having trouble sleeping",
          "Missing the person, or feeling confused about your feelings",
          "Shame or self-blame",
          "Finding it hard to trust others",
        ],
        paragraphs: [
          "After leaving, many people notice reactions like these. They’re common human responses to a painful experience, not signs that something is wrong with you.",
        ],
      },
      {
        heading: "Steps that can support healing",
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
        heading: "How counseling can help",
        paragraphs: [
          "Counseling can be a place to make sense of what happened at your own pace, without pressure to share more than you’re ready to. If you still live with or near the person, think about safety first: telehealth only works if no one can overhear, and outdoor sessions happen in public parks where complete privacy can’t be guaranteed. We can talk through what feels safest during a free consultation.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does it take to heal after an abusive relationship?",
        a: "There’s no set timeline. Recovery often comes in waves, and setbacks are a normal part of it.",
      },
      {
        q: "Is it normal to miss someone who hurt me?",
        a: "Yes. Many people feel attached to someone who hurt them, especially after a long or intense relationship. Missing them doesn’t mean the abuse was okay.",
      },
      {
        q: "What if I’m not sure it was abuse?",
        a: "You don’t need a label to deserve support. Advocates at the National Domestic Violence Hotline (1-800-799-7233) can talk it through with you, and so can a counselor.",
      },
      {
        q: "Is telehealth safe if I still live with the person?",
        a: "Only if they can’t overhear or see your messages. Your safety comes first. The Hotline’s advocates can help you make a safety plan.",
      },
    ],
  },
  {
    path: "resources/self-care-for-mental-health",
    published: "2026-11-18",
    related: [LINK.holisticCounseling, LINK.depression, LINK.outdoor, LINK.adhd],
    title: title("Self-Care for Mental Health"),
    description:
      "Research-informed self-care for mental health: sleep, movement, connection, grounding, and limits, plus signs it may be time to talk with a counselor.",
    eyebrow: "Self-care",
    heading: "What does self-care for mental health actually look like?",
    intro:
      "Self-care for mental health is the everyday care that helps your mind and body recover from stress: sleep, movement, food, rest, connection, and limits on what drains you. It’s less about treats and more about steady habits, adjusted to what you need right now.",
    blocks: [
      {
        heading: "What research points to",
        paragraphs: [
          "The National Institute of Mental Health suggests regular exercise, healthy meals and enough water, making sleep a priority, relaxing activities like breathing exercises, setting goals and priorities, practicing gratitude, and staying connected with people who support you. None of these needs to be perfect. Small, steady steps count.",
        ],
      },
      {
        heading: "A holistic self-care check-in",
        list: [
          "Body: Have I slept, eaten, had water, and moved today?",
          "Mind: Have I had a break from screens or a moment of quiet?",
          "Emotions: Can I name how I feel right now?",
          "Connection: Who is one person I could reach out to?",
          "Meaning: What helps me feel grounded, like faith, nature, values, or creativity?",
        ],
      },
      {
        heading: "Grounding for hard days",
        list: [
          "Breathe out slowly, a little longer than you breathe in",
          "Name five things you can see and four things you can hear",
          "Press your feet into the floor and notice the support",
          "Step outside for a few minutes, even just to your doorstep",
        ],
      },
      {
        heading: "When self-care isn’t enough",
        paragraphs: [
          "Self-care helps, but it can’t fix everything, and struggling isn’t a sign you’re doing it wrong. If stress, anxiety, or low mood has made daily life hard for more than a couple of weeks, consider talking with a counselor or your doctor. A free 15-minute consultation is a low-pressure way to start.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is self-care selfish?",
        a: "No. Taking care of your health makes it easier to show up for the people and things that matter to you.",
      },
      {
        q: "What are some simple self-care ideas?",
        a: "Go to bed at a steady time, take a short walk, drink water, step outside, text a friend, or take five slow breaths. Small things done often tend to help more than big things done rarely.",
      },
      {
        q: "What if I don’t have time for self-care?",
        a: "Start very small. One minute of slow breathing or a five-minute walk still counts.",
      },
      {
        q: "When should I talk to a counselor?",
        a: "If stress or low mood is getting in the way of work, sleep, or relationships, or if you just want support, a counselor can help. If you’re in crisis, call or text 988.",
      },
    ],
  },
  {
    path: "resources/therapy-cost-without-insurance",
    published: "2026-11-19",
    related: [LINK.affordable, LINK.slidingScale, LINK.telehealth, LINK.consultation],
    title: title("Therapy Cost Without Insurance"),
    description:
      "What therapy costs without insurance in Texas, what affects the price, your right to a Good Faith Estimate, and practical ways to lower the cost.",
    eyebrow: "Fees",
    heading: "How much does therapy cost without insurance in Texas?",
    intro:
      "Without insurance, you pay the counselor’s fee directly. Fees vary a lot depending on the counselor’s license, experience, location, and session length, so it’s worth asking up front. My standard fee is $100 per session, and a sliding scale and session packages are available.",
    blocks: [
      {
        heading: "What affects the price of therapy?",
        list: [
          "The type of license, such as LPC Associate, LPC, psychologist, or psychiatrist",
          "Years of experience and specialized training",
          "Session length and how often you meet",
          "Where you live, and whether sessions are in an office, outdoors, or online",
          "Whether the counselor offers a sliding scale or packages",
        ],
      },
      {
        heading: "Why pay for therapy out of pocket?",
        paragraphs: [
          "Paying yourself means nothing is sent to an insurance company, and you and your counselor decide together how often to meet. The trade-off is cost, so it helps to know your options.",
        ],
      },
      {
        heading: "What is a Good Faith Estimate?",
        paragraphs: [
          "Under the federal No Surprises Act, if you don’t have insurance or choose not to use it, you have the right to a written Good Faith Estimate of expected charges before services start. If your bill comes in at least $400 more than the estimate, you can dispute it. You can learn more at cms.gov/nosurprises.",
        ],
      },
      {
        heading: "How can I lower the cost of therapy?",
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
          "Online sessions with a licensed counselor usually cost about the same as in-person sessions with that same counselor. Subscription therapy apps price things differently, often by the week or month, so check what’s included, like how long live sessions are and how often you get them.",
        ],
      },
      {
        heading: "How can I get free therapy without insurance?",
        list: [
          "Your employer’s Employee Assistance Program (EAP), if you have one, often covers a few free sessions",
          "Community mental health centers may offer free or low-cost care based on income",
          "Free peer support groups, such as those run by NAMI, can be a helpful addition",
          "Dial 211 in Texas to find free services near you",
          "In a crisis, call or text 988. It’s free and available 24/7.",
        ],
      },
      {
        heading: "How much does a session cost with me?",
        paragraphs: [
          "My standard fee is $100 per session, for walk and talk sessions in Dallas–Fort Worth or online therapy anywhere in Texas. A sliding scale based on household income and session packages are available. I’m self-pay only and don’t bill insurance. You can ask about cost during a free 15-minute phone call before committing to anything.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I get therapy without insurance?",
        a: "Decide what you can afford each month, then ask counselors directly about their fee, sliding scale, and packages. Check your HSA, FSA, or employer EAP, and ask for a Good Faith Estimate before you start.",
      },
      {
        q: "Can I use my HSA or FSA for counseling?",
        a: "Often, yes, when counseling is for your mental health. Rules depend on your plan, so check with your plan administrator before your first session.",
      },
      {
        q: "Do you offer a sliding scale?",
        a: "Yes. Reduced rates are available based on household income. Ask during your free consultation.",
      },
      {
        q: "Will you bill my insurance?",
        a: "No. I’m self-pay only and don’t bill insurance.",
      },
      {
        q: "Is online therapy cheaper than in-person?",
        a: "Not always. Many counselors charge the same for both. My fee is the same for online therapy and walk and talk sessions.",
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
      "Sliding scale therapy means the fee changes based on what you can afford, usually your household income and size. It makes counseling possible for people who can’t pay a full fee and don’t want to, or can’t, use insurance.",
    blocks: [
      {
        heading: "How does sliding scale therapy work?",
        list: [
          "The counselor sets a range of fees instead of one fixed price",
          "Your fee is based on things like household income and how many people it supports",
          "Some counselors ask for income details, while others go by what you tell them",
          "The fee is agreed on before you start and included in your Good Faith Estimate",
          "Your fee can be revisited if your situation changes",
        ],
      },
      {
        heading: "How do I apply for sliding scale therapy?",
        paragraphs: [
          "There’s usually no formal application. Ask the counselor directly, ideally on your first call: “Do you offer a sliding scale?” is enough. Some will ask about your household income and size, and a few may ask for proof. You don’t need to explain your whole financial situation, and a good counselor will make the conversation easy.",
        ],
      },
      {
        heading: "Sliding scale therapy in Dallas with me",
        paragraphs: [
          "I’m self-pay only, and reduced rates are available based on household income, for walk and talk sessions in Dallas–Fort Worth and online therapy anywhere in Texas. Ask during your free 15-minute consultation, and we’ll agree on a fee before your first session.",
        ],
      },
      {
        heading: "Who is a sliding scale for?",
        paragraphs: [
          "Sliding scales are meant for people whose income makes a full fee hard to manage: students, people between jobs, single-income households, or anyone paying for therapy without insurance. You don’t need to prove hardship to ask. If the counselor can’t offer a rate that works, they can usually point you toward other options.",
        ],
      },
      {
        heading: "Sliding scale vs. other low-cost options",
        list: [
          "A sliding scale keeps you with the counselor you chose, at a fee you agree on together",
          "An Employee Assistance Program is free but usually limited to a few sessions",
          "Community clinics and training clinics often cost less, though wait times and who you see can vary",
          "Self-pay with a sliding scale means nothing is billed to insurance. See [affordable therapy in Dallas](/affordable-therapy-dallas/).",
        ],
      },
      {
        heading: "What are other lower-cost options in Dallas–Fort Worth?",
        list: [
          "Open Path Collective, a nonprofit network of therapists who offer reduced-rate sessions",
          "University counseling training clinics, where supervised graduate students see clients at lower fees",
          "Community mental health centers, which often charge based on income",
          "Employee Assistance Programs (EAPs), which often include a few free sessions",
          "Dial 211 to find low-cost services near you",
        ],
      },
    ],
    faqs: [
      {
        q: "What does sliding scale mean in therapy?",
        a: "It means the counselor charges different fees depending on what clients can afford, instead of one price for everyone.",
      },
      {
        q: "Is sliding scale therapy lower quality?",
        a: "No. The counseling is the same. Only the fee changes.",
      },
      {
        q: "Do I have to prove my income?",
        a: "It depends on the counselor, so it’s fine to ask how they handle it.",
      },
      {
        q: "Does your sliding scale apply to online therapy?",
        a: "Yes. It applies to both walk and talk sessions and online therapy.",
      },
      {
        q: "What if I can’t afford counseling right now?",
        a: "Try the options above, or dial 211 to find free and low-cost services near you. If you’re in crisis, call or text 988 any time. It’s free.",
      },
    ],
  },
  {
    path: "resources/what-is-walk-and-talk-therapy",
    published: "2026-11-19",
    related: [LINK.outdoor, LINK.outdoorFit, LINK.anxiety],
    title: title("What Is Walk and Talk Therapy?"),
    description:
      "Walk and talk therapy explained: how a session works, what research says about movement and nature, privacy, and how to tell if it’s a good fit for you.",
    eyebrow: "Walk and talk therapy",
    heading: "What is walk and talk therapy?",
    intro:
      "Walk and talk therapy is counseling that happens while you and your counselor walk outdoors, usually in a park, instead of sitting in an office. It’s the same talk therapy, with the same confidentiality rules and the same goals. Only the setting changes.",
    blocks: [
      {
        heading: "How a session works",
        list: [
          "You and the counselor agree on a place, often a quiet park or trail",
          "You walk side by side at a comfortable pace, or sit on a bench for part of it",
          "The session usually lasts as long as an office session",
          "If someone comes close, you can pause or move",
          "If the weather is bad, the session happens online instead",
        ],
      },
      {
        heading: "What research says",
        paragraphs: [
          "There isn’t much research on walk and talk therapy itself yet, and most of what exists is small. It builds on two well-studied ideas, though. Regular physical activity is linked with lower anxiety and depression ([Singh et al., 2023](https://doi.org/10.1136/bjsports-2022-106195)), and time in green spaces is linked with lower stress ([Hunter et al., 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6458297/)). Many people also say that walking side by side, without constant eye contact, makes hard conversations feel a little easier.",
        ],
      },
      {
        heading: "Who it may suit",
        list: [
          "People who feel restless or boxed in sitting in an office",
          "Anyone who thinks more clearly while moving",
          "People who want more time outdoors in their week",
          "People working on anxiety, low mood, or stress who want to build movement into their routine",
        ],
      },
      {
        heading: "When it may not be the right fit",
        paragraphs: [
          "Parks are public, so complete privacy can’t be guaranteed. If talking where others might pass by would hold you back, or if walking is physically hard right now, sitting outdoors or online therapy may suit you better. There’s no wrong choice.",
        ],
      },
      {
        heading: "Walk and talk therapy in Dallas–Fort Worth",
        paragraphs: [
          "I offer walk and talk sessions for people across Dallas–Fort Worth, usually at Sam Houston Trail Park in Irving, or another quiet park we choose together. You can start with a free 15-minute phone call to see if it feels right.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need to be in shape for walk and talk therapy?",
        a: "No. The pace is gentle, and you can sit for the whole session if you’d like.",
      },
      {
        q: "Is walk and talk therapy confidential?",
        a: "Yes, within the same legal limits as any counseling. Because parks are public, you and your counselor take extra care, like choosing quiet paths and pausing when people pass.",
      },
      {
        q: "What should I wear?",
        a: "Comfortable shoes and clothes for the weather. Bring water, especially in the Texas heat.",
      },
      {
        q: "Is walk and talk therapy covered by insurance?",
        a: "Insurance pays for counseling based on the service, not the location, so it depends on your plan and whether the counselor bills insurance. Ask both before you start. I’m self-pay only and don’t bill insurance, and a sliding scale is available.",
      },
      {
        q: "Can I switch between walking and online sessions?",
        a: "With me, yes. You can mix walk and talk and online sessions depending on the weather and your week.",
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
      "Sometimes. It depends on the therapist’s license, training, and state law. Psychologists, psychiatrists, and other medical providers commonly diagnose ADHD, and in many states some licensed counselors and social workers do too. Many therapists refer clients to a psychologist or doctor for a full evaluation, then help with the day-to-day side of ADHD.",
    blocks: [
      {
        heading: "Who can diagnose ADHD?",
        list: [
          "Psychologists, who often do the most in-depth testing",
          "Psychiatrists and psychiatric nurse practitioners, who can also prescribe medication",
          "Primary care doctors and pediatricians",
          "In many states, licensed counselors and clinical social workers with the right training",
        ],
        paragraphs: [
          "If you want a formal diagnosis, ask the provider directly whether they do ADHD evaluations and what theirs includes.",
        ],
      },
      {
        heading: "What does an adult ADHD evaluation involve?",
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
          "No. Counselors, social workers, and most psychologists can’t prescribe medication. ADHD medication is prescribed by psychiatrists, psychiatric nurse practitioners, and other medical providers. A few states allow specially trained psychologists to prescribe, but Texas isn’t one of them.",
        ],
      },
      {
        heading: "How do I find a therapist for ADHD?",
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
          "Therapy doesn’t replace an evaluation or medication, but it can help with what ADHD touches: organizing time and tasks, working through the frustration, shame, and anxiety that often build up over years, and building routines that fit how your brain works.",
        ],
      },
      {
        heading: "ADHD support with me",
        paragraphs: [
          "I don’t offer ADHD evaluations or prescribe medication. I offer talk therapy for young adults and adults with ADHD or suspected ADHD, through walk and talk sessions in Dallas–Fort Worth or online anywhere in Texas. If you’re looking for an evaluation, we can talk through where to go.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need an ADHD diagnosis to start therapy?",
        a: "No. You can start therapy while you wait for an evaluation, or without one.",
      },
      {
        q: "Can ADHD be evaluated online?",
        a: "Some providers do ADHD evaluations by telehealth. Ask what’s included, since a thorough evaluation usually involves more than one questionnaire.",
      },
      {
        q: "Can a therapist prescribe ADHD medication?",
        a: "No. In Texas, ADHD medication is prescribed by psychiatrists, psychiatric nurse practitioners, and other medical providers, not therapists.",
      },
      {
        q: "Is there a free ADHD screening questionnaire?",
        a: "Yes. The ASRS v1.1 is a free adult ADHD screening questionnaire, linked on our screening tools page. It isn’t a diagnosis, but it can help you decide whether to seek an evaluation.",
      },
    ],
  },
  {
    path: "resources/what-is-holistic-therapy",
    published: "2026-11-19",
    related: [LINK.holisticCounseling, LINK.anxiety, LINK.depression, LINK.selfCare],
    title: title("What Is Holistic Therapy?"),
    description:
      "What holistic therapy means, how it works in talk therapy, what research supports, and how to find a holistic therapist you can trust.",
    eyebrow: "Holistic therapy",
    heading: "What is holistic therapy?",
    intro:
      "Holistic therapy is an approach to counseling that looks at the whole person: your thoughts and feelings, and also your body, sleep, stress, relationships, culture, and sense of meaning. It isn’t one technique. It’s a way of seeing how all of those pieces affect each other.",
    blocks: [
      {
        heading: "What does holistic therapy mean?",
        paragraphs: [
          "In a holistic approach, a racing mind isn’t treated as separate from poor sleep, a tense body, or a stressful job. Mental health is shaped by many things at once, so care looks at the whole picture rather than one symptom.",
          "The word is used loosely. Some practitioners use it for talk therapy with a mind-body focus. Others use it for services like massage, acupuncture, or energy work, which are separate from counseling and have very different levels of evidence.",
        ],
      },
      {
        heading: "How does holistic therapy work?",
        paragraphs: ["In talk therapy, a holistic approach can include:"],
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
          "Because holistic is a broad label, research looks at its parts rather than the whole. Some have strong support: regular exercise can ease symptoms of depression and anxiety ([Singh et al., 2023](https://doi.org/10.1136/bjsports-2022-106195)), mindfulness-based programs can help with stress and lower the chance of depression coming back, and better sleep is closely tied to better mood ([Scott et al., 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8651630/)). Other practices sold as holistic have little or no evidence. A good holistic therapist can tell you what a technique is based on.",
        ],
      },
      {
        heading: "How do I find a holistic therapist I can trust?",
        list: [
          "Check that they’re licensed, and look up the license on your state board’s website",
          "Be cautious of anyone who promises a cure or tells you to stop medication",
          "Ask what a session actually looks like",
          "Make sure they still work on the concerns that brought you in, not only general wellness",
        ],
      },
      {
        heading: "Holistic counseling with me",
        paragraphs: [
          "My approach is holistic and grounding, and it stays within talk therapy. I combine person-centered, solution-focused, and Jungian ideas with research on the body, sleep, movement, and nature. Sessions happen as walk and talk sessions in Dallas–Fort Worth or online anywhere in Texas. I don’t prescribe medication or offer medical treatments.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are holistic therapies effective?",
        a: "Some parts, like exercise, mindfulness-based approaches, and better sleep, have good research support. Others don’t. It’s fair to ask any therapist what their methods are based on.",
      },
      {
        q: "Is holistic therapy the same as alternative medicine?",
        a: "No. Holistic therapy can be regular, licensed counseling that pays attention to the whole person. Alternative medicine usually means treatments used instead of standard medical care, which is a different thing.",
      },
      {
        q: "Can holistic therapy help with anxiety?",
        a: "Parts of a holistic approach, like breathing skills, movement, and better sleep, are commonly used for anxiety alongside talk therapy. How much it helps varies from person to person.",
      },
      {
        q: "Will a holistic therapist tell me to stop my medication?",
        a: "A trustworthy one won’t. Decisions about medication belong with you and your prescriber.",
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
      "If your adult child is somewhere between 18 and their late twenties and seems to be struggling, therapy may help. It often works best when they choose it themselves, with your support in the background. Here’s how to tell when it might help, how to bring it up, and what to do if therapy alone isn’t enough.",
    blocks: [
      {
        heading: "What are signs therapy might help?",
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
          "Once your child is 18, counseling is confidential between them and their counselor, within the limits of the law. That’s true even if you’re paying. A counselor can share information with you only if your young adult gives written permission. Many young adults open up more because of that privacy.",
        ],
      },
      {
        heading: "When is therapy alone not enough for a young adult?",
        paragraphs: [
          "Weekly counseling helps many young adults, but sometimes more support is needed. Signs include:",
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
        heading: "What does more support look like?",
        paragraphs: [
          "It might mean a psychiatric evaluation to discuss medication, an intensive outpatient program with several sessions a week, or a higher level of care. If there’s any risk to their safety, call or text 988, call 911, or go to the nearest emergency room.",
        ],
      },
      {
        heading: "Counseling for young adults with me",
        paragraphs: [
          "I offer counseling for young adults through walk and talk sessions in Dallas–Fort Worth or online anywhere in Texas. Your young adult is welcome to call for a free 15-minute consultation themselves. If you’re the one calling, I’m glad to explain how it works so you can pass it along.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I make my adult child go to therapy?",
        a: "Not really, and pressure usually backfires. What you can do is make it easier: share options, offer to help pay, and let them decide.",
      },
      {
        q: "Can I talk to my young adult’s therapist?",
        a: "The therapist can share information with you only if your young adult gives written permission. Without it, they can’t confirm or discuss your young adult’s care.",
      },
      {
        q: "Is online therapy a good option for young adults?",
        a: "For many, yes. It’s easy to fit around classes and work, as long as they have a private place to talk and are located in Texas for each session.",
      },
      {
        q: "What if my young adult is in crisis?",
        a: "Call or text 988, call 911, or go to the nearest emergency room. Don’t wait for a counseling appointment.",
      },
    ],
  },
  {
    path: "resources/adhd-and-anxiety",
    published: "2026-11-19",
    related: [LINK.adhdTherapy, LINK.anxiety, LINK.adhdDiagnose],
    title: title("ADHD and Anxiety in Adults"),
    description:
      "ADHD and anxiety share signs like restlessness and poor focus. How they differ, why they often show up together, and what helps adults with both.",
    eyebrow: "ADHD",
    heading: "Is it ADHD, anxiety, or both?",
    intro:
      "It can be either one, and for many adults it’s both. ADHD and anxiety share signs like restlessness, trouble focusing, and poor sleep, and adults with ADHD are more likely than other adults to also have an anxiety disorder. Only a qualified professional can sort out which is which, but knowing how they overlap can help you ask the right questions.",
    blocks: [
      {
        heading: "Can you have ADHD and anxiety at the same time?",
        paragraphs: [
          "Yes. Studies of adults with ADHD keep finding that anxiety disorders are more common in this group than in adults without ADHD.",
          "Living with ADHD can also bring a lot of everyday worry: about missed deadlines, forgotten bills, or letting people down again. Over time, that worry can grow into a problem of its own.",
        ],
      },
      {
        heading: "How are ADHD and anxiety different?",
        paragraphs: ["From the outside they can look alike. A few general differences:"],
        list: [
          "Focus: with anxiety, attention is often pulled toward worries. With ADHD, attention drifts to whatever is most interesting, even when you feel calm.",
          "Timing: ADHD begins in childhood and shows up across most of life. Anxiety can start at any age and often rises and falls with stress.",
          "Restlessness: anxious restlessness usually comes with tension or dread. ADHD restlessness can feel more like boredom or a need to move.",
          "Putting things off: with anxiety, people often avoid a task out of fear of getting it wrong. With ADHD, starting is hard even when the task isn’t scary.",
        ],
      },
      {
        heading: "Why does it matter which one it is?",
        paragraphs: [
          "Because the right support can be different. Something that helps anxiety may not touch ADHD, and the reverse is true too. When both are present, both need attention. That’s why an evaluation by a psychologist, psychiatrist, or other qualified medical provider matters more than any online quiz.",
        ],
      },
      {
        heading: "What helps with ADHD and anxiety?",
        paragraphs: [
          "Plans are individual, and decisions about medication belong with you and your prescriber. Alongside that, many adults find these helpful:",
        ],
        list: [
          "Talk therapy to work through worry, self-criticism, and the shame that can build up after years of feeling behind",
          "Simple systems for time and tasks, so fewer things slip and there’s less to worry about",
          "Slow breathing and grounding skills to calm your body when worry spikes",
          "Regular movement, which research links with lower anxiety",
          "Steady sleep, since poor sleep makes both focus and worry harder",
          "Time outdoors, which many people find calming",
        ],
      },
      {
        heading: "Can a free screener tell me if it’s ADHD or anxiety?",
        paragraphs: [
          "Not on its own. My screening tools page links to free questionnaires, including the ASRS v1.1 for adult ADHD and the GAD-7 for anxiety. They aren’t a diagnosis. They can help you decide whether to talk with a psychologist, psychiatrist, or doctor about an evaluation.",
        ],
      },
      {
        heading: "When should you get help right away?",
        paragraphs: [
          "If worry or low mood ever leads to thoughts of suicide or harming yourself, call or text 988, call 911, or go to the nearest emergency room. You’ll also find local Dallas–Fort Worth crisis lines on my crisis resources page.",
        ],
      },
      {
        heading: "ADHD and anxiety support with me",
        paragraphs: [
          "I don’t offer ADHD evaluations or prescribe medication. I offer talk therapy for adults dealing with ADHD, anxiety, or both. My approach is practical and holistic: grounding skills, sleep, movement, and routines that fit how you think, at a pace you set. Sessions happen as walk and talk sessions in Dallas–Fort Worth or online for anyone located in Texas. A free 15-minute consultation is an easy way to see if it’s a fit.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can ADHD cause anxiety?",
        a: "It can contribute. The daily stress of ADHD, like missed deadlines and constant catching up, can feed ongoing worry. Some people also have both conditions separately. A professional can help you sort out what applies to you.",
      },
      {
        q: "Can anxiety look like ADHD?",
        a: "Yes. Anxiety can make it hard to focus, finish tasks, or sit still, which can look like ADHD. That’s one reason a careful evaluation also checks for anxiety.",
      },
      {
        q: "Can ADHD medication affect anxiety?",
        a: "Some people notice changes in anxiety on ADHD medication, and others don’t. That’s a question for your prescriber. Don’t start, stop, or change medication on your own.",
      },
      {
        q: "Can therapy help with ADHD and anxiety?",
        a: "Talk therapy can help with the worry, self-criticism, and daily planning that often come with both. It doesn’t replace an evaluation or medication when those are needed.",
      },
    ],
  },
  {
    path: "resources/adhd-signs-in-women",
    published: "2026-11-20",
    related: [LINK.adhdTherapy, LINK.adhdDiagnose, LINK.adhdAnxiety, LINK.screening],
    title: title("ADHD Signs in Women"),
    description:
      "Common signs of ADHD in adult women, why it’s often missed or found later, and what to do next, from free screening to evaluation and support.",
    eyebrow: "ADHD",
    heading: "What are the signs of ADHD in women?",
    intro:
      "ADHD in women often looks quieter than the stereotype. Instead of obvious hyperactivity, it can show up as a busy mind, forgetfulness, overwhelm, and years of working twice as hard to keep up. Many women only start to wonder about ADHD as adults.",
    blocks: [
      {
        heading: "Why is ADHD in women often missed?",
        paragraphs: [
          "An expert consensus statement on girls and women with ADHD describes how gender bias, co-occurring conditions such as anxiety, and the coping strategies many women build can hide ADHD. It also notes that ADHD in females tends to look more internal and less disruptive than the classic picture ([Young et al., 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7422602/)).",
          "ADHD symptoms often continue into adulthood, though they can change with age. Inattention tends to last, while hyperactivity is more likely to fade ([NIMH](https://www.nimh.nih.gov/health/publications/adhd-what-you-need-to-know)).",
        ],
      },
      {
        heading: "What can ADHD look like in adult women?",
        paragraphs: ["Some common experiences include:"],
        list: [
          "Losing track of time, appointments, or tasks despite trying hard",
          "A mind that jumps between thoughts, or drifting off in conversations",
          "Feeling overwhelmed by the logistics of home, work, or school",
          "Starting many projects and struggling to finish them",
          "Strong feelings that come on fast, followed by harsh self-criticism",
          "Feeling drained from working so hard to look organized",
        ],
      },
      {
        heading: "What else can look like ADHD?",
        paragraphs: [
          "Stress, other mental health conditions, and some physical health conditions can cause similar symptoms, which is why a careful evaluation matters. An adult evaluation also looks back for symptoms that began before age 12 ([NIMH](https://www.nimh.nih.gov/health/publications/adhd-what-you-need-to-know)).",
        ],
      },
      {
        heading: "What should I do next?",
        list: [
          "Try a free screener, such as the ASRS v1.1 linked on the [screening tools page](/screening-tools/). It isn’t a diagnosis.",
          "Ask your doctor, a psychiatrist, or a psychologist about a full ADHD evaluation",
          "Consider counseling for day-to-day support while you decide",
        ],
      },
      {
        heading: "Support with me",
        paragraphs: [
          "I don’t diagnose ADHD or prescribe medication. I offer [adult ADHD counseling](/adhd-therapy/) for women who have ADHD or suspect it, through walk and talk sessions in Dallas–Fort Worth or online anywhere in Texas. Not sure who can evaluate you? Read [can a therapist diagnose ADHD?](/resources/can-a-therapist-diagnose-adhd/)",
        ],
      },
    ],
    faqs: [
      {
        q: "Can ADHD be diagnosed for the first time as an adult?",
        a: "Yes. Adults can be evaluated for ADHD. The process usually looks at symptoms now and in childhood.",
      },
      {
        q: "Is it ADHD or anxiety?",
        a: "They can look alike and often happen together. An evaluation can help sort out what’s going on.",
      },
      {
        q: "Do I need a diagnosis to start counseling?",
        a: "No. You can start counseling with or without a diagnosis.",
      },
    ],
  },
  {
    path: "resources/burnout-vs-depression",
    published: "2026-11-20",
    related: [LINK.depression, LINK.holisticCounseling, LINK.lasColinas, LINK.selfCare],
    title: title("Burnout vs. Depression"),
    description:
      "How burnout and depression differ and overlap, the signs of each, and when to talk with a counselor or doctor. Plain language, with research sources.",
    eyebrow: "Burnout",
    heading: "Burnout vs. depression: what’s the difference?",
    intro:
      "Burnout and depression can feel alike: tired, flat, and running on empty. The main difference is scope. Burnout is tied to work, while depression tends to color every part of life. The two can also overlap.",
    blocks: [
      {
        heading: "What is burnout?",
        paragraphs: [
          "The World Health Organization describes burnout as a syndrome resulting from chronic workplace stress that hasn’t been successfully managed. It’s included in ICD-11 as an occupational phenomenon, not a medical condition, and the term refers specifically to work ([WHO](https://www.who.int/standards/classifications/frequently-asked-questions/burn-out-an-occupational-phenomenon)). It has three parts:",
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
          "Depression involves a low mood or loss of interest or pleasure, most of the day, nearly every day, for at least two weeks, along with other changes such as sleep, appetite, energy, and concentration ([NIMH](https://www.nimh.nih.gov/health/publications/depression)). Unlike burnout, it isn’t limited to one area of life.",
        ],
      },
      {
        heading: "Where do they overlap?",
        paragraphs: [
          "Researchers still debate how separate the two really are. A review of 92 studies found substantial overlap and concluded that the line between burnout and depression is conceptually fragile ([Bianchi, Schonfeld & Laurent, 2015](https://www.ccny.cuny.edu/sites/default/files/2022-03/Bianchi%2C%20Schonfeld%2C%20Laurent%2C%202015%2C%20Clinical%20Psy%20Review.pdf)).",
        ],
      },
      {
        heading: "Questions that can help you notice the difference",
        list: [
          "Do I feel noticeably better on weekends or time off? If so, work may be the bigger factor.",
          "Does the low mood follow me everywhere, even into things I used to enjoy? That points more toward depression.",
          "Am I having thoughts of hopelessness or self-harm? Those always deserve prompt attention.",
        ],
      },
      {
        heading: "What helps?",
        paragraphs: [
          "For burnout, changes at work matter: workload, boundaries, and real rest. For depression, support from a counselor, your doctor, or both can help. Many people need a bit of each. Counseling can help you sort out what’s going on and find steps that fit your life. If your work life is the center of it, see [counseling in Las Colinas](/counseling-las-colinas-tx/), or read about [depression counseling](/depression-counseling-dallas/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Is burnout a medical diagnosis?",
        a: "No. The World Health Organization classifies burnout as an occupational phenomenon, not a medical condition.",
      },
      {
        q: "Can burnout and depression happen together?",
        a: "Yes. They often overlap, and it isn’t always clear where one ends and the other begins. If symptoms spread beyond work or last for weeks, talk to a counselor or your doctor.",
      },
      {
        q: "When should I get help right away?",
        a: "If you’re thinking about suicide or harming yourself, call or text 988 or call 911.",
      },
    ],
  },
  {
    path: "resources/how-to-choose-a-therapist-dallas",
    published: "2026-11-20",
    related: [LINK.dallas, LINK.lpcVs, LINK.consultation, LINK.affordable],
    title: title("Choosing a Therapist in Dallas"),
    description:
      "How to choose a therapist in Dallas: what to look for, how to check a Texas license, questions to ask on a free call, and red flags to notice.",
    eyebrow: "Getting started",
    heading: "How to choose a therapist in Dallas.",
    intro:
      "Finding a therapist in a city the size of Dallas can feel like a lot. A few practical questions, and paying attention to how you feel on a first call, can narrow it down quickly.",
    blocks: [
      {
        heading: "Start with what you need",
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
          "Counselors, psychologists, social workers, and marriage and family therapists in Texas are licensed through the [Texas Behavioral Health Executive Council](https://bhec.texas.gov/), where you can look up a license. Titles differ in training and supervision; [LPC vs. LPC Associate vs. psychologist](/resources/lpc-vs-lpc-associate-vs-psychologist/) explains how.",
        ],
      },
      {
        heading: "Why does fit matter so much?",
        paragraphs: [
          "The working relationship between you and your therapist, often called the alliance, is consistently linked with how much people get out of therapy. A meta-analysis of 295 studies found a reliable link between the alliance and outcomes ([Flückiger et al., 2018](https://doi.org/10.1037/pst0000172)). So it’s reasonable to choose partly on how comfortable you feel.",
        ],
      },
      {
        heading: "Questions to ask on a free consultation call",
        list: [
          "How do you usually work with what I’m dealing with?",
          "What does a typical session look like?",
          "What do you charge, and is there a sliding scale?",
          "Do you offer online or outdoor sessions?",
          "How do you handle confidentiality?",
        ],
      },
      {
        heading: "Red flags",
        list: [
          "Promises of a cure or a quick fix",
          "Pressure to commit before you’re ready",
          "Dismissing your culture, values, or concerns",
          "Not explaining fees or the limits of confidentiality",
        ],
      },
      {
        heading: "If you’re in Dallas or Irving",
        paragraphs: [
          "I offer a free 15-minute call to see if we’re a good fit, with walk and talk sessions near Irving and online sessions anywhere in Texas. See [counseling in Dallas](/counseling-dallas-tx/) for how that works.",
        ],
      },
    ],
    faqs: [
      {
        q: "How many therapists should I contact?",
        a: "There’s no set number. Some people talk with two or three before deciding.",
      },
      {
        q: "Is it okay to switch therapists?",
        a: "Yes. If it doesn’t feel like a fit after a few sessions, it’s okay to say so or to try someone else.",
      },
      {
        q: "Do I need a referral to see a therapist?",
        a: "Usually not for self-pay counseling. You can contact a therapist directly.",
      },
    ],
  },
  {
    path: "resources/first-counseling-session",
    published: "2026-11-20",
    related: [LINK.consultation, LINK.newClients, LINK.telehealth, LINK.outdoor],
    title: title("Your First Counseling Session"),
    description:
      "What happens in a first counseling session: what to expect before, during, and after, what you can ask, and how to prepare. No pressure to share.",
    eyebrow: "Getting started",
    heading: "What happens in a first counseling session?",
    intro:
      "A first session is mostly about getting to know each other. You don’t need to prepare anything or tell your whole story at once. Here’s what usually happens with me.",
    blocks: [
      {
        heading: "Before the session",
        list: [
          "A free 15-minute phone call to see if we’re a good fit",
          "Forms to read and sign securely, including consent, an intake questionnaire, and a privacy notice. You can preview them on the [new client page](/new-clients/).",
          "A written Good Faith Estimate of expected charges, which self-pay clients have a right to receive ([CMS](https://www.cms.gov/initiatives/your-patient-rights/medical-bill-rights/know-your-rights/without-insurance))",
          "Choosing whether to meet outdoors or online",
        ],
      },
      {
        heading: "During the session",
        paragraphs: [
          "We start by going over confidentiality and its limits, so you know what stays private. Then I ask what’s bringing you in, what you’d like to be different, and a little about your life: sleep, stress, relationships, health, and culture if it matters to you. You decide how much to share.",
          "I’ll also explain how I work, and you can ask anything. By the end, we usually have a rough sense of what we’ll focus on.",
        ],
      },
      {
        heading: "Questions you can ask",
        list: [
          "How often should we meet?",
          "What will we actually do in sessions?",
          "How will we know if it’s helping?",
          "What happens if I need to cancel?",
        ],
      },
      {
        heading: "After the first session",
        paragraphs: [
          "Some people feel relief afterwards, and others feel tired or a little raw. Both are normal. There’s no obligation to continue. If you’d like to, we set the next session and talk about how often to meet.",
          "Sessions can happen [outdoors as walk and talk therapy](/outdoor-counseling/) or [online anywhere in Texas](/telehealth-counseling-texas/).",
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
        a: "Nothing special. For a walk and talk session, wear comfortable shoes and bring water.",
      },
      {
        q: "What if I don’t know what to say?",
        a: "That’s common and completely fine. I’ll ask questions to help us get started.",
      },
    ],
  },
  {
    path: "resources/nervous-system-regulation-techniques",
    published: "2026-11-20",
    related: [LINK.holisticCounseling, LINK.anxiety, LINK.selfCare, LINK.outdoor],
    title: title("Calming Your Nervous System"),
    description:
      "Research-based nervous system regulation techniques: slow breathing, movement, time in nature, and sleep, plus simple grounding and when to get support.",
    eyebrow: "Mind and body",
    heading: "Nervous system regulation: techniques for calmer days.",
    intro:
      "When you’re stressed, your body shifts into a more alert state: faster heartbeat, tighter muscles, shallow breath. Nervous system regulation simply means helping your body come back down. These are some techniques with research behind them.",
    blocks: [
      {
        heading: "Slow breathing",
        paragraphs: [
          "A systematic review found that slow breathing, under 10 breaths a minute, was associated with higher heart rate variability and with feeling more relaxed and less anxious ([Zaccaro et al., 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC6137615/)). Try breathing in for a count of four and out for a count of six, for a few minutes.",
        ],
      },
      {
        heading: "Movement",
        paragraphs: [
          "A large overview of 97 systematic reviews found that physical activity improved symptoms of depression, anxiety, and psychological distress compared with usual care ([Singh et al., 2023](https://doi.org/10.1136/bjsports-2022-106195)). A short walk is a good place to start.",
        ],
      },
      {
        heading: "Time in nature",
        paragraphs: [
          "In one study of city residents, spending time in a place that felt like nature lowered stress hormones measured in saliva, with 20 to 30 minutes giving the biggest drop ([Hunter, Gillespie & Chen, 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6458297/)).",
        ],
      },
      {
        heading: "Sleep",
        paragraphs: [
          "A meta-analysis of 65 randomized trials found that improving sleep led to better mental health, including less depression and anxiety ([Scott et al., 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8651630/)). A steady bedtime and a wind-down routine are practical first steps.",
        ],
      },
      {
        heading: "Simple grounding for hard moments",
        paragraphs: [
          "These are everyday practices rather than research findings, but many people find them steadying:",
        ],
        list: [
          "Name five things you can see, four you can hear, and three you can touch",
          "Press your feet into the floor and notice the support under you",
          "Hold something cool or textured and describe it to yourself",
        ],
      },
      {
        heading: "When techniques aren’t enough",
        paragraphs: [
          "These tools help, but they don’t replace support when stress or anxiety keeps coming back. [Holistic counseling](/holistic-counseling/) and [anxiety therapy](/anxiety-therapy-dallas/) can help you build a routine that fits your life and understand what keeps setting your system off.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is nervous system regulation?",
        a: "It means helping your body shift from a stressed, alert state back toward a calmer one, using things like breathing, movement, rest, and connection.",
      },
      {
        q: "Can breathing exercises replace therapy?",
        a: "They’re a helpful tool, but not a replacement for support when stress, anxiety, or low mood keeps getting in the way.",
      },
      {
        q: "Which technique should I start with?",
        a: "Start with whichever feels easiest to repeat. A few slow breaths or a short walk each day is a good beginning.",
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
      "Walk and talk therapy combines counseling with a gentle walk outdoors. Research on the format itself is still early, but it draws on well-studied benefits of movement and time in nature.",
    blocks: [
      {
        heading: "What research says about walk and talk itself",
        paragraphs: [
          "Most studies of walk and talk therapy are small. One study surveyed 18 therapists who use it and explored what they found helpful and challenging about it ([Revell & McLeod, 2016](https://insight.cumbria.ac.uk/id/eprint/2072)). So far, the stronger evidence comes from research on its parts.",
        ],
      },
      {
        heading: "Movement",
        paragraphs: [
          "A 2024 network meta-analysis of randomized trials found that walking or jogging was linked with moderate reductions in depression compared with active control conditions ([Noetel et al., 2024](https://doi.org/10.1136/bmj-2023-075847)).",
        ],
      },
      {
        heading: "Time in nature",
        paragraphs: [
          "City residents who spent 20 to 30 minutes in a place that felt like nature showed lower stress hormones afterwards ([Hunter, Gillespie & Chen, 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6458297/)).",
        ],
      },
      {
        heading: "Thinking while walking",
        paragraphs: [
          "In lab experiments, people came up with more creative ideas while walking than while sitting ([Oppezzo & Schwartz, 2014](https://www.apa.org/news/press/releases/2014/04/creativity-walk)). That doesn’t prove therapy works better on foot, but some people do find that moving helps their thoughts flow.",
        ],
      },
      {
        heading: "Side by side instead of face to face",
        paragraphs: [
          "This one comes from experience rather than research: some people find it easier to talk about hard things while walking side by side, without constant eye contact.",
        ],
      },
      {
        heading: "The trade-offs",
        list: [
          "Parks are public, so complete privacy can’t be guaranteed",
          "Texas heat and storms mean some sessions move online",
          "It may not suit you if walking is physically hard right now. Sitting outdoors is an option.",
        ],
      },
      {
        heading: "Walk and talk in Irving and Dallas",
        paragraphs: [
          "I offer [walk and talk therapy](/outdoor-counseling/) usually at Sam Houston Trail Park in Irving, for people across [Irving](/counseling-irving-tx/), Dallas, and nearby cities.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is walk and talk therapy evidence-based?",
        a: "It builds on strong evidence for movement and time in nature, but research on the format itself is still early and mostly small.",
      },
      {
        q: "Do I need to be fit for walk and talk therapy?",
        a: "No. The pace is gentle, and you can sit for the whole session.",
      },
      {
        q: "Is walk and talk therapy private?",
        a: "It’s confidential within the same legal limits as any counseling, but parks are public, so we choose quieter spots and pause when people pass.",
      },
    ],
  },
  {
    path: "resources/lpc-vs-lpc-associate-vs-psychologist",
    published: "2026-11-20",
    related: [LINK.associate, LINK.choose, LINK.telehealth, LINK.adhdDiagnose],
    title: title("LPC vs. Psychologist in Texas"),
    description:
      "The differences between an LPC, an LPC Associate, and a psychologist in Texas: training, supervision, and how to decide who to see.",
    eyebrow: "Getting started",
    heading: "LPC vs. LPC Associate vs. psychologist: what’s the difference in Texas?",
    intro:
      "Counselors and psychologists can both provide talk therapy. The main differences are in training and supervision. Here’s how the three titles compare in Texas.",
    blocks: [
      {
        heading: "What is an LPC Associate?",
        paragraphs: [
          "An LPC Associate holds a graduate degree in counseling and a Texas license, and practices under the supervision of a Council-approved LPC Supervisor. To move to a full LPC license, an associate completes at least 3,000 hours of supervised experience over at least 18 months, including at least 1,500 hours of direct counseling ([BHEC supervision FAQs](https://bhec.texas.gov/tbhec/supervision-faqs/); [22 TAC §681.92](https://www.law.cornell.edu/regulations/texas/22-Tex-Admin-Code-SS-681-92)).",
          "I’m an LPC Associate (#104391), supervised by Don Zablosky, LPC-S. More in [what is an LPC Associate?](/resources/what-is-an-lpc-associate/)",
        ],
      },
      {
        heading: "What is an LPC?",
        paragraphs: [
          "A Licensed Professional Counselor has finished the supervised experience and upgraded from the associate license ([BHEC](https://bhec.texas.gov/texas-state-board-of-examiners-of-professional-counselors/applying-for-an-lpc-license/upgrade-to-full-lpc/)).",
        ],
      },
      {
        heading: "What is a psychologist?",
        paragraphs: [
          "A licensed psychologist in Texas holds a doctoral degree in psychology, completes supervised experience, and passes national and state exams ([BHEC](https://bhec.texas.gov/texas-state-board-of-examiners-of-psychologists/applying-for-a-psychology-license/how-to-become-a-licensed-psychologist); [22 TAC §463.10](https://www.law.cornell.edu/regulations/texas/22-Tex-Admin-Code-SS-463-10)).",
        ],
      },
      {
        heading: "Which one should I see?",
        list: [
          "For talk therapy for anxiety, low mood, stress, or life changes, any of the three can be a good fit. Fit matters more than the title.",
          "If you’re looking for an ADHD or other formal evaluation, ask each provider directly whether they offer one.",
          "If you’re interested in medication, talk with a psychiatrist or another medical provider.",
        ],
      },
      {
        heading: "How do I check a license?",
        paragraphs: [
          "All three are licensed through the [Texas Behavioral Health Executive Council](https://bhec.texas.gov/), which lets you look up a license. For more on choosing, read [how to choose a therapist in Dallas](/resources/how-to-choose-a-therapist-dallas/).",
        ],
      },
    ],
    faqs: [
      {
        q: "Is an LPC Associate a real license?",
        a: "Yes. It’s a Texas license held while completing supervised experience under an approved supervisor.",
      },
      {
        q: "Can an LPC Associate offer telehealth?",
        a: "Yes, within the rules of the license and supervision. I offer telehealth to clients located anywhere in Texas.",
      },
      {
        q: "What if I want to explore medication?",
        a: "Talk with a psychiatrist or another medical provider, such as your primary care doctor.",
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
          : page.path === "outdoor-counseling"
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
        dateModified: page.published ?? PUBLISHED,
        inLanguage: "en-US",
        author: { ...SARAH, "@type": "Person", name: "Sarah Ateia", jobTitle: "LPC Associate" },
        publisher: PRACTICE,
      },
      breadcrumbs(
        ["Home", "https://www.sarahateia.com/"],
        ["Resources", url("resources")],
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
