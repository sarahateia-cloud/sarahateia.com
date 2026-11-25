# AEO: getting sarahateia.com cited by AI answer engines

Semrush AI Visibility / AIO tracking isn't on Sarah's plan, so track by hand once a month
(first Monday). Use a logged-out or private window. Note for each engine whether
sarahateia.com is **cited** (linked as a source), **named** (Sarah mentioned, no link) or **absent**.

| # | Prompt | ChatGPT | Perplexity | Google AI Overview | Copilot |
|---|---|---|---|---|---|
| 1 | Arabic speaking therapist in Dallas | | | | |
| 2 | Walk and talk therapy Dallas | | | | |
| 3 | Outdoor therapy near Irving TX | | | | |
| 4 | Affordable therapist Dallas without insurance | | | | |
| 5 | Online therapy in Texas self-pay | | | | |
| 6 | What is an LPC Associate in Texas | | | | |
| 7 | What is ADHD burnout | | | | |
| 8 | How to manage stress, when to see a counselor | | | | |
| 9 | Life transitions counseling Dallas | | | | |
| 10 | Therapist who respects Muslim faith Dallas | | | | |
| 11 | Sliding scale therapy Dallas | | | | |
| 12 | Who is Sarah Ateia counselor | | | | |

Baseline: not yet taken (first check due Monday 2026-12-07, after the new guides are indexed).

## What's on the site (done)

- llms.txt (every listed page, enforced by the build) and llms-full.txt (full readable text).
- robots.txt names AI crawlers as allowed.
- Every guide: question headings, key takeaways at the top, FAQ schema, Article schema with
  author, dates and `citation` list, sources linked inline.
- Consistent entity: "Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S", Irving TX,
  (972) 482-9526 on every page and in schema.
- IndexNow submits every sitemap URL after deploy (Bing, Copilot and ChatGPT search use Bing's index).

## Biggest remaining levers (off-site; need Don's OK before anything goes public)

1. **Arabic pages live** (`AR_DRAFT=false` after Sarah reviews the text). Arabic answers are the
   least competitive niche and the clearest differentiator. Sarah's action, then "publish".
2. **Google Business Profile verified** (drafted in the directory thread). AI Overviews and local
   packs lean on it.
3. **Bing Places** (imports from Google after GBP). Feeds Copilot and ChatGPT search.
4. **Psychology Today fixes** (name with supervisor, Irving, walk and talk, Arabic). AI engines
   quote directory profiles heavily for "therapist in [city]" prompts.
5. **ChatGPT Business Hub** claim (free beta; Sarah signs in and does the ID check).
6. **Mentions on trusted sites**: MAPS DFW listing, university counseling referral lists,
   counselingtexas.org. Templates already drafted in the referral thread.
