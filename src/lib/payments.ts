// Stripe Payment Links for session fees. Paste each link from the Stripe
// dashboard (Product catalog → Payment Links). Links are public URLs, not
// secrets. Never put API keys here. While a link is empty, its button is
// hidden, and the whole section is hidden until at least one link is set.
//
// Keep Stripe product names plain ("Session", "6-session package") and never
// add health or clinical details in Stripe: Stripe does not sign a BAA.
export const PAYMENT_LINKS: { label: string; price: string; href: string }[] = [
  {
    label: "One session",
    price: "$100",
    href: "https://buy.stripe.com/test_00wdRa3H17rx5758uy4Vy00",
  },
  {
    label: "6-session package",
    price: "$540",
    href: "https://buy.stripe.com/test_eVq7sM3H19zFeHF8uy4Vy01",
  },
  {
    label: "8-session package",
    price: "$640",
    href: "https://buy.stripe.com/test_bJe14odhBdPV8jhh144Vy02",
  },
];

export const ACTIVE_PAYMENT_LINKS = PAYMENT_LINKS.filter((link) =>
  link.href.startsWith("https://buy.stripe.com/"),
);
