/**
 * Página /cases: lista dos estudos de caso (formato da Agência Mestre).
 * Só é roteada quando src/data/cases.ts tem pelo menos 1 case.
 */

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { CASES, CASE_SERVICES, CaseService } from "../data/cases";

interface CasesProps {
  navigateTo: (route: string) => void;
}

export default function Cases({ navigateTo }: CasesProps) {
  const [filter, setFilter] = useState<CaseService | "Todos">("Todos");

  const tabs = [
    { label: "Todos" as const, count: CASES.length },
    ...CASE_SERVICES.map((s) => ({ label: s, count: CASES.filter((c) => c.service === s).length })).filter((t) => t.count > 0),
  ];

  const visible = filter === "Todos" ? CASES : CASES.filter((c) => c.service === filter);

  return (
    <div className="bg-[#0f1115] text-white pt-20">
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-6">
        <nav aria-label="Breadcrumb" className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
          <a href="/" onClick={(e) => { e.preventDefault(); navigateTo("/"); }} className="hover:text-white">Início</a>
          <span className="mx-2 text-slate-600">/</span>
          <span className="text-slate-200">Cases</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.95]">
          Cases de Sucesso
        </h1>
        <p className="max-w-2xl text-slate-300 font-medium leading-relaxed">
          Resultados de clientes da Canguru Digital, com os números, o período e o que fizemos em cada projeto.
        </p>

        {tabs.length > 2 && (
          <div className="flex flex-wrap gap-2 pt-4">
            {tabs.map((t) => (
              <button
                key={t.label}
                onClick={() => setFilter(t.label)}
                className={`px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider border transition-colors cursor-pointer ${
                  filter === t.label
                    ? "bg-[#20364d] border-[#20364d] text-white"
                    : "bg-[#111318] border-white/10 text-slate-300 hover:text-white"
                }`}
              >
                {t.label} ({t.count})
              </button>
            ))}
          </div>
        )}
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((c) => (
          <a
            key={c.slug}
            href={`/cases/${c.slug}/`}
            onClick={(e) => { e.preventDefault(); navigateTo(`/cases/${c.slug}/`); }}
            className="group block bg-[#111318] border border-white/10 hover:border-white/25 rounded-2xl p-6 space-y-4 transition-colors"
          >
            <div className="text-4xl font-black tracking-tighter text-white">{c.card.value}</div>
            <p className="text-slate-300 font-medium leading-relaxed">{c.card.text}</p>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <span>{c.client} · {c.service}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        ))}
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Quer os mesmos resultados?</h2>
        <a
          href="/contato/"
          onClick={(e) => { e.preventDefault(); navigateTo("/contato/"); }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#0f1115] text-xs font-black uppercase tracking-widest hover:bg-slate-200 transition-colors"
        >
          Quero falar com a Canguru
          <ArrowRight className="w-4 h-4" />
        </a>
      </section>
    </div>
  );
}
