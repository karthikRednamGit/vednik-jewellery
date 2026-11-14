"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { categories, products } from "@/lib/demo-catalog";
import { ProductCard } from "@/components/storefront/product-card";

export function ShopCatalog({ initialCategory = "", initialSearch = "" }: { initialCategory?: string; initialSearch?: string }) {
  const [category, setCategory] = useState(initialCategory);
  const [search, setSearch] = useState(initialSearch);
  const [sort, setSort] = useState("featured");
  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    const filtered = products.filter((product) => {
      const matchesCategory = !category || (category === "new-arrivals" ? product.isNew : product.categorySlug === category);
      return matchesCategory && (!query || `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(query));
    });
    if (sort === "price-low") return [...filtered].sort((a, b) => a.price - b.price);
    if (sort === "price-high") return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [category, search, sort]);
  const currentCategory = categories.find((item) => item.slug === category);

  return <main className="shop-page page-shell">
    <div className="shop-title-row">
      <div><p className="eyebrow">The Vedshashe collection</p><h1>{currentCategory?.name ?? "Shop all"}</h1><p>Thoughtful pieces, made by hand and made to be yours.</p></div>
      <span className="shop-count">{visibleProducts.length} pieces</span>
    </div>
    <div className="shop-toolbar">
      <label className="shop-search"><Search size={17} /><input type="search" placeholder="Search pieces" value={search} onChange={(event) => setSearch(event.target.value)} /></label>
      <label className="shop-sort"><SlidersHorizontal size={16} /><span>Sort</span><select aria-label="Sort products" value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></label>
    </div>
    <div className="shop-categories" aria-label="Filter by category">
      <button className={!category ? "is-active" : ""} onClick={() => setCategory("")}>All pieces</button>
      {categories.map((item) => <button className={category === item.slug ? "is-active" : ""} key={item.slug} onClick={() => setCategory(item.slug)}>{item.name}</button>)}
    </div>
    {visibleProducts.length ? <div className={`product-grid shop-product-grid shop-grid-${Math.min(visibleProducts.length, 3)}`}>{visibleProducts.map((product) => <ProductCard product={product} key={product.id} />)}</div> : <div className="shop-empty"><h2>No pieces found</h2><p>Try another search or category.</p><button className="text-link" onClick={() => { setCategory(""); setSearch(""); }}>Clear filters</button></div>}
  </main>;
}
