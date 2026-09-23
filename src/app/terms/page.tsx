import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Website Terms | Jana Affum',
  description:
    'Terms of use for janaaffum.com, including what coaching and recruitment information does and does not cover.',
  alternates: { canonical: '/terms' },
};

export default function Terms() {
  return (
    <LegalPage
      title="Website Terms"
      intro="Plain terms for using this website. Recruitment and coaching engagements are agreed separately, in writing, after an introductory conversation."
      currentPath="/terms"
    >
      <h2>Who operates this site</h2>
      <p>
        Jana Affum, sole trader, Business ID (IČO) 13956248, VAT ID CZ8952264651, registered office tř. Dukelských hrdinů 3789/84, 695 01 Hodonín, Czech Republic. Email: <a href="mailto:janaaffum@gmail.com">janaaffum@gmail.com</a>.
      </p>

      <h2>Information, not an offer</h2>
      <p>
        The content of this website describes my services and experience. It is not a binding offer. Scope, fees and conditions are agreed with you individually before any engagement starts.
      </p>

      <h2>Coaching is not therapy</h2>
      <p>
        Coaching supports reflection, decisions and change. It is not psychological, psychiatric, medical or psychotherapeutic care and does not replace diagnosis, treatment or crisis intervention. If you are in crisis or worried about your health, please contact a qualified professional or your local emergency service.
      </p>

      <h2>Recruitment</h2>
      <p>
        I do not guarantee that a search will result in a hire or that a candidate will accept an offer. Client and candidate information is treated confidentially. Testimonials and case studies are shown with the permission of the people involved or anonymised, and reflect individual experiences.
      </p>

      <h2>Free introductory conversation</h2>
      <p>
        The 15-minute introductory conversation is complimentary and carries no obligation on either side.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Text, images and design on this website belong to Jana Affum or are used with permission. Please do not copy or republish them without written consent. You are welcome to link to any page.
      </p>

      <h2>Liability</h2>
      <p>
        I take care that the information here is accurate, but it is provided as is and may change. To the extent permitted by law, I am not liable for decisions made solely on the basis of website content.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by Czech law. Consumers keep any mandatory rights granted by the law of their country of residence.
      </p>

      <p>
        See also the <a href="/privacy">Privacy &amp; GDPR Policy</a>, <a href="/candidate-privacy">Candidate GDPR Notice</a>, and <a href="/cookies">Cookie Policy</a>.
      </p>
    </LegalPage>
  );
}
