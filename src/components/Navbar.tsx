"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ArrowRight } from "lucide-react";
import Logo from "./ui/Logo";
import { companyData } from "@/data/companyData";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Aluminium Scrap", href: "/scrap" },
    { label: "Process", href: "/process" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Ultra-Clean, Streamlined Top Utility Strip */}
      <div className="bg-navy-900 border-b border-white/10 text-xs py-2 px-4 sm:px-6 lg:px-8 text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-brandGreen font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-brandGreen"></span>
              Surat, Gujarat, India
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="hidden sm:inline text-slate-400 font-normal">
              {companyData.subtitle}
            </span>
          </div>

          <div className="flex items-center gap-5 text-xs">
            <a
              href={`mailto:${companyData.contact.email}`}
              className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brandGreen" />
              <span>{companyData.contact.email}</span>
            </a>
            <a
              href={`tel:${companyData.contact.phoneRaw}`}
              className="flex items-center gap-1.5 text-white font-medium hover:text-brandGreen transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brandGreen" />
              <span>{companyData.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Guaranteed solid dark navy with blur so it NEVER clashes */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-navy-900/98 backdrop-blur-md shadow-lg border-b border-white/10 py-3"
            : "bg-navy-900/90 backdrop-blur-md border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with Light variant for crystal clear contrast */}
          <Logo variant="light" />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-wider font-bold transition-colors py-1 relative ${
                    isActive
                      ? "text-brandGreen"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-brandGreen" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold text-white bg-brandBlue hover:bg-brandBlue-dark transition-all duration-200 shadow-md active:scale-95 border border-blue-400/20"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-brandGreen" />
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <button
              onClick={() => openQuoteModal()}
              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-brandBlue text-white shadow-sm"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Clean Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950 border-b border-white/10 shadow-2xl px-6 py-6 transition-all duration-300 text-white">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-white/10 text-brandGreen"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight
                    className={`w-4 h-4 ${
                      isActive ? "text-brandGreen" : "text-white/20"
                    }`}
                  />
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full py-3 px-4 rounded-xl bg-brandBlue text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 text-brandGreen" />
              </button>

              <div className="p-3 bg-white/5 rounded-xl text-xs text-slate-300 space-y-1">
                <div className="font-semibold text-white">
                  Surat Desk: {companyData.contact.phone}
                </div>
                <div>{companyData.contact.email}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
