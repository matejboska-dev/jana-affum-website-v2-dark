import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = { title: 'Cookie Policy | Jana Affum', description: 'Which cookies and browser storage this website uses.', alternates: { canonical: '/cookies' } };

export default function Cookies() {
  return <LegalPage title="Cookie Policy" intro="This website uses only what it needs to work. There are no advertising, tracking or analytics cookies.">
    <h2>What is stored on your device</h2>
    <table><thead><tr><th>Name</th><th>Type</th><th>Purpose</th><th>Duration</th></tr></thead><tbody>
      <tr><td>ja-cookie-notice</td><td>Technical (browser storage)</td><td>Remembers that you have seen the cookie notice, so it is not shown again.</td><td>12 months</td></tr>
    </tbody></table>
    <p>Technical storage like this is necessary for the site to behave as you expect and does not require consent.</p>
    <h2>Third-party services</h2>
    <p>Links to Calendly, LinkedIn and Instagram open on those services’ own websites, which may set their own cookies under their own policies. This website does not embed them.</p>
    <h2>Controlling cookies</h2>
    <p>You can delete or block cookies and site data in your browser settings at any time. The site keeps working; you may simply see the cookie notice again.</p>
    <h2>If this changes</h2>
    <p>If analytics or marketing tools are added in the future, this page will be updated first and you will be asked for consent before they run.</p>
    <p>Questions: <a href="mailto:janaaffum@gmail.com">janaaffum@gmail.com</a>. More on data handling in the <a href="/privacy">Privacy Policy</a>.</p>
  </LegalPage>;
}
