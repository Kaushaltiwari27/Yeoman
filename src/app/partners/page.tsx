import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Handshake, Building2, ShieldCheck, ArrowRight, Shield, Award } from "lucide-react";
import { partnersData, partnersMotto } from "@/data/partnersData";

export const metadata: Metadata = {
  title: "Commercial Alliances & Business Partners",
  description:
    "Explore Yeoman Exim's verified business partner network and commercial alliances collaborating across domestic and international aluminium scrap trading sectors.",
  keywords: [
    "Yeoman Exim Partners",
    "Aluminium Scrap Trade Alliances",
    "Secondary Smelter Partners India",
    "Global Metal Trading Associates",
    "Surat Non-Ferrous Scrap Network",
    "B2B Scrap Metal Counterparties",
    "Extrusion Manufacturers Surat India",
  ],
  alternates: {
    canonical: "https://yeomanexim.com/partners",
  },
  openGraph: {
    title: "Commercial Alliances & Business Partners | Yeoman Exim Surat",
    description:
      "Strong partnerships build stronger trade: Collaborating with verified scrap aggregators and industrial consumers.",
    url: "https://yeomanexim.com/partners",
    images: [
      {
        url: "/images/hero-cargo-port.jpg",
        width: 1200,
        height: 675,
        alt: "Yeoman Exim Business Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Alliances & Business Partners | Yeoman Exim Surat",
    description:
      "Collaborating with established enterprises to expand supply reliability in non-ferrous scrap trading.",
    images: ["/images/hero-cargo-port.jpg"],
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Surat, Gujarat, India",
    "geo.position": "21.2173;72.8664",
    "ICBM": "21.2173, 72.8664",
  },
};

export default function PartnersPage() {
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
        name: "Partners",
        item: "https://yeomanexim.com/partners",
      },
    ],
  };

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
              <Handshake className="w-3.5 h-3.5" />
              <span>Commercial Alliances</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Our Business Partners
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              &ldquo;{partnersMotto.headline}&rdquo; — Collaborating with established enterprises to expand supply reliability, commercial resilience, and verified scrap delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Main Partners Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
            Verified Enterprise Network
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            In international commodity and non-ferrous scrap trading, long-standing relationships are the cornerstone of commercial integrity. As documented in our company profile, Yeoman Exim is privileged to maintain active business associations with leading regional and domestic business groups.
          </p>
        </div>

        {/* 5 Verified Corporate Partner Cards (Clean Text-Based, NO fake logos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnersData.map((partner, index) => (
            <div
              key={partner.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-surface-light border border-slate-200 flex items-center justify-center text-brandBlue group-hover:bg-brandBlue group-hover:text-white transition-colors shadow-sm">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md">
                    ASSOCIATE 0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-navy group-hover:text-brandBlue transition-colors mb-2">
                  {partner.name}
                </h3>

                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-brandGreen mb-4">
                  {partner.category}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {partner.focus}
                </p>
              </div>

              <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">
                  {partner.establishedAssociation}
                </span>
                <ShieldCheck className="w-4 h-4 text-brandGreen" />
              </div>
            </div>
          ))}

          {/* Partnership Inquiry Card */}
          <div className="bg-gradient-to-br from-navy to-brandBlue text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-brandGreen flex items-center justify-center mb-6">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold mb-3">
                Become a Trading Partner
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Are you an established aluminium scrap yard, international aggregator, secondary smelter, or extrusion manufacturer looking for reliable counter-party execution?
              </p>
            </div>

            <div className="pt-6">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white text-navy font-bold text-sm shadow hover:bg-slate-100 transition-colors"
              >
                <span>Initiate Business Dialogue</span>
                <ArrowRight className="w-4 h-4 text-brandBlue" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
