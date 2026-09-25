import { Link } from 'react-router-dom'
import { PRICE, inr } from '../config'
import { imageFor } from '../data/products'
import { useCart, usePreorderOpen } from '../context/CartContext'

export default function ProductCard({ product, size = '100' }) {
  const { add } = useCart()
  const open = usePreorderOpen()
  const other = size === '100' ? '50' : '100'
  return (
    <article className="pcard">
      <Link className="ph" to={`/fragrance/${product.id}?size=${size}`} aria-label={`${product.name}, ${product.who}`}>
        <span className="tag">Pre-order</span>
        <img className="main" src={imageFor(product, size)} alt={`LORIUS ${product.name} eau de parfum, ${size} ml`} loading="lazy" />
        <img className="alt" src={imageFor(product, other)} alt="" loading="lazy" />
      </Link>
      <div className="meta">
        <h3><Link to={`/fragrance/${product.id}?size=${size}`}>{product.name}</Link></h3>
        <p className="fam">{product.fam}</p>
        <p className="pr">{size === '100' ? `From ${inr(PRICE['20'])}` : `${inr(PRICE[size])} for ${size} ml`}</p>
        <button
          className="add"
          onClick={() => add(product.id, size)}
          disabled={!open}
          title={open ? undefined : 'Pre-orders open at 12 noon today'}
        >
          {open ? `Pre-order ${size} ml, ${inr(PRICE[size])}` : 'Opens at 12 noon'}
        </button>
      </div>
    </article>
  )
}
