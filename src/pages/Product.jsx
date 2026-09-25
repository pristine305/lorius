import { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { PRICE, SIZES, inr, asset, DELIVERY_FROM } from '../config'
import { findProduct, imageFor, PRODUCTS } from '../data/products'
import { useCart, usePreorderOpen } from '../context/CartContext'
import AutoVideo from '../components/AutoVideo'
import Rail from '../components/Rail'

function Ring({ rings }) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="58" fill="#fff" stroke="#E6E3DE" />
      {Array.from({ length: rings }).map((_, i) => (
        <circle key={i} cx="60" cy="60" r={16 + i * 14} fill="none" stroke="#A9864E" strokeWidth="1.2" />
      ))}
    </svg>
  )
}

export default function Product() {
  const { id } = useParams()
  const [params] = useSearchParams()
  const product = findProduct(id)
  const { add } = useCart()
  const open = usePreorderOpen()
  const [size, setSize] = useState(params.get('size') && PRICE[params.get('size')] ? params.get('size') : '100')
  const [shot, setShot] = useState(0)
  const [acc, setAcc] = useState(null)

  useEffect(() => { setSize('100'); setShot(0); setAcc(null) }, [id])

  if (!product) {
    return (
      <div className="wrap sec"><div className="narrow">
        <h1 className="h1">Fragrance not found</h1>
        <p style={{ marginTop: 24 }}><Link className="btn" to="/shop">Back to the collection</Link></p>
      </div></div>
    )
  }

  const shots = [
    { src: imageFor(product, size), alt: `LORIUS ${product.name}, ${size} ml` },
    { src: imageFor(product, size === '100' ? '50' : '100'), alt: `LORIUS ${product.name}, other size` },
    ...(product.video ? [{ src: asset(`video/${product.video === 'hero' ? 'aqua_hero' : 'noir_film'}_poster.jpg`), alt: `LORIUS ${product.name} campaign` }] : []),
  ]
  const current = shots[Math.min(shot, shots.length - 1)]

  const rows = [
    ['Fragrance notes', (
      <>
        <dl>
          <dt>Top</dt><dd>{product.notes.top}</dd>
          <dt>Heart</dt><dd>{product.notes.heart}</dd>
          <dt>Base</dt><dd>{product.notes.base}</dd>
        </dl>
        <p style={{ marginTop: 12 }}>{product.long}</p>
      </>
    )],
    ['How to wear', <p>Spray onto pulse points from about 15 cm: wrists, the base of the neck, behind the ears. Let it dry on the skin rather than rubbing it in.</p>],
    ['Ingredients', <p>The full ingredient and allergen list is printed on the carton. For external use only. Keep away from heat and flame.</p>],
    ['Delivery and returns', <p>Pre-orders are delivered from {DELIVERY_FROM}. We confirm your order and send a payment link before dispatch. Delivery charges and the returns policy are confirmed with that link.</p>],
  ]

  return (
    <>
      <div className="wrap sec">
        <div className="pdp">
          <div className="gal">
            <div className="thumbs" role="group" aria-label="Product images">
              {shots.map((s, i) => (
                <button key={i} aria-pressed={i === shot} onClick={() => setShot(i)} aria-label={`View image ${i + 1}`}>
                  <img src={s.src} alt="" />
                </button>
              ))}
            </div>
            <div className="gmain"><img src={current.src} alt={current.alt} /></div>
          </div>

          <div className="pinfo">
            <h1 className="h1">{product.name}</h1>
            <p className="fam">{product.fam}. {product.who}.</p>
            <p className="price">{inr(PRICE[size])} for {size} ml</p>
            <p className="tax">MRP, inclusive of all taxes</p>

            <div className="sizes" role="radiogroup" aria-label="Size">
              {SIZES.map((s) => (
                <button key={s} className="size" role="radio" aria-checked={s === size}
                  onClick={() => { setSize(s); setShot(0) }}>{s} ml</button>
              ))}
            </div>
            {size === '20' && <p className="size-note">Pictured: the 50 ml bottle.</p>}

            <button className="btn btn-52 btn-block" disabled={!open} onClick={() => add(product.id, size)}>
              {open ? `Pre-order ${size} ml` : 'Pre-orders open at 12 noon'}
            </button>
            <p className="short">{product.short}</p>

            <div className="acc">
              {rows.map(([label, body], i) => (
                <div className="acc-row" key={label} data-open={acc === i}>
                  <button aria-expanded={acc === i} onClick={() => setAcc(acc === i ? null : i)}>
                    {label}<span className="pm" aria-hidden="true">+</span>
                  </button>
                  <div className="acc-body" style={{ maxHeight: acc === i ? 600 : 0 }}>
                    <div>{body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="sec mist">
        <div className="wrap">
          <h2 className="h2" style={{ textAlign: 'center', marginBottom: 48 }}>How it unfolds</h2>
          <div className="notes3">
            <div><Ring rings={1} /><h3>Top notes</h3><p>{product.notes.top}</p></div>
            <div><Ring rings={2} /><h3>Heart notes</h3><p>{product.notes.heart}</p></div>
            <div><Ring rings={3} /><h3>Base notes</h3><p>{product.notes.base}</p></div>
          </div>
        </div>
      </section>

      {product.video ? (
        <section className="ebanner" aria-hidden="true">
          <AutoVideo src={asset(`video/${product.video === 'hero' ? 'aqua_hero' : 'noir_film'}.mp4`)}
            poster={asset(`video/${product.video === 'hero' ? 'aqua_hero' : 'noir_film'}_poster.jpg`)} label="" />
        </section>
      ) : (
        <section className="ebanner type" aria-hidden="true">
          <div><div className="big">{product.name}</div><p>{product.short}</p></div>
          <img src={imageFor(product, '100')} alt="" />
        </section>
      )}

      <section className="sec">
        <div className="wrap">
          <h2 className="h2">Reviews</h2>
          <p className="rev-empty">No reviews yet. Reviews open once the first pre-orders are delivered from {DELIVERY_FROM}.</p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Rail title="You may also like" products={PRODUCTS.filter((p) => p.id !== product.id)} />
        </div>
      </section>
    </>
  )
}
