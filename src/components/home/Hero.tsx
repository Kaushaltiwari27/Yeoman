"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function Hero() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-navy-950 text-white overflow-hidden pt-40 sm:pt-44 lg:pt-48 pb-20 sm:pb-24">
      {/* Background Image with Deep Elegant Industrial Tint */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-cargo-port.jpg"
          alt="International container cargo ship at port - Yeoman Exim Global Trading"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.22] contrast-110"
        />

        {/* Sophisticated Dark Gradient Vignette for Guaranteed Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Minimalist Top Location & Specialization Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-slate-200 mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-brandGreen"></span>
            <span>Surat, India</span>
            <span className="text-white/30">•</span>
            <span className="text-brandGreen font-bold">Aluminium Scrap Trading</span>
          </div>

          {/* Clean, Bold, Authoritative Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white mb-6 sm:mb-8 text-balance">
            Connecting Global Markets.{" "}
            <span className="block text-brandGreen mt-2">
              Enabling Responsible Trade.
            </span>
          </h1>

          {/* Crisp, Highly Readable Body Text */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200/90 leading-relaxed mb-8 sm:mb-10 max-w-2xl font-normal">
            Yeoman Exim Private Limited is an international trading company specializing in aluminium scrap—connecting reliable global suppliers and industrial buyers through transparent, dependable cross-border trade.
          </p>

          {/* Refined Minimalist Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-brandBlue hover:bg-brandBlue-dark shadow-xl shadow-brandBlue/25 transition-all duration-200 active:scale-[0.99] border border-blue-400/20"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-brandGreen" />
            </button>

            <Link
              href="/scrap"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 transition-all duration-200 active:scale-[0.99]"
            >
              <span>Explore Scrap Catalog</span>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
