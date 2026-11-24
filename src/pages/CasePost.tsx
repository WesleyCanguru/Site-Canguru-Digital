/**
 * Página /cases/<slug>: estudo de caso no formato da Agência Mestre.
 * Ordem das seções em Ferramentas-IA/Skills/estudo-de-caso/references/modelo-canguru-pt.md.
 */

import type { FC, MouseEvent } from "react";
import { ArrowRight } from "lucide-react";
import { CASES, CaseSection, getCaseBySlug } from "../data/cases";

interface CasePostProps {
  slug: string;
  navigateTo: (route: string) => void;
}

const SERVICE_LINK = "/servicos/";

const Section: FC<{ id?: string; title?: string; section: CaseSection }> = ({ id, title, section }) => {
  const heading = title || section.heading;
  return (
    <div id={id} className="space-y-4 pt-6 scroll-mt-28">
      {heading && (
        <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">{heading}</h2>
      )}
      {section.paragraphs.map((p, i) => (
        <p key={i} className="text-slate-300 font-medium leading-relaxed">{p}</p>
      ))}
      {section.list && (
        <ul className="list-disc pl-5 space-y-3 text-slate-300 font-medium">
          {section.list.map((item, i) => <li key={i} className="leading-relaxed">{item}</li>)}
        </ul>
      )}
    </div>
  );
};

export default function CasePost({ slug, navigateTo }: CasePostProps) {
  const item = getCaseBySlug(slug);
  if (!item) return null;

  const go = (route: string) => (e: MouseEvent) => {
    e.preventDefault();
    navigateTo(route);
  };

  const others = [
    ...CASES.filter((c) => c.slug !== item.slug && c.service === item.service),
    ...CASES.filter((c) => c.slug !== item.slug && c.service !== item.service),
  ].slice(0, 3);

  const toc = [
    { id: "desafio", label: "O desafio" },
    { id: "estrategia", label: "A estratégia" },
    { id: "resultados", label: "Os resultados" },
    { id: "destaques", label: "Destaques da estratégia" },
    ...(item.adjustments ? [{ id: "ajustes", label: "O que ajustamos no caminho" }] : []),
    { id: "impacto", label: "Impacto no negócio" },
    { id: "satisfacao", label: "Satisfação do cliente" },
  ];

  return (
    <div className="bg-[#0f1115] text-white pt-20">
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6">
        <nav aria-label="Breadcrumb" className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
          <a href="/" onClick={go("/")} className="hover:text-white">Início</a>
          <span className="mx-2 text-slate-600">/</span>
          <a href="/cases/" onClick={go("/cases/")} className="hover:text-white">Cases</a>
          <span className="mx-2 text-slate-600">/</span>
          <span className="text-slate-200">{item.client}</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[0.95]">{item.title}</h1>
        <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">{item.subtitle}</p>

        <div className="grid sm:grid-cols-2 gap-4 pt-2">
          {item.highlights.map((h, i) => (
            <div key={i} className="bg-[#111318] border border-white/10 rounded-2xl p-6">
              <div className="text-4xl sm:text-5xl font-black tracking-tighter">{h.value}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 pt-2">{h.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#contato-case"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#0f1115] text-xs font-black uppercase tracking-widest hover:bg-slate-200 transition-colors"
          >
            Fale com a gente
            <ArrowRight className="w-4 h-4" />
          </a>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Cliente: <span className="text-slate-200">{item.client}</span>
            <span className="mx-2 text-slate-600">·</span>
            Serviço: <a href={SERVICE_LINK} onClick={go(SERVICE_LINK)} className="text-sky-300 hover:text-white">{item.service}</a>
          </span>
        </div>
      </section>

      {item.image && (
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
            <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="w-full h-auto aspect-video object-cover" />
          </div>
        </section>
      )}

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-6">
        <nav aria-label="Neste case" className="bg-[#111318] border border-white/10 rounded-xl p-5">
          <div className="text-[11px] font-black uppercase tracking-widest text-slate-400 pb-3">Neste case</div>
          <ul className="space-y-2 text-sm font-semibold">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-slate-200 hover:text-white">{t.label}</a></li>
            ))}
          </ul>
        </nav>

        {item.intro.map((p, i) => (
          <p key={i} className="text-slate-300 font-medium leading-relaxed">{p}</p>
        ))}

        <Section id="desafio" title="O desafio" section={item.challenge} />

        <div id="estrategia" className="space-y-2 pt-6 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">A estratégia</h2>
          {item.strategy.map((s, i) => <Section key={i} section={s} />)}
        </div>

        <div id="resultados" className="space-y-4 pt-6 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">Os resultados</h2>
          <ul className="list-disc pl-5 space-y-3 text-slate-300 font-medium">
            {item.results.map((r, i) => <li key={i} className="leading-relaxed">{r}</li>)}
          </ul>
        </div>

        <div id="destaques" className="space-y-2 pt-6 scroll-mt-28">
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">Destaques da estratégia</h2>
          {item.strategyHighlights.map((s, i) => <Section key={i} section={s} />)}
        </div>

        {item.adjustments && <Section id="ajustes" title="O que ajustamos no caminho" section={item.adjustments} />}
        <Section id="impacto" title="Impacto no negócio" section={item.businessImpact} />
        <Section id="satisfacao" title="Satisfação do cliente" section={item.satisfaction} />

        {item.testimonial && (
          <figure className="bg-[#111318] border border-white/10 rounded-2xl p-6 space-y-4 mt-8">
            <blockquote className="text-white text-lg font-semibold leading-relaxed">"{item.testimonial.text}"</blockquote>
            <figcaption className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-400">
              {item.testimonial.photo && (
                <img src={item.testimonial.photo} alt={item.testimonial.name} loading="lazy" className="w-10 h-10 rounded-full object-cover border border-white/20" />
              )}
              <span><span className="text-white">{item.testimonial.name}</span> · {item.testimonial.role}</span>
            </figcaption>
          </figure>
        )}
      </section>

      <section id="contato-case" className="pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto scroll-mt-28">
        <div className="bg-[#20364d]/30 border border-[#20364d] rounded-2xl p-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Quer os mesmos resultados?</h2>
          <a
            href="/contato/"
            onClick={go("/contato/")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#0f1115] text-xs font-black uppercase tracking-widest hover:bg-slate-200 transition-colors"
          >
            Quero falar com a Canguru
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {others.length > 0 && (
        <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-6">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">Outros cases de {item.service}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((c) => (
              <a key={c.slug} href={`/cases/${c.slug}/`} onClick={go(`/cases/${c.slug}/`)} className="block bg-[#111318] border border-white/10 hover:border-white/25 rounded-2xl p-6 space-y-3 transition-colors">
                <div className="text-3xl font-black tracking-tighter">{c.card.value}</div>
                <p className="text-slate-300 font-medium leading-relaxed">{c.card.text}</p>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{c.client} · {c.service}</div>
              </a>
            ))}
          </div>
          <a href="/cases/" onClick={go("/cases/")} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-300 hover:text-white">
            Ver todos os cases <ArrowRight className="w-4 h-4" />
          </a>
        </section>
      )}
    </div>
  );
}
