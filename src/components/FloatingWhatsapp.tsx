/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageSquare } from "lucide-react";

export default function FloatingWhatsapp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://api.whatsapp.com/send?phone=5511994075149"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento via WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 border border-white/30 cursor-pointer"
      >
        {/* Anel Pulsante de Presença */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300 border-2 border-[#0f1115]"></span>
        </span>

        <MessageSquare className="w-7 h-7 fill-white stroke-none" />

        {/* Tooltip no Hover */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#0f1115]/90 border border-white/15 text-white text-[11px] font-bold uppercase tracking-wider rounded-lg backdrop-blur-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
          Falar no WhatsApp
        </span>
      </a>
    </div>
  );
}
