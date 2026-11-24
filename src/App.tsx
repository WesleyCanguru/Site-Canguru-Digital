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
import Cases from "./pages/Cases";
import CasePost from "./pages/CasePost";
import { parsePathToRoute, getRouteMeta, Route } from "./seo";

interface AppProps {
  /** Rota usada na pré-renderização do build (no navegador, vem da URL). */
  initialRoute?: Route;
}

export default function App({ initialRoute }: AppProps = {}) {
  const [currentRoute, setCurrentRoute] = useState<Route>(() => {
    if (initialRoute) return initialRoute;
    if (typeof window !== "undefined") {
      return parsePathToRoute(window.location.pathname);
    }
    return "/";
  });

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
    const routeFromUrl = parsePathToRoute(window.location.pathname);
    setCurrentRoute(routeFromUrl);

    // Garante que se o usuário acessar /contato sem barra, a URL seja normalizada de forma transparente
    if (window.location.pathname !== routeFromUrl && window.location.pathname !== "/") {
      window.history.replaceState({}, "", routeFromUrl);
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
  // (mesmos dados que o build grava no HTML de cada rota, em src/seo.ts)
  useEffect(() => {
    const { title, description: desc, url, type, image, jsonLd } = getRouteMeta(currentRoute);

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
    updateMetaTag("property", "og:image", image);

    // Atualiza ou cria tag canonical auto-referenciada com www
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", url);

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
    if (currentRoute === "/") return <Home navigateTo={navigateTo} />;
    if (currentRoute === "/servicos/") return <Servicos navigateTo={navigateTo} />;
    if (currentRoute === "/sobre-nos/") return <Sobre navigateTo={navigateTo} />;
    if (currentRoute === "/contato/") return <Contato navigateTo={navigateTo} />;
    if (currentRoute === "/blog/") return <Blog navigateTo={navigateTo} />;
    if (currentRoute.startsWith("/blog/")) {
      const slug = currentRoute.replace(/^\/blog\//, "").replace(/\/+$/, "");
      return <BlogPost slug={slug} navigateTo={navigateTo} />;
    }
    if (currentRoute === "/cases/") return <Cases navigateTo={navigateTo} />;
    if (currentRoute.startsWith("/cases/")) {
      const slug = currentRoute.replace(/^\/cases\//, "").replace(/\/+$/, "");
      return <CasePost slug={slug} navigateTo={navigateTo} />;
    }
    return <Home navigateTo={navigateTo} />;
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
