"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { products, type Product } from "@/lib/demo-catalog";

type CartLine = { productId: string; quantity: number };
type CartItem = { product: Product; quantity: number };
type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  hydrated: boolean;
  message: string;
  add: (productId: string, quantity?: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  remove: (productId: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "vedshashe-demo-cart-v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed: unknown = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            setLines(parsed.filter((line): line is CartLine =>
              typeof line?.productId === "string" && Number.isInteger(line?.quantity) && line.quantity > 0 && products.some((product) => product.id === line.productId),
            ));
          }
        }
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [hydrated, lines]);

  const add = useCallback((productId: string, quantity = 1) => {
    const product = products.find((item) => item.id === productId);
    if (!product) return;
    setLines((current) => {
      const existing = current.find((line) => line.productId === productId);
      if (!existing) return [...current, { productId, quantity: Math.min(quantity, product.stock) }];
      return current.map((line) => line.productId === productId
        ? { ...line, quantity: Math.min(line.quantity + quantity, product.stock) }
        : line);
    });
    setMessage(`${product.name} added to your bag`);
    window.setTimeout(() => setMessage(""), 2600);
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    const product = products.find((item) => item.id === productId);
    if (!product) return;
    if (quantity <= 0) {
      setLines((current) => current.filter((line) => line.productId !== productId));
      return;
    }
    setLines((current) => current.map((line) => line.productId === productId
      ? { ...line, quantity: Math.min(quantity, product.stock) }
      : line));
  }, []);

  const remove = useCallback((productId: string) => setLines((current) => current.filter((line) => line.productId !== productId)), []);
  const clear = useCallback(() => setLines([]), []);
  const value = useMemo(() => {
    const items = lines.flatMap((line) => {
      const product = products.find((item) => item.id === line.productId);
      return product ? [{ product, quantity: line.quantity }] : [];
    });
    return {
      items,
      count: items.reduce((total, item) => total + item.quantity, 0),
      subtotal: items.reduce((total, item) => total + item.product.price * item.quantity, 0),
      hydrated,
      message,
      add,
      setQuantity,
      remove,
      clear,
    };
  }, [lines, hydrated, message, add, setQuantity, remove, clear]);

  return <CartContext.Provider value={value}>{children}<CartNotice /></CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}

export function CartCount() {
  const { count, hydrated } = useCart();
  return <i aria-live="polite">{hydrated ? count : 0}</i>;
}

export function CartNotice() {
  const { message } = useCart();
  return <div className={`cart-notice${message ? " is-visible" : ""}`} role="status" aria-live="polite">{message}</div>;
}
