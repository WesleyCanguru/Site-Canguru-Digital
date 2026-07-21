/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowLeft, Calendar, Clock, Tag, MessageSquare, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface BlogPostProps {
  navigateTo: (route: string) => void;
}

export default function BlogPost({ navigateTo }: BlogPostProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const postFaqs = [
    {
      q: "Se eu investir R$ 500 no mês, realmente não terei nenhum resultado?",
      a: "É improvável ter resultados escaláveis. Com R$ 16 por dia, você só consegue ativar um único conjunto de anúncios simples. Se houver qualquer falha ou se o criativo perder relevância, seu dinheiro será consumido sem gerar cliques suficientes para que o pixel aprenda o perfil dos compradores. Funciona apenas como um pequeno teste de marca local muito restrito."
    },
    {
      q: "Qual plataforma converte melhor em 2026: Google Ads ou Meta Ads?",
      a: "Não existe melhor absoluta, existe canal adequado à intenção do comprador. O Google Ads (Rede de Pesquisa) captura a demanda ativa: pessoas que já decidiram comprar e pesquisam por termos específicos. O Meta Ads (Instagram/Facebook) gera demanda passiva: interrompe a navegação do usuário com uma proposta visual magnética. Se o seu produto resolve uma necessidade imediata (ex: encanador, advogado), use Google. Se gera desejo visual (ex: moda, imóveis), use Meta."
    },
    {
      q: "Como sei o momento exato de aumentar a minha verba diária?",
      a: "O momento de escalar ocorre quando seu Custo por Aquisição (CPA) está estável e seu ROI está saudável há pelo menos 14 dias seguidos. Nunca duplique a verba de uma hora para outra; as plataformas entram em nova fase de aprendizado. Recomendamos escalar o orçamento em incrementos graduais de 15% a 20% a cada 3 ou 4 dias, monitorando se o custo por lead se mantém estável."
    }
  ];

  return (
    <div className="bg-[#0f1115] text-white pt-20">
      
      {/* CABEÇALHO DO POST */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6">
        <button
          onClick={() => {
            navigateTo("/blog/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white hover:text-white/80 transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar para listagem
        </button>

        <div className="space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#111318] border border-white/10 rounded-full text-[9px] font-black uppercase tracking-wider text-[#20364d]">
            <Tag className="w-3 h-3" />
            Tráfego Pago & Orçamento
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-[0.95] text-white">
            Quanto devo investir em anúncios no Instagram e Google em 2026?
          </h1>

          <div className="flex items-center gap-4 text-xs text-slate-500 font-bold uppercase tracking-wider pt-2">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              21 Julho, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              7 min de leitura
            </span>
          </div>
        </div>
      </section>

      {/* IMAGEM DE CAPA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <img
            src="/src/assets/images/blog_budget_2026_1784653896023.jpg"
            alt="Capa do Artigo - Orçamento de Anúncios em 2026"
            referrerPolicy="no-referrer"
            className="w-full h-auto aspect-video object-cover"
          />
        </div>
      </section>

      {/* CONTEÚDO EDITORIAL */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="prose prose-invert max-w-none text-slate-350 text-xs sm:text-sm leading-relaxed space-y-6">
          
          <p className="font-semibold text-white text-sm sm:text-base leading-relaxed">
            Se você perguntar para qualquer agência tradicional quanto deve investir em anúncios pagos, a resposta padrão sempre será: "Depende dos seus objetivos". Nós achamos essa resposta preguiçosa. Embora metas variem, o mercado possui regras numéricas frias que ditam o sucesso em 2026.
          </p>
          <p>
            Anunciar no Google Ads e Meta Ads (Instagram/Facebook) não é mais um diferencial competitivo; é pré-requisito técnico para manter a sua empresa relevante no mercado brasileiro. A seguir, destrinchamos as métricas reais e orçamentos brutos que ditam se a sua campanha irá trazer retorno.
          </p>
          <hr className="border-white/10 my-8" />

          {/* H2: O Mínimo Técnico das Plataformas */}
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight pt-4">
            1. O mínimo técnico exigido pelas plataformas
          </h2>
          <p>
            Matematicamente, as ferramentas de anúncios definem o orçamento mínimo diário indexado ao valor do dólar americano (aproximadamente R$ 6,00 por dia por conjunto de anúncios). Com esse orçamento mínimo absoluto, você consegue colocar um anúncio para rodar.
          </p>
          <p>
            No entanto, existe uma distância abissal entre o <span className="font-bold text-slate-200">mínimo técnico exigido</span> e o <span className="font-bold text-slate-200">mínimo de viabilidade estratégica</span>. Se você injetar apenas o mínimo técnico, suas campanhas demorarão meses para colher dados de pixel suficientes para sair do modo de aprendizado das plataformas, jogando sua verba no lixo.
          </p>

          {/* H2: Google Ads x Meta Ads */}
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight pt-4">
            2. Google Ads x Meta Ads (Instagram & Facebook)
          </h2>
          <p>
            A divisão técnica da sua verba deve respeitar a dinâmica de comportamento de compra de cada canal:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-400">
            <li>
              <span className="font-bold text-white">Google Ads (Rede de Pesquisa):</span> Atua capturando a demanda consciente. O usuário digita ativamente o que deseja (ex: "conserto de ar condicionado em SP"). O clique aqui é mais caro, mas o lead chega extremamente qualificado e pronto para fechar contrato comercial.
            </li>
            <li>
              <span className="font-bold text-white">Meta Ads (Instagram & Facebook):</span> Atua gerando desejo visual e descoberta. O usuário é interrompido em seu momento de lazer. Você precisa de copys magnéticas e criativos em vídeo impactantes. O lead gerado costuma ter custo menor, porém exige mais qualificação por CRM.
            </li>
          </ul>

          {/* H2: Quanto Recomendamos pra Começar */}
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight pt-4">
            3. Quanto recomendamos para começar?
          </h2>
          <p>
            Para empresas de pequeno e médio porte no mercado brasileiro que visam ROI sustentável em 2026, recomendamos começar com uma verba mínima de <span className="font-bold text-white text-sm sm:text-base">R$ 1.500 a R$ 2.000 mensais</span> (equivalente a aproximadamente R$ 50,00 a R$ 65,00 por dia).
          </p>
          <p>
            Com esse orçamento de entrada, é possível segmentar 2 conjuntos de anúncios concorrentes (testes A/B), gerando cliques diários em volume suficiente para alimentar os algoritmos de inteligência artificial de conversão e gerar um fluxo regular de leads para o seu WhatsApp comercial.
          </p>

          {/* H2: Por que valor baixo trava resultado */}
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight pt-4">
            4. Por que orçamento excessivamente baixo trava seus resultados
          </h2>
          <p>
            Quando você investe muito pouco (ex: R$ 300 ou R$ 500 no mês inteiro), acontece o fenômeno do <span className="font-bold text-slate-200">sufocamento de amostragem</span>. Os leilões das plataformas de anúncios são altamente concorridos. Com verba ínfima, seus anúncios não conseguem concorrer nos horários de maior conversão e são distribuídos para audiências de menor qualidade técnica.
          </p>
          <p>
            Sem dados diários, o pixel não otimiza, os criativos saturam rapidamente e seu custo por lead (CPL) dispara de forma insustentável. Investir abaixo do patamar básico é um dos maiores erros de novos empresários.
          </p>

          {/* H2: Quando Escalar */}
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight pt-4">
            5. Quando escalar a verba de anúncios?
          </h2>
          <p>
            O aumento do orçamento de anúncios (escala comercial) nunca deve ser baseado em achismo ou intuição de momento. A regra matemática é simples: escale somente quando o seu Custo por Aquisição (CPA) estiver estável e o Retorno sobre Investimento (ROI) estiver lucrativo por pelo menos 14 dias consecutivos.
          </p>
          <p>
            Inicie a escala adicionando verba de forma suave, em incrementos de no máximo 20% do orçamento total a cada 3 dias úteis, para evitar que o pixel entre em nova fase de calibração instável.
          </p>

          {/* H2: Erros Mais Comuns */}
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight pt-4">
            6. Erros mais comuns ao planejar orçamentos de Ads
          </h2>
          <ul className="list-decimal pl-5 space-y-2 text-slate-400">
            <li>
              <span className="font-bold text-white">Pausar campanhas prematuramente:</span> Desligar os anúncios com menos de 7 dias de funcionamento sob alegação de que "não deu certo" interrompe o aprendizado do pixel.
            </li>
            <li>
              <span className="font-bold text-white">Não separar verba de anúncios do fee da agência:</span> Misturar o dinheiro gasto com as plataformas com o valor pago à agência gera confusão contábil imediata sobre o verdadeiro custo por aquisição de leads.
            </li>
            <li>
              <span className="font-bold text-white">Investir tudo em um único criativo:</span> Não separar parte da verba para testar novas copys e formatos visuais faz suas campanhas saturarem de forma rápida.
            </li>
          </ul>

          <hr className="border-white/10 my-10" />

          {/* SEÇÃO FAQ DO POST (3 PERGUNTAS) */}
          <div className="space-y-6">
            <h3 className="text-lg font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#20364d]" />
              Dúvidas Técnicas Rápidas sobre Orçamentos
            </h3>

            <div className="space-y-4">
              {postFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className="bg-[#111318] border border-white/10 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-5 py-4 text-left flex justify-between items-center gap-4 hover:bg-slate-900/20 transition-colors cursor-pointer"
                    >
                      <span className="text-xs font-bold text-white uppercase tracking-wide leading-tight">{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#20364d] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-450 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 border-t border-white/5 text-xs text-slate-400 leading-relaxed animate-fade-in">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* H2: Resumo Final */}
          <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight pt-8">
            Resumo Final
          </h2>
          <p className="bg-[#111318] p-5 rounded-xl border border-white/10 border-l-4 border-l-[#20364d] font-medium leading-relaxed">
            Para colher resultados comerciais escaláveis em 2026, evite investir apenas verbas mínimas ou testar valores insignificantes sem planejamento estruturado. Comece com R$ 1.500 a R$ 2.000 mensais nas plataformas (Meta/Google), otimize as conversões de seu site, prepare sua equipe comercial de CRM para respostas rápidas e monitore de perto cada conjunto de anúncios em tempo real.
          </p>

        </div>
      </section>

      {/* CTA INTERNO DO BLOG */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden bg-[#111318] border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tighter leading-none text-white max-w-xl mx-auto">
            Gostaria que o Wesley Camelo desenhasse a estratégia de verba do seu negócio?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Solicite um diagnóstico comercial gratuito. Nós analisamos seus concorrentes reais e apontamos onde investir cada real para obter maior retorno.
          </p>
          <div className="flex justify-center pt-2">
            <button
              onClick={() => {
                navigateTo("/contato/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2.5 px-8 py-4.5 bg-white hover:bg-[#f4f3ef] text-[#0f1115] font-black text-xs uppercase tracking-widest rounded-full transition-all shadow-lg cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-[#0f1115]" />
              Solicitar diagnóstico do meu orçamento
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
