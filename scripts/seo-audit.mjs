// Weekly SEO health check on the built site (run `npm run build` first). Prints a JSON report of
// anything broken and exits 1 if there's something to fix. Used by seo/CLIMB.md.
//
// Checks every listed page for: a working title under 60 characters, a meta description under
// 155, exactly one H1, a canonical, internal links that point at real pages, at least 3 internal
// links pointing to it, and page weight (HTML + its scripts, styles and images).
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { gzipSync } from "node:zlib";

const SITE = "https://www.sarahateia.com";
const DIST = "dist";
// Budgets for a calm site read on phones, in what is actually downloaded: HTML, scripts and styles
// are measured gzipped (as GitHub Pages sends them), images as they are.
const MAX_PAGE_KB = 450;
const MAX_IMAGE_KB = 200;

if (!existsSync(DIST)) {
  console.error("No dist folder. Run `npm run build` first.");
  process.exit(2);
}

const sitemap = readFileSync(join(DIST, "sitemap.xml"), "utf8");
const pages = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].slice(SITE.length));

const fileFor = (path) => join(DIST, path.replace(/^\//, ""), "index.html");
const decode = (text) =>
  text
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
const sizeKb = (path) => {
  const file = join(DIST, path.replace(/^\//, "").split(/[?#]/)[0]);
  if (!existsSync(file) || !statSync(file).isFile()) return 0;
  const bytes = readFileSync(file);
  return (/\.(js|css|svg)$/.test(file) ? gzipSync(bytes).length : bytes.length) / 1024;
};
// A link target counts as real if it's a built page, a redirect page, or a static file.
const exists = (path) => {
  const clean = path.split(/[?#]/)[0];
  if (clean === "/" || clean === "") return true;
  const asPage = join(DIST, clean.replace(/^\//, ""), "index.html");
  const asFile = join(DIST, clean.replace(/^\//, ""));
  return existsSync(asPage) || (existsSync(asFile) && statSync(asFile).isFile());
};

const issues = [];
const inbound = new Map(pages.map((p) => [p, new Set()]));
const flag = (page, problem, detail) => issues.push({ page, problem, detail });

for (const page of pages) {
  const file = fileFor(page);
  if (!existsSync(file)) {
    flag(page, "missing_page", "Listed in sitemap.xml but not built");
    continue;
  }
  const html = readFileSync(file, "utf8");
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim() ?? "");
  const description = decode(
    html.match(/<meta\s+name="description"\s+content="([^"]*)"/)?.[1] ?? "",
  );
  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0;
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];

  if (!title) flag(page, "missing_title", "");
  else if (title.length > 60) flag(page, "title_too_long", `${title.length} chars: ${title}`);
  if (!description) flag(page, "missing_description", "");
  else if (description.length > 155)
    flag(page, "description_too_long", `${description.length} chars`);
  if (h1s !== 1) flag(page, "h1_count", `${h1s} H1 tags`);
  if (canonical !== `${SITE}${page}`) flag(page, "canonical", `points to ${canonical}`);

  // Internal links: dead targets, and who links to whom.
  const hrefs = [...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)].map((m) => decode(m[1]));
  for (const href of hrefs) {
    let path;
    if (href.startsWith("/")) path = href;
    else if (href.startsWith(SITE)) path = href.slice(SITE.length) || "/";
    else continue;
    if (path.startsWith("#")) continue;
    if (!exists(path)) flag(page, "dead_internal_link", href);
    const target = path.split(/[?#]/)[0].replace(/\/?$/, "/");
    if (target !== page && inbound.has(target)) inbound.get(target).add(page);
  }

  // Page weight: the HTML plus every script, style and image it loads from this site.
  const assets = [
    ...html.matchAll(
      /<(?:script|img|link)\b[^>]*\b(?:src|href)="(\/[^"]+\.(?:js|css|webp|png|jpe?g|svg))"/g,
    ),
  ].map((m) => m[1]);
  const weight =
    gzipSync(html).length / 1024 + [...new Set(assets)].reduce((sum, a) => sum + sizeKb(a), 0);
  if (weight > MAX_PAGE_KB)
    flag(page, "slow_page", `${Math.round(weight)} KB downloaded before fonts`);
  for (const img of new Set(assets.filter((a) => /\.(webp|png|jpe?g)$/.test(a)))) {
    const kb = sizeKb(img);
    if (kb > MAX_IMAGE_KB) flag(page, "heavy_image", `${img} is ${Math.round(kb)} KB`);
  }
}

for (const [page, from] of inbound) {
  if (page !== "/" && from.size < 3)
    flag(page, "few_internal_links", `${from.size} pages link here`);
}

const report = { checked: pages.length, issues: issues.length, details: issues };
console.log(JSON.stringify(report, null, 2));
process.exit(issues.length ? 1 : 0);
