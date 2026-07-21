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
  const criado_em = new Date().toISOString();
  const fullLead: Lead = { ...lead, criado_em };

  // 1. Salvar localmente primeiro para garantir exibição imediata na Área de Controle
  const currentLeads = getLeads();
  const updatedLeads = [fullLead, ...currentLeads];
  localStorage.setItem(LOCAL_LEADS_KEY, JSON.stringify(updatedLeads));

  const config = getSupabaseConfig();
  let mode: "real" | "local" = "local";
  let errorMsg: string | undefined = undefined;

  // 2. Tentar salvar no Supabase se configurado
  if (config.supabaseUrl && config.supabaseAnonKey) {
    try {
      // Normaliza URL removendo barra final
      const baseUrl = config.supabaseUrl.replace(/\/$/, "");
      const response = await fetch(`${baseUrl}/rest/v1/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": config.supabaseAnonKey,
          "Authorization": `Bearer ${config.supabaseAnonKey}`,
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(fullLead)
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error("Erro no Supabase Leads:", errText);
        errorMsg = `Supabase retornou status ${response.status}: ${errText}`;
      } else {
        mode = "real";
      }
    } catch (e: any) {
      console.error("Falha ao enviar para Supabase:", e);
      errorMsg = e.message || "Erro de conexão com o Supabase";
    }
  }

  // 3. Tentar disparar Webhook do Make se configurado
  if (config.makeWebhookLeads) {
    try {
      await fetch(config.makeWebhookLeads, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors", // Evita problemas de CORS no Make
        body: JSON.stringify(fullLead)
      });
    } catch (e) {
      console.error("Falha ao disparar webhook de leads do Make:", e);
    }
  }

  return { success: !errorMsg, mode, error: errorMsg };
}

export async function addNewsletter(email: string): Promise<{ success: boolean; mode: "real" | "local"; error?: string }> {
  const criado_em = new Date().toISOString();
  const entry: Newsletter = { email, criado_em };

  // 1. Salvar localmente
  const currentNews = getNewsletters();
  const updatedNews = [entry, ...currentNews];
  localStorage.setItem(LOCAL_NEWS_KEY, JSON.stringify(updatedNews));

  const config = getSupabaseConfig();
  let mode: "real" | "local" = "local";
  let errorMsg: string | undefined = undefined;

  // 2. Tentar salvar no Supabase se configurado
  if (config.supabaseUrl && config.supabaseAnonKey) {
    try {
      const baseUrl = config.supabaseUrl.replace(/\/$/, "");
      const response = await fetch(`${baseUrl}/rest/v1/newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": config.supabaseAnonKey,
          "Authorization": `Bearer ${config.supabaseAnonKey}`,
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(entry)
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error("Erro no Supabase Newsletter:", errText);
        errorMsg = `Supabase retornou status ${response.status}: ${errText}`;
      } else {
        mode = "real";
      }
    } catch (e: any) {
      console.error("Falha ao enviar newsletter para Supabase:", e);
      errorMsg = e.message || "Erro de conexão com o Supabase";
    }
  }

  // 3. Tentar disparar Webhook do Make se configurado
  if (config.makeWebhookNewsletter) {
    try {
      await fetch(config.makeWebhookNewsletter, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify(entry)
      });
    } catch (e) {
      console.error("Falha ao disparar webhook de newsletter do Make:", e);
    }
  }

  return { success: !errorMsg, mode, error: errorMsg };
}
