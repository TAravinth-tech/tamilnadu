import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Search, X } from 'lucide-react';
import { products } from '@/data/site';
import { useCart } from '@/lib/cart-context';
import { ProductCard } from '@/components/site/ProductCard';
import { Toast } from '@/components/site/Toast';
import banner from "/src/images/tng-hero-banner.png";

function ProductsPage() {
  const { add } = useCart();
  const params = new URLSearchParams(useLocation().search);
  const [search, setSearch] = useState(params.get('search') || '');
  const [category, setCategory] = useState(params.get('category') || 'All');
  const [toast, setToast] = useState('');
  const categories = ['All', 'Personal Care', 'Household Care', 'Laundry Care', 'Groceries'];
  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (category === 'All' || p.category === category) &&
          p.name.toLowerCase().includes(search.toLowerCase())
      ),
    [category, search]
  );

  return (
    <>
      <main className="container listing">

        <section className="hero">
  <img
    src={banner}
    alt="Tamil Nadu Global — premium products, rooted in tradition"
    className="hero-banner-img"
  />
</section>


        {/* <div className="breadcrumbs"><a href="/">Home</a><ChevronRight size={14} /> Shop all</div> */}
        <br />
        <br />
        <br />
        
        <div className="listing-header">
          <div><span className="eyebrow">The collection</span><h1>Good things,<br /><em>well chosen.</em></h1></div>
          
        </div>
        <div className="listing-toolbar">
          <div className="filter-pills">{categories.map(item => <button className={category === item ? 'active' : ''} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div>
        </div>
        <div className="listing-search"><Search size={17} /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search the collection" />{search && <button onClick={() => setSearch('')}><X size={16} /></button>}</div>
        {filtered.length ? (
          <div className="product-grid listing-grid">{filtered.map(product => <ProductCard product={product} key={product.id} onAdd={() => { add(product); setToast(`${product.name} added to your cart`); }} />)}</div>
        ) : (
          <div className="empty"><Search size={35} /><h2>No matches just yet</h2><p>Try a different word or explore all of our collection.</p><button className="primary-button" onClick={() => { setSearch(''); setCategory('All'); }}>Show all products</button></div>
        )}
        {toast && <Toast message={toast} onClose={() => setToast('')} />}
      </main>
    </>
  );
}

export default ProductsPage;
