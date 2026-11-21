// Kept apart from arabic.ts so the header can check it without loading all the Arabic text.
// While true: the Arabic pages show a DRAFT banner and are noindex, they stay out of the sitemap,
// English pages show no language toggle, and no hreflang links are added. Flip to false only after
// Sarah has approved the Arabic text and said "publish". The pages stay reachable at /ar/,
// /ar/about/ and /ar/arabic-counseling/ for review.
export const AR_DRAFT = true;
