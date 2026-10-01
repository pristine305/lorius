import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Checkout from './pages/Checkout'
import OrderPlaced from './pages/OrderPlaced'
import About from './pages/About'
import Membership from './pages/Membership'
import { POLICIES } from './pages/policies'
import { useCart } from './context/CartContext'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  const { toast } = useCart()
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <ScrollToTop />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/fragrance/:id" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order/:orderNo" element={<OrderPlaced />} />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership />} />
           {/* Policy pages. Routes come from one list, so adding a policy needs one entry. */}
          {POLICIES.map(({ slug, Component }) => (
            <Route key={slug} path={`/${slug}`} element={<Component />} />
          ))}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
      <div className={`toast${toast ? ' on' : ''}`} role="status" aria-live="polite">{toast}</div>
    </>
  )
}
