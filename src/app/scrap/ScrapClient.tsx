"use client";

import React, { useState } from "react";
import {
  Layers,
  Search,
  Filter,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Check,
} from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import ProductDetailModal from "@/components/products/ProductDetailModal";
import { productsData, productDisclaimer, ProductItem } from "@/data/productsData";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function ScrapClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);
  const { openQuoteModal } = useQuoteModal();

  const categories = [
    "All",
    "Extrusions & Architectural",
    "Cast & Sheet Scrap",
    "Post-Consumer Packaging",
    "Automotive Alloys",
    "Foundry & Industrial",
  ];

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.typicalApplications.some((a) =>
        a.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 lg:pt-36 pb-20 bg-white">
      {/* Page Header Banner */}
      <section className="bg-navy py-16 lg:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-brandGreen uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Verified Secondary Metals Portfolio</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Our Aluminium Scrap Specialization
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Reliable sourcing and international trading of aluminium scrap for industrial and recycling applications from Surat, Gujarat, India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-navy text-white shadow-sm"
                    : "bg-surface-light text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search scrap grade or alloy..."
              className="w-full pl-10 pr-4 py-2.5 bg-surface-light border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brandBlue focus:bg-white text-slate-800"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={(p) => setActiveModalProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-surface-light rounded-2xl border border-slate-200">
            <p className="text-slate-600 text-sm">
              No matching scrap categories found. Try clearing your search query.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-4 py-2 bg-navy text-white text-xs font-bold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Official Compliance Disclaimer from PDF */}
        <div className="mt-12 p-5 rounded-2xl bg-surface-light border border-slate-200 text-xs text-slate-600 flex items-start gap-3.5 max-w-4xl mx-auto shadow-sm">
          <AlertCircle className="w-5 h-5 text-brandBlue flex-shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold text-navy block mb-0.5">
              Material Standards & International Specifications Note:
            </span>
            {productDisclaimer} We coordinate with trusted inspection agencies and provide certified weighbridge slips, photo verification, and customs documentation for every commercial shipment.
          </div>
        </div>

        {/* Custom Scrap Sourcing Callout */}
        <div className="mt-16 bg-gradient-to-r from-navy to-brandBlue rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-brandGreen">
              Custom Industrial Procurement
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              Require a Specific Scrap Grade or Regular Bimonthly Tonnage?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Our Surat trading team arranges dedicated contract sourcing for secondary smelters, extrusion plants, and alloy foundries globally.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-navy hover:bg-slate-50 font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <span>Submit Sourcing RFQ</span>
              <ArrowRight className="w-4 h-4 text-brandBlue" />
            </button>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </div>
  );
}
