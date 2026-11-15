import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Camera } from "lucide-react";
import { categories, featuredProducts, newArrivals } from "@/lib/demo-catalog";
import { ProductCard } from "@/components/storefront/product-card";
import { HeroVideo } from "@/components/storefront/hero-video";
import { SiteFooter, SiteHeader } from "@/components/storefront/site-chrome";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={`section-heading${centered ? " is-centered" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <HeroVideo />
          <div className="hero-wash" />
          <div className="hero-content">
            <Eyebrow>Jewels with a little soul</Eyebrow>
            <h1 id="hero-title">A quiet kind<br />of <em>forever.</em></h1>
            <p>Considered pieces, shaped by hand and made to become part of your story.</p>
            <Link className="button button-dark" href="#shop">Discover the collection <ArrowRight size={16} /></Link>
          </div>
          <div className="hero-caption"><span>01 / 03</span><span>THE HEIRLOOM EDIT</span></div>
          <Link className="hero-scroll" href="#shop" aria-label="Scroll to discover"><ArrowDownRight size={18} /></Link>
        </section>

        <section className="category-section page-shell" id="shop">
          <SectionHeading
            eyebrow="Find your something"
            title={<>Made for your <em>every day.</em></>}
            description="A collection of little treasures, each with a story waiting to be yours."
            centered
          />
          <div className="category-grid">
            {categories.map((category, index) => (
              <Link className="category-card" href={`/shop?category=${category.slug}`} key={category.name}>
                <div className="category-image-wrap">
                  <Image src={category.image} alt={`${category.name} jewellery`} fill sizes="(max-width: 700px) 48vw, 25vw" />
                  <span className="category-index">0{index + 1}</span>
                  <span className="round-arrow"><ArrowUpRight size={18} strokeWidth={1.4} /></span>
                </div>
                <div className="category-copy"><div><h3>{category.name}</h3><p>{category.note}</p></div><ArrowRight size={16} strokeWidth={1.3} /></div>
              </Link>
            ))}
          </div>
        </section>

        <section className="collection-intro page-shell" id="collections">
          <div className="collection-copy">
            <Eyebrow>A study in soft light</Eyebrow>
            <h2>The <em>Gulabi</em><br />Collection</h2>
            <p>Inspired by the first blush of dawn over old Jaipur, Gulabi pairs heirloom craft with a lighter, more personal point of view.</p>
            <Link className="text-link" href="#featured">Explore Gulabi <ArrowRight size={16} /></Link>
            <span className="collection-count">01 — 04</span>
          </div>
          <div className="collection-image-wrap">
            <Image
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1400&q=90"
              alt="Gold jewellery styled with sunlit, natural textures"
              fill
              sizes="(max-width: 760px) 100vw, 56vw"
            />
            <span className="image-note">The Gulabi Collection · 2025</span>
          </div>
        </section>

        <section className="featured-section page-shell" id="featured">
          <div className="featured-top">
            <SectionHeading eyebrow="The pieces you return to" title={<>Most <em>loved.</em></>} description="Quiet favourites, chosen by you and made to stay." />
            <Link className="text-link featured-all" href="/shop">View all pieces <ArrowRight size={16} /></Link>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product) => <ProductCard product={product} key={product.id} />)}
          </div>
        </section>

        <section className="new-arrivals-section page-shell" id="new-arrivals">
          <div className="featured-top">
            <SectionHeading eyebrow="Fresh from the atelier" title={<>New <em>arrivals.</em></>} description="New expressions of the old-world details we love." />
            <Link className="text-link featured-all" href="/shop?category=new-arrivals">Discover what’s new <ArrowRight size={16} /></Link>
          </div>
          <div className="product-grid">
            {newArrivals.map((product) => <ProductCard product={product} key={product.id} />)}
          </div>
        </section>

        <section className="campaign page-shell">
          <div className="campaign-panel">
            <Image
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1800&q=85"
              alt="A close detail of traditional gold jewellery"
              fill
              sizes="100vw"
            />
            <div className="campaign-overlay" />
            <div className="campaign-copy">
              <Eyebrow>For all your in-between moments</Eyebrow>
              <h2>Everyday, made<br /><em>exceptional.</em></h2>
              <p>Jewellery for the rituals, the reunions and the ordinary Tuesdays you’ll remember.</p>
              <Link className="button button-light" href="#shop">Find your everyday <ArrowRight size={16} /></Link>
            </div>
            <span className="campaign-mark">V / 25</span>
          </div>
        </section>

        <section className="story-section page-shell" id="our-story">
          <div className="story-image-wrap">
            <Image
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=90"
              alt="Hand-finished gold jewellery detail"
              fill
              sizes="(max-width: 760px) 100vw, 45vw"
            />
            <span className="story-image-caption">A little patience. A lot of heart.</span>
          </div>
          <div className="story-copy">
            <Eyebrow>Rooted in a feeling</Eyebrow>
            <h2>Not just worn.<br /><em>Belonged to.</em></h2>
            <p>Vedshashe began with a simple thought: the pieces we treasure most are the ones that feel like they have always been ours.</p>
            <p>We work with master karigars across India, bringing time-honoured techniques into forms that feel personal, easy and entirely your own.</p>
            <Link className="text-link" href="#our-story">The Vedshashe story <ArrowRight size={16} /></Link>
            <span className="story-ornament">V</span>
          </div>
        </section>

        <section className="testimonial-section">
          <div className="testimonial-inner">
            <Eyebrow>A note from a customer</Eyebrow>
            <div className="quote-mark">“</div>
            <blockquote>It felt like finding something that had always been mine. I wore it for my wedding, and now I reach for it on ordinary mornings too.</blockquote>
            <div className="quote-credit"><span>ANANYA M.</span><i /><span>JAIPUR, INDIA</span></div>
            <div className="quote-pagination"><span className="active-dot" /><span /><span /></div>
          </div>
        </section>

        <section className="instagram-section page-shell" id="instagram">
          <div className="instagram-top">
            <SectionHeading eyebrow="A little world of Vedshashe" title={<>Seen <em>in the wild.</em></>} description="Your stories, our favourite way to see them." />
            <Link className="text-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer">Follow along <ArrowUpRight size={15} /></Link>
          </div>
          <div className="instagram-grid">
            {[
              ["photo-1611652022419-a9419f74343d", "Gold bangles beside a sunlit window"],
              ["photo-1535632066927-ab7c9ab60908", "Handcrafted earrings styled for an evening"],
              ["photo-1617038220319-276d3cfab638", "A close-up of a statement gold necklace"],
              ["photo-1603561591411-07134e71a2a9", "A treasured ring resting in soft light"],
            ].map(([id, alt]) => (
              <Link className="instagram-tile" href="https://www.instagram.com/" target="_blank" rel="noreferrer" key={id} aria-label={alt}>
                <Image src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`} alt={alt} fill sizes="(max-width: 700px) 46vw, 24vw" />
                <span><Camera size={18} /></span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
