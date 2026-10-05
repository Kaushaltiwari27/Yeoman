import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { partnersData, partnersMotto } from "@/data/partnersData";

export default function PartnersPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brandBlue block mb-2">
            Commercial Relationships
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Our Business Partners
          </h2>
          <p className="mt-2 text-sm sm:text-base font-semibold text-brandBlue">
            &ldquo;{partnersMotto.headline}&rdquo;
          </p>
        </div>

        {/* 5 Verified Corporate Partner Cards (Clean, Responsive, No fake logos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {partnersData.map((partner, idx) => (
            <div
              key={partner.id}
              className="p-5 rounded-2xl bg-surface-light border border-slate-200/80 hover:border-brandBlue/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 block mb-2">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-navy mb-1">
                  {partner.name}
                </h3>
                <div className="text-xs font-semibold text-brandGreen mb-2">
                  {partner.category}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {partner.focus}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>{partner.establishedAssociation}</span>
                <ShieldCheck className="w-3.5 h-3.5 text-brandGreen" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/partners"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brandBlue hover:text-navy transition-colors group"
          >
            <span>Learn More About Our Alliances</span>
            <ArrowRight className="w-3.5 h-3.5 text-brandGreen transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
