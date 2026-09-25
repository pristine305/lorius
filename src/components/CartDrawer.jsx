import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PRICE, inr } from '../config'
import { PRODUCTS, imageFor } from '../data/products'
import { useCart, usePreorderOpen } from '../context/CartContext'
import { useCountdown } from '../hooks'

export default function CartDrawer() {
  const { lines, count, subtotal, setQty, remove, drawerOpen, setDrawerOpen, add } = useCart()
  const open = usePreorderOpen()
  const left = useCountdown()
  const navigate = useNavigate()

  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && setDrawerOpen(false)
    addEventListener('keydown', esc)
    return () => removeEventListener('keydown', esc)
  }, [setDrawerOpen])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const inBag = lines.map((l) => l.id)
  const upsell = PRODUCTS.find((p) => !inBag.includes(p.id))

  return (
    <>
      <div className={`scrim${drawerOpen ? ' on' : ''}`} onClick={() => setDrawerOpen(false)} />
      <aside className={`drawer${drawerOpen ? ' on' : ''}`} aria-label="Bag" aria-hidden={!drawerOpen}>
        <div className="dhead">
          <h2>Your bag</h2>
          <button className="x" onClick={() => setDrawerOpen(false)} aria-label="Close bag">&times;</button>
        </div>

        <div className="dbody">
          {count === 0 ? (
            <div className="cart-empty">
              <p>Your bag is empty.</p>
              <Link className="btn btn-line" to="/shop" onClick={() => setDrawerOpen(false)}>Shop the collection</Link>
            </div>
          ) : lines.map((l) => (
            <div className="line" key={l.key}>
              <img src={imageFor(l.product, l.size)} alt="" />
              <div>
                <h3>{l.product.name}</h3>
                <p className="sz">{l.size} ml, eau de parfum</p>
                <div className="step">
                  <button onClick={() => setQty(l.key, -1)} aria-label={`One fewer ${l.product.name}`}>&minus;</button>
                  <span aria-label="Quantity">{l.qty}</span>
                  <button onClick={() => setQty(l.key, 1)} aria-label={`One more ${l.product.name}`}>+</button>
                </div>
              </div>
              <div className="rp">
                <b>{inr(l.lineTotal)}</b>
                <button className="rm" onClick={() => remove(l.key)}>Remove</button>
              </div>
            </div>
          ))}
        </div>

        {count > 0 && (
          <div className="dfoot">
            {upsell && (
              <div className="upsell">
                <img src={imageFor(upsell, '50')} alt="" />
                <div>
                  <h3>Add {upsell.name} in 20 ml</h3>
                  <p>{upsell.fam}, {inr(PRICE['20'])}</p>
                </div>
                <button onClick={() => add(upsell.id, '20')} disabled={!open}>Add</button>
              </div>
            )}
            <div className="sub"><span>Subtotal</span><b>{inr(subtotal)}</b></div>
            <p className="dfine">
              MRP inclusive of all taxes. Delivery from 23 October 2026.
              {open ? ' Pay by link after we confirm your order.' : ''}
            </p>
            <button
              className="btn btn-52 btn-block"
              disabled={!open}
              onClick={() => { setDrawerOpen(false); navigate('/checkout') }}
            >
              {open ? 'Place pre-order' : left ? `Opens in ${left.h}h ${left.m}m` : 'Opening now'}
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
