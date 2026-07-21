/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Zap, 
  Layers, 
  Sparkles, 
  Globe, 
  UserCheck, 
  Cpu, 
  Mail, 
  MessageSquare, 
  ArrowUpRight, 
  CheckCircle2,
  Lock
} from "lucide-react";

interface ServicosProps {
  navigateTo: (route: string) => void;
}

export default function Servicos({ navigateTo }: ServicosProps) {
  const listServices = [
    {
      title: "Tráfego Pago (Google, Meta & TikTok Ads)",
      description: "Esqueça relatórios de curtidas e engajamento vazio. O foco do nosso tráfego é aquisição direta e ROI sustentável. Analisamos detalhadamente o perfil do seu cliente ideal para desenhar campanhas cirúrgicas que impactam as pessoas certas na hora da decisão de compra. Nosso tráfego pago é monitorado diariamente por especialistas, com otimização contínua de lances, orçamentos e criativos para espremer o menor custo por lead possível e maximizar seu retorno sobre investimento financeiro real nas plataformas.",
      icon: <Zap className="w-5 h-5 text-[#20364d]" />,
      features: ["Otimização diária de verba", "Criação de copys persuasivas", "Rastreamento absoluto de pixels"]
    },
    {
      title: "Social Media & Autoridade Digital",
      description: "A maioria das agências cria conteúdo genérico para preencher feed de Instagram, agradando algoritmos mas sem gerar autoridade. Na Canguru, criamos linhas editoriais estratégicas pensadas especificamente para elevar a percepção de valor do seu negócio, educar sua audiência e quebrar objeções de compra antes mesmo do contato comercial. Produzimos conteúdos ricos, profissionais e com mensagens magnéticas focadas na sua real persona de vendas, transformando visitantes perdidos em defensores leais da marca.",
      icon: <Layers className="w-5 h-5 text-[#20364d]" />,
      features: ["Linha editorial de autoridade", "Design visual customizado", "Roteiros focados em conversão"]
    },
    {
      title: "Identidade Visual & Branding Premium",
      description: "Sua empresa não pode se dar ao luxo de parecer amadora na internet. Projetamos marcas memoráveis, sofisticadas e estruturadas sob conceitos visuais sólidos e tipografia impecável. Desenvolvemos desde o logotipo original ao manual de identidade completo, tipografias, paleta cromática de alta harmonia e aplicações de papelaria ou canais corporativos digitais. O resultado é um posicionamento de marca premium imediato que passa respeito, segurança técnica e atrai clientes qualificados de alto ticket.",
      icon: <Sparkles className="w-5 h-5 text-[#20364d]" />,
      features: ["Design de marca 100% autoral", "Manual de marca completo", "Aplicações corporativas premium"]
    },
    {
      title: "Sites & Landing Pages de Alta Performance",
      description: "Não construímos sites lentos baseados em templates engessados. Desenvolvemos estruturas web do zero, focadas no carregamento ultraveloz em dispositivos móveis, com UX/UI sofisticada e copys cirúrgicas de conversão. Seus novos sites e landing pages serão otimizados de forma técnica para indexação orgânica no Google (SEO), com todos os pixels de tráfego, tags e funis de captação devidamente integrados, prontos para agir como uma máquina comercial ininterrupta para capturar contatos qualificados.",
      icon: <Globe className="w-5 h-5 text-[#20364d]" />,
      features: ["Design responsivo e veloz", "Copy de alta conversão integrada", "Otimização técnica para Google SEO"]
    },
    {
      title: "SEO Local & Google Meu Negócio",
      description: "Seu estabelecimento físico ou prestadora de serviços precisa ser a primeira opção listada quando alguém pesquisa por sua solução na sua região imediata. Otimizamos sua ficha de forma profunda, desde imagens geolocalizadas, palavras-chave regionais estratégicas, automação de respostas a avaliações e posts semanais na plataforma. Fazemos com que seu negócio conquiste posições de destaque no Google Maps, canalizando o fluxo de clientes prontos para comprar direto para o seu WhatsApp.",
      icon: <UserCheck className="w-5 h-5 text-[#20364d]" />,
      features: ["Indexação em posições de topo local", "Geolocalização de imagens e palavras", "Estratégia de aumento de avaliações"]
    },
    {
      title: "CRM & Automação Inteligente de WhatsApp",
      description: "Muitos leads gerados no tráfego pago são perdidos pela lentidão ou desorganização do atendimento comercial humano. Implementamos funis de automação no WhatsApp para qualificar leads, responder dúvidas comuns imediatamente e integrar seus contatos diretamente em ferramentas de CRM líderes de mercado. Chega de planilhas confusas e perdas de mensagens. Construímos uma esteira automatizada que guia o lead desde o primeiro clique até a mesa de negociação do vendedor de forma natural.",
      icon: <Cpu className="w-5 h-5 text-[#20364d]" />,
      features: ["Setup e organização de CRM", "Automação sem robô chato e robótico", "Esteira integrada de follow-up"]
    },
    {
      title: "E-mail Marketing Estratégico",
      description: "O e-mail continua sendo um dos canais com maior ROI e conversão quando executado com precisão analítica. Criamos newsletters exclusivas, fluxos de nutrição de leads, e-mails transacionais e sequências automatizadas de recuperação de carrinhos abandonados ou reengajamento comercial de base. Desenvolvemos copys focadas em altas taxas de abertura e cliques, gerando vendas constantes para sua base de contatos sem depender de investimento adicional em anúncios diários.",
      icon: <Mail className="w-5 h-5 text-[#20364d]" />,
      features: ["Copys com alta taxa de abertura", "Fluxos automatizados de nutrição", "Recuperação de contatos antigos"]
    },
  ];

  return (
    <div className="bg-[#0f1115] text-white pt-20">
      
      {/* HERO SERVIÇOS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#20364d]/10 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#20364d] block">Nossos Serviços</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none text-white">
            Atendimento sob medida, não pacote engessado.
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Estruturamos as frentes comerciais de tráfego, conteúdo, tecnologia e automação que o seu negócio precisa hoje para alcançar metas de faturamento reais. Nada a mais, nada a menos.
          </p>
        </div>
      </section>

      {/* SEÇÃO CARDS DETALHADOS DE SERVIÇO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          {listServices.map((svc, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx}
                className="p-8 md:p-12 bg-[#111318] rounded-2xl border border-white/10 hover:border-[#20364d]/80 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Lado do Ícone e Detalhes */}
                <div className={`lg:col-span-7 space-y-6 ${!isEven && "lg:order-2"}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center shrink-0">
                      {svc.icon}
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-[#20364d]">Serviço 0{idx + 1}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-white">{svc.title}</h2>
                  
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                    {svc.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {svc.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-350 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#20364d] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lado da Imagem Ilustrativa Simples / Abstrata */}
                <div className={`lg:col-span-5 flex justify-center ${!isEven && "lg:order-1"}`}>
                  <div className="w-full h-48 md:h-64 bg-slate-950/45 rounded-xl border border-white/10 overflow-hidden relative flex items-center justify-center group">
                    {/* Elemento decorativo vetorial moderno com CSS/SVG de alta atitude */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#20364d]/10 to-transparent opacity-30" />
                    <div className="relative text-center space-y-2 p-6">
                      <div className="w-14 h-14 bg-slate-900 rounded-2xl border border-white/10 flex items-center justify-center mx-auto text-white group-hover:scale-110 group-hover:border-[#20364d] transition-all duration-500">
                        {svc.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">Canguru Tech</span>
                      <p className="text-[11px] text-slate-400 max-w-xs mx-auto">Garantia operacional em tempo real</p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* SEÇÃO TECNOLOGIA PRÓPRIA (REPETIDA ADAPTADA) */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#0c0e12] border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#20364d] block">Controle da Operação</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[0.95] text-white">
              Canguru Controle: Sua agência na ponta dos dedos.
            </h2>
            <p className="text-sm text-slate-450 leading-relaxed">
              Desenvolvemos internamente um system operacional completo para o seu negócio acompanhar a nossa agência. Através da Área de Controle exclusiva, você tem acesso ao status de todas as tarefas de redação, desenvolvimento, otimização de SEO e orçamentos de anúncios, em tempo real.
            </p>
            <p className="text-sm text-slate-450 leading-relaxed font-bold">
              Nada de planilhas perdidas, reuniões inúteis de horas ou PDFs incompreensíveis. Apenas dados crus, limpos e transparência total.
            </p>

            <div className="pt-4 flex gap-4">
              <button
                onClick={() => {
                  navigateTo("/");
                  setTimeout(() => {
                    const el = document.getElementById("plataforma-controle");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                  }, 300);
                }}
                className="inline-flex items-center gap-2 px-5 py-3 bg-transparent hover:bg-white/5 border border-white/20 rounded-xl text-white text-xs font-black uppercase tracking-widest cursor-pointer"
              >
                Testar simulador na Home
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-slate-950/60 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-black uppercase tracking-wider text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Integrações do Sistema
                </span>
                <span className="text-[10px] text-slate-500 font-mono">v2.4</span>
              </div>
              
              <div className="space-y-3 text-xs text-slate-400">
                <div className="flex justify-between items-center bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
                  <span className="font-bold text-slate-300">Base de Dados Supabase</span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-bold uppercase tracking-wider">Pronto</span>
                </div>
                <div className="flex justify-between items-center bg-slate-900/60 p-2.5 rounded-lg border border-white/5">
                  <span className="font-bold text-slate-300">Disparos de Webhook Make.com</span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-bold uppercase tracking-wider">Pronto</span>
                </div>
                <div className="flex justify-between items-center bg-slate-900/60 p-2.5 rounded-lg border border-white/5 opacity-50">
                  <span className="font-bold text-slate-300">Relatório Estático em PDF</span>
                  <span className="text-[10px] bg-slate-800 text-slate-500 px-2 py-0.5 rounded border border-slate-750 font-bold uppercase tracking-wider flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Bloqueado (Obsoleto)
                  </span>
                </div>
              </div>

              <p className="text-[10px] text-slate-500 leading-relaxed text-center pt-2">
                Nossa tecnologia bloqueia metodologias obsoletas de agências para focar em tempo real.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA SERVIÇOS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden bg-[#111318] border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#20364d]/10 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-none text-white max-w-2xl mx-auto">
            Não sabe por onde começar?
          </h2>
          
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Nós analisamos os gargalos operacionais e comerciais do seu negócio e desenhamos uma estratégia integrada personalizada. Sem pacotes engessados.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <a
              href="https://api.whatsapp.com/send?phone=5511994075149"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4.5 bg-white hover:bg-[#f4f3ef] text-[#0f1115] font-black text-xs uppercase tracking-widest rounded-full transition-all shadow-lg cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-[#0f1115]" />
              Solicitar diagnóstico grátis
            </a>
            <button
              onClick={() => navigateTo("/contato/")}
              className="inline-flex items-center justify-center px-8 py-4.5 bg-transparent hover:bg-white/5 border border-white/20 text-white font-black text-xs uppercase tracking-widest rounded-full transition-all cursor-pointer"
            >
              Falar via formulário
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
