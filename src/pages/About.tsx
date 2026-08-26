import { ArrowRight, BadgeCheck, Globe2, Heart, MapPin, PackageCheck, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import { images } from '@/data/site';
import { SiteLayout } from '@/components/site/SiteLayout';
import { CartProvider } from '@/lib/cart-context';

function About() {
  const values = [
    { icon: <BadgeCheck />, title: 'Quality, always', text: 'Every product is chosen for freshness, flavour and trust before it ever reaches our shelves.' },
    { icon: <Heart />, title: 'Made with care', text: 'We pack every order the way we would for our own family, with attention to the small details.' },
    { icon: <Truck />, title: 'Delivered honestly', text: 'No hidden charges, no confusing checkouts — just a simple WhatsApp order, confirmed by a real person.' },
    { icon: <Globe2 />, title: 'Rooted in Tamil Nadu', text: 'We work directly with local growers and makers to bring authentic, regional flavours to your kitchen.' },
  ];
  const milestones = [
    { year: '2019', text: 'Started as a small home-run spice stall, sourcing directly from Erode and Salem farmers.' },
    { year: '2021', text: 'Grew into a curated pantry brand, adding ready-mixes and gift hampers loved across South India.' },
    { year: '2023', text: 'Began shipping pan-India, keeping the same personal, WhatsApp-first ordering experience.' },
    { year: '2026', text: 'A growing community of home cooks who trust us for the good things, well chosen.' },
  ];
  return (
    <CartProvider>
      <SiteLayout current="about">
      <main className="about-page">
        <section className="contact-hero">
          <span className="eyebrow"><Sparkles size={14} style={{ verticalAlign: '-2px', marginRight: 6 }} />Our story</span>
          <h1>Good food, good people,<br /><em>good intentions.</em></h1>
          <p>TamilnaduGlobal started with a simple idea: bring the honest, aromatic flavours of a Tamil Nadu kitchen to homes everywhere, without losing the personal touch.</p>
        </section>

        <section className="container about-intro">
          <div className="about-intro-copy">
            <span className="eyebrow">Who we are</span>
            <h2>A pantry brand built<br /><em>around trust.</em></h2>
            <p>We&rsquo;re a small, dedicated team based in Tamil Nadu, working with local farmers, spice growers and home cooks to put together a pantry that feels both familiar and thoughtfully curated. Every product on TamilnaduGlobal is picked, tested and packed with the same care we&rsquo;d want for our own kitchens.</p>
            <p>There&rsquo;s no faceless warehouse behind our orders — just a small team that reads every WhatsApp message and genuinely wants your next meal to taste a little more like home.</p>
            <a href="/shop/#/products" className="primary-button">Explore our collection <ArrowRight size={17} /></a>
          </div>
          <div className="about-intro-image">
            <img src={images.kitchen} alt="A Tamil Nadu kitchen with fresh ingredients" />
            <div className="hero-card"><span>Since</span><strong>2019</strong><small>Small beginnings, big flavour</small></div>
          </div>
        </section>

        <section className="container why">
          <div className="section-heading"><div><span className="eyebrow">What we stand for</span><h2>The values behind every order</h2></div></div>
          <div className="why-grid">
            {values.map(value => (
              <div key={value.title}><span className="why-icon">{value.icon}</span><h3>{value.title}</h3><p>{value.text}</p></div>
            ))}
          </div>
        </section>

       

        

        <section className="promo container">
          <div>
            <span className="eyebrow">Want to know more?</span>
            <h2>We&rsquo;d love to<br /><em>hear from you.</em></h2>
            <p>Questions about a product, a bulk order, or just want to say hello? We&rsquo;re one message away.</p>
            <a href="/contact/" className="secondary-button">Get in touch <ArrowRight size={17} /></a>
          </div>
          <div className="promo-image"><img src={images.ingredients} alt="Fresh spices and ingredients" /><span>Good things,<br /><b>well chosen</b></span></div>
        </section>
      </main>
      </SiteLayout>
    </CartProvider>
  );
}

export default About;
