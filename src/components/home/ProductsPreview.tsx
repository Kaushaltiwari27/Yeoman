"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, AlertCircle } from "lucide-react";
import ProductCard from "../products/ProductCard";
import ProductDetailModal from "../products/ProductDetailModal";
import { productsData, productDisclaimer, ProductItem } from "@/data/productsData";

export default function ProductsPreview() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brandBlue block mb-2">
              Our Specialization
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Aluminium Scrap Portfolio
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Reliable sourcing and international trading of aluminium scrap for industrial and recycling applications.
            </p>
          </div>

          <div>
            <Link
              href="/scrap"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brandBlue hover:text-navy group"
            >
              <span>View All 8 Categories</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-brandGreen" />
            </Link>
          </div>
        </div>

        {/* 8 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={(p) => setSelectedProduct(p)}
            />
          ))}
        </div>

        {/* Industry Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-600 max-w-2xl mx-auto italic">
            * {productDisclaimer}
          </p>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
