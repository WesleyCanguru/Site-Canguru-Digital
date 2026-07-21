import EditorialServices from "../components/EditorialServices";
import TiltCard from "../components/TiltCard";
import { MessageSquare, ArrowUpRight } from "lucide-react";

interface ServicosProps {
  navigateTo: (route: string) => void;
}

export default function Servicos({ navigateTo }: ServicosProps) {
  return (
    <div className="bg-[#0f1115] text-white pt-20 overflow-x-hidden">
      
      {/* HERO SERVIÇOS - ASIMÉTRICO E FULL-BLEED */}
      <section className="w-full py-24 px-6 sm:px-12 lg:px-20 border-b border-white/10 relative overflow-hidden bg-[#0c0e12]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#20364d]/15 rounded-full blur-[140px] -z-10" />
        
        <div className="w-full max-w-6xl space-y-6">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#20364d] block">
            Nossos Serviços
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.93] text-white">
            Atendimento sob medida. Estrutura comercial integrada.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Estruturamos as frentes de tráfego pago, conteúdo, branding, tecnologia web e automação que o seu negócio precisa hoje para alcançar metas de faturamento reais. Nada a mais, nada a menos.
          </p>
        </div>
      </section>

      {/* SEÇÃO EDITORIAL DE SERVIÇOS EM INTERAÇÃO TOTAL */}
      <section className="w-full py-24 px-6 sm:px-12 lg:px-20 border-b border-white/10 bg-[#0f1115]">
        <div className="w-full space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                07 Frentes Operacionais
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Explore nosso ecossistema de soluções
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Passe o cursor sobre os nomes para visualizar detalhes de escopo e ilustrações técnicas em tempo real.
            </p>
          </div>

          {/* Componente da Lista Editorial Interativa */}
          <EditorialServices navigateTo={navigateTo} />
        </div>
      </section>

      {/* CTA SERVIÇOS COM TILTCARD E BOTÃO WHATSAPP */}
      <section className="w-full py-28 px-6 sm:px-12 lg:px-20 text-center relative overflow-hidden bg-[#111318] border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#20364d]/15 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-4xl mx-auto space-y-8">
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
        </div>
      </section>

    </div>
  );
}
