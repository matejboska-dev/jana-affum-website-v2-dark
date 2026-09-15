# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary — the corporate professional at a crossroads.** Mid-to-senior, often a decade or more into a corporate career. The work still gets done; nothing about it moves them anymore. They want out but not down: leaving risks the salary, the title and the security they built. They know their role but are much less sure what their value is outside the org chart, or who is hiring for it. They arrive privately, often from LinkedIn, and are wary of being sold to.

Geography is international and English-speaking, weighted toward Europe and Switzerland. Seniority spans senior individual contributors, engineers, executives and founders.

**Secondary — companies hiring IT talent.** Jana's recruitment practice serves employers directly. On the site this audience is a quiet offramp only ("Hiring IT talent instead?"), never a competing primary path, and never weighted equally with coaching on the homepage.

## Product Purpose

One-to-one executive and career coaching for people deciding whether to leave a corporate role. The work evaluates real market value, tests whether the move under consideration is financially viable, and produces a concrete transition plan rather than a feeling.

The site's single job is to get the right person onto a free 15-minute fit call. Success is booked calls that convert into coaching engagements — not traffic, not newsletter volume.

## Positioning

Coaching from someone who spent ten years on the other side of the table deciding who gets hired. Jana Affum is a certified business and life coach with over ten years of international executive IT recruitment experience, so the market reality check is backed by actual hiring intelligence rather than general coaching frameworks. A neighbouring life coach could not truthfully make the recruiter claim; a recruiter could not truthfully make the coaching one.

## Operating Context

- **Entry point:** a free 15-minute fit call. No form marathon — the visitor picks a slot. Both sides establish fit; if coaching is not what the person needs, they are told so.
- **Stated path:** book the 15-minute call → a first session that maps where the client actually is → the client leaves with a concrete next step. The content of steps two and three is not yet decided (see below).
- **Formats offered:** a single 60-minute intensive with a recruiter market reality check and a written summary of next actions; a structured multi-session transition programme (the most-chosen format); and an ongoing bi-weekly strategic partnership for founders, executives and freelancers.
- **Recurring deliverables inside the work:** corporate skills audit and market positioning, executive CV and LinkedIn overhaul, interview preparation, compensation negotiation, financial-runway planning for the exit, and async WhatsApp/email support between sessions.
- **Lead magnet:** a free digital copy of Jana's book on international recruitment and career positioning.

## Capabilities and Constraints

**Scope, as of 2026-08-30:** `index.html` only. It is the one page being taken to a shippable standard.

- The navigation and footer currently link to `coaching.html`, `recruitment.html`, `case-studies.html`, `about.html`, `contact.html`, `coaching-burnout.html`, `coaching-career-change.html` and `coaching-cv-linkedin.html`. **None of these exist.** They are to be resolved — anchors, or removed — not built, until scope changes.
- The repository also contains untouched Webflow demo pages (`home-1..4`, `blog`, `pricing`, `services`, `shop`, `faq`, `contact-us`). These are template scrap, not product surfaces, and carry no product truth.

**Technical:** static multi-page site built from a Webflow "Consultant W" export. One compiled stylesheet (`css/consultant-w-wcopilot.webflow.*.css`, ~419 KB), jQuery 3.5.1 plus the Webflow runtime, self-hosted font files, and Google Fonts loaded over the network. Served locally by a plain Node static server (`server.js`, port 3000) with a hand-maintained `ROUTE_MAP`; `npm start` or `start.bat` runs it. There is no build step and no framework.

**Language and market:** English only, international audience. The Czech legal identity appears in the footer as a legal requirement, not as a market signal. No localization is planned; nothing should be structured as if a Czech version were coming.

**Explicitly undecided — do not invent:**

- Prices for all three formats.
- The name of the main programme, its session count, and the name of the ongoing format.
- What actually happens in session one, and what the client walks away with.
- The email-capture tool for the book.
- The booking mechanism. Every call-to-action currently points at the in-page `#booking` anchor; no scheduling tool is wired up.

These are marked `[PLACEHOLDER: …]` in `index.html` and must stay visibly unresolved until the answers arrive.

## Brand Commitments

- Name and identity: **Jana Affum**, trading under her own name. Logo at `images/jana-logo.jpg`, favicon at `images/jana-favicon.jpg`.
- Photography of Jana exists and is committed (`images/jana-affum-hero.png`, `jana-about.png`, `jana-career.png`, `jana-coaching.jpg`, `jana-editorial.jpg`, `jana-recruitment.jpg`, `jana-pointing.png`, `jana-pointing-right.png`).
- Voice: direct, plain, unhyped, first-person. It names the reader's situation rather than describing the service. No urgency devices, no manufactured scarcity.
- **Anti-pitch is a commitment, not a tone.** "No pitch, no obligation." "If coaching is not what you need, I will tell you upfront." Any copy that contradicts this breaks the offer.
- **Required disclaimer, verbatim in substance:** coaching is not psychological, psychiatric, medical or psychotherapeutic care and does not replace diagnosis, treatment or crisis intervention. It must remain present wherever burnout or mental strain is discussed.
- **Required legal line:** Jana Affum · Business ID: 13956248 · VAT ID: CZ8952264651 · Registered office: tř. Dukelských hrdinů 3789/84, 695 01 Hodonín, Czech Republic.
- Canonical domain in existing structured data: `janaaffum.com`.

## Evidence on Hand

**Real, attributed testimonials** (full text in `index.html`, headshots in `images/testimonials/`):

- George Bakkeren — Founder & Owner, Deliver-IT Switzerland.
- Zoltan Erdely — Senior NetDevOps Engineer, Hybrid Cloud & Automation; placed by Jana.
- Danica Miller — Global Senior Manager Talent Acquisition & Employer Branding, STADA Arzneimittel AG. A LinkedIn Superuser recognition with hard figures: 158 active days over eight months, 1,394 profiles viewed, 1,113 InMails sent, 297 accepted.
- Obinna Stanley Okpara — candidate and IT professional.
- Brian S. Piper — executive client.

**Other assets:** employer/partner logos in `images/logos/` (including IBM and Rohde) used under a "experience with global enterprises & hiring partners" framing; a 3D book cover (`images/book-cover-3d.png`); the book itself, whose print-edition proceeds support the education and welfare of a child in Ghana; public profiles on [LinkedIn](https://www.linkedin.com/in/jana-affum-0aa979197) and [Instagram](https://www.instagram.com/janaaffum/); and Schema.org `Person` + `Service` markup already embedded in `index.html`.

**Absences that must not be filled with invention:** there are no written case studies, no quantified client outcomes (no placement rates, salary uplift figures, client counts, or success percentages), no published prices, no press coverage, and no certifications named beyond "certified business and life coach". Note also that the logo row evidences Jana's own professional experience, not client endorsement — it must never be captioned as "trusted by" or "our clients".

## Product Principles

1. **The 15-minute call is the only conversion.** Every surface routes there. No second primary action competes with it.
2. **Authority comes from the hiring side of the table.** Any claim of insight should trace back to ten years of deciding who gets hired. Generic coaching language dilutes the one thing a competitor cannot copy.
3. **Honesty is the sales mechanism.** Being told "this isn't for you" is part of the offer. Pressure tactics do not just clash with the voice — they contradict the product.
4. **Career strategy, never therapy.** Burnout is addressed as a career and financial problem. The disclaimer stays; clinical framing does not enter.
5. **Undecided stays visibly undecided.** Prices, programme details and outcomes are placeholders until the client supplies them. Plausible-sounding filler is worse than an obvious gap.
