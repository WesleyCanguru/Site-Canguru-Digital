/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import wesleyAvatar from "../assets/images/Wesley-Camelo-Fundador.jpeg";
import blogBudget from "../assets/images/blog_budget_2026_1784653896023.jpg";
import blogPdf from "../assets/images/blog_pdf_reports_1784740387120.jpg";
import blogWhatsapp from "../assets/images/blog_whatsapp_crm_1784740401668.jpg";
import blogLanding from "../assets/images/blog_landing_pages_1784740416071.jpg";
import blogContent from "../assets/images/blog_content_strategy_1784740428926.jpg";

export interface BlogPostItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: "Tráfego Pago" | "Gestão & Dados" | "Automação & CRM" | "SEO & Conversão" | "Estratégia";
  readTime: string;
  image: string;
  author: string;
  authorRole: string;
  authorAvatar?: string;
  featured?: boolean;
  intro: string;
  sections: {
    heading: string;
    content: string[];
    list?: string[];
  }[];
  faqs?: { q: string; a: string }[];
  summary: string;
}

export const BLOG_POSTS: BlogPostItem[] = [
  {
    slug: "quanto-investir-em-anuncios",
    title: "Quanto devo investir em anúncios no Instagram e Google em 2026?",
    excerpt: "Descubra os mínimos técnicos exigidos, nossas recomendações brutas de orçamento e por que valores extremamente baixos travam seus resultados comerciais nas ferramentas de anúncios.",
    date: "21 Julho, 2026",
    category: "Tráfego Pago",
    readTime: "7 min de leitura",
    image: blogBudget,
    author: "Wesley Camelo",
    authorRole: "Fundador & Diretor de Estratégia",
    authorAvatar: wesleyAvatar,
    featured: true,
    intro: "Se você perguntar para qualquer agência tradicional quanto deve investir em anúncios pagos, a resposta padrão sempre será: 'Depende dos seus objetivos'. Nós achamos essa resposta preguiçosa. Embora metas variem, o mercado possui regras numéricas frias que ditam o sucesso em 2026.",
    sections: [
      {
        heading: "1. O mínimo técnico exigido pelas plataformas",
        content: [
          "Matematicamente, as ferramentas de anúncios definem o orçamento mínimo diário indexado ao valor do dólar americano (aproximadamente R$ 6,00 por dia por conjunto de anúncios). Com esse orçamento mínimo absoluto, você consegue colocar um anúncio para rodar.",
          "No entanto, existe uma distância abissal entre o mínimo técnico exigido e o mínimo de viabilidade estratégica. Se você injetar apenas o mínimo técnico, suas campanhas demorarão meses para colher dados de pixel suficientes para sair do modo de aprendizado das plataformas, jogando sua verba no lixo."
        ]
      },
      {
        heading: "2. Google Ads x Meta Ads (Instagram & Facebook)",
        content: [
          "A divisão técnica da sua verba deve respeitar a dinâmica de comportamento de compra de cada canal:"
        ],
        list: [
          "Google Ads (Rede de Pesquisa): Atua capturando a demanda consciente. O usuário digita ativamente o que deseja. O clique aqui é mais caro, mas o lead chega extremamente qualificado e pronto para fechar contrato comercial.",
          "Meta Ads (Instagram & Facebook): Atua gerando desejo visual e descoberta. O usuário é interrompido em seu momento de lazer. Você precisa de copys magnéticas e criativos em vídeo impactantes. O lead gerado costuma ter custo menor, porém exige mais qualificação por CRM."
        ]
      },
      {
        heading: "3. Quanto recomendamos para começar?",
        content: [
          "Para empresas de pequeno e médio porte no mercado brasileiro que visam ROI sustentável em 2026, recomendamos começar com uma verba mínima de R$ 1.500 a R$ 2.000 mensais (equivalente a aproximadamente R$ 50,00 a R$ 65,00 por dia).",
          "Com esse orçamento de entrada, é possível segmentar 2 conjuntos de anúncios concorrentes (testes A/B), gerando cliques diários em volume suficiente para alimentar os algoritmos de inteligência artificial de conversão e gerar um fluxo regular de leads para o seu WhatsApp comercial."
        ]
      },
      {
        heading: "4. Por que orçamento excessivamente baixo trava seus resultados",
        content: [
          "Quando você investe muito pouco (ex: R$ 300 ou R$ 500 no mês inteiro), acontece o fenômeno do sufocamento de amostragem. Os leilões das plataformas de anúncios são altamente concorridos. Com verba ínfima, seus anúncios não conseguem concorrer nos horários de maior conversão e são distribuídos para audiências de menor qualidade técnica.",
          "Sem dados diários, o pixel não otimiza, os criativos saturam rapidamente e seu custo por lead (CPL) dispara de forma insustentável. Investir abaixo do patamar básico é um dos maiores erros de novos empresários."
        ]
      },
      {
        heading: "5. Quando escalar a verba de anúncios?",
        content: [
          "O aumento do orçamento de anúncios (escala comercial) nunca deve ser baseado em achismo ou intuição de momento. A regra matemática é simples: escale somente quando o seu Custo por Aquisição (CPA) estiver estável e o Retorno sobre Investimento (ROI) estiver lucrativo por pelo menos 14 dias consecutivos.",
          "Inicie a escala adicionando verba de forma suave, em incrementos de no máximo 20% do orçamento total a cada 3 dias úteis, para evitar que o pixel entre em nova fase de calibração instável."
        ]
      }
    ],
    faqs: [
      {
        q: "Se eu investir R$ 500 no mês, realmente não terei nenhum resultado?",
        a: "É improvável ter resultados escaláveis. Com R$ 16 por dia, você só consegue ativar um único conjunto de anúncios simples. Se houver qualquer falha ou se o criativo perder relevância, seu dinheiro será consumido sem gerar cliques suficientes para que o pixel aprenda o perfil dos compradores."
      },
      {
        q: "Qual plataforma converte melhor em 2026: Google Ads ou Meta Ads?",
        a: "Não existe melhor absoluta, existe canal adequado à intenção do comprador. O Google Ads captura a demanda ativa (pessoas pesquisando por termos específicos). O Meta Ads gera demanda passiva (interrompe a navegação no Instagram/Facebook). Se seu produto atende necessidade urgente (ex: serviço jurídico, encanador), use Google. Se gera desejo visual (ex: moda, estética, imobiliária), use Meta."
      },
      {
        q: "Como sei o momento exato de aumentar a minha verba diária?",
        a: "O momento de escalar ocorre quando seu Custo por Aquisição (CPA) está estável e seu ROI está saudável há pelo menos 14 dias seguidos. Recomendamos escalar o orçamento em incrementos graduais de 15% a 20% a cada 3 ou 4 dias."
      }
    ],
    summary: "Para colher resultados comerciais escaláveis em 2026, evite investir apenas verbas mínimas ou testar valores insignificantes sem planejamento estruturado. Comece com R$ 1.500 a R$ 2.000 mensais nas plataformas (Meta/Google), otimize as conversões de seu site, prepare sua equipe comercial de CRM para respostas rápidas e monitore de perto cada conjunto de anúncios em tempo real."
  },
  {
    slug: "por-que-pdf-fim-do-mes-nao-funciona",
    title: "Por que relatórios em PDF de meio de mês são uma cortina de fumaça",
    excerpt: "A maioria das agências usa relatórios em PDF estáticos para esconder a falta de entregas e otimização diária. Entenda por que o controle operacional em tempo real muda o jogo comercial.",
    date: "14 Julho, 2026",
    category: "Gestão & Dados",
    readTime: "5 min de leitura",
    image: blogPdf,
    author: "Wesley Camelo",
    authorRole: "Fundador & Diretor de Estratégia",
    authorAvatar: wesleyAvatar,
    featured: false,
    intro: "Imagine pilotar um avião em alta velocidade olhado apenas para fotos impressas do painel tiradas no mês passado. Parece absurdo, mas é exatamente assim que a maioria das empresas gerencia o marketing digital ao aceitar relatórios em PDF enviados a cada 30 dias.",
    sections: [
      {
        heading: "1. A ilusão das métricas de vaidade",
        content: [
          "O relatório tradicional em PDF costuma vir recheado de gráficos bonitos e métricas de vaidade: alcance, impressões, cliques brutos e seguidores. No entanto, alcance não paga folha de pagamento e curtida não entra no fluxo de caixa.",
          "O empresário precisa saber: Quantos leads qualificados entraram no WhatsApp ontem? Qual foi o Custo por Lead (CPL) real? Qual canal vendeu mais na semana?"
        ]
      },
      {
        heading: "2. O problema do atraso na tomada de decisão",
        content: [
          "Quando um anúncio perde eficiência ou um link quebra no dia 5 do mês, se você só descobre isso no relatório enviado dia 30, você jogou 25 days de verba no lixo sem nenhuma chance de correção ágil.",
          "Na Canguru, acreditamos que o acompanhamento deve ser em tempo real. Cada ajuste em criativo, landing page ou orçamento deve ser visível instantaneamente."
        ]
      },
      {
        heading: "3. Transparência operacional como padrão de mercado",
        content: [
          "A tecnologia da Canguru permite que o cliente acompanhe status de entregas, performance das campanhas e métricas financeiras sem precisar solicitar relatórios ou aguardar e-mails formais."
        ]
      }
    ],
    faqs: [
      {
        q: "Com que frequência devo analisar os números de anúncios?",
        a: "A equipe técnica deve monitorar as campanhas diariamente. O cliente deve ter acesso a um painel simples e atualizado em tempo real para consultar os resultados sempre que desejar."
      }
    ],
    summary: "Substitua a ansiedade de relatórios mensais estáticos por visibilidade total e imediata sobre o seu investimento em tráfego pago e vendas."
  },
  {
    slug: "crm-whatsapp-conversao",
    title: "Como estruturar um funil de CRM no WhatsApp para parar de perder leads",
    excerpt: "Não adianta injetar milhares de reais em anúncios se o seu comercial humano demora 30 minutos para responder as mensagens. Veja a esteira de automação ideal com webhooks e disparo instantâneo.",
    date: "05 Julho, 2026",
    category: "Automação & CRM",
    readTime: "6 min de leitura",
    image: blogWhatsapp,
    author: "Wesley Camelo",
    authorRole: "Fundador & Diretor de Estratégia",
    authorAvatar: wesleyAvatar,
    featured: false,
    intro: "Pesquisas de mercado em 2026 provam que o tempo de resposta ideal para um lead vindo de anúncios na internet é de até 5 minutos. Após 15 minutos de espera, a chance de conversão despenca em mais de 70%.",
    sections: [
      {
        heading: "1. A regra dos 5 minutos no atendimento comercial",
        content: [
          "Quando um potencial cliente clica no seu anúncio e chama no WhatsApp, ele está no topo do desejo de compra. Se o vendedor demora 30 minutos ou 2 horas para responder, o lead já chamou dois concorrentes e fechou negócio.",
          "O papel do CRM integrado com automação é garantir que a primeira abordagem aconteça em questão de segundos."
        ]
      },
      {
        heading: "2. Webhooks, Make e automação sem atrito",
        content: [
          "Com a infraestrutura moderna de automação, cada formulário preenchido dispara dados instantâneos via webhook para o CRM e envia uma saudação inicial personalizada no WhatsApp do lead."
        ]
      }
    ],
    faqs: [
      {
        q: "A automação de WhatsApp substitui o vendedor humano?",
        a: "Não. A automação qualifica, colhe as primeiras informações e passa o lead quente para o vendedor humano concluir a negociação com alta eficiência."
      }
    ],
    summary: "Tráfego pago gera a oportunidade. É a velocidade e a organização do seu CRM que transforma clique em dinheiro em caixa."
  },
  {
    slug: "landing-pages-de-alta-conversao",
    title: "5 elementos obrigatórios em Landing Pages que convertem acima de 25%",
    excerpt: "Sua página carrega em menos de 1,5s? A proposta de valor está visível na primeira dobra? Veja a checklist exata que utilizamos para projetar páginas ultrarrápidas de alta conversão.",
    date: "28 Junho, 2026",
    category: "SEO & Conversão",
    readTime: "8 min de leitura",
    image: blogLanding,
    author: "Wesley Camelo",
    authorRole: "Fundador & Diretor de Estratégia",
    authorAvatar: wesleyAvatar,
    featured: false,
    intro: "Muitos empresários culpam o tráfego pago quando os anúncios não vendem. No entanto, ao analisar a página de destino, encontramos sites lentos, poluídos ou que demoram 5 segundos para carregar em celulares.",
    sections: [
      {
        heading: "1. Velocidade de carregamento móvel (< 1.5s)",
        content: [
          "A cada segundo adicional que sua página leva para carregar, você perde cerca de 20% dos visitantes pagos. Otimizar código, comprimir imagens e utilizar servidores eficientes é obrigação básica de engenharia."
        ]
      },
      {
        heading: "2. Headline direta sem jargões",
        content: [
          "Sua proposta de valor precisa ser entendida em 3 segundos. O visitante precisa saber exatamente o que você oferece, para quem é e qual o próximo passo."
        ]
      }
    ],
    summary: "Invista em uma landing page rápida, limpa e focada em conversão para multiplicar o retorno sobre cada real investido em mídia paga."
  },
  {
    slug: "estrategia-de-conteudo-para-trafego",
    title: "Como alinhar sua linha editorial de conteúdo com a verba de tráfego pago",
    excerpt: "Posts bonitos sem intenção de vendas não pagam boleto. Entenda como transformar seu feed em um gerador orgânico de autoridade para baratear o custo por lead pago.",
    date: "18 Junho, 2026",
    category: "Estratégia",
    readTime: "6 min de leitura",
    image: blogContent,
    author: "Wesley Camelo",
    authorRole: "Fundador & Diretor de Estratégia",
    authorAvatar: wesleyAvatar,
    featured: false,
    intro: "Conteúdo orgânico e tráfego pago não devem rodar como ilhas isoladas. Quando o anúncio atrai a atenção de um potencial cliente e ele visita o seu perfil, seu feed deve validar a autoridade da sua marca imediatamente.",
    sections: [
      {
        heading: "1. O papel do feed na validação da marca",
        content: [
          "Antes de preencher um formulário ou chamar no WhatsApp, é natural que o consumidor verifique a presença da empresa nas redes sociais. Um perfil abandonado ou genérico destrói a confiança construída pelo anúncio."
        ]
      },
      {
        heading: "2. Linha editorial focada em dores do cliente",
        content: [
          "Crie conteúdos que respondam às maiores dúvidas e objeções da sua audiência. Isso reduz a fricção na negociação comercial e melhora o desempenho dos anúncios."
        ]
      }
    ],
    summary: "Alinhar seu conteúdo orgânico às suas campanhas pagas cria um ecossistema de vendas robusto e autoritário."
  }
];

export function getPostBySlug(slug: string): BlogPostItem | undefined {
  const clean = slug.trim().toLowerCase().replace(/\/+$/, "");
  return BLOG_POSTS.find((p) => p.slug.toLowerCase() === clean);
}
