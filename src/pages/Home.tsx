/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useState } from "react";
import Marquee from "../components/Marquee";
import LeadPlatform from "../components/LeadPlatform";
import { 
  ArrowUpRight, 
  MessageSquare, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Cpu, 
  Eye, 
  UserCheck, 
  ChevronDown, 
  ChevronUp, 
  Share2 
} from "lucide-react";

interface HomeProps {
  navigateTo: (route: string) => void;
}

export default function Home({ navigateTo }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = [
    { value: "6+ Anos", label: "De mercado digital focado em ROI" },
    { value: "9+ Frentes", label: "De trabalho totalmente integradas" },
    { value: "100% Real-time", label: "Acompanhamento da nossa operação" },
  ];

  const services = [
    {
      title: "Tráfego Pago",
      description: "Cada real investido, rastreado e otimizado por quem respira ROI. Chega de relatórios que dizem que você teve 'alcance' sem botar dinheiro no seu caixa.",
      icon: <Zap className="w-5 h-5 text-[#20364d]" />
    },
    {
      title: "Social Media",
      description: "Conteúdo pensado para o seu público real e qualificação de leads, não para agradar o algoritmo com dancinhas. Foco em autoridade e desejo.",
      icon: <Layers className="w-5 h-5 text-[#20364d]" />
    },
    {
      title: "Identidade Visual",
      description: "Sua marca precisa parecer profissional porque ela realmente é. Criamos sistemas visuais fortes, modernos e que passam autoridade imediata.",
      icon: <Sparkles className="w-5 h-5 text-[#20364d]" />
    },
    {
      title: "Sites de Alta Performance",
      description: "Carregam em milissegundos, são otimizados para conversão e aparecem no topo do Google. Ferramentas de vendas que funcionam 24h por dia.",
      icon: <Globe className="w-5 h-5 text-[#20364d]" />
    },
    {
      title: "Google Meu Negócio",
      description: "Quem procura pelos seus serviços ou produtos perto de você, te encontra primeiro. Atração orgânica de clientes altamente qualificados e locais.",
      icon: <UserCheck className="w-5 h-5 text-[#20364d]" />
    },
    {
      title: "CRM & Automação",
      description: "Funis organizados e automações inteligentes de WhatsApp e e-mail sem depender de planilhas bagunçadas. Nenhum lead fica sem resposta.",
      icon: <Cpu className="w-5 h-5 text-[#20364d]" />
    },
  ];

  const pilares = [
    { title: "Transparência Total", desc: "Você vê exatamente o que cada especialista da operação está produzindo hoje.", icon: <Eye className="w-5 h-5 text-[#20364d]" /> },
    { title: "Colaboração Direta", desc: "Aprovação rápida e feedback direto na plataforma de gestão exclusiva.", icon: <Share2 className="w-5 h-5 text-[#20364d]" /> },
    { title: "Controle Real", desc: "Seu dashboard financeiro de anúncios atualizado em tempo real, sem surpresas.", icon: <ShieldCheck className="w-5 h-5 text-[#20364d]" /> },
  ];

  const principios = [
    { title: "Comprometimento", desc: "Tratamos seu caixa como tratamos o nosso. Cada campanha é ajustada diariamente para buscar o melhor custo por lead." },
    { title: "Excelência", desc: "Não fazemos trabalho mediano. Do pixel de conversão à tipografia do site, o nível técnico é impecável." },
    { title: "Transparência", desc: "Sem enrolação ou termos técnicos bonitos para esconder falta de resultados. Mostramos a realidade de tráfego aberta." },
    { title: "Ética", desc: "Dizemos a verdade. Se o seu orçamento estiver muito baixo ou seu produto não estiver pronto para rodar tráfego pago, nós avisamos." },
    { title: "Inovação", desc: "Investimos na nossa própria tecnologia de monitoramento de funis para dar a você controle que nenhuma outra agência tem." },
  ];

  const faqs = [
    {
      q: "Tráfego pago garante mais vendas?",
      a: "Não. Tráfego pago garante a atenção qualificada de pessoas que buscam o seu produto ou serviço. A venda em si depende de outros pilares que também otimizamos na Canguru: a velocidade de carregamento da sua página, a oferta, a autoridade da sua marca e o atendimento comercial (velocidade de resposta no WhatsApp/CRM)."
    },
    {
      q: "Quanto custa investir em anúncios?",
      a: "O valor mínimo técnico exigido pelas ferramentas é de aproximadamente R$ 6,00 por dia por grupo de anúncios. Porém, para ter dados suficientes para otimizar e obter ROI sustentável em 2026, recomendamos começar com pelo menos R$ 1.500 a R$ 2.000 mensais de verba de anúncios nas plataformas."
    },
    {
      q: "Quanto tempo até ver resultado?",
      a: "No tráfego pago, os primeiros leads qualificados costumam surgir nas primeiras 48h a 72h após a ativação técnica das campanhas. Contudo, a estabilização matemática do funil (CPL ideal e amadurecimento do pixel) ocorre geralmente entre o primeiro e o segundo mês de otimização contínua."
    },
    {
      q: "Quanto tempo leva para o site ficar pronto?",
      a: "Nossos projetos de landing pages e sites focados em conversão são desenvolvidos em até 15 a 21 dias úteis. Isso inclui a estruturação de copy (textos de alta conversão), design 100% autoral, integração de rastreamento de pixels de tráfego e testes de performance móvel."
    },
    {
      q: "Vocês produzem todo o conteúdo das redes sociais?",
      a: "Sim, estruturamos a linha editorial completa focada no seu público-alvo, criamos o roteiro, o design visual e as legendas. No entanto, acreditamos que marcas fortes precisam de conexão real: por isso, orientamos sua equipe para colher depoimentos e bastidores de forma simples para enriquecer o feed de verdade."
    },
    {
      q: "O que muda quando eu sou cliente Canguru?",
      a: "A maior mudança é o fim da ansiedade. Você deixa de ficar perguntando o que está acontecendo. Você entra no Canguru Controle e vê as tarefas ativas, as peças criativas prontas para aprovar e as métricas de investimento atualizadas em tempo real. Sem burocracia, com controle pleno."
    },
  ];

  // Divide o headline para animar palavra por palavra
  const headlineWords = "A Canguru não vende marketing. Entrega controle.".split(" ");

  return (
    <div className="bg-[#0f1115] text-white pt-20">
      
      {/* SEÇÃO HERO */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Textos do Hero */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#20364d]/30 border border-[#20364d] text-white text-[10px] font-extrabold uppercase tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Canguru Digital — 2026
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.95] text-white">
              {headlineWords.map((word, idx) => {
                const isControle = word.toLowerCase() === "controle.";
                return (
                  <motion.span
                    key={idx}
                    className={`inline-block mr-3 ${isControle ? "text-[#20364d]" : ""}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.08,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </h1>

            <p className="text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed font-medium">
              Tráfego pago, conteúdo, automação e uma plataforma exclusiva que mostra, em tempo real, exatamente o que está sendo feito pelo seu negócio — sem esperar PDF, sem depender de resposta no WhatsApp.
            </p>

            {/* Ações */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://api.whatsapp.com/send?phone=5511994075149"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4.5 bg-white text-[#0f1115] font-black text-xs uppercase tracking-widest rounded-full transition-all shadow-lg hover:bg-[#f4f3ef] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-[#0f1115]" />
                Fale com a gente
              </a>
              <button
                onClick={() => navigateTo("/servicos/")}
                className="inline-flex items-center justify-center px-8 py-4.5 bg-transparent hover:bg-white/5 border border-white/20 text-white font-black text-xs uppercase tracking-widest rounded-full transition-all cursor-pointer"
              >
                Ver todos os serviços
              </button>
            </div>

            {/* Estatísticas Rápidas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1.5 border-r border-white/5 last:border-none pr-4">
                  <span className="text-2xl font-black text-white block">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/50 block leading-tight font-bold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Imagem do Fundador */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Elemento de background brilhante sutil */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#20364d]/15 rounded-full blur-3xl -z-10" />
            
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-slate-950/40 p-3 group">
              <img
                src="/src/assets/images/wesley_camelo_1784653866650.jpg"
                alt="Wesley Camelo - Fundador Canguru Digital"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[3/4] object-cover rounded-xl transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0f1115]/90 border border-white/10 rounded-xl backdrop-blur-md">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#20364d] block">Fundação & Liderança</span>
                <span className="text-sm font-black text-white block mt-1">Wesley Camelo</span>
                <span className="text-xs text-slate-400 block mt-0.5">Fundador e Diretor de Estratégia</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MARQUEE INFINITO */}
      <Marquee 
        texts={[
          "A Canguru não vende marketing. Entrega controle",
          "Tráfego pago de verdade",
          "Transparência em tempo real",
          "CRM & Automação de WhatsApp",
          "Sem PDFs de meio de mês",
          "Seu negócio integrado",
          "Retorno real sobre investimento"
        ]} 
        speed={30}
      />

      {/* SEÇÃO O QUE FAZEMOS */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#20364d] block">Nossos Pilares</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[0.95] text-white">
              Não vendemos pacote fechado. Resolvemos problema real.
            </h2>
            <p className="text-sm text-slate-400 max-w-xl leading-relaxed pt-2">
              Você não precisa de uma agência para acumular posts bonitos no Instagram. Precisa de canais que captem clientes todos os dias. Desenvolvemos frentes sob demanda.
            </p>
          </div>

          {/* Grid de Serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, idx) => (
              <div 
                key={idx} 
                className="p-6 bg-[#111318] rounded-2xl border border-white/10 hover:border-[#20364d]/80 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-[#20364d] group-hover:bg-[#20364d]/10 transition-colors">
                    {svc.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-white">{svc.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{svc.description}</p>
                </div>
                
                <div className="pt-6">
                  <button 
                    onClick={() => navigateTo("/servicos/")}
                    className="text-[10px] font-black uppercase tracking-widest text-[#20364d] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    Saber mais
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SEÇÃO TECNOLOGIA PRÓPRIA (DESTAQUE INTEGRADO À PLATAFORMA) */}
      <section id="plataforma-controle" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#0c0e12] border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Lado Esquerdo: Detalhes Técnicos */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#20364d] block">Diferencial Único</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[0.95] text-white">
                Você não contrata uma agência. Entra numa operação com tecnologia própria.
              </h2>
              
              <p className="text-sm text-slate-450 leading-relaxed">
                Enquanto a maioria das agências manda PDF e espera resposta no grupo de WhatsApp, cliente Canguru acompanha cada etapa — planejamento, aprovação, estratégia de tráfego — em tempo real, dentro de uma plataforma de gestão exclusiva, desenvolvida internamente do zero.
              </p>
              <p className="text-sm text-slate-450 leading-relaxed font-bold">
                Nada de ficar perguntando "e aí, saiu?". Você vê.
              </p>

              {/* Três Pilares */}
              <div className="space-y-4 pt-4">
                {pilares.map((p, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0f1115] border border-white/10 flex items-center justify-center shrink-0">
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">{p.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lado Direito: Imagem Ilustrativa */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src="/src/assets/images/dashboard_tech_1784653882299.jpg"
                  alt="Ilustração de Tecnologia Canguru Controle"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
            </div>

          </div>

          {/* PLATAFORMA DE CONTROLE EM TEMPO REAL EM EMBED */}
          <div className="space-y-6">
            <div className="max-w-xl mx-auto text-center space-y-2">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">Interaja com a nossa plataforma</h3>
              <p className="text-xs text-slate-400">
                Veja os leads capturados no formulário, confira tarefas operacionais reais e configure o Supabase abaixo.
              </p>
            </div>
            <LeadPlatform />
          </div>

        </div>
      </section>

      {/* SEÇÃO PRINCÍPIOS */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#20364d] block">Nossos Compromissos</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[0.95] text-white">
              Por que a Canguru?
            </h2>
            <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
              Trabalhamos sob princípios inegociáveis para garantir que a sua operação comercial funcione como um relógio de alta precisão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {principios.map((p, idx) => (
              <div 
                key={idx} 
                className="p-5 bg-[#111318] rounded-xl border border-white/10 flex flex-col justify-between gap-4"
              >
                <div className="space-y-3">
                  <span className="text-xs font-extrabold text-[#20364d]">0{idx + 1}</span>
                  <h3 className="text-sm font-black uppercase tracking-wider text-white">{p.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SEÇÃO FAQ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#0c0e12] border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#20364d] block">Perguntas Frequentes</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter text-white">
              Sua dúvida respondida de forma nua e crua.
            </h2>
            <p className="text-xs text-slate-400 max-w-lg mx-auto">
              Sem enrolação técnica ou promessas impossíveis. Veja as respostas honestas para as principais dúvidas.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-[#111318] border border-white/10 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex justify-between items-center gap-4 hover:bg-slate-900/30 transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#20364d] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-450 shrink-0" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-white/5 text-xs sm:text-sm text-slate-400 leading-relaxed animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#111318] text-center border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#20364d]/10 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-none text-white max-w-3xl mx-auto">
            Pronto para parar de adivinhar o que está sendo feito pelo seu negócio?
          </h2>
          
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Seja parceiro de uma agência que preza pelo controle real, tráfego qualificado e acompanhamento transparente em tempo real.
          </p>

          <div className="flex justify-center pt-2">
            <a
              href="https://api.whatsapp.com/send?phone=5511994075149"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4.5 bg-white hover:bg-[#f4f3ef] text-[#0f1115] font-black text-xs uppercase tracking-widest rounded-full transition-all shadow-lg cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-[#0f1115]" />
              Chamar no WhatsApp agora
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
