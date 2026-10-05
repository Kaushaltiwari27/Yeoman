"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Globe, MapPin, Anchor, ShieldCheck, Compass, Sparkles } from "lucide-react";

export default function GlobalMapSection() {
  const [activeCorridor, setActiveCorridor] = useState("all");

  const corridors = [
    {
      id: "all",
      name: "Global Network Overview",
      region: "Cross-Border Trade",
      desc: "Coordinating end-to-end non-ferrous scrap flows from international sourcing yards to industrial smelters.",
      ports: "Global Maritime Routes",
    },
    {
      id: "middle-east",
      name: "Middle East Corridor",
      region: "Sourcing & Transit Hub",
      desc: "Frequent scrap aggregation, inspection verification, and containerized non-ferrous bulk shipments.",
      ports: "Jebel Ali • Dammam • Hamad",
    },
    {
      id: "southeast-asia",
      name: "Southeast Asia Route",
      region: "Industrial Smelting Gateway",
      desc: "Direct connection with extrusion manufacturers and secondary alloy remelting foundries.",
      ports: "Port Klang • Singapore • Haiphong",
    },
    {
      id: "europe",
      name: "European Trade Network",
      region: "Recycled Metal Sourcing",
      desc: "High-grade aluminium scrap sourcing compliant with international ISRI quality guidelines.",
      ports: "Rotterdam • Antwerp • Genoa",
    },
  ];

  const current = corridors.find((c) => c.id === activeCorridor) || corridors[0];

  return (
    <section className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden">
      {/* Background Subtle Stars / Space Tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-900 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-brandGreen uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>International Trade Corridors</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Connecting Reliable Supply With Global Demand
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            From sourcing and verification to documentation, logistics and delivery, Yeoman Exim coordinates every stage with institutional precision and transparency.
          </p>
        </div>

        {/* 3D Conceptual Photorealistic Globe Showcase */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-black/40 backdrop-blur-md">
          {/* Main 3D Globe Visual */}
          <div className="relative aspect-[16/9] w-full min-h-[380px] sm:min-h-[500px] lg:min-h-[620px]">
            <Image
              src="/images/conceptual-trade-globe.jpg"
              alt="Conceptual 3D Earth Globe highlighting Surat, Gujarat international non-ferrous trade routes - Yeoman Exim"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center scale-100 sm:scale-102 hover:scale-105 transition-transform duration-1000 ease-out"
            />

            {/* Subtle Vignette Gradient for Seamless Edge Blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-transparent to-navy-950/60 pointer-events-none" />

            {/* Top Interactive Filter Pills */}
            <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 flex flex-wrap items-center gap-2 z-20">
              {corridors.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCorridor(c.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 backdrop-blur-md ${
                    activeCorridor === c.id
                      ? "bg-brandGreen text-navy shadow-lg shadow-brandGreen/20 scale-105"
                      : "bg-navy-900/80 hover:bg-navy-800 text-slate-200 border border-white/10"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            {/* Floating Origin Node Badge on Top Right */}
            <div className="hidden sm:flex absolute top-6 right-6 items-center gap-2.5 px-4 py-2 rounded-xl bg-navy-900/90 backdrop-blur-md border border-brandGreen/40 shadow-xl z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-brandGreen animate-ping"></span>
              <div className="text-left">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Global Hub Origin
                </div>
                <div className="text-xs font-extrabold text-white flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brandGreen" />
                  Surat, Gujarat, India
                </div>
              </div>
            </div>

            {/* Bottom Live Corridor Information Bar */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-2xl bg-navy-900/95 backdrop-blur-md border border-white/15 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 z-20">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-brandBlue text-white">
                    {current.region}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {current.name}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                  {current.desc}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs border-t md:border-t-0 md:border-l border-white/10 pt-3 md:pt-0 md:pl-5 flex-shrink-0">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-mono">
                    Gateway Terminals
                  </div>
                  <div className="text-xs font-semibold text-brandGreen mt-0.5">
                    {current.ports}
                  </div>
                </div>

                <div className="hidden lg:flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-brandGreen" />
                  <span>Verified Shipping Routes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
