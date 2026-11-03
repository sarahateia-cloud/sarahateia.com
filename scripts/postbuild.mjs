// GitHub Pages serves static files only, so give each extra route its own index.html
// (with page-specific title, description, and canonical) and an SPA fallback 404.html.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

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

const setMeta = (doc, { path, title, description }) =>
  doc
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*"/, `$1${description}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${SITE}/${path}/"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${SITE}/${path}/"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${title}"`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*"/, `$1${description}"`);

for (const page of PAGES) {
  mkdirSync(`dist/${page.path}`, { recursive: true });
  writeFileSync(`dist/${page.path}/index.html`, setMeta(html, page));
}
writeFileSync("dist/404.html", html);
