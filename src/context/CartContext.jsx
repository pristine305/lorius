import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { PRICE, ORDER_ENDPOINT, WHATSAPP_NUMBER, PREORDER_OPENS, DELIVERY_FROM, inr } from '../config'
import { findProduct } from '../data/products'

const CART_KEY = 'lorius_cart_v1'
const ORDERS_KEY = 'lorius_orders_v1'

const Ctx = createContext(null)
export const useCart = () => useContext(Ctx)

const read = (k, fallback) => {
  try {
    const v = localStorage.getItem(k)
    return v ? JSON.parse(v) : fallback
  } catch {
    return fallback
  }
}
const write = (k, v) => {
  try {
    localStorage.setItem(k, JSON.stringify(v))
  } catch {
    /* private mode: cart simply won't survive a refresh */
  }
}

/** Are pre-orders open yet? Re-checked every 20s so the site opens by itself at noon. */
export function usePreorderOpen() {
  const [open, setOpen] = useState(() => Date.now() >= PREORDER_OPENS.getTime())
  useEffect(() => {
    if (open) return
    const t = setInterval(() => {
      if (Date.now() >= PREORDER_OPENS.getTime()) setOpen(true)
    }, 20000)
    return () => clearInterval(t)
  }, [open])
  return open
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => read(CART_KEY, []))
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [toast, setToast] = useState('')

  useEffect(() => write(CART_KEY, items), [items])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(''), 2600)
    return () => clearTimeout(t)
  }, [toast])

  const add = useCallback((id, size = '100', qty = 1) => {
    const key = `${id}-${size}`
    setItems((prev) => {
      const hit = prev.find((l) => l.key === key)
      return hit
        ? prev.map((l) => (l.key === key ? { ...l, qty: l.qty + qty } : l))
        : [...prev, { key, id, size, qty }]
    })
    setDrawerOpen(true)
  }, [])

  const setQty = useCallback((key, delta) => {
    setItems((prev) =>
      prev
        .map((l) => (l.key === key ? { ...l, qty: l.qty + delta } : l))
        .filter((l) => l.qty > 0),
    )
  }, [])

  const remove = useCallback((key) => setItems((prev) => prev.filter((l) => l.key !== key)), [])
  const clear = useCallback(() => setItems([]), [])

  const lines = useMemo(
    () =>
      items
        .map((l) => {
          const product = findProduct(l.id)
          if (!product) return null
          const unit = PRICE[l.size]
          return { ...l, product, unit, lineTotal: unit * l.qty }
        })
        .filter(Boolean),
    [items],
  )

  const count = lines.reduce((n, l) => n + l.qty, 0)
  const subtotal = lines.reduce((n, l) => n + l.lineTotal, 0)

  const value = {
    items, lines, count, subtotal,
    add, setQty, remove, clear,
    drawerOpen, setDrawerOpen,
    toast, setToast,
  }
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

/* ------------------------------ placing an order ------------------------------ */

function orderNumber() {
  const d = new Date()
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `LRS-${ymd}-${rand}`
}

export function whatsappOrderLink(order) {
  const rows = order.lines.map((l) => `${l.qty} x ${l.name} ${l.size} ml - ${inr(l.lineTotal)}`)
  const text = [
    `Pre-order ${order.orderNo}`,
    '',
    ...rows,
    '',
    `Total: ${inr(order.total)}`,
    '',
    `Name: ${order.customer.name}`,
    `Phone: ${order.customer.phone}`,
    `Email: ${order.customer.email}`,
    `Address: ${order.customer.address}, ${order.customer.city} ${order.customer.pincode}`,
  ].join('\n')
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

/**
 * Builds the order, stores it locally so nothing is ever lost, and POSTs it to
 * ORDER_ENDPOINT when one is configured. Never throws: a failed POST still
 * returns a saved order, and the success page offers the WhatsApp fallback.
 */

export async function placeOrder({ lines, subtotal, customer }) {
  const order = {
    orderNo: orderNumber(),
    createdAt: new Date().toISOString(),
    deliveryFrom: DELIVERY_FROM,
    status: 'awaiting_payment_link',
    customer,
    items: lines.map((l) => ({
      id: l.id, name: l.product.name, size: l.size,
      qty: l.qty, unit: l.unit, lineTotal: l.lineTotal,
    })),
    total: subtotal,
    sent: false,
  }

  if (ORDER_ENDPOINT) {
    try {
      const res = await fetch(ORDER_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
      })
      order.sent = res.ok
    } catch {
      order.sent = false
    }
  }

  try {
    const all = read(ORDERS_KEY, [])
    all.push(order)
    write(ORDERS_KEY, all)
  } catch {
    /* ignore */
  }
  return order
}

export const getOrder = (orderNo) => read(ORDERS_KEY, []).find((o) => o.orderNo === orderNo)
