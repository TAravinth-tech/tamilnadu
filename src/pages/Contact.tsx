import { ArrowRight, Clock3, Mail, Phone } from 'lucide-react';
import { SiteLayout } from '@/components/site/SiteLayout';
import { CartProvider } from '@/lib/cart-context';

function Contact() {
  return (
    <CartProvider>
      <SiteLayout current="contact">
      <main className="contact-page">
        <section className="contact-hero">
          <span className="eyebrow">Come say hello</span>
          <h1>We&rsquo;re here to make<br /><em>good food easier.</em></h1>
          <p>Questions, recommendations or just want to say hi? Our team is always happy to help.</p>
        </section>
        <section className="container contact-grid">
          <div className="contact-info">
            <span className="eyebrow">Reach us directly</span>
            <h2>Let&rsquo;s talk.</h2>
            <div><span className="contact-icon"><Phone /></span><p><small>WhatsApp & phone</small><a href="tel:9360964448">93609 64448</a></p></div>
            <div><span className="contact-icon"><Mail /></span><p><small>Email us</small><a href="mailto:hello@tamilnaduglobal.in">hello@tamilnaduglobal.in</a></p></div>
            <div><span className="contact-icon"><Clock3 /></span><p><small>Support hours</small><b>Mon – Sat, 9am – 6pm</b></p></div>
          </div>
          <form className="contact-form" onSubmit={e => { e.preventDefault(); alert('Thank you. We will be in touch shortly.'); }}>
            <h2>Send us a note</h2>
            <label>Your name<input required placeholder="How should we call you?" /></label>
            <label>Email address<input required type="email" placeholder="you@example.com" /></label>
            <label>How can we help?<textarea required rows={4} placeholder="Tell us a little more..." /></label>
            <button className="primary-button" type="submit">Send message <ArrowRight size={17} /></button>
          </form>
        </section>
      </main>
      </SiteLayout>
    </CartProvider>
  );
}

export default Contact;
