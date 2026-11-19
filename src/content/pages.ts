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
  /** Articles only: the date this article first went live (YYYY-MM-DD). Defaults to PUBLISHED. */
  published?: string;
};

const LINK = {
  arabic: { label: "Counseling in Arabic", href: "/arabic-counseling/" },
  outdoor: { label: "Walk and talk therapy in Dallas–Fort Worth", href: "/outdoor-counseling/" },
  telehealth: { label: "Online therapy anywhere in Texas", href: "/telehealth-counseling/" },
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
    label: "Sliding scale therapy in Dallas: how it works",
    href: "/resources/sliding-scale-therapy-dallas/",
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
  screening: { label: "Optional screening tools", href: "/screening-tools/" },
  crisis: { label: "Crisis resources in Dallas–Fort Worth", href: "/crisis/" },
};

const NAME = "Sarah Ateia Khattab, LPC Associate, supervised by Don Zablosky, LPC-S";
const PUBLISHED = "2026-11-05";

export const TOPICS: ContentPage[] = [
  {
    path: "arabic-counseling",
    related: [LINK.culture, LINK.muslimFaith, LINK.consultation, LINK.telehealth],
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
    related: [LINK.walkTalk, LINK.outdoorFit, LINK.anxiety, LINK.telehealth],
    title: "Walk and Talk Therapy in Dallas–Fort Worth, TX",
    description:
      "Walk and talk therapy outdoors in Dallas–Fort Worth, usually at Sam Houston Trail Park in Irving. How sessions, privacy, and weather work.",
    eyebrow: "Walk and talk therapy",
    heading: "Walk and talk therapy in Dallas–Fort Worth.",
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
        heading: "Why do some people prefer walk and talk therapy?",
        paragraphs: [
          "Talking side by side can feel less intense than sitting face to face, and some people find the words come more easily while they’re moving. Research links regular physical activity and time in nature with lower stress and better mood. Studies on walk and talk therapy itself are still small, so think of it as a different setting for counseling rather than a different treatment.",
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
    path: "telehealth-counseling",
    related: [LINK.youngAdult, LINK.anxiety, LINK.depression, LINK.consultation],
    title: "Online Therapist in Texas | Telehealth Counseling",
    description:
      "Online therapy by video for anyone in Texas, for anxiety, depression, ADHD, and life transitions. Self-pay, sliding scale, free 15-minute call.",
    eyebrow: "Online therapy",
    heading: "Online therapy anywhere in Texas.",
    intro:
      "If getting to a park doesn’t work for you, or you’d rather talk from home, I offer online therapy by video for anyone who is physically located in Texas at the time of each session, whether that’s Dallas, Austin, Houston, or a small town in between. Sessions are available in English or Arabic.",
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
          "Anxiety, stress, and overthinking",
          "Depression and low mood",
          "ADHD, focus, and keeping up with daily life",
          "Young adult transitions, like school, work, and moving out",
          "Burnout and emotional exhaustion",
          "Relationship patterns and self-esteem",
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
    ],
    faqs: [
      {
        q: "Do you offer online therapy?",
        a: "Yes. Online therapy by video is available to clients who are located in Texas at the time of each session.",
      },
      {
        q: "Is online therapy as helpful as in-person?",
        a: "For many people, yes. Research has found that video counseling works about as well as in-person counseling for common concerns like anxiety and depression. What matters most is that you feel comfortable.",
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
    related: [LINK.anxiety, LINK.adhd, LINK.outdoor, LINK.slidingScale],
    title: "Young Adult Counseling & Therapy in Dallas–Fort Worth",
    description:
      "Counseling for young adults facing anxiety, low mood, ADHD, and big life changes. Walk and talk in Dallas–Fort Worth or online in Texas.",
    eyebrow: "Young adults",
    heading: "Counseling for young adults.",
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
    related: [LINK.depression, LINK.youngAdult, LINK.outdoor, LINK.screening],
    title: "Anxiety Therapist in Dallas | Walk & Talk or Online",
    description:
      "Talk therapy for anxiety and stress in Dallas–Fort Worth: walk and talk sessions outdoors or online across Texas. Sliding scale, free 15-minute call.",
    eyebrow: "Anxiety therapy",
    heading: "Anxiety therapy in Dallas–Fort Worth.",
    intro:
      "Anxiety can look like constant worry, a racing mind at night, a tight chest before work, or avoiding things you used to handle fine. I work with people in Dallas, Fort Worth, and across Texas to understand what’s driving their anxiety and build steadier ways to cope.",
    blocks: [
      {
        heading: "What does anxiety feel like?",
        list: [
          "Worry that’s hard to switch off",
          "Restlessness, muscle tension, or a racing heart",
          "Trouble falling or staying asleep",
          "Irritability or feeling on edge",
          "Avoiding people, places, or tasks",
          "Overthinking decisions or replaying conversations",
        ],
      },
      {
        heading: "What does anxiety therapy in Dallas look like?",
        paragraphs: [
          "We start by getting curious about your anxiety: when it shows up, what it might be trying to protect you from, and what tends to make it better or worse. From there we work on practical skills, like slowing your breathing, noticing anxious thoughts without getting pulled under by them, and taking small steps toward the things you’ve been avoiding.",
          "Anxiety lives in the body as much as the mind, so we also look at sleep, movement, and stress. Research links regular physical activity and time in nature with lower stress and anxiety, which is one reason I offer walk and talk sessions.",
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
      {
        heading: "What if I need help right away?",
        paragraphs: [
          "Counseling isn’t a crisis service. If you’re thinking about harming yourself, call or text 988, call 911, or go to the nearest emergency room.",
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
    related: [LINK.anxiety, LINK.selfCare, LINK.outdoor, LINK.screening],
    title: "Depression Counseling in Dallas | Walk & Talk or Online",
    description:
      "Talk therapy for depression and low mood in Dallas–Fort Worth: walk and talk outdoors or online across Texas. Sliding scale, free 15-minute call.",
    eyebrow: "Depression counseling",
    heading: "Depression counseling in Dallas–Fort Worth.",
    intro:
      "Depression isn’t only sadness. It can feel like numbness, exhaustion, losing interest in things you used to enjoy, or a heaviness that makes ordinary days hard. I offer depression counseling in Dallas–Fort Worth and online across Texas, at a pace that feels manageable.",
    blocks: [
      {
        heading: "What are common signs of depression?",
        list: [
          "Low mood most days, or feeling empty or flat",
          "Losing interest in friends, hobbies, or work",
          "Sleeping much more or much less than usual",
          "Changes in appetite or energy",
          "Trouble concentrating or making decisions",
          "Feeling worthless, guilty, or like a burden",
        ],
        paragraphs: [
          "If several of these have lasted two weeks or more, it’s worth talking to someone. A counselor or your doctor is a good place to start.",
        ],
      },
      {
        heading: "What does depression counseling look like?",
        paragraphs: [
          "Counseling gives you a steady place to talk about what’s weighing on you without having to hold it all together. I listen first. Then we look at patterns in your thoughts, relationships, and daily rhythms, and find small, realistic steps that help you feel more like yourself.",
          "I take a mind-body view. Research shows that regular movement can ease symptoms of depression, and sleep, daylight, and connection with others matter too. Walk and talk sessions build some of that in, and we can work on routines that support your mood between sessions.",
        ],
      },
      {
        heading: "Where do sessions happen?",
        list: [
          "Walk and talk sessions outdoors, usually at Sam Houston Trail Park in Irving, or another quiet park we choose together",
          "Online therapy from anywhere in Texas, for days when leaving home feels like too much",
          "Within driving distance of Dallas, Fort Worth, Arlington, Plano, Carrollton, Grand Prairie, and Coppell",
        ],
      },
      {
        heading: "What if I need help right away?",
        paragraphs: [
          "If you’re thinking about suicide or harming yourself, call or text 988, call 911, or go to the nearest emergency room. Counseling isn’t a crisis service.",
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
        a: "Yes. I’m self-pay only, and a sliding scale is available based on household income.",
      },
    ],
  },
];

export const ARTICLES: ContentPage[] = [
  {
    path: "resources/free-counseling-consultation",
    related: [LINK.associate, LINK.outdoor, LINK.telehealth],
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
    related: [LINK.consultation, LINK.arabic, LINK.outdoor],
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
    related: [LINK.outdoor, LINK.telehealth, LINK.consultation],
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
    related: [LINK.arabic, LINK.muslimFaith, LINK.consultation, LINK.telehealth],
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
  {
    path: "resources/therapist-who-respects-muslim-faith",
    published: "2026-11-18",
    related: [
      LINK.selfCare,
      LINK.attachment,
      LINK.adhd,
      LINK.abuseRecovery,
      LINK.culture,
      LINK.consultation,
    ],
    title: `Finding a Holistic Therapist in Dallas Who Respects Your Faith | ${NAME}`,
    description:
      "How to find a counselor in Dallas–Fort Worth who respects your faith and culture, what holistic, mind-body counseling looks like, and what research says about grounding, sleep, movement, and nature.",
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
    related: [LINK.screening, LINK.selfCare, LINK.outdoor],
    title: `Creative Strategies for Adults With ADHD in Dallas | ${NAME}`,
    description:
      "Practical, creative ways adults with ADHD can manage time, tasks, and stress, plus how the body, movement, and counseling fit in. Educational only, not a diagnosis.",
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
    related: [LINK.abuseRecovery, LINK.selfCare, LINK.consultation],
    title: `How Attachment Styles Affect Relationships | ${NAME}`,
    description:
      "A plain-language guide to secure, anxious, avoidant, and disorganized attachment, how they show up in relationships, and how people move toward more secure ways of relating.",
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
    related: [LINK.crisis, LINK.attachment, LINK.telehealth],
    title: `How to Heal After an Abusive Relationship | ${NAME}`,
    description:
      "What recovery after an abusive relationship can look like, common reactions, steps that support healing, and where to find 24/7 help in Dallas–Fort Worth and across the U.S.",
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
    related: [LINK.adhd, LINK.attachment, LINK.outdoor],
    title: `What Self-Care for Mental Health Really Looks Like | ${NAME}`,
    description:
      "Research-informed self-care for mental health: sleep, movement, connection, grounding, and limits. A holistic check-in and signs it may be time to talk with a counselor.",
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
    related: [LINK.slidingScale, LINK.consultation, LINK.telehealth],
    title: "How Much Does Therapy Cost Without Insurance in Texas?",
    description:
      "What therapy costs without insurance in Texas, what affects the price, your right to a Good Faith Estimate, and practical ways to lower the cost.",
    eyebrow: "Fees",
    heading: "How much does therapy cost without insurance in Texas?",
    intro:
      "Without insurance, you pay the counselor’s fee directly. Fees vary a lot depending on the counselor’s license, experience, location, and session length, so it’s worth asking up front. My standard fee is $100 per session, and a sliding scale and session packages are available.",
    blocks: [
      {
        heading: "What affects the price",
        list: [
          "The type of license, such as LPC Associate, LPC, psychologist, or psychiatrist",
          "Years of experience and specialized training",
          "Session length and how often you meet",
          "Where you live, and whether sessions are in an office, outdoors, or online",
          "Whether the counselor offers a sliding scale or packages",
        ],
      },
      {
        heading: "Why some people choose to pay out of pocket",
        paragraphs: [
          "Paying yourself means nothing is sent to an insurance company, and you and your counselor decide together how often to meet. The trade-off is cost, so it helps to know your options.",
        ],
      },
      {
        heading: "Your right to a Good Faith Estimate",
        paragraphs: [
          "Under the federal No Surprises Act, if you don’t have insurance or choose not to use it, you have the right to a written Good Faith Estimate of expected charges before services start. If your bill comes in at least $400 more than the estimate, you can dispute it. You can learn more at cms.gov/nosurprises.",
        ],
      },
      {
        heading: "Ways to lower the cost",
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
        heading: "What I charge",
        paragraphs: [
          "My standard fee is $100 per session, for walk and talk sessions in Dallas–Fort Worth or online therapy anywhere in Texas. A sliding scale based on household income and session packages are available. I’m self-pay only and don’t bill insurance. You can ask about cost during a free 15-minute phone call before committing to anything.",
        ],
      },
    ],
    faqs: [
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
        q: "What is a Good Faith Estimate?",
        a: "A written estimate of what your care is expected to cost. If you’re paying for yourself, you have the right to receive one before services start.",
      },
    ],
  },
  {
    path: "resources/sliding-scale-therapy-dallas",
    published: "2026-11-19",
    related: [LINK.cost, LINK.consultation, LINK.telehealth],
    title: "Sliding Scale Therapy in Dallas: How It Works",
    description:
      "How sliding scale therapy works, how to ask for a reduced fee without awkwardness, and other lower-cost counseling options in Dallas–Fort Worth.",
    eyebrow: "Fees",
    heading: "Sliding scale therapy in Dallas: how it works.",
    intro:
      "Sliding scale therapy means the fee changes based on what you can afford, usually your household income and size. It makes counseling possible for people who can’t pay a full fee and don’t want to, or can’t, use insurance.",
    blocks: [
      {
        heading: "How a sliding scale usually works",
        list: [
          "The counselor sets a range of fees instead of one fixed price",
          "Your fee is based on things like household income and how many people it supports",
          "Some counselors ask for income details, while others go by what you tell them",
          "The fee is agreed on before you start and included in your Good Faith Estimate",
          "Your fee can be revisited if your situation changes",
        ],
      },
      {
        heading: "How to ask for it",
        paragraphs: [
          "It’s normal to ask, and you don’t need to explain your whole financial situation on the first call. “Do you offer a sliding scale?” is enough. A good counselor will make that conversation easy.",
        ],
      },
      {
        heading: "My sliding scale",
        paragraphs: [
          "I’m self-pay only, and reduced rates are available based on household income, for walk and talk sessions in Dallas–Fort Worth and online therapy anywhere in Texas. Ask during your free 15-minute consultation, and we’ll agree on a fee before your first session.",
        ],
      },
      {
        heading: "Other lower-cost options in Dallas–Fort Worth",
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
    title: "What Is Walk and Talk Therapy? How It Works",
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
          "There isn’t much research on walk and talk therapy itself yet, and most of what exists is small. It builds on two well-studied ideas, though. Regular physical activity is linked with lower anxiety and depression, and time in green spaces is linked with lower stress. Many people also say that walking side by side, without constant eye contact, makes hard conversations feel a little easier.",
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
        q: "Can I switch between walking and online sessions?",
        a: "With me, yes. You can mix walk and talk and online sessions depending on the weather and your week.",
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
        // Outdoor sessions only happen in Dallas–Fort Worth parks. Telehealth reaches all of Texas.
        areaServed:
          page.path === "outdoor-counseling"
            ? { "@type": "Place", name: "Dallas–Fort Worth metroplex" }
            : { "@type": "State", name: "Texas" },
      },
      breadcrumbs(["Home", "https://www.sarahateia.com/"], [crumb(page), url(page.path)]),
      ...faqLabel(page),
    ],
  })),
  {
    path: "resources",
    title: `Counseling Resources and Guides | ${NAME}`,
    description:
      "Plain-language guides on therapy costs and sliding scales in Texas, walk and talk therapy, choosing a counselor, ADHD, attachment styles, healing after abuse, and self-care.",
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
        author: SARAH,
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
  title: `Counseling Glossary in English and Arabic | ${NAME}`,
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
