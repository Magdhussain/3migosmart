"use client";

import { useMemo, useState } from "react";
import { products, categories } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = !activeCategory || p.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [query, activeCategory]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl text-ink">All products</h1>
      <p className="mt-3 max-w-xl text-ink/60">
        Every listing here is sourced from a verified marketplace and comes
        with 3MigoSmart&apos;s payment and delivery protection.
      </p>

      {/* Search */}
      <div className="mt-8 max-w-md">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-full border border-ink/15 bg-white px-5 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none"
        />
      </div>

      {/* Category filter */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory(null)}
          className={`rounded-full border px-4 py-2 text-sm transition-colors ${
            activeCategory === null
              ? "border-ink bg-ink text-cream"
              : "border-ink/15 text-ink/70 hover:border-ink/40"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              activeCategory === cat.name
                ? "border-ink bg-ink text-cream"
                : "border-ink/15 text-ink/70 hover:border-ink/40"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-ink/50">
          No products match your search. Try a different keyword or category.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
