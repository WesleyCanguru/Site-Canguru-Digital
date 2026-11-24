/**
 * Estudos de caso da Canguru Digital.
 *
 * Formato da Agência Mestre (modelo em Ferramentas-IA/Skills/estudo-de-caso/references/modelo-canguru-pt.md).
 * Cada case entra aqui só depois de aprovado pelo cliente e pelo Wesley.
 *
 * Enquanto a lista estiver vazia, /cases e /cases/<slug> não existem no site
 * (não são roteados, nem pré-renderizados, nem entram no sitemap).
 * Ao adicionar o primeiro case, o build gera sozinho /cases/ e /cases/<slug>/ com HTML próprio.
 */

export type CaseService =
  | "Tráfego Pago"
  | "Social Media"
  | "Sites e LPs"
  | "CRM e WhatsApp";

export interface CaseHighlightNumber {
  /** Ex.: "+118%" */
  value: string;
  /** Legenda com base ou período. Ex.: "em leads · jan a jun/2026 vs. 2º sem/2025" */
  label: string;
}

export interface CaseSection {
  heading?: string;
  paragraphs: string[];
  list?: string[];
}

export interface CaseItem {
  /** URL: /cases/<slug>/. Ex.: "setor-advocacia-google-ads" */
  slug: string;
  /** Title da aba (até ~60 caracteres). Ex.: "Case setor de advocacia: 3x mais contatos | Canguru Digital" */
  seoTitle: string;
  /** Meta description (até ~155 caracteres) */
  metaDescription: string;
  /** H1 da página */
  title: string;
  /** Subtítulo: 1 frase de convite */
  subtitle: string;
  /** Nome do cliente ou "Setor de X" */
  client: string;
  service: CaseService;
  /** Data de publicação no formato ISO (AAAA-MM-DD) */
  datePublished: string;
  dateModified?: string;
  /** Imagem pública (anúncio, LP, post). Nunca print de sistema interno. */
  image?: string;
  /** 2 números do topo */
  highlights: [CaseHighlightNumber, CaseHighlightNumber];
  /** Card da página /cases: número em destaque + frase curta */
  card: { value: string; text: string };
  /** Introdução sem título */
  intro: string[];
  challenge: CaseSection;
  strategy: CaseSection[];
  /** Lista de resultados: "Leads por mês: de 42 (jan/2026) para 96 (jun/2026), +128%" */
  results: string[];
  strategyHighlights: CaseSection[];
  /** Opcional: só com história real aprovada */
  adjustments?: CaseSection;
  businessImpact: CaseSection;
  satisfaction: CaseSection;
  testimonial?: { text: string; name: string; role: string; photo?: string };
}

export const CASES: CaseItem[] = [];

export const CASE_SERVICES: CaseService[] = [
  "Tráfego Pago",
  "Social Media",
  "Sites e LPs",
  "CRM e WhatsApp",
];

export function getCaseBySlug(slug: string): CaseItem | undefined {
  const clean = slug.trim().toLowerCase().replace(/\/+$/, "");
  return CASES.find((c) => c.slug.toLowerCase() === clean);
}
