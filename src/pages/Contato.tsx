/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { addLead } from "../lib/database";
import wesleyFoto from "../assets/images/Wesley-Camelo-Fundador.jpeg";
import { 
  MessageSquare, 
  Send, 
  Check, 
  AlertCircle, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  RefreshCw
} from "lucide-react";

interface ContatoProps {
  navigateTo: (route: string) => void;
}

export default function Contato({ navigateTo }: ContatoProps) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [mensagem, setMensagem] = useState("");
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
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
        // Limpa formulário
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

  const socialLinks = [
    { label: "Instagram", url: "https://instagram.com/cangurudigital" },
    { label: "LinkedIn", url: "https://linkedin.com/company/cangurudigital" },
    { label: "Facebook", url: "https://facebook.com/cangurudigital" },
  ];

  return (
    <div className="bg-[#0f1115] text-white pt-20 overflow-x-hidden">
      
      {/* HERO CONTATO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#20364d]/10 rounded-full blur-3xl -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#20364d] block">Fale com a agência</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none text-white">
            Vamos conversar sobre o seu negócio.
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Seja para tirar dúvidas, solicitar um diagnóstico completo de tráfego pago ou contratar nossa operação, nossa equipe está pronta para te atender de forma direta e sem burocracia.
          </p>
        </motion.div>
      </section>

      {/* SEÇÃO PRINCIPAL DE CONTATO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          
          {/* Lado Esquerdo: Informações, WhatsApp e Foto do Fundador */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#20364d] block">Atendimento Imediato</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">Escolha o seu canal preferido para iniciar</h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Preencha o formulário para enviar dados estruturados ou chame diretamente no WhatsApp comercial para falar com um de nossos assessores de tráfego e CRM.
              </p>
            </div>

            {/* Botão de WhatsApp Físico Mantido ao Lado */}
            <div className="p-6 bg-[#111318] border border-white/10 rounded-2xl space-y-4 shadow-xl">
              <h3 className="text-sm font-black uppercase tracking-wider text-white">Conversa no WhatsApp</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Canal de resposta rápida direto com nosso time estratégico para dúvidas operacionais ou orçamentos.
              </p>
              
              <a
                href="https://api.whatsapp.com/send?phone=5511994075149"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full px-6 py-4 bg-white hover:bg-[#f4f3ef] text-[#0f1115] font-black text-xs uppercase tracking-widest rounded-full transition-all shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-[#0f1115]" />
                Iniciar Conversa (WhatsApp)
              </a>
            </div>

            {/* Informações Institucionais */}
            <div className="space-y-4 pt-4 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#20364d] shrink-0" />
                <span>contato@cangurudigital.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#20364d] shrink-0" />
                <span>+55 11 99407-5149</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#20364d] shrink-0" />
                <span>São Paulo - SP, Brasil</span>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mb-3">Siga nossa operação nas redes</h4>
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Foto do Fundador */}
            <div className="relative pt-6">
              <div className="flex items-center gap-3 bg-[#111318]/50 p-4 rounded-xl border border-white/10">
                <img
                  src={wesleyFoto}
                  alt="Wesley Camelo"
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 object-cover rounded-full border border-white/10 shrink-0"
                />
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Wesley Camelo</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">Analisa pessoalmente todas as propostas comerciais enviadas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário com fundo "Paper" claro #f4f3ef para respiro visual contrastante */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#f4f3ef] text-[#0f1115] p-8 md:p-10 rounded-2xl shadow-2xl space-y-6 border border-slate-300"
            >
              
              <div>
                <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-500 block mb-1">Passo Inicial</span>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight uppercase">Diagnóstico Sob Medida</h3>
                <p className="text-xs text-slate-650 mt-1 leading-relaxed">
                  Preencha os campos abaixo de forma sincera. Retornaremos em menos de 24h úteis com uma análise detalhada dos seus canais de tráfego.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-700 block">Seu nome completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Ana Carolina Santos"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full bg-white border border-slate-300 text-xs sm:text-sm px-4 py-3 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-850 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-700 block">E-mail corporativo</label>
                    <input
                      type="email"
                      required
                      placeholder="Ex: carolina@suaempresa.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-slate-300 text-xs sm:text-sm px-4 py-3 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-850 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-700 block">WhatsApp com DDD</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (11) 99407-5149"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full bg-white border border-slate-300 text-xs sm:text-sm px-4 py-3 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-850 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-700 block">Nome da Empresa & Segmento</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Canguru Logística S/A"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    className="w-full bg-white border border-slate-300 text-xs sm:text-sm px-4 py-3 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-850 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-700 block">Quais gargalos de tráfego e vendas você enfrenta hoje?</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Descreva seu momento: quanto investe em anúncios, se já tem site, se possui CRM, qual a principal dificuldade..."
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    className="w-full bg-white border border-slate-300 text-xs sm:text-sm px-4 py-3 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-850 transition-colors resize-none"
                  />
                </div>

                {/* Status de Envio */}
                {status !== "idle" && (
                  <div className={`p-4 rounded-xl border text-xs leading-relaxed flex gap-2 items-start animate-fade-in ${
                    status === "success"
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-800"
                      : status === "error"
                      ? "bg-rose-500/10 border-rose-500/20 text-rose-800"
                      : "bg-slate-500/10 border-slate-500/20 text-slate-800"
                  }`}>
                    {status === "success" && <Check className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />}
                    {status === "error" && <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />}
                    {status === "loading" && <RefreshCw className="w-4 h-4 animate-spin shrink-0 mt-0.5 text-slate-600" />}
                    <span>{feedbackMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 bg-slate-950 hover:bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-full transition-all shadow-md cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-[#20364d]" />
                  Enviar solicitação de diagnóstico
                </button>

                <p className="text-[10px] text-slate-500 text-center leading-relaxed">
                  Nós respeitamos a LGPD de forma integral. Seus dados cadastrais serão guardados apenas para estruturar a nossa proposta comercial estratégica.
                </p>

              </form>

            </motion.div>
          </div>

        </motion.div>
      </section>

    </div>
  );
}
