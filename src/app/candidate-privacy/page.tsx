import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Candidate Privacy Notice | Jana Affum',
  description: 'How Jana Affum collects, processes, and protects personal data of job candidates and prospective professionals during recruitment and executive search.',
  alternates: { canonical: '/candidate-privacy' },
};

export default function CandidatePrivacy() {
  return (
    <LegalPage
      title="Candidate Privacy Notice"
      intro="This notice explains how personal data of job candidates and prospective professionals is collected, used, and protected during recruitment and executive search engagements conducted by Jana Affum."
    >
      <h2>Who is responsible for your data</h2>
      <p>
        Jana Affum, sole trader (fyzická osoba podnikající), Business ID (IČO) 13956248, VAT ID CZ8952264651, registered office tř. Dukelských hrdinů 3789/84, 695 01 Hodonín, Czech Republic. Contact email: <a href="mailto:janaaffum@gmail.com">janaaffum@gmail.com</a>.
      </p>

      <h2>What data is collected and why</h2>
      <p>
        In the context of international recruitment and executive search, I process personal data to evaluate your professional background and qualifications for relevant career opportunities. This may include:
      </p>
      <ul>
        <li><strong>Identification and contact details:</strong> Name, email address, telephone number, residential city/country, and professional links (such as LinkedIn).</li>
        <li><strong>Professional history and qualifications:</strong> Your CV/resume, employment background, project experience, education, certifications, and skills.</li>
        <li><strong>Interview notes and career preferences:</strong> Notes from screening and exploratory conversations, salary or compensation expectations, availability, notice period, and role preferences.</li>
        <li><strong>Publicly available professional information:</strong> Information you publish publicly on professional networks and platforms.</li>
      </ul>
      <p>
        Please do not include sensitive personal data (e.g. health information, political opinions, or religious beliefs) in your CV or initial correspondence.
      </p>

      <h2>Purpose and legal basis for processing</h2>
      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Data involved</th>
            <th>Legal basis (GDPR)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Assessing suitability for an active search mandate</td>
            <td>CV details, interview notes, skills, contact information</td>
            <td>Steps taken at your request prior to entering into an agreement (Art. 6(1)(b)) and legitimate interest in executive recruitment (Art. 6(1)(f)).</td>
          </tr>
          <tr>
            <td>Presenting your candidacy to a prospective hiring client</td>
            <td>Candidate summary, relevant work experience, CV</td>
            <td>Your consent and consultation with you prior to submission (Art. 6(1)(a)), and pre-contractual steps (Art. 6(1)(b)).</td>
          </tr>
          <tr>
            <td>Keeping your profile on file for future opportunities</td>
            <td>CV, contact details, career preferences</td>
            <td>Your consent (Art. 6(1)(a)). You can withdraw consent at any time.</td>
          </tr>
          <tr>
            <td>Legal and accounting obligations</td>
            <td>Documentation related to completed placements</td>
            <td>Compliance with statutory legal obligations (Art. 6(1)(c)).</td>
          </tr>
        </tbody>
      </table>

      <h2>Confidentiality and recipients</h2>
      <p>
        Candidate data is treated with strict professional confidentiality. I do not share candidate profiles with prospective employers without discussing the role with you first.
      </p>
      <ul>
        <li><strong>Hiring clients:</strong> Relevant profile details are submitted to specific hiring organisations only with your knowledge and agreement.</li>
        <li><strong>Service providers:</strong> Trusted technical tools that enable communication and file management (such as Google Workspace).</li>
        <li><strong>Public authorities:</strong> Only where required by applicable Czech or EU law.</li>
      </ul>
      <p>
        Your data is never sold to third parties or used for commercial advertising. Where external providers operate outside the EU/EEA, appropriate safeguards (such as European Commission Standard Contractual Clauses) are in place.
      </p>

      <h2>How long your data is kept</h2>
      <p>
        For active search mandates, candidate information is kept for the duration of the selection process. If you agree to remain in my candidate network for future roles, your details are held for up to 2 years, or until you request deletion. Data related to completed placements is retained for the period required by commercial and tax legislation.
      </p>

      <h2>Your rights under GDPR</h2>
      <p>
        You have the right to request access to your personal data, correction of inaccurate details, erasure (right to be forgotten), restriction of processing, data portability, and the right to object to processing. Where processing is based on consent, you may withdraw it at any time.
      </p>
      <p>
        To exercise any of these rights, write directly to <a href="mailto:janaaffum@gmail.com">janaaffum@gmail.com</a>. You also have the right to lodge a complaint with the Czech data protection authority, Úřad pro ochranu osobních údajů (<a href="https://uoou.gov.cz" target="_blank" rel="noopener noreferrer">uoou.gov.cz</a>).
      </p>

      <h2>Related policies</h2>
      <p>
        For information on general website browsing and technical cookies, see the <a href="/privacy">Privacy Policy</a>, <a href="/cookies">Cookie Policy</a>, and <a href="/terms">Website Terms</a>.
      </p>
    </LegalPage>
  );
}
