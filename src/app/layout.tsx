import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const workSans = Work_Sans({
  variable: "--font-worksans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maison Fleurie | Flowers, Arranged Slowly",
  description:
    "Maison Fleurie creates small-batch, seasonal floral arrangements cut and composed by hand. Discover our featured collections, from $145.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} antialiased`}
    >
      <body className="bg-cream font-sans text-ink">{children}</body>
    </html>
  );
}
