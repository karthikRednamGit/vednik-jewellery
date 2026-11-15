"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Shop all jewellery", href: "/shop" },
  { label: "Collections", href: "/#collections" },
  { label: "New arrivals", href: "/shop?category=new-arrivals" },
  { label: "Our story", href: "/#our-story" },
  { label: "Shopping bag", href: "/cart" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-menu-wrap">
      <button
        className="icon-button mobile-menu"
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={21} strokeWidth={1.5} /> : <Menu size={21} strokeWidth={1.5} />}
      </button>
      {open ? (
        <nav className="mobile-menu-panel" id="mobile-navigation" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
