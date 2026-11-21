# Climb: weekly SEO run for sarahateia.com

A scheduled Claude session runs this file. It fixes what's broken, finds searches where a page is
close to page 1, studies the pages that beat it, and improves one page. **It never publishes.**
Everything lands in a draft pull request, and nothing goes live until Sarah says "publish".

## Settings (the 5 lines to edit)

```
SITE:        https://www.sarahateia.com
AUDIENCE:    Adults in Dallas–Fort Worth looking for a counselor; telehealth anywhere in Texas
TOPICS:      anxiety, depression, ADHD, young adults, walk and talk / outdoor therapy, Arabic-speaking counseling, affordable self-pay therapy
CITIES:      Irving, Dallas, Las Colinas, Coppell, Grand Prairie, Farmers Branch
PAGES_PER_RUN: 1
```

## Rules that override everything below

Read `CLAUDE.md` first. Its compliance rules apply to every word this run writes. In particular:

- "Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S" stays on every page. Never
  "LPC" alone, "licensed counselor", "expert", "specialist", "best" or "top-rated" for Sarah.
- No testimonials, reviews, ratings, "clients say", guaranteed outcomes or cure language. Never
  copy these from a competitor, even when they are why the competitor ranks.
- No diagnosis, ADHD evaluation, prescribing or medication advice. Talk therapy only.
- Every research claim links to its source. If you can't find a reliable source, leave the claim
  out and list it under "Unsourced" in the PR.
- No new fees beyond $100/session, 6 for $540, 8 for $640. Never state a sliding-scale minimum.
- No street address. City pages only for the six CITIES above.
- Titles under 60 characters, keyword first. Meta descriptions under 155. One H1 per page.
- Write for an anxious person reading on a phone: plain, calm, short paragraphs. Never stuff
  keywords. If a sentence only exists for Google, cut it.
- Don't touch analytics, consent, hosting, DNS, `vercel.json` or the deploy workflow.
- Never merge, never push to `main`, never close or approve a pull request.

## Step 1. Health check (every run)

1. `npm ci`, then `npm run build`. A failed build is the first thing to fix.
2. `npm run seo:audit`. It checks every page for dead internal links, missing or long titles and
   descriptions, H1 count, canonical, fewer than 3 internal links pointing in, and page weight.
3. Fix every issue it reports, then rerun until it's clean. For a slow page, fix the cause (an
   oversized image, an image that should be `loading="lazy"`, a heavy import on one route) rather
   than raising the budget.
4. Also check outbound links in `src/content/pages.ts`: for each external URL, a quick request
   (HEAD, then GET if HEAD fails). List 404s and dead domains. Replace a dead research source
   only with an equally reliable one that says the same thing. Otherwise flag it.

## Step 2. Find the searches to climb

Use whatever ranking data is available, in this order:

1. **Google Search Console export**, if `seo/data/gsc-queries.csv` exists (columns: query, page,
   clicks, impressions, ctr, position). Best source: it includes small local searches.
2. **Semrush** (the Semrush connector): `resource_organic` for `sarahateia.com`, database `us`,
   `display_limit` 50, columns keyword, position, volume, url, keyword_difficulty. Keep API use
   under 1,000 units per run.

Pick candidates in this priority:

- Position 4–20 with real impressions or volume. These are "just off page 1" or low on it.
- If nothing is in 4–20 yet (normal for a new site), take positions 21–50 on pages that match the
  TOPICS and CITIES.
- Skip any page changed by a Climb run in the last 28 days (see `seo/log.md`). Rankings need a few
  weeks to settle; rewriting the same page every week resets the clock.
- Skip searches that don't fit a counseling practice or that would need medical claims (for
  example "ADHD test", "best psychiatrist").

Choose at most PAGES_PER_RUN pages. If there are no good candidates, say so and stop after Step 1.

## Step 3. Study who's winning

For each chosen search:

1. Search it (WebSearch). Take the top 3 organic results, skipping directories (Psychology Today,
   Zocdoc, Yelp, Headway, Healthline listings), since those win on domain size, not content.
2. Read each page. Note only what you can see: the title, headings, what questions they answer,
   rough length, local details (neighborhoods, parks, transit), FAQs, how quickly they answer
   the search, internal links, and schema types.
3. Write a short gap list: what they cover that Sarah's page doesn't, and what Sarah's page does
   better. Don't copy wording. Don't adopt anything the rules above forbid.

## Step 4. Improve the page

Edit the page's entry in `src/content/pages.ts` (or its route file). Typical fixes, most useful
first:

- Answer the search in the first two sentences.
- Add the missing subtopics from the gap list as short sections with clear headings.
- Add 2–3 FAQs people actually ask (they also become FAQ schema automatically).
- Sharpen the title and meta description around the search, within the length limits.
- Add internal links to and from closely related pages.
- Add real local detail for city pages (parks used for walk and talk, nearby areas), no address.

Then update that page's `<lastmod>` in `public/sitemap.xml` to today's date (never a future date).

## Step 5. Check and ship

1. `npm run build`, `npx tsc --noEmit -p .`, `npm run lint` (0 errors), `npm run seo:audit`.
   All must pass.
2. Append one entry to `seo/log.md`: date, ranking data used, searches chosen with their position,
   page changed, what changed, and anything flagged.
3. Commit, push to this session's branch, and open a **draft** pull request titled
   `Climb YYYY-MM-DD: <page>`. In the body:
   - Health check: what was broken and what you fixed.
   - Searches targeted, current position, and data source.
   - What the top 3 do that the page didn't, and what you changed.
   - Unsourced claims you left out, and anything that needs Don's review.
   - The Vercel preview link once it's posted.
4. Stop. Don't merge. Sarah reviews it, asks Don where needed, and says "publish".

If there's nothing worth changing this week, open no PR. Just append a short "no changes" entry to
`seo/log.md`, commit it, and push.
