import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BadgeCheck, ChevronRight, ShieldCheck, ShoppingBag, Star, Truck } from 'lucide-react';
import { money, products } from '@/data/site';
import { useCart } from '@/lib/cart-context';
import { SectionHeading } from '@/components/site/SectionHeading';
import { ProductCard } from '@/components/site/ProductCard';
import { Quantity } from '@/components/site/Quantity';
import { Toast } from '@/components/site/Toast';

function ProductDetails() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug) || products[0];
  const { add } = useCart();
  const [quantity, setQuantity] = useState(1);
  // const [active, setActive] = useState(0);
  const [toast, setToast] = useState('');

  useEffect(() => {
    document.title = `${product.name} | TamilnaduGlobal`;
    return () => { document.title = 'TamilnaduGlobal | Good things, well chosen.'; };
  }, [product]);

  return (
    <>
      <main className="container detail">
        <div className="breadcrumbs"><a href="/">Home</a><ChevronRight size={14} /><a href="/shop/#/products">Shop all</a><ChevronRight size={14} /> {product.name}</div>
        <div className="detail-grid">
          <div className="gallery">
  <div className="main-image">
    <img src={product.images[0]} alt={product.name} />
    
  </div>
</div>
          <div className="detail-copy">
            <span className="eyebrow">{product.category}</span>
            <h1>{product.name}</h1>
            <div className="detail-rating"><span><Star size={15} fill="currentColor" /> 4.8</span> </div>

            <div className="detail-price">
  <b>{money(product.price)}</b>
  <del>{money(product.originalPrice)}</del>

  <span className="offer-badge">
    🏷️ Offer
  </span>
</div>


            <p className="lead">{product.description}</p>
            
            <div className="buy-row">
              <Quantity value={quantity} onChange={setQuantity} />
              <button className="primary-button" onClick={() => { for (let i = 0; i < quantity; i++) add(product); setToast(`${product.name} added to your cart`); }}>Add to cart <ShoppingBag size={18} /></button>
            </div>
            <div className="detail-perks"><span><Truck size={18} /><b>Pan-India delivery</b><small>Safe & reliable</small></span><span><ShieldCheck size={18} /><b>Quality assured</b><small>Selected with care</small></span></div>
          </div>
        </div>
        <div className="">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          
          
        </div>
      </main>
      <section className="related container">
        <SectionHeading kicker="You may also like" title="Complete the pantry" />
        <div className="product-grid">{products.filter(p => p.id !== product.id).slice(0, 4).map(p => <ProductCard product={p} key={p.id} onAdd={() => { add(p); setToast(`${p.name} added to your cart`); }} />)}</div>
      </section>
      {toast && <Toast message={toast} onClose={() => setToast('')} />}
    </>
  );
}

export default ProductDetails;
