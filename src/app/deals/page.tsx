import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function DealsPage() {
  const deals = [...products].sort(
    (a, b) =>
      (b.originalPrice - b.price) / b.originalPrice -
      (a.originalPrice - a.price) / a.originalPrice
  );

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl text-ink">Today&apos;s deals</h1>
      <p className="mt-3 max-w-xl text-ink/60">
        Ranked by the biggest savings, refreshed from our partner
        marketplaces.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
        {deals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
