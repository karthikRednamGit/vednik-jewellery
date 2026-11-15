"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export function ProductGallery({ name, images }: { name: string; images: string[] }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef<number | null>(null);

  function showNext(direction: -1 | 1) {
    setActive((current) => (current + direction + images.length) % images.length);
  }

  return <div className="product-gallery">
    <div
      className="product-gallery-main"
      onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => {
        const startX = touchStart.current;
        const currentX = event.changedTouches[0]?.clientX;
        if (startX === null || currentX === undefined) return;
        const distance = currentX - startX;
        if (distance > 45) showNext(-1);
        if (distance < -45) showNext(1);
        touchStart.current = null;
      }}
    >
      <Image src={images[active]} alt={`${name}, view ${active + 1}`} fill priority sizes="(max-width: 760px) 92vw, 55vw" />
      <span className="product-gallery-count" aria-live="polite">{active + 1} / {images.length}</span>
    </div>
    <div className="product-gallery-thumbs" aria-label={`${name} product images`}>
      {images.map((image, index) => (
        <button type="button" className={active === index ? "is-active" : ""} key={`${image}-${index}`} onClick={() => setActive(index)} aria-label={`Show ${name} image ${index + 1}`} aria-pressed={active === index}>
          <Image src={image} alt="" fill sizes="(max-width: 700px) 22vw, 80px" />
        </button>
      ))}
    </div>
  </div>;
}
