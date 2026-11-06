// GitHub Pages serves static files only, so give each extra route its own index.html
// (with page-specific title, description, and canonical) and an SPA fallback 404.html.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const { render, SITE_PAGES } = await import(pathToFileURL("dist-ssr/entry-prerender.js").href);

const SITE = "https://www.sarahateia.com";
const html = readFileSync("dist/index.html", "utf8");

const PAGES = [
  {
    path: "crisis",
    title: "Crisis Resources in Dallas–Fort Worth | Sarah Ateia Khattab, LPC Associate",
    description:
      "24/7 crisis lines for Dallas, Tarrant, Collin, Denton, and Johnson counties, plus 988, Crisis Text Line, and Dallas-area domestic violence and sexual assault hotlines.",
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

const setMeta = (doc, { path, title, description, graph }) =>
  setLabels(doc, graph)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*"/, `$1${description}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${SITE}/${path}/"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${SITE}/${path}/"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${title}"`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*"/, `$1${description}"`);

// Put each page's text in its HTML, and show it without waiting for the fade-in if JavaScript is off.
const prerender = async (doc, route) =>
  doc
    .replace('<div id="root"></div>', `<div id="root">${await render(route)}</div>`)
    .replace(/<noscript>[\s\S]*?<\/noscript>/, "")
    .replace(
      "</head>",
      "<noscript><style>.reveal,.rise{opacity:1!important;transform:none!important}</style></noscript></head>",
    );

for (const page of [...PAGES, ...SITE_PAGES]) {
  mkdirSync(`dist/${page.path}`, { recursive: true });
  writeFileSync(
    `dist/${page.path}/index.html`,
    await prerender(setMeta(html, page), `/${page.path}`),
  );
}
writeFileSync("dist/index.html", await prerender(html, "/"));
writeFileSync("dist/404.html", html);
rmSync("dist-ssr", { recursive: true, force: true });
