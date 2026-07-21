/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { getLeads, getNewsletters, getSupabaseConfig, saveSupabaseConfig } from "../lib/database";
import { Lead, Newsletter } from "../types";
import { 
  Activity, 
  Database, 
  Users, 
  Settings, 
  Play, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight, 
  Globe, 
  Smartphone, 
  TrendingUp, 
  Mail, 
  AlertCircle, 
  Check, 
  RefreshCw,
  Plus
} from "lucide-react";

export default function LeadPlatform() {
  const [activeTab, setActiveTab] = useState<"dash" | "leads" | "news" | "settings">("dash");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [config, setConfig] = useState(getSupabaseConfig());
  const [saveStatus, setSaveStatus] = useState<"idle" | "saved">("idle");
  const [liveVisitors, setLiveVisitors] = useState(14);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    setLeads(getLeads());
    setNewsletters(getNewsletters());
  }, [refreshKey, activeTab]);

  // Simula variação de visitantes ativos
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveVisitors(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        const next = prev + change;
        return next < 3 ? 5 : next > 35 ? 24 : next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    saveSupabaseConfig(config);
    setSaveStatus("saved");
    setTimeout(() => setSaveStatus("idle"), 3000);
  };

  const forceRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  // Status de tarefas da agência em andamento (demonstrativo da transparência de operação)
  const operationTasks = [
    { id: 1, label: "Estruturação de Funil CRM de WhatsApp", status: "progress", progress: 65, resp: "CRM Team", deadline: "Em 3 dias" },
    { id: 2, label: "Desenvolvimento da Nova Landing Page de Conversão", status: "completed", progress: 100, resp: "Dev Team", deadline: "Finalizado" },
    { id: 3, label: "Otimização Mensal de SEO & Google Meu Negócio", status: "progress", progress: 85, resp: "SEO Specialist", deadline: "Hoje" },
    { id: 4, label: "Criação de Criativos para Campanha de Tráfego Pago", status: "progress", progress: 40, resp: "Design Team", deadline: "Amanhã" },
    { id: 5, label: "Redação de Copys e Testes A/B de Anúncios", status: "completed", progress: 100, resp: "Copywriter", deadline: "Finalizado" },
    { id: 6, label: "Setup do Pixel de Rastreamento (Google & Meta)", status: "completed", progress: 100, resp: "Dev/Tráfego", deadline: "Finalizado" },
  ];

  return (
    <div className="w-full bg-[#111318] border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl">
      {/* Topo do Painel */}
      <div className="border-b border-slate-800/80 bg-slate-950/60 p-4 md:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-sky-500/10 rounded-xl border border-sky-500/20 text-sky-400">
            <Activity className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-sm tracking-wider uppercase text-white">Canguru Controle</h3>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                LIVE OPERATIONAL
              </span>
            </div>
            <p className="text-xs text-slate-400">Plataforma Exclusiva de Gestão Integrada</p>
          </div>
        </div>

        {/* Abas */}
        <div className="flex flex-wrap items-center gap-1 bg-[#191c24] p-1 rounded-xl border border-slate-800/60 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab("dash")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "dash" 
                ? "bg-slate-800 text-white shadow-sm" 
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            Operação
          </button>
          <button
            onClick={() => setActiveTab("leads")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold relative transition-all ${
              activeTab === "leads" 
                ? "bg-slate-800 text-white shadow-sm" 
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            Leads
            {leads.length > 3 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-sky-500 text-[9px] font-extrabold text-white">
                {leads.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab("news")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "news" 
                ? "bg-slate-800 text-white shadow-sm" 
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            Newsletter
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "settings" 
                ? "bg-slate-800 text-white shadow-sm" 
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            Integrações
          </button>
        </div>
      </div>

      {/* Corpo das Abas */}
      <div className="p-4 md:p-6 min-h-[380px] bg-slate-950/20">
        
        {/* ABA: OPERAÇÃO / DASHBOARD */}
        {activeTab === "dash" && (
          <div className="space-y-6">
            {/* Cards de Métricas Principais */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-850/60 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-1">Métricas de Tráfego Ativas</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-black text-white">{liveVisitors}</span>
                    <span className="text-xs font-semibold text-emerald-400 flex items-center gap-0.5">
                      <ArrowUpRight className="w-3 h-3" />
                      +12% vs. ontem
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-850/40 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Visitantes ativos no site agora</span>
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </div>
              </div>

              <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-850/60 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-1">Custo Médio Por Lead (CPL)</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-black text-white">R$ 8,42</span>
                    <span className="text-xs font-semibold text-sky-400 flex items-center gap-0.5">
                      -18% este mês
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-850/40 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Meta batida de R$ 12,00</span>
                  <span className="text-emerald-400 font-bold">100% OK</span>
                </div>
              </div>

              <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-850/60 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-1">Performance Comercial Geral</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-black text-white">4.8x ROI</span>
                    <span className="text-xs font-semibold text-emerald-400 flex items-center gap-0.5">
                      Recorde histórico
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-850/40 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Retorno das campanhas ativas</span>
                  <span className="text-sky-400 font-bold">Tráfego Otimizado</span>
                </div>
              </div>
            </div>

            {/* Lista de Tarefas da Agência */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-white flex items-center gap-2">
                  <Play className="w-3 h-3 fill-sky-400 text-sky-400" />
                  Atividades em Andamento no Seu Negócio (Aprovadas)
                </h4>
                <span className="text-[11px] text-slate-400">Total: {operationTasks.length} frentes</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {operationTasks.map(task => (
                  <div 
                    key={task.id} 
                    className="p-3.5 bg-[#14171f] rounded-xl border border-slate-850/50 hover:border-slate-800 transition-all flex flex-col justify-between gap-3 group"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex items-start gap-2.5">
                        {task.status === "completed" ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        ) : (
                          <Clock className="w-4 h-4 text-sky-400 mt-0.5 shrink-0 animate-pulse" />
                        )}
                        <div>
                          <p className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">{task.label}</p>
                          <span className="text-[10px] text-slate-400 mt-1 inline-block bg-slate-900 px-2 py-0.5 rounded border border-slate-800/40">
                            {task.resp}
                          </span>
                        </div>
                      </div>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        task.status === "completed" 
                          ? "bg-emerald-500/10 text-emerald-400" 
                          : "bg-sky-500/10 text-sky-400"
                      }`}>
                        {task.deadline}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span>Progresso</span>
                        <span className="font-bold text-slate-200">{task.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-950/80 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${
                            task.status === "completed" ? "bg-emerald-400" : "bg-sky-400"
                          }`}
                          style={{ width: `${task.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ABA: LEADS RECEBIDOS */}
        {activeTab === "leads" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">Leads Capturados</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Submissões registradas em tempo real por formulários do site</p>
              </div>
              <button 
                onClick={forceRefresh}
                className="p-1.5 text-slate-400 hover:text-white bg-[#191c24] rounded-lg border border-slate-800/80 transition-all flex items-center gap-1 text-xs font-bold"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Atualizar
              </button>
            </div>

            {leads.length === 0 ? (
              <div className="py-12 text-center bg-slate-950/40 rounded-xl border border-dashed border-slate-800/80">
                <Users className="w-8 h-8 text-slate-650 mx-auto mb-2" />
                <p className="text-xs font-bold text-slate-300">Nenhum lead capturado ainda.</p>
                <p className="text-[11px] text-slate-400 mt-1 max-w-xs mx-auto">Vá para a página de Contato, envie uma mensagem de teste e veja-a surgir aqui instantaneamente!</p>
              </div>
            ) : (
              <div className="overflow-x-auto border border-slate-850 rounded-xl bg-slate-950/40">
                <table className="w-full text-left text-xs text-slate-300 border-collapse">
                  <thead>
                    <tr className="bg-slate-950/80 text-slate-400 uppercase tracking-wider text-[10px] font-extrabold border-b border-slate-850">
                      <th className="p-3.5">Nome / Empresa</th>
                      <th className="p-3.5">Contato</th>
                      <th className="p-3.5">Mensagem</th>
                      <th className="p-3.5">Data/Hora</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-850/50">
                    {leads.map((lead, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/30 transition-colors">
                        <td className="p-3.5">
                          <p className="font-bold text-white">{lead.nome}</p>
                          <p className="text-[11px] text-sky-400 mt-0.5 font-semibold uppercase tracking-wider">{lead.empresa}</p>
                        </td>
                        <td className="p-3.5">
                          <p>{lead.email}</p>
                          <p className="text-[11px] text-slate-400 mt-0.5">{lead.whatsapp}</p>
                        </td>
                        <td className="p-3.5 max-w-xs">
                          <p className="truncate text-slate-400" title={lead.mensagem}>{lead.mensagem}</p>
                        </td>
                        <td className="p-3.5 text-[11px] text-slate-400 whitespace-nowrap">
                          {new Date(lead.criado_em).toLocaleString("pt-BR")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ABA: NEWSLETTER */}
        {activeTab === "news" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-white">Inscrições na Newsletter</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Inscrições recebidas nos campos de captura de e-mail</p>
              </div>
              <button 
                onClick={forceRefresh}
                className="p-1.5 text-slate-400 hover:text-white bg-[#191c24] rounded-lg border border-slate-800/80 transition-all flex items-center gap-1 text-xs font-bold"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Atualizar
              </button>
            </div>

            {newsletters.length === 0 ? (
              <div className="py-12 text-center bg-slate-950/40 rounded-xl border border-dashed border-slate-800/80">
                <Mail className="w-8 h-8 text-slate-650 mx-auto mb-2" />
                <p className="text-xs font-bold text-slate-300">Nenhum e-mail inscrito ainda.</p>
                <p className="text-[11px] text-slate-400 mt-1 max-w-xs mx-auto">Cadastre um e-mail no campo de newsletter no rodapé e veja-o aparecer aqui!</p>
              </div>
            ) : (
              <div className="max-w-xl mx-auto overflow-hidden border border-slate-850 rounded-xl bg-slate-950/40">
                <div className="bg-slate-950/80 text-slate-400 uppercase tracking-wider text-[10px] font-extrabold p-3.5 border-b border-slate-850 flex justify-between">
                  <span>E-mail</span>
                  <span>Inscrito Em</span>
                </div>
                <div className="divide-y divide-slate-850/50">
                  {newsletters.map((item, idx) => (
                    <div key={idx} className="p-3.5 hover:bg-slate-900/30 transition-colors flex justify-between items-center text-xs">
                      <span className="font-bold text-white">{item.email}</span>
                      <span className="text-[11px] text-slate-400">
                        {new Date(item.criado_em).toLocaleString("pt-BR")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ABA: CONFIGURAÇÕES DE INTEGRAÇÃO */}
        {activeTab === "settings" && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-white flex items-center gap-2">
                <Database className="w-4 h-4 text-sky-400" />
                Configurar Supabase & Webhooks Reais
              </h4>
              <p className="text-[11px] text-slate-400 mt-1">
                Por padrão, o site armazena os envios no <span className="font-bold text-slate-200">localStorage</span> e simula tudo no painel acima. Se você deseja conectar com uma base de dados real do Supabase e enviar e-mails/dados para o Make, preencha as credenciais abaixo.
              </p>
            </div>

            <form onSubmit={handleSaveConfig} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-300 block">Supabase URL</label>
                  <input
                    type="url"
                    placeholder="https://xxxxxx.supabase.co"
                    value={config.supabaseUrl}
                    onChange={e => setConfig({ ...config, supabaseUrl: e.target.value })}
                    className="w-full bg-[#14171f] border border-slate-800 text-xs px-3 py-2.5 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/60"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-300 block">Supabase Anon Key</label>
                  <input
                    type="password"
                    placeholder="eyJhbGciOiJIUzI1NiIsInR..."
                    value={config.supabaseAnonKey}
                    onChange={e => setConfig({ ...config, supabaseAnonKey: e.target.value })}
                    className="w-full bg-[#14171f] border border-slate-800 text-xs px-3 py-2.5 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/60"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-300 block">Make Webhook (Leads)</label>
                  <input
                    type="url"
                    placeholder="https://hook.us2.make.com/xxxx"
                    value={config.makeWebhookLeads}
                    onChange={e => setConfig({ ...config, makeWebhookLeads: e.target.value })}
                    className="w-full bg-[#14171f] border border-slate-800 text-xs px-3 py-2.5 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/60"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-300 block">Make Webhook (Newsletter)</label>
                  <input
                    type="url"
                    placeholder="https://hook.us2.make.com/yyyy"
                    value={config.makeWebhookNewsletter}
                    onChange={e => setConfig({ ...config, makeWebhookNewsletter: e.target.value })}
                    className="w-full bg-[#14171f] border border-slate-800 text-xs px-3 py-2.5 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/60"
                  />
                </div>
              </div>

              {/* Dica técnica sobre as tabelas no Supabase */}
              <div className="p-3 bg-slate-900/40 rounded-lg border border-slate-850 flex items-start gap-2 text-[11px] text-slate-400">
                <AlertCircle className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-200">Estrutura das tabelas exigidas:</p>
                  <p className="mt-0.5">1. <span className="text-sky-400 font-semibold">leads</span>: nome (text), email (text), whatsapp (text), empresa (text), mensagem (text), criado_em (timestamp com timezone).</p>
                  <p className="mt-0.5">2. <span className="text-sky-400 font-semibold">newsletter</span>: email (text), criado_em (timestamp com timezone).</p>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-slate-950 font-extrabold text-xs tracking-wider uppercase rounded-lg transition-all flex items-center gap-2"
                >
                  {saveStatus === "saved" ? (
                    <>
                      <Check className="w-4 h-4" />
                      Salvo com Sucesso!
                    </>
                  ) : (
                    <>
                      <Database className="w-4 h-4" />
                      Salvar Integrações
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
