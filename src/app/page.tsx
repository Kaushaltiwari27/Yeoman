import React from "react";
import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import AboutPreview from "@/components/home/AboutPreview";
import ProductsPreview from "@/components/home/ProductsPreview";
import SustainabilityPillars from "@/components/home/SustainabilityPillars";
import TradeProcessTimeline from "@/components/home/TradeProcessTimeline";
import GlobalMapSection from "@/components/home/GlobalMapSection";
import PartnersPreview from "@/components/home/PartnersPreview";
import CtaSection from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Verified Stats Strip */}
      <StatsStrip />

      {/* 3. About Strip */}
      <AboutPreview />

      {/* 4. Core Aluminium Scrap Specialization */}
      <ProductsPreview />

      {/* 5. Why Aluminium Scrap (Sustainability & Circular Economy) */}
      <SustainabilityPillars />

      {/* 6. Structured International Trade Approach (7-step timeline) */}
      <TradeProcessTimeline />

      {/* 7. Global Trade Map (Surat Origin Corridor) */}
      <GlobalMapSection />

      {/* 8. Business Partners */}
      <PartnersPreview />

      {/* 9. Final Conversion CTA */}
      <CtaSection />
    </div>
  );
}
