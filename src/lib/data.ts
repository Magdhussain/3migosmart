export const categories = [
  { name: "Electronics", count: "12K+" },
  { name: "Fashion", count: "8K+" },
  { name: "Home & Garden", count: "6K+" },
  { name: "Sports", count: "3K+" },
  { name: "Beauty", count: "2K+" },
];

export const marketplaces = ["Amazon", "AliExpress", "eBay", "Noon"];

export type Product = {
  id: string;
  name: string;
  marketplace: string;
  category: string;
  price: number;
  originalPrice: number;
  image: string;
  // Paste your real affiliate tracking link here once you're approved
  // for that marketplace's affiliate program. Until then, this points
  // at the marketplace's normal homepage as a harmless placeholder.
  affiliateUrl: string;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Wireless Noise-Cancelling Headphones",
    marketplace: "Amazon",
    category: "Electronics",
    price: 89,
    originalPrice: 149,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    affiliateUrl: "https://www.amazon.com/",
  },
  {
    id: "p2",
    name: "Minimalist Leather Backpack",
    marketplace: "eBay",
    category: "Fashion",
    price: 54,
    originalPrice: 90,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    affiliateUrl: "https://www.ebay.com/",
  },
  {
    id: "p3",
    name: "Smart Home LED Desk Lamp",
    marketplace: "AliExpress",
    category: "Home & Garden",
    price: 22,
    originalPrice: 40,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
    affiliateUrl: "https://www.aliexpress.com/",
  },
  {
    id: "p4",
    name: "Adjustable Yoga & Resistance Set",
    marketplace: "Noon",
    category: "Sports",
    price: 31,
    originalPrice: 55,
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    affiliateUrl: "https://www.noon.com/",
  },
  {
    id: "p5",
    name: "Ceramic Pour-Over Coffee Set",
    marketplace: "Amazon",
    category: "Home & Garden",
    price: 38,
    originalPrice: 60,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    affiliateUrl: "https://www.amazon.com/",
  },
  {
    id: "p6",
    name: "Everyday Canvas Sneakers",
    marketplace: "eBay",
    category: "Fashion",
    price: 45,
    originalPrice: 70,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80",
    affiliateUrl: "https://www.ebay.com/",
  },
];
