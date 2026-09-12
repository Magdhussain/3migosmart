export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl">
              3Migo<span className="text-gold">Smart</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-cream/70">
              A bridge between you and the world&apos;s best marketplaces —
              curated deals, one trusted platform.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">
              Explore
            </p>
            <ul className="mt-3 space-y-2 text-sm text-cream/80">
              <li>Products</li>
              <li>Today&apos;s deals</li>
              <li>How it works</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gold">
              Trust
            </p>
            <ul className="mt-3 space-y-2 text-sm text-cream/80">
              <li>Payment protection</li>
              <li>Delivery guarantee</li>
              <li>Verified marketplaces only</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/10 pt-6 text-xs text-cream/50">
          © {new Date().getFullYear()} 3MigoSmart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
