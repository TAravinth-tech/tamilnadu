import { useState, type FormEvent } from 'react';
import { Menu, Phone, Search, ShoppingCart, X } from 'lucide-react';
import { Logo } from './Logo';
import { useCart } from '@/lib/cart-context';

type Page = 'home' | 'shop' | 'about' | 'contact';

export function Header({ current = 'home' as Page }: { current?: Page }) {
  const { count } = useCart();
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    window.location.href = `/shop/#/products${search ? `?search=${encodeURIComponent(search)}` : ''}`;
  };

  const cls = (page: Page) => (current === page ? 'active' : '');

  return (
    <>
      <div className="topline"><span>Curated with care from Tamil Nadu</span><span className="topline-right"><Phone size={13} /> WhatsApp orders: <b>93609 64448</b></span></div>
      <header className="header">
        <div className="header-inner">
          <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
          <Logo />
          <form className="search" onSubmit={submit}>
            <Search size={18} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search spices, pantry favourites..." />
            <button type="submit">Search</button>
          </form>
          <div className="header-actions">
            <a href="/shop/#/cart" className="cart-link"><ShoppingCart size={21} /><i>{count}</i><span>Cart</span></a>
          </div>
        </div>
        {open && (
          <nav className="mobile-nav">
            {/* <a className={cls('home')} href="/">Home</a> */}
            <a className={cls('shop')} href="/shop/#/products">Products</a>
            <a className={cls('about')} href="/about/">About us</a>
            <a className={cls('contact')} href="/contact/">Contact us</a>
          </nav>
        )}
        <nav className="desktop-nav">
          <div className="nav-inner">
            {/* <a className={cls('home')} href="/">Home</a> */}
            <a className={cls('shop')} href="/shop/#/products">Products</a>
            <a className={cls('about')} href="/about/">About us</a>
            <a className={cls('contact')} href="/contact/">Contact us</a>
          </div>
        </nav>
      </header>
    </>
  );
}