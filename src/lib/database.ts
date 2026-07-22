/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lead, Newsletter, SupabaseConfig } from "../types";

const LOCAL_LEADS_KEY = "canguru_leads_db";
const LOCAL_NEWS_KEY = "canguru_newsletter_db";
const CONFIG_KEY = "canguru_supabase_config";

// Inicializa alguns leads padrão para a demonstração da plataforma parecer real e povoada
const DEFAULT_LEADS: Lead[] = [
  {
    nome: "Ana Carolina Santos",
    email: "carolina.santos@lojamoda.com.br",
    whatsapp: "(11) 98765-4321",
    empresa: "Bella Moda Express",
    mensagem: "Preciso de ajuda urgente para otimizar minhas campanhas de tráfego pago para o Dia dos Pais. Meu custo por aquisição está muito alto.",
    criado_em: new Date(Date.now() - 3600000 * 4).toISOString(), // 4 horas atrás
  },
  {
    nome: "Roberto Mendes",
    email: "roberto@mendesconstrutora.com.br",
    whatsapp: "(21) 99888-7766",
    empresa: "Mendes Construtora",
    mensagem: "Gostaria de estruturar um funil de automação no WhatsApp para qualificar leads de imóveis residenciais.",
    criado_em: new Date(Date.now() - 3600000 * 24).toISOString(), // 1 dia atrás
  },
  {
    nome: "Juliana Frota",
    email: "juliana@frotaclinica.com.br",
    whatsapp: "(31) 97777-1122",
    empresa: "Clínica Frota Odonto",
    mensagem: "Temos interesse em tráfego geolocalizado e posicionamento no Google Meu Negócio para atrair pacientes particulares.",
    criado_em: new Date(Date.now() - 3600000 * 72).toISOString(), // 3 dias atrás
  },
];

const DEFAULT_NEWS: Newsletter[] = [
  { email: "contato@startupvibe.com", criado_em: new Date(Date.now() - 3600000 * 12).toISOString() },
  { email: "marcio.vendas@indmetal.com.br", criado_em: new Date(Date.now() - 3600000 * 48).toISOString() },
];

export function getSupabaseConfig(): SupabaseConfig {
  const saved = localStorage.getItem(CONFIG_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      // Ignora erro
    }
  }
  return {
    supabaseUrl: "",
    supabaseAnonKey: "",
    makeWebhookLeads: "",
    makeWebhookNewsletter: "",
  };
}

export function saveSupabaseConfig(config: SupabaseConfig): void {
  localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
}

export function getLeads(): Lead[] {
  const saved = localStorage.getItem(LOCAL_LEADS_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      // Ignora erro
    }
  }
  // Se não houver dados, inicializa com os padrões
  localStorage.setItem(LOCAL_LEADS_KEY, JSON.stringify(DEFAULT_LEADS));
  return DEFAULT_LEADS;
}

export function getNewsletters(): Newsletter[] {
  const saved = localStorage.getItem(LOCAL_NEWS_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      // Ignora erro
    }
  }
  localStorage.setItem(LOCAL_NEWS_KEY, JSON.stringify(DEFAULT_NEWS));
  return DEFAULT_NEWS;
}

export async function addLead(lead: Omit<Lead, "criado_em">): Promise<{ success: boolean; mode: "real" | "local"; error?: string }> {
  let success = false;
  let errorMsg: string | undefined = undefined;

  // Enviar formulário de diagnóstico para o Web3Forms via POST JSON
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        access_key: "77dccc98-44c1-497e-9852-36f1e2609c6e",
        subject: "Novo lead - Diagnóstico Canguru Digital",
        from_name: "Site Canguru Digital",
        name: lead.nome,
        email: lead.email,
        phone: lead.whatsapp,
        company: lead.empresa,
        message: lead.mensagem,
        nome: lead.nome,
        whatsapp: lead.whatsapp,
        empresa: lead.empresa,
        mensagem: lead.mensagem
      })
    });

    const data = await response.json();
    if (response.ok && data.success) {
      success = true;
    } else {
      console.error("Erro no Web3Forms:", data);
      errorMsg = data.message || "Ocorreu um erro ao enviar sua mensagem no Web3Forms. Por favor, tente novamente.";
    }
  } catch (e: any) {
    console.error("Falha de conexão com o Web3Forms:", e);
    errorMsg = "Ocorreu uma falha de conexão. Verifique sua internet ou fale pelo WhatsApp.";
  }

  // Opcional: disparar Webhook do Make se configurado
  const config = getSupabaseConfig();
  if (config.makeWebhookLeads && success) {
    try {
      await fetch(config.makeWebhookLeads, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({ ...lead, criado_em: new Date().toISOString() })
      });
    } catch (e) {
      console.error("Falha ao disparar webhook de leads do Make:", e);
    }
  }

  return { success, mode: "real", error: errorMsg };
}

export async function addNewsletter(email: string): Promise<{ success: boolean; mode: "real" | "local"; error?: string }> {
  let success = false;
  let errorMsg: string | undefined = undefined;

  // Chamar endpoint serverless /api/newsletter que se conecta ao Brevo
  try {
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email.trim() })
    });

    const data = await response.json().catch(() => ({}));

    if (response.ok && (data.success || response.status === 200)) {
      success = true;
    } else {
      console.error("Erro retornado pelo endpoint /api/newsletter:", data);
      errorMsg = data.error || "Erro ao processar inscrição no serviço de e-mail.";
    }
  } catch (e: any) {
    console.error("Falha na chamada ao endpoint /api/newsletter:", e);
    errorMsg = "Ocorreu um erro de conexão ao conectar com o servidor da newsletter.";
  }

  return { success, mode: "real", error: errorMsg };
}
