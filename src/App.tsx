/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsapp from "./components/FloatingWhatsapp";

// Importações das Páginas
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

type Route = "/" | "/servicos/" | "/sobre-nos/" | "/contato/" | "/blog/" | "/blog/quanto-investir-em-anuncios/";

// Utilitário para mapear e normalizar o path do navegador para uma rota conhecida da agência
const parsePathToRoute = (path: string): Route => {
  // Remove querystrings e hashes
  const urlWithoutQuery = path.split("?")[0].split("#")[0];
  // Normaliza string removendo barras duplicadas ou finais
  const cleanPath = urlWithoutQuery.trim().toLowerCase().replace(/\/+$/, "");

  if (cleanPath === "" || cleanPath === "/" || cleanPath === "/index.html") return "/";
  if (cleanPath === "/servicos" || cleanPath === "/servicos/") return "/servicos/";
  if (cleanPath === "/sobre-nos" || cleanPath === "/sobre" || cleanPath === "/sobre-nos/") return "/sobre-nos/";
  if (cleanPath === "/contato" || cleanPath === "/contato/") return "/contato/";
  if (cleanPath === "/blog" || cleanPath === "/blog/") return "/blog/";
  if (cleanPath === "/blog/quanto-investir-em-anuncios") return "/blog/quanto-investir-em-anuncios/";

  // Fallback seguro caso a rota seja um prefixo
  if (cleanPath.startsWith("/servicos")) return "/servicos/";
  if (cleanPath.startsWith("/sobre")) return "/sobre-nos/";
  if (cleanPath.startsWith("/contato")) return "/contato/";
  if (cleanPath.startsWith("/blog/quanto-investir-em-anuncios")) return "/blog/quanto-investir-em-anuncios/";
  if (cleanPath.startsWith("/blog")) return "/blog/";

  return "/";
};

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>("/");

  // Inicializa Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Inicializa a rota baseada na URL atual do navegador no primeiro carregamento
  useEffect(() => {
    const initialRoute = parsePathToRoute(window.location.pathname);
    setCurrentRoute(initialRoute);

    // Garante que se o usuário acessar /contato sem barra, a URL seja normalizada de forma transparente
    if (window.location.pathname !== initialRoute && window.location.pathname !== "/") {
      window.history.replaceState({}, "", initialRoute);
    }

    // Escuta eventos de "Voltar" e "Avançar" do navegador para roteamento orgânico
    const handlePopState = () => {
      const route = parsePathToRoute(window.location.pathname);
      setCurrentRoute(route);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Navegador interno sem reload que atualiza a URL de forma amigável
  const navigateTo = (route: string) => {
    const targetRoute = parsePathToRoute(route);
    setCurrentRoute(targetRoute);
    window.history.pushState({}, "", targetRoute);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Gerenciamento Dinâmico de Metadados SEO & Injeção de JSON-LD estruturado
  useEffect(() => {
    let title = "Canguru Digital | Controle Operacional & Tráfego Pago de Alta Performance";
    let desc = "A Canguru não vende marketing, entrega controle. Tráfego pago focado em ROI, conteúdo estratégico de autoridade e plataforma operacional própria em tempo real.";
    let type = "website";
    let url = "https://cangurudigital.com.br/";
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
        title = "Canguru Digital | Controle Operacional & Tráfego Pago de Alta Performance";
        desc = "A Canguru não vende marketing, entrega controle. Tráfego pago focado em ROI, conteúdo estratégico de autoridade e plataforma operacional própria em tempo real.";
        url = "https://cangurudigital.com.br/";
        jsonLd = {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              "@id": "https://cangurudigital.com.br/#service",
              "name": "Canguru Digital",
              "image": "https://cangurudigital.com.br/src/assets/images/wesley_camelo_1784653866650.jpg",
              "url": "https://cangurudigital.com.br",
              "telephone": "+55-11-99407-5149",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Paulista, 1000",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "postalCode": "01310-100",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-23.5614",
                "longitude": "-46.6559"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              "founder": {
                "@type": "Person",
                "name": "Wesley Camelo"
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
        url = "https://cangurudigital.com.br/servicos/";
        jsonLd = {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Serviços Canguru Digital",
          "url": "https://cangurudigital.com.br/servicos/",
          "description": desc,
          "provider": {
            "@type": "Organization",
            "name": "Canguru Digital"
          }
        };
        break;
      case "/sobre-nos/":
        title = "Sobre Nós | Canguru Digital | Operação Transparente";
        desc = "Conheça a história da Canguru Digital, fundada em 2018 por Wesley Camelo. Entenda nossa trajetória de serviços individuais a uma operação técnica com tecnologia própria.";
        url = "https://cangurudigital.com.br/sobre-nos/";
        break;
      case "/contato/":
        title = "Contato & Diagnóstico de Tráfego Pago | Canguru Digital";
        desc = "Entre em contato conosco e solicite um diagnóstico gratuito dos seus canais de vendas. Fale via formulário seguro ou diretamente por WhatsApp com o time.";
        url = "https://cangurudigital.com.br/contato/";
        break;
      case "/blog/":
        title = "Blog Canguru Analítica | Tráfego Pago, CRM & Automações";
        desc = "Artigos práticos, dados de campo de batalha e estratégias reais de tráfego pago para empresas. Leia análises brutas e diretas sobre o mercado digital de 2026.";
        url = "https://cangurudigital.com.br/blog/";
        type = "blog";
        break;
      case "/blog/quanto-investir-em-anuncios/":
        title = "Quanto Investir em Anúncios no Instagram e Google em 2026? | Blog";
        desc = "Descubra o orçamento mínimo exigido, nossas recomendações reais de investimento de entrada e por que orçamentos muito baixos sufocam seus resultados nas ferramentas.";
        url = "https://cangurudigital.com.br/blog/quanto-investir-em-anuncios/";
        type = "article";
        jsonLd = {
          "@context": "https://schema.org",
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://cangurudigital.com.br/blog/quanto-investir-em-anuncios/"
          },
          "headline": "Quanto devo investir em anúncios no Instagram e Google em 2026?",
          "description": desc,
          "image": "https://cangurudigital.com.br/src/assets/images/blog_budget_2026_1784653896023.jpg",
          "author": {
            "@type": "Person",
            "name": "Wesley Camelo",
            "jobTitle": "Founder & Diretor de Tráfego"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Canguru Digital",
            "logo": {
              "@type": "ImageObject",
              "url": "https://cangurudigital.com.br/src/assets/images/wesley_camelo_1784653866650.jpg"
            }
          },
          "datePublished": "2026-07-21T10:10:00-03:00",
          "dateModified": "2026-07-21T10:10:00-03:00"
        };
        break;
    }

    // Atualiza cabeçalho
    document.title = title;
    
    // Atualiza metatags existentes ou as cria dinamicamente
    const updateMetaTag = (nameAttr: string, valueAttr: string, content: string) => {
      let meta = document.querySelector(`meta[${nameAttr}="${valueAttr}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(nameAttr, valueAttr);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateMetaTag("name", "description", desc);
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", desc);
    updateMetaTag("property", "og:type", type);
    updateMetaTag("property", "og:url", url);
    updateMetaTag("property", "og:image", "https://cangurudigital.com.br/src/assets/images/blog_budget_2026_1784653896023.jpg");

    // Injeta JSON-LD de forma técnica e segura
    const scriptId = "canguru-json-ld";
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement;
    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = scriptId;
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    } else {
      if (scriptEl) {
        scriptEl.remove();
      }
    }
  }, [currentRoute]);

  // Seletor de visualização de páginas
  const renderPage = () => {
    switch (currentRoute) {
      case "/":
        return <Home navigateTo={navigateTo} />;
      case "/servicos/":
        return <Servicos navigateTo={navigateTo} />;
      case "/sobre-nos/":
        return <Sobre navigateTo={navigateTo} />;
      case "/contato/":
        return <Contato navigateTo={navigateTo} />;
      case "/blog/":
        return <Blog navigateTo={navigateTo} />;
      case "/blog/quanto-investir-em-anuncios/":
        return <BlogPost navigateTo={navigateTo} />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f1115] text-slate-100 font-sans selection:bg-sky-500/20 selection:text-white">
      {/* Navbar global */}
      <Navbar currentRoute={currentRoute} navigateTo={navigateTo} />

      {/* Container de conteúdo com transição suave entre páginas */}
      <main className="flex-grow overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer global com captura de newsletter integrada */}
      <Footer navigateTo={navigateTo} />

      {/* Botão flutuante fixo de WhatsApp */}
      <FloatingWhatsapp />
    </div>
  );
}
