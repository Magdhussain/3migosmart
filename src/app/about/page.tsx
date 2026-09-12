const guarantees = [
  {
    title: "Payment protection",
    body: "Your payment is held securely and only released to the seller after your order is confirmed as delivered.",
  },
  {
    title: "Delivery guarantee",
    body: "Every order is tracked end to end. If it doesn't arrive as described, you're covered.",
  },
  {
    title: "Verified marketplaces only",
    body: "We only link to established, trusted global marketplaces — never unverified sellers.",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl text-ink">About 3MigoSmart</h1>
      <p className="mt-4 text-lg text-ink/70">
        3MigoSmart is a bridge between shoppers and the world&apos;s best
        marketplaces. We curate deals from trusted global platforms and earn
        a small commission when a sale completes — at no extra cost to you.
      </p>

      <div className="mt-12 space-y-8">
        {guarantees.map((g) => (
          <div key={g.title} className="border-l-2 border-gold pl-6">
            <h2 className="font-display text-xl text-ink">{g.title}</h2>
            <p className="mt-2 text-ink/60">{g.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
