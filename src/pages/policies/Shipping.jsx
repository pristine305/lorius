import PolicyLayout from './PolicyLayout'

export default function Shipping() {
  return (
    <PolicyLayout title="Shipping and Delivery Policy" slug="shipping">
      <div className="toc"><h2>Contents</h2><ol><li><a href="#s1">Application</a></li><li><a href="#s2">Serviceable locations</a></li><li><a href="#s3">Mode of transport</a></li><li><a href="#s4">Processing and dispatch</a></li><li><a href="#s5">Estimated delivery timelines</a></li><li><a href="#s6">Shipping charges</a></li><li><a href="#s7">Order tracking</a></li><li><a href="#s8">Delivery and receipt</a></li><li><a href="#s9">Failed delivery and return to origin</a></li><li><a href="#s10">Orders marked delivered but not received</a></li><li><a href="#s11">Packaging</a></li><li><a href="#s12">Liability</a></li></ol></div>
      <h2 id="s1">1. Application</h2>
      <p>This Shipping and Delivery Policy governs the dispatch and delivery of Products ordered through the Website and forms part of the <a href="#/terms">Terms and Conditions</a>. Capitalised terms not defined here have the meanings given in the Terms and Conditions.</p>
      
      <h2 id="s2">2. Serviceable Locations</h2>
      <p>2.1 The Company presently ships only to addresses within the territory of India that are serviceable by its logistics partners. Serviceability may be checked by entering the delivery PIN code on the product page or at checkout.</p>
      <p>2.2 The Company does not presently ship outside India. Perfumes are classified as flammable liquids and "dangerous goods" for air transport and are subject to special carriage restrictions; international shipping will be introduced only once compliant logistics are in place.</p>
      <p>2.3 The Company does not deliver to post-office boxes, army post-office addresses, hotel rooms or temporary addresses, or to addresses where access is restricted, unless expressly agreed.</p>
      <p>2.4 Serviceability of a PIN code, the availability of Cash on Delivery and the mode of transport may change without notice owing to courier network changes, local restrictions or regulatory requirements.</p>
      
      <h2 id="s3">3. Mode of Transport</h2>
      <p>Owing to the flammable nature of alcohol-based fragrances, some or all consignments may be carried by surface transport, and air carriage may not be available for certain PIN codes. This may extend delivery timelines, and the Company shall not be liable for delay attributable to such regulatory restrictions.</p>
      
      <h2 id="s4">4. Processing and Dispatch</h2>
      <p>4.1 <strong>In-stock Orders.</strong> Orders are ordinarily processed and dispatched within one (1) to three (3) Business Days of the Order being confirmed and, for prepaid Orders, of receipt of payment. Orders placed after <span className="fill">TO BE FILLED &mdash; daily cut-off time, for example 4:00 p.m.</span> IST, or on a non-Business Day, are processed from the next Business Day.</p>
      <p>4.2 <strong>Pre-orders.</strong> Dispatch of Pre-orders will commence from <strong>23 October 2026</strong>, or such other date as is communicated, and shall proceed in batches, broadly in the sequence in which Pre-orders were received. Delay in dispatch of Pre-orders is governed by Clause 9 of the <a href="#/terms">Terms and Conditions</a>.</p>
      <p>4.3 <strong>Sale periods and launches.</strong> During launches, festive sales and promotional events, processing times may be extended by up to five (5) additional Business Days. Any such extension will be indicated on the Website.</p>
      <p>4.4 <strong>Verification.</strong> The Company may call or message the Customer to verify an Order, particularly Cash on Delivery Orders, high-value Orders and Orders with incomplete addresses. An Order that cannot be verified within forty-eight (48) hours may be cancelled, with a full refund of any amount paid.</p>
      
      <h2 id="s5">5. Estimated Delivery Timelines</h2>
      <table>
      <tr><th>Destination</th><th>Estimated delivery after dispatch</th></tr>
      <tr><td>Delhi NCR and metro cities</td><td>2 to 5 Business Days</td></tr>
      <tr><td>Tier-2 and Tier-3 cities</td><td>4 to 7 Business Days</td></tr>
      <tr><td>Rest of India (serviceable areas)</td><td>5 to 9 Business Days</td></tr>
      <tr><td>North-Eastern States, Jammu &amp; Kashmir, Ladakh, hill areas of Himachal Pradesh and Uttarakhand, Andaman &amp; Nicobar Islands, Lakshadweep and remote locations</td><td>7 to 15 Business Days</td></tr>
      </table>
      <p>5.1 Timelines are estimates provided in good faith and are not guaranteed. They may be affected by courier delays, weather, local restrictions, regulatory checks, transport strikes, festivals, incorrect addresses, non-availability of the Customer, or a Force Majeure Event.</p>
      <p>5.2 The estimated delivery date, where displayed at checkout, is indicative only and is not a condition of the contract. If an in-stock Order has not been delivered within fifteen (15) Business Days after the latest estimated date, the Customer may request cancellation of the Order, if not yet delivered, and the Company shall refund the amount paid in full; or the Customer may elect to continue to track and receive the Order.</p>
      
      <h2 id="s6">6. Shipping Charges</h2>
      <p>6.1 Shipping charges, if any, are displayed at checkout before payment.</p>
      <p>6.2 The Company may revise shipping charges and free-shipping thresholds at any time; the charges displayed at checkout at the time of the Order shall apply.</p>
      <p>6.3 Where free shipping was availed because the Order value exceeded a threshold, and the Order is subsequently partially cancelled or returned so that the retained value falls below the threshold, the Company may deduct the applicable shipping charge from the refund.</p>
      
      <h2 id="s7">7. Order Tracking</h2>
      <p>Upon dispatch the Customer will receive the courier name and tracking number by e-mail, SMS and/or WhatsApp. Tracking is also available under "My Orders". Tracking information is provided by the courier, and the Company is not responsible for delays in its updating.</p>
      
      <h2 id="s8">8. Delivery and Receipt</h2>
      <p>8.1 Delivery shall be made to the address specified in the Order. The Customer is responsible for providing a complete and accurate address, PIN code, landmark and a reachable mobile number.</p>
      <p>8.2 <strong>Change of address.</strong> A request to change the delivery address may be accepted only before dispatch and only within the same city, at the Company's discretion. After dispatch the address cannot be changed.</p>
      <p>8.3 <strong>Deemed delivery.</strong> Delivery shall be deemed complete when the Product is handed over at the specified address to the Customer or to any person present at that address who accepts the parcel, including a family member, domestic help, neighbour, colleague, receptionist, security guard or society gate, or when delivered against verification of a one-time password sent to the registered mobile number. The Company shall not be responsible for loss after such delivery.</p>
      <p>8.4 <strong>Inspection on receipt.</strong> The Customer should examine the outer packaging at the time of delivery. If the outer packaging is visibly torn, opened, tampered with, crushed, wet or leaking, the Customer should refuse to accept the parcel and inform the Company within 24 hours. Acceptance of a parcel without reservation shall be treated as evidence that the outer packaging was intact at the time of delivery, unless the contrary is shown.</p>
      <p>8.5 <strong>Unboxing video.</strong> If the Customer wishes to make a claim for missing items or tampered contents, the Customer is required to record a clear, continuous and unedited video of the opening of the parcel, beginning with the sealed parcel showing the shipping label. The consequences of not recording such a video are set out in the <a href="#/returns">Return, Refund and Cancellation Policy</a>.</p>
      <p>8.6 <strong>Risk and title.</strong> Risk in the Products passes to the Customer upon delivery. Title passes upon delivery and receipt of full payment.</p>
      
      <h2 id="s9">9. Failed Delivery and Return to Origin (RTO)</h2>
      <p>9.1 The courier will ordinarily make up to three (3) delivery attempts. If delivery fails due to (a) an incorrect or incomplete address; (b) the Customer or recipient being unavailable or unreachable; (c) refusal to accept delivery, other than refusal of a visibly damaged or tampered parcel as permitted under Clause 8.4; or (d) refusal to pay for a Cash on Delivery Order, the consignment shall be returned to the Company (<strong>"RTO"</strong>).</p>
      <p>9.2 In the event of an RTO attributable to the Customer:</p>
      <ul>
      <li>(a) for prepaid Orders, the Company shall refund the amount paid after deducting the actual forward and reverse shipping costs incurred, subject to a maximum deduction of <span className="fill">TO BE FILLED &mdash; maximum RTO deduction, in rupees</span>, and any payment-gateway charges that are non-refundable to the Company;</li>
      <li>(b) for Cash on Delivery Orders, the Company may disable Cash on Delivery for the Customer's account, telephone number and address, and may recover the RTO cost against any future Order after notice.</li>
      </ul>
      <p>9.3 Re-shipment of an RTO consignment is at the Company's discretion and subject to payment of fresh shipping charges.</p>
      <p>9.4 No deduction shall be made where the RTO is attributable to the Company or its courier.</p>
      
      <h2 id="s10">10. Non-Receipt of Orders Marked &quot;Delivered&quot;</h2>
      <p>10.1 If tracking shows an Order as delivered but the Customer has not received it, the Customer must inform the Company within forty-eight (48) hours of the delivery status being updated.</p>
      <p>10.2 The Company will raise an investigation with the courier, which may include review of proof of delivery, GPS data and delivery-agent statements. The Customer shall cooperate, including by providing a written declaration of non-receipt, and may be required to lodge an online complaint with the police where the value or circumstances so warrant.</p>
      <p>10.3 If the investigation establishes that the Order was not delivered, the Company will, at its option, re-ship the Product or refund the amount paid. If the investigation establishes delivery in accordance with Clause 8.3, the claim shall stand closed.</p>
      <p>10.4 Claims received after the period in Clause 10.1 may be declined unless the Customer shows sufficient cause for the delay.</p>
      
      <h2 id="s11">11. Packaging</h2>
      <p>Products are shipped in protective packaging designed to minimise the risk of breakage and leakage. Outer boxes and inner protective materials may vary. We encourage Customers to recycle packaging responsibly.</p>
      
      <h2 id="s12">12. Liability</h2>
      <p>The Company's liability for delay or failure in delivery is limited to the remedies set out in this Policy, the <a href="#/returns">Return, Refund and Cancellation Policy</a> and the <a href="#/terms">Terms and Conditions</a>, without prejudice to any non-waivable right under Applicable Law.</p>
    </PolicyLayout>
  )
}
