import React from "react";
import { companyData } from "@/data/companyData";

export default function StatsStrip() {
  const statItems = [
    {
      label: "Specialization",
      value: "Aluminium Scrap",
      desc: "Non-Ferrous Secondary Alloys",
    },
    {
      label: "Operations",
      value: "Import • Export",
      desc: "International Trade Solutions",
    },
    {
      label: "Headquarters",
      value: "Surat, Gujarat",
      desc: "India's Industrial Gateway",
    },
    {
      label: "Trading Network",
      value: "Global Markets",
      desc: "Suppliers & Industrial Smelters",
    },
  ];

  return (
    <section className="bg-slate-50 border-b border-slate-200/80 py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/60">
          {statItems.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-center ${
                idx > 0 ? "pt-4 sm:pt-0 sm:pl-6 lg:pl-8" : ""
              }`}
            >
              <span className="text-[11px] font-bold uppercase tracking-wider text-brandBlue mb-1">
                {stat.label}
              </span>
              <div className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                {stat.value}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
