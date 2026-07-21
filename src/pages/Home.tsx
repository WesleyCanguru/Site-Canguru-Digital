import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Marquee from "../components/Marquee";
import EditorialServices from "../components/EditorialServices";
import CountUp from "../components/CountUp";
import TiltCard from "../components/TiltCard";
import { 
  MessageSquare, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Eye, 
  Share2, 
  ArrowUpRight 
} from "lucide-react";

interface HomeProps {
  navigateTo: (route: string) => void;
}

export default function Home({ navigateTo }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Referência para o Hero para efeito Parallax real no scroll
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Transformações Parallax para o Hero
  const heroBgY = useTransform(heroScrollProgress, [0, 1], ["0%", "30%"]);
  const heroTextY = useTransform(heroScrollProgress, [0, 1], ["0%", "-15%"]);
  const heroImageY = useTransform(heroScrollProgress, [0, 1], ["0%", "15%"]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.8], [1, 0]);

  const stats = [
    { value: 6, suffix: "+ Anos", label: "De mercado digital focado em ROI" },
    { value: 9, suffix: "+ Frentes", label: "De trabalho totalmente integradas" },
    { value: 100, suffix: "% Real-time", label: "Acompanhamento da nossa operação" },
    { value: 15, prefix: "+R$ ", suffix: " Mi", label: "Gerenciados em anúncios pagos" },
  ];

  const pilares = [
    { title: "Transparência Total", desc: "Você acompanha exatamente o status real de cada entrega e estratégia da sua operação.", icon: <Eye className="w-5 h-5 text-[#20364d]" /> },
    { title: "Colaboração Direta", desc: "Aprovação rápida e comunicação fluida sem intermediários desnecessários.", icon: <Share2 className="w-5 h-5 text-[#20364d]" /> },
    { title: "Controle Real", desc: "Seu acompanhamento financeiro de anúncios atualizado com dados de mercado reais.", icon: <ShieldCheck className="w-5 h-5 text-[#20364d]" /> },
  ];

  const principios = [
    { 
      title: "Comprometimento", 
      desc: "Tratamos seu caixa como tratamos o nosso. Cada campanha é ajustada diariamente para buscar o melhor custo por lead e retorno de vendas." 
    },
    { 
      title: "Excelência", 
      desc: "Não fazemos trabalho mediano. Do pixel de conversão à tipografia da landing page, o nível técnico é executado com rigor." 
    },
    { 
      title: "Transparência", 
      desc: "Sem enrolação ou termos técnicos bonitos para esconder falta de resultados. Mostramos a realidade crua dos dados de tráfego." 
    },
    { 
      title: "Ética", 
      desc: "Dizemos a verdade. Se o seu orçamento estiver muito baixo ou sua oferta não estiver pronta para rodar tráfego pago, nós avisamos imediatamente." 
    },
    { 
      title: "Inovação", 
      desc: "Aplicamos metodologias avançadas de otimização de funis de conversão para dar ao seu negócio o dinamismo que o mercado exige." 
    },
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
      a: "A maior mudança é o fim da ansiedade. Você deixa de ficar no escuro sem saber o que está acontecendo. Focamos em transparência de entregas, peças criativas alinhadas e otimização constante dos seus canais de vendas."
    },
  ];

  const headlineWords = "A Canguru não vende marketing. Entrega controle.".split(" ");

  return (
    <div className="bg-[#0f1115] text-white pt-20 overflow-x-hidden">
      
      {/* SEÇÃO HERO COM PARALLAX REAL */}
      <section 
        ref={heroRef} 
        className="relative min-h-[90vh] flex items-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10"
      >
        {/* Background Parallax Texture & Glow */}
        <motion.div 
          style={{ y: heroBgY }} 
          className="absolute inset-0 pointer-events-none -z-10"
        >
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#20364d]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-slate-800/15 rounded-full blur-[140px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }} 
          className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Lado Esquerdo: Headline & Ações */}
          <motion.div style={{ y: heroTextY }} className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#20364d]/30 border border-[#20364d] text-white text-[10px] font-extrabold uppercase tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              Canguru Digital — 2026
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.93] text-white">
              {headlineWords.map((word, idx) => {
                const isControle = word.toLowerCase() === "controle.";
                return (
                  <motion.span
                    key={idx}
                    className={`inline-block mr-3 ${isControle ? "text-[#20364d]" : ""}`}
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.07,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-medium">
              Tráfego pago, conteúdo, automação e acompanhamento transparente que mostra exatamente o que está sendo feito pelo seu negócio — sem esperar PDF, sem depender de resposta no WhatsApp.
            </p>

            {/* Botões com Microinteração Tilt */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <TiltCard scale={1.03} maxTilt={8}>
                <a
                  href="https://api.whatsapp.com/send?phone=5511994075149"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4.5 bg-white text-[#0f1115] font-black text-xs uppercase tracking-widest rounded-full transition-colors shadow-xl hover:bg-[#f4f3ef] cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-[#0f1115]" />
                  Fale com a gente
                </a>
              </TiltCard>

              <TiltCard scale={1.03} maxTilt={8}>
                <button
                  onClick={() => navigateTo("/servicos/")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4.5 bg-transparent hover:bg-white/5 border border-white/20 text-white font-black text-xs uppercase tracking-widest rounded-full transition-colors cursor-pointer"
                >
                  Ver todos os serviços
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </button>
              </TiltCard>
            </div>
          </motion.div>

          {/* Lado Direito: Imagem do Fundador com Parallax de Retardo */}
          <motion.div style={{ y: heroImageY }} className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/15 shadow-2xl bg-slate-950/60 p-3 group">
              <img
                src="/src/assets/images/wesley_camelo_1784653866650.jpg"
                alt="Wesley Camelo - Fundador Canguru Digital"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[3/4] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0f1115]/95 border border-white/15 rounded-xl backdrop-blur-md">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#20364d] block">Fundação & Liderança</span>
                <span className="text-sm font-black text-white block mt-1">Wesley Camelo</span>
                <span className="text-xs text-slate-400 block mt-0.5">Fundador e Diretor de Estratégia</span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* SEÇÃO 1 FULL-BLEED: NÚMEROS E ESTATÍSTICAS COM COUNT-UP ANIMADO */}
      <section className="w-full border-b border-white/10 bg-[#20364d]/10 py-16 px-6 sm:px-12 lg:px-20">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2 border-l-2 border-[#20364d] pl-6 py-1">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight block">
                <CountUp
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2.5}
                />
              </span>
              <span className="text-xs font-black uppercase tracking-widest text-slate-400 block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE CONTINUO */}
      <Marquee 
        texts={[
          "A Canguru não vende marketing. Entrega controle",
          "Tráfego pago focado em ROI",
          "Transparência em tempo real",
          "CRM & Automação de WhatsApp",
          "Sem PDFs de meio de mês",
          "Estratégia comercial sem rodeios",
          "Retorno real sobre investimento"
        ]} 
        speed={28}
      />

      {/* SEÇÃO 2 FULL-BLEED: LISTA EDITORIAL INTERATIVA DE SERVIÇOS */}
      <section className="w-full py-24 px-6 sm:px-12 lg:px-20 bg-[#0c0e12] border-b border-white/10">
        <div className="w-full space-y-16">
          
          {/* Título Asimétrico vazando a margem padrão */}
          <div className="max-w-4xl space-y-4">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#20364d] block">
              Nossos Serviços
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-white">
              Não vendemos pacote fechado. Resolvemos problema real.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed pt-2">
              Passe o mouse sobre os serviços para visualizar o escopo e a estrutura de cada entrega. Substituímos o amadorismo por precisão técnica.
            </p>
          </div>

          {/* Componente Editorial dos 7 Serviços */}
          <EditorialServices navigateTo={navigateTo} />

        </div>
      </section>

      {/* SEÇÃO 3 FULL-BLEED: STICKY PIN SECTION ("POR QUE A CANGURU? / COMPROMISSOS") */}
      <section className="w-full py-28 px-6 sm:px-12 lg:px-20 border-b border-white/10 bg-[#0f1115]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Lado Esquerdo: FIXO / PINNED no scroll */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#20364d] block">
                Nossos Compromissos
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-none text-white">
                Por que escolher a Canguru?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Trabalhamos sob princípios inegociáveis para garantir que a sua operação comercial funcione como um relógio de alta precisão.
              </p>
            </div>

            {/* Três Pilares Resumidos */}
            <div className="space-y-4 pt-2">
              {pilares.map((p, idx) => (
                <div key={idx} className="flex gap-3.5 p-3.5 rounded-xl bg-[#111318] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#0f1115] border border-white/10 flex items-center justify-center shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider">{p.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: Rola enquanto o lado esquerdo fica fixo */}
          <div className="lg:col-span-7 space-y-6">
            {principios.map((p, idx) => (
              <TiltCard key={idx} scale={1.01} maxTilt={6}>
                <div className="p-8 bg-[#111318] rounded-2xl border border-white/10 hover:border-[#20364d]/80 transition-all space-y-4 group">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black text-[#20364d] px-2.5 py-1 rounded bg-[#20364d]/10 border border-[#20364d]/30">
                      Princípio 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-300">
                      Canguru Standard
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {p.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>

        </div>
      </section>

      {/* SEÇÃO FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0c0e12] border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#20364d] block">
              Perguntas Frequentes
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white">
              Sua dúvida respondida de forma nua e crua.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
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
                    className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-slate-900/40 transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wide">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#20364d] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-450 shrink-0" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 border-t border-white/5 text-xs sm:text-sm text-slate-300 leading-relaxed animate-fade-in">
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
      <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#111318] text-center border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#20364d]/15 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-white max-w-3xl mx-auto">
            Pronto para parar de adivinhar o que está sendo feito pelo seu negócio?
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Seja parceiro de uma agência que preza pelo controle real, tráfego qualificado e acompanhamento transparente.
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
                Chamar no WhatsApp agora
              </a>
            </TiltCard>
          </div>
        </div>
      </section>

    </div>
  );
}
