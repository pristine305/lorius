import PolicyLayout from './PolicyLayout'

export default function Contact() {
  return (
    <PolicyLayout title="Contact Us" slug="contact">
      <div className="toc"><h2>Contents</h2><ol><li><a href="#s1">Company information</a></li><li><a href="#s2">Customer care</a></li><li><a href="#s3">Specific enquiries</a></li><li><a href="#s4">Grievance Officer</a></li><li><a href="#s5">Social media</a></li><li><a href="#s6">Beware of fraud</a></li></ol></div>
      <h2 id="s1">1. Company Information</h2>
      <p>This information is displayed in accordance with Rule 4(2) of the Consumer Protection (E-Commerce) Rules, 2020.</p>
      <table>
      <tr><th>Particular</th><th>Details</th></tr>
      <tr><td>Legal name</td><td>Ember Global Fragrances Private Limited</td></tr>
      <tr><td>Brand</td><td>LORIUS</td></tr>
      <tr><td>Corporate Identification Number (CIN)</td><td>U20234DC2026PTC468967</td></tr>
      <tr><td>GSTIN</td><td><span className="fill">TO BE FILLED &mdash; GSTIN &mdash; the one supplied is not a valid 15-character GSTIN</span></td></tr>
      <tr><td>Registered office</td><td>2nd Floor, B-265, Plot No. SU, North Ex-mall, Sector 9, Near Kadambari Apartment, Rohini, North West Delhi, Delhi 110085</td></tr>
      <tr><td>Corporate office and warehouse</td><td><span className="fill">TO BE FILLED &mdash; address, if different from the registered office</span></td></tr>
      <tr><td>Website</td><td>www.loriusperfume.com</td></tr>
      </table>
      
      <h2 id="s2">2. Customer Care</h2>
      <table>
      <tr><th>Channel</th><th>Details</th></tr>
      <tr><td>E-mail</td><td><span className="fill">TO BE FILLED &mdash; customer care e-mail</span></td></tr>
      <tr><td>Telephone</td><td><span className="fill">TO BE FILLED &mdash; telephone number &mdash; required by payment aggregators</span></td></tr>
      <tr><td>WhatsApp</td><td><span className="fill">TO BE FILLED &mdash; WhatsApp number</span> (messages only)</td></tr>
      <tr><td>Working hours</td><td>Monday to Saturday, 10:00 a.m. to 6:00 p.m. IST, excluding public holidays</td></tr>
      <tr><td>Response time</td><td>Within one (1) Business Day for e-mail and WhatsApp</td></tr>
      </table>
      <p>When contacting us about an Order, please quote your Order number and registered mobile number, and attach any relevant photographs.</p>
      
      <h2 id="s3">3. Specific Enquiries</h2>
      <table>
      <tr><th>Subject</th><th>Contact</th></tr>
      <tr><td>Order status, delivery and tracking</td><td><span className="fill">TO BE FILLED &mdash; customer care e-mail</span></td></tr>
      <tr><td>Damaged, wrong, missing or defective Products</td><td><span className="fill">TO BE FILLED &mdash; claims e-mail</span> (see the <a href="#/returns">Return, Refund and Cancellation Policy</a>)</td></tr>
      <tr><td>Privacy and data requests</td><td><span className="fill">TO BE FILLED &mdash; privacy e-mail</span></td></tr>
      <tr><td>Grievances and escalations</td><td><span className="fill">TO BE FILLED &mdash; grievance e-mail</span> (see the <a href="#/grievance">Grievance Redressal Policy</a>)</td></tr>
      <tr><td>Corporate gifting, bulk and trade enquiries</td><td><span className="fill">TO BE FILLED &mdash; business e-mail</span></td></tr>
      <tr><td>Collaborations, influencers and media</td><td><span className="fill">TO BE FILLED &mdash; collaborations e-mail</span></td></tr>
      <tr><td>Legal notices</td><td><span className="fill">TO BE FILLED &mdash; legal e-mail</span>, with a physical copy to the registered office</td></tr>
      </table>
      
      <h2 id="s4">4. Grievance Officer</h2>
      <div className="entity">
      <b>Grievance Officer</b><br />
      Name: <span className="fill">TO BE FILLED &mdash; name</span> &nbsp;|&nbsp; Designation: <span className="fill">TO BE FILLED &mdash; designation</span><br />
      E-mail: <span className="fill">TO BE FILLED &mdash; grievance e-mail</span> &nbsp;|&nbsp; Telephone: <span className="fill">TO BE FILLED &mdash; telephone number</span><br />
      Address: 2nd Floor, B-265, Plot No. SU, North Ex-mall, Sector 9, Near Kadambari Apartment, Rohini, North West Delhi, Delhi 110085<br />
      Working hours: Monday to Saturday, 10:00 a.m. to 6:00 p.m. IST
      </div>
      <p>Full details of how to raise and escalate a complaint are in the <a href="#/grievance">Grievance Redressal Policy</a>.</p>
      
      <h2 id="s5">5. Social Media</h2>
      <p>
      Instagram: <a href="https://www.instagram.com/loriusperfume/" target="_blank" rel="noopener">@loriusperfume</a><br />
      Facebook: <a href="https://www.facebook.com/profile.php?id=61594284845520" target="_blank" rel="noopener">LORIUS Perfume</a><br />
      X (Twitter): <a href="https://x.com/Loriusperfume" target="_blank" rel="noopener">@Loriusperfume</a><br />
      LinkedIn: <a href="https://www.linkedin.com/in/lorius-perfume-b43659437/" target="_blank" rel="noopener">LORIUS Perfume</a>
      </p>
      
      <h2 id="s6">6. Beware of Fraud</h2>
      <p className="note">LORIUS will never ask you for your one-time password, card PIN, CVV, UPI PIN or password; will never ask you to pay to claim a prize; and will never contact you from a personal mobile number or a non-LORIUS e-mail domain. Official communications come only from the @loriusperfume.com domain and our verified social-media handles listed above. If you receive a suspicious call or message, do not respond. Report it to us, and to the National Cyber Crime Reporting Portal at <a href="https://cybercrime.gov.in" target="_blank" rel="noopener">cybercrime.gov.in</a> or on helpline <strong>1930</strong>.</p>
    </PolicyLayout>
  )
}
