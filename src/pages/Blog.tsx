/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { addNewsletter } from "../lib/database";
import { Send, Check, AlertCircle, Database, ArrowRight, Calendar, Clock, Tag } from "lucide-react";

interface BlogProps {
  navigateTo: (route: string) => void;
}

export default function Blog({ navigateTo }: BlogProps) {
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
            ? "Assinado! E-mail gravado no Supabase e webhook enviado ao Make."
            : "Assinado localmente! E-mail salvo no localStorage e visível na Área Controle."
        );
        setEmail("");
      } else {
        setStatus("error");
        setFeedbackMsg(res.error || "Erro no envio.");
      }
    } catch {
      setStatus("error");
      setFeedbackMsg("Erro na conexão.");
    }

    setTimeout(() => {
      setStatus("idle");
      setFeedbackMsg("");
    }, 6000);
  };

  const blogPosts = [
    {
      slug: "quanto-investir-em-anuncios",
      title: "Quanto devo investir em anúncios no Instagram e Google em 2026?",
      excerpt: "Descubra os mínimos técnicos exigidos, nossas recomendações brutas de orçamento e por que valores extremamente baixos travam seus resultados comerciais nas ferramentas de anúncios.",
      date: "21 Julho, 2026",
      category: "Tráfego Pago",
      readTime: "7 min de leitura",
      image: "/src/assets/images/blog_budget_2026_1784653896023.jpg"
    },
    {
      slug: "por-que-pdf-fim-do-mes-nao-funciona",
      title: "Por que relatórios em PDF de meio de mês são uma cortina de fumaça",
      excerpt: "A maioria das agências usa relatórios em PDF estáticos para esconder a falta de entregas e otimização diária. Entenda por que o controle operacional em tempo real muda o jogo comercial.",
      date: "14 Julho, 2026",
      category: "Gestão & Dados",
      readTime: "5 min de leitura",
      image: "https://picsum.photos/seed/reports/800/450"
    },
    {
      slug: "crm-whatsapp-conversao",
      title: "Como estruturar um funil de CRM no WhatsApp para parar de perder leads",
      excerpt: "Não adianta injetar milhares de reais em anúncios se o seu comercial humano demora 30 minutos para responder as mensagens. Veja a esteira de automação ideal.",
      date: "05 Julho, 2026",
      category: "Automação & CRM",
      readTime: "6 min de leitura",
      image: "https://picsum.photos/seed/whatsapp/800/450"
    }
  ];

  return (
    <div className="bg-[#0f1115] text-white pt-20">
      
      {/* HERO BLOG - ALINHADO À ESQUERDA E FULL-BLEED */}
      <section className="w-full py-24 px-6 sm:px-12 lg:px-20 border-b border-white/10 relative overflow-hidden bg-[#0c0e12]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#20364d]/15 rounded-full blur-[140px] -z-10" />
        
        <div className="w-full max-w-5xl space-y-6">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#20364d] block">
            Canguru Analítica
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.93] text-white">
            Estratégia sem rodeios técnicos.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Nós documentamos o que realmente funciona em tráfego pago, CRM de vendas e automações comerciais de alta performance. Sem teorias de livro, apenas dados de campo de batalha.
          </p>

          {/* Inscrição Rápida de Newsletter */}
          <div className="max-w-md pt-2">
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex items-center bg-[#111318] p-1.5 rounded-xl border border-white/15 shadow-xl">
                <input
                  type="email"
                  required
                  placeholder="Cadastre seu e-mail estratégico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-xs px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none font-medium"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-5 py-2.5 bg-white hover:bg-[#f4f3ef] text-[#0f1115] text-xs font-black uppercase tracking-widest rounded-lg transition-all shrink-0 cursor-pointer"
                >
                  Assinar
                </button>
              </div>

              {status !== "idle" && (
                <div className={`p-3 rounded-lg border text-left text-xs flex gap-2 items-start animate-fade-in ${
                  status === "success"
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                    : status === "error"
                    ? "bg-rose-500/10 border-rose-500/30 text-rose-300"
                    : "bg-white/5 border-white/10 text-slate-300"
                }`}>
                  {status === "success" && <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />}
                  {status === "error" && <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />}
                  <span>{feedbackMsg}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* LISTAGEM DE ARTIGOS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => {
            const isFeatured = idx === 0;
            return (
              <div 
                key={post.slug}
                className={`bg-[#111318] rounded-2xl border border-white/10 hover:border-[#20364d]/80 transition-all overflow-hidden flex flex-col justify-between group ${
                  isFeatured ? "md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-12 gap-0" : ""
                }`}
              >
                {/* Imagem do Card */}
                <div className={`relative overflow-hidden ${isFeatured ? "lg:col-span-7 h-64 lg:h-full min-h-[250px]" : "h-48"}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 bg-[#0f1115]/90 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-wider text-[#20364d] backdrop-blur-sm">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>

                {/* Conteúdo do Card */}
                <div className={`p-6 sm:p-8 flex flex-col justify-between gap-6 ${isFeatured ? "lg:col-span-5" : ""}`}>
                  <div className="space-y-3.5">
                    <div className="flex items-center gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-white transition-colors tracking-tight leading-tight">
                      {post.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                      {post.excerpt}
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => navigateTo(`/blog/${post.slug}/`)}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#20364d] hover:text-white transition-colors cursor-pointer"
                    >
                      Ler artigo completo
                      <ArrowRight className="w-4 h-4 text-[#20364d] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
