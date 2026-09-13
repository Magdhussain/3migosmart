import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FavoritesProvider } from "@/lib/favorites-context";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "3MigoSmart — Global Deals Hub",
  description:
      "3MigoSmart connects you to trusted global marketplaces — Amazon, AliExpress, eBay, Noon and more — with payment and delivery guarantees on every deal.",
  verification: { google: "gQAarYceoOYFdTM0O2N1nw_dd1pIsnxucZA4HoLCI8Y" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${manrope.variable} font-body`}>
        <FavoritesProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}
