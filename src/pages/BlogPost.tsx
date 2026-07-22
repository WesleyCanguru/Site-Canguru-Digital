/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Tag, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp, 
  User, 
  ArrowRight,
  Share2,
  Check
} from "lucide-react";
import { getPostBySlug, BLOG_POSTS, BlogPostItem } from "../data/blogPosts";

interface BlogPostProps {
  slug?: string;
  navigateTo: (route: string) => void;
}

export default function BlogPost({ slug = "quanto-investir-em-anuncios", navigateTo }: BlogPostProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  // Busca o artigo pelo slug, fallback para o primeiro caso não encontre
  const post: BlogPostItem = getPostBySlug(slug) || BLOG_POSTS[0];

  // Outros artigos relacionados para navegação entre posts
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="bg-[#0f1115] text-white pt-20">
      
      {/* CABEÇALHO DO POST */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => {
              navigateTo("/blog/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-300 hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para o Hub do Blog
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111318] border border-white/10 hover:border-white/20 text-[11px] font-bold text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-black">Link Copiado!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-slate-400" />
                <span>Compartilhar Post</span>
              </>
            )}
          </button>
        </div>

        <div className="space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#20364d]/30 border border-[#20364d] rounded-full text-[10px] font-black uppercase tracking-wider text-sky-300">
            <Tag className="w-3 h-3 text-sky-400" />
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[0.95] text-white">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-bold uppercase tracking-wider pt-2 border-t border-white/10">
            <div className="flex items-center gap-2 text-white">
              {post.authorAvatar ? (
                <img 
                  src={post.authorAvatar} 
                  alt={post.author} 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-7 h-7 rounded-full object-cover border border-white/20" 
                />
              ) : (
                <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center">
                  <User className="w-4 h-4 text-slate-400" />
                </div>
              )}
              <span>{post.author}</span>
            </div>

            <span className="flex items-center gap-1.5 text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              {post.date}
            </span>

            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* IMAGEM DE CAPA COM LAZY LOADING E PRESERVAÇÃO DE ASPECT RATIO */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-slate-950">
          <img
            src={post.image}
            alt={post.title}
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            className="w-full h-auto aspect-video object-cover"
          />
        </div>
      </section>

      {/* CONTEÚDO EDITORIAL */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-6">
          
          <p className="font-semibold text-white text-base sm:text-lg leading-relaxed bg-[#111318] p-5 rounded-xl border border-white/10">
            {post.intro}
          </p>

          <hr className="border-white/10 my-8" />

          {/* Seções de Texto e Títulos */}
          {post.sections.map((section, idx) => (
            <div key={idx} className="space-y-4 pt-4">
              <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                {section.heading}
              </h2>

              {section.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-slate-300 font-medium leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {section.list && (
                <ul className="list-disc pl-5 space-y-3 text-slate-300 font-medium">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* SEÇÃO FAQ DO POST (CASO EXISTA) */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="space-y-6 pt-10 border-t border-white/10 my-8">
              <h3 className="text-lg font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#20364d]" />
                Dúvidas Técnicas Rápidas sobre este tema
              </h3>

              <div className="space-y-3">
                {post.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div 
                      key={idx} 
                      className="bg-[#111318] border border-white/10 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full px-5 py-4 text-left flex justify-between items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide leading-tight">{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-sky-400 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 border-t border-white/5 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium animate-fade-in">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* CAIXA DE RESUMO FINAL */}
          <div className="pt-8">
            <h3 className="text-lg font-black text-white uppercase tracking-tight mb-3">
              Conclusão e Próximos Passos
            </h3>
            <div className="bg-[#111318] p-6 rounded-xl border border-white/10 border-l-4 border-l-[#20364d] font-medium leading-relaxed text-slate-200">
              {post.summary}
            </div>
          </div>

        </div>
      </section>

      {/* OUTROS ARTIGOS RECOMENDADOS (NAVEGAÇÃO ENTRE POSTS) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/10">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#20364d] block">
                Continue Lendo
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight mt-1">
                Outras Análises Estratégicas
              </h3>
            </div>

            <button
              onClick={() => {
                navigateTo("/blog/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-xs font-black uppercase tracking-wider text-slate-300 hover:text-white inline-flex items-center gap-1 cursor-pointer"
            >
              Ver todos ({BLOG_POSTS.length})
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <div 
                key={rel.slug}
                onClick={() => {
                  navigateTo(`/blog/${rel.slug}/`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-[#111318] border border-white/10 hover:border-[#20364d] rounded-2xl p-5 flex flex-col justify-between gap-4 cursor-pointer group transition-all"
              >
                <div className="space-y-2">
                  <span className="text-[9px] font-black uppercase tracking-wider text-[#20364d] block">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-black text-white group-hover:text-sky-300 transition-colors leading-tight">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {rel.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <span>{rel.readTime}</span>
                  <span className="text-[#20364d] group-hover:text-white transition-colors inline-flex items-center gap-1 font-black">
                    Ler artigo
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA INTERNO DO BLOG */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden bg-[#111318] border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tighter leading-none text-white max-w-xl mx-auto">
            Gostaria de aplicar esta estratégia no seu negócio com acompanhamento da Canguru?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Solicite um diagnóstico comercial gratuito. Nós analisamos sua operação e entregamos um plano tático sob medida.
          </p>
          <div className="flex justify-center pt-2">
            <button
              onClick={() => {
                navigateTo("/contato/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2.5 px-8 py-4.5 bg-white hover:bg-[#f4f3ef] text-[#0f1115] font-black text-xs uppercase tracking-widest rounded-full transition-all shadow-lg cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-[#0f1115]" />
              Solicitar diagnóstico da minha operação
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
