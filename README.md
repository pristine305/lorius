# LORIUS storefront (React + Vite)

Pre-order storefront for loriusperfume.com. Six fragrances, three sizes, a working
cart and a pre-order checkout that collects name, mobile, email and address.

## Run it

```bash
npm install
npm run dev      # local development
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Upload it

`npm run build` writes a **dist/** folder of plain static files. Upload the *contents*
of dist/ to any host: cPanel/public_html, Netlify, Vercel, S3, Cloudflare Pages.
No Node server is needed at runtime.

The app uses a hash router (`/#/shop`), so it works in a subfolder and needs no
server rewrite rules. For clean URLs without the `#`, open `src/main.jsx`, swap
`HashRouter` for `BrowserRouter`, and add a rewrite so every path serves index.html
(Netlify `_redirects`: `/*  /index.html  200`).

## Everything you will want to change: src/config.js

| Setting | What it does |
|---|---|
| `PREORDER_OPENS` | 25 Sep 2026, 12:00 noon IST. Before it, order buttons are disabled and a countdown shows. The site opens by itself; nobody needs to deploy at noon. |
| `DELIVERY_FROM` | "23 October 2026", shown on the cart, checkout and confirmation. |
| `PRICE` | 20 ml 249, 50 ml 499, 100 ml 999. |
| `ORDER_ENDPOINT` | Where orders are POSTed. **Empty by default.** |
| `WHATSAPP_NUMBER` | Used for the WhatsApp fallback. **Currently a placeholder.** |
| `SUPPORT_EMAIL` | Shown on the confirmation page and footer. |

## How orders reach you

There is no backend in this package, so orders are handled in three layers:

1. Every order is saved in the customer's browser under `lorius_orders_v1`.
2. The confirmation page offers **Send on WhatsApp** with the whole order pre-filled,
   so the order reaches you even with nothing configured.
3. If `ORDER_ENDPOINT` is set, the order is also POSTed there as JSON:

```json
{ "orderNo": "LRS-20260925-AB12", "createdAt": "...", "status": "awaiting_payment_link",
  "customer": { "name": "", "phone": "", "email": "", "address": "", "city": "", "state": "", "pincode": "" },
  "lines": [ { "id": "oud", "name": "Oud", "size": "100", "qty": 1, "unit": 999, "lineTotal": 999 } ],
  "total": 999 }
```

A Google Apps Script bound to a Sheet, Formspree, or your own API all work. Until
one is set, treat WhatsApp as the channel of record.

No payment is taken anywhere in this app. After checkout the customer is told:
*"Order placed successfully. We will get back to you online with a payment link."*

## Structure

```
src/config.js              prices, dates, endpoint, socials
src/data/products.js       the six fragrances and their notes
src/context/CartContext.jsx  cart state, persistence, placeOrder()
src/pages/                 Home, Shop, Product, Checkout, OrderPlaced, About, Membership
src/components/            Header, Footer, CartDrawer, SearchOverlay, ProductCard, Rail, AutoVideo
public/assets/             product photography, tiles, logo, video
```

## Known gaps, by design

- **No 20 ml photography exists.** The 20 ml option shows the 50 ml bottle with a note.
- **No reviews.** The product page shows an empty state until real orders are delivered.
- **Delivery and returns wording** is deliberately vague until the policy is final.
- **Accounts and search** are front-end only.
