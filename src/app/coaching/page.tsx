import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProfessionalExperienceStrip from '@/components/ProfessionalExperienceStrip';
import ServiceContact from '@/components/services/ServiceContact';
import ServiceFaq from '@/components/services/ServiceFaq';
import { Button, Kicker, ServiceSchema, SkipLink } from '@/components/services/ServiceShared';
import Reveal from '@/components/services/Reveal';
import { Icon, type IconName } from '@/components/services/ServiceIcons';
import { coachingFaq, expatPoints, partnershipSteps, situations } from '@/components/services/service-data';
import s from '@/components/services/services.module.css';

const title = 'Private & Expat Coaching | English-Speaking Coach | Jana Affum';
const description = 'Private coaching for career and life transitions. Jana Affum, an English-speaking coach in Prague, works with leaders, expats and international professionals.';
export const metadata: Metadata = {
  title, description, alternates: { canonical: '/coaching' },
  openGraph: { title, description, url: '/coaching', type: 'website', images: [{ url: '/coaching/opengraph-image.png', width: 1200, height: 630, alt: 'Jana Affum — Private Coaching & Thinking Partnership' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/coaching/opengraph-image.png'] },
};

const situationIcons: IconName[] = ['compass', 'target', 'globe'];
const expatIcons: IconName[] = ['compass', 'globe', 'swap', 'anchor'];

export default function CoachingPage() {
  return <>
    <SkipLink/>
    <Navbar/>
    <main id="main-content" className={s.main}>
      <ServiceSchema kind="coaching" title={title} description={description}/>

      <section className={s.heroFull} aria-labelledby="coaching-heading">
        <div className={`${s.heroFullMedia} ${s.heroFullMediaSmall}`}><Image src="/images/services/jana-portrait.webp" alt="Jana Affum, certified coach and private thinking partner" fill priority sizes="(max-width: 991px) 100vw, 62vw" style={{ objectPosition: '50% 15%' }}/></div>
        <div className={`base-container w-container ${s.heroFullInner}`}><div className={s.heroFullCopy}>
          <span className="eyebrow">Private Coaching &amp; Thinking Partnership</span>
          <h1 id="coaching-heading" className={s.heroTitle}>Successful on paper. <span className="h1-span">What about you?</span></h1>
          <p className={s.heroLead}>Your life looks good from the outside. Something no longer fits. A private space to think honestly about your career, your choices and what comes next.</p>
          <div className={s.heroActions}><Button variant="hero">Let’s talk about what’s next</Button><Button variant="ghost" href="#your-next-chapter">Does this sound familiar?</Button></div>
          <p className={s.heroMeta}>15 minutes · Complimentary · Just a conversation</p>
          <p className={s.heroFacts}>Certified Coach &amp; NLP Practitioner · 10+ years of international recruitment · English &amp; Czech</p>
        </div></div>
      </section>

      <ProfessionalExperienceStrip />

      <section id="your-next-chapter" className={`${s.sec} ${s.white}`} aria-labelledby="situations-heading"><div className="base-container w-container">
        <Reveal><div className={s.head}>
          <Kicker n="01">What brings you here</Kicker>
          <h2 id="situations-heading"><span className="h2-span">You don’t need a crisis</span> to want something different.</h2>
          <p className="item-description-gray">Sometimes it begins with a question you can’t put down. Sometimes it is a decision you can’t discuss openly with the people around you.</p>
        </div></Reveal>
        <ul className={s.cols}>{situations.map(([quote, label, text], i) => <li key={label} className={s.col}><Reveal delay={i * 100}>
          <span className={s.iconCircle}><Icon name={situationIcons[i]}/></span>
          <h3 className={s.pullLine}>{quote}</h3>
          <p><strong>{label}</strong> {text}</p>
        </Reveal></li>)}</ul>
        <div className={s.centerCta}><Button>Let’s talk about what’s next</Button></div>
      </div></section>

      <section className={`${s.ink} ${s.question}`} aria-labelledby="question-heading">
        <svg className={s.rings} viewBox="0 0 800 800" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><g fill="none" stroke="rgba(211,175,101,.16)"><circle cx="400" cy="400" r="120"/><circle cx="400" cy="400" r="210"/><circle cx="400" cy="400" r="300" strokeDasharray="2 9" strokeLinecap="round"/><circle cx="400" cy="400" r="390"/></g></svg>
        <div className="base-container w-container" style={{ position: 'relative' }}>
          <Reveal><h2 id="question-heading">What do you <span className="h2-span">actually</span> want to do?</h2></Reveal>
          <Reveal delay={100}><p>Not what looks sensible, not what others expect. You may not have an answer yet, and that is a place to begin.</p></Reveal>
        </div>
      </section>

      <section id="expat-coaching" className={`${s.sec} ${s.cream}`} aria-labelledby="expat-heading"><div className="base-container w-container">
        <Reveal><div className={s.head}>
          <Kicker n="02">Coaching for Expats &amp; International Professionals</Kicker>
          <h2 id="expat-heading"><span className="h2-span">A life across borders.</span> A direction that’s yours.</h2>
          <p className="item-description-gray">Living abroad can expand your world, and quietly unsettle your sense of direction.</p>
        </div></Reveal>
        <div className={s.approach}>
          <div>
            <Reveal><p className={s.bodyLead}>You may have built an international career and still be questioning where you belong. This is space to explore what has changed, without losing yourself in what comes next.</p></Reveal>
            <ul className={s.rows}>{expatPoints.map((point, i) => <li key={point}><Reveal delay={i * 60}><div className={s.pointRow}>
              <span className={s.iconCircle}><Icon name={expatIcons[i]}/></span><h3>{point}</h3>
            </div></Reveal></li>)}</ul>
            <Reveal><p className={s.bodyNote}>An English-speaking coach in Prague, working with international professionals across Europe and global remote. Conversations in English or Czech.</p></Reveal>
          </div>
          <Reveal delay={120}><div className={s.side}>
            <div className={s.tile}><Image src="/images/services/jana-abroad.webp" alt="Jana Affum at a café, bringing an international perspective to private coaching" fill sizes="(max-width: 991px) 100vw, 380px" style={{ objectPosition: '50% 30%' }}/></div>
            <div className={s.ctaCard}><p>Working across careers, countries and cultures, without losing yourself in what comes next.</p><Button topic="Expat & international coaching">Talk through your next chapter</Button></div>
          </div></Reveal>
        </div>
      </div></section>

      <section id="partnership" className={`${s.sec} ${s.white}`} aria-labelledby="partnership-heading"><div className="base-container w-container">
        <Reveal><div className={s.head}>
          <Kicker n="03">The thinking partnership</Kicker>
          <h2 id="partnership-heading"><span className="h2-span">Take off the mask.</span> Keep the ambition.</h2>
          <p className="item-description-gray">Bring the uncertainty. Bring the crazy idea. Bring the part you don’t normally tell people. You will be listened to without judgement, and you will still be challenged.</p>
        </div></Reveal>
        <div className={s.journeyWrap}>
          <Reveal><div className={`${s.tile} ${s.journeyPhoto}`}><Image src="/images/services/jana-conversation.webp" alt="Jana Affum seated with a notebook, ready for a private conversation" fill sizes="(max-width: 991px) 100vw, 480px" style={{ objectPosition: '50% 25%' }}/></div></Reveal>
          <ol className={s.journey}>{partnershipSteps.map(([heading, body], i) => <li key={heading}><Reveal delay={i * 100}>
            <span className={s.journeyNum}>{i + 1}</span>
            <div><h3>{heading}</h3><p>{body}</p></div>
          </Reveal></li>)}</ol>
        </div>
        <Reveal><p className={s.aside} style={{ textAlign: 'center' }}>Limited private engagements, agreed by conversation.</p></Reveal>
      </div></section>

      <section id="about" className={`${s.sec} ${s.ink}`} aria-labelledby="about-heading"><div className="base-container w-container">
        <Reveal><div className={s.head}>
          <Kicker n="04">Your thinking partner</Kicker>
          <h2 id="about-heading"><span className="h2-span">A human conversation.</span> A real-world perspective.</h2>
        </div></Reveal>
        <Reveal><div className={s.found}>
          <div className={`${s.tile} ${s.foundPhoto}`}>
            <Image src="/images/jana-coaching.jpg" alt="Jana Affum speaking, microphone in hand" fill sizes="(max-width: 991px) 100vw, 680px"/>
            <ul className={s.foundPills}><li>Certified Coach</li><li>NLP Practitioner</li><li>International recruitment</li></ul>
          </div>
          <div className={s.foundSide}>
            <div className={s.signRow}>
              <div className={s.portrait}><Image src="/images/services/jana-standing.png" alt="Jana Affum, certified business and life coach" fill sizes="220px"/></div>
              <div><span className={s.signature}>Jana Affum</span></div>
            </div>
            <p>I am a certified business and life coach, and I still recruit. My advice is grounded in what is actually happening in the market today, not in theory.</p>
            <p>More than a decade in international recruitment, alongside experience in business and diplomacy, has meant thousands of confidential conversations about ambition, difficult decisions and change.</p>
            <div><Button>Start a private conversation</Button></div>
          </div>
        </div></Reveal>
        <Reveal><figure style={{ margin: 0 }}><p className={s.statement}>“There is very little you could tell me that would make me <span>think less of you.”</span></p><figcaption className={s.pullBy} style={{ marginTop: 20 }}>Jana Affum</figcaption></figure></Reveal>
      </div></section>

      <section id="proof" className={`${s.sec} ${s.cream}`} aria-labelledby="coaching-proof-heading"><div className="base-container w-container">
        <Reveal><div className={s.head}>
          <Kicker n="05">In a client’s words</Kicker>
          <h2 id="coaching-proof-heading"><span className="h2-span">Trust makes room</span> for honest thinking.</h2>
        </div></Reveal>
        <Reveal><figure className={s.testimonial}>
          <blockquote>Jana rocks! She is both intellectually sound and passionate about her work. Also she is humble and respectful of others, a person I highly respect and recommend.</blockquote>
          <figcaption className={s.testimonialBy}><Image src="/images/testimonials/brian-piper.jpg" alt="" width={52} height={52}/><div><strong>Brian S. Piper</strong><span>Client reference</span></div></figcaption>
        </figure></Reveal>
      </div></section>

      <ServiceFaq items={coachingFaq} number="06" about="private coaching"/>
      <ServiceContact kind="coaching"/>
    </main>
    <Footer/>
  </>;
}
