"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall, Mail, ShieldCheck } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { companyData } from "@/data/companyData";

export default function CtaSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative py-20 lg:py-28 bg-navy-900 text-white overflow-hidden">
      {/* Background Cargo Port / Warehouse Visual */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-cargo-port.jpg"
          alt="International container logistics - Yeoman Exim"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/90 to-navy-900/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-brandGreen uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Ready for Dependable Global Trade</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Looking for a Reliable Aluminium Scrap Trading Partner?
          </h2>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
            &ldquo;Let&apos;s build a dependable and transparent global trading relationship.&rdquo;
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-brandBlue hover:bg-brandBlue-dark shadow-xl shadow-brandBlue/30 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-blue-400/30"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-5 h-5 text-brandGreen" />
            </button>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 active:scale-[0.98]"
            >
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Quick Direct Desk Contacts */}
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-300">
            <a
              href={`tel:${companyData.contact.phoneRaw}`}
              className="flex items-center gap-2 hover:text-brandGreen transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-brandGreen" />
              <span>Direct: {companyData.contact.phone}</span>
            </a>
            <a
              href={`mailto:${companyData.contact.email}`}
              className="flex items-center gap-2 hover:text-brandGreen transition-colors"
            >
              <Mail className="w-4 h-4 text-brandGreen" />
              <span>Email: {companyData.contact.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
