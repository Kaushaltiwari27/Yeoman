"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { companyData } from "@/data/companyData";

export default function WhatsAppFloating() {
  return (
    <aside
      aria-label="Direct WhatsApp Support"
      className="fixed bottom-20 sm:bottom-6 right-5 z-40 flex items-center group"
    >
      {/* Tooltip on hover only */}
      <span className="hidden md:block mr-2 px-3 py-1.5 rounded-lg bg-navy-900/95 text-white text-xs font-semibold shadow-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat with Scrap Desk
      </span>

      {/* Floating Button */}
      <a
        href={companyData.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Yeoman Exim on WhatsApp"
        className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 border border-white/20"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>
    </aside>
  );
}
