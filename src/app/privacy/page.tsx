import type { Metadata } from 'next';
import LegalPage, { TableWrap } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | Jana Affum',
  description:
    'This Privacy Policy explains how I handle personal data when you visit this website, contact me, book an introductory call, or work with me as a coaching or recruitment client.',
  alternates: { canonical: '/privacy' },
};

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This Privacy Policy explains how I handle personal data when you visit this website, contact me, book an introductory call, or work with me as a coaching or recruitment client. Candidate data is covered separately in the Candidate Privacy Notice."
      updated="22 September 2026"
      currentPath="/privacy"
    >
      <h2>1. Who is responsible for your data?</h2>
      <p>
        The data controller is Jana Affum, a sole trader established in the Czech Republic, Business ID (IČO) 13956248, VAT ID CZ8952264651, with registered office at tř. Dukelských hrdinů 3789/84, 695 01 Hodonín, Czech Republic.
      </p>
      <p>
        Email: <a href="mailto:janaaffum@gmail.com">janaaffum@gmail.com</a>
      </p>

      <h2>2. What data do I process and why?</h2>
      <TableWrap>
        <table>
          <thead>
            <tr>
              <th>Situation</th>
              <th>Personal data</th>
              <th>Purpose</th>
              <th>Legal basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Contact form or email</td>
              <td>Name, email address, company (if provided), and the content of your message</td>
              <td>To respond to your enquiry and arrange a conversation</td>
              <td>Steps at your request before entering a contract (Art. 6(1)(b) GDPR) and my legitimate interest in responding to enquiries (Art. 6(1)(f) GDPR)</td>
            </tr>
            <tr>
              <td>Booking through Calendly</td>
              <td>Name, email address, selected time, time zone, and answers you provide</td>
              <td>To schedule and manage the call</td>
              <td>Steps at your request before entering a contract (Art. 6(1)(b) GDPR)</td>
            </tr>
            <tr>
              <td>Recruitment or coaching services</td>
              <td>Contact, contractual and service-related information you provide</td>
              <td>To provide the agreed services and communicate with you</td>
              <td>Performance of a contract (Art. 6(1)(b) GDPR)</td>
            </tr>
            <tr>
              <td>Invoicing and records</td>
              <td>Identification, billing and transaction details</td>
              <td>Accounting, tax and other legal compliance</td>
              <td>Legal obligation (Art. 6(1)(c) GDPR)</td>
            </tr>
            <tr>
              <td>Website operation</td>
              <td>IP address and basic technical/server log data</td>
              <td>Security, availability and troubleshooting</td>
              <td>My legitimate interest in operating a secure and reliable website (Art. 6(1)(f) GDPR)</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        Please do not submit sensitive personal data, confidential candidate information or another person&apos;s personal data through the general contact form unless this is necessary and you are authorised to do so.
      </p>

      <h2>3. Where does the data come from?</h2>
      <p>
        I normally receive the data directly from you. Basic technical data is generated when your browser communicates with the website. If you book through Calendly, I receive the booking information through that service.
      </p>

      <h2>4. Who may receive the data?</h2>
      <p>I may use trusted service providers where necessary to operate my business, including:</p>
      <ul>
        <li>the website hosting and form-delivery provider;</li>
        <li>Google (Gmail and business productivity services);</li>
        <li>Calendly, when you book a call;</li>
        <li>professional advisers, accountants, and public authorities where required by law.</li>
      </ul>
      <p>
        These recipients process data only for the relevant purpose and under their applicable contractual and legal obligations. I do not sell personal data.
      </p>
      <p>
        Some providers may process data outside the European Economic Area. Where required, transfers are protected by a European Commission adequacy decision, the European Commission&apos;s Standard Contractual Clauses, or another lawful safeguard under Chapter V GDPR.
      </p>

      <h2>5. How long do I keep the data?</h2>
      <ul>
        <li>Enquiries that do not lead to cooperation: normally up to 12 months after the last meaningful contact.</li>
        <li>Contract and service records: for the duration of the relationship and afterwards for as long as necessary to establish, exercise or defend legal claims.</li>
        <li>Accounting and tax records: for the periods required by applicable Czech law.</li>
        <li>Technical server logs: for the period set by the hosting provider and only as long as reasonably necessary for security and troubleshooting.</li>
      </ul>
      <p>
        I may retain limited information for longer where the law requires it or where it is necessary for a legal claim.
      </p>

      <h2>6. Your rights</h2>
      <p>
        Depending on the circumstances, you may request access to your data, correction, deletion, restriction of processing, or data portability. You may object at any time to processing based on legitimate interests. Where processing relies on consent, you may withdraw that consent at any time without affecting earlier lawful processing.
      </p>
      <p>
        To exercise your rights, email <a href="mailto:janaaffum@gmail.com">janaaffum@gmail.com</a>. I may need to verify your identity before acting on a request.
      </p>
      <p>
        You may also lodge a complaint with the Czech supervisory authority:<br />
        <strong>Úřad pro ochranu osobních údajů</strong><br />
        Pplk. Sochora 27, 170 00 Praha 7, Czech Republic<br />
        Website:{' '}
        <a href="https://uoou.gov.cz" target="_blank" rel="noopener noreferrer">
          https://uoou.gov.cz
        </a>
      </p>

      <h2>7. Cookies and local storage</h2>
      <p>
        This website currently uses only storage that is necessary for its operation and does not use advertising or analytics trackers. Details are in the <a href="/cookies">Cookie Policy</a>.
      </p>

      <h2>8. Changes</h2>
      <p>
        I may update this Privacy Policy when my services or data practices change. The current version and its date will always appear on this page.
      </p>
    </LegalPage>
  );
}
