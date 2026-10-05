import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { QuoteModalProvider } from "@/context/QuoteModalContext";
import { companyData } from "@/data/companyData";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://yeomanexim.com"),
  title: {
    default: "Yeoman Exim | Aluminium Scrap Trading & Global Import Export",
    template: "%s | Yeoman Exim Private Limited",
  },
  description:
    "Yeoman Exim Private Limited is a Surat-based international trading company specializing in aluminium scrap sourcing, import, export and global supply.",
  keywords: [
    "Aluminium Scrap",
    "Aluminium Scrap Trading",
    "Aluminium Scrap Exporter",
    "Aluminium Scrap Importer",
    "Aluminium Trading Company",
    "Aluminium Scrap Supplier",
    "International Aluminium Trade",
    "Aluminium Scrap India",
    "Aluminium Scrap Surat",
    "Global Aluminium Trading",
    "Aluminium 6063 Scrap",
    "Aluminium Extrusion Scrap",
    "Aluminium UBC Scrap",
    "Aluminium Wheels Scrap",
    "Aluminium Cast Scrap"
  ],
  authors: [{ name: "Yeoman Exim Private Limited" }],
  creator: "Yeoman Exim Private Limited",
  publisher: "Yeoman Exim Private Limited",
  openGraph: {
    type: "website",
    locale: "en_US",
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
        alt: "Yeoman Exim Private Limited - Global Aluminium Scrap Trading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeoman Exim | Aluminium Scrap Trading & Global Import Export",
    description:
      "Surat-based international trading company specializing in aluminium scrap sourcing, import, export and global supply.",
    images: ["/images/hero-cargo-port.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyData.name,
    alternateName: "Yeoman Exim",
    url: "https://yeomanexim.com",
    logo: "https://yeomanexim.com/logo/yeoman-logo-dark.svg",
    description:
      "International trading and export-import company specializing in aluminium scrap trading, connecting reliable suppliers and industrial buyers.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "315, Roman Point, Hira Baug, Varachha",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      postalCode: "395006",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyData.contact.phone,
      contactType: "sales",
      email: companyData.contact.email,
      areaServed: "Global",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
    sameAs: [],
  };

  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
