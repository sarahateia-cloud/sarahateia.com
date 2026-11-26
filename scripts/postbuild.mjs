// GitHub Pages serves static files only, so give each extra route its own index.html
// (with page-specific title, description, and canonical) and an SPA fallback 404.html.
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const { render, SITE_PAGES, ARABIC_PAGES, AR_DRAFT } = await import(
  pathToFileURL("dist-ssr/entry-prerender.js").href
);

const SITE = "https://www.sarahateia.com";
// Placeholders in index.html (a sameAs profile link or a search engine verification code that
// still says REPLACE) are dropped here, so they never reach the live site until filled in.
const html = readFileSync("dist/index.html", "utf8")
  .replace(/,\s*"https:\/\/[^"]*REPLACE[^"]*"/g, "")
  .replace(/\s*<!-- Search engine verification:[\s\S]*?-->/, "")
  .replace(/\s*<meta name="[^"]+" content="REPLACE[^"]*" \/>/g, "");
if (html.includes("REPLACE"))
  throw new Error("A REPLACE placeholder would be published; check index.html");

// Breadcrumb labels for the pages built here (content pages get theirs from SITE_PAGES).
const crumbs = (...items) => [
  {
    "@type": "BreadcrumbList",
    itemListElement: [["Home", `${SITE}/`], ...items].map(([name, item], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item,
    })),
  },
];

const PAGES = [
  {
    path: "about",
    graph: [
      {
        "@type": "ProfilePage",
        "@id": `${SITE}/about/#page`,
        url: `${SITE}/about/`,
        name: "About Sarah Ateia, LPC Associate",
        about: { "@id": `${SITE}/#sarah` },
        mainEntity: { "@id": `${SITE}/#sarah` },
        dateModified: "2026-11-22",
      },
      ...crumbs(["About", `${SITE}/about/`]),
    ],
    title: "Sarah Ateia, LPC Associate in Irving, TX | About",
    description:
      "Sarah Ateia, LPC Associate supervised by Don Zablosky, LPC-S: walk and talk counseling in Irving and DFW, telehealth across Texas, English and Arabic.",
  },
  {
    path: "resources/self-reflection",
    graph: crumbs(
      ["Resources", `${SITE}/resources/`],
      ["Self-reflection", `${SITE}/resources/self-reflection/`],
    ),
    title: "Self-Reflection Tools | Sarah Ateia, LPC Associate",
    description:
      "Steadying quotes plus the Enneagram and cognitive functions, offered for curiosity and self-reflection only. Not scientific and not a diagnosis.",
  },
  {
    path: "resources/calming-gift-guide",
    graph: [
      {
        "@type": "Article",
        "@id": `${SITE}/resources/calming-gift-guide/#article`,
        headline: "A counselor's holiday gift guide: gifts that teach coping skills",
        url: `${SITE}/resources/calming-gift-guide/`,
        datePublished: "2026-11-26",
        dateModified: "2026-11-26",
        author: { "@id": `${SITE}/#sarah` },
        publisher: { "@id": `${SITE}/#practice` },
      },
      ...crumbs(
        ["Resources", `${SITE}/resources/`],
        ["Counselor's gift guide", `${SITE}/resources/calming-gift-guide/`],
      ),
    ],
    title: "A Counselor's Gift Guide for Stress & Anxiety",
    description:
      "Holiday gifts that go with coping skills, plus when to consider counseling and how to bring it up. By Sarah Ateia, LPC Associate in Irving, TX.",
  },
  {
    path: "crisis",
    graph: crumbs(["Crisis resources", `${SITE}/crisis/`]),
    title: "DFW Crisis Lines & Resources | Sarah Ateia, LPC Associate",
    description:
      "24/7 crisis lines for Dallas, Tarrant, Collin, Denton, and Johnson counties, plus 988, Crisis Text Line, and DFW domestic and sexual violence hotlines.",
  },
  {
    path: "screening-tools",
    graph: crumbs(["Optional screening tools", `${SITE}/screening-tools/`]),
    title: "Optional Screening Tools | Sarah Ateia, LPC Associate",
    description:
      "Free, optional screening questionnaires for depression, anxiety, ADHD, and trauma, with guidance on how to use them before or during counseling.",
  },
  {
    path: "tools",
    graph: [
      ...crumbs(["Resources", `${SITE}/resources/`], ["Calming tools", `${SITE}/tools/`]),
      {
        "@type": "HowTo",
        "@id": `${SITE}/tools/#box-breathing`,
        name: "How to do box breathing (4-4-4-4)",
        description:
          "A slow, even breathing pattern: breathe in for 4 counts, hold for 4, breathe out for 4, hold for 4.",
        totalTime: "PT1M",
        url: `${SITE}/tools/#box-breathing`,
        step: [
          ["Breathe in", "Breathe in slowly through your nose for a count of 4."],
          ["Hold", "Hold your breath gently, lungs full, for a count of 4."],
          ["Breathe out", "Breathe out slowly through your mouth for a count of 4."],
          ["Hold", "Hold gently, lungs empty, for a count of 4. Repeat for about four rounds."],
        ].map(([name, text], i) => ({ "@type": "HowToStep", position: i + 1, name, text })),
      },
      {
        "@type": "HowTo",
        "@id": `${SITE}/tools/#grounding`,
        name: "How to do the 5-4-3-2-1 grounding exercise",
        description:
          "A grounding exercise that brings attention back to the present, one sense at a time.",
        url: `${SITE}/tools/#grounding`,
        step: [
          "Name 5 things you can see.",
          "Name 4 things you can feel.",
          "Name 3 things you can hear.",
          "Name 2 things you can smell.",
          "Name 1 thing you can taste.",
        ].map((text, i) => ({ "@type": "HowToStep", position: i + 1, name: text, text })),
      },
    ],
    title: "Free Calming Tools | Sarah Ateia, LPC Associate",
    description:
      "Free box breathing guide, 5-4-3-2-1 grounding exercise and stress check-in. No login, nothing saved. From Sarah Ateia, LPC Associate in Irving, TX.",
  },
  {
    path: "new-clients",
    graph: crumbs(["New client forms", `${SITE}/new-clients/`]),
    title: "New Client Forms | Sarah Ateia, LPC Associate",
    description:
      "What to expect before your first session, plus every form to read ahead: consent and fees, Good Faith Estimate, intake, privacy, and releases.",
  },
  {
    path: "referral-partners",
    graph: crumbs(["For referring professionals", `${SITE}/referral-partners/`]),
    title: "Counselor Referrals for Attorneys & Surgeons | DFW",
    description:
      "How attorneys, surgeons and other professionals can refer clients to Sarah Ateia, LPC Associate, for self-pay counseling in DFW and telehealth in Texas.",
  },
];

// Arabic pages (right to left). While AR_DRAFT is on they're built for review but set to noindex
// and kept out of the sitemap. Each one is paired with its English page through hreflang links.
const AR_BUILT = ARABIC_PAGES.map((page) => ({
  path: page.path,
  title: page.title,
  description: page.description,
  arabic: true,
  englishPath: page.englishPath,
  graph: [
    {
      "@type": "WebPage",
      "@id": `${SITE}/${page.path}/#page`,
      name: page.title,
      url: `${SITE}/${page.path}/`,
      inLanguage: "ar",
      isPartOf: { "@id": `${SITE}/#website` },
    },
  ],
}));
const INDEXED_AR = AR_DRAFT ? [] : AR_BUILT;

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

// Pages that Facebook/Instagram ads link to get a share image matching the ad, so a link preview
// looks like the ad. Each image carries the supervisor disclosure.
const SHARE_IMAGES = {
  "walk-and-talk-therapy-dallas": [
    "share/share-walk-and-talk.jpg",
    "Sarah Ateia on an overlook. Walk and talk therapy in Irving and Dallas.",
  ],
  "arabic-counseling": [
    "share/share-arabic.jpg",
    "Portrait of Sarah Ateia. Counseling in Arabic in Dallas and online in Texas.",
  ],
  "telehealth-counseling-texas": [
    "share/share-online-texas.jpg",
    "Portrait of Sarah Ateia. Online counseling anywhere in Texas.",
  ],
};

const setShareImage = (doc, path) => {
  const share = SHARE_IMAGES[path];
  if (!share) return doc;
  const [file, alt] = share;
  if (!existsSync(`dist/${file}`)) throw new Error(`Share image missing: ${file}`);
  return [
    ['property="og:image"', `${SITE}/${file}`],
    ['property="og:image:alt"', escapeHtml(alt)],
    ['name="twitter:image"', `${SITE}/${file}`],
    ['name="twitter:card"', "summary_large_image"],
  ].reduce((next, [tag, value]) => setAttribute(next, tag, value), doc);
};

const setMeta = (doc, { path, title, description, graph }) => {
  const url = `${SITE}/${path}/`;
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);
  return setShareImage(
    [
      ['rel="canonical"', url],
      ['property="og:url"', url],
      ['property="og:title"', safeTitle],
      ['name="twitter:title"', safeTitle],
      ['name="description"', safeDescription],
      ['property="og:description"', safeDescription],
      ['name="twitter:description"', safeDescription],
    ].reduce(
      (next, [tag, value]) => setAttribute(next, tag, value),
      setLabels(doc, graph).replace(
        /<title>[\s\S]*?<\/title>/,
        () => `<title>${safeTitle}</title>`,
      ),
    ),
    path,
  );
};

// Start downloading the fonts the first screen needs at the same time as the CSS, instead of after
// it. Body text and headings use the first two everywhere; the italic serif is only in the home
// hero, so other pages don't spend bandwidth on it.
const fontFile = (prefix) => {
  const name = readdirSync("dist/assets").find(
    (file) => file.startsWith(prefix) && file.endsWith(".woff2"),
  );
  if (!name) throw new Error(`Font to preload not found: ${prefix}`);
  return `/assets/${name}`;
};
const preloadFont = (href) =>
  `<link rel="preload" as="font" type="font/woff2" href="${href}" crossorigin>`;
const BASE_FONTS = [
  fontFile("atkinson-hyperlegible-next-latin-wght-normal-"),
  fontFile("fraunces-latin-soft-normal-"),
];
const HOME_FONTS = [fontFile("fraunces-latin-soft-italic-")];
const fontPreloads = (route) =>
  [...BASE_FONTS, ...(route === "/" ? HOME_FONTS : [])].map(preloadFont).join("");

// Built pages already carry their text, so the app script isn't needed to draw the first screen.
// Start it right after the first paint instead of alongside the CSS and fonts, so on slow phones the
// page shows sooner (Core Web Vitals: LCP). Buttons wake up a moment later; links work as plain links
// meanwhile, and anything typed early is kept (see captureEarlyInput).
const APP_SCRIPT = /<script type="module" crossorigin src="([^"]+)"><\/script>/;
const deferAppScript = (doc) => {
  if (!APP_SCRIPT.test(doc)) throw new Error("App script tag not found; update deferAppScript");
  return doc.replace(
    APP_SCRIPT,
    (_tag, src) =>
      `<script>(function(){function go(){var s=document.createElement("script");s.type="module";s.src=${JSON.stringify(src)};document.head.appendChild(s)}function start(){requestAnimationFrame(function(){requestAnimationFrame(function(){setTimeout(go,0)})})}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start()})()</script>`,
  );
};

// Put each page's text in its HTML, and show it without waiting for the fade-in if JavaScript is off.
const prerender = async (doc, route) => {
  const body = await render(route);
  return deferAppScript(doc)
    .replace(/<link rel="stylesheet"/, (tag) => `${fontPreloads(route)}${tag}`)
    .replace('<div id="root"></div>', () => `<div id="root">${body}</div>`)
    .replace(/<noscript>[\s\S]*?<\/noscript>/, "")
    .replace(
      "</head>",
      "<noscript><style>.reveal,.rise{opacity:1!important;transform:none!important}</style></noscript></head>",
    );
};

// Stop the build if the sitemap lists anything other than the pages built here.
const builtUrls = ["", ...[...PAGES, ...SITE_PAGES, ...INDEXED_AR].map((page) => `${page.path}/`)]
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
for (const page of AR_BUILT) {
  mkdirSync(`dist/${page.path}`, { recursive: true });
  let doc = setMeta(html, page)
    .replace('<html lang="en">', '<html lang="ar" dir="rtl">')
    .replace('content="en_US"', 'content="ar_AR"');
  if (AR_DRAFT) doc = setAttribute(doc, 'name="robots"', "noindex, follow");
  writeFileSync(`dist/${page.path}/index.html`, await prerender(doc, `/${page.path}`));
}
writeFileSync("dist/index.html", await prerender(html, "/"));

// hreflang: each English page and its Arabic version point at each other, with English as the
// default for everyone else. Added only once the Arabic pages are published (not drafts).
for (const page of INDEXED_AR) {
  const en = `${SITE}${page.englishPath}`;
  const ar = `${SITE}/${page.path}/`;
  const links = `<link rel="alternate" hreflang="en" href="${en}" /><link rel="alternate" hreflang="ar" href="${ar}" /><link rel="alternate" hreflang="x-default" href="${en}" />`;
  for (const file of [`dist${page.englishPath}index.html`, `dist/${page.path}/index.html`]) {
    const doc = readFileSync(file, "utf8");
    if (!doc.includes('hreflang="ar"'))
      writeFileSync(file, doc.replace("</head>", `${links}</head>`));
  }
}
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
// Stop the build if any page's search labels break the rules: every page must have valid JSON-LD
// with exactly one ProfessionalService (no street address), nothing may carry reviews or
// ratings, and every article needs an Article label with a real, past publish date.
const today = new Date().toISOString().slice(0, 10);
const articlePaths = new Set(
  SITE_PAGES.filter((page) => /^resources\/.+/.test(page.path)).map((page) => `${page.path}/`),
);
const walk = (value, visit) => {
  if (Array.isArray(value)) return value.forEach((item) => walk(item, visit));
  if (value && typeof value === "object") {
    visit(value);
    Object.values(value).forEach((item) => walk(item, visit));
  }
};
for (const url of builtUrls) {
  const path = url.slice(SITE.length + 1);
  const page = readFileSync(`dist/${path}index.html`, "utf8");
  const blocks = [...page.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (blocks.length !== 1) throw new Error(`Expected one JSON-LD block on ${url}`);
  const graph = JSON.parse(blocks[0][1])["@graph"];
  const types = [];
  walk(graph, (node) => {
    if (node["@type"]) types.push(node["@type"]);
    if ("review" in node || "aggregateRating" in node || "streetAddress" in node) {
      throw new Error(`Reviews, ratings or a street address in the labels on ${url}`);
    }
  });
  if (types.some((type) => type === "Review" || type === "AggregateRating")) {
    throw new Error(`Review or rating label on ${url}`);
  }
  if (types.filter((type) => type === "ProfessionalService").length !== 1) {
    throw new Error(`Expected exactly one ProfessionalService on ${url}`);
  }
  if (articlePaths.has(path)) {
    const article = graph.find((item) => item["@type"] === "Article");
    const date = article?.datePublished ?? "";
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || date > today) {
      throw new Error(`Article on ${url} needs a datePublished that isn't in the future`);
    }
  }
}

// Stop the build if any page's wording breaks the CLAUDE.md compliance rules: every page must show
// the supervisor disclosure, and none may carry testimonial, rating, outcome-promise or
// independent-practice wording. This also protects pages added by unattended runs.
const SUPERVISOR = "supervised by Don Zablosky, LPC-S";
const BANNED = [
  [/testimonial/i, "testimonial"],
  [/clients? (say|said|love)/i, '"clients say" wording'],
  [/what (my |our )?clients (say|think)/i, '"clients say" wording'],
  [/★|star rating|\d(\.\d)? stars?\b|five[- ]star|5[- ]star/i, "star rating"],
  [/top[- ]rated|best therapist|best counselor/i, "superlative"],
  [/my private practice|practice owner|independent practice/i, "independent-practice claim"],
  [
    /guaranteed (results|relief|outcomes?)|we guarantee|i guarantee|cure (your|anxiety|depression|adhd)/i,
    "guarantee or cure",
  ],
  [
    /\bDr\.? Sarah|Sarah Ateia(?: Khattab)?,? (?:M\.S\., )?LPC(?! Associate)\b/,
    'Sarah\'s title without "Associate"',
  ],
];
const visibleText = (doc) =>
  doc
    .replace(/<script\b[\s\S]*?<\/script>/g, " ")
    .replace(/<style\b[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;|&rsquo;|’/g, "'")
    .replace(/\s+/g, " ");
const problems = [];
for (const url of builtUrls) {
  const path = url.slice(SITE.length + 1);
  const text = visibleText(readFileSync(`dist/${path}index.html`, "utf8"));
  if (!text.includes(SUPERVISOR)) problems.push(`${url}: missing "${SUPERVISOR}"`);
  for (const [pattern, label] of BANNED) {
    const hit = text.match(pattern);
    if (hit) problems.push(`${url}: ${label} ("${hit[0]}")`);
  }
}
if (problems.length) throw new Error(`Compliance check failed:\n${problems.join("\n")}`);

// Stop the build if llms.txt (the plain-language site map for AI answer engines) leaves out any
// listed page, so new guides can't go live without answer engines being told about them.
const llms = readFileSync("dist/llms.txt", "utf8");
const missingFromLlms = builtUrls.filter((url) => !llms.includes(`(${url})`));
if (missingFromLlms.length) {
  throw new Error(`Add these pages to public/llms.txt:\n${missingFromLlms.join("\n")}`);
}

// llms-full.txt: the readable text of every listed page in one plain file, so AI answer engines
// can read the whole site (and quote it accurately) without running the app.
const decode = (text) =>
  text
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
const toText = (doc) => {
  const main = doc.match(/<main\b[\s\S]*?<\/main>/)?.[0] ?? "";
  return decode(
    main
      .replace(/<(script|style|svg|nav)\b[\s\S]*?<\/\1>/g, " ")
      .replace(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, (_, href, label) => {
        const text = label.replace(/<[^>]+>/g, "").trim();
        if (!text) return " ";
        const link = href.startsWith("/") ? `${SITE}${href}` : href;
        return link.startsWith("http") && !text.includes(link)
          ? ` [${text}](${link}) `
          : ` ${text} `;
      })
      .replace(/<h1\b[^>]*>/g, "\n\n# ")
      .replace(/<h2\b[^>]*>/g, "\n\n## ")
      .replace(/<h3\b[^>]*>/g, "\n\n### ")
      .replace(/<li\b[^>]*>/g, "\n- ")
      .replace(/<(p|div|section|header|footer|ul|ol|details|summary|br)\b[^>]*>/g, "\n")
      .replace(/<[^>]+>/g, " "),
  )
    .split("\n")
    .map((line) => line.replace(/[ \t]+/g, " ").trim())
    .filter(Boolean)
    .join("\n")
    .replace(/\n(?=#)/g, "\n\n");
};
const fullParts = [
  llms
    .split("\n## ")[0]
    .replace(/\n.*llms-full\.txt.*\n/, "\n")
    .trim(),
  "This file holds the readable text of every page on www.sarahateia.com, one page after another. Each page starts with its address.",
];
for (const url of builtUrls) {
  const path = url.slice(SITE.length + 1);
  const text = toText(readFileSync(`dist/${path}index.html`, "utf8"));
  if (text) fullParts.push(`---\n\nURL: ${url}\n\n${text}`);
}
writeFileSync("dist/llms-full.txt", `${fullParts.join("\n\n")}\n`);

// Old addresses. GitHub Pages can't send a real 301, so each old address gets a tiny page that
// sends people on at once and tells search engines which page is the real one.
const REDIRECTS = {
  "telehealth-counseling": "telehealth-counseling-texas",
  "outdoor-counseling": "walk-and-talk-therapy-dallas",
};
for (const [from, to] of Object.entries(REDIRECTS)) {
  const target = `${SITE}/${to}/`;
  mkdirSync(`dist/${from}`, { recursive: true });
  writeFileSync(
    `dist/${from}/index.html`,
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Moved</title><meta name="robots" content="noindex, follow"><link rel="canonical" href="${target}"><meta http-equiv="refresh" content="0; url=${target}"></head><body><p>This page moved to <a href="${target}">${target}</a>.</p></body></html>`,
  );
}
rmSync("dist-ssr", { recursive: true, force: true });
