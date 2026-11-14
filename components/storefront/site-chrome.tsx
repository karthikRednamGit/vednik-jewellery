import Link from "next/link";
import { ArrowRight, Camera, Menu, Search, ShoppingBag } from "lucide-react";
import { CartCount } from "@/components/storefront/cart-provider";

export function SiteHeader() {
  return <>
    <div className="announcement">
      <span>Complimentary insured shipping on all orders</span><span className="announcement-divider">·</span><span>Thoughtfully made in India</span>
    </div>
    <header className="site-header">
      <Link className="icon-button mobile-menu" href="/shop" aria-label="Browse categories"><Menu size={20} strokeWidth={1.5} /></Link>
      <nav className="main-nav" aria-label="Main navigation">
        <Link href="/shop">Shop</Link><Link href="/#collections">Collections</Link><Link href="/#our-story">Our story</Link>
      </nav>
      <Link className="wordmark" href="/" aria-label="Vedshashe Jewellery home"><span>VEDSHASHE</span><small>J E W E L L E R Y</small></Link>
      <div className="header-actions">
        <Link className="search-trigger" href="/shop" aria-label="Search the collection"><Search size={18} strokeWidth={1.5} /><span>Search</span></Link>
        <Link className="bag-link" href="/cart" aria-label="Shopping bag"><ShoppingBag size={19} strokeWidth={1.5} /><span>Bag <CartCount /></span></Link>
      </div>
    </header>
  </>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-main">
      <div className="footer-brand">
        <Link className="wordmark footer-wordmark" href="/"><span>VEDSHASHE</span><small>J E W E L L E R Y</small></Link>
        <p>Jewels to gather, wear<br />and pass on.</p>
        <Link className="footer-instagram" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Camera size={16} strokeWidth={1.5} /> Instagram</Link>
      </div>
      <div className="footer-column"><h3>Explore</h3><Link href="/shop">Shop all</Link><Link href="/#collections">Collections</Link><Link href="/#our-story">Our story</Link><Link href="/shop?category=new-arrivals">New arrivals</Link></div>
      <div className="footer-column"><h3>Client care</h3><Link href="mailto:hello@vedshashe.com">Get in touch</Link><Link href="/#shipping">Shipping & returns</Link><Link href="/#care">Jewellery care</Link><Link href="/#faq">Frequently asked questions</Link></div>
      <div className="footer-note"><p className="eyebrow">A note from us</p><p>For the moments that become your stories. Join us for first looks, thoughtful notes and a little something special.</p><Link className="text-link" href="/#newsletter">Sign up for our letters <ArrowRight size={15} /></Link></div>
    </div>
    <div className="footer-bottom"><span>© 2025 Vedshashe Jewellery</span><span>Made with care in India</span><div><Link href="/#privacy">Privacy</Link><Link href="/#terms">Terms</Link></div></div>
  </footer>;
}
