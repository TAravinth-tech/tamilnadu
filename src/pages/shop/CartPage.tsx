import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, ShoppingCart, Trash2 } from 'lucide-react';
import { money } from '@/data/site';
import { useCart } from '@/lib/cart-context';
import { Quantity } from '@/components/site/Quantity';

function CartPage() {
  const { lines, total, change, remove } = useCart();
  const navigate = useNavigate();
  return (
    <>
      <main className="container cart-page">
        <div className="breadcrumbs"><a href="/">Home</a><ChevronRight size={14} /> Your cart</div>
        <div className="page-title"><div><span className="eyebrow">Your selection</span><h1>Your shopping cart</h1></div><span>{lines.length} {lines.length === 1 ? 'item' : 'items'}</span></div>
        {!lines.length ? (
          <div className="empty cart-empty">
            <ShoppingCart size={38} />
            <h2>Your cart is waiting</h2>
            <p>Find something lovely for your pantry and it&rsquo;ll appear here.</p>
            <a href="/shop/#/products" className="primary-button">Start shopping <ArrowRight size={17} /></a>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-lines">
              {lines.map(line => (
                <div className="cart-line" key={line.product.id}>
                  <img src={line.product.images[0]} alt={line.product.name} />
                  <div className="cart-line-copy">
                    <span className="eyebrow">{line.product.category}</span>
                    <a href={`/shop/#/products/${line.product.slug}`}><h3>{line.product.name}</h3></a>
                    <span className="mobile-price">{money(line.product.price)}</span>
                    <Quantity value={line.quantity} onChange={value => change(line.product.id, value)} />
                  </div>
                  <b className="line-price">{money(line.product.price * line.quantity)}</b>
                  <button className="remove" onClick={() => remove(line.product.id)} aria-label="Remove item"><Trash2 size={17} /></button>
                </div>
              ))}
              <a href="/shop/#/products" className="continue"><ChevronLeft size={16} /> Continue shopping</a>
            </div>
            <aside className="summary">
              <span className="eyebrow">Order summary</span>
              <h2>Almost yours.</h2>
              <div><span>Subtotal</span><b>{money(total)}</b></div>
              <div><span>Delivery</span><span className="free">Calculated on WhatsApp</span></div>
              <hr />
              <div className="summary-total"><span>Total</span><b>{money(total)}</b></div>
              <button className="primary-button full" onClick={() => navigate('/checkout')}>Continue <ArrowRight size={17} /></button>
              <small><ShieldCheck size={14} /> No online payment. Confirm securely via WhatsApp.</small>
            </aside>
          </div>
        )}
      </main>
    </>
  );
}

export default CartPage;
