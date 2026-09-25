// ---------------------------------------------------------------------------
// Everything the business is likely to change lives in this one file.
// ---------------------------------------------------------------------------

// Pre-ordering opens 25 September 2026, 12:00 noon IST. Before this moment the
// site shows a countdown and the order buttons are disabled.
export const PREORDER_OPENS = new Date('2026-09-25T12:00:00+05:30')

// First deliveries go out from this date.
export const DELIVERY_FROM = '23 October 2026'

// MRP in rupees, inclusive of all taxes. Same for every fragrance.
export const PRICE = { '20': 249, '50': 499, '100': 999 }

// WHERE ORDERS GO.
// Leave ORDER_ENDPOINT empty and every order is still captured: it is saved in
// the browser and the customer is handed a pre-filled WhatsApp message so the
// order reaches you. Set it to a URL (Google Apps Script, Formspree, Zapier,
// your own API) and the site will also POST the order there as JSON.
export const ORDER_ENDPOINT = `${import.meta.env.VITE_API_URL}/api/orders`

// Full international format, digits only, no plus sign. Example: 919876543210
export const WHATSAPP_NUMBER = '918796578969'

export const SUPPORT_EMAIL = 'care@loriusperfume.com'

export const SOCIAL = {
  instagram: 'https://www.instagram.com/loriusperfume/',
  facebook: 'https://www.facebook.com/profile.php?id=61594284845520',
  x: 'https://x.com/Loriusperfume',
  linkedin: 'https://www.linkedin.com/in/lorius-perfume-b43659437/',
}

export const SIZES = ['20', '50', '100']
export const asset = (p) => import.meta.env.BASE_URL + 'assets/' + p
export const inr = (n) => '\u20B9' + Number(n).toLocaleString('en-IN')
