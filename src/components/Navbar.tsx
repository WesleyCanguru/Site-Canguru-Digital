/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Activity, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  currentRoute: string;
  navigateTo: (route: string) => void;
}

export default function Navbar({ currentRoute, navigateTo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Serviços", path: "/servicos/" },
    { label: "Sobre Nós", path: "/sobre-nos/" },
    { label: "Blog", path: "/blog/" },
    { label: "Contato", path: "/contato/" },
  ];

  const handleLinkClick = (path: string) => {
    navigateTo(path);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f1115]/95 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo da Canguru Digital */}
          <div 
            onClick={() => handleLinkClick("/")}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center transition-all group-hover:border-[#20364d] group-hover:shadow-[0_0_15px_rgba(32,54,77,0.3)]">
              {/* Ícone vetorizado de Canguru Minimalista */}
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="w-5 h-5 text-white transition-transform group-hover:scale-110" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M17 3h4v4" />
                <path d="m12 12 5-5" />
                <path d="M14 8h-4a2 2 0 0 0-2 2v10h12V10a2 2 0 0 0-2-2Z" />
                <path d="M8 12H3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h5" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-black uppercase tracking-[0.2em] text-white block leading-none">Canguru</span>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#20364d] block mt-1 leading-none">Digital</span>
            </div>
          </div>

          {/* Links para Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {menuItems.map((item) => {
                const isActive = currentRoute === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleLinkClick(item.path)}
                    className={`text-xs font-black uppercase tracking-widest transition-all hover:text-white cursor-pointer relative py-2 ${
                      isActive ? "text-white" : "text-slate-400"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#20364d] rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="h-5 w-[1px] bg-white/10" />

            {/* Link da Plataforma Controle */}
            <button
              onClick={() => {
                // Rola suavemente até o elemento se estiver na home, ou navega até lá
                if (currentRoute === "/") {
                  const el = document.getElementById("plataforma-controle");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "center" });
                  } else {
                    handleLinkClick("/contato/");
                  }
                } else {
                  handleLinkClick("/");
                  setTimeout(() => {
                    const el = document.getElementById("plataforma-controle");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                  }, 300);
                }
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0f1115] border border-white/10 hover:border-[#20364d] hover:bg-white/5 text-white transition-all text-xs font-bold shadow-md cursor-pointer group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Área Controle
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Botão de Menu para Mobile */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-850 text-slate-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-850/60 bg-[#0f1115]/95 backdrop-blur-lg">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {menuItems.map((item) => {
              const isActive = currentRoute === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleLinkClick(item.path)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                    isActive 
                      ? "bg-slate-900 text-white border-l-2 border-sky-500" 
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="pt-2 border-t border-slate-850/40">
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleLinkClick("/");
                  setTimeout(() => {
                    const el = document.getElementById("plataforma-controle");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                  }, 350);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-bold uppercase tracking-widest"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Acessar Área Controle
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
