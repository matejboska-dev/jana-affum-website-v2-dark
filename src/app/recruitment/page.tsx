import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProfessionalExperienceStrip from '@/components/ProfessionalExperienceStrip';
import ServiceContact from '@/components/services/ServiceContact';
import ServiceFaq from '@/components/services/ServiceFaq';
import IndustrySelector from '@/components/services/IndustrySelector';
import InsightDiagram from '@/components/services/InsightDiagram';
import Reveal from '@/components/services/Reveal';
import QuoteCard from '@/components/services/QuoteCard';
import CountUp from '@/components/services/CountUp';
import { Icon } from '@/components/services/ServiceIcons';
import { Button, Kicker, ServiceSchema, SkipLink } from '@/components/services/ServiceShared';
import { approachRows, caseStudy, hiringStats, industries, industryIcons, insightItems, mentoringPoints, onboardingOffer, recruitmentFaq, references, searchOffer } from '@/components/services/service-data';
import HeroPracticePills from '@/components/recruitment/HeroPracticePills';
import s from '@/components/services/services.module.css';

const title = 'International Recruitment & Executive Search | Jana Affum';
const description = 'Reach hard-to-find talent across industries with Jana Affum. International recruitment, deeper candidate insight and optional onboarding care. Europe & global remote.';
export const metadata: Metadata = {
  title, description, alternates: { canonical: '/recruitment' },
  openGraph: { title, description, url: '/recruitment', type: 'website', images: [{ url: '/recruitment/opengraph-image.png', width: 1200, height: 630, alt: 'Jana Affum — International Recruitment & Executive Search' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/recruitment/opengraph-image.png'] },
};

const industryItems = industries.map((industry, i) => ({ ...industry, icon: industryIcons[i] }));

function Offer({ offer, badge, cta, topic, id, fact, image }: { offer: typeof searchOffer; badge?: string; cta: string; topic?: string; id?: string; fact: string; image: { src: string; alt: string; position?: string } }) {
  return <article id={id} className={s.offer}>
    <div className={s.offerPhoto}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 991px) 100vw, 540px" style={{ objectPosition: image.position }}/>{badge && <span className={s.badge}>{badge}</span>}</div>
    <h3 className={s.offerTitle}>{offer.title[0]} <span>{offer.title[1]}</span></h3>
    <p>{offer.text}</p>
    <p className={s.offerFact}>{fact}</p>
    <Button topic={topic}>{cta}</Button>
    <ul className={s.offerList}>{offer.points.map(point => <li key={point}><Icon name="check"/>{point}</li>)}</ul>
  </article>;
}

export default function RecruitmentPage() {
  const { george, danica } = references;
  return <>
    <SkipLink/>
    <Navbar/>
    <main id="main-content" className={s.main}>
      <ServiceSchema kind="recruitment" title={title} description={description}/>

      <section className={s.heroFull} aria-labelledby="recruitment-heading">
        <div className={s.heroDepth} aria-hidden="true"/>
        <div className={`${s.heroFullMedia} ${s.heroFullMediaCutout}`}><Image src="/images/services/jana-recruitment-desk-cutout.webp" alt="Jana Affum, international recruitment partner, seated at her desk" fill priority sizes="(max-width: 991px) 100vw, 62vw"/></div>
        <div className={`base-container w-container ${s.heroFullInner}`}><div className={s.heroFullCopy}>
          <span className="eyebrow">International Recruitment &amp; Executive Search</span>
          <h1 id="recruitment-heading" className={s.heroTitle}>A pivotal role is open. <span className="h1-span">The right person is not applying.</span></h1>
          <p className={s.heroLead}>What you need is access to experienced people — and enough insight to know who is genuinely ready, aligned and worth meeting.</p>
          <div className={s.heroActions}><Button variant="hero">Tell me about the role you need to fill</Button><Button variant="ghost" href="#expertise">Explore my experience</Button></div>
          <HeroPracticePills/>
        </div></div>
      </section>

      <ProfessionalExperienceStrip/>

      <section id="challenge" className={`${s.sec} ${s.white}`} aria-labelledby="certainty-heading"><div className="base-container w-container">
        <Reveal><div className={s.head}>
          <Kicker n="01">The difference</Kicker>
          <h2 id="certainty-heading"><span className="h2-span">You do not need more CVs.</span> You need greater certainty.</h2>
          <p className="item-description-gray">What is missing is not necessarily more candidates. It is a focused recruitment partner who understands your business, reaches the right people and keeps the entire process moving.</p>
        </div></Reveal>
        <div className={s.photoPair}>
          <Reveal><div className={`${s.tile} ${s.photoTile}`}><Image src="/images/jana-international-recruiting.jpg" alt="Jana Affum at a whiteboard sketching international recruiting" fill sizes="(max-width: 600px) 100vw, 570px" style={{ objectPosition: '50% 34%' }}/></div></Reveal>
          <Reveal delay={120}><div className={`${s.tile} ${s.photoTile}`}><Image src="/images/jana-working.jpg" alt="Jana Affum working at a laptop" fill sizes="(max-width: 600px) 100vw, 570px" style={{ objectPosition: '50% 20%' }}/></div></Reveal>
        </div>
        <div className={s.statTrio}>{hiringStats.map((stat, i) => <Reveal key={stat.label} delay={i * 100}><div className={s.stat}>
          <div className={s.statTop}><span className={s.statNum}><CountUp to={stat.to} suffix={stat.suffix}/></span><span className={s.iconCircle}><Icon name={stat.icon}/></span></div>
          <p>{stat.label}</p>
        </div></Reveal>)}</div>
        <div className={s.centerCta}><Button>Let’s discuss what is slowing your hiring down</Button></div>
      </div></section>

      <section id="insight" className={`${s.sec} ${s.ink}`} aria-labelledby="insight-heading"><div className="base-container w-container">
        <Reveal><div className={s.head}>
          <Kicker n="02">The coaching edge</Kicker>
          <h2 id="insight-heading"><span className="h2-span">Where headhunting</span> meets coaching.</h2>
        </div></Reveal>
        <Reveal><div className={s.found}>
          <div className={`${s.tile} ${s.foundPhoto}`}>
            <Image src="/images/jana-coaching.jpg" alt="Jana Affum speaking, microphone in hand" fill sizes="(max-width: 991px) 100vw, 680px"/>
            <ul className={s.foundPills}><li>Certified Coach</li><li>NLP Practitioner</li><li>10+ years in recruitment</li><li>International business &amp; diplomacy</li></ul>
          </div>
          <div className={s.foundSide}>
            <div className={s.signRow}>
              <div className={s.portrait}><Image src="/images/services/jana-standing.png" alt="Jana Affum, certified coach and international recruiter" fill sizes="220px"/></div>
              <div><span className={s.signature}>Jana Affum</span><span className={s.signRole}>Certified Business &amp; Life Coach · 10+ Years International Recruitment</span></div>
            </div>
            <p>For you, this means fewer assumptions. Motivation, readiness for change, unspoken concerns and long-term fit are explored with greater depth.</p>
            <div><Button>Tell me about the role you need to fill</Button></div>
          </div>
        </div></Reveal>
        <Reveal><p className={s.statement}>Coaching does not replace assessment. <span>It improves the conversation.</span></p></Reveal>
        <InsightDiagram questions={[...insightItems]} intro="A strong profile is only the beginning. I look beyond experience and polished interview answers to understand what may ultimately determine the success of the hire:"/>
      </div></section>

      <section id="approach" className={`${s.sec} ${s.white}`} aria-labelledby="approach-heading"><div className="base-container w-container">
        <Reveal><div className={s.head}>
          <Kicker n="03">For companies</Kicker>
          <h2 id="approach-heading"><span className="h2-span">International recruitment</span> &amp; executive search</h2>
        </div></Reveal>
        <div className={s.approach}>
          <ul className={s.rows}>{approachRows.map((row, i) => <li key={row.title}><Reveal delay={i * 60}><div className={s.row}>
            <div className={s.rowTitle}><span className={s.iconCircle}><Icon name={row.icon}/></span><h3>{row.title}</h3></div>
            <p>{row.text}</p>
          </div></Reveal></li>)}</ul>
          <Reveal delay={120}><div className={s.side}>
            <div className={s.tile}><Image src="/images/jana-recruitment-strategy.jpg" alt="Jana Affum presenting an international recruitment strategy at a flipchart" fill sizes="(max-width: 991px) 100vw, 380px"/></div>
            <div className={s.ctaCard}><p>You may have already advertised, searched your network or reviewed profiles that look right but do not feel convincing.</p><Button>Tell me about the role you need to fill</Button></div>
          </div></Reveal>
        </div>
      </div></section>

      <section id="process" className={`${s.sec} ${s.cream}`} aria-labelledby="process-heading"><div className="base-container w-container">
        <Reveal><div className={`${s.head} ${s.headCenter}`}>
          <Kicker n="04">Working together</Kicker>
          <h2 id="process-heading"><span className="h2-span">From recruitment pressure</span> to a process you can trust.</h2>
        </div></Reveal>
        <div className={s.offers}>
          <Reveal><Offer offer={searchOffer} fact="Start with a complimentary 15-minute conversation." cta="Tell me about the role you need to fill" image={{ src: '/images/stock/consultation-office.jpg', alt: 'Two professionals discussing a hiring brief at a desk in a modern office', position: '50% 40%' }}/></Reveal>
          <Reveal delay={120}><Offer offer={onboardingOffer} id="onboarding" badge="Optional" fact="Scope agreed separately." cta="Ask about onboarding support" topic="Onboarding Care" image={{ src: '/images/stock/team-sunlit-office.jpg', alt: 'A new team settling in around a sunlit office workspace', position: '50% 55%' }}/></Reveal>
        </div>
      </div></section>

      <section id="expertise" className={`${s.sec} ${s.white}`} aria-labelledby="expertise-heading"><div className="base-container w-container">
        <Reveal><div className={s.head}>
          <Kicker n="05">Experience</Kicker>
          <h2 id="expertise-heading"><span className="h2-span">International recruitment</span> across industries</h2>
          <p className="item-description-gray">From technology and manufacturing to finance and healthcare. Explore examples of the roles I have worked on, then tell me about yours. Your role doesn’t fit neatly into a category? <a href="#booking" className={s.inlineLink}>Let’s talk about it.</a></p>
        </div></Reveal>
        <Reveal><IndustrySelector industries={industryItems}/></Reveal>
      </div></section>

      <section id="proof" className={`${s.sec} ${s.ink}`} aria-labelledby="proof-heading"><div className="base-container w-container">
        <Reveal><div className={s.head}>
          <Kicker n="06">Proof</Kicker>
          <h2 id="proof-heading"><span className="h2-span">Real partnerships:</span> what clients and candidates say</h2>
        </div></Reveal>
        <Reveal><div className="quote-grid">
          <QuoteCard quote={`${george.quote}\n\n${george.more}`} name={george.name} role={george.role} image={george.image}/>
          <QuoteCard quote="Jana was instrumental in helping me secure my new role. She acted as a true career partner and followed up after every interview stage. I cannot recommend Jana highly enough." name="Senior Infrastructure Specialist" role="Cloud &amp; NetDevOps · Placed Candidate (Confidential)"/>
          <QuoteCard quote={`${danica.quote}\n\n${danica.more}`} name={danica.name} role={danica.role} image={danica.image}/>
        </div></Reveal>
        <Reveal><div className="card" style={{ padding: '40px 36px', marginTop: 20 }}>
          <div className="case-study-badge" style={{ color: 'var(--primary)', marginBottom: 14 }}>Case Study • International Search (Confidential)</div>
          <h3 style={{ fontSize: 'var(--t-subhead)', lineHeight: 'var(--lh-head)', color: '#fff', marginBottom: 14, maxWidth: '28ch' }}>Senior infrastructure candidate in a multi-stage international process</h3>
          <p style={{ fontSize: 'var(--t-body)', lineHeight: 'var(--lh-body)', color: 'rgba(255,255,255,0.8)', maxWidth: 'var(--measure-wide)', margin: '0 0 20px 0' }}>A senior infrastructure specialist entered a multi-round international selection process. Through consistent feedback and structured preparation at every stage, Jana prevented the uncertainty that typically causes strong candidates to disengage. The result: a confident candidate, a decisive hiring committee, and a placement that held.</p>
          <div style={{ borderTop: '1px solid rgba(211, 175, 101, 0.25)', paddingTop: 18 }}>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255, 255, 255, 0.92)', fontStyle: 'italic', margin: '0 0 8px 0' }}>“Jana was instrumental in helping me secure my new role. She acted as a true career partner and followed up after every interview stage. I cannot recommend Jana highly enough.”</p>
            <p style={{ fontSize: 12, color: 'rgba(255, 255, 255, 0.6)', margin: 0 }}>— Placed Candidate • Senior Infrastructure Specialist (Identity protected under NDA)</p>
          </div>
        </div></Reveal>
      </div></section>

      <section className={`${s.sec} ${s.white}`} aria-labelledby="mentoring-heading"><div className="base-container w-container">
        <Reveal><div className={`${s.panel} ${s.panelLight}`}>
          <div>
            <Kicker n="07">Phone a Recruiter</Kicker>
            <h2 id="mentoring-heading">Recruitment can be <span className="h2-span">a surprisingly lonely profession.</span></h2>
            <p>I offer a confidential thinking space for recruiters, recruitment founders and talent acquisition professionals who want an experienced second perspective — without judgement, internal politics or generic advice.</p>
          </div>
          <div>
            <ul className={s.mentoringPoints}>{mentoringPoints.map(point => <li key={point}><span className={s.iconCircle} style={{ width: 28, height: 28 }}><Icon name="check" size={14}/></span>{point}</li>)}</ul>
            <p className={s.small}>You remain the decision-maker. You simply do not have to think through every decision alone.</p>
            <Button topic="Recruitment mentoring">Discuss recruitment mentoring</Button>
          </div>
        </div></Reveal>
      </div></section>

      <ServiceFaq items={recruitmentFaq} number="08" about="international recruitment"/>
      <ServiceContact kind="recruitment"/>
    </main>
    <Footer/>
  </>;
}
