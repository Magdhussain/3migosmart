"use client";

import Image from "next/image";
import type { Product } from "@/lib/data";
import { useFavorites } from "@/lib/favorites-context";

export default function ProductCard({ product }: { product: Product }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(product.id);

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white transition-shadow hover:shadow-lg">
      <button
        type="button"
        aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
        onClick={() => toggleFavorite(product.id)}
        className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition-transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={favorited ? "#E8A33D" : "none"}
          stroke={favorited ? "#E8A33D" : "#101B2D"}
          strokeWidth="1.8"
          className="h-4.5 w-4.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <a
        href={product.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="block"
      >
        <div className="relative aspect-square overflow-hidden bg-ink/5">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
            -{discount}%
          </span>
        </div>
        <div className="p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-ink/50">
            {product.marketplace}
          </p>
          <h3 className="mt-1 line-clamp-2 font-medium text-ink">
            {product.name}
          </h3>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-display text-lg font-semibold text-ink">
              ${product.price}
            </span>
            <span className="text-sm text-ink/40 line-through">
              ${product.originalPrice}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
