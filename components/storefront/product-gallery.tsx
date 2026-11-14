"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({ name, images }: { name: string; images: string[] }) {
  const [active, setActive] = useState(0);
  return <div className="product-gallery">
    <div className="product-gallery-main"><Image src={images[active]} alt={`${name}, view ${active + 1}`} fill priority sizes="(max-width: 760px) 100vw, 55vw" /></div>
    <div className="product-gallery-thumbs">{images.map((image, index) => <button type="button" className={active === index ? "is-active" : ""} key={`${image}-${index}`} onClick={() => setActive(index)} aria-label={`View image ${index + 1}`}><Image src={image} alt="" fill sizes="80px" /></button>)}</div>
  </div>;
}
