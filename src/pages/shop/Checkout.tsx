import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight, MapPin, Phone, Send, ShoppingCart } from 'lucide-react';
import { money } from '@/data/site';
import { useCart } from '@/lib/cart-context';
import { loadDeliveryDetails, saveDeliveryDetails, type DeliveryDetails } from '@/lib/delivery';

function Checkout() {
  const { lines, total, clear } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState<DeliveryDetails>(() => loadDeliveryDetails());
  // If we already have saved details from a previous order, show them
  // directly (with an Edit option) instead of an empty form to fill in again.
  const [editing, setEditing] = useState(() => !loadDeliveryDetails().name);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    saveDeliveryDetails(form);
    setEditing(false);
  };

  const confirm = () => {
    saveDeliveryDetails(form);
    const order = lines.map((line, i) => `${i + 1}. ${line.product.name}\n   Quantity: ${line.quantity}\n   Price: ${money(line.product.price)}\n   Subtotal: ${money(line.product.price * line.quantity)}`).join('\n\n');
    const message = `Hello TamilnaduGlobal,\n\nI would like to place an order.\n\nCustomer Details:\nName: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}, ${form.city}, ${form.state} \n\nOrder Details:\n\n${order}\n\nTotal Amount: ${money(total)}\n\nPlease confirm my order.\n\nThank you.`;
    window.open(`https://wa.me/919360964448?text=${encodeURIComponent(message)}`, '_blank');
    // The order has been handed off to WhatsApp for the team to action
    // manually, so the cart empties — but the delivery details stay saved
    // for next time (see src/lib/delivery.ts).
    clear();
    navigate('/order-confirmation');
  };

  if (!lines.length) {
    return (
      <main className="container empty checkout-empty">
        <ShoppingCart size={38} />
        <h2>Your cart is empty</h2>
        <p>Add something delicious before checking out.</p>
        <a className="primary-button" href="/shop/#/products">Browse products</a>
      </main>
    );
  }

  return (
    <>
      <main className="container checkout">
        <div className="breadcrumbs"><a href="/shop/#/cart">Cart</a><ChevronRight size={14} /> Checkout</div>
        <div className="page-title"><div><span className="eyebrow">Almost there</span><h1>Delivery details</h1></div></div>
        <div className="checkout-layout">
          <section className="delivery-card">
            <div className="card-heading">
              <div><span className="eyebrow">Where should we send it?</span><h2>Delivery details</h2></div>
              {!editing && <button className="edit-button" onClick={() => setEditing(true)}>Edit</button>}
            </div>
            {editing ? (
              <form onSubmit={submit} className="delivery-form">
                <label>Full name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Enter your full name" /></label>
                <label>Phone number<input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="10 digit mobile number" /></label>
                <label className="wide">Address (Door No., Street/Area) <input required value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} placeholder="House no., street, area" /></label>
                <label>City<input required value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} placeholder="Your city" /></label>
                <label>State
                  <select value={form.state} onChange={e => setForm({ ...form, state: e.target.value })}>
                    <option>Tamil Nadu</option><option>Kerala</option><option>Karnataka</option><option>Andhra Pradesh</option><option>Other</option>
                  </select>
                </label>
                
                <button className="primary-button wide" type="submit">Save delivery details <ArrowRight size={17} /></button>
              </form>
            ) : (
              <div className="saved-address">
                <MapPin size={18} />
                <div><b>{form.name}</b><span>{form.phone}</span><span>{form.address}, {form.city}, {form.state} </span></div>
              </div>
            )}
            <div className="whatsapp-note">
              <Phone size={19} />
              <div><b>Simple, personal ordering</b><p>There&rsquo;s no online payment. We&rsquo;ll open a WhatsApp message with your complete order for you to review and send.</p></div>
            </div>
          </section>
          <aside className="summary">
            <span className="eyebrow">Your order</span>
            <h2>{lines.length} items</h2>
            {lines.map(line => (
              <div className="summary-item" key={line.product.id}>
                <img src={line.product.images[0]} alt="" />
                <span>{line.product.name}<small>Qty {line.quantity}</small></span>
                <b>{money(line.product.price * line.quantity)}</b>
              </div>
            ))}
            <hr />
            <div className="summary-total"><span>Total</span><b>{money(total)}</b></div>
            <button className="primary-button full" disabled={editing} onClick={confirm}>Confirm & open WhatsApp <Send size={17} /></button>
            {editing && <small className="summary-hint">Save delivery details to continue.</small>}
          </aside>
        </div>
      </main>
    </>
  );
}

export default Checkout;
