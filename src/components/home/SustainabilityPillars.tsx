import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Infinity, TrendingUp, Factory, ArrowRight } from "lucide-react";
import { companyData } from "@/data/companyData";

export default function SustainabilityPillars() {
  const icons = [Leaf, Infinity, TrendingUp, Factory];

  return (
    <section className="py-20 lg:py-28 bg-navy-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-brandGreen block mb-2">
            Circular Economy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Why Aluminium Scrap?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Aluminium is 100% infinitely recyclable. Secondary metallurgy conserves up to 95% of the energy required for virgin bauxite smelting.
          </p>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {companyData.whyAluminiumScrap.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={item.step}
                className="bg-navy-800/90 rounded-2xl p-6 border border-white/10 hover:border-brandGreen/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-brandGreen">
                      {item.step}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    &ldquo;{item.desc}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 text-xs font-semibold text-brandGreen">
                  {item.metric}
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Banner */}
        <div className="rounded-3xl bg-navy-800/60 border border-white/10 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brandGreen">
              Environmental Metallurgy
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              &ldquo;Recycle Today for a Better Tomorrow&rdquo;
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Powering global industrial manufacturing through verified non-ferrous recycling and transparent trading practices.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/sustainability"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brandGreen hover:bg-brandGreen-dark text-navy font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
