import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/storefront/site-chrome";
import { ProductGallery } from "@/components/storefront/product-gallery";
import { ProductPurchase } from "@/components/storefront/product-card";
import { getProduct, formatPrice, products } from "@/lib/demo-catalog";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/product/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return product ? { title: `${product.name} | Vedshashe Jewellery`, description: product.description } : {};
}

export default async function ProductPage({ params }: PageProps<"/product/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return <><SiteHeader /><main className="product-detail page-shell">
    <Link className="back-link" href="/shop"><ArrowLeft size={15} /> Back to shop</Link>
    <div className="product-detail-grid">
      <ProductGallery name={product.name} images={product.images} />
      <div className="product-detail-copy">
        <p className="eyebrow">{product.category}</p>
        <h1>{product.name}</h1>
        <p className="detail-price">{formatPrice(product.price)}</p>
        <p className="detail-description">{product.description}</p>
        <div className="detail-metal"><span>Composition</span><strong>{product.metal}</strong></div>
        <div className="detail-stock"><Check size={15} /> In stock · Ships with care</div>
        <ProductPurchase product={product} />
        <p className="detail-delivery">Complimentary insured shipping. Your order is prepared and dispatched with care.</p>
        <div className="detail-accordion"><details><summary>Craft & materials</summary><p>Every Vedshashe piece is finished by hand. Natural stones may carry subtle variations that make each piece unique.</p></details><details><summary>Delivery & returns</summary><p>We will confirm delivery timing and care instructions with you after your order is placed.</p></details></div>
      </div>
    </div>
    <section className="you-may-like"><div><p className="eyebrow">A few other favourites</p><h2>Keep <em>looking.</em></h2></div><Link className="text-link" href="/shop">Shop all pieces <ArrowRight size={15} /></Link></section>
    <div className="product-detail-recommendations">{product.images.slice(0, 2).map((image, index) => <div key={image}><Image src={image} alt={`${product.name} detail ${index + 1}`} width={500} height={520} /></div>)}</div>
  </main><SiteFooter /></>;
}
