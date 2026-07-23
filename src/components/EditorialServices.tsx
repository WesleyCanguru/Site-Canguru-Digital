import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Zap, 
  Layers, 
  Sparkles, 
  Globe, 
  UserCheck, 
  Cpu, 
  Mail, 
  ArrowUpRight, 
  CheckCircle2 
} from "lucide-react";

import imgTrafego from "../assets/images/service_trafego_pago_1784745972008.jpg";
import imgSocial from "../assets/images/service_social_media_1784745985476.jpg";
import imgIdentidade from "../assets/images/service_identidade_visual_1784745999127.jpg";
import imgSites from "../assets/images/service_sites_landingpages_1784746011243.jpg";
import imgSeo from "../assets/images/service_seo_local_1784746024687.jpg";
import imgCrm from "../assets/images/service_crm_automacao_1784746036887.jpg";
import imgEmail from "../assets/images/service_email_marketing_1784746049371.jpg";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "trafego-pago",
    number: "01",
    title: "Tráfego Pago (Google, Meta & TikTok Ads)",
    shortTitle: "Tráfego Pago",
    description: "Cada real investido é rastreado e otimizado diariamente por especialistas focados em ROI real. Analisamos detalhadamente a jornada do seu cliente para desenhar campanhas cirúrgicas que impactam as pessoas certas na hora da decisão de compra.",
    features: ["Otimização diária de verba", "Criação de copys persuasivas", "Rastreamento absoluto de pixels"],
    icon: <Zap className="w-5 h-5 text-[#20364d]" />,
    imageUrl: imgTrafego,
    imageAlt: "Tráfego Pago e Analytics de Alta Performance",
  },
  {
    id: "social-media",
    number: "02",
    title: "Social Media & Autoridade Digital",
    shortTitle: "Social Media & Autoridade",
    description: "Criamos linhas editoriais estratégicas pensadas especificamente para elevar a percepção de valor do seu negócio, educar sua audiência e quebrar objeções de compra antes mesmo do contato comercial.",
    features: ["Linha editorial de autoridade", "Design visual customizado", "Roteiros focados em conversão"],
    icon: <Layers className="w-5 h-5 text-[#20364d]" />,
    imageUrl: imgSocial,
    imageAlt: "Produção Editorial de Conteúdo e Social Media",
  },
  {
    id: "identidade-visual",
    number: "03",
    title: "Identidade Visual & Branding Premium",
    shortTitle: "Identidade Visual & Branding",
    description: "Projetamos marcas memoráveis, sofisticadas e estruturadas sob conceitos visuais sólidos e tipografia impecável. O resultado é um posicionamento de marca premium imediato que passa respeito e atrai clientes de alto ticket.",
    features: ["Design de marca 100% autoral", "Manual de marca completo", "Aplicações corporativas premium"],
    icon: <Sparkles className="w-5 h-5 text-[#20364d]" />,
    imageUrl: imgIdentidade,
    imageAlt: "Design de Identidade Visual e Tipografia",
  },
  {
    id: "sites-landingpages",
    number: "04",
    title: "Sites & Landing Pages de Alta Performance",
    shortTitle: "Sites & Landing Pages",
    description: "Desenvolvemos estruturas web do zero com carregamento ultraveloz em dispositivos móveis, UX/UI sofisticada e copys de conversão integradas com pixels de rastreamento de tráfego.",
    features: ["Design responsivo e veloz", "Copy de alta conversão integrada", "Otimização técnica para Google SEO"],
    icon: <Globe className="w-5 h-5 text-[#20364d]" />,
    imageUrl: imgSites,
    imageAlt: "Desenvolvimento Web e UI de Alta Conversão",
  },
  {
    id: "seo-local",
    number: "05",
    title: "SEO Local & Google Meu Negócio",
    shortTitle: "SEO Local & Google Meu Negócio",
    description: "Fazemos seu estabelecimento físico ou empresa ser a primeira opção listada quando alguém pesquisa por sua solução na sua região imediata no Google Maps e busca orgânica.",
    features: ["Indexação em posições de topo local", "Geolocalização de imagens e palavras", "Estratégia de aumento de avaliações"],
    icon: <UserCheck className="w-5 h-5 text-[#20364d]" />,
    imageUrl: imgSeo,
    imageAlt: "Otimização Local e Geolocalização no Google",
  },
  {
    id: "crm-automacao",
    number: "06",
    title: "CRM & Automação Inteligente de WhatsApp",
    shortTitle: "CRM & Automação de WhatsApp",
    description: "Implementamos funis de automação no WhatsApp para qualificar leads, responder dúvidas comuns imediatamente e integrar seus contatos direto na mesa de negociação do vendedor.",
    features: ["Setup e organização de CRM", "Automação sem robô chato e robótico", "Esteira integrada de follow-up"],
    icon: <Cpu className="w-5 h-5 text-[#20364d]" />,
    imageUrl: imgCrm,
    imageAlt: "Automações de CRM e WhatsApp Business",
  },
  {
    id: "email-marketing",
    number: "07",
    title: "E-mail Marketing Estratégico",
    shortTitle: "E-mail Marketing Estratégico",
    description: "Criamos newsletters exclusivas, fluxos de nutrição de leads, e-mails transacionais e sequências automatizadas de recuperação comercial que geram vendas constantes para sua base.",
    features: ["Copys com alta taxa de abertura", "Fluxos automatizados de nutrição", "Recuperação de contatos antigos"],
    icon: <Mail className="w-5 h-5 text-[#20364d]" />,
    imageUrl: imgEmail,
    imageAlt: "Automação de E-mail Marketing e Retenção",
  },
];

interface EditorialServicesProps {
  navigateTo?: (route: string) => void;
}

export default function EditorialServices({ navigateTo }: EditorialServicesProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeService = servicesData[activeIndex];

  return (
    <div className="w-full">
      {/* Container Principal: Assimétrico e Amplo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Coluna Esquerda: Lista Vertical Editorial */}
        <div className="lg:col-span-7 space-y-4">
          {servicesData.map((service, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`group cursor-pointer rounded-2xl transition-all duration-300 border ${
                  isActive
                    ? "bg-[#111318] border-white/20 p-6 shadow-2xl"
                    : "bg-transparent border-white/5 hover:border-white/10 p-5 opacity-70 hover:opacity-100"
                }`}
              >
                {/* Linha de Título do Serviço */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-mono font-black tracking-widest ${
                        isActive ? "text-[#20364d]" : "text-slate-500 group-hover:text-slate-300"
                      }`}
                    >
                      {service.number}
                    </span>
                    <h3
                      className={`text-xl sm:text-2xl lg:text-3xl font-black tracking-tight transition-colors ${
                        isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isActive
                        ? "bg-white text-[#0f1115] border-white rotate-45"
                        : "bg-transparent text-slate-500 border-white/10 group-hover:border-white/30 group-hover:text-white"
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Conteúdo Expansível quando ativo */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-white/10 space-y-4">
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                          {service.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-400 font-semibold">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#20364d] shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>

                        {navigateTo && (
                          <div className="pt-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                navigateTo("/servicos/");
                              }}
                              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#20364d] hover:text-white transition-colors cursor-pointer"
                            >
                              Ver detalhes deste serviço
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Coluna Direita: Display Visualmente Sticky com Imagem em Zoom Suave */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="relative w-full aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-slate-950/80">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={activeService.imageUrl}
                  alt={activeService.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
                
                {/* Degradê para legibilidade do selo do serviço */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-[#0f1115]/30 to-transparent" />

                {/* Card de Apoio Visual sobreposto na imagem */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0f1115]/85 border border-white/15 rounded-xl backdrop-blur-md flex items-center justify-between gap-3 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#20364d]/30 border border-[#20364d] flex items-center justify-center text-sky-300 shrink-0">
                      {activeService.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest text-sky-300 block">
                        Serviço {activeService.number}
                      </span>
                      <h4 className="text-xs sm:text-sm font-black text-white leading-tight">
                        {activeService.shortTitle}
                      </h4>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono uppercase text-slate-400 font-bold">
                    <span>Canguru</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
