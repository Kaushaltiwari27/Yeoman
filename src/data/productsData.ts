export interface ProductItem {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  pdfCrop?: string;
  typicalApplications: string[];
  keyAttributes: string[];
  isFeatured?: boolean;
}

export const productsData: ProductItem[] = [
  {
    id: "aluminium-6063-scrap",
    name: "Aluminium Scrap 6063",
    category: "Extrusions & Architectural",
    shortDesc: "Clean, unpainted, or anodized aluminium alloy 6063 extrusions and cut profile pieces for premium remelting.",
    longDesc: "Aluminium 6063 Scrap consists of clean aluminium extrusions, typically free from foreign attachments, iron, and excessive corrosion. Known for high magnesium and silicon balance, it is ideal for secondary billet casting and remelting into architectural systems.",
    image: "/images/scrap-6063.jpg",
    pdfCrop: "/products/scrap-6063.jpg",
    typicalApplications: [
      "Secondary billet casting",
      "Architectural profile re-extrusion",
      "Structural aluminium alloy production",
      "Anodized component manufacturing"
    ],
    keyAttributes: [
      "High metallurgical purity",
      "Low iron / contamination content",
      "Excellent re-melt recovery rate"
    ],
    isFeatured: true
  },
  {
    id: "aluminium-extrusion-scrap",
    name: "Aluminium Extrusion Scrap",
    category: "Extrusions & Architectural",
    shortDesc: "Industrial manufacturing off-cuts, architectural framing sections, window channels, and clean profile scraps.",
    longDesc: "Comprises scrap generated during the production and fabrication of extruded aluminium profiles, including cut-offs, punchings, and framing materials. Sourced from trusted fabrication networks and processors.",
    image: "/images/scrap-extrusion.jpg",
    pdfCrop: "/products/scrap-extrusion.jpg",
    typicalApplications: [
      "Window and curtain wall manufacturing recyclers",
      "General secondary aluminium smelting",
      "Industrial fabrication feeds"
    ],
    keyAttributes: [
      "Consistent alloy compositions",
      "High dimensional density",
      "Reliable sorting and bundling"
    ],
    isFeatured: true
  },
  {
    id: "aluminium-tense-tabor",
    name: "Aluminium Tense / Tabor",
    category: "Cast & Sheet Scrap",
    shortDesc: "Mixed clean old sheet aluminium (Tabor) and clean cast aluminium fragments (Tense) for industrial smelting.",
    longDesc: "Standard ISRI-compliant categories representing clean cast aluminium (Tense) and mixed old sheet scrap (Tabor). Segregated to minimize non-metallic attachments, coatings, and heavy metals.",
    image: "/images/scrap-tense-tabor.jpg",
    pdfCrop: "/products/scrap-tense-tabor.jpg",
    typicalApplications: [
      "Foundry ingot manufacturing",
      "Automotive component casting",
      "Deoxidizing agents in steelmaking"
    ],
    keyAttributes: [
      "Well-segregated fractions",
      "Controlled volatile and moisture content",
      "Versatile remelting utility"
    ],
    isFeatured: true
  },
  {
    id: "aluminium-ubc",
    name: "Aluminium UBC (Used Beverage Cans)",
    category: "Post-Consumer Packaging",
    shortDesc: "Baled and compacted post-consumer aluminium beverage cans, magnets-separated for high recycling recovery.",
    longDesc: "Aluminium Used Beverage Cans (UBC) scrap consists of clean, sorted, magnetically separated beverage cans compressed into secure bales or briquettes. Provides one of the highest circular economy recycling efficiencies in the non-ferrous sector.",
    image: "/images/scrap-ubc.jpg",
    pdfCrop: "/products/scrap-ubc.jpg",
    typicalApplications: [
      "Can-to-can closed loop sheet rolling",
      "Aluminium foil and packaging stock",
      "Secondary alloy smelting"
    ],
    keyAttributes: [
      "High recovery rate",
      "Baled to standard export dimensions",
      "Rapid melting cycle"
    ],
    isFeatured: true
  },
  {
    id: "aluminium-wheels",
    name: "Aluminium Wheels",
    category: "Automotive Alloys",
    shortDesc: "Clean automotive aluminium alloy wheels scrap, stripped of steel inserts, weights, valves, and tyres.",
    longDesc: "High-grade automotive aluminium alloy wheel scrap (typically A356 / AlSi7Mg grades). Carefully inspected and free from iron weights, valves, and excessive grease, delivering high silicon purity for foundry alloys.",
    image: "/images/scrap-wheels.jpg",
    pdfCrop: "/products/scrap-wheels.jpg",
    typicalApplications: [
      "Premium automotive casting ingots",
      "High-strength alloy development",
      "Specialty foundry remelt stocks"
    ],
    keyAttributes: [
      "High strength alloy chemistry",
      "Strictly stripped of iron weights and valves",
      "Superior recovery yield"
    ],
    isFeatured: true
  },
  {
    id: "aluminium-cast-scrap",
    name: "Aluminium Cast Scrap",
    category: "Foundry & Industrial",
    shortDesc: "Clean cast aluminium components including automotive housings, cylinder heads, engine blocks, and machine castings.",
    longDesc: "Consists of clean aluminium castings from automotive, aerospace, and general machinery dismantling. Free of excessive grease, bronze bushings, or non-metallic parts, providing excellent melt consistency for foundries.",
    image: "/images/scrap-cast.jpg",
    pdfCrop: "/products/scrap-cast.jpg",
    typicalApplications: [
      "Foundry ingot production (ADC12, LM24, LM6)",
      "Die-casting component fabrication",
      "Industrial pump and transmission casings"
    ],
    keyAttributes: [
      "Robust non-ferrous purity",
      "Verified density and fragmentation",
      "Optimal for reverberatory furnaces"
    ],
    isFeatured: true
  },
  {
    id: "aluminium-mixed-scrap",
    name: "Aluminium Mixed Scrap",
    category: "Industrial Assortment",
    shortDesc: "Assorted non-ferrous aluminium scraps, industrial clippings, sheets, turnings, and multi-grade fractions.",
    longDesc: "A composite non-ferrous category containing mixed aluminium grades, sheet cuttings, turnings, and industrial off-cuts. Evaluated and processed according to specific buyer recovery and assay parameters.",
    image: "/images/scrap-mixed.jpg",
    pdfCrop: "/products/scrap-mixed.jpg",
    typicalApplications: [
      "Secondary smelting plants",
      "Industrial deox applications",
      "Downstream metal sorting operations"
    ],
    keyAttributes: [
      "Cost-effective feedstock",
      "Assayed for metallic yield",
      "Flexible commercial packing"
    ],
    isFeatured: false
  },
  {
    id: "other-industrial-scrap",
    name: "Other Industrial & Post-Consumer Scrap",
    category: "Custom & Baled Scrap",
    shortDesc: "Specialty aluminium scrap bales, cable wire, radiator scrap, litho sheets, and custom recovery materials.",
    longDesc: "Tailored industrial scrap categories fulfilling specialized industrial buyer requirements. Includes compressed aluminium scrap bales, clean wire/cable (Talon), lithographic plates, and composite industrial surplus.",
    image: "/images/scrap-bales.jpg",
    pdfCrop: "/products/scrap-bales.jpg",
    typicalApplications: [
      "Electrical cable recycling",
      "Specialized refining operations",
      "Custom furnace charging requirements"
    ],
    keyAttributes: [
      "Custom sourced based on RFQ",
      "High density bale packaging",
      "Complete pre-shipment documentation"
    ],
    isFeatured: false
  }
];

export const productDisclaimer = "Availability and specifications depend on supplier, buyer requirements and applicable international standards.";
