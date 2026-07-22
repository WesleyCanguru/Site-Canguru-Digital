import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Marquee from "../components/Marquee";
import EditorialServices from "../components/EditorialServices";
import CountUp from "../components/CountUp";
import TiltCard from "../components/TiltCard";
import { addLead } from "../lib/database";
import { 
  MessageSquare, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Eye, 
  Share2, 
  ArrowUpRight,
  Send,
  Check,
  AlertCircle,
  HelpCircle,
  Sparkles
} from "lucide-react";

interface HomeProps {
  navigateTo: (route: string) => void;
}

export default function Home({ navigateTo }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Estados do Formulário de Diagnóstico sob medida
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [mensagem, setMensagem] = useState("");
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !email || !whatsapp || !empresa || !mensagem) return;

    setStatus("loading");
    try {
      const res = await addLead({ nome, email, whatsapp, empresa, mensagem });
      if (res.success) {
        setStatus("success");
        setFeedbackMsg(
          "Recebemos seu diagnóstico, retornaremos em até 24h úteis"
        );
        setNome("");
        setEmail("");
        setWhatsapp("");
        setEmpresa("");
        setMensagem("");
      } else {
        setStatus("error");
        setFeedbackMsg(res.error || "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente ou entre em contato pelo WhatsApp.");
      }
    } catch {
      setStatus("error");
      setFeedbackMsg("Ocorreu uma falha na conexão ao enviar seus dados.");
    }

    setTimeout(() => {
      setStatus("idle");
      setFeedbackMsg("");
    }, 8000);
  };

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
    { value: 100, suffix: "% Real-time", label: "Transparência de acompanhamento" },
    { value: 15, prefix: "+R$ ", suffix: " Mi", label: "Gerenciados em anúncios pagos" },
  ];

  const pilares = [
    { title: "Transparência Total", desc: "Acompanhamento em tempo real de cada entrega e estratégia da sua operação.", icon: <Eye className="w-5 h-5 text-[#20364d]" /> },
    { title: "Colaboração Direta", desc: "Aprovação rápida e comunicação fluida sem intermediários desnecessários.", icon: <Share2 className="w-5 h-5 text-[#20364d]" /> },
    { title: "Controle Real", desc: "Acompanhamento financeiro de anúncios atualizado com dados de mercado reais.", icon: <ShieldCheck className="w-5 h-5 text-[#20364d]" /> },
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

  const scrollToForm = () => {
    const el = document.getElementById("diagnostico");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#0f1115] text-white pt-20 overflow-x-hidden">
      
      {/* SEÇÃO HERO COM PARALLAX REAL */}
      <section 
        ref={heroRef} 
        className="relative min-h-[85vh] flex items-center overflow-hidden py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10"
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

            {/* Botões do Hero: "Fale com a gente" rola suave até o Formulário de Diagnóstico */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <TiltCard scale={1.03} maxTilt={8}>
                <button
                  onClick={scrollToForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-[#0f1115] font-black text-xs uppercase tracking-widest rounded-full transition-colors shadow-xl hover:bg-[#f4f3ef] cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 fill-[#0f1115]" />
                  Fale com a gente
                </button>
              </TiltCard>

              <TiltCard scale={1.03} maxTilt={8}>
                <button
                  onClick={() => navigateTo("/servicos/")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 text-white font-black text-xs uppercase tracking-widest rounded-full transition-colors cursor-pointer"
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

      {/* SEÇÃO NÚMEROS E ESTATÍSTICAS - COMPACTA E RESPONSIVA */}
      <section className="w-full border-b border-white/10 bg-[#20364d]/10 py-8 sm:py-10 px-4 sm:px-8 lg:px-16 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="border-l-2 border-[#20364d] pl-3 sm:pl-4 py-0.5 space-y-1">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight block leading-none">
                <CountUp
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2.2}
                />
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 block leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
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

      {/* SEÇÃO FULL-BLEED: LISTA EDITORIAL INTERATIVA DE SERVIÇOS */}
      <section className="w-full py-24 px-6 sm:px-12 lg:px-20 bg-[#0c0e12] border-b border-white/10">
        <div className="w-full space-y-16">
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

          <EditorialServices navigateTo={navigateTo} />
        </div>
      </section>

      {/* SEÇÃO COMPROMISSOS COM O PADRÃO PAPER CARD (#f4f3ef) */}
      <section className="w-full py-24 sm:py-28 px-6 sm:px-12 lg:px-20 border-b border-white/10 bg-[#0f1115]">
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          
          {/* Lado Esquerdo: Texto Fixo no Scroll */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#20364d] block">
                Nossos Compromissos
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-none text-white">
                Por que escolher a Canguru?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Trabalhamos sob princípios inegociáveis para garantir que a sua operação comercial funcione com a precisão técnica que o seu caixa exige.
              </p>
            </div>

            {/* Três Pilares Resumidos */}
            <div className="space-y-3 pt-2">
              {pilares.map((p, idx) => (
                <div key={idx} className="flex gap-3.5 p-3.5 rounded-xl bg-[#111318] border border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-[#0f1115] border border-white/10 flex items-center justify-center shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider">{p.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: PAPER CARD DESTACADO (#f4f3ef) */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#f4f3ef] text-[#0f1115] p-8 sm:p-10 rounded-3xl border border-white/20 shadow-2xl space-y-8 transition-shadow hover:shadow-sky-900/10"
            >
              <div className="border-b border-slate-300/80 pb-6 space-y-2">
                <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#20364d] bg-[#20364d]/10 px-3 py-1 rounded-full inline-block">
                  Canguru Operating Standards
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0f1115]">
                  Diretrizes da nossa operação
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  Conheça a postura profissional que separa a Canguru das agências tradicionais:
                </p>
              </div>

              <div className="space-y-6">
                {principios.map((p, idx) => (
                  <div key={idx} className="space-y-2 pb-6 border-b border-slate-200/80 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-black text-white bg-[#0f1115] px-2.5 py-1 rounded">
                        0{idx + 1}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#20364d]">
                        Inviolável
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-[#0f1115] tracking-tight">
                      {p.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </motion.div>
      </section>

      {/* SEÇÃO FAQ COM PAPER CARD (#f4f3ef) EM LAYOUT ASIMÉTRICO */}
      <section className="py-24 px-6 sm:px-12 lg:px-20 bg-[#0c0e12] border-b border-white/10">
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          
          {/* Lado Esquerdo FAQ: Título e Suporte */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#20364d] block">
              Perguntas Frequentes
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-white leading-tight">
              Sua dúvida respondida de forma nua e crua.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Sem enrolação técnica ou promessas impossíveis. Veja as respostas diretas para as principais dúvidas de empresas que pretendem investir com a Canguru.
            </p>

            <div className="p-6 bg-[#111318] border border-white/10 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-white text-xs font-black uppercase tracking-wider">
                <HelpCircle className="w-4 h-4 text-[#20364d]" />
                Tem outra pergunta?
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Envie seus dados no formulário abaixo e nossa equipe comercial responderá com um diagnóstico técnico exclusivo.
              </p>
            </div>
          </div>

          {/* Lado Direito FAQ: PAPER CARD DESTACADO (#f4f3ef) */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#f4f3ef] text-[#0f1115] p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl space-y-4"
            >
              <h3 className="text-lg font-black uppercase tracking-wider text-[#0f1115] border-b border-slate-300/80 pb-4">
                Dúvidas Operacionais & Estratégicas
              </h3>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div 
                      key={idx} 
                      className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full px-5 py-4 text-left flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <span className="text-xs sm:text-sm font-black text-[#0f1115] uppercase tracking-wide leading-snug">
                          {faq.q}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#20364d] shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

        </motion.div>
      </section>

      {/* FORMULÁRIO "DIAGNÓSTICO SOB MEDIDA" NO FINAL DA HOME (#diagnostico) */}
      <section id="diagnostico" className="py-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden bg-[#0f1115] border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#20364d]/15 rounded-full blur-[140px] -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          
          {/* Lado Esquerdo: Chamada e Garantias */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#20364d] block">
              Diagnóstico Sem Custo
            </span>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter leading-tight text-white">
              Pronto para ter controle real sobre seus resultados?
            </h2>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Preencha o formulário e nossa equipe analisará o momento atual do seu tráfego pago e da sua esteira de vendas. Você receberá um diagnóstico prático sem enrolação.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-3.5 bg-[#111318] border border-white/10 rounded-xl">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">Análise técnica da sua conta de anúncios atual</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 bg-[#111318] border border-white/10 rounded-xl">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">Aparato de velocidade e conversão da Landing Page</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 bg-[#111318] border border-white/10 rounded-xl">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">Retorno em até 24 horas úteis por especialistas</span>
              </div>
            </div>

            <div className="p-4 bg-[#20364d]/20 border border-[#20364d]/40 rounded-xl">
              <p className="text-xs text-slate-300 leading-relaxed">
                Preferindo atendimento rápido via mensagem direta? Chame nosso time pelo botão flutuante do WhatsApp no canto da tela.
              </p>
            </div>
          </div>

          {/* Lado Direito: PAPER CARD DO FORMULÁRIO (#f4f3ef) */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#f4f3ef] text-[#0f1115] p-8 sm:p-10 rounded-3xl border border-white/20 shadow-2xl space-y-6"
            >
              
              <div className="space-y-2 border-b border-slate-300/80 pb-4">
                <h3 className="text-2xl font-black text-[#0f1115] tracking-tight">
                  Solicitar Diagnóstico sob medida
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  Qualifique seu lead para um atendimento direto com a nossa liderança operacional.
                </p>
              </div>

              {/* Status Feedback */}
              {status === "success" && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-start gap-3 text-emerald-900 text-xs font-bold animate-fade-in">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feedbackMsg}</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl flex items-start gap-3 text-rose-900 text-xs font-bold animate-fade-in">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <span>{feedbackMsg}</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black uppercase tracking-wider text-slate-700 block">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Ex: Roberto Silva"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-xs font-medium text-[#0f1115] placeholder-slate-400 focus:outline-none focus:border-[#20364d] focus:ring-1 focus:ring-[#20364d] shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black uppercase tracking-wider text-slate-700 block">
                      E-mail Profissional *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="exemplo@suaempresa.com"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-xs font-medium text-[#0f1115] placeholder-slate-400 focus:outline-none focus:border-[#20364d] focus:ring-1 focus:ring-[#20364d] shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black uppercase tracking-wider text-slate-700 block">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-xs font-medium text-[#0f1115] placeholder-slate-400 focus:outline-none focus:border-[#20364d] focus:ring-1 focus:ring-[#20364d] shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black uppercase tracking-wider text-slate-700 block">
                      Nome da Empresa / Projeto *
                    </label>
                    <input
                      type="text"
                      required
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      placeholder="Ex: Tech Solutions"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-xs font-medium text-[#0f1115] placeholder-slate-400 focus:outline-none focus:border-[#20364d] focus:ring-1 focus:ring-[#20364d] shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-black uppercase tracking-wider text-slate-700 block">
                    Detalhes do seu momento atual de vendas *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Conte resumidamente seu objetivo (ex: escalar faturamento, melhorar CPL, reestruturar tráfego pago ou criar landing page)..."
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-xs font-medium text-[#0f1115] placeholder-slate-400 focus:outline-none focus:border-[#20364d] focus:ring-1 focus:ring-[#20364d] shadow-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 bg-[#0f1115] hover:bg-[#20364d] text-white font-black text-xs uppercase tracking-widest rounded-xl transition-colors shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <span>Processando envio...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Enviar e Receber Diagnóstico</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </motion.div>
      </section>

    </div>
  );
}
