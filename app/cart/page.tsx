import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/storefront/site-chrome";
import { CartContents } from "@/components/storefront/cart-contents";

export const metadata: Metadata = { title: "Your bag | Vedshashe Jewellery" };

export default function CartPage() {
  return <><SiteHeader /><main className="cart-page page-shell"><p className="eyebrow">Your selection</p><h1>Your bag</h1><CartContents /></main><SiteFooter /></>;
}
