import type { Metadata } from "next";
import ScrapClient from "./ScrapClient";
import { productsData } from "@/data/productsData";

export const metadata: Metadata = {
  title: "Aluminium Scrap Products & Export Catalog",
  description:
    "Browse 8 verified industrial aluminium scrap categories: 6063 Extrusions, UBC Bales, Tense/Tabor, Wheels, and Cast Scrap exported internationally from Surat, Gujarat, India.",
  keywords: [
    "Aluminium Scrap Catalog",
    "Aluminium 6063 Scrap Surat",
    "Aluminium Extrusion Scrap India",
    "Aluminium UBC Cans Scrap",
    "Aluminium Wheels Scrap A356",
    "Aluminium Cast Scrap Foundry",
    "Aluminium Tense Tabor Exporter",
    "Secondary Aluminium Smelting Feeds",
    "ISRI Aluminium Scrap Specifications",
    "Surat Port Corridor Non-Ferrous Scrap",
  ],
  alternates: {
    canonical: "https://yeomanexim.com/scrap",
  },
  openGraph: {
    title: "Aluminium Scrap Products & Export Catalog | Yeoman Exim",
    description:
      "Reliable sourcing and international trading of aluminium scrap for secondary smelting and industrial recycling applications from Surat, Gujarat, India.",
    url: "https://yeomanexim.com/scrap",
    images: [
      {
        url: "/images/scrap-6063.jpg",
        width: 1200,
        height: 900,
        alt: "Yeoman Exim Aluminium Scrap 6063 Extrusions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aluminium Scrap Products & Export Catalog | Yeoman Exim",
    description:
      "Reliable sourcing and international trading of aluminium scrap for secondary smelting from Surat, India.",
    images: ["/images/scrap-6063.jpg"],
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Surat, Gujarat, India",
    "geo.position": "21.2173;72.8664",
    "ICBM": "21.2173, 72.8664",
  },
};

export default function ScrapPage() {
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
        name: "Aluminium Scrap",
        item: "https://yeomanexim.com/scrap",
      },
    ],
  };

  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Yeoman Exim Aluminium Scrap Products",
    itemListElement: productsData.map((prod, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Product",
        name: prod.name,
        description: prod.longDesc,
        category: prod.category,
        image: `https://yeomanexim.com${prod.image}`,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "USD",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      <ScrapClient />
    </>
  );
}
