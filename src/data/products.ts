import type { Product } from "../types";
import h1 from "../assets/images/h1.jpg";

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

// ========== MOTORCYCLE GEAR SHOP PRODUCTS ==========
export const MOTORCYCLE_PRODUCTS: Product[] = [
  {
    id: "h1",
    name: "Scorpion - Exo Combat Evo",
    price: 680,
    category: "Helmets",
    subcategory: "Full Face",
    colors: ["Black", "Orange"],
    tags: ["ECE Rated", "Anti-fog", "Lightweight"],
    imageDataUri: h1,
  },
  {
    id: "h2",
    name: "Nova Modular Helmet",
    price: 289.0,
    category: "Helmets",
    subcategory: "Modular",
    colors: ["Black", "Gray"],
    tags: ["Flip-up", "Sun Visor"],
    imageDataUri: h1,
  },
  {
    id: "h3",
    name: "Pulse 3/4 Helmet",
    price: 179.5,
    category: "Helmets",
    subcategory: "3/4",
    colors: ["White", "Blue", "Black"],
    tags: ["Retro", "Comfort Liner"],
    imageDataUri: h1,
  },
  {
    id: "h4",
    name: "Orbit Open Face Helmet",
    price: 139.99,
    category: "Helmets",
    subcategory: "Open Face",
    colors: ["Black", "Green"],
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
    tags: ["Vibration Damp", "Wide View"],
    imageDataUri: productSvg("Spectra Mirrors", "#f43bb7"),
  },
];

export const MOTORCYCLE_CATEGORIES = [
  "Helmets",
  "Gloves",
  "Gear",
  "Accessories",
] as const;

export const MOTORCYCLE_SUBCATEGORIES: Record<
  (typeof MOTORCYCLE_CATEGORIES)[number],
  string[]
> = {
  Helmets: ["Full Face", "Modular", "3/4", "Open Face"],
  Gloves: ["Summer", "Winter", "Racing"],
  Gear: ["Jackets", "Pants", "Boots"],
  Accessories: ["Lights", "Mirrors", "Covers"],
};

export const MOTORCYCLE_COLORS = [
  "Black",
  "White",
  "Red",
  "Blue",
  "Gray",
  "Green",
  "Purple",
  "Brown",
];

// ========== RESTAURANT MENU PRODUCTS ==========
export const RESTAURANT_PRODUCTS: Product[] = [
  {
    id: "a1",
    name: "Smoked Eggplant Dip",
    price: 12.5,
    category: "Appetizers",
    subcategory: "Cold Starters",
    colors: ["Vegan", "Gluten-Free"],
    tags: ["Vegan", "Shared Plate", "House Special"],
    chef: "Chef Lasha",
    calories: 180,
    prepMinutes: 12,
    description:
      "Velvety roasted eggplant with tahini, served with crisp pita chips.",
    ingredients: [
      "Roasted eggplant",
      "Tahini",
      "Garlic",
      "Lemon",
      "Smoked paprika",
    ],
    servedWith: ["Warm pita chips", "Pickled cucumbers"],
    features: ["Silky texture", "Smoky finish", "Perfect for sharing"],
    imageDataUri: productSvg("Eggplant Dip", "#f43bb7"),
  },
  {
    id: "a2",
    name: "Neon Caesar Salad",
    price: 14.0,
    category: "Appetizers",
    subcategory: "Cold Starters",
    colors: ["Vegetarian"],
    tags: ["Vegetarian", "Crispy", "Signature"],
    chef: "Chef Ana",
    calories: 240,
    prepMinutes: 10,
    description:
      "Crisp romaine with parmesan shards, garlic croutons and neon dressing.",
    ingredients: [
      "Romaine lettuce",
      "Parmesan",
      "Anchovy-free dressing",
      "Croutons",
    ],
    servedWith: ["Lemon wedge", "Extra black pepper"],
    features: ["Bright citrus notes", "Crunchy texture", "Chef favorite"],
    imageDataUri: productSvg("Neon Caesar", "#9a4dff"),
  },
  {
    id: "a3",
    name: "Spicy Yuzu Shrimp",
    price: 17.25,
    category: "Appetizers",
    subcategory: "Hot Starters",
    colors: ["Spicy"],
    tags: ["Spicy", "Seafood", "Gluten-Free"],
    chef: "Chef Mako",
    calories: 210,
    prepMinutes: 14,
    description:
      "Pan-seared shrimp tossed in a bright yuzu glaze with chili crunch.",
    ingredients: ["Shrimp", "Yuzu", "Chili oil", "Scallions", "Sesame"],
    servedWith: ["Pickled ginger", "Micro herbs"],
    features: ["Zesty heat", "Light and bright", "Perfect starter"],
    imageDataUri: productSvg("Yuzu Shrimp", "#ff5a7a"),
  },
  {
    id: "m1",
    name: "Black Pepper Steak",
    price: 32.0,
    category: "Mains",
    subcategory: "Steak",
    colors: ["Signature"],
    tags: ["Grilled", "Juicy", "Chef's Choice"],
    chef: "Chef Irakli",
    calories: 680,
    prepMinutes: 22,
    description:
      "Tender sirloin in a charred black pepper glaze with smoked mash.",
    ingredients: [
      "Sirloin steak",
      "Black pepper",
      "Miso butter",
      "Roasted potato",
    ],
    servedWith: ["Smoked potato mash", "Charred broccolini"],
    features: ["Bold pepper crust", "Rich umami", "Smoky finish"],
    imageDataUri: productSvg("Pepper Steak", "#48d7ff"),
  },
  {
    id: "m2",
    name: "Truffle Mushroom Pasta",
    price: 24.5,
    category: "Mains",
    subcategory: "Pasta",
    colors: ["Vegetarian"],
    tags: ["Vegetarian", "Earthy", "Truffle"],
    chef: "Chef Nino",
    calories: 620,
    prepMinutes: 18,
    description:
      "Silky pasta, wild mushrooms and shaved black truffle in cream sauce.",
    ingredients: [
      "Tagliatelle",
      "Wild mushrooms",
      "Cream",
      "Black truffle",
      "Parmesan",
    ],
    servedWith: ["Garlic focaccia", "Micro parsley"],
    features: ["Luxurious aroma", "Rich and creamy", "Velvety sauce"],
    imageDataUri: productSvg("Truffle Pasta", "#a2b7ff"),
  },
  {
    id: "m3",
    name: "Beetroot Falafel Burger",
    price: 19.0,
    category: "Mains",
    subcategory: "Burgers",
    colors: ["Vegan"],
    tags: ["Vegan", "Spicy", "Colorful"],
    chef: "Chef Tamar",
    calories: 540,
    prepMinutes: 16,
    description:
      "Spiced beet falafel, tahini slaw and pickled onion in a toasted bun.",
    ingredients: [
      "Beet falafel",
      "Tahini slaw",
      "Pickled onions",
      "Brioche bun",
    ],
    servedWith: ["Sweet potato fries", "Herb aioli"],
    features: ["Bright flavor", "Crunchy slaw", "Plant-powered"],
    imageDataUri: productSvg("Falafel Burger", "#7cff5a"),
  },
  {
    id: "m4",
    name: "Glazed Salmon Bowl",
    price: 22.5,
    category: "Mains",
    subcategory: "Bowls",
    colors: ["Gluten-Free"],
    tags: ["Gluten-Free", "Fresh", "Balancing"],
    chef: "Chef Mari",
    calories: 560,
    prepMinutes: 15,
    description:
      "Miso-glazed salmon over seasoned rice with pickled vegetables.",
    ingredients: ["Salmon", "Miso glaze", "Sushi rice", "Pickled vegetables"],
    servedWith: ["Soy-lime dressing", "Sesame seeds"],
    features: ["Umami-rich", "Delicate fish", "Bright sides"],
    imageDataUri: productSvg("Salmon Bowl", "#461344"),
  },
  {
    id: "d1",
    name: "Midnight Chocolate Tart",
    price: 11.0,
    category: "Desserts",
    subcategory: "Sweets",
    colors: ["Vegetarian"],
    tags: ["Rich", "Decadent", "Signature"],
    chef: "Chef Maia",
    calories: 410,
    prepMinutes: 12,
    description:
      "Dark chocolate tart with espresso cream and salted caramel drizzle.",
    ingredients: [
      "Dark chocolate",
      "Espresso",
      "Butter",
      "Caramel",
      "Sea salt",
    ],
    servedWith: ["Vanilla cream", "Cocoa dust"],
    features: ["Intense chocolate", "Silky mousse", "Balanced sweetness"],
    imageDataUri: productSvg("Chocolate Tart", "#ff5a7a"),
  },
  {
    id: "d2",
    name: "Rose Panna Cotta",
    price: 10.5,
    category: "Desserts",
    subcategory: "Sweets",
    colors: ["Vegetarian"],
    tags: ["Floral", "Light", "Refresh"],
    chef: "Chef Keti",
    calories: 290,
    prepMinutes: 10,
    description:
      "Silken panna cotta flavored with rose and served with berry compote.",
    ingredients: ["Cream", "Rose water", "Gelatin", "Berry compote"],
    servedWith: ["Fresh mint", "Crushed pistachio"],
    features: ["Delicate aroma", "Creamy texture", "Bright berries"],
    imageDataUri: productSvg("Rose Panna Cotta", "#9a4dff"),
  },
  {
    id: "d3",
    name: "Spiced Coffee Mousse",
    price: 10.0,
    category: "Desserts",
    subcategory: "Mousse",
    colors: ["Vegetarian"],
    tags: ["Coffee", "Spiced", "Velvety"],
    chef: "Chef Lela",
    calories: 340,
    prepMinutes: 11,
    description:
      "Smooth coffee mousse with cinnamon crumble and dark chocolate.",
    ingredients: ["Espresso", "Cream", "Chocolate", "Cinnamon", "Sugar"],
    servedWith: ["Chocolate shavings", "Espresso nibs"],
    features: ["Deep coffee flavor", "Airy mousse", "Warm spice"],
    imageDataUri: productSvg("Coffee Mousse", "#48d7ff"),
  },
  {
    id: "dr1",
    name: "Electric Espresso Martini",
    price: 13.5,
    category: "Drinks",
    subcategory: "Cocktails",
    colors: ["Signature"],
    tags: ["Cocktail", "Coffee", "Bold"],
    chef: "Barista & Mixologist",
    calories: 240,
    prepMinutes: 7,
    description:
      "Vodka, espresso and coffee liqueur shaken to a velvety finish.",
    ingredients: ["Vodka", "Espresso", "Coffee liqueur", "Simple syrup"],
    servedWith: ["Coffee beans", "Frosted glass"],
    features: ["Night ride energy", "Silky crema", "Refreshing kick"],
    imageDataUri: productSvg("Espresso Martini", "#7cff5a"),
  },
  {
    id: "dr2",
    name: "Citrus Basil Lemonade",
    price: 8.0,
    category: "Drinks",
    subcategory: "Non-Alcoholic",
    colors: ["Vegan", "Gluten-Free"],
    tags: ["Fresh", "Herbal", "Thirst Quencher"],
    chef: "Barista & Mixologist",
    calories: 120,
    prepMinutes: 5,
    description: "House lemonade with basil, lime and a bright ginger finish.",
    ingredients: ["Lemon juice", "Basil", "Ginger", "Sparkling water"],
    servedWith: ["Ice", "Lime wheel"],
    features: ["Crisp citrus", "Herbal lift", "Low sugar"],
    imageDataUri: productSvg("Basil Lemonade", "#48d7ff"),
  },
  {
    id: "dr3",
    name: "Smoked Old Fashioned",
    price: 14.5,
    category: "Drinks",
    subcategory: "Cocktails",
    colors: ["Signature"],
    tags: ["Smoky", "Whiskey", "Classic"],
    chef: "Barista & Mixologist",
    calories: 210,
    prepMinutes: 8,
    description:
      "Smoked bourbon cocktail with orange bitters and a torched peel.",
    ingredients: ["Bourbon", "Sugar cube", "Angostura bitters", "Orange peel"],
    servedWith: ["Smoked glass dome", "Ice sphere"],
    features: ["Warm smoke", "Rich oak", "Elegant finish"],
    imageDataUri: productSvg("Old Fashioned", "#461344"),
  },
  {
    id: "dr4",
    name: "Mint Sparkler",
    price: 7.5,
    category: "Drinks",
    subcategory: "Coffee",
    colors: ["Vegan"],
    tags: ["Mint", "Sparkling", "Refreshing"],
    chef: "Barista & Mixologist",
    calories: 95,
    prepMinutes: 6,
    description: "Iced mint coffee with soda and a crisp citrus edge.",
    ingredients: ["Cold brew", "Mint", "Sparkling water", "Lime"],
    servedWith: ["Fresh mint sprig", "Lime wedge"],
    features: ["Cool finish", "Light caffeine", "Herbal sparkle"],
    imageDataUri: productSvg("Mint Sparkler", "#7cff5a"),
  },
];

export const RESTAURANT_CATEGORIES = [
  "Appetizers",
  "Mains",
  "Desserts",
  "Drinks",
] as const;

export const RESTAURANT_SUBCATEGORIES: Record<
  (typeof RESTAURANT_CATEGORIES)[number],
  string[]
> = {
  Appetizers: ["Cold Starters", "Hot Starters"],
  Mains: ["Steak", "Pasta", "Burgers", "Bowls"],
  Desserts: ["Sweets", "Mousse", "Ice Cream"],
  Drinks: ["Cocktails", "Coffee", "Non-Alcoholic"],
};

export const RESTAURANT_DIETARY_OPTIONS = [
  "Vegan",
  "Vegetarian",
  "Gluten-Free",
  "Spicy",
  "Chef's Choice",
  "Signature",
] as const;

// Default exports for backward compatibility
export const PRODUCTS = RESTAURANT_PRODUCTS;
export const CATEGORIES = RESTAURANT_CATEGORIES;
export const SUBCATEGORIES = RESTAURANT_SUBCATEGORIES;
export const DIETARY_OPTIONS = RESTAURANT_DIETARY_OPTIONS;
