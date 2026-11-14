"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/components/storefront/cart-provider";
import { formatPrice } from "@/lib/demo-catalog";

export function CartContents() {
  const { items, subtotal, hydrated, setQuantity, remove } = useCart();
  if (!hydrated) return <div className="cart-loading">Preparing your bag…</div>;
  if (!items.length) return <div className="cart-empty"><p className="eyebrow">A little room for something lovely</p><h2>Your bag is waiting.</h2><p>Explore the collection and find a piece to make your own.</p><Link className="button button-dark" href="/shop">Explore the collection <ArrowRight size={16} /></Link></div>;
  return <div className="cart-layout">
    <div className="cart-lines">
      {items.map(({ product, quantity }) => <article className="cart-line" key={product.id}>
        <Link className="cart-image" href={`/product/${product.slug}`}><Image src={product.image} alt={product.name} fill sizes="130px" /></Link>
        <div className="cart-line-info"><div><p className="eyebrow">{product.category}</p><Link href={`/product/${product.slug}`}><h2>{product.name}</h2></Link><span className="cart-line-price">{formatPrice(product.price)}</span></div>
          <div className="cart-line-controls"><div className="quantity-stepper"><button type="button" aria-label={`Remove one ${product.name}`} onClick={() => setQuantity(product.id, quantity - 1)}><Minus size={13} /></button><span>{quantity}</span><button type="button" aria-label={`Add one ${product.name}`} disabled={quantity >= product.stock} onClick={() => setQuantity(product.id, quantity + 1)}><Plus size={13} /></button></div><button className="remove-item" type="button" onClick={() => remove(product.id)}><Trash2 size={14} /> Remove</button></div>
        </div>
        <strong className="cart-line-total">{formatPrice(product.price * quantity)}</strong>
      </article>)}
      <Link className="continue-shopping" href="/shop">Continue shopping <ArrowRight size={15} /></Link>
    </div>
    <aside className="cart-summary"><p className="eyebrow">Your order</p><div className="summary-row"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div><div className="summary-row"><span>Shipping</span><span>Complimentary</span></div><div className="summary-total"><span>Estimated total</span><strong>{formatPrice(subtotal)}</strong></div><p className="summary-note">Taxes and delivery details will be confirmed with you before your order is final.</p><Link className="button button-dark checkout-button" href="/checkout">Continue to details <ArrowRight size={16} /></Link><p className="summary-secure">Your order is placed securely through WhatsApp.</p></aside>
  </div>;
}
