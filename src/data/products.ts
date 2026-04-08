import type { Product } from "../types";

function svgDataUri(svg: string) {
  // Keep it simple (CRA + TS) and avoid extra dependencies.
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function productSvg(label: string, accent: string) {
  return svgDataUri(
    `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
  <defs>
    <radialGradient id="g" cx="30%" cy="15%" r="90%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.55"/>
      <stop offset="55%" stop-color="#461344" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#07040a" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="sheen" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.07"/>
      <stop offset="35%" stop-color="#ffffff" stop-opacity="0.00"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.08"/>
    </linearGradient>
    <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="12" result="b"/>
      <feColorMatrix in="b" type="matrix"
        values="1 0 0 0 0  0 0.3 0 0 0  0 0 0.8 0 0  0 0 0 1 0" />
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="1200" height="900" fill="url(#g)"/>
  <path d="M80 760 C 260 620, 420 620, 600 740 C 780 860, 940 860, 1120 720"
        fill="none" stroke="${accent}" stroke-opacity="0.55" stroke-width="6" filter="url(#glow)"/>
  <path d="M120 240 C 260 120, 500 80, 720 140 C 880 186, 980 280, 1040 420 C 1080 520, 1080 620, 1040 720"
        fill="none" stroke="rgba(244,59,183,0.24)" stroke-width="3"/>

  <g transform="translate(0,0)">
    <rect x="140" y="160" width="920" height="580" rx="36" fill="rgba(0,0,0,0.35)" stroke="rgba(244,59,183,0.28)"/>
    <rect x="160" y="180" width="880" height="540" rx="32" fill="url(#sheen)"/>
    <g transform="translate(0,0)">
      <text x="600" y="470" text-anchor="middle"
            font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
            font-size="68" fill="#ffffff" opacity="0.92">${label}</text>
      <text x="600" y="530" text-anchor="middle"
            font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
            font-size="26" fill="${accent}" opacity="0.9">Helmetarium • neon series</text>
    </g>
  </g>
</svg>`.trim(),
  );
}

export const PRODUCTS: Product[] = [
  {
    id: "h1",
    name: "Scorpion - Exo Combat Evo",
    price: 680,
    category: "Helmets",
    subcategory: "Full Face",
    colors: ["Black", "Orange"],
    sizes: ["M", "L", "XL"],
    tags: ["ECE Rated", "Anti-fog", "Lightweight"],
    imageDataUri:
      "https://scontent.ftbs6-2.fna.fbcdn.net/v/t39.30808-6/481228291_1112560194217916_362938639842847239_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=c2Ww0koZvwYQ7kNvwFy4hLc&_nc_oc=AdqKd_Q6qrZ-zi57zlO6Edvv2VaQl0EN2KcDeMPxmCwnl5_jrOis57qE9S5Z7i2QL3M&_nc_zt=23&_nc_ht=scontent.ftbs6-2.fna&_nc_gid=T7R4Z8wQG6OmWNflBsqWnQ&_nc_ss=7a3a8&oh=00_Af2aWHbnejPn47bcCDmhvfjWGlI9alFXV7z-ELE1622YYA&oe=69DC032D",
  },
  {
    id: "h2",
    name: "Nova Modular Helmet",
    price: 289.0,
    category: "Helmets",
    subcategory: "Modular",
    colors: ["Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
    tags: ["Flip-up", "Sun Visor"],
    imageDataUri: productSvg("Nova Modular", "#9a4dff"),
  },
  {
    id: "h3",
    name: "Pulse 3/4 Helmet",
    price: 179.5,
    category: "Helmets",
    subcategory: "3/4",
    colors: ["White", "Blue", "Black"],
    sizes: ["S", "M", "L"],
    tags: ["Retro", "Comfort Liner"],
    imageDataUri:
      "https://scontent.ftbs6-2.fna.fbcdn.net/v/t51.82787-15/525892049_18366676489150561_4404229350639877679_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=-POpTx0XyvgQ7kNvwEhWp0e&_nc_oc=Ado5YeQY1g2V07SZunOvLkqKA-bmonXzggoAAxMHpykAKnQxbj8DWGUojfSQhKDS0vs&_nc_zt=23&_nc_ht=scontent.ftbs6-2.fna&_nc_gid=SOhhZFn3_FPFJACIToZBtQ&_nc_ss=7a3a8&oh=00_Af1zYg4YrwPeCNMFUH4fVE0a99cOPZC9FP6g3D170QnILw&oe=69DBF367",
  },
  {
    id: "h4",
    name: "Orbit Open Face Helmet",
    price: 139.99,
    category: "Helmets",
    subcategory: "Open Face",
    colors: ["Black", "Green"],
    sizes: ["M", "L"],
    tags: ["Urban", "Quick Strap"],
    imageDataUri: productSvg("Orbit Open Face", "#7cff5a"),
  },
  {
    id: "g1",
    name: "Vanta Summer Gloves",
    price: 59.99,
    category: "Gloves",
    subcategory: "Summer",
    colors: ["Black", "Red"],
    sizes: ["S", "M", "L", "XL"],
    tags: ["Breathable", "Touchscreen"],
    imageDataUri: productSvg("Vanta Gloves", "#f43bb7"),
  },
  {
    id: "g2",
    name: "Frost Winter Gloves",
    price: 79.99,
    category: "Gloves",
    subcategory: "Winter",
    colors: ["Black", "Gray"],
    sizes: ["M", "L", "XL"],
    tags: ["Thermal", "Water Resistant"],
    imageDataUri: productSvg("Frost Gloves", "#a2b7ff"),
  },
  {
    id: "g3",
    name: "Apex Racing Gloves",
    price: 109.0,
    category: "Gloves",
    subcategory: "Racing",
    colors: ["Black", "White", "Red"],
    sizes: ["S", "M", "L"],
    tags: ["Knuckle Armor", "Palm Slider"],
    imageDataUri: productSvg("Apex Racing", "#ff5a7a"),
  },
  {
    id: "ge1",
    name: "Nightline Jacket",
    price: 219.0,
    category: "Gear",
    subcategory: "Jackets",
    colors: ["Black", "Purple"],
    sizes: ["S", "M", "L", "XL"],
    tags: ["CE Armor", "Vent Panels"],
    imageDataUri: productSvg("Nightline Jacket", "#461344"),
  },
  {
    id: "ge2",
    name: "Arc Rider Pants",
    price: 189.0,
    category: "Gear",
    subcategory: "Pants",
    colors: ["Black", "Gray"],
    sizes: ["M", "L", "XL"],
    tags: ["Abrasion Resistant", "Stretch"],
    imageDataUri: productSvg("Arc Pants", "#48d7ff"),
  },
  {
    id: "ge3",
    name: "Ion Boots",
    price: 159.0,
    category: "Gear",
    subcategory: "Boots",
    colors: ["Black", "Brown"],
    sizes: ["M", "L", "XL"],
    tags: ["Ankle Support", "Oil Resistant"],
    imageDataUri: productSvg("Ion Boots", "#7cff5a"),
  },
  {
    id: "a1",
    name: "Neon Beam Lights",
    price: 49.99,
    category: "Accessories",
    subcategory: "Lights",
    colors: ["White", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    tags: ["USB-C", "Weatherproof"],
    imageDataUri: productSvg("Beam Lights", "#48d7ff"),
  },
  {
    id: "a2",
    name: "Spectra Mirrors",
    price: 39.99,
    category: "Accessories",
    subcategory: "Mirrors",
    colors: ["Black", "Red"],
    sizes: ["S", "M", "L", "XL"],
    tags: ["Vibration Damp", "Wide View"],
    imageDataUri: productSvg("Spectra Mirrors", "#f43bb7"),
  },
];

export const CATEGORIES = ["Helmets", "Gloves", "Gear", "Accessories"] as const;

export const SUBCATEGORIES: Record<(typeof CATEGORIES)[number], string[]> = {
  Helmets: ["Full Face", "Modular", "3/4", "Open Face"],
  Gloves: ["Summer", "Winter", "Racing"],
  Gear: ["Jackets", "Pants", "Boots"],
  Accessories: ["Lights", "Mirrors", "Covers"],
};

export const COLORS = [
  "Black",
  "White",
  "Red",
  "Blue",
  "Gray",
  "Green",
  "Purple",
  "Brown",
];
