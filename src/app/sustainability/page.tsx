import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Infinity,
  TrendingUp,
  Factory,
  ArrowRight,
  Recycle,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { companyData } from "@/data/companyData";

export const metadata: Metadata = {
  title: "Sustainability & Circular Metal Trade",
  description:
    "Discover how Yeoman Exim Private Limited advances the global circular economy by supplying high-purity aluminium scrap, conserving natural bauxite, and saving up to 95% energy versus primary smelting.",
  keywords: [
    "Aluminium Recycling Energy Savings",
    "Circular Economy Scrap Metal India",
    "Sustainable Aluminium Trade Surat",
    "Secondary Aluminium Carbon Footprint",
    "Green Metallurgy Yeoman Exim",
    "Scrap Metal Eco Friendly",
    "Bauxite Conservation Secondary Smelting",
    "Surat Circular Economy Metals",
  ],
  alternates: {
    canonical: "https://yeomanexim.com/sustainability",
  },
  openGraph: {
    title: "Sustainability & Circular Metal Trade | Yeoman Exim Surat",
    description:
      "Trade that supports a circular economy: Environment friendly, resource efficient, cost effective secondary aluminium.",
    url: "https://yeomanexim.com/sustainability",
    images: [
      {
        url: "/images/sustainability-circular.jpg",
        width: 1200,
        height: 675,
        alt: "Yeoman Exim Circular Aluminium Recycling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sustainability & Circular Metal Trade | Yeoman Exim Surat",
    description:
      "Trade that supports a circular economy with responsible aluminium scrap trading.",
    images: ["/images/sustainability-circular.jpg"],
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Surat, Gujarat, India",
    "geo.position": "21.2173;72.8664",
    "ICBM": "21.2173, 72.8664",
  },
};

export default function SustainabilityPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://yeomanexim.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sustainability",
        item: "https://yeomanexim.com/sustainability",
      },
    ],
  };

  const lifecycleSteps = [
    {
      step: "01",
      title: "Scrap Collection & Segregation",
      desc: "Post-consumer and industrial aluminium scrap (extrusions, UBC, cast, alloy wheels) is collected and systematically sorted.",
    },
    {
      step: "02",
      title: "Quality Verification & Baling",
      desc: "Scrap is stripped of non-metallic attachments, assayed for chemical composition, and compacted into dense export bales.",
    },
    {
      step: "03",
      title: "International Supply Chain",
      desc: "Yeoman Exim coordinates cross-border freight to deliver verified scrap directly to secondary smelters and billet casters.",
    },
    {
      step: "04",
      title: "Remelting & Ingot Casting",
      desc: "Secondary smelters re-melt the scrap using up to 95% less energy than virgin bauxite ore extraction.",
    },
    {
      step: "05",
      title: "Industrial Manufacturing",
      desc: "Recycled aluminium is shaped into architectural extrusions, auto parts, and green packaging—completing the closed circular loop.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="pt-32 lg:pt-36 pb-20 bg-white">
      {/* Header Banner */}
      <section className="bg-navy py-16 lg:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-brandGreen uppercase tracking-wider mb-4">
              <Leaf className="w-3.5 h-3.5" />
              <span>Circular Economy Commitment</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Trade That Supports a Circular Economy
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              &ldquo;Recycle Today for a Better Tomorrow&rdquo; — Powering industrial metallurgy through responsible scrap trading, resource conservation, and reduced emissions.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative & Visual Split */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brandGreen">
              Environmental Metallurgy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
              Why Aluminium Scrap is Vital to Sustainable Industry
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              Unlike many other structural materials, aluminium can be re-melted and reformed repeatedly without losing any of its elemental properties. This infinite recyclability makes aluminium scrap one of the most commercially and environmentally impactful commodities in modern trade.
            </p>
            <p className="text-slate-700 text-base leading-relaxed">
              By sourcing, grading, and supplying verified aluminium scrap to domestic and international industrial smelters, Yeoman Exim helps significantly curtail the heavy electrical demand and carbon footprint associated with primary bauxite mining.
            </p>

            <div className="p-4 rounded-xl bg-surface-light border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-navy">
                <CheckCircle2 className="w-4 h-4 text-brandGreen flex-shrink-0" />
                <span>Conserves Up To 95% of Primary Smelting Energy</span>
              </div>
              <p className="text-xs text-slate-600 pl-6">
                Recycling aluminium requires only approximately 5% of the energy necessary to create primary aluminium from raw bauxite ore, drastically curbing CO₂ emissions.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100">
              <Image
                src="/images/sustainability-circular.jpg"
                alt="Recycled aluminium ingots in modern clean foundry - Yeoman Exim"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Concepts from PDF */}
      <section className="py-16 lg:py-24 bg-surface-light border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Key Value Drivers
            </span>
            <h3 className="text-3xl font-extrabold text-navy mt-1">
              Core Principles from Our Company Profile
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyData.whyAluminiumScrap.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xl font-mono font-black text-brandGreen block mb-3">
                    {item.step}
                  </span>
                  <h4 className="text-lg font-bold text-navy mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    &ldquo;{item.desc}&rdquo;
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs font-semibold text-brandBlue">
                  {item.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Storytelling: Circular Lifecycle */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brandGreen">
            Visual Storytelling
          </span>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-navy mt-1">
            The Closed-Loop Aluminium Recycling Journey
          </h3>
          <p className="mt-3 text-slate-600 text-sm">
            How Yeoman Exim coordinates scrap flows from origin sorting to secondary industrial re-use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {lifecycleSteps.map((step, idx) => (
            <div
              key={step.step}
              className="p-5 rounded-2xl bg-surface-light border border-slate-200/80 flex flex-col justify-between relative group hover:border-brandGreen transition-colors"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-navy text-white text-xs font-mono font-bold flex items-center justify-center mb-3">
                  {step.step}
                </div>
                <h4 className="text-sm font-bold text-navy mb-2 leading-tight">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < 4 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-200 text-slate-400 flex items-center justify-center text-xs">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-navy hover:bg-brandBlue text-white font-bold text-sm shadow-md transition-colors"
          >
            <span>Partner for Sustainable Sourcing</span>
            <ArrowRight className="w-4 h-4 text-brandGreen" />
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
