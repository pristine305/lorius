import PolicyLayout from './PolicyLayout'

export default function Payments() {
  return (
    <PolicyLayout title="Payment Policy" slug="payments">
      <div className="toc"><h2>Contents</h2><ol><li><a href="#s1">Application</a></li><li><a href="#s2">Currency and taxes</a></li><li><a href="#s3">Accepted payment methods</a></li><li><a href="#s4">How payment is processed</a></li><li><a href="#s5">Card and payment data security</a></li><li><a href="#s6">Pre-order payments</a></li><li><a href="#s7">Failed and pending payments</a></li><li><a href="#s8">Cash on Delivery</a></li><li><a href="#s9">Invoices</a></li><li><a href="#s10">Refunds</a></li><li><a href="#s11">Chargebacks and disputes</a></li><li><a href="#s12">Fraud prevention</a></li><li><a href="#s13">Payments made outside the Website</a></li><li><a href="#s14">Contact</a></li></ol></div>
      <h2 id="s1">1. Application</h2>
      <p>This Payment Policy governs how payments are accepted, processed, refunded and disputed on the Website. It forms part of the <a href="#/terms">Terms and Conditions</a>. Capitalised terms not defined here have the meanings given in the Terms and Conditions.</p>
      
      <h2 id="s2">2. Currency and Taxes</h2>
      <p>2.1 All prices are quoted and charged in Indian Rupees (INR) only.</p>
      <p>2.2 Prices displayed are the maximum retail price, inclusive of Goods and Services Tax, unless otherwise stated. No price charged exceeds the maximum retail price printed on the Product.</p>
      <p>2.3 Shipping charges, Cash on Delivery handling charges and any other applicable charge are shown separately and in full in the order summary before you confirm payment. No charge is added at a later stage of checkout.</p>
      <p>2.4 If you require a GST invoice in the name of a business, you must enter a valid GSTIN and legal business name at checkout before payment. GSTIN details cannot be added to an invoice after the Order is placed.</p>
      
      <h2 id="s3">3. Accepted Payment Methods</h2>
      <p>3.1 Subject to availability at checkout, the Company accepts:</p>
      <ul>
      <li>Unified Payments Interface (UPI), including QR and intent-based payments;</li>
      <li>Credit and debit cards issued by banks in India (RuPay, Visa, Mastercard and others enabled by our payment aggregator);</li>
      <li>Net banking;</li>
      <li>Prepaid wallets and, where offered, buy-now-pay-later and EMI facilities provided by third-party lenders; and</li>
      <li>Cash on Delivery, where available for the delivery PIN code and the Order value.</li>
      </ul>
      <p>3.2 The availability of any payment method may change without notice. The Company may withdraw a payment method for a particular Order, Customer, PIN code or Product, including where fraud is suspected or where the Product is a Pre-order.</p>
      <p>3.3 Where you use an EMI, buy-now-pay-later or wallet facility, your contract for that credit or payment facility is with the third-party provider and is governed by its terms. Disputes about interest, fees or credit limits must be raised with that provider.</p>
      
      <h2 id="s4">4. How Payment is Processed</h2>
      <p>4.1 Online payments are processed by our payment aggregator, <span className="fill">TO BE FILLED &mdash; name of payment aggregator, for example ICICI Bank</span>, which is authorised by the Reserve Bank of India to operate as a payment aggregator. The Company does not itself process card or bank credentials.</p>
      <p>4.2 When you pay, you are directed to the secure environment of the payment aggregator or your bank. Authentication, including additional factor authentication where required by the Reserve Bank of India, is performed there.</p>
      <p>4.3 An Order is treated as paid only when the Company receives confirmation of successful payment from the payment aggregator. An amount debited without such confirmation is dealt with under Clause 7.</p>
      <p>4.4 Payment does not by itself constitute acceptance of your Order. As set out in Clause 7 of the <a href="#/terms">Terms and Conditions</a>, a binding contract is formed on dispatch. If the Company cancels an Order before dispatch, the full amount received is refunded.</p>
      
      <h2 id="s5">5. Card and Payment Data Security</h2>
      <p>5.1 The Company does not collect, view or store full card numbers, CVV, card expiry dates, UPI PINs, net-banking passwords or one-time passwords. These are entered only in the environment of the payment aggregator or your bank.</p>
      <p>5.2 Where you choose to save a card for future use, the card is tokenised by the payment aggregator or the card network in accordance with the Reserve Bank of India's card-on-file tokenisation framework. The Company holds only a token and the last four digits, which cannot be used to make a payment elsewhere.</p>
      <p>5.3 Payment pages are served over TLS encryption, and our payment aggregator maintains PCI-DSS compliance.</p>
      <p>5.4 <strong>The Company will never ask you for your card PIN, CVV, UPI PIN, net-banking password or any one-time password</strong>, by telephone, e-mail, SMS, WhatsApp or any other means. Please see the fraud warning on the <a href="#/contact">Contact Us</a> page.</p>
      
      <h2 id="s6">6. Pre-order Payments</h2>
      <p>6.1 Pre-orders may require payment in full at the time of the Pre-order, or payment of a booking amount with the balance on or before dispatch, as displayed at checkout.</p>
      <p>6.2 Amounts received against a Pre-order are held against the future supply of the Product. You may cancel a Pre-order at any time before dispatch and receive a full refund, without any cancellation charge, under Clause 9.5 of the <a href="#/terms">Terms and Conditions</a>.</p>
      <p>6.3 If dispatch is delayed beyond the communicated date, your rights, including to a full refund, are set out in Clause 9.4 of the Terms and Conditions.</p>
      
      <h2 id="s7">7. Failed, Pending and Duplicate Payments</h2>
      <p>7.1 If an amount is debited from your account but the Order is not confirmed, the transaction has ordinarily failed and the amount is reversed automatically by the bank or payment aggregator.</p>
      <p>7.2 Such reversals are governed by the Reserve Bank of India's directions on harmonisation of turnaround time for failed transactions. Where the Reserve Bank prescribes a turnaround time for auto-reversal of a failed transaction, and compensation for delay beyond it, those provisions apply to your transaction as against the bank or payment system participant concerned.</p>
      <p>7.3 If the amount is not reversed within five (5) Business Days, write to <span className="fill">TO BE FILLED &mdash; customer care e-mail</span> with the date, amount, payment method and the bank or UPI reference number. The Company will take the matter up with its payment aggregator and revert.</p>
      <p>7.4 If you are charged twice for the same Order, the duplicate amount will be refunded in full to the original payment source once verified with the payment aggregator, ordinarily within five (5) Business Days of verification.</p>
      <p>7.5 The Company is not responsible for a failed payment caused by insufficient funds, an expired or blocked card, limits set by your bank, network failure at your end, or an incorrect UPI identifier.</p>
      
      <h2 id="s8">8. Cash on Delivery</h2>
      <p>8.1 Cash on Delivery, where offered, may be subject to a handling charge and to a maximum Order value, both displayed at checkout.</p>
      <p>8.2 Cash on Delivery Orders may require verification by telephone, SMS or WhatsApp before dispatch. An Order that cannot be verified may be cancelled under Clause 4.4 of the <a href="#/shipping">Shipping and Delivery Policy</a>.</p>
      <p>8.3 Repeated refusal of Cash on Delivery Orders may result in the facility being disabled for your account, telephone number or address, as set out in Clause 4.4 of the Terms and Conditions.</p>
      
      <h2 id="s9">9. Invoices</h2>
      <p>9.1 A tax invoice compliant with the Central Goods and Services Tax Act, 2017 is issued for every Order and sent to your registered e-mail address, and is also available under "My Orders".</p>
      <p>9.2 The invoice is raised in the name and at the address entered by you at checkout. Please check these details before paying, as they cannot be changed after the invoice is generated.</p>
      
      <h2 id="s10">10. Refunds</h2>
      <p>10.1 Refunds are made only to the original payment source, except for Cash on Delivery Orders, which are refunded by bank transfer or UPI to an account in the Customer's name.</p>
      <p>10.2 The circumstances in which refunds are made, the amounts, any permitted deductions and the timelines for initiation are set out in the <a href="#/returns">Return, Refund and Cancellation Policy</a>.</p>
      <p>10.3 After the Company initiates a refund, the time taken for the amount to reach you depends on your bank or payment provider and is ordinarily 5 to 7 Business Days.</p>
      <p>10.4 Refunds are never made in cash, and never to an account or instrument other than the one used for payment, except as stated in Clause 10.1.</p>
      
      <h2 id="s11">11. Chargebacks and Disputes</h2>
      <p>11.1 If you do not recognise a charge, please contact us before raising a chargeback with your bank. Most issues are resolved faster directly.</p>
      <p>11.2 Where a chargeback is raised, the Company will respond to the acquiring bank with the evidence available to it, including order records, proof of delivery, tracking and communications.</p>
      <p>11.3 A chargeback raised in bad faith after receipt of the Products constitutes Account Abuse under Clause 4.4 of the Terms and Conditions, and the Company reserves its remedies under law, including recovery of the amount and of the costs incurred.</p>
      <p>11.4 Where a refund has already been made for an Order and a chargeback is subsequently allowed for the same amount, the Company is entitled to recover the duplicate amount.</p>
      
      <h2 id="s12">12. Fraud Prevention</h2>
      <p>12.1 The Company, its payment aggregator and the issuing bank may screen transactions for fraud. An Order may be held, verified or cancelled where a transaction is flagged, as set out in Clause 7.3(e) of the Terms and Conditions. Where an Order is cancelled on this ground and payment has been received, it is refunded in full.</p>
      <p>12.2 You must use only a payment instrument that you are lawfully authorised to use. Use of a stolen or unauthorised instrument will be reported to the appropriate authority.</p>
      
      <h2 id="s13">13. Payments Made Outside the Website</h2>
      <p>The Company does not accept payment by direct transfer to any personal account, by gift card, by cryptocurrency, or through any link sent from a personal mobile number or a non-LORIUS e-mail domain. Payment links sent by the Company for confirmed Pre-orders will originate only from our official channels listed on the <a href="#/contact">Contact Us</a> page and will lead only to the environment of our payment aggregator. The Company is not responsible for any amount paid to any other account or link.</p>
      
      <h2 id="s14">14. Contact</h2>
      <p>For any payment question, write to <span className="fill">TO BE FILLED &mdash; customer care e-mail</span> quoting your Order number, the date and amount of the transaction and the bank or UPI reference number. Unresolved matters may be escalated under the <a href="#/grievance">Grievance Redressal Policy</a>.</p>
    </PolicyLayout>
  )
}
