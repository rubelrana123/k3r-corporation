import { photos, type Photo } from "@/lib/images";

export const siteConfig = {
  name: "K3R Corporation",
  tagline: "Reliable and Dependable",
  parent: "A Sister Concern of RootTOP Group",
  description:
    "K3R Corporation is a leading importer, exporter and general supplier in Bangladesh, serving the Armed Forces, government and private organizations since 2017.",
  /** Live domain. Override with NEXT_PUBLIC_SITE_URL (e.g. for a staging deploy). */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://k3rcorporation.com").replace(/\/$/, ""),
  keywords: [
    "K3R Corporation",
    "defence supplier Bangladesh",
    "military equipment supplier Bangladesh",
    "bullet proof vest supplier Bangladesh",
    "bullet proof helmet Bangladesh",
    "anti riot equipment Bangladesh",
    "Bangladesh Army supplier",
    "Bangladesh Navy supplier",
    "BGB supplier",
    "importer exporter Bangladesh",
    "general supplier Dhaka",
    "indenting services Bangladesh",
    "medical equipment supplier Bangladesh",
    "CCTV UVSS supplier Bangladesh",
    "Mirpur DOHS",
  ],
  year: 2026,
  founded: 2017,
  email: "k3rcorporation@gmail.com",
  facebook: "https://www.facebook.com/k3rcorporation/",
  phone: "+8801713095112",
  phoneDisplay: "+880 1713-095112",
  owner: "Md Abdur Rouf",
  offices: {
    present:
      "House # 1277, Road # 11 (New), Avenue # 2, Mirpur DOHS, Dhaka – 1216, Bangladesh",
    registered: "49 East Tejturi Bazar, Tejgaon, Dhaka-1215, Bangladesh",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Business", href: "/services", mega: true },
    { label: "Our Strength", href: "/#strength" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const partnerCountries = [
  "USA",
  "UK",
  "Germany",
  "Spain",
  "Italy",
  "Turkey",
  "Japan",
  "Korea",
  "Singapore",
  "China",
] as const;

export const clients = [
  "Bangladesh Army",
  "Bangladesh Navy",
  "Bangladesh Air Force",
  "Bangladesh Police",
  "Border Guard Bangladesh",
  "Bangladesh Coast Guard",
  "Rapid Action Battalion",
  "DGMS",
  "NGOs",
  "Multinational Companies",
] as const;

export type Sector = {
  id: string;
  title: string;
  summary: string;
  photo: Photo;
  groups: { name?: string; items: string[] }[];
};

export const sectors: Sector[] = [
  {
    id: "defence",
    photo: photos.armyTraining,
    title: "Defence Supply",
    summary:
      "Protective, anti-riot and general equipment supplied to the Bangladesh Armed Forces, BGB, Police, Coast Guard and RAB.",
    groups: [
      {
        name: "Bullet Proof",
        items: ["Bullet Proof Helmet", "Bullet Proof Jacket / Vest", "Bullet Proof Glass"],
      },
      {
        name: "Anti-Riot",
        items: [
          "Anti Riot Helmet & Shield",
          "Helmet Visor",
          "Elbow, Knee & Shoulder Protection",
          "Riot Baton",
        ],
      },
      {
        name: "General",
        items: [
          "Binocular",
          "Havre Sack & Waist Belt",
          "Ceremonial Sword",
          "Digital SLR Camera with Flash Gun",
        ],
      },
    ],
  },
  {
    id: "marine",
    photo: photos.coastGuard,
    title: "Marine",
    summary:
      "Watercraft and diving equipment for naval, coast guard and riverine operations.",
    groups: [
      {
        items: [
          "Country Boat",
          "Watercraft",
          "Scuba",
          "Underwater Swim Mask",
          "Hand Compass",
          "Hand GPS",
        ],
      },
    ],
  },
  {
    id: "security",
    photo: photos.policeApc,
    title: "Security Systems",
    summary:
      "Surveillance and inspection systems for installations, offices and homes, tailored to each client.",
    groups: [
      {
        items: [
          "CCTV Systems",
          "Under Vehicle Surveillance (UVSS)",
          "Office & Home Security",
          "Custom security solutions on demand",
        ],
      },
    ],
  },
  {
    id: "computer",
    photo: photos.computerLab,
    title: "Computer & IT",
    summary:
      "Desktop and laptop computers, printers and accessories sourced from trusted global brands.",
    groups: [
      {
        items: [
          "Desktop Computers",
          "Laptop Computers",
          "Printers",
          "Related Accessories",
          "Any IT item on client demand",
        ],
      },
    ],
  },
  {
    id: "medical",
    photo: photos.mugdaHospital,
    title: "Medical",
    summary:
      "Electro-medical equipment, chemicals and reagents supplied to DGMS, hospitals and other organizations.",
    groups: [
      {
        items: [
          "Automatic Electric Autoclave Machine",
          "Bio-Chemistry Analyzer",
          "Medical Equipment",
          "Chemical Reagents",
        ],
      },
    ],
  },
  {
    id: "electrical",
    photo: photos.bcsComputerCity,
    title: "Electronics & Electrical",
    summary:
      "Imported lighting, heating and welding equipment for institutional and local markets.",
    groups: [
      {
        items: [
          "Energy Saving Lamp",
          "Electric Halogen Light (1000W+)",
          "Heating Element 440V 2KW",
          "Welding Machine",
        ],
      },
    ],
  },
  {
    id: "general",
    photo: photos.kawranBazar,
    title: "General & Local Supply",
    summary:
      "Everyday operational supplies, from stationery and kitchen items to heavy batteries for ships and vehicles.",
    groups: [
      {
        items: [
          "Heavy Battery for Ship & Vehicle",
          "Thermal Fogger Machine",
          "Portable Supply Blower",
          "Fresh Water Test Kits",
          "Musical Instruments for Defence",
          "Officers' Canvas Shoes",
          "Stationery & PPC Machine",
          "Kitchen Items, Towel & Umbrella",
        ],
      },
    ],
  },
];
