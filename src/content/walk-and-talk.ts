// Extra sections for the walk and talk page (/walk-and-talk-therapy-dallas/). The page's title,
// intro, remaining blocks, FAQ and related links stay in pages.ts so its search labels and FAQ
// schema keep working. Don't name the park here: "a quiet park we choose together".

export const WALK_STEPS = [
  {
    title: "A free 15-minute call",
    body: "We talk by phone about what you’re looking for and whether walking outdoors suits you. If it does, you’ll get a short outdoor-session consent form covering privacy, weather and safety to review and sign before we meet.",
  },
  {
    title: "Meet at a quiet park",
    body: "We meet at an agreed spot in a quiet park we choose together, usually in Irving, a central meeting point for Dallas and nearby cities.",
  },
  {
    title: "Walk, talk, or sit",
    body: "We walk side by side at whatever pace feels right, or settle on a bench. You set the pace, we can stop anytime, and the session is the same counseling you’d have indoors, in English or Arabic.",
  },
];

export const WEATHER_TIPS = [
  {
    title: "Texas summers",
    body: "We choose shaded paths and cooler times of day. Bring water, and a hat and sunscreen help.",
  },
  {
    title: "Cooler months",
    body: "Wear a layer you can take off once we warm up. Gloves are welcome on a windy morning.",
  },
  {
    title: "Shoes and clothes",
    body: "Comfortable shoes and everyday clothes you can walk in. No workout gear needed: the pace is easy.",
  },
  {
    title: "Storms, ice or extreme heat",
    body: "When it’s too hot, cold or stormy to meet comfortably, we move that session online instead of canceling it.",
  },
];

export const PRIVACY_POINTS = [
  "We walk at a quiet pace and pause when others pass, then pick up where we left off.",
  "We choose quieter stretches of trail and can move to a more private spot at any time.",
  "If you see someone you know, you decide what happens next. We can simply look like two people out for a walk.",
  "Parks are public places, so complete privacy can’t be guaranteed. You can switch to online sessions whenever you prefer.",
];

/** Each research claim links to its source. */
export const RESEARCH = [
  {
    text: "An umbrella review that pulled together earlier reviews of outdoor and nature-based therapies found mostly positive results for mental health, while noting that studies rarely spell out what nature itself adds to the work.",
    cite: "Harper et al., 2021",
    url: "https://doi.org/10.3390/ijerph18105117",
  },
  {
    text: "A large review of 97 earlier reviews found physical activity was linked with lower symptoms of depression and anxiety.",
    cite: "Singh et al., 2023",
    url: "https://doi.org/10.1136/bjsports-2022-106195",
  },
  {
    text: "In a study of 36 city residents, a nature break of 20 to 30 minutes gave the biggest drop in the stress hormone cortisol for the time spent.",
    cite: "Hunter et al., 2019",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6458297/",
  },
];
