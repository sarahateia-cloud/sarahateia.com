// Kept apart from pages.ts so the header and footer don't pull in every page's text.
/** The main services, linked from the home page and every footer. */
export const SERVICES = [
  { label: "Anxiety therapy", href: "/anxiety-therapy-dallas/" },
  { label: "Depression counseling", href: "/depression-counseling-dallas/" },
  { label: "Adult ADHD counseling", href: "/adhd-therapy/" },
  { label: "Young adults", href: "/young-adult-counseling/" },
  { label: "Holistic counseling", href: "/holistic-counseling/" },
  { label: "Walk and talk therapy", href: "/walk-and-talk-therapy-dallas/" },
  { label: "Online therapy in Texas", href: "/telehealth-counseling-texas/" },
  { label: "Counseling in Arabic", href: "/arabic-counseling/" },
  { label: "Affordable therapy", href: "/affordable-therapy-dallas/" },
];

/** Helpful reading, linked from every footer so no guide depends on a single link. */
export const FOOTER_RESOURCES = [
  { label: "About Sarah", href: "/about/" },
  { label: "Current clients: book a session", href: "/new-clients/#book-session" },
  { label: "Resources", href: "/resources/" },
  { label: "Blog", href: "/blog/" },
  { label: "What is an LPC Associate?", href: "/resources/what-is-an-lpc-associate/" },
  { label: "Therapy cost without insurance", href: "/resources/therapy-cost-without-insurance/" },
  { label: "What is holistic therapy?", href: "/resources/what-is-holistic-therapy/" },
  { label: "Glossary", href: "/glossary/" },
  { label: "Self-reflection", href: "/resources/self-reflection/" },
  { label: "Screening tools", href: "/screening-tools/" },
  { label: "Calming tools", href: "/tools/" },
];

/** The cities served in person, plus statewide telehealth. Linked from every footer. */
export const FOOTER_AREAS = [
  { label: "Irving", href: "/counseling-irving-tx/" },
  { label: "Dallas", href: "/counseling-dallas-tx/" },
  { label: "Las Colinas", href: "/counseling-las-colinas-tx/" },
  { label: "Coppell", href: "/counseling-coppell-tx/" },
  { label: "Grand Prairie", href: "/counseling-grand-prairie-tx/" },
  { label: "Farmers Branch", href: "/counseling-farmers-branch-tx/" },
  { label: "Telehealth in Texas", href: "/telehealth-counseling-texas/" },
];

/** Blog cards for the home page. Kept here, not in pages.ts, so the home page stays light. */
export const BLOG_CARDS = [
  {
    eyebrow: "Genes and mental health",
    title: "Can Your Genes Affect Your Mental Health? What COMT and MTHFR Can (and Can’t) Tell You",
    href: "/blog/genes-and-mental-health/",
  },
  {
    eyebrow: "Genes and anxiety",
    title: "The COMT Gene and Anxiety: Are You a “Warrior” or a “Worrier”?",
    href: "/blog/comt-gene-anxiety/",
  },
];
