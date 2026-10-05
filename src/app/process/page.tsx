import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  FileCode,
  CheckCircle,
  Handshake,
  FileText,
  Ship,
  Truck,
  Shield,
  ArrowRight,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";
import { processSteps, processCommitment } from "@/data/processData";

export const metadata: Metadata = {
  title: "Trading Process | Our International Trade Approach",
  description:
    "Explore Yeoman Exim's structured 7-step trade process for seamless, transparent, and dependable aluminium scrap importing and exporting.",
};

export default function ProcessPage() {
  const iconMap: Record<string, React.ElementType> = {
    Users,
    FileCode,
    CheckCircle,
    Handshake,
    FileText,
    Ship,
    Truck,
  };

  return (
    <div className="pt-32 lg:pt-36 pb-20 bg-white">
      {/* Header Banner */}
      <section className="bg-navy py-16 lg:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-brandGreen uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>International Trade Methodology</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Our International Trade Approach
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              A Structured Process for Seamless Trade — coordinating every phase from sourcing to final delivery with institutional discipline and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Structured 7-Step Deep Dive */}
      <section className="py-16 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {processSteps.map((stepItem, index) => {
            const Icon = iconMap[stepItem.icon] || CheckCircle;
            return (
              <div
                key={stepItem.step}
                className="relative bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 lg:gap-10 items-start group"
              >
                {/* Step indicator badge */}
                <div className="flex-shrink-0 flex items-center md:flex-col gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-surface-light border border-slate-200 group-hover:border-brandGreen group-hover:bg-green-50 flex items-center justify-center text-brandBlue group-hover:text-brandGreen transition-all duration-300 shadow-sm">
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-mono font-bold text-slate-400 group-hover:text-brandGreen">
                    STAGE {stepItem.step}
                  </span>
                </div>

                {/* Step Details */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-navy group-hover:text-brandBlue transition-colors">
                    {stepItem.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {stepItem.summary}
                  </p>

                  <div className="pt-3 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      Key Execution Activities:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                      {stepItem.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brandGreen flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment Banner from PDF */}
        <div className="mt-16 rounded-3xl bg-navy-900 text-white p-8 sm:p-12 shadow-2xl border border-navy-700 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brandGreen">
            <ClipboardCheck className="w-4 h-4" />
            <span>Institutional Commitment</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {processCommitment.tagline}
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            At Yeoman Exim Private Limited, we believe that international metal trading thrives on predictable execution. By systematically standardizing every operational step—from supplier due diligence to customs documentation and container delivery—we ensure buyers receive precisely what was contracted.
          </p>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brandGreen hover:bg-brandGreen-dark text-navy font-bold text-sm shadow transition-colors"
            >
              <span>Initiate a Trade Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
