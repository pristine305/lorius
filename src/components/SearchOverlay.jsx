import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { PRICE, inr, asset } from '../config'
import { PRODUCTS } from '../data/products'

export default function SearchOverlay({ open, onClose }) {
  const [q, setQ] = useState('')
  const input = useRef(null)

  useEffect(() => { if (open) setTimeout(() => input.current?.focus(), 200) }, [open])
  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && onClose()
    addEventListener('keydown', esc)
    return () => removeEventListener('keydown', esc)
  }, [onClose])

  const term = q.trim().toLowerCase()
  const results = !term
    ? PRODUCTS.slice(0, 4)
    : PRODUCTS.filter((p) => {
        const hay = [p.name, p.who, p.fam, p.short, p.notes.top, p.notes.heart, p.notes.base,
          term.includes('ml') ? '20 ml 50 ml 100 ml' : ''].join(' ').toLowerCase()
        return term.split(/\s+/).every((w) => hay.includes(w))
      })

  return (
    <div className={`search${open ? ' on' : ''}`} role="dialog" aria-label="Search" aria-hidden={!open}>
      <div className="wrap">
        <div className="sin">
          <label className="vh" htmlFor="sInput">Search fragrances</label>
          <input id="sInput" ref={input} type="search" placeholder="Search fragrances"
            value={q} onChange={(e) => setQ(e.target.value)} autoComplete="off" />
          <button className="x" onClick={onClose} aria-label="Close search">&times;</button>
        </div>
        <div className="sres">
          <div>
            <h2>Popular searches</h2>
            <div className="pop">
              {['Oud', 'For her', 'For him', 'Fresh', 'Rose', '20 ml'].map((t) => (
                <a key={t} href="#" onClick={(e) => { e.preventDefault(); setQ(t) }}>{t}</a>
              ))}
            </div>
          </div>
          <div>
            <h2>{term ? 'Results' : 'The collection'}</h2>
            <div className="trend">
              {results.length === 0 && <p className="muted">No fragrance matches that. Try a note, like rose or amber.</p>}
              {results.map((p) => (
                <Link key={p.id} to={`/fragrance/${p.id}`} onClick={onClose}>
                  <img src={asset(`products/${p.id}_100.webp`)} alt="" />
                  <span><b>{p.name}</b><span>{p.who}, from {inr(PRICE['20'])}</span></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
