import { Link, useParams } from 'react-router-dom'
import { inr, DELIVERY_FROM, ORDER_ENDPOINT, SUPPORT_EMAIL } from '../config'
import { getOrder, whatsappOrderLink } from '../context/CartContext'

export default function OrderPlaced() {
  const { orderNo } = useParams()
  const order = getOrder(orderNo)

  if (!order) {
    return (
      <div className="wrap sec">
        <div className="narrow">
          <h1 className="h1">We can't find that order</h1>
          <p className="lede">Order {orderNo} isn't saved on this device. Email {SUPPORT_EMAIL} and we'll find it.</p>
          <p style={{ marginTop: 28 }}><Link className="btn" to="/shop">Back to the collection</Link></p>
        </div>
      </div>
    )
  }

  return (
    <div className="wrap sec">
      <div className="placed">
        <div className="tick" aria-hidden="true">
          <svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="23" fill="none" stroke="#A9864E" /><path d="M14 24.5l7 7 13-14" fill="none" stroke="#1E1E1E" strokeWidth="2" /></svg>
        </div>
        <h1 className="h1">Order placed successfully</h1>
        <p className="lede">
          We will get back to you online with a payment link. Your order is confirmed once payment is received,
          and deliveries begin {DELIVERY_FROM}.
        </p>

        <dl className="ordermeta">
          <div><dt>Order number</dt><dd>{order.orderNo}</dd></div>
          <div><dt>Total</dt><dd>{inr(order.total)}</dd></div>
          <div><dt>Name</dt><dd>{order.customer.name}</dd></div>
          <div><dt>Mobile</dt><dd>{order.customer.phone}</dd></div>
          <div><dt>Email</dt><dd>{order.customer.email}</dd></div>
          <div><dt>Deliver to</dt><dd>{order.customer.address}, {order.customer.city}, {order.customer.state} {order.customer.pincode}</dd></div>
        </dl>

        <table className="orderlines">
          <tbody>
            {order?.lines?.map((l) => (
              <tr key={l.id + l.size}>
                <td>{l.name} <span className="muted">{l.size} ml &times; {l.qty}</span></td>
                <td>{inr(l.lineTotal)}</td>
              </tr>
            ))}
            <tr className="tot"><td>Total</td><td>{inr(order.total)}</td></tr>
          </tbody>
        </table>

       
          <div className="sendbox">
            <p>Send us the order on WhatsApp so we can confirm it faster.</p>
            <a className="btn" href={whatsappOrderLink(order)} target="_blank" rel="noopener">Send on WhatsApp</a>
          </div>
       

        <p className="muted" style={{ marginTop: 32, fontSize: 14 }}>
          Keep your order number. Questions? Email {SUPPORT_EMAIL}.
        </p>
        <p style={{ marginTop: 24 }}><Link className="btn btn-line" to="/shop">Continue shopping</Link></p>
      </div>
    </div>
  )
}
