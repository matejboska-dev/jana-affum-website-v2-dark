import type { Metadata } from 'next';
import LegalPage, { TableWrap } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Candidate Privacy Notice | Jana Affum',
  description:
    'This notice explains how I process personal data about candidates and potential candidates in connection with recruitment, executive search and talent advisory services.',
  alternates: { canonical: '/candidate-privacy' },
};

export default function CandidatePrivacy() {
  return (
    <LegalPage
      title="Candidate Privacy Notice"
      intro="This notice explains how I process personal data about candidates and potential candidates in connection with recruitment, executive search and talent advisory services. It applies whether you contact me directly, are referred to me, or I identify your professional profile through a professional network or another lawful public source."
      updated="22 September 2026"
      currentPath="/candidate-privacy"
    >
      <h2>1. Who is the controller?</h2>
      <p>
        The data controller is Jana Affum, a sole trader established in the Czech Republic, Business ID (IČO) 13956248, VAT ID CZ8952264651, with registered office at tř. Dukelských hrdinů 3789/84, 695 01 Hodonín, Czech Republic.
      </p>
      <p>
        Email: <a href="mailto:janaaffum@gmail.com">janaaffum@gmail.com</a>
      </p>
      <p>
        For a particular hiring process, the prospective employer will usually be a separate data controller and will provide its own privacy information.
      </p>

      <h2>2. What candidate data may I process?</h2>
      <p>Depending on the role and our interaction, I may process:</p>
      <ul>
        <li>identification and contact details;</li>
        <li>CV, employment history, education, qualifications, professional skills and languages;</li>
        <li>public professional-profile information, including LinkedIn profile data;</li>
        <li>role preferences, location, availability, remuneration expectations and right-to-work information;</li>
        <li>notes from calls, interviews, assessments and communications;</li>
        <li>information provided by a person who referred you;</li>
        <li>references, but only where appropriate and with prior notice to you;</li>
        <li>information needed to assess suitability for a particular role and to manage the recruitment process.</li>
      </ul>
      <p>
        Please do not provide special-category data such as health, ethnicity, religion, political opinions or trade-union membership unless it is genuinely necessary. If such data must be processed, I will use an appropriate legal basis and meet the additional requirements of Article 9 GDPR.
      </p>

      <h2>3. Where does the data come from?</h2>
      <p>Data may come:</p>
      <ul>
        <li>directly from you;</li>
        <li>from a person who refers or recommends you;</li>
        <li>from professional networking platforms such as LinkedIn;</li>
        <li>from company websites, professional biographies or other lawful public professional sources;</li>
        <li>from recruitment clients or service providers involved in a hiring process.</li>
      </ul>
      <p>
        Where I obtain your data from another source, I will provide the information required by Article 14 GDPR within the applicable time limit, normally when I first contact you and no later than one month after obtaining it, unless a lawful exception applies.
      </p>

      <h2>4. Why do I process candidate data?</h2>
      <TableWrap>
        <table>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Legal basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>To contact you about a potentially relevant opportunity and assess your possible fit</td>
              <td>My legitimate interests and those of my recruitment client in identifying and engaging suitable professional talent (Art. 6(1)(f) GDPR)</td>
            </tr>
            <tr>
              <td>To discuss your application, preferences and suitability, and to take steps you request in relation to a potential role</td>
              <td>Steps before a possible contract (Art. 6(1)(b) GDPR), where applicable, and legitimate interests (Art. 6(1)(f) GDPR)</td>
            </tr>
            <tr>
              <td>To present your profile to a recruitment client and manage a hiring process</td>
              <td>Legitimate interests (Art. 6(1)(f) GDPR); in practice, I will tell you about the client and obtain your agreement before submitting your identifiable profile</td>
            </tr>
            <tr>
              <td>To comply with legal duties or respond to lawful requests</td>
              <td>Legal obligation (Art. 6(1)(c) GDPR)</td>
            </tr>
            <tr>
              <td>To retain your profile for unrelated future opportunities</td>
              <td>Your consent (Art. 6(1)(a) GDPR), where I ask to keep you in a talent pool beyond the current process</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        You are not legally required to provide candidate data. However, without relevant information I may be unable to assess or present you for a role.
      </p>
      <p>
        I do not make decisions producing legal or similarly significant effects solely by automated means.
      </p>

      <h2>5. Who may receive candidate data?</h2>
      <p>Where relevant and after I have discussed the opportunity with you, candidate data may be shared with:</p>
      <ul>
        <li>the named recruitment client and people involved in its hiring process;</li>
        <li>service providers supporting communication, document storage, scheduling or recruitment administration;</li>
        <li>professional advisers and public authorities where required by law.</li>
      </ul>
      <p>
        I do not sell candidate data. I will not send your identifiable CV or profile to a prospective employer without first telling you which opportunity and client are involved and obtaining your agreement to the submission.
      </p>
      <p>
        Some recipients or providers may be located outside the EEA. Where required, transfers are protected by an adequacy decision, the European Commission&apos;s Standard Contractual Clauses, or another lawful safeguard under Chapter V GDPR. If a specific prospective employer is outside the EEA, I will tell you before your profile is submitted.
      </p>

      <h2>6. How long do I retain candidate data?</h2>
      <ul>
        <li>Data used for a specific recruitment process: normally for the duration of that process and up to 12 months after it ends, unless a longer period is reasonably necessary for a legal claim or required by law.</li>
        <li>Talent-pool data for future, unrelated opportunities: for up to 24 months from your consent or last meaningful contact, after which I will delete it or ask whether you wish to remain in contact.</li>
        <li>A minimal suppression record may be kept where necessary to respect an objection, deletion request or request not to be contacted again.</li>
      </ul>
      <p>
        Retention should always be limited to what is necessary for the stated purpose.
      </p>

      <h2>7. Your rights</h2>
      <p>
        You may request access, correction, deletion, restriction or portability of your personal data, where applicable. You may object at any time to processing based on legitimate interests, including sourcing contact. Where processing relies on consent, you may withdraw it at any time without affecting earlier lawful processing.
      </p>
      <p>
        To exercise your rights or ask not to be contacted again, email <a href="mailto:janaaffum@gmail.com">janaaffum@gmail.com</a>.
      </p>
      <p>
        You may lodge a complaint with the Czech supervisory authority, Úřad pro ochranu osobních údajů, at{' '}
        <a href="https://uoou.gov.cz" target="_blank" rel="noopener noreferrer">
          https://uoou.gov.cz
        </a>.
      </p>

      <h2>8. Updates</h2>
      <p>
        I may update this notice if my recruitment processes or systems change. The current version and its date will appear on this page.
      </p>
      <p>
        For details on general website browsing, technical storage, and client engagements, see the <a href="/privacy">Privacy Policy</a>, <a href="/cookies">Cookie Policy</a>, and <a href="/terms">Website Terms</a>.
      </p>
    </LegalPage>
  );
}
