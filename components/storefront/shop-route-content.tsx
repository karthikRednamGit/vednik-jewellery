"use client";

import { useSearchParams } from "next/navigation";
import { ShopCatalog } from "@/components/storefront/shop-catalog";

export function ShopRouteContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "";
  const search = searchParams.get("q") ?? "";
  return <ShopCatalog key={`${category}:${search}`} initialCategory={category} initialSearch={search} />;
}
