import type { Metadata } from 'next';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RecruitmentHero from '@/components/recruitment/RecruitmentHero';
import TheCoachingEdge from '@/components/recruitment/TheCoachingEdge';
import BeyondTheCv from '@/components/recruitment/BeyondTheCv';
import OnboardingCare from '@/components/recruitment/OnboardingCare';
import RecruitmentProof from '@/components/recruitment/RecruitmentProof';
import PhoneRecruiter from '@/components/recruitment/PhoneRecruiter';
import RecruitmentContact from '@/components/recruitment/RecruitmentContact';

export const metadata: Metadata = {
  title: 'International Recruitment & Executive Search | Jana Affum',
  description:
    'Boutique executive search and technology recruitment across Europe and Switzerland. Fewer candidates, deeper assessment, and 90-day onboarding care for senior tech leadership.',
  openGraph: {
    title: 'International Recruitment & Executive Search | Jana Affum',
    description:
      'Find and assess hard-to-reach technology leadership and specialists with greater depth and certainty. Specializing in Data, AI, Cloud, Cybersecurity, and Software Architecture.',
    url: 'https://janaaffum.com/recruitment',
    siteName: 'Jana Affum',
    images: [
      {
        url: '/images/jana-recruitment-search.jpg',
        width: 1200,
        height: 630,
        alt: 'Jana Affum - International Executive Search',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'International Recruitment & Executive Search | Jana Affum',
    description:
      'Boutique executive search and tech recruitment across Europe and Switzerland.',
    images: ['/images/jana-recruitment-search.jpg'],
  },
};

export default function RecruitmentPage() {
  return (
    <main>
      <Navbar />
      <RecruitmentHero />
      <TheCoachingEdge />
      <BeyondTheCv />
      <OnboardingCare />
      <RecruitmentProof />
      <PhoneRecruiter />
      <RecruitmentContact />
      <Footer />
    </main>
  );
}
