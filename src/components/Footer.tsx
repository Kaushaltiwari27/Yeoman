import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe, ArrowUpRight, ShieldCheck } from "lucide-react";
import Logo from "./ui/Logo";
import { companyData } from "@/data/companyData";
import { productsData, productDisclaimer } from "@/data/productsData";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-navy-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="light" />
            
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Yeoman Exim Private Limited is a Surat-based international trading company specializing in aluminium scrap sourcing, import, export, and dependable global supply for sustainable industrial recycling.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-brandGreen font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>International Import • Export • Global Trading</span>
            </div>

            <div className="pt-2 text-xs text-slate-400 italic">
              &ldquo;{companyData.tagline}&rdquo;
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brandGreen"></span>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-500 group-hover:text-brandGreen transition-colors">›</span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-500 group-hover:text-brandGreen transition-colors">›</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/scrap" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-500 group-hover:text-brandGreen transition-colors">›</span>
                  Aluminium Scrap
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-500 group-hover:text-brandGreen transition-colors">›</span>
                  Trading Process
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-500 group-hover:text-brandGreen transition-colors">›</span>
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-500 group-hover:text-brandGreen transition-colors">›</span>
                  Business Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-500 group-hover:text-brandGreen transition-colors">›</span>
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Scrap Categories */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brandBlue-light"></span>
              Aluminium Scrap
            </h4>
            <ul className="space-y-2 text-xs">
              {productsData.slice(0, 7).map((prod) => (
                <li key={prod.id}>
                  <Link
                    href={`/scrap#${prod.id}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span className="truncate">{prod.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-brandGreen opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/scrap"
                  className="text-brandGreen hover:underline font-semibold flex items-center gap-1 pt-1"
                >
                  View All Categories →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Registered Office & Direct Contact */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brandGreen"></span>
              Registered Office
            </h4>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brandGreen flex-shrink-0 mt-0.5" />
                <address className="not-italic text-slate-300 leading-relaxed">
                  315, Roman Point, Hira Baug,<br />
                  Varachha, Surat - 395006,<br />
                  Gujarat, India
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brandGreen flex-shrink-0" />
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {companyData.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brandGreen flex-shrink-0" />
                <a
                  href={`tel:${companyData.contact.phoneRaw}`}
                  className="hover:text-white transition-colors font-medium"
                >
                  {companyData.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-brandGreen flex-shrink-0" />
                <span>Origin: Surat Port Corridor, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Note from PDF */}
        <div className="py-6 border-b border-white/5 text-xs text-slate-400 text-center sm:text-left">
          <span className="font-semibold text-slate-300">Industry Standards Notice: </span>
          {productDisclaimer}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Yeoman Exim Private Limited. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>CIN: Registered B2B Entity</span>
            <span>Surat, Gujarat, India</span>
            <span className="text-brandGreen">Connecting Global Markets</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
