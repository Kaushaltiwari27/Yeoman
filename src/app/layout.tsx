import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { QuoteModalProvider } from "@/context/QuoteModalContext";
import { companyData } from "@/data/companyData";
import { productsData } from "@/data/productsData";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#063B63",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yeomanexim.com"),
  title: {
    default: "Yeoman Exim | Aluminium Scrap Trading & Global Import Export | Surat, India",
    template: "%s | Yeoman Exim Private Limited",
  },
  description:
    "Yeoman Exim Private Limited is a Surat, Gujarat-based international trading company specializing in aluminium scrap sourcing, import, export, and secondary metallurgy supply across global markets.",
  keywords: [
    // Core Business
    "Aluminium Scrap",
    "Aluminium Scrap Trading",
    "Aluminium Scrap Exporter",
    "Aluminium Scrap Importer",
    "Aluminium Trading Company",
    "Aluminium Scrap Supplier",
    "International Aluminium Trade",
    "Non-Ferrous Scrap Trading",
    "Secondary Aluminium Alloys",
    "Circular Economy Aluminium Recycling",
    // Geo-targeted (Surat, Gujarat, India, Port Corridors)
    "Aluminium Scrap Surat",
    "Aluminium Scrap India",
    "Aluminium Scrap Exporter Gujarat",
    "Non-Ferrous Metals Surat",
    "Hazira Port Scrap Import Export",
    "Mundra Port Metal Trading",
    "Nhava Sheva Port Aluminium Trade",
    "Roman Point Varachha Surat Business",
    // Specific Scrap Categories & ISRI Specifications
    "Aluminium 6063 Scrap",
    "Aluminium Extrusion Scrap",
    "Aluminium Tense Scrap",
    "Aluminium Tabor Scrap",
    "Aluminium UBC Scrap",
    "Aluminium Wheels Scrap A356",
    "Aluminium Cast Scrap",
    "Aluminium Scrap Bales",
    // International Trade Corridors
    "Aluminium Scrap UAE Dubai",
    "Aluminium Scrap Singapore",
    "Aluminium Scrap Europe Rotterdam",
    "Aluminium Scrap Saudi Arabia"
  ],
  authors: [{ name: "Yeoman Exim Private Limited", url: "https://yeomanexim.com" }],
  creator: "Yeoman Exim Private Limited",
  publisher: "Yeoman Exim Private Limited",
  applicationName: "Yeoman Exim",
  category: "Industrial Metal Trading & Recycling",
  classification: "International Business, Non-Ferrous Scrap Trading",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "https://yeomanexim.com",
    languages: {
      "en-US": "https://yeomanexim.com",
      "en-IN": "https://yeomanexim.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_IN"],
    url: "https://yeomanexim.com",
    title: "Yeoman Exim | Aluminium Scrap Trading & Global Import Export",
    description:
      "Surat-based international trading company specializing in aluminium scrap sourcing, import, export and global industrial supply.",
    siteName: "Yeoman Exim Private Limited",
    images: [
      {
        url: "/images/hero-cargo-port.jpg",
        width: 1200,
        height: 630,
        alt: "Yeoman Exim Private Limited - Global Aluminium Scrap Trading Hub Surat India",
      },
      {
        url: "/images/conceptual-trade-globe.jpg",
        width: 1200,
        height: 675,
        alt: "Yeoman Exim Global Non-Ferrous Trade Corridors from Surat, India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeoman Exim | Aluminium Scrap Trading & Global Import Export",
    description:
      "Surat-based international trading company specializing in aluminium scrap sourcing, import, export and global supply.",
    images: ["/images/hero-cargo-port.jpg"],
    creator: "@YeomanExim",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },
  manifest: "/manifest.json",
  other: {
    // Geo Meta Tags (Surat, Gujarat, India Coordinates)
    "geo.region": "IN-GJ",
    "geo.placename": "Surat, Gujarat, India",
    "geo.position": "21.2173;72.8664",
    "ICBM": "21.2173, 72.8664",
    // International B2B Meta Tags
    "target-country": "in, ae, sg, nl, be, sa, kr, cn",
    "coverage": "Worldwide",
    "distribution": "Global",
    "rating": "General",
    "revisit-after": "7 days",
    "language": "English",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Comprehensive Schema.org JSON-LD Graph for Search Engines
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Corporation / Organization Schema
      {
        "@type": ["Organization", "Corporation"],
        "@id": "https://yeomanexim.com/#organization",
        name: companyData.name,
        legalName: companyData.name,
        alternateName: "Yeoman Exim",
        url: "https://yeomanexim.com",
        logo: {
          "@type": "ImageObject",
          url: "https://yeomanexim.com/logo/yeoman-emblem.png",
          caption: "Yeoman Exim Private Limited Logo",
        },
        image: "https://yeomanexim.com/images/hero-cargo-port.jpg",
        description:
          "International trading and export-import company based in Surat, Gujarat, India, specializing in sourcing, supplying, importing, and exporting quality aluminium scrap for recycling and industrial applications.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "315, Roman Point, Hira Baug, Varachha",
          addressLocality: "Surat",
          addressRegion: "Gujarat",
          postalCode: "395006",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "21.2173",
          longitude: "72.8664",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: companyData.contact.phone,
            contactType: "sales",
            email: companyData.contact.email,
            areaServed: [
              "Global",
              "India",
              "United Arab Emirates",
              "Singapore",
              "Netherlands",
              "Belgium",
              "Saudi Arabia",
              "China",
              "South Korea",
            ],
            availableLanguage: ["English", "Hindi", "Gujarati"],
          },
          {
            "@type": "ContactPoint",
            telephone: companyData.contact.phone,
            contactType: "customer support",
            email: companyData.contact.email,
            areaServed: "Global",
            availableLanguage: ["English", "Hindi", "Gujarati"],
          },
        ],
        knowsAbout: [
          "Aluminium Scrap Trading",
          "Aluminium 6063 Scrap",
          "Aluminium Extrusion Scrap",
          "Aluminium Tense and Tabor Scrap",
          "Aluminium Used Beverage Cans (UBC)",
          "Automotive Aluminium Wheels Scrap",
          "Aluminium Cast Scrap",
          "Circular Economy and Secondary Metallurgy",
          "International Maritime Freight and Customs Documentation",
        ],
      },

      // 2. LocalBusiness / Recycling Location Schema for Local GEO SEO
      {
        "@type": "LocalBusiness",
        "@id": "https://yeomanexim.com/#localbusiness",
        name: "Yeoman Exim Private Limited - Surat Trading Desk",
        image: "https://yeomanexim.com/images/hero-cargo-port.jpg",
        telephone: companyData.contact.phone,
        email: companyData.contact.email,
        priceRange: "$$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "315, Roman Point, Hira Baug, Varachha",
          addressLocality: "Surat",
          addressRegion: "Gujarat",
          postalCode: "395006",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 21.2173,
          longitude: 72.8664,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:30",
            closes: "19:00",
          },
        ],
        hasMap: "https://maps.google.com/?q=Roman+Point+Hira+Baug+Varachha+Surat",
        parentOrganization: {
          "@id": "https://yeomanexim.com/#organization",
        },
      },

      // 3. WebSite Schema
      {
        "@type": "WebSite",
        "@id": "https://yeomanexim.com/#website",
        url: "https://yeomanexim.com",
        name: "Yeoman Exim Private Limited",
        description:
          "Connecting Global Markets. Enabling Responsible Trade in Aluminium Scrap.",
        publisher: {
          "@id": "https://yeomanexim.com/#organization",
        },
        inLanguage: "en-US",
      },

      // 4. OfferCatalog Schema of 8 Aluminium Scrap Categories
      {
        "@type": "OfferCatalog",
        "@id": "https://yeomanexim.com/#offercatalog",
        name: "Aluminium Scrap Trading Offer Catalog",
        itemListElement: productsData.map((prod, index) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: prod.name,
            description: prod.longDesc,
            category: prod.category,
            image: `https://yeomanexim.com${prod.image}`,
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              seller: {
                "@id": "https://yeomanexim.com/#organization",
              },
            },
          },
          position: index + 1,
        })),
      },
    ],
  };

  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <head>
        {/* Geo Meta Tags for Search Engines & Spatial Indexers */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Surat, Gujarat, India" />
        <meta name="geo.position" content="21.2173;72.8664" />
        <meta name="ICBM" content="21.2173, 72.8664" />
        <meta name="target-country" content="in, ae, sg, nl, be, sa, kr, cn" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />

        {/* Structured Data Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-slate-900 antialiased selection:bg-brandBlue selection:text-white">
        <QuoteModalProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <QuoteModal />
          <WhatsAppFloating />
          <MobileStickyCTA />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
