import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://janaaffum.com'),
  title: 'Jana Affum | International Recruitment & Private Coaching',
  description:
    'Find and assess hard-to-reach international talent with greater depth, or gain a discreet private thinking partner for a pivotal career, business or life decision.',
  icons: {
    icon: [
      { url: '/images/jana-favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/jana-favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/images/jana-apple-touch-icon.png',
  },
  openGraph: {
    title: 'Jana Affum | International Recruitment & Private Coaching',
    description:
      'Find and assess hard-to-reach international talent with greater depth, or gain a discreet private thinking partner for a pivotal career, business or life decision.',
    url: 'https://janaaffum.com',
    siteName: 'Jana Affum',
    images: [
      {
        url: '/images/jana-affum-hero.png',
        width: 1200,
        height: 630,
        alt: 'Jana Affum - Executive Career Coach',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jana Affum | International Recruitment & Private Coaching',
    description: 'International recruitment and private coaching for pivotal decisions.',
    images: ['/images/jana-affum-hero.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://janaaffum.com/#person',
      name: 'Jana Affum',
      url: 'https://janaaffum.com',
      image: 'https://janaaffum.com/images/jana-affum-hero.png',
      jobTitle: 'International Recruiter & Private Coach',
      description:
        'Certified business and life coach with over 10 years of international executive recruitment experience.',
      sameAs: [
        'https://www.linkedin.com/in/jana-affum-0aa979197',
        'https://www.instagram.com/janaaffum/',
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://janaaffum.com/#service-recruitment',
      name: 'International Recruitment & Executive Search',
      provider: {
        '@id': 'https://janaaffum.com/#person',
      },
      description:
        'Boutique international executive search for companies hiring pivotal technology and leadership talent across Europe and beyond.',
      serviceType: 'Executive Recruitment',
    },
    {
      '@type': 'Service',
      '@id': 'https://janaaffum.com/#service-coaching',
      name: 'Private Coaching & Thinking Partnership',
      provider: {
        '@id': 'https://janaaffum.com/#person',
      },
      description:
        'Private coaching for leaders and professionals navigating career transitions, cross-cultural moves, or pivotal life decisions.',
      serviceType: 'Career and Life Coaching',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://janaaffum.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How is this different from a standard recruitment agency?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most agencies match keywords on a CV. I bring ten years of hiring intelligence and a coaching-trained ear to every search: understanding what genuinely drives a candidate to move, where expectations might diverge, and what could weaken their commitment after an offer. You receive a small, thoroughly vetted shortlist, not a stack of CVs to sort through yourself.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you recruit outside the Czech Republic?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. My search work spans the Czech Republic, Switzerland, and clients across Europe, alongside international and remote mandates. I specialize in Data, AI, Cloud, Cybersecurity, and Software leadership roles, and conversations run in Czech or English depending on what works for your team.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does coaching with a former recruiter differ from traditional career coaching?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most career coaches work from theoretical frameworks or life-coaching models. Because I spent ten years on the hiring side of the table managing executive IT recruitment across 9 countries, our work is backed by real hiring intelligence: how decision-makers evaluate senior talent, what the market actually pays, and how to position your track record to negotiate maximum compensation.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens during the free 20-minute fit call? Is there really no pitch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There is zero pitch and zero pressure. We spend twenty minutes evaluating your situation, where you feel stuck, and what move you are considering. If coaching is a fit and can solve your problem, I explain how we would work together. If it is not what you need, I will tell you directly and point you toward better resources.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I participate in coaching while still employed in my full-time corporate role?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The majority of my clients are currently in demanding senior corporate positions. All sessions and async messaging are strictly confidential, flexible around executive schedules, and designed to map out a safe transition plan without risking your current employment or reputation.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know if I need career transition coaching versus therapy or medical leave?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Coaching focuses on career strategy, market value, executive decision-making, and navigating professional transitions. It is not psychotherapy, psychiatric care, or clinical crisis support. If you are experiencing clinical depression or severe medical exhaustion, healthcare professionals must come first.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I decide during coaching that I want to stay in corporate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "That is a completely successful outcome. Strategic clarity often reveals that the career itself isn't the problem, but rather specific boundaries, compensation misalignment, or internal positioning. The goal is to give you certainty and leverage, whether you choose to transition or stay.",
          },
        },
        {
          '@type': 'Question',
          name: 'How are sessions conducted and what is the typical structure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'All sessions take place 1-on-1 via secure video call. Depending on your format (single 60-minute intensive or multi-session transition programme), we conduct skills audits, market reality checks, CV & LinkedIn overhauls, and interview preparation, with ongoing async WhatsApp/email support between calls.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <head>
        <link
          rel="preload"
          href="/fonts/656363843a32e4fa57eb530a_Satoshi-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/656363843a32e4fa57eb5303_Satoshi-Bold.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="body-white">{children}</body>
    </html>
  );
}
