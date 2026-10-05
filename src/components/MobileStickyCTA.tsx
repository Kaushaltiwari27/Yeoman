"use client";

import React from "react";
import { Phone, MessageSquare, ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { companyData } from "@/data/companyData";

export default function MobileStickyCTA() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3">
      <a
        href={`tel:${companyData.contact.phoneRaw}`}
        className="flex flex-col items-center justify-center p-2 rounded-lg text-slate-700 hover:text-brandBlue hover:bg-slate-50 transition-colors"
        aria-label="Call Yeoman Exim"
      >
        <Phone className="w-4 h-4 text-brandBlue" />
        <span className="text-[10px] font-medium mt-0.5">Call</span>
      </a>

      <a
        href={companyData.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center p-2 rounded-lg text-slate-700 hover:text-brandGreen hover:bg-slate-50 transition-colors"
        aria-label="WhatsApp Yeoman Exim"
      >
        <MessageSquare className="w-4 h-4 text-brandGreen" />
        <span className="text-[10px] font-medium mt-0.5">WhatsApp</span>
      </a>

      <button
        onClick={() => openQuoteModal()}
        className="flex-1 py-2.5 px-4 rounded-lg bg-brandBlue hover:bg-navy text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
      >
        <span>Request a Quote</span>
        <ArrowRight className="w-3.5 h-3.5 text-brandGreen" />
      </button>
    </div>
  );
}
