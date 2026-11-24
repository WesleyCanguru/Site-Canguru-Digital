/**
 * Entrada usada só no build: renderiza cada rota em HTML (pré-renderização).
 * Ver scripts/prerender.mjs.
 */

import { renderToString } from "react-dom/server";
import App from "./App";
import { getRouteMeta, getPrerenderRoutes, SITE_URL } from "./seo";

export { getPrerenderRoutes, SITE_URL };

export function render(route: string) {
  const html = renderToString(<App initialRoute={route} />);
  const meta = getRouteMeta(route);
  return { html, meta };
}
