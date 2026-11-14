"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Minus, Plus } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/demo-catalog";
import { formatPrice } from "@/lib/demo-catalog";
import { useCart } from "@/components/storefront/cart-provider";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 700px) 90vw, 33vw" />
        <Link className="product-image-link" href={`/product/${product.slug}`} aria-label={`View ${product.name}`} />
        <span className="product-label">{product.label}</span>
        <button className="product-add" type="button" onClick={() => add(product.id)}>
          Add to bag <ArrowUpRight size={14} />
        </button>
      </div>
      <div className="product-info">
        <div>
          <Link href={`/product/${product.slug}`}><h3>{product.name}</h3></Link>
          <p>{product.category}</p>
        </div>
        <span>{formatPrice(product.price)}</span>
      </div>
    </article>
  );
}

export function AddToBagButton({ product, className = "", quantity = 1 }: { product: Product; className?: string; quantity?: number }) {
  const { add } = useCart();
  return <button className={`button button-dark add-to-bag ${className}`} type="button" onClick={() => add(product.id, quantity)}>
    Add to bag <ArrowRight size={16} />
  </button>;
}

export function ProductPurchase({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  return <div className="product-purchase">
    <div className="quantity-stepper" aria-label="Choose quantity">
      <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((current) => Math.max(1, current - 1))}><Minus size={14} /></button>
      <span aria-live="polite">{quantity}</span>
      <button type="button" aria-label="Increase quantity" disabled={quantity >= product.stock} onClick={() => setQuantity((current) => Math.min(product.stock, current + 1))}><Plus size={14} /></button>
    </div>
    <AddToBagButton product={product} quantity={quantity} />
  </div>;
}
