import { asset, DELIVERY_FROM } from '../config'
import { useCart } from '../context/CartContext'

const BENEFITS = [
  ['First access', 'You hear before anyone else when a new fragrance is ready.'],
  ['10% off your first order', 'A code sent to your inbox when you join.'],
  ['Order updates', 'We tell you when your pre-order ships.'],
]

export default function Membership() {
  const { setToast } = useCart()
  return (
    <section className="sec">
      <div className="narrow">
        <h1 className="h1">The LORIUS list</h1>
        <p className="lede">Free to join. Pre-orders are open now, with first deliveries from {DELIVERY_FROM}.</p>
      </div>
      <div className="wrap bene">
        {BENEFITS.map(([h, p]) => (
          <div key={h}>
            <img src={asset('logo/favicon.png')} alt="" width="64" height="64" />
            <h3>{h}</h3><p>{p}</p>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 52 }}>
        <form onSubmit={(e) => {
          e.preventDefault()
          const i = e.currentTarget.querySelector('input')
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.value.trim())) { setToast('Enter a valid email address'); return }
          i.value = ''; setToast('You are on the list')
        }} className="email-row" style={{ justifyContent: 'center' }}>
          <label className="vh" htmlFor="memberEmail">Email address</label>
          <input id="memberEmail" type="email" placeholder="Email address" autoComplete="email" />
          <button className="btn" type="submit">Join the list</button>
        </form>
      </div>
    </section>
  )
}
