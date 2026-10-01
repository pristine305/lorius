import PolicyLayout from './PolicyLayout'

export default function Cookies() {
  return (
    <PolicyLayout title="Cookie Policy" slug="cookies">
      <div className="toc"><h2>Contents</h2><ol><li><a href="#s1">What cookies are</a></li><li><a href="#s2">Categories of cookies we use</a></li><li><a href="#s3">Consent</a></li><li><a href="#s4">Managing cookies</a></li><li><a href="#s5">Do Not Track and global privacy signals</a></li><li><a href="#s6">Changes</a></li><li><a href="#s7">Contact</a></li></ol></div>
      <h2 id="s1">1. What Cookies Are</h2>
      <p>1.1 Cookies are small text files placed on your device when you visit a website. We also use similar technologies such as pixels, tags, software development kits and local storage. In this Policy all of these are called "cookies".</p>
      <p>1.2 This Policy explains which cookies we use and how you can control them. It should be read with our <a href="#/privacy">Privacy Policy</a>, which explains how we handle personal data generally.</p>
      
      <h2 id="s2">2. Categories of Cookies We Use</h2>
      <table>
      <tr><th>Category</th><th>What it does</th><th>Consent required</th></tr>
      <tr><td>Strictly necessary</td><td>Keeps you signed in, remembers the contents of your bag, secures checkout, balances server load and prevents fraud. The Website cannot function without these.</td><td>No. These are set on the basis that they are essential to provide the service you have asked for.</td></tr>
      <tr><td>Functional</td><td>Remembers preferences such as your PIN code, recently viewed fragrances and whether you have dismissed a notice.</td><td>Yes</td></tr>
      <tr><td>Analytics</td><td>Tells us, in aggregate, which pages are visited, how long visitors stay and where they leave, so we can improve the Website.</td><td>Yes</td></tr>
      <tr><td>Advertising and retargeting</td><td>Allows us and our advertising partners to show LORIUS advertisements on other platforms and to measure their effectiveness.</td><td>Yes</td></tr>
      </table>
      <p>2.1 A current list of the individual cookies used on the Website, their provider, purpose and duration, is available in the cookie banner under "Cookie Settings".</p>
      <p>2.2 Some cookies are set by third parties, including our payment aggregator, analytics provider and social-media platforms. Those parties process data under their own privacy policies, and we recommend that you read them.</p>
      
      <h2 id="s3">3. Consent</h2>
      <p>3.1 When you first visit the Website you are shown a cookie banner. Strictly necessary cookies are set immediately because the Website cannot work without them. All other cookies are set only after you give consent through a clear affirmative action.</p>
      <p>3.2 Consent is not pre-ticked, and refusing non-essential cookies is as easy as accepting them. Refusing them does not prevent you from browsing or placing an Order.</p>
      <p>3.3 You may withdraw or change your consent at any time through the "Cookie Settings" link in the footer of the Website. Withdrawal takes effect prospectively.</p>
      
      <h2 id="s4">4. Managing Cookies</h2>
      <p>4.1 Besides our own controls, every major browser allows you to block or delete cookies through its settings. Blocking strictly necessary cookies may prevent checkout from working.</p>
      <p>4.2 Clearing cookies on your device will also clear the record of your cookie preferences, and the banner will appear again on your next visit.</p>
      
      <h2 id="s5">5. Do Not Track and Global Privacy Signals</h2>
      <p>The Website honours your choices made through the cookie banner. Browser "Do Not Track" signals are not yet standardised in India, and where we cannot reliably interpret such a signal we rely on the preferences you set in "Cookie Settings".</p>
      
      <h2 id="s6">6. Changes</h2>
      <p>We may update this Policy when we add or remove cookies. The updated version will be published on the Website with a revised effective date.</p>
      
      <h2 id="s7">7. Contact</h2>
      <p>For questions about cookies, write to <span className="fill">TO BE FILLED &mdash; privacy / grievance e-mail</span>.</p>
    </PolicyLayout>
  )
}
