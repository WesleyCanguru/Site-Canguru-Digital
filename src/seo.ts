/**
 * Rotas e metadados de SEO do site.
 *
 * Fonte única usada em dois lugares:
 * - no navegador (App.tsx), para atualizar title/meta ao navegar;
 * - no build (scripts/prerender.mjs), para gravar um HTML próprio por rota.
 */

import { BLOG_POSTS, getPostBySlug } from "./data/blogPosts";
import { CASES, getCaseBySlug } from "./data/cases";

export const SITE_URL = "https://www.cangurudigital.com.br";
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/blog_budget_2026_1784653896023.jpg`;

export type Route = string;

// Utilitário para mapear e normalizar o path do navegador para uma rota conhecida da agência
export const parsePathToRoute = (path: string): Route => {
  // Remove querystrings e hashes
  const urlWithoutQuery = path.split("?")[0].split("#")[0];
  // Normaliza string removendo barras duplicadas ou finais
  const cleanPath = urlWithoutQuery.trim().toLowerCase().replace(/\/+$/, "");

  if (cleanPath === "" || cleanPath === "/" || cleanPath === "/index.html") return "/";
  if (cleanPath === "/servicos" || cleanPath === "/servicos/") return "/servicos/";
  if (cleanPath === "/sobre-nos" || cleanPath === "/sobre" || cleanPath === "/sobre-nos/") return "/sobre-nos/";
  if (cleanPath === "/contato" || cleanPath === "/contato/") return "/contato/";
  if (cleanPath === "/blog" || cleanPath === "/blog/") return "/blog/";

  // Suporte dinâmico a qualquer post do blog (/blog/slug ou /blog/slug/)
  if (cleanPath.startsWith("/blog/")) {
    const slug = cleanPath.replace(/^\/blog\//, "").trim();
    if (slug) {
      return `/blog/${slug}/`;
    }
    return "/blog/";
  }

  // Estudos de caso: só existem quando há pelo menos 1 case publicado
  if (CASES.length > 0) {
    if (cleanPath === "/cases") return "/cases/";
    if (cleanPath.startsWith("/cases/")) {
      const slug = cleanPath.replace(/^\/cases\//, "").trim();
      if (slug && getCaseBySlug(slug)) return `/cases/${slug}/`;
      return "/cases/";
    }
  }

  // Fallback seguro caso a rota seja um prefixo
  if (cleanPath.startsWith("/servicos")) return "/servicos/";
  if (cleanPath.startsWith("/sobre")) return "/sobre-nos/";
  if (cleanPath.startsWith("/contato")) return "/contato/";

  return "/";
};

const MESES: Record<string, string> = {
  janeiro: "01", fevereiro: "02", "março": "03", marco: "03", abril: "04", maio: "05", junho: "06",
  julho: "07", agosto: "08", setembro: "09", outubro: "10", novembro: "11", dezembro: "12",
};

/** "21 Julho, 2026" -> "2026-07-21T10:00:00-03:00" */
export function postDateToIso(date: string): string | undefined {
  const m = date.trim().match(/^(\d{1,2})\s+([A-Za-zçÇ]+),?\s+(\d{4})$/);
  if (!m) return undefined;
  const mes = MESES[m[2].toLowerCase()];
  if (!mes) return undefined;
  return `${m[3]}-${mes}-${m[1].padStart(2, "0")}T10:00:00-03:00`;
}

/** Transforma o caminho de um asset (ex.: /assets/x.jpg) em URL absoluta. */
export function absoluteUrl(src: string | undefined): string | undefined {
  if (!src || src.startsWith("data:")) return undefined;
  if (/^https?:\/\//.test(src)) return src;
  return `${SITE_URL}${src.startsWith("/") ? "" : "/"}${src}`;
}

export interface RouteMeta {
  title: string;
  description: string;
  url: string;
  type: string;
  image: string;
  jsonLd: any | null;
}

const ORG_REF = {
  "@type": "Organization",
  "name": "Canguru Digital",
  "url": SITE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": `${SITE_URL}/assets/images/logo_canguru_horizontal.png`,
  },
};

function breadcrumb(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "itemListElement": items.map((it, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": it.name,
      "item": it.url,
    })),
  };
}

export function getRouteMeta(currentRoute: Route): RouteMeta {
  let title = "Canguru Digital | Tráfego Pago e Controle Operacional";
  let desc = "A Canguru não vende marketing, entrega controle. Tráfego pago focado em ROI, conteúdo estratégico de autoridade e plataforma operacional própria em tempo real.";
  let type = "website";
  let url = `${SITE_URL}/`;
  let image = DEFAULT_OG_IMAGE;
  let jsonLd: any = null;

  const faqHome = [
    {
      q: "Tráfego pago garante mais vendas?",
      a: "Não. Tráfego pago garante a atenção qualificada de pessoas que buscam o seu produto ou serviço. A venda em si depende de outros pilares como velocidade de carregamento da página, oferta, autoridade da marca e atendimento comercial."
    },
    {
      q: "Quanto custa investir em anúncios?",
      a: "O valor mínimo diário é de cerca de R$ 6,00. Contudo, para obter ROI sustentável em 2026, recomendamos começar com pelo menos R$ 1.500 a R$ 2.000 mensais de verba de anúncios."
    },
    {
      q: "Quanto tempo até ver resultado?",
      a: "Os primeiros leads qualificados costumam surgir nas primeiras 48h a 72h após ativação das campanhas, com estabilização matemática do funil ocorrendo entre o primeiro e segundo mês."
    }
  ];

  switch (currentRoute) {
    case "/":
      title = "Canguru Digital | Tráfego Pago e Controle Operacional";
      desc = "A Canguru não vende marketing, entrega controle. Tráfego pago focado em ROI, conteúdo estratégico de autoridade e plataforma operacional própria em tempo real.";
      url = `${SITE_URL}/`;
      jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
            "@id": `${SITE_URL}/#organization`,
            "name": "Canguru Digital",
            "legalName": "Canguru Digital",
            "image": `${SITE_URL}/assets/images/Wesley-Camelo-Fundador.jpeg`,
            "logo": `${SITE_URL}/assets/images/logo_canguru_horizontal.png`,
            "url": SITE_URL,
            "telephone": "+55-11-99407-5149",
            "email": "contato@cangurudigital.com.br",
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.instagram.com/cangurudigital",
              "https://www.linkedin.com/company/cangurudigital",
              "https://www.facebook.com/cangurudigital"
            ],
            "founder": {
              "@type": "Person",
              "name": "Wesley Camelo",
              "jobTitle": "Fundador & Diretor de Estratégia"
            }
          },
          {
            "@type": "FAQPage",
            "mainEntity": faqHome.map(item => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
              }
            }))
          }
        ]
      };
      break;
    case "/servicos/":
      title = "Serviços de Tráfego Pago & CRM | Canguru Digital";
      desc = "Atendimento comercial sob medida. Descubra nossas frentes de Tráfego Pago, Social Media estratégica, Identidade Visual, Landing Pages rápidas e Automação CRM.";
      url = `${SITE_URL}/servicos/`;
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Serviços Canguru Digital",
        "url": `${SITE_URL}/servicos/`,
        "description": desc,
        "provider": {
          "@type": "Organization",
          "name": "Canguru Digital",
          "url": SITE_URL
        }
      };
      break;
    case "/sobre-nos/":
      title = "Sobre Nós | Canguru Digital | Operação Transparente";
      desc = "Conheça a história da Canguru Digital, fundada em 2018 por Wesley Camelo. Entenda nossa trajetória de serviços individuais a uma operação técnica com tecnologia própria.";
      url = `${SITE_URL}/sobre-nos/`;
      break;
    case "/contato/":
      title = "Contato & Diagnóstico de Tráfego Pago | Canguru Digital";
      desc = "Entre em contato conosco e solicite um diagnóstico gratuito dos seus canais de vendas. Fale via formulário seguro ou diretamente por WhatsApp com o time.";
      url = `${SITE_URL}/contato/`;
      jsonLd = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${SITE_URL}/contato/#localbusiness`,
        "name": "Canguru Digital - Atendimento e Diagnóstico",
        "url": `${SITE_URL}/contato/`,
        "telephone": "+55-11-99407-5149",
        "email": "contato@cangurudigital.com.br",
        "priceRange": "$$",
        "sameAs": [
          "https://www.instagram.com/cangurudigital",
          "https://www.linkedin.com/company/cangurudigital",
          "https://www.facebook.com/cangurudigital"
        ]
      };
      break;
    case "/blog/":
      title = "Blog Canguru Analítica | Tráfego Pago, CRM & Automações";
      desc = "Artigos práticos, dados de campo de batalha e estratégias reais de tráfego pago para empresas. Leia análises brutas e diretas sobre o mercado digital de 2026.";
      url = `${SITE_URL}/blog/`;
      type = "website";
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Blog Canguru Analítica",
        "url": `${SITE_URL}/blog/`,
        "publisher": ORG_REF,
        "blogPost": BLOG_POSTS.map((p) => ({
          "@type": "BlogPosting",
          "headline": p.title,
          "url": `${SITE_URL}/blog/${p.slug}/`,
          ...(postDateToIso(p.date) ? { "datePublished": postDateToIso(p.date) } : {}),
        })),
      };
      break;
    case "/cases/":
      title = "Cases de Sucesso | Canguru Digital";
      desc = "Resultados reais de clientes da Canguru Digital em tráfego pago, social media, sites e CRM, com números, período e o que foi feito em cada projeto.";
      url = `${SITE_URL}/cases/`;
      jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "CollectionPage",
            "name": "Cases de Sucesso",
            "url": url,
            "description": desc,
            "publisher": ORG_REF,
          },
          breadcrumb([
            { name: "Início", url: `${SITE_URL}/` },
            { name: "Cases", url },
          ]),
        ],
      };
      break;
    default:
      if (currentRoute.startsWith("/blog/")) {
        const postSlug = currentRoute.replace(/^\/blog\//, "").replace(/\/+$/, "");
        const post = getPostBySlug(postSlug);
        if (post) {
          title = `${post.title} | Blog Canguru Analítica`;
          desc = post.excerpt;
          url = `${SITE_URL}/blog/${post.slug}/`;
          type = "article";
          image = absoluteUrl(post.image) || DEFAULT_OG_IMAGE;
          const published = postDateToIso(post.date) || "2026-07-21T10:10:00-03:00";
          jsonLd = {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BlogPosting",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": url
                },
                "headline": post.title,
                "description": desc,
                "image": image,
                "author": {
                  "@type": "Person",
                  "name": post.author,
                  "jobTitle": post.authorRole
                },
                "publisher": ORG_REF,
                "datePublished": published,
                "dateModified": published
              },
              ...(post.faqs && post.faqs.length
                ? [{
                    "@type": "FAQPage",
                    "mainEntity": post.faqs.map((f) => ({
                      "@type": "Question",
                      "name": f.q,
                      "acceptedAnswer": { "@type": "Answer", "text": f.a },
                    })),
                  }]
                : []),
              breadcrumb([
                { name: "Início", url: `${SITE_URL}/` },
                { name: "Blog", url: `${SITE_URL}/blog/` },
                { name: post.title, url },
              ]),
            ]
          };
        }
      } else if (currentRoute.startsWith("/cases/")) {
        const caseSlug = currentRoute.replace(/^\/cases\//, "").replace(/\/+$/, "");
        const item = getCaseBySlug(caseSlug);
        if (item) {
          title = item.seoTitle;
          desc = item.metaDescription;
          url = `${SITE_URL}/cases/${item.slug}/`;
          type = "article";
          image = absoluteUrl(item.image) || DEFAULT_OG_IMAGE;
          jsonLd = {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "mainEntityOfPage": { "@type": "WebPage", "@id": url },
                "headline": item.title,
                "description": desc,
                "image": image,
                "author": ORG_REF,
                "publisher": ORG_REF,
                "datePublished": item.datePublished,
                "dateModified": item.dateModified || item.datePublished,
              },
              breadcrumb([
                { name: "Início", url: `${SITE_URL}/` },
                { name: "Cases", url: `${SITE_URL}/cases/` },
                { name: item.client, url },
              ]),
            ],
          };
        }
      }
      break;
  }

  return { title, description: desc, url, type, image, jsonLd };
}

/** Todas as rotas que o build grava como HTML próprio. */
export function getPrerenderRoutes(): Route[] {
  const routes: Route[] = ["/", "/servicos/", "/sobre-nos/", "/contato/", "/blog/"];
  for (const p of BLOG_POSTS) routes.push(`/blog/${p.slug}/`);
  if (CASES.length > 0) {
    routes.push("/cases/");
    for (const c of CASES) routes.push(`/cases/${c.slug}/`);
  }
  return routes;
}
