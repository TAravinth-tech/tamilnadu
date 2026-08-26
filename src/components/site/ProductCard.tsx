import { useState } from 'react';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import type { Product } from '@/data/site';
import { money } from '@/data/site';

export function ProductCard({ product, onAdd, hrefPrefix = '/shop/#' }: { product: Product; onAdd?: (product: Product) => void; hrefPrefix?: string }) {
  const [liked, setLiked] = useState(false);
  const detailHref = `${hrefPrefix}/products/${product.slug}`;
  return (
    <article className="product-card">
      <a href={detailHref} className="product-image">
        <img src={product.images[0]} alt={product.name} />
        {/* <span className="discount">-{product.discount}%</span> */}
        {/* <button className={`heart ${liked ? 'liked' : ''}`} onClick={e => { e.preventDefault(); setLiked(!liked); }} aria-label="Save product"><Heart size={17} fill={liked ? 'currentColor' : 'none'} /></button> */}
      </a>
      <div className="product-copy">
        <span className="eyebrow">{product.category}</span>
        <a href={detailHref}><h3>{product.name}</h3></a>
        <div className="rating"><Star size={13} fill="currentColor" /> 4.8 <span>(24)</span></div>
        <div className="product-price"><b>{money(product.price)}</b><del>{money(product.originalPrice)}</del></div>
        <button className="add-button" onClick={() => onAdd?.(product)}><ShoppingBag size={15} /> Add to cart</button>
      </div>
    </article>
  );
}
