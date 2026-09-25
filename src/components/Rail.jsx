import { useRef } from 'react'
import ProductCard from './ProductCard'
import { Arrow } from './Icons'

export default function Rail({ title, subtitle, products, id }) {
  const ref = useRef(null)
  const go = (dir) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.75, behavior: 'smooth' })
  return (
    <>
      <div className="head-row">
        <div>
          <h2 className="h2" id={id}>{title}</h2>
          {subtitle && <p className="muted">{subtitle}</p>}
        </div>
        <div className="arrows">
          <button onClick={() => go(-1)} aria-label="Scroll back"><Arrow dir={-1} /></button>
          <button onClick={() => go(1)} aria-label="Scroll forward"><Arrow dir={1} /></button>
        </div>
      </div>
      <div className="rail" ref={ref}>
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </>
  )
}
