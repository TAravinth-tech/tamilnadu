export type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  images: string[];
  specifications: string[];
  features: string[];
  availability: string;
};
export type CartLine = { product: Product; quantity: number };


import pain from '@/images/image1.webp';
import floorclean from '@/images/floor.webp';
import liquid from '@/images/liquid.webp';
import toilet from '@/images/toilet.webp';
import tea from '@/images/tea.webp';
import skywash from '@/images/skywash.webp';
import puttu_podi from '@/images/puttu_podi.webp';
import dishwash from '@/images/dishwash.webp';
import handwash from '@/images/handwash.webp';

export const images = {
  pain,
  floorclean,
  liquid,
  toilet,
  tea,
  skywash,
  puttu_podi,
  dishwash,
  handwash,
  // rustic,
};


export const products: Product[] = [
  // ...existing 8 products above stay unchanged...

  {
    id: 9,
    name: "Pain Relief Roll On",
    slug: "pain-relief-roll-on",
    category: "Personal Care",
    description:
      "Fast-acting roll-on for quick relief from muscle and joint pain, formulated for everyday use.",
    price: 149,
    originalPrice: 179,
    discount: 17,
    images: [images.pain, images.pain],
    specifications: [
      "Net volume: 50 ml",
      "Roll-on applicator",
      "For external use only",
    ],
    features: [
      "Fast-acting relief",
      "Mess-free roll-on",
      "Easy to carry",
    ],
    availability: "In stock",
  },
  {
    id: 10,
    name: "Floor Cleaner",
    slug: "floor-cleaner",
    category: "Household Care",
    description:
      "A powerful floor cleaner that cuts through grime and leaves a long-lasting fresh fragrance.",
    price: 135,
    originalPrice: 160,
    discount: 16,
    images: [images.floorclean, images.floorclean],
    specifications: [
      "Net volume: 1 L",
      "Suitable for all floor types",
      "Long-lasting fragrance",
    ],
    features: [
      "Deep cleaning action",
      "Kills 99.9% germs",
      "Pleasant fragrance",
    ],
    availability: "In stock",
  },
  {
    id: 11,
    name: "Liquid Detergent",
    slug: "liquid-detergent",
    category: "Laundry Care",
    description:
      "A concentrated liquid detergent that lifts tough stains while being gentle on fabric.",
    price: 210,
    originalPrice: 249,
    discount: 16,
    images: [images.liquid, images.liquid],
    specifications: [
      "Net volume: 1 L",
      "Suitable for machine & hand wash",
      "Concentrated formula",
    ],
    features: [
      "Removes tough stains",
      "Gentle on fabric",
      "Long-lasting freshness",
    ],
    availability: "In stock",
  },
  {
    id: 12,
    name: "Toilet Cleaner",
    slug: "toilet-cleaner",
    category: "Household Care",
    description:
      "Thick, clinging formula that removes stains and disinfects for a sparkling clean toilet.",
    price: 110,
    originalPrice: 130,
    discount: 15,
    images: [images.toilet, images.toilet],
    specifications: [
      "Net volume: 500 ml",
      "Thick clinging formula",
      "Disinfectant action",
    ],
    features: [
      "Removes tough stains",
      "Kills germs",
      "Long-lasting fragrance",
    ],
    availability: "In stock",
  },
  {
    id: 13,
    name: "Tea Powder",
    slug: "tea-powder",
    category: "Groceries",
    description:
      "Rich, aromatic tea powder for a strong, flavourful cup every time.",
    price: 180,
    originalPrice: 210,
    discount: 14,
    images: [images.tea, images.tea],
    specifications: [
      "Net weight: 250 g",
      "Strong CTC blend",
      "Packed for freshness",
    ],
    features: [
      "Rich aroma",
      "Strong flavour",
      "Everyday essential",
    ],
    availability: "In stock",
  },
  {
    id: 14,
    name: "Fabric Conditioner",
    slug: "fabric-conditioner",
    category: "Laundry Care",
    description:
      "Leaves clothes soft, fresh, and lightly fragranced after every wash.",
    price: 195,
    originalPrice: 230,
    discount: 15,
    images: [images.skywash, images.skywash],
    specifications: [
      "Net volume: 800 ml",
      "Suitable for all fabrics",
      "Long-lasting freshness",
    ],
    features: [
      "Softens fabric",
      "Reduces wrinkles",
      "Pleasant fragrance",
    ],
    availability: "In stock",
  },
  {
    id: 15,
    name: "Puttu Podi",
    slug: "puttu-podi",
    category: "Groceries",
    description:
      "Traditional rice flour, finely ground and ready for soft, fluffy puttu.",
    price: 75,
    originalPrice: 90,
    discount: 17,
    images: [images.puttu_podi, images.puttu_podi],
    specifications: [
      "Net weight: 500 g",
      "Roasted rice flour",
      "Traditional recipe",
    ],
    features: [
      "Soft, fluffy texture",
      "Easy to prepare",
      "Authentic taste",
    ],
    availability: "In stock",
  },
  {
    id: 16,
    name: "Dishwash Liquid",
    slug: "dishwash-liquid",
    category: "Household Care",
    description:
      "Cuts through grease effortlessly while being gentle on hands.",
    price: 125,
    originalPrice: 150,
    discount: 17,
    images: [images.dishwash, images.dishwash],
    specifications: [
      "Net volume: 750 ml",
      "Grease-cutting formula",
      "Gentle on hands",
    ],
    features: [
      "Removes tough grease",
      "Gentle on hands",
      "Fresh fragrance",
    ],
    availability: "In stock",
  },
  {
    id: 17,
    name: "Handwash",
    slug: "handwash",
    category: "Personal Care",
    description:
      "Gentle, germ-protecting handwash that keeps hands clean and soft.",
    price: 99,
    originalPrice: 120,
    discount: 18,
    images: [images.handwash, images.handwash],
    specifications: [
      "Net volume: 250 ml",
      "Pump dispenser",
      "Dermatologically tested",
    ],
    features: [
      "Kills 99.9% germs",
      "Keeps hands soft",
      "Pleasant fragrance",
    ],
    availability: "In stock",
  },
];

export const money = (value: number) => `₹${value.toLocaleString("en-IN")}`;
