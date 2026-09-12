import Link from "next/link";
import { categories, marketplaces, products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const featured = products[0];

  return (
    <>
      {/* Hero */}
      <section className="border-b border-ink/10 bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <h1 className="font-display text-5xl leading-[1.05] text-ink md:text-6xl">
              Discover global deals.
              <br />
              <span className="italic text-gold">Shop with confidence.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-ink/70">
              {marketplaces.join(", ")} and more — curated into one place,
              with your payment and delivery protected on every order.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="rounded-full bg-ink px-7 py-3.5 font-semibold text-cream transition-colors hover:bg-ink-soft"
              >
                Browse all deals
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4"
              >
                How it works
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 rounded-3xl bg-ink p-8 text-cream">
            <div>
              <p className="font-display text-3xl">50+</p>
              <p className="mt-1 text-xs text-cream/60">Markets</p>
            </div>
            <div>
              <p className="font-display text-3xl">2M+</p>
              <p className="mt-1 text-xs text-cream/60">Products</p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold">0</p>
              <p className="mt-1 text-xs text-cream/60">Buyer fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <span
              key={cat.name}
              className="rounded-full border border-ink/15 px-4 py-2 text-sm text-ink/80"
            >
              {cat.name}{" "}
              <span className="text-ink/40">{cat.count}</span>
            </span>
          ))}
        </div>
      </section>

      {/* Featured deal spotlight */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-ink/5 md:grid-cols-2 md:p-12">
          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-gold">
              Deal of the day
            </span>
            <h2 className="mt-3 font-display text-3xl text-ink">
              {featured.name}
            </h2>
            <p className="mt-3 text-ink/60">
              Sourced from {featured.marketplace}, verified and delivered
              through 3MigoSmart&apos;s protected checkout.
            </p>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-4xl text-ink">
                ${featured.price}
              </span>
              <span className="text-ink/40 line-through">
                ${featured.originalPrice}
              </span>
            </div>
            <Link
              href="/products"
              className="mt-6 w-fit rounded-full bg-gold px-6 py-3 font-semibold text-ink transition-colors hover:bg-gold-soft"
            >
              Get this deal
            </Link>
          </div>
          <div className="max-w-xs justify-self-center">
            <ProductCard product={featured} />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-ink/10 bg-ink py-20 text-cream">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl md:text-4xl">
            How 3MigoSmart works for you
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div>
              <p className="font-display text-2xl text-gold">1</p>
              <h3 className="mt-2 font-semibold">Browse curated deals</h3>
              <p className="mt-2 text-sm text-cream/70">
                We pull real listings from trusted global marketplaces so you
                compare prices in one place.
              </p>
            </div>
            <div>
              <p className="font-display text-2xl text-gold">2</p>
              <h3 className="mt-2 font-semibold">Check out protected</h3>
              <p className="mt-2 text-sm text-cream/70">
                Your payment is held safely until your order is confirmed —
                no upfront risk.
              </p>
            </div>
            <div>
              <p className="font-display text-2xl text-gold">3</p>
              <h3 className="mt-2 font-semibold">Delivery guaranteed</h3>
              <p className="mt-2 text-sm text-cream/70">
                We track fulfillment and only release payment to the seller
                once your item arrives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products grid */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-3xl text-ink">Trending now</h2>
          <Link href="/products" className="text-sm font-semibold text-ink/60 hover:text-ink">
            View all →
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
