import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { companyData } from "@/data/companyData";

export const metadata: Metadata = {
  title: "Contact Surat Trading Desk & Registered Headquarters",
  description:
    "Connect with Yeoman Exim Private Limited in Surat, Gujarat, India. Inquire about aluminium scrap supplies, trade partnerships, CIF/CFR/FOB export agreements, and logistics support.",
  keywords: [
    "Contact Yeoman Exim",
    "Aluminium Scrap Exporter Surat",
    "Surat Non-Ferrous Trading Desk",
    "Gujarat Metal Exporters Office",
    "Yeoman Exim Contact Number",
    "Yeoman Exim Email Surat",
    "Varachha Surat Metal Traders",
    "Hira Baug Roman Point Surat",
    "Secondary Aluminium Sourcing Contact",
    "India Metal Export Logistics Desk",
  ],
  alternates: {
    canonical: "https://yeomanexim.com/contact",
  },
  openGraph: {
    title: "Contact Surat Trading Desk & Office | Yeoman Exim Private Limited",
    description:
      "Direct commercial inquiries, long-term procurement contracts, and trade documentation coordination with Yeoman Exim in Surat, Gujarat, India.",
    url: "https://yeomanexim.com/contact",
    images: [
      {
        url: "/images/hero-cargo-port.jpg",
        width: 1200,
        height: 675,
        alt: "Yeoman Exim Surat Trading Desk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Surat Trading Desk & Office | Yeoman Exim Private Limited",
    description:
      "Direct commercial inquiries and aluminium scrap trade coordination with Yeoman Exim in Surat, Gujarat, India.",
    images: ["/images/hero-cargo-port.jpg"],
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Surat, Gujarat, India",
    "geo.position": "21.2173;72.8664",
    "ICBM": "21.2173, 72.8664",
  },
};

export default function ContactPage() {
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
        name: "Contact Us",
        item: "https://yeomanexim.com/contact",
      },
    ],
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Yeoman Exim Private Limited Contact Desk",
    description:
      "Official contact desk and registered headquarters for Yeoman Exim Private Limited in Surat, Gujarat, India.",
    url: "https://yeomanexim.com/contact",
    mainEntity: {
      "@type": "LocalBusiness",
      name: companyData.name,
      legalName: companyData.name,
      telephone: companyData.contact.phone,
      email: companyData.contact.email,
      url: "https://yeomanexim.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: `${companyData.contact.address.line1}, ${companyData.contact.address.line2}`,
        addressLocality: companyData.contact.address.city,
        addressRegion: companyData.contact.address.state,
        postalCode: companyData.contact.address.pincode,
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
      hasMap:
        "https://maps.google.com/maps?q=Roman+Point,+Hira+Baug,+Varachha,+Surat,+Gujarat+395006",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactClient />
    </>
  );
}
