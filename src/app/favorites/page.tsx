"use client";

import Link from "next/link";
import { products } from "@/lib/data";
import { useFavorites } from "@/lib/favorites-context";
import ProductCard from "@/components/ProductCard";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const favoritedProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl text-ink">Your favorites</h1>
      <p className="mt-3 max-w-xl text-ink/60">
        Products you&apos;ve saved to come back to later.
      </p>

      {favoritedProducts.length === 0 ? (
        <div className="mt-16 text-center">
          <p className="text-ink/50">
            You haven&apos;t saved any favorites yet.
          </p>
          <Link
            href="/products"
            className="mt-4 inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-ink-soft"
          >
            Browse products
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
          {favoritedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
