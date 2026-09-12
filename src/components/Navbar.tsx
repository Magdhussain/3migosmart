"use client";

import Link from "next/link";
import { useFavorites } from "@/lib/favorites-context";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/deals", label: "Deals" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const { favorites } = useFavorites();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-medium text-ink">
            3Migo<span className="text-gold">Smart</span>
          </span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/favorites"
            className="relative flex items-center gap-1.5 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={favorites.length > 0 ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <span className="hidden sm:inline">Favorites</span>
            {favorites.length > 0 && (
              <span className="ml-0.5 rounded-full bg-gold px-1.5 py-0.5 text-xs font-semibold text-ink">
                {favorites.length}
              </span>
            )}
          </Link>

          <Link
            href="/products"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-ink-soft"
          >
            Browse deals
          </Link>
        </div>
      </div>
    </header>
  );
}
