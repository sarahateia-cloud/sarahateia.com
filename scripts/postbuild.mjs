// GitHub Pages serves static files only, so give each extra route its own index.html
// (with page-specific title, description, and canonical) and an SPA fallback 404.html.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const { render, SITE_PAGES } = await import(pathToFileURL("dist-ssr/entry-prerender.js").href);

const SITE = "https://www.sarahateia.com";
const html = readFileSync("dist/index.html", "utf8");

const PAGES = [
  {
    path: "resources/self-reflection",
    title: "Self-Reflection Tools | Sarah Ateia, LPC Associate",
    description:
      "Steadying quotes plus the Enneagram and cognitive functions, offered for curiosity and self-reflection only. Not scientific and not a diagnosis.",
  },
  {
    path: "crisis",
    title: "DFW Crisis Lines & Resources | Sarah Ateia, LPC Associate",
    description:
      "24/7 crisis lines for Dallas, Tarrant, Collin, Denton, and Johnson counties, plus 988, Crisis Text Line, and DFW domestic and sexual violence hotlines.",
  },
  {
    path: "screening-tools",
    title: "Optional Screening Tools | Sarah Ateia, LPC Associate",
    description:
      "Free, optional screening questionnaires for depression, anxiety, ADHD, and trauma, with guidance on how to use them before or during counseling.",
  },
  {
    path: "new-clients",
    title: "New Client Forms | Sarah Ateia, LPC Associate",
    description:
      "What to expect before your first session, plus every form to read ahead: consent and fees, Good Faith Estimate, intake, privacy, and releases.",
  },
];

// The home page's FAQ labels only describe the home page, so each other page gets its own labels.
const setLabels = (doc, graph = []) =>
  doc.replace(
    /(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/,
    (_, open, json, close) => {
      const data = JSON.parse(json);
      data["@graph"] = [...data["@graph"].filter((item) => item["@type"] !== "FAQPage"), ...graph];
      return `${open}${JSON.stringify(data)}${close}`;
    },
  );

const escapeHtml = (text) =>
  text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Replacement functions keep a price like "$100" from being read as a regex group.
const setAttribute = (doc, tag, value) =>
  doc.replace(
    new RegExp(`(<(?:meta|link)\\s+${tag}\\s+(?:content|href)=")[^"]*"`),
    (_, open) => `${open}${value}"`,
  );

const setMeta = (doc, { path, title, description, graph }) => {
  const url = `${SITE}/${path}/`;
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);
  return [
    ['rel="canonical"', url],
    ['property="og:url"', url],
    ['property="og:title"', safeTitle],
    ['name="twitter:title"', safeTitle],
    ['name="description"', safeDescription],
    ['property="og:description"', safeDescription],
    ['name="twitter:description"', safeDescription],
  ].reduce(
    (next, [tag, value]) => setAttribute(next, tag, value),
    setLabels(doc, graph).replace(/<title>[\s\S]*?<\/title>/, () => `<title>${safeTitle}</title>`),
  );
};

// Put each page's text in its HTML, and show it without waiting for the fade-in if JavaScript is off.
const prerender = async (doc, route) => {
  const body = await render(route);
  return doc
    .replace('<div id="root"></div>', () => `<div id="root">${body}</div>`)
    .replace(/<noscript>[\s\S]*?<\/noscript>/, "")
    .replace(
      "</head>",
      "<noscript><style>.reveal,.rise{opacity:1!important;transform:none!important}</style></noscript></head>",
    );
};

// Stop the build if the sitemap lists anything other than the pages built here.
const builtUrls = ["", ...[...PAGES, ...SITE_PAGES].map((page) => `${page.path}/`)]
  .map((path) => `${SITE}/${path}`)
  .sort();
const sitemapUrls = [...readFileSync("dist/sitemap.xml", "utf8").matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => match[1])
  .sort();
if (builtUrls.join() !== sitemapUrls.join()) {
  throw new Error(`Sitemap and built pages differ:\n${sitemapUrls}\n${builtUrls}`);
}

// Stop the build if the home page's FAQ labels drift from the questions people can read.
const homeBody = await render("/");
const homeLabels = JSON.parse(
  html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1],
);
for (const { name, acceptedAnswer } of homeLabels["@graph"].find(
  (item) => item["@type"] === "FAQPage",
).mainEntity) {
  for (const text of [name, acceptedAnswer.text]) {
    if (!homeBody.includes(escapeHtml(text))) {
      throw new Error(`The home FAQ label isn't on the page: ${text}`);
    }
  }
}

for (const page of [...PAGES, ...SITE_PAGES]) {
  mkdirSync(`dist/${page.path}`, { recursive: true });
  writeFileSync(
    `dist/${page.path}/index.html`,
    await prerender(setMeta(html, page), `/${page.path}`),
  );
}
writeFileSync("dist/index.html", await prerender(html, "/"));
// The fallback page for unknown addresses. It is served with a 404 status, so it should never
// look like a copy of the home page: no canonical, no shared description, and noindex.
const notFound = setAttribute(html, 'name="robots"', "noindex, follow")
  .replace(
    /<title>[\s\S]*?<\/title>/,
    () => "<title>Page not found | Sarah Ateia, LPC Associate</title>",
  )
  .replace(/\s*<link rel="canonical"[^>]*>/, "")
  .replace(/\s*<meta property="og:url"[^>]*>/, "")
  .replace(/\s*<meta\s+name="description"\s+content="[^"]*"\s*\/>/, "");
writeFileSync("dist/404.html", notFound);

// Stop the build if any listed page could drop out of search by accident, or if the 404 page
// could be mistaken for a real one.
for (const url of builtUrls) {
  const path = url.slice(SITE.length + 1);
  const page = readFileSync(`dist/${path}index.html`, "utf8");
  const robots = page.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? "";
  const canonical = page.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  if (robots.includes("noindex")) throw new Error(`Listed page is set to noindex: ${url}`);
  if (canonical !== url) throw new Error(`Canonical for ${url} points to ${canonical}`);
}
if (!notFound.includes('content="noindex') || notFound.includes('rel="canonical"')) {
  throw new Error("404.html must be noindex and have no canonical link");
}
// Old addresses. GitHub Pages can't send a real 301, so each old address gets a tiny page that
// sends people on at once and tells search engines which page is the real one.
const REDIRECTS = { "telehealth-counseling": "telehealth-counseling-texas" };
for (const [from, to] of Object.entries(REDIRECTS)) {
  const target = `${SITE}/${to}/`;
  mkdirSync(`dist/${from}`, { recursive: true });
  writeFileSync(
    `dist/${from}/index.html`,
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Moved</title><meta name="robots" content="noindex, follow"><link rel="canonical" href="${target}"><meta http-equiv="refresh" content="0; url=${target}"></head><body><p>This page moved to <a href="${target}">${target}</a>.</p></body></html>`,
  );
}
rmSync("dist-ssr", { recursive: true, force: true });
