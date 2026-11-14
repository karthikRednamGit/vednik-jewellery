export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  images: string[];
  label: string;
  description: string;
  metal: string;
  stock: number;
  featured?: boolean;
  isNew?: boolean;
};

const photo = (id: string, width = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const categories = [
  { name: "Necklaces", note: "Everyday heirlooms", slug: "necklaces", image: photo("photo-1599643478518-a784e5dc4c8f", 900) },
  { name: "Earrings", note: "A little light", slug: "earrings", image: photo("photo-1535632066927-ab7c9ab60908", 900) },
  { name: "Rings", note: "Made to be kept", slug: "rings", image: photo("photo-1605100804763-247f67b3557e", 900) },
  { name: "Bangles", note: "Tradition, reimagined", slug: "bangles", image: photo("photo-1611652022419-a9419f74343d", 900) },
  { name: "Bracelets", note: "Little golden gestures", slug: "bracelets", image: photo("photo-1611591437281-460bfbe1220a", 900) },
  { name: "Chains", note: "The art of layering", slug: "chains", image: photo("photo-1617038220319-276d3cfab638", 900) },
  { name: "Bridal", note: "For your once-in-a-lifetime", slug: "bridal", image: photo("photo-1599643478518-a784e5dc4c8f", 900) },
  { name: "New arrivals", note: "Fresh from the atelier", slug: "new-arrivals", image: photo("photo-1603561591411-07134e71a2a9", 900) },
];

export const products: Product[] = [
  {
    id: "noor-choker", slug: "the-noor-choker", name: "The Noor Choker",
    category: "18k Gold · Uncut Diamonds", categorySlug: "necklaces", price: 124000,
    image: photo("photo-1617038220319-276d3cfab638"),
    images: [photo("photo-1617038220319-276d3cfab638"), photo("photo-1611652022419-a9419f74343d")],
    label: "Bestseller", description: "A close-set choker with the soft, luminous character of hand-cut stones. Designed to sit beautifully on its own or layer with a fine chain.",
    metal: "18k yellow gold · Uncut diamonds", stock: 4, featured: true,
  },
  {
    id: "gulabi-earrings", slug: "gulabi-drop-earrings", name: "Gulabi Drop Earrings",
    category: "22k Gold · Polki", categorySlug: "earrings", price: 68500,
    image: photo("photo-1535632066927-ab7c9ab60908"),
    images: [photo("photo-1535632066927-ab7c9ab60908"), photo("photo-1611652022419-a9419f74343d")],
    label: "Handcrafted", description: "A graceful drop inspired by Jaipur at first light. Each pair is finished by hand for a softly individual glow.",
    metal: "22k yellow gold · Polki", stock: 7, featured: true,
  },
  {
    id: "aarna-ring", slug: "aarna-signet-ring", name: "Aarna Signet Ring",
    category: "18k Gold · Tourmaline", categorySlug: "rings", price: 42000,
    image: photo("photo-1603561591411-07134e71a2a9"),
    images: [photo("photo-1603561591411-07134e71a2a9"), photo("photo-1605100804763-247f67b3557e")],
    label: "New arrival", description: "A modern heirloom with a softly polished tourmaline and a comfortable, sculpted band. Made to be worn every day.",
    metal: "18k yellow gold · Tourmaline", stock: 5, featured: true, isNew: true,
  },
  {
    id: "mira-pendant", slug: "mira-pearl-pendant", name: "Mira Pearl Pendant",
    category: "18k Gold · Freshwater Pearl", categorySlug: "necklaces", price: 36500,
    image: photo("photo-1599643478518-a784e5dc4c8f"),
    images: [photo("photo-1599643478518-a784e5dc4c8f"), photo("photo-1617038220319-276d3cfab638")],
    label: "Just arrived", description: "A luminous freshwater pearl set on a fine gold chain. A quiet little detail that makes the everyday feel special.",
    metal: "18k yellow gold · Freshwater pearl", stock: 8, isNew: true,
  },
  {
    id: "saanjh-cuff", slug: "saanjh-cuff", name: "Saanjh Cuff",
    category: "22k Gold · Hand-textured", categorySlug: "bracelets", price: 54000,
    image: photo("photo-1611591437281-460bfbe1220a"),
    images: [photo("photo-1611591437281-460bfbe1220a"), photo("photo-1611652022419-a9419f74343d")],
    label: "New arrival", description: "A light-catching cuff with a hand-worked surface that carries the marks of its making. Easy to wear, lovely to keep.",
    metal: "22k yellow gold · Hand-textured", stock: 3, isNew: true,
  },
  {
    id: "tara-bangle", slug: "tara-bangle", name: "Tara Bangle",
    category: "22k Gold · Hand-finished", categorySlug: "bangles", price: 78500,
    image: photo("photo-1611652022419-a9419f74343d"),
    images: [photo("photo-1611652022419-a9419f74343d"), photo("photo-1611591437281-460bfbe1220a")],
    label: "Made by hand", description: "A sculptural gold bangle with a softly rounded profile, made for stacking and made to last.",
    metal: "22k yellow gold · Hand-finished", stock: 6,
  },
  {
    id: "riva-chain", slug: "riva-layering-chain", name: "Riva Layering Chain",
    category: "18k Gold · Fine chain", categorySlug: "chains", price: 28500,
    image: photo("photo-1617038220319-276d3cfab638"),
    images: [photo("photo-1617038220319-276d3cfab638"), photo("photo-1599643478518-a784e5dc4c8f")],
    label: "Everyday favourite", description: "A fine, fluid gold chain designed to sit beautifully on its own or pair with a pendant. A considered start to any layer.",
    metal: "18k yellow gold", stock: 10,
  },
  {
    id: "aavya-bridal-necklace", slug: "aavya-bridal-necklace", name: "Aavya Bridal Necklace",
    category: "22k Gold · Polki", categorySlug: "bridal", price: 186000,
    image: photo("photo-1599643478518-a784e5dc4c8f"),
    images: [photo("photo-1599643478518-a784e5dc4c8f"), photo("photo-1611652022419-a9419f74343d")],
    label: "Bridal heirloom", description: "A statement necklace inspired by the beauty of Indian wedding traditions, balanced with a graceful silhouette for generations to come.",
    metal: "22k yellow gold · Polki", stock: 2,
  },
];

export const featuredProducts = products.filter((product) => product.featured);
export const newArrivals = products.filter((product) => product.isNew);
export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
export const formatPrice = (amount: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount);
