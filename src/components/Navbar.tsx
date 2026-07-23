/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Activity, Menu, X, ArrowUpRight } from "lucide-react";
import logoImg from "../assets/images/Rebranding_Canguru_Digital_Horizontal_SemFundo.png";

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
    { label: "Contato", path: "/contato/" },
    { label: "Blog", path: "/blog/" },
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
            className="flex items-center cursor-pointer group"
          >
            <img 
              src={logoImg} 
              alt="Canguru Digital" 
              referrerPolicy="no-referrer"
              className="h-14 sm:h-15 w-auto object-contain transition-transform group-hover:scale-105"
            />
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

            {/* Link do Formulário de Diagnóstico */}
            <button
              onClick={() => {
                if (currentRoute === "/") {
                  const el = document.getElementById("diagnostico");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  } else {
                    handleLinkClick("/contato/");
                  }
                } else {
                  handleLinkClick("/contato/");
                }
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-[#f4f3ef] text-[#0f1115] transition-all text-xs font-black uppercase tracking-wider shadow-md cursor-pointer group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Diagnóstico Grátis
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0f1115]" />
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
                  if (currentRoute === "/") {
                    const el = document.getElementById("diagnostico");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    else handleLinkClick("/contato/");
                  } else {
                    handleLinkClick("/contato/");
                  }
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white text-[#0f1115] text-xs font-black uppercase tracking-widest shadow-lg"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Solicitar Diagnóstico Grátis
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
