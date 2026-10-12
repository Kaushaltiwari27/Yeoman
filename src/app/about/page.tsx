import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Eye,
  Target,
  Handshake,
  CheckCircle2,
  MapPin,
  ArrowRight,
  FileCheck,
  Globe,
  Award,
} from "lucide-react";
import { companyData } from "@/data/companyData";

export const metadata: Metadata = {
  title: "About Us — Industrial Aluminium Scrap Exporters",
  description:
    "Learn about Yeoman Exim Private Limited, a premier international trading company based in Surat, Gujarat, India specializing in sourcing, supplying, importing, and exporting quality industrial aluminium scrap.",
  keywords: [
    "About Yeoman Exim",
    "Yeoman Exim Private Limited Surat",
    "Aluminium Scrap Trading Company Gujarat",
    "Non-Ferrous Scrap Exporter India",
    "International Scrap Trade Surat",
    "Aluminium Recycling Supply Chain",
    "Yeoman Exim Vision Mission",
    "Surat Port Corridor Scrap Trading",
  ],
  alternates: {
    canonical: "https://yeomanexim.com/about",
  },
  openGraph: {
    title: "About Yeoman Exim Private Limited | Surat Aluminium Scrap Exporters",
    description:
      "Connecting dependable suppliers with industrial buyers across international non-ferrous scrap markets from Surat, Gujarat, India.",
    url: "https://yeomanexim.com/about",
    images: [
      {
        url: "/images/hero-cargo-port.jpg",
        width: 1200,
        height: 675,
        alt: "Yeoman Exim Corporate Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Yeoman Exim Private Limited | Surat Aluminium Scrap Exporters",
    description:
      "International trade & aluminium scrap specialization based in Surat, Gujarat, India.",
    images: ["/images/hero-cargo-port.jpg"],
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Surat, Gujarat, India",
    "geo.position": "21.2173;72.8664",
    "ICBM": "21.2173, 72.8664",
  },
};

export default function AboutPage() {
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
        name: "About Us",
        item: "https://yeomanexim.com/about",
      },
    ],
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Yeoman Exim Private Limited",
    description:
      "Corporate overview, vision, mission, and industrial aluminium scrap capabilities of Yeoman Exim Private Limited.",
    url: "https://yeomanexim.com/about",
    mainEntity: {
      "@type": "Corporation",
      name: "Yeoman Exim Private Limited",
      address: {
        "@type": "PostalAddress",
        streetAddress: "315, Roman Point, Hira Baug, Varachha",
        addressLocality: "Surat",
        addressRegion: "Gujarat",
        postalCode: "395006",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <div className="pt-32 lg:pt-36 pb-20 bg-white">
      {/* Page Header Banner */}
      <section className="bg-navy py-16 lg:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-brandGreen uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Company Profile</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Built on Trust. Driven by Global Trade.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Yeoman Exim Private Limited connects dependable suppliers with industrial buyers across international non-ferrous scrap markets.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Surat Gateway */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brandBlue uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-brandGreen" />
              <span>Surat, Gujarat, India</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
              International Import, Export & Aluminium Scrap Trading
            </h2>

            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              {companyData.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Strategic Pillars from PDF */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              {companyData.about.highlights.map((h, i) => (
                <div key={i} className="p-4 rounded-xl bg-surface-light border border-slate-200/80">
                  <div className="font-bold text-sm text-navy mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brandGreen flex-shrink-0" />
                    <span>{h.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100">
              <Image
                src="/images/scrap-bales.jpg"
                alt="Aluminium scrap bales in export warehouse - Yeoman Exim"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-navy to-brandBlue text-white shadow-lg">
              <div className="text-xs font-mono font-bold text-brandGreen uppercase tracking-wider mb-1">
                Strategic Geographic Advantage
              </div>
              <h3 className="text-lg font-bold">Surat Industrial Corridor</h3>
              <p className="text-xs text-slate-200 mt-2 leading-relaxed">
                Located in Gujarat—India&apos;s leading maritime and manufacturing state—Yeoman Exim enjoys seamless connectivity to major deepwater ports including Hazira, Mundra, and Nhava Sheva, facilitating rapid multimodal container clearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Split Section from PDF */}
      <section className="py-16 lg:py-24 bg-surface-light border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Vision Card */}
            <div className="lg:col-span-5 bg-navy-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden border border-navy-700">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-brandGreen flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-brandGreen block mb-2">
                  Our Vision
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-6 leading-snug">
                  Globally Trusted Leadership
                </h3>
                <blockquote className="text-slate-300 text-base sm:text-lg leading-relaxed italic border-l-2 border-brandGreen pl-4">
                  &ldquo;{companyData.vision}&rdquo;
                </blockquote>
              </div>

              <div className="relative z-10 pt-8 mt-8 border-t border-white/10 flex items-center gap-3 text-xs text-slate-400">
                <Globe className="w-4 h-4 text-brandBlue-light" />
                <span>Connecting Responsible Suppliers & Industrial Smelters</span>
              </div>

              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brandBlue/20 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Mission Card */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-brandBlue flex items-center justify-center">
                    <Target className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block">
                      Guiding Principles
                    </span>
                    <h3 className="text-2xl font-extrabold text-navy">
                      Our Mission
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {companyData.mission.map((item) => (
                    <div
                      key={item.id}
                      className="p-5 rounded-2xl bg-surface-light border border-slate-100 flex flex-col justify-between group hover:border-brandGreen/40 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-brandGreen bg-green-50 px-2 py-0.5 rounded">
                          {item.id}
                        </span>
                        <Award className="w-4 h-4 text-slate-400 group-hover:text-brandBlue transition-colors" />
                      </div>
                      <h4 className="text-sm font-bold text-navy mb-1.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                <span className="font-semibold text-navy">
                  Yeoman Exim Commitment: {companyData.commitment}
                </span>
                <Link
                  href="/contact"
                  className="font-bold text-brandBlue hover:text-navy flex items-center gap-1"
                >
                  <span>Connect With Us</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brandGreen" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Call to Action */}
      <section className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-navy to-brandBlue rounded-3xl p-8 sm:p-12 text-white shadow-xl max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Ready to Partner with Yeoman Exim?
          </h3>
          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto">
            Contact our Surat trading desk to discuss regular supply agreements, material availability, and competitive commercial terms.
          </p>
          <div className="pt-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-navy font-bold text-sm shadow hover:bg-slate-50 transition-colors"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-4 h-4 text-brandBlue" />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
