// After each deploy, tells IndexNow search engines (Bing, Yandex, Seznam, Naver and others)
// which pages changed. A page counts as changed when it's new in public/sitemap.xml or its
// <lastmod> date moved, so keep lastmod current when a page's content changes.
// Usage: node scripts/indexnow.mjs <previous commit>   (INDEXNOW_DRY_RUN=1 prints instead of sending)
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const HOST = "www.sarahateia.com";
const KEY = "a67899caa52f01c498954af481313bd4"; // Public by design; served at /<key>.txt.

const readSitemap = (xml) =>
  new Map(
    [...xml.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)].map((m) => [
      m[1],
      m[2],
    ]),
  );

const current = readSitemap(readFileSync("public/sitemap.xml", "utf8"));
const before = process.argv[2] ?? "";
let previous = new Map();
if (before && !/^0+$/.test(before)) {
  try {
    previous = readSitemap(
      execFileSync("git", ["show", `${before}:public/sitemap.xml`], { encoding: "utf8" }),
    );
  } catch {
    console.log("Couldn't read the previous sitemap, so every page will be submitted.");
  }
}

const urlList = [...current]
  .filter(([url, date]) => previous.get(url) !== date)
  .map(([url]) => url);
if (urlList.length === 0) {
  console.log("No pages changed in the sitemap. Nothing to submit.");
  process.exit(0);
}

const body = { host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList };
if (process.env.INDEXNOW_DRY_RUN) {
  console.log(JSON.stringify(body, null, 2));
  process.exit(0);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});
console.log(
  `IndexNow answered ${res.status} for ${urlList.length} page(s):\n${urlList.join("\n")}`,
);
if (!res.ok) {
  console.error(await res.text());
  process.exitCode = 1;
}
