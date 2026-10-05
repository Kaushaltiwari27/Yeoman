"use client";

import React, { useState } from "react";
import { Globe, MapPin } from "lucide-react";

export default function GlobalMapSection() {
  const [activeHub, setActiveHub] = useState<string | null>(null);

  const hubs = [
    {
      id: "surat",
      name: "Surat, Gujarat (Origin & HQ)",
      desc: "Central Trading Desk & Operations Hub",
      x: 630,
      y: 330,
      isOrigin: true,
    },
    {
      id: "gulf",
      name: "Middle East Maritime Gateway",
      desc: "Secondary Metal Sourcing & Port Operations",
      x: 520,
      y: 310,
      path: "M 630 330 Q 575 300 520 310",
    },
    {
      id: "southeast-asia",
      name: "Southeast Asia Trade Corridor",
      desc: "Industrial Smelting & Billet Production",
      x: 770,
      y: 370,
      path: "M 630 330 Q 700 370 770 370",
    },
    {
      id: "europe",
      name: "European Trade Network",
      desc: "Scrap Aggregation & Recycling Facilities",
      x: 440,
      y: 200,
      path: "M 630 330 Q 520 220 440 200",
    },
    {
      id: "east-asia",
      name: "East Asia Industrial Ports",
      desc: "Extrusion & Billet Remelting Terminals",
      x: 820,
      y: 270,
      path: "M 630 330 Q 740 270 820 270",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brandGreen block mb-2">
            Cross-Border Logistics
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Connecting Reliable Supply With Global Demand
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            From sourcing and verification to documentation, logistics and delivery, Yeoman Exim coordinates every stage with professionalism and transparency.
          </p>
        </div>

        {/* Minimalist World Visual */}
        <div className="max-w-5xl mx-auto bg-navy-800/80 rounded-3xl border border-white/10 p-4 sm:p-8 backdrop-blur-sm">
          <div className="relative aspect-[16/9] w-full">
            <svg
              viewBox="0 0 1000 520"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Minimalist continents outline */}
              <g fill="#0e2338" stroke="#163452" strokeWidth="1">
                {/* North America */}
                <path d="M 120 120 Q 200 100 280 140 Q 260 210 210 240 Q 150 220 120 150 Z" />
                {/* South America */}
                <path d="M 230 270 Q 290 280 300 360 Q 270 450 230 460 Q 210 380 230 270 Z" />
                {/* Europe */}
                <path d="M 430 140 Q 510 130 520 200 Q 480 230 430 200 Z" />
                {/* Africa */}
                <path d="M 440 230 Q 530 230 540 330 Q 510 440 450 420 Q 420 320 440 230 Z" />
                {/* Asia */}
                <path d="M 540 140 Q 720 120 850 180 Q 860 290 770 330 Q 640 310 540 230 Z" />
                {/* India Subcontinent */}
                <path d="M 610 280 Q 660 290 655 370 Q 630 400 610 340 Z" fill="#14395e" stroke="#38BDF8" strokeWidth="1.2" />
                {/* Australia */}
                <path d="M 780 390 Q 860 380 870 450 Q 810 470 780 430 Z" />
              </g>

              {/* Glowing Route Lines */}
              {hubs
                .filter((h) => !h.isOrigin && h.path)
                .map((hub) => (
                  <path
                    key={hub.id}
                    d={hub.path}
                    stroke="#39B54A"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity={activeHub === hub.id ? 1 : 0.6}
                    className="transition-opacity"
                  />
                ))}

              {/* Hub Dots */}
              {hubs.map((hub) => (
                <g
                  key={hub.id}
                  className="cursor-pointer"
                  onMouseEnter={() => setActiveHub(hub.id)}
                  onMouseLeave={() => setActiveHub(null)}
                  onClick={() => setActiveHub(hub.id)}
                >
                  {hub.isOrigin ? (
                    <>
                      <circle cx={hub.x} cy={hub.y} r="14" fill="#39B54A" opacity="0.2" className="animate-ping" />
                      <circle cx={hub.x} cy={hub.y} r="6" fill="#39B54A" />
                      <circle cx={hub.x} cy={hub.y} r="2.5" fill="#FFFFFF" />
                    </>
                  ) : (
                    <circle
                      cx={hub.x}
                      cy={hub.y}
                      r="4"
                      fill={activeHub === hub.id ? "#38BDF8" : "#075EA8"}
                      stroke="#FFFFFF"
                      strokeWidth="1"
                    />
                  )}
                </g>
              ))}

              {/* Surat Label */}
              <g transform="translate(630, 310)">
                <text
                  x="0"
                  y="-10"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="10"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  SURAT, INDIA
                </text>
              </g>
            </svg>

            {/* Bottom active hub info strip */}
            <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 p-3 rounded-xl bg-navy-900/90 border border-white/10 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brandGreen" />
                <span className="font-bold text-white">
                  {activeHub
                    ? hubs.find((h) => h.id === activeHub)?.name
                    : "Surat, Gujarat, India (Strategic Gateway)"}
                </span>
                <span className="text-slate-400 hidden sm:inline">
                  — {activeHub
                    ? hubs.find((h) => h.id === activeHub)?.desc
                    : "Central Non-Ferrous Trading Operations Hub"}
                </span>
              </div>

              <span className="text-[11px] text-brandGreen font-medium">
                Active Shipping Corridor
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
