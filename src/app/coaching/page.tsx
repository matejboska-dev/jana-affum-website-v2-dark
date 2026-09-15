import type { Metadata } from 'next';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CoachingHero from '@/components/coaching/CoachingHero';
import WhatBringsYouHere from '@/components/coaching/WhatBringsYouHere';
import ExpatCoaching from '@/components/coaching/ExpatCoaching';
import TakeOffTheMask from '@/components/coaching/TakeOffTheMask';
import CoachingProof from '@/components/coaching/CoachingProof';
import CoachingContact from '@/components/coaching/CoachingContact';

export const metadata: Metadata = {
  title: 'Private Coaching & Thinking Partnership | Jana Affum',
  description:
    'Discreet executive coaching for leaders at a crossroads and expat professionals in Prague and across Europe. English-speaking executive coach with 10+ years in international recruitment.',
  openGraph: {
    title: 'Private Coaching & Thinking Partnership | Jana Affum',
    description:
      'A confidential thinking partnership for leaders navigating career transitions, cross-border moves, or pivotal life decisions. English-speaking coach in Prague.',
    url: 'https://janaaffum.com/coaching',
    siteName: 'Jana Affum',
    images: [
      {
        url: '/images/jana-coaching.jpg',
        width: 1200,
        height: 630,
        alt: 'Jana Affum - Private Coaching & Thinking Partnership',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private Coaching & Thinking Partnership | Jana Affum',
    description:
      'Discreet executive coaching and career transition strategy for leaders and expats.',
    images: ['/images/jana-coaching.jpg'],
  },
};

export default function CoachingPage() {
  return (
    <main>
      <Navbar />
      <CoachingHero />
      <WhatBringsYouHere />
      <ExpatCoaching />
      <TakeOffTheMask />
      <CoachingProof />
      <CoachingContact />
      <Footer />
    </main>
  );
}
