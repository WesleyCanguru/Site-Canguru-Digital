/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import TiltCard from "../components/TiltCard";
import { MessageSquare, Calendar, Award, ShieldCheck } from "lucide-react";

interface SobreProps {
  navigateTo: (route: string) => void;
}

export default function Sobre({ navigateTo }: SobreProps) {
  const resumePrincipios = [
    { title: "Comprometimento", desc: "Campanhas ajustadas e otimizadas diariamente para proteger e multiplicar cada real investido." },
    { title: "Excelência", desc: "Nível técnico impecável, do pixel e código do site às peças e copys de anúncios." },
    { title: "Transparência", desc: "Você vê exatamente o que fazemos, quando fazemos, com alinhamento constante." },
    { title: "Ética", desc: "Sem promessas impossíveis de enriquecimento rápido. Falamos a verdade do jogo comercial." },
    { title: "Inovação", desc: "Investimos em tecnologia de gestão de dados para entregar controle comercial absoluto." },
  ];

  return (
    <div className="bg-[#0f1115] text-white pt-20 overflow-x-hidden">
      
      {/* HERO SOBRE - FULL-BLEED COM ANIMACAO SUAVE */}
      <section className="w-full py-24 px-6 sm:px-12 lg:px-20 border-b border-white/10 relative overflow-hidden bg-[#0c0e12]">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#20364d]/15 rounded-full blur-[140px] -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl space-y-6"
        >
          <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#20364d] block">
            Nossa História & Propósito
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.93] text-white">
            Uma agência construída para não deixar cliente no escuro.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Nascemos em 2018 para combater a falta de clareza, os relatórios confusos e a lentidão que sufocam a relação entre agências tradicionais e empresas brasileiras.
          </p>
        </motion.div>
      </section>

      {/* SEÇÃO HISTÓRIA */}
      <section className="w-full py-24 px-6 sm:px-12 lg:px-20 border-b border-white/10 bg-[#0f1115]">
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          
          {/* Lado Esquerdo: Textos de História */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#20364d] block">
              A Trajetória
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Como passamos de serviço avulso a uma operação de tecnologia integrada
            </h2>
            
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              A Canguru Digital foi fundada em 2018 por Wesley Camelo. No início, Wesley operava como prestador de serviços independente focado em tráfego pago e SEO local. Conforme os resultados escalaram, ficou evidente que as empresas não sofriam apenas por falta de anúncios técnicos, mas sim pela total falta de visibilidade sobre o trabalho que as agências de marketing realizavam.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              O modelo tradicional de "mande um relatório em PDF no fim do mês e evite chamadas no WhatsApp" parecia quebrado, opaco e gerava enorme desconfiança. Os clientes queriam saber onde cada centavo de anúncios era injetado e quais estratégias estavam sendo executadas no dia a dia de forma transparente.
            </p>
            <p className="text-sm text-slate-200 font-bold leading-relaxed">
              Por isso, decidimos reconstruir a agência de forma audaciosa: paramos de vender pacotes engessados e começamos a desenhar operações integradas respaldadas em acompanhamento transparente e otimizações diárias.
            </p>
          </div>

          {/* Lado Direito: Marcos Visuais */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#111318] p-8 rounded-2xl border border-white/10 space-y-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-white shrink-0">
                  <Calendar className="w-6 h-6 text-[#20364d]" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-white">Fundação</h4>
                  <p className="text-xs text-slate-400 mt-1">Criada em 2018 com foco estrito em ROI comercial.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-white shrink-0">
                  <Award className="w-6 h-6 text-[#20364d]" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-white">Consolidação</h4>
                  <p className="text-xs text-slate-400 mt-1">Mais de 6 anos de mercado atuando em dezenas de frentes de tráfego.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#20364d]" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-white">Transparência Real</h4>
                  <p className="text-xs text-slate-400 mt-1">Garantia operacional que integra cliente e agência com visibilidade total.</p>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </section>

      {/* SEÇÃO QUEM TOCA A OPERAÇÃO */}
      <section className="w-full py-24 px-6 sm:px-12 lg:px-20 border-b border-white/10 bg-[#0c0e12]">
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          
          {/* Lado Esquerdo: Foto do Fundador */}
          <div className="lg:col-span-5 relative flex justify-center lg:order-2">
            <TiltCard scale={1.02} maxTilt={8}>
              <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/15 shadow-2xl bg-slate-950/40 p-3 group">
                <img
                  src="/assets/images/Wesley-Camelo-Fundador.jpeg"
                  alt="Wesley Camelo"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-[3/4] object-cover object-top rounded-xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </TiltCard>
          </div>

          {/* Lado Direito: Texto de Atuação */}
          <div className="lg:col-span-7 space-y-6 lg:order-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#20364d] block">
              Liderança Operacional
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Quem toca a operação</h2>
            
            <p className="text-sm text-slate-300 leading-relaxed font-medium">
              Wesley Camelo é o fundador e diretor de estratégia e tráfego da Canguru Digital. Com formação voltada à tecnologia aplicada e anos de imersão no mercado de tráfego pago de alta performance, ele atua ativamente no desenho estratégico e nas otimizações técnicas de todas as contas da agência.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed font-semibold">
              Na Canguru, o fundador não é apenas uma figura comercial que vende o projeto e desaparece. Ele lidera pessoalmente a mesa estratégica de tráfego e a aprovação de todas as campanhas e esteiras de vendas que colocamos no ar.
            </p>

            <div className="p-6 bg-[#111318] rounded-xl border border-white/10 border-l-4 border-l-[#20364d]">
              <p className="text-xs sm:text-sm italic text-slate-300 leading-relaxed">
                "Não criamos apenas anúncios. Criamos sistemas que unem marketing, dados e processos comerciais para que nossos clientes tenham controle real sobre o que gera vendas."
              </p>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-white mt-3 block">
                — Wesley Camelo
              </span>
            </div>
          </div>

        </motion.div>
      </section>

      {/* SEÇÃO PRINCÍPIOS RESUMIDOS */}
      <section className="w-full py-24 px-6 sm:px-12 lg:px-20 bg-[#0f1115]">
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="w-full space-y-12"
        >
          
          <div className="text-center space-y-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#20364d] block">
              Pilares Éticos
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Princípios que guiam nossa atuação</h2>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Nossas diretrizes de qualidade comercial e transparência total de processos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {resumePrincipios.map((p, idx) => (
              <TiltCard key={idx} scale={1.02} maxTilt={8}>
                <div className="p-6 bg-[#111318] rounded-xl border border-white/10 space-y-3 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-[#20364d] font-black">P_0{idx + 1}</span>
                    <h4 className="text-xs font-black uppercase text-white tracking-wider">{p.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

        </motion.div>
      </section>

      {/* CTA SOBRE */}
      <section className="w-full py-28 px-6 sm:px-12 lg:px-20 text-center relative overflow-hidden bg-[#111318] border-t border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#20364d]/15 rounded-full blur-[120px] -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-none text-white max-w-2xl mx-auto">
            Quer ver como funciona na prática?
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Seja parceiro de uma agência que preza pela transparência, tráfego otimizado de verdade e controle em tempo real.
          </p>

          <div className="flex justify-center pt-2">
            <TiltCard scale={1.05} maxTilt={10}>
              <a
                href="https://api.whatsapp.com/send?phone=5511994075149"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-9 py-5 bg-white hover:bg-[#f4f3ef] text-[#0f1115] font-black text-xs uppercase tracking-widest rounded-full transition-colors shadow-2xl cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-[#0f1115]" />
                Agendar conversa estratégica
              </a>
            </TiltCard>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
