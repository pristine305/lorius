import { Link } from 'react-router-dom'
import { SOCIAL, SUPPORT_EMAIL } from '../config'
import { PRODUCTS } from '../data/products'
import { Instagram, Facebook, X, LinkedIn } from './Icons'
import { useCart } from '../context/CartContext'

export default function Footer() {
  const { setToast } = useCart()
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="signup">
          <div>
            <h3>Sign up for 10% off your first order</h3>
            <p>Early word on new fragrances, and first access when the full store opens.</p>
          </div>
          <form className="email-row" onSubmit={(e) => {
            e.preventDefault()
            const i = e.currentTarget.querySelector('input')
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.value.trim())) { setToast('Enter a valid email address'); return }
            i.value = ''
            setToast('You are on the list')
          }}>
            <label className="vh" htmlFor="footEmail">Email address</label>
            <input id="footEmail" type="email" placeholder="Email address" autoComplete="email" />
            <button className="btn" type="submit">Sign up</button>
          </form>
        </div>

        <div className="fcols">
          <div>
            <h4>Collections</h4>
            <ul>
              <li><Link to="/shop">All fragrances</Link></li>
              <li><Link to="/shop?cat=her">For her</Link></li>
              <li><Link to="/shop?cat=him">For him</Link></li>
              <li><Link to="/shop?cat=unisex">Unisex</Link></li>
            </ul>
          </div>
          <div>
            <h4>Fragrances</h4>
            <ul>{PRODUCTS.map((p) => <li key={p.id}><Link to={`/fragrance/${p.id}`}>{p.name}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Customer care</h4>
            <ul>
              <li><a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></li>
              <li><Link to="/about">Delivery and returns</Link></li>
              <li><Link to="/membership">The LORIUS list</Link></li>
            </ul>
          </div>
          <div>
            <h4>Our story</h4>
            <ul><li><Link to="/about">About LORIUS</Link></li></ul>
            <div className="social" aria-label="LORIUS on social media">
              <a href={SOCIAL.instagram} target="_blank" rel="noopener" aria-label="Instagram"><Instagram /></a>
              <a href={SOCIAL.facebook} target="_blank" rel="noopener" aria-label="Facebook"><Facebook /></a>
              <a href={SOCIAL.x} target="_blank" rel="noopener" aria-label="X"><X /></a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedIn /></a>
            </div>
          </div>
        </div>

        <div className="fbot">
          <span>Pre-order now. Deliveries from 23 October 2026.</span>
          <span>&copy; 2026 LORIUS Perfume. loriusperfume.com</span>
        </div>
      </div>
    </footer>
  )
}
