"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useCart } from "@/components/storefront/cart-provider";
import { formatPrice } from "@/lib/demo-catalog";

type Customer = { name: string; phone: string; address: string; city: string; postalCode: string };

function buildOrderMessage(customer: Customer, items: ReturnType<typeof useCart>["items"], subtotal: number) {
  const lines = items.map(({ product, quantity }) => `• ${product.name} × ${quantity} — ${formatPrice(product.price * quantity)}`).join("\n");
  return [
    "Hello Vedshashe Jewellery, I would like to place this order:",
    "",
    lines,
    "",
    `Subtotal: ${formatPrice(subtotal)}`,
    "Shipping: Complimentary",
    "",
    `Name: ${customer.name}`,
    `Mobile: ${customer.phone}`,
    `Delivery address: ${customer.address}, ${customer.city} ${customer.postalCode}`,
    "",
    "Please confirm availability and delivery timing. Thank you.",
  ].join("\n");
}

export function CheckoutForm() {
  const { items, subtotal, hydrated } = useCart();
  const [customer, setCustomer] = useState<Customer>({ name: "", phone: "", address: "", city: "", postalCode: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  const setField = (field: keyof Customer, value: string) => setCustomer((current) => ({ ...current, [field]: value }));

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!items.length) { setError("Your bag is empty. Add a piece before continuing."); return; }
    if (customer.name.trim().length < 2) { setError("Please enter your full name."); return; }
    if (!/^[6-9]\d{9}$/.test(customer.phone.replace(/\D/g, ""))) { setError("Enter a valid 10-digit Indian mobile number."); return; }
    if (customer.address.trim().length < 8 || customer.city.trim().length < 2 || !/^\d{6}$/.test(customer.postalCode)) {
      setError("Enter your street address, city and 6-digit PIN code."); return;
    }
    const orderText = buildOrderMessage(customer, items, subtotal);
    const businessNumber = process.env.NEXT_PUBLIC_WHATSAPP_BUSINESS_NUMBER?.replace(/\D/g, "");
    const target = businessNumber ? `https://wa.me/${businessNumber}` : "https://wa.me/";
    const url = `${target}?text=${encodeURIComponent(orderText)}`;
    setWhatsAppUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setMessage("WhatsApp should open in a new tab. Review your order and press Send in WhatsApp to complete your request.");
  }

  if (!hydrated) return <div className="cart-loading">Preparing your order…</div>;
  if (!items.length && !message) return <div className="cart-empty"><p className="eyebrow">Nothing in your bag yet</p><h2>Let’s find your piece.</h2><Link className="button button-dark" href="/shop">Explore the collection <ArrowRight size={16} /></Link></div>;

  return <div className="checkout-grid">
    <form className="checkout-form" onSubmit={submit} noValidate>
      <div className="checkout-form-heading"><span>01</span><div><h2>Delivery details</h2><p>Tell us where to send your pieces.</p></div></div>
      <label>Full name<input autoComplete="name" value={customer.name} onChange={(event) => setField("name", event.target.value)} placeholder="Your name" required /></label>
      <label>Mobile number<div className="phone-field"><span>+91</span><input type="tel" inputMode="numeric" autoComplete="tel-national" value={customer.phone} onChange={(event) => setField("phone", event.target.value.replace(/\D/g, "").slice(0, 10))} placeholder="10-digit mobile number" required /></div></label>
      <label>Street address<textarea autoComplete="street-address" value={customer.address} onChange={(event) => setField("address", event.target.value)} placeholder="House, street, area" rows={3} required /></label>
      <div className="checkout-city-fields"><label>City<input autoComplete="address-level2" value={customer.city} onChange={(event) => setField("city", event.target.value)} required /></label><label>PIN code<input inputMode="numeric" autoComplete="postal-code" value={customer.postalCode} onChange={(event) => setField("postalCode", event.target.value.replace(/\D/g, "").slice(0, 6))} required /></label></div>
      {error && <p className="checkout-error" role="alert">{error}</p>}
      <button className="button button-dark place-order" type="submit">Continue with WhatsApp <ArrowRight size={16} /></button>
      <p className="whatsapp-note">Your order message will open in WhatsApp. Please press <strong>Send</strong> there to complete your request.</p>
      {message && <div className="checkout-success" role="status"><Check size={17} /><span>{message} {whatsAppUrl && <a href={whatsAppUrl} target="_blank" rel="noreferrer">Open WhatsApp again</a>}</span></div>}
      <Link className="continue-shopping" href="/cart"><ArrowLeft size={15} /> Return to your bag</Link>
    </form>
    <aside className="checkout-summary"><p className="eyebrow">Your pieces</p>{items.map(({ product, quantity }) => <div className="checkout-item" key={product.id}><div className="checkout-item-image"><Image src={product.image} alt={product.name} fill sizes="72px" /></div><div><strong>{product.name}</strong><span>Qty {quantity}</span></div><span>{formatPrice(product.price * quantity)}</span></div>)}<div className="summary-total"><span>Total</span><strong>{formatPrice(subtotal)}</strong></div><p className="summary-note">Complimentary insured shipping. We’ll confirm delivery details with you on WhatsApp.</p></aside>
  </div>;
}
