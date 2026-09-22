export type Enquiry = {
  name: string;
  email: string;
  message: string;
  topic?: string;
  language?: string;
  company?: string;
  source: 'home' | 'recruitment' | 'coaching' | string;
  website?: string;
};

const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '0e0c6d3b-9f42-4878-b35f-ddaa5959a79c';

/**
 * Sends enquiry through Web3Forms client-side API, customized per source:
 * - Homepage: 15-minute fit call enquiry
 * - Recruitment: Hiring & search mandate enquiry (with company, topic, language)
 * - Coaching: Private coaching enquiry (with topic, language)
 */
export async function sendEnquiry(data: Enquiry): Promise<boolean> {
  // Honeypot: silently accept bots without sending spam email
  if (data.website && data.website.trim().length > 0) {
    return true;
  }

  try {
    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('replyto', data.email.trim());

    if (data.source === 'recruitment') {
      const topic = data.topic || 'Hiring';
      formData.append('from_name', 'Jana Affum Recruitment');
      formData.append('subject', `Recruitment enquiry: ${topic} — ${data.name}`);
      formData.append('Full Name', data.name);
      formData.append('Email Address', data.email);
      if (data.company) {
        formData.append('Company', data.company);
      }
      formData.append('Topic', topic);
      formData.append('Preferred Language', data.language || 'English');
      formData.append('Tell me about your hiring needs', data.message);
      formData.append('Source Page', 'Recruitment (/recruitment)');
    } else if (data.source === 'coaching') {
      const topic = data.topic || 'Private coaching';
      formData.append('from_name', 'Jana Affum Coaching');
      formData.append('subject', `Coaching enquiry: ${topic} — ${data.name}`);
      formData.append('Full Name', data.name);
      formData.append('Email Address', data.email);
      formData.append('Topic', topic);
      formData.append('Preferred Language', data.language || 'English');
      formData.append('What would make this conversation valuable', data.message);
      formData.append('Source Page', 'Coaching (/coaching)');
    } else {
      // Homepage
      formData.append('from_name', 'Jana Affum Website');
      formData.append('subject', `Homepage enquiry — ${data.name}`);
      formData.append('Full Name', data.name);
      formData.append('Email Address', data.email);
      formData.append('What would make this conversation valuable', data.message);
      formData.append('Source Page', 'Homepage (/#booking)');
    }

    // Standard fields expected by Web3Forms dashboard and notifications
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) return false;
    const json = await res.json();
    return Boolean(json.success);
  } catch {
    return false;
  }
}
