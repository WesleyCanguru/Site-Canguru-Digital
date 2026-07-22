/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { addNewsletter } from "../lib/database";
import { Send, ArrowUpRight, Check, AlertCircle, Database } from "lucide-react";

interface FooterProps {
  navigateTo: (route: string) => void;
}

export default function Footer({ navigateTo }: FooterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await addNewsletter(email);
      if (res.success) {
        setStatus("success");
        setFeedbackMsg(
          res.mode === "real" 
            ? "Conectado! Seu e-mail foi salvo diretamente no Supabase e disparado para o Make." 
            : "Salvo localmente! Seus dados foram guardados no localStorage e estão visíveis na Área Controle."
        );
        setEmail("");
      } else {
        setStatus("error");
        setFeedbackMsg(res.error || "Erro ao processar inscrição.");
      }
    } catch {
      setStatus("error");
      setFeedbackMsg("Falha na conexão.");
    }

    setTimeout(() => {
      setStatus("idle");
      setFeedbackMsg("");
    }, 6000);
  };

  const handleLinkClick = (path: string) => {
    navigateTo(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { label: "Instagram", url: "https://instagram.com/cangurudigital" },
    { label: "LinkedIn", url: "https://linkedin.com/company/cangurudigital" },
    { label: "Facebook", url: "https://facebook.com/cangurudigital" },
  ];

  return (
    <footer className="bg-[#0f1115] border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Coluna 1: Branding */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-white" strokeWidth="2.5">
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
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Não vendemos marketing. Entregamos controle. Uma operação de tráfego pago, automação e CRM apoiada em tecnologia própria.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white">Navegação</h4>
            <ul className="space-y-3 text-xs font-bold uppercase tracking-widest">
              <li>
                <button onClick={() => handleLinkClick("/")} className="hover:text-white cursor-pointer transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/servicos/")} className="hover:text-white cursor-pointer transition-colors">Serviços</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/sobre-nos/")} className="hover:text-white cursor-pointer transition-colors">Sobre Nós</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/contato/")} className="hover:text-white cursor-pointer transition-colors">Contato</button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("/blog/")} className="hover:text-white cursor-pointer transition-colors">Blog</button>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Captura Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-white">Newsletter Inteligente</h4>
            <p className="text-xs leading-relaxed max-w-xs text-slate-400">
              Receba análises brutas e estratégias práticas de tráfego pago e funis de CRM. Sem spam, sem enrolação.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#111318] border border-white/10 text-xs px-4 py-3 pr-10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-[#20364d] transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="absolute right-2 p-1.5 bg-slate-900 border border-white/10 text-[#20364d] hover:text-white hover:border-[#20364d] rounded-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {/* Toast / Status */}
              {status !== "idle" && (
                <div className={`p-3 rounded-lg border text-xs flex gap-2 items-start animate-fade-in ${
                  status === "success" 
                    ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-400" 
                    : status === "error" 
                    ? "bg-rose-500/5 border-rose-500/20 text-rose-400" 
                    : "bg-[#20364d]/5 border-[#20364d]/20 text-white"
                }`}>
                  {status === "success" && <Check className="w-4 h-4 shrink-0 mt-0.5" />}
                  {status === "error" && <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />}
                  {status === "loading" && <Database className="w-4 h-4 animate-spin shrink-0 mt-0.5" />}
                  <span>{feedbackMsg || "Processando..."}</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Linha de Direitos Autorais */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 Canguru Digital. Todos os direitos reservados. CNPJ 31.428.194/0001-02</p>
          <p className="flex items-center gap-1">
            Operação transparente e orientada por 
            <span className="text-white font-bold uppercase tracking-wider text-[10px] bg-[#20364d]/30 px-1.5 py-0.5 rounded border border-[#20364d]/40">Controle Real</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
