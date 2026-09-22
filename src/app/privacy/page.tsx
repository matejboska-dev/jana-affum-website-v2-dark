import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = { title: 'Privacy Policy | Jana Affum', description: 'How Jana Affum handles personal data submitted through this website.', alternates: { canonical: '/privacy' } };

export default function Privacy() {
  return <LegalPage title="Privacy Policy" intro="Short version: I only use your details to reply to you and to arrange a conversation. I do not sell them, and this website does not run advertising or analytics trackers.">
    <h2>Who is responsible for your data</h2>
    <p>Jana Affum, sole trader (fyzická osoba podnikající), Business ID (IČO) 13956248, registered office tř. Dukelských hrdinů 3789/84, 695 01 Hodonín, Czech Republic. Contact: <a href="mailto:janaaffum@gmail.com">janaaffum@gmail.com</a>.</p>
    <h2>What I collect and why</h2>
    <table><thead><tr><th>Situation</th><th>Data</th><th>Purpose and legal basis</th></tr></thead><tbody>
      <tr><td>Contact form or email</td><td>Name, email address, optional company, topic, language and the message you write</td><td>To answer your enquiry and arrange a conversation. Steps taken at your request before a contract (Art. 6(1)(b) GDPR) and my legitimate interest in replying (Art. 6(1)(f)).</td></tr>
      <tr><td>Booking a call through Calendly</td><td>Name, email, time slot and any answers you give</td><td>To schedule the call. Calendly processes this data under its own privacy policy.</td></tr>
      <tr><td>Working together</td><td>Information you share in recruitment or coaching conversations</td><td>To deliver the agreed service (Art. 6(1)(b)). Terms are agreed separately and treated confidentially.</td></tr>
      <tr><td>Legal and accounting duties</td><td>Invoicing details</td><td>Legal obligations (Art. 6(1)(c)).</td></tr>
    </tbody></table>
    <p>Please leave out sensitive personal information (for example health details) and confidential candidate data from the contact form.</p>
    <h2>Who receives it</h2>
    <ul>
      <li>Email and form providers used to deliver your message to me, including Google (Gmail) and the form delivery service used by this website.</li>
      <li>Calendly, if you book a call.</li>
      <li>The website host, which keeps standard technical server logs.</li>
      <li>Accountants and authorities, only where the law requires it.</li>
    </ul>
    <p>Some of these providers are outside the EU/EEA. Where that happens, the transfer relies on the European Commission’s adequacy decisions or standard contractual clauses.</p>
    <h2>How long I keep it</h2>
    <p>Enquiries that do not lead to cooperation are deleted after 12 months. Data connected to a contract is kept for the duration of the cooperation and then for the periods required by tax and accounting law.</p>
    <h2>Your rights</h2>
    <p>You can ask for access to your data, correction, deletion, restriction, portability, and you can object to processing based on legitimate interest. Write to <a href="mailto:janaaffum@gmail.com">janaaffum@gmail.com</a>. You also have the right to complain to the Czech data protection authority, Úřad pro ochranu osobních údajů (<a href="https://uoou.gov.cz" target="_blank" rel="noopener noreferrer">uoou.gov.cz</a>).</p>
    <h2>Candidate Privacy &amp; Cookies</h2>
    <p>For details on candidate data processed during executive search and recruitment, see the <a href="/candidate-privacy">Candidate Privacy Notice</a>. For technical cookies, see the <a href="/cookies">Cookie Policy</a>.</p>
    <h2>Changes</h2>
    <p>If I change how I handle data, this page will be updated and the date above will change.</p>
  </LegalPage>;
}
