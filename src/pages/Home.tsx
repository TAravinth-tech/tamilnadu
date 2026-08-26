import { useState } from 'react';
import { ArrowRight, BadgeCheck, Heart, MapPin, PackageCheck, Send, Sparkles, ShieldCheck, ShoppingBag, ShoppingCart, Truck, WalletCards } from 'lucide-react';
import { images, products } from '@/data/site';
import { useCart } from '@/lib/cart-context';
import { SectionHeading } from '@/components/site/SectionHeading';
import { ProductCard } from '@/components/site/ProductCard';
import { Toast } from '@/components/site/Toast';
import { SiteLayout } from '@/components/site/SiteLayout';
import { CartProvider } from '@/lib/cart-context';
import "../styles.css";


function Home() {
  const { add } = useCart();
  const [toast, setToast] = useState('');
  const categories = [
    { name: 'Everyday spices', sub: 'Bold & aromatic', image: images.spices, query: 'Spices' },
    { name: 'Ready mixes', sub: 'Made easy', image: images.rustic, query: 'Ready Mixes' },
    { name: 'Gift boxes', sub: 'Made to share', image: images.kitchen, query: 'Gift Boxes' },
  ];
  return (
    <CartProvider>
      <SiteLayout current="home">
      <main>










       <section className="hero">
  <img
    src="/src/images/tng-hero-banner.png"
    alt="Tamil Nadu Global — premium products, rooted in tradition"
    className="hero-banner-img"
  />
</section>







        
        <section className="trust-strip">
          <span><PackageCheck size={20} /><b>Carefully packed</b><small>Every order, every time</small></span>
          <span><BadgeCheck size={20} /><b>Quality you can trust</b><small>Good food starts here</small></span>
          <span><Truck size={20} /><b>Delivered with care</b><small>Across India</small></span>
          <span><WalletCards size={20} /><b>Easy WhatsApp orders</b><small>Simple & personal</small></span>
        </section>


       <section className="container why">
          <SectionHeading kicker="Why TamilnaduGlobal" title="The good stuff, made simple" action="" />
          <div className="why-grid">
            <div><span className="why-icon"><BadgeCheck /></span><h3>Quality products</h3><p>Small-batch favourites chosen for freshness, flavour and trust.</p></div>
            <div><span className="why-icon"><Heart /></span><h3>Trusted service</h3><p>A friendly shopping experience from first click to delivery.</p></div>
            <div><span className="why-icon"><ShoppingBag /></span><h3>Easy ordering</h3><p>A thoughtful collection without the endless scrolling.</p></div>
            <div><span className="why-icon"><Send /></span><h3>WhatsApp support</h3><p>Real people, quick answers and orders made personal.</p></div>
          </div>
        </section>


        
        {/* <section className="container featured">
          <SectionHeading kicker="The edit" title="Loved by our community" />
          <div className="product-grid">
            {products.slice(0, 4).map(product => <ProductCard product={product} key={product.id} onAdd={() => { add(product); setToast(`${product.name} added to your cart`); }} />)}
          </div>
          {toast && <Toast message={toast} onClose={() => setToast('')} />}
        </section> */}




         <section className="container featured">
  <SectionHeading
    kicker="OUR PRODUCTS"
    title="Explore Our Product Categories"
  />

  <div className="category-header">
    
  </div>

  <div className="category-grid">
    <div className="category-card">
      <div className="category-image-wrap">
        <img
          src="/src/images/gro.png"
          alt="Groceries"
          className="category-image"
        />
      </div>

      <h3>Groceries</h3>
      <p>
        Daily essentials including food, spices, snacks, beverages, and more.
      </p>

      <a href="/shop/#/products" className="shop-link">
        Shop Now <span>→</span>
      </a>
    </div>

    <div className="category-card">
      <div className="category-image-wrap">
        <img
          src="/src/images/land.png"
          alt="Laundry Care"
          className="category-image"
        />
      </div>

      <h3>Laundry Care</h3>
      <p>
        Detergents, fabric conditioners, stain removers, and laundry essentials.
      </p>

      <a href="/shop/#/products" className="shop-link">
        Shop Now <span>→</span>
      </a>
    </div>

    <div className="category-card">
      <div className="category-image-wrap">
        <img
          src="/src/images/house.png"
          alt="Household Care"
          className="category-image"
        />
      </div>

      <h3>Household Care</h3>
      <p>
        Floor cleaners, dishwash liquids, toilet cleaners, and home care
        products.
      </p>

      <a href="/shop/#/products" className="shop-link">
        Shop Now <span>→</span>
      </a>
    </div>

    <div className="category-card">
      <div className="category-image-wrap">
        <img
          src="/src/images/person.png"
          alt="Personal Care"
          className="category-image"
        />
      </div>

      <h3>Personal Care</h3>
      <p>
        Handwash, soaps, personal hygiene, and everyday care essentials.
      </p>

      <a href="/shop/#/products" className="shop-link">
        Shop Now <span>→</span>
      </a>
    </div>
  </div>
</section>



















        
        <section className="promo container">
          <div>
            <span className="eyebrow">A pantry worth sharing</span>
            <h2>Good food is<br /><em>always in season.</em></h2>
            <p>Build a better pantry with handpicked ingredients and honest, regional flavours.</p>
            <a href={`/shop/#/products?category=${encodeURIComponent('Gift Boxes')}`} className="secondary-button">Discover gift boxes <ArrowRight size={17} /></a>
          </div>
          <div className="promo-image"><img src={images.kitchen} alt="Indian kitchen essentials" /><span>Made in<br /><b>India</b></span></div>
        </section>
       
        <section className="how container">
          <div className="how-intro"><span className="eyebrow">Simple by design</span><h2>From our shelf<br />to your table.</h2><p>Four easy steps to bring a little more goodness home.</p></div>
          <div className="steps">
            <div><b>01</b><ShoppingBag /><h3>Browse</h3><span>Find something delicious</span></div>
            <div><b>02</b><ShoppingCart /><h3>Add to cart</h3><span>Choose your favourites</span></div>
            <div><b>03</b><MapPin /><h3>Delivery details</h3><span>Tell us where to send it</span></div>
            <div><b>04</b><Send /><h3>WhatsApp order</h3><span>We&rsquo;ll take it from there</span></div>
          </div>
        </section>
      </main>
      </SiteLayout>
    </CartProvider>
  );
}

export default Home;
