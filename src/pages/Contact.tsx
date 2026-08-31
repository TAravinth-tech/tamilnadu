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
            <div><span className="contact-icon"><Phone /></span><p><small>WhatsApp & phone</small><a href="tel:8489807630">84898 07630</a></p></div>
            <div><span className="contact-icon"><Mail /></span><p><small>Email us</small><a href="mailto:hello@tamilnaduglobal.in">hello@tamilnaduglobal.in</a></p></div>
            <div><span className="contact-icon"><Clock3 /></span><p><small>Support hours</small><b>Mon – Sat, 9am – 6pm</b></p></div>
          </div>
          <form
  className="contact-form"
  onSubmit={e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const whatsappMessage = `Hello Tamil Nadu Global,

Name: ${name}
Email: ${email}

How can we help:
${message}`;

    const whatsappUrl = `https://wa.me/918489807630?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
  }}
>
  <h2>Send us a note</h2>

  <label>
    Your name
    <input
      name="name"
      required
      placeholder="How should we call you?"
    />
  </label>

  <label>
    Email address
    <input
      name="email"
      required
      type="email"
      placeholder="you@example.com"
    />
  </label>

  <label>
    How can we help?
    <textarea
      name="message"
      required
      rows={4}
      placeholder="Tell us a little more..."
    />
  </label>

  <button className="primary-button" type="submit">
    Send message <ArrowRight size={17} />
  </button>
</form>
        </section>
      </main>
      </SiteLayout>
    </CartProvider>
  );
}

export default Contact;
