import Terms from './Terms'
import Privacy from './Privacy'
import Shipping from './Shipping'
import Returns from './Returns'
import Payments from './Payments'
import Cookies from './Cookies'
import Grievance from './Grievance'
import Disclaimer from './Disclaimer'
import Contact from './Contact'

// Company particulars shown at the top of every policy page.
// Confirm each against the certificate of incorporation and GST certificate.
export const COMPANY = {
  name: 'Ember Global Fragrances Private Limited',
  brand: 'LORIUS',
  cin: 'U20234DC2026PTC468967',
  gstin: '',   // the GSTIN in the source documents was not a valid 15-character GSTIN
  address: '2nd Floor, B-265, Plot No. SU, North Ex-mall, Sector 9, Near Kadambari Apartment, Rohini, North West Delhi, Delhi 110085',
  site: 'www.loriusperfume.com',
  effective: '29 September 2026',
  version: '1.0',
}

export const POLICIES = [
  { slug: 'terms', title: 'Terms and Conditions', Component: Terms },
  { slug: 'privacy', title: 'Privacy Policy', Component: Privacy },
  { slug: 'shipping', title: 'Shipping and Delivery Policy', Component: Shipping },
  { slug: 'returns', title: 'Return, Refund and Cancellation Policy', Component: Returns },
  { slug: 'payments', title: 'Payment Policy', Component: Payments },
  { slug: 'cookies', title: 'Cookie Policy', Component: Cookies },
  { slug: 'grievance', title: 'Grievance Redressal Policy', Component: Grievance },
  { slug: 'disclaimer', title: 'Disclaimer', Component: Disclaimer },
  { slug: 'contact', title: 'Contact Us', Component: Contact },
]
