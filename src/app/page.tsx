import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatStrip from '@/components/StatStrip';
import Recognition from '@/components/Recognition';
import ForCompanies from '@/components/ForCompanies';
import Proof from '@/components/Proof';
import PrivateAdvisory from '@/components/PrivateAdvisory';
import WhyJana from '@/components/WhyJana';
import Credibility from '@/components/Credibility';
import GlobalNote from '@/components/GlobalNote';
import BookPromo from '@/components/BookPromo';
import Faq from '@/components/Faq';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import Reveal from '@/components/services/Reveal';
import type { Metadata } from 'next';

export const metadata: Metadata = { alternates: { canonical: '/' } };

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatStrip />
      <Reveal><Recognition /></Reveal>
      <Reveal><ForCompanies /></Reveal>
      <Reveal><Proof /></Reveal>
      <Reveal><PrivateAdvisory /></Reveal>
      <Reveal><WhyJana /></Reveal>
      <Reveal><Credibility /></Reveal>
      <Reveal><GlobalNote /></Reveal>
      <Reveal><BookPromo /></Reveal>
      <Reveal><Faq /></Reveal>
      <Reveal><FinalCta /></Reveal>
      <Footer />
    </main>
  );
}
