import { ArrowRight, BadgeCheck, ChevronRight, Send } from 'lucide-react';

function Confirmation() {
  return (
    <main className="confirmation">
      <div className="confirm-mark"><Send size={27} /></div>
      <span className="eyebrow">Your order is on its way</span>
      <h1>Almost done.</h1>
      <p>WhatsApp is ready with your order details. Just press <b>Send</b> to complete your order with our team.</p>
      <div className="confirm-steps">
        <span className="done"><BadgeCheck size={17} /> Order prepared</span>
        <span><ChevronRight size={16} /></span>
        <span><Send size={17} /> Send on WhatsApp</span>
      </div>
      <a href="https://wa.me/919360964448" target="_blank" rel="noreferrer" className="primary-button">Open WhatsApp <ArrowRight size={17} /></a>
      <a href="/shop/#/products" className="text-link">Continue browsing <ArrowRight size={16} /></a>
    </main>
  );
}

export default Confirmation;
