import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { CartLine, Product } from '@/data/site';

export const CartContext = createContext<{ lines: CartLine[]; add: (product: Product) => void; remove: (id: number) => void; change: (id: number, quantity: number) => void; clear: () => void; total: number; count: number }>({ lines: [], add: () => {}, remove: () => {}, change: () => {}, clear: () => {}, total: 0, count: 0 });

export function useCart() {
  return useContext(CartContext);
}

// Cart state is persisted to localStorage so it stays in sync across the
// separate multi-page entry points (home / about / contact / shop).
export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => { try { return JSON.parse(localStorage.getItem('tg-cart') || '[]'); } catch { return []; } });
  useEffect(() => localStorage.setItem('tg-cart', JSON.stringify(lines)), [lines]);
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'tg-cart') {
        try { setLines(JSON.parse(e.newValue || '[]')); } catch { /* ignore */ }
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);
  const add = (product: Product) => setLines(current => { const found = current.find(line => line.product.id === product.id); return found ? current.map(line => line.product.id === product.id ? { ...line, quantity: line.quantity + 1 } : line) : [...current, { product, quantity: 1 }]; });
  const remove = (id: number) => setLines(current => current.filter(line => line.product.id !== id));
  const change = (id: number, quantity: number) => setLines(current => quantity < 1 ? current.filter(line => line.product.id !== id) : current.map(line => line.product.id === id ? { ...line, quantity } : line));
  const clear = () => setLines([]);
  return <CartContext.Provider value={{ lines, add, remove, change, clear, total: lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0), count: lines.reduce((sum, line) => sum + line.quantity, 0) }}>{children}</CartContext.Provider>;
}
