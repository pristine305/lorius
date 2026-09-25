import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { asset } from '../config'
import { PRODUCTS } from '../data/products'
import { useCart, usePreorderOpen } from '../context/CartContext'
import { useScrolled } from '../hooks'
import { Search, Bag, Burger } from './Icons'
import SearchOverlay from './SearchOverlay'

export default function Header() {
  const { count, setDrawerOpen, setToast } = useCart()
  const open = usePreorderOpen()
  const stuck = useScrolled()
  const [menu, setMenu] = useState(false)
  const [mega, setMega] = useState(false)
  const [search, setSearch] = useState(false)
  const navigate = useNavigate()

  const shopTo = (params) => {
    setMega(false); setMenu(false)
    navigate(`/shop${params ? `?${params}` : ''}`)
  }

  return (
    <>
      <div className={`top${stuck ? ' stuck' : ''}`}>
        <div className="ann">
          {open
            ? <>Pre-orders are open. First deliveries from 23 October 2026.</>
            : <>Pre-orders open today at 12 noon. First deliveries from 23 October 2026.</>}
        </div>
        <header className="hdr">
          <div className="hdr-in">
            <Link to="/" className="logo" aria-label="LORIUS home" onClick={() => setMenu(false)}>
              <img src={asset('logo/favicon.png')} alt="" width="30" height="30" />
              <span>LORIUS</span>
            </Link>

            <nav className={`nav${menu ? ' on' : ''}`} aria-label="Main">
              <button className="x nav-close" onClick={() => setMenu(false)} aria-label="Close menu">&times;</button>
              <NavLink to="/shop" onClick={() => setMenu(false)}
                onMouseEnter={() => setMega(true)} onFocus={() => setMega(true)}>Shop</NavLink>
              <NavLink to="/about" onClick={() => setMenu(false)}>About</NavLink>
              <NavLink to="/membership" onClick={() => setMenu(false)}>Membership</NavLink>
            </nav>

            <div className="icons">
              <button onClick={() => setSearch(true)} aria-label="Search"><Search /></button>
              <button id="acctBtn" onClick={() => setToast('Accounts open with the full store')} aria-label="Account">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" /></svg>
              </button>
              <button onClick={() => setDrawerOpen(true)} aria-label={`Bag, ${count} ${count === 1 ? 'item' : 'items'}`}>
                <Bag /><span className="badge-n">{count}</span>
              </button>
              <button className="burger" onClick={() => setMenu(true)} aria-label="Open menu" aria-expanded={menu}><Burger /></button>
            </div>
          </div>
        </header>

        <div className={`mega${mega ? ' on' : ''}`} onMouseLeave={() => setMega(false)}>
          <div className="mega-in">
            <div>
              <h4>Shop all</h4>
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); shopTo('') }}>All fragrances</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); shopTo('size=20') }}>Try in 20 ml</a></li>
              </ul>
            </div>
            <div>
              <h4>The collection</h4>
              <ul>
                {PRODUCTS.map((p) => (
                  <li key={p.id}><Link to={`/fragrance/${p.id}`} onClick={() => setMega(false)}>{p.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Shop by</h4>
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); shopTo('cat=her') }}>For her</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); shopTo('cat=him') }}>For him</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); shopTo('cat=unisex') }}>Unisex</a></li>
              </ul>
            </div>
            <Link className="mega-feat" to="/fragrance/oud" onClick={() => setMega(false)}>
              <img src={asset('products/oud_100.webp')} alt="LORIUS Oud eau de parfum" />
              <p>Oud, oriental floral</p>
            </Link>
          </div>
        </div>
      </div>

      <SearchOverlay open={search} onClose={() => setSearch(false)} />
    </>
  )
}
