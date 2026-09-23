import type { Metadata } from 'next';
import LegalPage, { TableWrap } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Cookie Policy | Jana Affum',
  description:
    'Cookie Policy explaining browser storage and cookie practices for janaaffum.com.',
  alternates: { canonical: '/cookies' },
};

export default function Cookies() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="This website currently uses only the browser storage necessary to remember that you have dismissed the cookie notice. It does not use advertising, behavioural tracking or analytics cookies."
      updated="22 September 2026"
      currentPath="/cookies"
    >
      <h2>What is stored?</h2>
      <TableWrap>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Technology and category</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>ja-cookie-notice</code></td>
              <td>Necessary browser local storage</td>
              <td>Remembers that the cookie notice has been dismissed so it is not shown on every visit</td>
              <td>The current website code does not automatically expire this item; it remains until the visitor clears site data</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        Because this storage is necessary to remember the visitor&apos;s requested setting and has no tracking or advertising purpose, prior consent is not required. The notice is informational; the button should not be labelled as consent.
      </p>

      <h2>Third-party links</h2>
      <p>
        Calendly, LinkedIn and Instagram are currently linked rather than embedded. If you follow one of those links, the third party may use cookies or similar technologies under its own policies. Those technologies are not placed by this website before you follow the link.
      </p>

      <h2>Browser controls</h2>
      <p>
        You can remove or block cookies and local storage through your browser settings. If you delete <code>ja-cookie-notice</code>, the notice may be displayed again.
      </p>

      <h2>Future changes</h2>
      <p>
        If analytics, marketing pixels, embedded Calendly, YouTube videos, social-media widgets or other non-essential technologies are added, they must remain blocked until the visitor gives valid opt-in consent. This policy and the consent interface must then be updated.
      </p>

      <h2>Questions</h2>
      <p>
        Questions: <a href="mailto:janaaffum@gmail.com">janaaffum@gmail.com</a>. More on personal data processing in the <a href="/privacy">Privacy Policy</a> and <a href="/candidate-privacy">Candidate Privacy Notice</a>.
      </p>
    </LegalPage>
  );
}
