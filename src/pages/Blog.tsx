/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { addNewsletter } from "../lib/database";
import { 
  Send, 
  Check, 
  AlertCircle, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Tag, 
  Search,
  Sparkles,
  BookOpen
} from "lucide-react";
import { BLOG_POSTS, BlogPostItem } from "../data/blogPosts";

interface BlogProps {
  navigateTo: (route: string) => void;
}

export default function Blog({ navigateTo }: BlogProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [searchQuery, setSearchQuery] = useState<string>("");

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
            ? "Assinado! Seu e-mail foi gravado com sucesso."
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

  const categories = ["Todos", "Tráfego Pago", "Gestão & Dados", "Automação & CRM", "SEO & Conversão", "Estratégia"];

  // Filtragem de artigos por Categoria e Busca por palavra-chave
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
      const matchesQuery = 
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Artigo em Destaque (Featured)
  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  }, []);

  return (
    <div className="bg-[#0f1115] text-white pt-20">
      
      {/* HERO BLOG - HUB DE CONTEÚDO */}
      <section className="w-full py-20 sm:py-24 px-6 sm:px-12 lg:px-20 border-b border-white/10 relative overflow-hidden bg-[#0c0e12]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#20364d]/15 rounded-full blur-[140px] -z-10" />
        
        <div className="w-full max-w-6xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#20364d]/30 border border-[#20364d] text-sky-300 text-[10px] font-extrabold uppercase tracking-[0.2em]">
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            Hub de Conteúdo Estratégico — Canguru Analítica
          </div>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.93] text-white">
              Estratégia sem rodeios técnicos.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Documentamos semanalmente o que realmente funciona em tráfego pago, automação de WhatsApp, CRM e conversão de landing pages. Sem teorias de livro, apenas dados de campo de batalha.
            </p>
          </div>

          {/* Barra de Busca e Inscrição de Newsletter */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-4xl pt-2">
            
            {/* Campo de Busca por Palavra-chave */}
            <div className="md:col-span-6 relative flex items-center bg-[#111318] p-1.5 rounded-xl border border-white/15 shadow-xl">
              <Search className="w-4 h-4 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                placeholder="Buscar por tema ou palavra-chave..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-xs px-3 py-2 text-white placeholder-slate-500 focus:outline-none font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-[10px] uppercase font-bold text-slate-400 hover:text-white px-2"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Inscrição Rápida de Newsletter */}
            <div className="md:col-span-6">
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative flex items-center bg-[#111318] p-1.5 rounded-xl border border-white/15 shadow-xl">
                  <input
                    type="email"
                    required
                    placeholder="Seu melhor e-mail quinzenal..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent text-xs px-3 py-2 text-white placeholder-slate-500 focus:outline-none font-medium"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-4 py-2 bg-white hover:bg-[#f4f3ef] text-[#0f1115] text-xs font-black uppercase tracking-widest rounded-lg transition-all shrink-0 cursor-pointer flex items-center gap-1.5"
                  >
                    <Send className="w-3 h-3 text-[#0f1115]" />
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
        </div>
      </section>

      {/* FILTRO DE CATEGORIAS EM TABS */}
      <section className="w-full border-b border-white/10 bg-[#0f1115] px-6 sm:px-12 lg:px-20 py-4 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3 min-w-max">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mr-2">
            Categorias:
          </span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-[#20364d] text-white border border-sky-400/40 shadow-md"
                    : "bg-[#111318] text-slate-400 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* CARD DE ARTIGO EM DESTAQUE (HERO FEATURED) - VISÍVEL QUANDO NÃO HÁ FILTRO ATIVO */}
      {selectedCategory === "Todos" && !searchQuery && (
        <section className="py-12 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto border-b border-white/10">
          <div className="bg-[#111318] rounded-3xl border border-white/15 overflow-hidden grid grid-cols-1 lg:grid-cols-12 hover:border-[#20364d] transition-all group shadow-2xl">
            
            {/* Lado Esquerdo: Imagem do Destaque com Lazy Loading */}
            <div className="lg:col-span-7 relative overflow-hidden min-h-[280px] sm:min-h-[360px]">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0f1115]/90 border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest text-sky-300 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                Artigo em Destaque
              </div>
            </div>

            {/* Lado Direito: Informações do Destaque */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#20364d]/40 border border-[#20364d] rounded-md text-[10px] font-black uppercase tracking-wider text-sky-300">
                  <Tag className="w-3 h-3 text-sky-400" />
                  {featuredPost.category}
                </span>

                <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-sky-200 transition-colors tracking-tight leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <button
                  onClick={() => {
                    navigateTo(`/blog/${featuredPost.slug}/`);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-[#f4f3ef] text-[#0f1115] font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg cursor-pointer"
                >
                  Ler Análise Completa
                  <ArrowRight className="w-4 h-4 text-[#0f1115]" />
                </button>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* GRID DE ARTIGOS COMPLETO */}
      <section className="py-16 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
            {selectedCategory === "Todos" ? "Todas as Publicações" : `Publicações em ${selectedCategory}`}
            <span className="text-xs font-mono font-bold text-slate-400 ml-3">
              ({filteredPosts.length} {filteredPosts.length === 1 ? "artigo" : "artigos"})
            </span>
          </h3>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="p-12 text-center bg-[#111318] border border-white/10 rounded-2xl space-y-4">
            <p className="text-sm text-slate-400 font-medium">
              Nenhum artigo encontrado para os filtros selecionados.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("Todos");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 bg-[#20364d] text-white text-xs font-black uppercase tracking-wider rounded-xl cursor-pointer"
            >
              Resetar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div 
                key={post.slug}
                className="bg-[#111318] rounded-2xl border border-white/10 hover:border-[#20364d] transition-all overflow-hidden flex flex-col justify-between group shadow-xl"
              >
                {/* Imagem do Card com Lazy Loading */}
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 bg-[#0f1115]/90 border border-white/15 rounded-full text-[9px] font-black uppercase tracking-wider text-sky-300 backdrop-blur-sm">
                    <Tag className="w-3 h-3 text-sky-400" />
                    {post.category}
                  </span>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 flex flex-col justify-between gap-6 flex-grow">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg font-black text-white group-hover:text-sky-300 transition-colors tracking-tight leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-xs text-slate-400 leading-relaxed font-medium line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">
                      Por {post.author}
                    </span>

                    <button
                      onClick={() => {
                        navigateTo(`/blog/${post.slug}/`);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-sky-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Ler artigo
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
