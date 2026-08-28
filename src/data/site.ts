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
import hair from '@/images/hair.webp';
import hair_shampoo from '@/images/hair_shampoo.webp';

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
  hair,
  hair_shampoo,
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
      "Denix Herbal Pain Relief Roll-On Experience fast and targeted relief from everyday aches and pains with Denix Herbal Pain Relief Roll-On. Formulated with powerful herbal ingredients, this easy-to-use roll-on is designed to provide quick comfort for joint pain, muscle soreness, back pain, neck stiffness, and knee discomfort. Its fast-absorbing, non-greasy formula penetrates deep into the affected area, helping to soothe pain, reduce inflammation, and improve mobility.",
    price: 220,
    originalPrice: 300,
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
      "Skywash Floor Cleaner – Powerful Cleaning, Lasting Freshness Keep your home sparkling clean and hygienic with Skywash Floor Cleaner, the advanced disinfectant floor cleaning solution designed to remove dirt, eliminate germs, and leave behind a refreshing Mahagony fragrance. Its powerful formula helps maintain a healthier living environment by killing up to 99.9% of germs while providing deep cleaning action for all types of floors. Whether it's your home, office, shop.",
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
      "Powerful Cleaning, Brilliant Freshness Give your clothes the care they deserve with Skywash Deep Clean Liquid Detergent, an advanced laundry solution designed to remove tough stains, brighten fabrics, and leave every wash smelling fresh. Powered by a new active formula, Skywash penetrates deep into fabric fibers to lift dirt and stains while being gentle on clothes. Whether you're washing everyday garments, uniforms, bedsheets, or delicate fabrics, Skywash delivers outstanding cleaning performance with every wash.",
    price: 140,
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
      "King Fresh Premium Toilet Cleaner – Powerful Cleaning, Royal Freshness Transform your bathroom hygiene with King Fresh Premium Toilet Cleaner, the advanced cleaning solution specially formulated to tackle tough stains, eliminate germs, and leave your toilet sparkling clean. With its powerful cleaning action and long-lasting freshness, King Fresh ensures a hygienic and pleasant bathroom environment every day. Its thick liquid formula clings to toilet surfaces for deeper cleaning, effectively.",
    price: 118,
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
      "Assam Apple Valley Nature Gold Strong Tea – Rich Taste, Refreshing Energy Start your day with the bold and refreshing taste of Assam Apple Valley Nature Gold Strong Tea. Carefully selected from premium tea gardens, this strong tea blend delivers a rich aroma, deep color, and full-bodied flavor that tea lovers enjoy in every sip. Crafted from high-quality Assam tea leaves, Nature Gold offers the perfect balance of strength and freshness, making it an ideal choice for your morning cup",
    price: 144,
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
      "Skywash After Wash Fabric Conditioner – Softness & Freshness Every Day Give your clothes the perfect finishing touch with Skywash After Wash Fabric Conditioner. Specially formulated with luxurious Orchid & Jasmine Notes, this premium fabric conditioner leaves your garments irresistibly soft, delightfully fresh, and comfortable to wear throughout the day. Designed to care for your fabrics after every wash, Skywash helps maintain the softness of clothes, reduces fabric stiffness.",
    price: 160,
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
      "Sevana Steam Puttu Podi – Traditional Taste, Authentic Flavour Bring home the authentic taste of Kerala with Sevana Steam Puttu Podi, carefully processed from premium-quality rice to deliver soft, fluffy, and delicious puttu every time. Prepared using traditional methods and modern quality standards, Sevana Puttu Podi helps you create a wholesome and nutritious breakfast that your entire family will love. With its perfect texture and consistency, this ready-to-cook puttu powder",
    price: 65,
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
      "Powerful Cleaning. Hygienic Shine. Fresh Lemon Fragrance. Make dishwashing faster and easier with Skywash Active Dishwash Liquid. Its advanced grease-cutting formula effortlessly removes stubborn oil, food stains, and unpleasant odours, leaving your utensils sparkling clean after every wash. Enriched with the power of Neem & Lemon, Skywash helps maintain better kitchen hygiene while being gentle on your hands. Just a small amount creates rich foam, making every bottle last longer.",
    price: 85,
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
      "Sky Wash Antibacterial Hand Wash – Strawberry Fragrance Keep your hands fresh, clean, and protected with Sky Wash Antibacterial Hand Wash. Enriched with a delightful strawberry fragrance, this gentle yet effective hand wash helps remove dirt and germs while leaving your hands feeling soft and refreshed. ✨ Key Features: Antibacterial formula for everyday hygiene Refreshing strawberry scent Rich cleansing action that removes dirt and impurities Gentle on hands with a pleasant after-wash.",
    price: 115,
    originalPrice: 150,
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


{
    id: 18,
    name: "Everly Hair Oil",
    slug: "everly-hair-oil",
    category: "Personal Care",
    description:
      "Discover the power of nature with Everly Hair Oil, a premium blend of nourishing natural oils specially formulated to support healthy, strong, and beautiful hair. Enriched with the goodness of Amla, Black Seed, Coconut Oil, and Castor Oil, this hair oil deeply nourishes the scalp, strengthens hair roots, and helps reduce hair fall naturally. Its lightweight and non-sticky formula penetrates deep into the scalp to repair damaged hair, prevent split ends, and restore natural shine and softness.",
    price: 225,
originalPrice: 250,
discount: 18,
images: [images.hair, images.hair],
specifications: [
  "Net volume: 200 ml",
  "Suitable for all hair types",
  "Enriched with natural herbal extracts",
],
features: [
  "Nourishes the scalp and hair roots",
  "Reduces hair fall and promotes healthy growth",
  "Makes hair soft, strong & shiny",
],
    availability: "In stock",
  },



  {
    id: 19,
    name: "Hair Shampoo",
    slug: "hair-shampoo",
    category: "Personal Care",
    description:
      "Everly Hair Fall Defense Anti-Dandruff Shampoo Give your hair the care it deserves with Everly Hair Fall Defense Anti-Dandruff Shampoo, a specially formulated cleansing solution designed to fight dandruff while helping reduce hair fall caused by weak roots and scalp irritation. Enriched with natural botanical extracts, this shampoo gently removes dandruff flakes, excess oil, and impurities, leaving your scalp clean, refreshed, and healthy. Its nourishing formula helps strengthen hair",
    price: 235,
originalPrice: 260,
discount: 18,
images: [images.hair_shampoo, images.hair_shampoo],
specifications: [
  "Net volume: 250 ml",
  "Suitable for all hair types",
  "Paraben & sulfate free",
],
features: [
  "Strengthens hair from root to tip",
  "Reduces hair fall and breakage",
  "Leaves hair soft, smooth & shiny",
],
    availability: "In stock",
  },


];

export const money = (value: number) => `₹${value.toLocaleString("en-IN")}`;
