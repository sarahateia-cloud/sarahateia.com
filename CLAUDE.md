# CLAUDE.md — sarahateia.com

Website for Sarah Ateia, M.S., LPC Associate (Texas #104391), NCC, supervised by Don Zablosky,
LPC-S, LMFT-S, NCC. Self-pay counseling: walk and talk sessions in Dallas–Fort Worth (home base
Irving, usually Sam Houston Trail Park) and telehealth anywhere in Texas. Visitors are often
anxious and reading on a phone, so pages should feel calm, plain and trustworthy.

## Workflow (standing rules from Sarah)

- After each finished feature, **commit and push to a preview branch without asking**. Never
  push to `main` directly.
- Open a draft pull request for the preview branch if none is open, so Vercel builds a preview.
- **Only merge to `main` (which publishes the live site) when Sarah says "publish."**
- Before any publish, check that every page that mentions counseling services shows
  "Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S" and has no testimonials,
  review widgets or star ratings.
- Run `npm run build`, `npx tsc --noEmit -p .` and `npm run lint` (0 errors) before every push.

## Stack

- Vite + React + TypeScript + TanStack Router, prerendered by `scripts/postbuild.mjs`
  (per-page titles, meta, canonical, JSON-LD, sitemap and indexing checks).
- Live site: GitHub Pages via `.github/workflows/deploy.yml` on push to `main`
  (www.sarahateia.com). GitHub Pages can't send custom headers or real 301s; `vercel.json`
  only applies to Vercel previews.
- Service pages and articles live in `src/content/pages.ts`; services list for nav/footer in
  `src/content/services.ts`.
- After deploy, `scripts/indexnow.mjs` submits pages whose sitemap `<lastmod>` changed, so update
  `public/sitemap.xml` lastmod whenever a page's content changes. Never use a future date.

## Compliance (every page, existing and new)

- Supervisor disclosure directly after Sarah's name: "Sarah Ateia, LPC Associate, supervised by
  Don Zablosky, LPC-S". Always "LPC Associate", never "LPC" alone, "licensed counselor",
  "expert", "specialist" or "Dr." for Sarah. Never present her as independent ("my private
  practice", "owner").
- No testimonials, client quotes, review widgets, star ratings, Review or AggregateRating
  schema, or "clients say" language.
- No guaranteed outcomes or cure language. No client details or case examples, even anonymized.
- Never claim Sarah diagnoses, evaluates ADHD or prescribes. Talk therapy only.
- Link to `/crisis/` from every service, city and resource page (the footer covers this).
- Don't publish exact fees beyond what's already approved ($100/session, 6 for $540, 8 for $640).
  Never state the sliding-scale minimum.
- No home or street address anywhere. Schema uses Irving, TX locality only.
- Every research claim links to its source. If a claim can't be sourced, flag it instead of
  inventing a citation.
- No contact form fields that ask for health information.

## SEO conventions

- One H1 per page. Titles under 60 characters, keyword first. Meta descriptions under 155.
- City pages only for areas served in person: Irving, Dallas, Las Colinas, Coppell, Grand
  Prairie, Farmers Branch. Telehealth covers the rest of Texas.
- Every page gets at least 3 internal links pointing to it.

## Limits

- Never print, request or commit secrets. Analytics/consent behaviour changes need Sarah's OK.
- Don't change hosting or DNS. Keep the RBP and Premium-Wheel projects out of this repo.
- Respect `prefers-reduced-motion`; only animate transform and opacity; no scroll hijacking.
