export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  summary: string;
  details: string[];
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    number: "01",
    title: "Supplier Identification",
    summary: "Screening and onboarding reliable domestic and international scrap yards and metal suppliers.",
    details: [
      "Rigorous supplier credibility verification",
      "Assessment of consistent scrap availability",
      "Vetting compliance with international trade norms"
    ],
    icon: "Users"
  },
  {
    step: "02",
    number: "02",
    title: "Material Specification",
    summary: "Accurate grade matching based on client alloy standards and ISRI specifications.",
    details: [
      "Alloy composition matching (6063, UBC, Tense/Tabor, Wheels, Cast)",
      "Clarification of recovery yields and permissible tolerances",
      "Agreement on physical form (bales, briquettes, loose, bundles)"
    ],
    icon: "FileCode"
  },
  {
    step: "03",
    number: "03",
    title: "Quality & Quantity Verification",
    summary: "Meticulous pre-shipment inspections, weight reconciliation, and photo/video verification.",
    details: [
      "Pre-loading yard inspection and visual validation",
      "Moisture, attachment, and foreign material scrutiny",
      "Certified weighbridge slips and tare checks"
    ],
    icon: "CheckCircle"
  },
  {
    step: "04",
    number: "04",
    title: "Commercial Negotiation",
    summary: "Competitive, transparent pricing aligned with international metal benchmark trends.",
    details: [
      "Clear commercial terms (FOB, CFR, CIF, Ex-Works)",
      "Standard international contract formulations",
      "Risk-mitigated commercial payment structures"
    ],
    icon: "Handshake"
  },
  {
    step: "05",
    number: "05",
    title: "Documentation",
    summary: "Full compliance paperwork ensuring seamless international and customs clearance.",
    details: [
      "Commercial Invoices & Packing Lists",
      "Bills of Lading (B/L) & Origin Certification",
      "Pre-Shipment Inspection Certificates (PSIC) & customs filings"
    ],
    icon: "FileText"
  },
  {
    step: "06",
    number: "06",
    title: "Logistics Coordination",
    summary: "Ocean freight booking, container stuffing supervision, and multimodal transit tracking.",
    details: [
      "Secured container allotment with major shipping lines",
      "Optimized stuffing to maximize container weight limits safely",
      "Continuous milestone tracking from origin to discharge port"
    ],
    icon: "Ship"
  },
  {
    step: "07",
    number: "07",
    title: "Delivery",
    summary: "Safe, timely discharge at destination port with handover to buyer's facility.",
    details: [
      "Port customs clearance support and document surrender",
      "Final delivery confirmation and weight reconciliation",
      "Post-delivery feedback and replenishment planning"
    ],
    icon: "Truck"
  }
];

export const processCommitment = {
  title: "Our Commitment",
  tagline: "Trust • Transparency • Long-Term Partnership",
  description: "From initial sourcing through final delivery, Yeoman Exim coordinates every stage of the international trade lifecycle with uncompromised integrity and institutional discipline."
};
