/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101B2D",
        "ink-soft": "#1C2B45",
        gold: "#E8A33D",
        "gold-soft": "#F0C687",
        cream: "#F5F1E8",
        paper: "#F4F6F5",
        sage: "#6B8F71",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      maxWidth: {
        prose: "72ch",
      },
    },
  },
  plugins: [],
};
