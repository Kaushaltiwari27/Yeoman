"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { ProductItem } from "@/data/productsData";
import { useQuoteModal } from "@/context/QuoteModalContext";

interface ProductCardProps {
  product: ProductItem;
  onOpenDetails?: (product: ProductItem) => void;
}

export default function ProductCard({ product, onOpenDetails }: ProductCardProps) {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div
      onClick={() => onOpenDetails?.(product)}
      className="group cursor-pointer bg-white rounded-2xl border border-slate-200/80 hover:border-brandBlue/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Product Image */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={`${product.name} - Aluminium Scrap Trading by Yeoman Exim`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

        {/* Minimal Category Pill */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/95 text-navy shadow-sm backdrop-blur-sm">
            {product.category}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-base font-extrabold text-navy group-hover:text-brandBlue transition-colors leading-snug">
              {product.name}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brandBlue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-0.5" />
          </div>

          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
            {product.shortDesc}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] font-semibold text-slate-600 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-brandGreen" />
            Standard Grade
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              openQuoteModal(product.name);
            }}
            className="text-xs font-bold text-brandBlue hover:text-navy hover:underline transition-colors"
          >
            Request Quote →
          </button>
        </div>
      </div>
    </div>
  );
}
