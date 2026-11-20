# sarahateia.com: rules for Claude Code

Counseling practice website for Sarah Ateia, LPC Associate (Texas). The live site deploys to GitHub Pages from `main` (see `.github/workflows/deploy.yml`), so anything that lands on `main` goes live.

## Git workflow (standing rule)
- Never commit directly to `main`. `main` is protected and only takes merged pull requests.
- After finishing each feature, without asking: create a branch, commit, push, and open a pull request into `main`. Give Sarah the PR link and any preview link.
- Only merge the PR into `main` (which publishes the site live) when Sarah says "publish".
- If she says "commit and publish", run the same flow: branch, commit, push, PR, then merge.

## Compliance check before every publish (Texas LPC Associate advertising rules)
- Every page that mentions counseling services must show "Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S", with the supervisor's name directly following hers.
- No testimonials, client quotes, review widgets, star ratings, Review or AggregateRating schema, or "clients say" language.
- No guaranteed outcomes or "cure" language.
- No client details or case examples, even anonymized.
- Service, city and resource pages link to `/crisis/`.
- Never publish her home address. Location is Irving / Dallas–Fort Worth, with telehealth across Texas.
- If a change might affect any of the above, flag it so her supervisor can review it before she says "publish".

## Content direction
- Articles stay objective and healing-focused. They feature holistic grounding and research-based mind-body approaches, and target keywords people commonly search in Dallas.
- Don't lean heavily on faith. The Arabic counseling page is about language and culture.
- Source every research claim. Flag anything unsourced instead of inventing it.
