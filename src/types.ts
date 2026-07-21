/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Lead {
  id?: string;
  nome: string;
  email: string;
  whatsapp: string;
  empresa: string;
  mensagem: string;
  criado_em: string;
}

export interface Newsletter {
  id?: string;
  email: string;
  criado_em: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: string;
  tags: string[];
}

export interface SupabaseConfig {
  supabaseUrl: string;
  supabaseAnonKey: string;
  makeWebhookLeads: string;
  makeWebhookNewsletter: string;
}
