#!/usr/bin/env node
/*
 * IndexNow (Bing, Yandex, Seznam, Naver and others): after each GitHub Pages deploy, submit every
 * URL in the live sitemap so these search engines recrawl them.
 *
 * The key is public by design. It lives in public/<key>.txt (contents = the key) and is served at
 * https://www.sarahateia.com/<key>.txt. Search engines fetch that file to confirm we own the site.
 *
 * Usage: node scripts/indexnow-submit.mjs [--origin https://www.sarahateia.com] [--dry-run]
 */
const KEY = "c988a80ba70cec0303b4474c0fda959d";
const ENDPOINT = "https://api.indexnow.org/indexnow";

const argv = process.argv.slice(2);
const flag = (name) => {
  const i = argv.indexOf(name);
  return i >= 0 ? argv[i + 1] : undefined;
};
const origin = (flag("--origin") || "https://www.sarahateia.com").replace(/\/$/, "");
const dryRun = argv.includes("--dry-run");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "sarahateia-indexnow/1.0" },
    signal: AbortSignal.timeout(20_000),
  });
  return { status: res.status, text: await res.text() };
}

// GitHub Pages can take a minute or two to serve a new deploy, so wait for the key file.
let keyLive = false;
for (let attempt = 1; attempt <= 12 && !keyLive; attempt++) {
  const res = await get(`${origin}/${KEY}.txt`).catch(() => ({ status: 0, text: "" }));
  keyLive = res.status === 200 && res.text.trim() === KEY;
  if (!keyLive) {
    console.log(`Key file not live yet (attempt ${attempt}, status ${res.status}); waiting 15s`);
    await sleep(15_000);
  }
}
if (!keyLive) {
  console.error(`Key file ${origin}/${KEY}.txt never became live; nothing submitted.`);
  process.exit(1);
}

const sitemap = await get(`${origin}/sitemap.xml`);
if (sitemap.status !== 200) {
  console.error(`Sitemap returned ${sitemap.status}; nothing submitted.`);
  process.exit(1);
}
const host = new URL(origin).host;
const urls = [
  ...new Set(
    [...sitemap.text.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) =>
      m[1].replace(/&amp;/g, "&"),
    ),
  ),
].filter((u) => new URL(u).host === host);
console.log(`${urls.length} sitemap URLs for ${host}`);
if (!urls.length || dryRun) process.exit(0);

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host,
    key: KEY,
    keyLocation: `${origin}/${KEY}.txt`,
    urlList: urls.slice(0, 10_000),
  }),
  signal: AbortSignal.timeout(20_000),
});
// 200 = accepted; 202 = accepted, key validation pending.
if (res.status !== 200 && res.status !== 202) {
  console.error(`IndexNow returned ${res.status}: ${(await res.text()).slice(0, 300)}`);
  process.exit(1);
}
console.log(`IndexNow accepted ${urls.length} URLs (${res.status}).`);
