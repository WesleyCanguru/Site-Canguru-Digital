/**
 * Pré-renderização: grava um HTML próprio por rota em dist/<rota>/index.html,
 * com title, meta description, canonical, Open Graph, JSON-LD e o conteúdo da página.
 * Também gera dist/sitemap.xml a partir das mesmas rotas.
 *
 * Roda depois de `vite build` (cliente) e `vite build --ssr` (dist-ssr/).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const ssrEntry = fs.readdirSync(ssrDir).find((f) => /^entry-server\.(m?js)$/.test(f));
if (!ssrEntry) throw new Error("dist-ssr/entry-server.js não encontrado");
const { render, getPrerenderRoutes, SITE_URL } = await import(pathToFileURL(path.join(ssrDir, ssrEntry)).href);

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function buildHead(meta) {
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<link rel="canonical" href="${esc(meta.url)}" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:site_name" content="Canguru Digital" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:type" content="${esc(meta.type)}" />`,
    `<meta property="og:url" content="${esc(meta.url)}" />`,
    `<meta property="og:image" content="${esc(meta.image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${esc(meta.image)}" />`,
  ];
  if (meta.jsonLd) {
    // Escapa "<" para o JSON não fechar a tag <script> por acidente
    const json = JSON.stringify(meta.jsonLd).replace(/</g, "\\u003c");
    tags.push(`<script type="application/ld+json" id="canguru-json-ld">${json}</script>`);
  }
  return tags.join("\n    ");
}

const routes = getPrerenderRoutes();
for (const route of routes) {
  const { html, meta } = render(route);
  let page = template
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<link rel="canonical"[^>]*>\s*/i, "")
    .replace(/<meta name="description"[^>]*>\s*/i, "")
    .replace("</head>", `    ${buildHead(meta)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  if (!page.includes(html)) throw new Error(`Falha ao injetar o HTML da rota ${route}`);

  const outDir = path.join(distDir, route.replace(/^\//, ""));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), page);
  console.log(`prerender: ${route} -> ${path.relative(root, path.join(outDir, "index.html"))} (${meta.title})`);
}

// Sitemap gerado das mesmas rotas (substitui o public/sitemap.xml copiado pelo Vite)
const today = new Date().toISOString().slice(0, 10);
const priority = (r) => (r === "/" ? "1.0" : r.split("/").filter(Boolean).length > 1 ? "0.9" : "0.8");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((r) => `  <url>\n    <loc>${SITE_URL}${r}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority(r)}</priority>\n  </url>`)
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
console.log(`prerender: sitemap.xml com ${routes.length} URLs`);

fs.rmSync(ssrDir, { recursive: true, force: true });
