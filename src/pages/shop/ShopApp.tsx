import { HashRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from '@/lib/cart-context';
import { SiteLayout } from '@/components/site/SiteLayout';
import ProductsPage from './ProductsPage';
import ProductDetails from './ProductDetails';
import CartPage from './CartPage';
import Checkout from './Checkout';
import Confirmation from './Confirmation';

function ShopApp() {
  return (
    <HashRouter>
      <CartProvider>
        <Routes>
          <Route path="/products" element={<SiteLayout current="shop"><ProductsPage /></SiteLayout>} />
          <Route path="/products/:slug" element={<SiteLayout current="shop"><ProductDetails /></SiteLayout>} />
          <Route path="/cart" element={<SiteLayout current="shop"><CartPage /></SiteLayout>} />
          <Route path="/checkout" element={<SiteLayout current="shop"><Checkout /></SiteLayout>} />
          <Route path="/order-confirmation" element={<SiteLayout current="shop"><Confirmation /></SiteLayout>} />
          <Route path="*" element={<SiteLayout current="shop"><ProductsPage /></SiteLayout>} />
        </Routes>
      </CartProvider>
    </HashRouter>
  );
}

export default ShopApp;
