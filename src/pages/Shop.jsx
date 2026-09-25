import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import ProductCard from '../components/ProductCard'
import { PRICE, inr, SIZES } from '../config'

const CATS = [['her', 'For her'], ['him', 'For him'], ['unisex', 'Unisex']]
const FAMS = ['Floral', 'Fruity', 'Oriental', 'Woody', 'Fresh', 'Gourmand']

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const [open, setOpen] = useState(false)

  const cats = params.getAll('cat')
  const fams = params.getAll('fam')
  const size = params.get('size') || '100'
  const sort = params.get('sort') || 'featured'

  const toggle = (key, value) => {
    const next = new URLSearchParams(params)
    const have = next.getAll(key)
    next.delete(key)
    const after = have.includes(value) ? have.filter((v) => v !== value) : [...have, value]
    after.forEach((v) => next.append(key, v))
    setParams(next, { replace: true })
  }
  const setOne = (key, value) => {
    const next = new URLSearchParams(params)
    next.set(key, value)
    setParams(next, { replace: true })
  }
  const clear = () => { setParams(new URLSearchParams(), { replace: true }); setOpen(false) }

  const list = useMemo(() => {
    let out = PRODUCTS.filter((p) =>
      (cats.length === 0 || cats.includes(p.cat)) &&
      (fams.length === 0 || p.fams.some((f) => fams.includes(f))))
    if (sort === 'az') out = [...out].sort((a, b) => a.name.localeCompare(b.name))
    else if (sort === 'new') out = [...out].sort((a, b) => b.order - a.order)
    else out = [...out].sort((a, b) => a.order - b.order)
    return out
  }, [params])

  const title = cats.length === 1 ? CATS.find((c) => c[0] === cats[0])[1] : 'All fragrances'

  return (
    <div className="wrap sec">
      <div className="shop-head">
        <div>
          <h1 className="h1">{title}</h1>
          <p className="muted">{list.length} {list.length === 1 ? 'fragrance' : 'fragrances'}, shown in {size} ml</p>
        </div>
        <label>
          <span className="vh">Sort by</span>
          <select className="sortsel" value={sort} onChange={(e) => setOne('sort', e.target.value)}>
            <option value="featured">Featured</option>
            <option value="az">Name, A to Z</option>
            <option value="new">Newest</option>
          </select>
        </label>
      </div>

      <div className="fbar"><button className="btn btn-line btn-block" onClick={() => setOpen(true)}>Filter</button></div>

      <div className="shop-body">
        <aside className={`filters${open ? ' open' : ''}`} aria-label="Filters">
          <button className="x filters-close" onClick={() => setOpen(false)} aria-label="Close filters">&times;</button>
          <div className="fgroup">
            <h4>Category</h4>
            {CATS.map(([v, label]) => (
              <label className="fopt" key={v}>
                <input type="checkbox" checked={cats.includes(v)} onChange={() => toggle('cat', v)} /> {label}
              </label>
            ))}
          </div>
          <div className="fgroup">
            <h4>Scent family</h4>
            {FAMS.map((f) => (
              <label className="fopt" key={f}>
                <input type="checkbox" checked={fams.includes(f)} onChange={() => toggle('fam', f)} /> {f}
              </label>
            ))}
          </div>
          <div className="fgroup" style={{ borderBottom: 0 }}>
            <h4>Size</h4>
            {SIZES.map((s) => (
              <label className="fopt" key={s}>
                <input type="radio" name="sz" checked={size === s} onChange={() => setOne('size', s)} /> {s} ml, {inr(PRICE[s])}
              </label>
            ))}
          </div>
          <button className="btn btn-line btn-block" onClick={clear}>Clear filters</button>
        </aside>

        <div>
          <div className="pgrid">
            {list.length === 0
              ? <p className="empty-note">No fragrances match these filters. <button className="tlink" onClick={clear}>Clear filters</button></p>
              : list.map((p) => <ProductCard key={p.id} product={p} size={size} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
