import { Suspense } from "react";
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/storefront/site-chrome";
import { ShopCatalog } from "@/components/storefront/shop-catalog";
import { ShopRouteContent } from "@/components/storefront/shop-route-content";

export const metadata: Metadata = { title: "Shop jewellery | Vedshashe Jewellery" };

export default function ShopPage() {
  return <><SiteHeader /><Suspense fallback={<ShopCatalog />}><ShopRouteContent /></Suspense><SiteFooter /></>;
}
