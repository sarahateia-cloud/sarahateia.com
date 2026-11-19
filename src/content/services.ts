// Kept apart from pages.ts so the header and footer don't pull in every page's text.
/** The main services, linked from the home page and every footer. */
export const SERVICES = [
  { label: "Anxiety therapy", href: "/anxiety-therapy-dallas/" },
  { label: "Depression counseling", href: "/depression-counseling-dallas/" },
  { label: "ADHD therapy", href: "/adhd-therapy/" },
  { label: "Young adults", href: "/young-adult-counseling/" },
  { label: "Holistic counseling", href: "/holistic-counseling/" },
  { label: "Walk and talk therapy", href: "/outdoor-counseling/" },
  { label: "Online therapy in Texas", href: "/telehealth-counseling/" },
  { label: "Counseling in Arabic", href: "/arabic-counseling/" },
];

/** Helpful reading, linked from every footer so no guide depends on a single link. */
export const FOOTER_RESOURCES = [
  { label: "Resources", href: "/resources/" },
  { label: "What is an LPC Associate?", href: "/resources/what-is-an-lpc-associate/" },
  { label: "Therapy cost without insurance", href: "/resources/therapy-cost-without-insurance/" },
  { label: "What is holistic therapy?", href: "/resources/what-is-holistic-therapy/" },
  { label: "Glossary", href: "/glossary/" },
];
