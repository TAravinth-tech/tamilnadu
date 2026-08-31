import { ArrowRight, BadgeCheck, Globe2, Heart, MapPin, PackageCheck, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import { images } from '@/data/site';
import { SiteLayout } from '@/components/site/SiteLayout';
import { CartProvider } from '@/lib/cart-context';
import kitchen from "/src/images/kitchen.png";
import kitchen2 from "/src/images/kitchen2.png";

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

  // Add all your product advertisement video URLs here — grid is fixed at 3 columns
  const videos = [
    { src: 'https://videotourl.com/videos/1788179317548-c20f3728-545e-49c0-8bd3-8b4513589fda.mp4', title: 'See how we pack every order' },
    { src: 'https://videotourl.com/videos/1788180056850-c95ee162-5a4e-498f-b630-bb2f491224ee.mp4', title: 'Discover our kitchen' },
    { src: 'https://videotourl.com/videos/1788180112639-fbe02412-da22-453d-812a-9a7c608693a9.mp4', title: 'Learn about our ingredients' },
    { src: 'https://videotourl.com/videos/1788180154879-bb7847ab-130c-4843-9540-34863d962ed4.mp4', title: 'Meet our team' },
    { src: 'https://videotourl.com/videos/1788180195879-4e735b8d-bdf8-4ff4-adcd-e98e9b74c95c.mp4', title: 'Our commitment to quality' },
    { src: 'https://videotourl.com/videos/1788180217112-b1c2e191-b8bb-4f9a-b05a-87d07f63a8f7.mp4', title: 'Our sustainability efforts' },
    { src: 'https://videotourl.com/videos/1788180508086-ecc64e7a-c03d-4c30-b471-4c950716519a.mp4', title: 'Our community impact' },
    { src: 'https://videotourl.com/videos/1788180698296-30a96b50-fc6c-439a-a9fb-5987a3586b8b.mp4', title: 'Our story' },
    { src: 'https://videotourl.com/videos/1788180898240-517e0bbb-b34e-46a5-b7fb-31fd46377731.mp4', title: 'Our journey' },
    { src: 'https://videotourl.com/videos/1788180936866-da544185-7583-40fd-bbf3-97998c0e47af.mp4', title: 'Our vision' },
    { src: 'https://videotourl.com/videos/1788180984267-bfdfea09-fb12-492b-8994-213108d66729.mp4', title: 'Our future' },
    // { src: '...', title: '...' },
    // { src: '...', title: '...' },
    // add up to 9 (or more — it will just wrap into further rows of 3)
  ];

  return (
    <CartProvider>
      <SiteLayout current="about">
      <main className="about-page">

        <section className="container videos">
  <div className="section-heading">
    <div>
      <br />
      <br />
      <br />
      <span className="eyebrow">See it for yourself</span>
      <h2>Our products, in action</h2>
    </div>
  </div>
  <div className="videos-grid">
    {videos.map(video => (
      <div className="video-card" key={video.src}>
        <video
          src={video.src}
          controls
          preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {video.title && <p className="video-caption">{video.title}</p>}
      </div>
    ))}
  </div>
</section>

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
            <img src={kitchen} alt="A Tamil Nadu kitchen with fresh ingredients" />
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
          <div className="promo-image"><img src={kitchen2} alt="Fresh spices and ingredients" /></div>
        </section>
      </main>
      </SiteLayout>
    </CartProvider>
  );
}
export default About;
