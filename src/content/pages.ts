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
  outdoor: { label: "Walk and talk counseling outdoors", href: "/outdoor-counseling/" },
  telehealth: { label: "Telehealth counseling anywhere in Texas", href: "/telehealth-counseling/" },
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
    related: [LINK.outdoorFit, LINK.telehealth, LINK.consultation],
    title: `Walk and Talk Therapy & Outdoor Counseling in Dallas–Fort Worth | ${NAME}`,
    description:
      "Walk and talk therapy or seated sessions in a quiet Dallas–Fort Worth park, in English or Arabic. Here’s how privacy, weather, consent, and fees work.",
    eyebrow: "Outdoor sessions",
    heading: "Walk and talk counseling in Dallas–Fort Worth parks.",
    intro:
      "My in-person sessions happen outdoors instead of in an office, sometimes called walk and talk therapy. We meet in a quiet park in the Dallas–Fort Worth area that we choose together, and we either walk at an easy pace or sit.",
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
        q: "What is walk and talk therapy?",
        a: "It’s counseling while walking side by side outdoors, instead of sitting across from each other in an office. If walking isn’t comfortable, we sit on a bench or blanket instead. It’s the same counseling, just outside.",
      },
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
    related: [LINK.outdoor, LINK.arabic, LINK.consultation],
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
      "Plain-language guides on starting counseling in Texas, choosing a counselor, outdoor sessions, ADHD, attachment styles, healing after abuse, and self-care.",
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
