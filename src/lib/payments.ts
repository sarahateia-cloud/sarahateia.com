// Stripe Payment Links for session fees. Paste each link from the Stripe
// dashboard (Product catalog → Payment Links). Links are public URLs, not
// secrets. Never put API keys here. While a link is empty, its button is
// hidden, and the whole section is hidden until at least one link is set.
//
// Keep Stripe product names plain ("Session", "6-session package") and never
// add health or clinical details in Stripe: Stripe does not sign a BAA.
export const PAYMENT_LINKS: { label: string; price: string; href: string }[] = [
  { label: "One session", price: "$100", href: "https://buy.stripe.com/cNi3cwdh76PT6K00j83cc00" },
  {
    label: "6-session package",
    price: "$540",
    href: "https://buy.stripe.com/eVq7sMdh75LPgkA3vk3cc01",
  },
  {
    label: "8-session package",
    price: "$640",
    href: "https://buy.stripe.com/dRmdRa4KB0rvgkA9TI3cc02",
  },
];

export const ACTIVE_PAYMENT_LINKS = PAYMENT_LINKS.filter((link) =>
  link.href.startsWith("https://buy.stripe.com/"),
);
