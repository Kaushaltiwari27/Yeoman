"use client";

import React from "react";
import { Globe } from "lucide-react";
import Real3DGlobe from "./Real3DGlobe";

export default function GlobalMapSection() {
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

        {/* Real Interactive 3D WebGL Globe */}
        <div className="max-w-5xl mx-auto">
          <Real3DGlobe />
        </div>
      </div>
    </section>
  );
}
