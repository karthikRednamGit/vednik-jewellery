import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/storefront/site-chrome";
import { CheckoutForm } from "@/components/storefront/checkout-form";

export const metadata: Metadata = { title: "Checkout | Vedshashe Jewellery" };

export default function CheckoutPage() {
  return <><SiteHeader /><main className="checkout-page page-shell"><p className="eyebrow">A few details, then it’s yours</p><h1>Complete your order</h1><CheckoutForm /></main><SiteFooter /></>;
}
