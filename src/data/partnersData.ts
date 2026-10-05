export interface PartnerItem {
  id: string;
  name: string;
  category: string;
  establishedAssociation: string;
  focus: string;
}

export const partnersData: PartnerItem[] = [
  {
    id: "hetva-enterprise",
    name: "Hetva Enterprise",
    category: "Strategic Trade Partner",
    establishedAssociation: "Domestic & Regional Supply",
    focus: "Aluminium scrap aggregation and secondary metals coordination"
  },
  {
    id: "national-group-surat",
    name: "National Group Surat",
    category: "Industrial Consortium",
    establishedAssociation: "Surat Industrial Network",
    focus: "Diversified industrial operations and raw material logistics"
  },
  {
    id: "7-star-group",
    name: "7 Star Group",
    category: "Commercial Business Partner",
    establishedAssociation: "Metals & Commodity Trade",
    focus: "Cross-regional supply chain execution and commercial distribution"
  },
  {
    id: "radha-raman-group",
    name: "Radha Raman Group",
    category: "Enterprise Partner",
    establishedAssociation: "Industrial Trading Network",
    focus: "Bulk procurement and manufacturing supply alignment"
  },
  {
    id: "prithvi-enterprise",
    name: "Prithvi Enterprise",
    category: "Supply Chain Associate",
    establishedAssociation: "Recycling & Processing",
    focus: "Non-ferrous scrap handling and specialized materials coordination"
  }
];

export const partnersMotto = {
  headline: "Strong Partnerships Build a Stronger Global Trade",
  subtext: "Yeoman Exim collaborates with reputable domestic and international business groups to ensure supply chain resilience, commercial stability, and reliable trade execution."
};
