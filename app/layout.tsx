import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { CartProvider } from "@/components/storefront/cart-provider";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = DM_Sans({
  variable: "--font-ui",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Vedshashe Jewellery — Jewels to gather, wear and pass on",
  description:
    "Considered gold and gemstone jewellery, shaped by hand in India and made to become part of your story.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Vedshashe Jewellery",
    title: "Vedshashe Jewellery — Jewels to gather, wear and pass on",
    description: "Considered gold and gemstone jewellery, shaped by hand in India and made to become part of your story.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${display.variable} ${sans.variable}`}>
      <body><CartProvider>{children}</CartProvider></body>
    </html>
  );
}
