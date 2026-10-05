"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ArrowRight, ShieldCheck, Check, Layers, AlertCircle } from "lucide-react";
import { ProductItem, productDisclaimer } from "@/data/productsData";
import { useQuoteModal } from "@/context/QuoteModalContext";

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-900/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-navy px-6 py-4 text-white flex items-center justify-between border-b border-navy-600">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-brandGreen" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Product Overview • {product.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Top visual & title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-md border border-slate-200">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center"
              />
            </div>

            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-brandBlue">
                Aluminium Scrap Trading
              </span>
              <h2 className="text-2xl font-extrabold text-navy">
                {product.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.shortDesc}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    onClose();
                    openQuoteModal(product.name);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brandBlue hover:bg-navy text-white text-sm font-bold shadow-md transition-all"
                >
                  <span>Request Product Quote</span>
                  <ArrowRight className="w-4 h-4 text-brandGreen" />
                </button>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="border-t border-slate-100 pt-5 space-y-3">
            <h4 className="text-sm font-bold text-navy uppercase tracking-wider">
              Material Description
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {product.longDesc}
            </p>
          </div>

          {/* Typical Applications & Attributes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-100 pt-5">
            <div>
              <h4 className="text-sm font-bold text-navy uppercase tracking-wider mb-3">
                Typical Applications & Use Cases
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {product.typicalApplications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brandGreen flex-shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-navy uppercase tracking-wider mb-3">
                Key Sourcing Attributes
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {product.keyAttributes.map((attr, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-brandBlue flex-shrink-0 mt-0.5" />
                    <span>{attr}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Disclaimer Note from PDF */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-800">Compliance & Specifications Note: </span>
              {productDisclaimer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
