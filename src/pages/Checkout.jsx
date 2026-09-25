import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { inr, DELIVERY_FROM } from '../config'
import { imageFor } from '../data/products'
import { useCart, usePreorderOpen, placeOrder } from '../context/CartContext'

const FIELDS = [
  { k: 'name', label: 'Full name', type: 'text', autoComplete: 'name', placeholder: 'Your name' },
  { k: 'phone', label: 'Mobile number', type: 'tel', autoComplete: 'tel', placeholder: '10-digit mobile number' },
  { k: 'email', label: 'Email address', type: 'email', autoComplete: 'email', placeholder: 'you@example.com' },
  { k: 'address', label: 'Address', type: 'textarea', autoComplete: 'street-address', placeholder: 'Flat, building, street, area' },
  { k: 'city', label: 'City', type: 'text', autoComplete: 'address-level2', placeholder: 'City' },
  { k: 'state', label: 'State', type: 'text', autoComplete: 'address-level1', placeholder: 'State' },
  { k: 'pincode', label: 'PIN code', type: 'text', autoComplete: 'postal-code', placeholder: '6-digit PIN code' },
]

function validate(v) {
  const e = {}
  if (!v.name.trim() || v.name.trim().length < 2) e.name = 'Enter your full name'
  if (!/^[6-9]\d{9}$/.test(v.phone.replace(/\s|-/g, ''))) e.phone = 'Enter a 10-digit Indian mobile number'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Enter a valid email address'
  if (v.address.trim().length < 10) e.address = 'Enter the full address'
  if (!v.city.trim()) e.city = 'Enter your city'
  if (!v.state.trim()) e.state = 'Enter your state'
  if (!/^\d{6}$/.test(v.pincode.trim())) e.pincode = 'Enter a 6-digit PIN code'
  return e
}

const EMPTY = { name: '', phone: '', email: '', address: '', city: '', state: '', pincode: '' }

export default function Checkout() {
  const { lines, subtotal, count, clear } = useCart()
  const open = usePreorderOpen()
  const navigate = useNavigate()
  const [v, setV] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [busy, setBusy] = useState(false)

  const set = (k) => (e) => setV((p) => ({ ...p, [k]: e.target.value }))

  async function submit(e) {
    e.preventDefault()
    const errs = validate(v)
    setErrors(errs)
    if (Object.keys(errs).length) {
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus()
      return
    }
    setBusy(true)
    const order = await placeOrder({
      lines,
      subtotal,
      customer: {
        name: v.name.trim(),
        phone: v.phone.replace(/\s|-/g, ''),
        email: v.email.trim(),
        address: v.address.trim(),
        city: v.city.trim(),
        state: v.state.trim(),
        pincode: v.pincode.trim(),
      },
    })
    clear()
    navigate(`/order/${order.orderNo}`, { replace: true })
  }

  if (count === 0) {
    return (
      <div className="wrap sec">
        <div className="narrow">
          <h1 className="h1">Your bag is empty</h1>
          <p className="lede">Add a fragrance and it will appear here.</p>
          <p style={{ marginTop: 28 }}><Link className="btn" to="/shop">Shop the collection</Link></p>
        </div>
      </div>
    )
  }

  if (!open) {
    return (
      <div className="wrap sec">
        <div className="narrow">
          <h1 className="h1">Pre-orders open at 12 noon</h1>
          <p className="lede">Your bag is saved. Come back after 12 noon today to place the order.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="wrap sec">
      <h1 className="h1" style={{ marginBottom: 8 }}>Place your pre-order</h1>
      <p className="muted" style={{ marginBottom: 40 }}>
        No payment is taken here. We confirm your order and send a payment link. Deliveries begin {DELIVERY_FROM}.
      </p>

      <div className="checkout">
        <form onSubmit={submit} noValidate>
          <h2 className="h2" style={{ marginBottom: 20 }}>Your details</h2>
          {FIELDS.map((f) => (
            <div className={`field${errors[f.k] ? ' bad' : ''}`} key={f.k}>
              <label htmlFor={`f-${f.k}`}>{f.label}</label>
              {f.type === 'textarea' ? (
                <textarea id={`f-${f.k}`} rows="3" value={v[f.k]} onChange={set(f.k)}
                  placeholder={f.placeholder} autoComplete={f.autoComplete}
                  aria-invalid={!!errors[f.k]} aria-describedby={errors[f.k] ? `e-${f.k}` : undefined} />
              ) : (
                <input id={`f-${f.k}`} type={f.type} value={v[f.k]} onChange={set(f.k)}
                  placeholder={f.placeholder} autoComplete={f.autoComplete}
                  inputMode={f.k === 'phone' || f.k === 'pincode' ? 'numeric' : undefined}
                  aria-invalid={!!errors[f.k]} aria-describedby={errors[f.k] ? `e-${f.k}` : undefined} />
              )}
              {errors[f.k] && <span className="err" id={`e-${f.k}`}>{errors[f.k]}</span>}
            </div>
          ))}
          <button className="btn btn-52 btn-block" type="submit" disabled={busy} style={{ marginTop: 12 }}>
            {busy ? 'Placing your order' : `Place pre-order, ${inr(subtotal)}`}
          </button>
          <p className="muted" style={{ fontSize: 13, marginTop: 14 }}>
            By placing a pre-order you agree that we may contact you on this number and email about this order.
          </p>
        </form>

        <aside className="summary">
          <h2 className="h2" style={{ marginBottom: 20 }}>Your order</h2>
          {lines.map((l) => (
            <div className="line" key={l.key}>
              <img src={imageFor(l.product, l.size)} alt="" />
              <div>
                <h3>{l.product.name}</h3>
                <p className="sz">{l.size} ml &times; {l.qty}</p>
              </div>
              <div className="rp"><b>{inr(l.lineTotal)}</b></div>
            </div>
          ))}
          <div className="sub"><span>Total</span><b>{inr(subtotal)}</b></div>
          <p className="dfine">MRP inclusive of all taxes. Delivery charges, if any, are confirmed with your payment link.</p>
        </aside>
      </div>
    </div>
  )
}
