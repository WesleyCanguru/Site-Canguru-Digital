/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import TiltCard from "../components/TiltCard";
import { 
  MessageSquare, 
  ArrowUpRight, 
  CheckCircle2, 
  Target, 
  Zap, 
  Layers, 
  Sparkles, 
  Globe, 
  UserCheck, 
  Cpu, 
  Mail,
  ArrowRight
} from "lucide-react";

interface ServicosProps {
  navigateTo: (route: string) => void;
}

interface DeepServiceDetail {
  number: string;
  title: string;
  icon: React.ReactNode;
  painPointIntro: string;
  deliverables: string[];
  idealFor: string;
}

const DEEP_SERVICES: DeepServiceDetail[] = [
  {
    number: "01",
    title: "Tráfego Pago (Google, Meta & TikTok Ads)",
    icon: <Zap className="w-5 h-5 text-sky-400" />,
    painPointIntro: "O maior pesadelo no tráfego pago é injetar verba todos os dias sem saber se a campanha trouxe cliente real ou apenas cliques acidentais. Resolvemos o descontrole financeiro eliminando o achismo e calibrando lances e públicos diretamente para o fundo de funil comercial.",
    deliverables: [
      "Auditoria completa de conta e estruturação técnica de pixéis (Meta CAPI & GA4)",
      "Mapeamento de públicos de alta intenção e estratégias de remarketing avançado",
      "Produção de anúncios persuasivos com testes A/B quinzenais de copys e ofertas",
      "Distribuição inteligente de verba entre Google Pesquisa, Instagram Reels e TikTok",
      "Monitoramento diário de Custo por Lead (CPL) e Custo por Aquisição (CPA)",
      "Acesso a dashboard em tempo real sem dependência de relatórios em PDF engessados"
    ],
    idealFor: "Negócios B2B, e-commerces e prestadores de serviço que já possuem comercial ativo mas precisam de fluxo constante e previsível de novos contatos."
  },
  {
    number: "02",
    title: "Social Media & Autoridade Digital",
    icon: <Layers className="w-5 h-5 text-sky-400" />,
    painPointIntro: "Publicar posts bonitos que não geram conversas ou manter um feed com cara de panfleto corporativo destrói a confiança do seu cliente. Transformamos seu perfil em um ativo editorial de autoridade que educa o mercado e antecipa as objeções de compra.",
    deliverables: [
      "Planejamento mensal de linha editorial baseada nas maiores dores do seu cliente",
      "Roteiros direcionados para Reels, Carrosséis informativos e vídeos de bastidores",
      "Design gráfico exclusivo e autoral sem uso de templates genéricos ou desgastados",
      "Otimização completa de Bio, destaques e links direcionados para conversão rápida",
      "Alinhamento da pauta de conteúdo orgânico com as campanhas de tráfego pago",
      "Análise de engajamento útil e taxa de conversão de seguidores em leads no WhatsApp"
    ],
    idealFor: "Marcas e profissionais que investem em anúncios pagos mas percebem que os visitantes chegam ao perfil e não convertem por falta de percepção de autoridade."
  },
  {
    number: "03",
    title: "Identidade Visual & Branding Premium",
    icon: <Sparkles className="w-5 h-5 text-sky-400" />,
    painPointIntro: "Cobrar abaixo do valor justo porque a apresentação da sua marca parece amadora é uma armadilha frequente. Projetamos identidades visuais sofisticadas que transmitem solidez imediata, permitindo elevar seu posicionamento e defender tickets maiores com naturalidade.",
    deliverables: [
      "Diagnóstico de posicionamento e análise de diferenciação frente aos concorrentes",
      "Criação de logotipo autoral, símbolos, marcas d'água e variações de assinatura",
      "Manual de identidade visual com paleta de cores técnica e guia tipográfico completo",
      "Vetorização técnica e exportação de arquivos prontos para impressão e digital",
      "Design de materiais corporativos: cartões, propostas comerciais e papelaria",
      "Kit de templates institucionais para apresentações e comunicações de alto padrão"
    ],
    idealFor: "Empresas em fase de reestruturação ou empresários que desejam parar de disputar preço por baixo e atrair clientes com maior poder de compra."
  },
  {
    number: "04",
    title: "Sites & Landing Pages de Alta Performance",
    icon: <Globe className="w-5 h-5 text-sky-400" />,
    painPointIntro: "Pagar por cliques em anúncios e enviar o usuário para um site lento que demora 5 segundos para carregar no celular faz você jogar até 70% da sua verba no lixo. Construímos estruturas web leves, focadas em usabilidade e pensadas para converter cada visita em oportunidade real.",
    deliverables: [
      "Desenvolvimento de código customizado e ultrarrápido (carregamento < 1.5s)",
      "Redação publicitária (copywriting) focada na resolução direta da dor do usuário",
      "Interface responsiva (Mobile First) projetada com foco absoluto em usabilidade",
      "Instalação e homologação técnica de Meta Pixel, Google Analytics e Tag Manager",
      "Botões flutuantes e formulários integrados direto ao WhatsApp ou CRM comercial",
      "Indexação técnica de SEO On-Page para mecanismos de busca do Google"
    ],
    idealFor: "Negócios que querem transformar cliques de tráfego pago em reuniões agendadas ou mensagens diretas sem depender de plataformas pesadas e lentas."
  },
  {
    number: "05",
    title: "SEO Local & Google Meu Negócio",
    icon: <UserCheck className="w-5 h-5 text-sky-400" />,
    painPointIntro: "Quando alguém pesquisa no Google pelo seu serviço na sua cidade e encontra primeiro o seu concorrente, você está perdendo clientes prontos para comprar. Dominamos o algoritmo do Google Maps para posicionar seu negócio no topo das buscas geolocalizadas.",
    deliverables: [
      "Auditoria técnica e otimização completa da ficha do Google Meu Negócio",
      "Geolocalização estratégica de imagens, catálogo de produtos e serviços prestados",
      "Mapeamento de palavras-chave locais de altíssima intenção de contratação",
      "Estratégia para captação e gestão contínua de avaliações positivas 5 estrelas",
      "Padronização de dados de contato (NAP) em diretórios regionais e mapas",
      "Relatório mensal de chamadas telefônicas, rotas solicitadas e pesquisas diretas"
    ],
    idealFor: "Lojas físicas, clínicas, escritórios de advocacia e prestadores de serviços locais que atendem uma região ou cidade específica."
  },
  {
    number: "06",
    title: "CRM & Automação Inteligente de WhatsApp",
    icon: <Cpu className="w-5 h-5 text-sky-400" />,
    painPointIntro: "Deixar um lead esperando 30 minutos para ser atendido no WhatsApp reduz a chance de fechamento em mais de 70%. Estruturamos automações inteligentes que qualificam o contato em segundos e organizam a rotina da sua equipe comercial sem ruídos.",
    deliverables: [
      "Escolha, setup e estruturação do funil de vendas em plataforma de CRM moderna",
      "Disparo automático de mensagem de boas-vindas no WhatsApp via webhook instantâneo",
      "Menu de triagem e qualificação inicial sem cara de robô engessado",
      "Distribuição automática de novos contatos entre os vendedores da equipe",
      "Sequências automáticas de acompanhamento (follow-up) para orçamentos pendentes",
      "Painel de controle de tempo médio de resposta e motivos de perda comercial"
    ],
    idealFor: "Operações comerciais com volume diário de contatos que sofrem com desorganização de vendedores, esquecimento de propostas e atendimento demorado."
  },
  {
    number: "07",
    title: "E-mail Marketing Estratégico",
    icon: <Mail className="w-5 h-5 text-sky-400" />,
    painPointIntro: "Possuir uma lista com centenas ou milhares de e-mails armazenados sem enviar comunicações frequentes é deixar dinheiro parado na mesa. Criamos réguas de relacionamento que reativam contatos antigos e geram receita sem custo adicional de mídia.",
    deliverables: [
      "Higienização, segmentação e validação técnica da sua base de e-mails",
      "Configuração de protocolos de entregabilidade (SPF, DKIM e DMARC) contra spam",
      "Redação persuasiva para campanhas promocionais, lançamentos e newsletters",
      "Fluxos automatizados de boas-vindas, carrinho abandonado e pós-venda",
      "Testes A/B de títulos e horários para buscar taxas de abertura acima de 25%",
      "Acompanhamento contínuo de cliques, descadastramentos e vendas geradas"
    ],
    idealFor: "Empresas B2B, e-commerces e negócios de serviço com base de clientes cadastrada que desejam gerar vendas recorrentes com custo próximo de zero."
  }
];

export default function Servicos({ navigateTo }: ServicosProps) {
  return (
    <div className="bg-[#0f1115] text-white pt-20 overflow-x-hidden">
      
      {/* HERO SERVIÇOS COM SCROLL REVEAL E PARALLAX SUTIL */}
      <section className="w-full py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-b border-white/10 relative overflow-hidden bg-[#0c0e12]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#20364d]/15 rounded-full blur-[140px] -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-6xl space-y-6"
        >
          <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#20364d] block">
            Escopo Operacional & Serviços
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.93] text-white">
            Atendimento sob medida. Estrutura comercial integrada.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Estruturamos as frentes de tráfego pago, conteúdo, branding, tecnologia web e automação que o seu negócio precisa hoje para alcançar metas de faturamento reais. Nada a mais, nada a menos.
          </p>
        </motion.div>
      </section>

      {/* DETALHAMENTO APROFUNDADO DOS 07 SERVIÇOS (COPY COMPLETA E ESTRUTURADA) */}
      <section className="w-full py-24 sm:py-32 px-6 sm:px-12 lg:px-20 border-b border-white/10 bg-[#0c0e12]">
        <div className="max-w-6xl mx-auto space-y-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-3xl"
          >
            <span className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-[#20364d] block">
              Detalhamento Técnico de Entregas
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tighter leading-tight">
              O que entregamos em cada uma das 07 frentes
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Abaixo você confere o ponto de dor resolvido, o escopo exato de entregas e o perfil de empresa ideal para cada serviço.
            </p>
          </motion.div>

          <div className="space-y-12">
            {DEEP_SERVICES.map((srv) => (
              <motion.div
                key={srv.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="bg-[#111318] border border-white/10 hover:border-white/20 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl transition-all"
              >
                {/* Cabeçalho do Card de Serviço */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#20364d]/30 border border-[#20364d] flex items-center justify-center shrink-0">
                      {srv.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest text-sky-400 block">
                        Serviço {srv.number}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        {srv.title}
                      </h3>
                    </div>
                  </div>

                  <a
                    href="https://api.whatsapp.com/send?phone=5511994075149"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-black uppercase tracking-wider text-white transition-all cursor-pointer shrink-0 self-start sm:self-auto"
                  >
                    <span>Solicitar Diagnóstico</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* (a) Parágrafo de Abertura do Ponto de Dor */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-slate-400 block">
                    Ponto de Dor & Solução
                  </span>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium bg-[#0f1115] p-5 rounded-2xl border border-white/5">
                    {srv.painPointIntro}
                  </p>
                </div>

                {/* (b) O que está incluso (Entregas Concretas) */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-slate-400 block">
                    O que está incluso no escopo:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {srv.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* (c) Para quem é */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-[#0f1115]/50 p-4 rounded-xl border border-white/5">
                  <div className="flex items-center gap-1.5 text-sky-400 text-xs font-black uppercase tracking-wider shrink-0">
                    <Target className="w-4 h-4 text-sky-400" />
                    <span>Para quem é:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                    {srv.idealFor}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA SERVIÇOS COM TILTCARD E BOTÃO WHATSAPP */}
      <section className="w-full py-28 px-6 sm:px-12 lg:px-20 text-center relative overflow-hidden bg-[#111318] border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#20364d]/15 rounded-full blur-[120px] -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-white max-w-3xl mx-auto">
            Não sabe por onde começar?
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Nós analisamos os gargalos operacionais e comerciais do seu negócio e desenhamos uma estratégia integrada personalizada. Sem pacotes engessados.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <TiltCard scale={1.03} maxTilt={8}>
              <a
                href="https://api.whatsapp.com/send?phone=5511994075149"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-5 bg-white hover:bg-[#f4f3ef] text-[#0f1115] font-black text-xs uppercase tracking-widest rounded-full transition-colors shadow-xl cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-[#0f1115]" />
                Solicitar diagnóstico grátis
              </a>
            </TiltCard>

            <TiltCard scale={1.03} maxTilt={8}>
              <button
                onClick={() => navigateTo("/contato/")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-5 bg-transparent hover:bg-white/5 border border-white/20 text-white font-black text-xs uppercase tracking-widest rounded-full transition-colors cursor-pointer"
              >
                Falar via formulário
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>
            </TiltCard>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
