import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { processSteps, processCommitment } from "@/data/processData";

export default function TradeProcessTimeline() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brandBlue block mb-2">
            Structured Trade Execution
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Our International Trade Approach
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            A Structured Process for Seamless Trade — coordinating every stage with institutional precision.
          </p>
        </div>

        {/* 7 Clean Process Cards (Responsive Grid: 1 col on mobile, 2 col on tablet, 3-4 col on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {processSteps.map((item, idx) => (
            <div
              key={item.step}
              className={`p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between ${
                idx === 6 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div>
                <span className="text-xs font-mono font-bold text-brandGreen bg-green-50 px-2.5 py-1 rounded-md inline-block mb-3">
                  STEP {item.step}
                </span>

                <h3 className="text-base font-bold text-navy mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] text-slate-500">
                {item.details[0]}
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Commitment Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-navy text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-brandGreen">
              Our Core Commitment
            </span>
            <div className="text-xl sm:text-2xl font-bold tracking-tight">
              {processCommitment.tagline}
            </div>
          </div>

          <div>
            <Link
              href="/process"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-navy hover:bg-slate-100 font-bold text-xs sm:text-sm transition-colors"
            >
              <span>Explore Trade Methodology</span>
              <ArrowRight className="w-4 h-4 text-brandBlue" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
