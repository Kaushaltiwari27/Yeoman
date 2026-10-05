import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { companyData } from "@/data/companyData";

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Clean High-Resolution Photography */}
          <div className="lg:col-span-6">
            <div className="relative h-[360px] sm:h-[460px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80">
              <Image
                src="/images/scrap-6063.jpg"
                alt="Aluminium 6063 Extrusion Scrap Warehouse - Yeoman Exim"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Clean Editorial Story */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brandBlue block mb-2">
                Surat, Gujarat, India
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
                Built on Trust.{" "}
                <span className="text-brandBlue block sm:inline">
                  Driven by Global Trade.
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Yeoman Exim Private Limited is an international trading and export-import company based in Surat, Gujarat, India, engaged in connecting reliable suppliers and buyers across global markets.
              </p>
              <p>
                Our specialization is Aluminium Scrap Trading, where we focus on sourcing, supplying, importing and exporting quality aluminium scrap for recycling and industrial applications.
              </p>
            </div>

            {/* 4 Clean Minimal Value Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                "Reliable Sourcing",
                "Transparent Communication",
                "Professional International Trade",
                "Dependable Business Relationships",
              ].map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60"
                >
                  <CheckCircle2 className="w-4 h-4 text-brandGreen flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-brandBlue transition-colors group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-brandGreen transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
