# Recruitment and coaching rebuild

The two service pages are rebuilt around Jana’s supplied brief and her 15 September email revisions. The homepage content, route and global stylesheet are unchanged. A subsequent user request also authorised replacing the mobile navigation on all three pages with a shared fullscreen menu; only the homepage Navbar component changed for that request. The root layout now delegates structured data to a route-aware component: the original homepage graph is retained on the homepage; the service pages receive the Person entity plus their own WebPage, Service and BreadcrumbList data.

## Source decisions

- Supplied brief: `JANA AFFUM WEB.docx`, extracted read-only from the supplied Downloads path.
- Latest client feedback: [15 September email conversation](https://mail.google.com/mail/u/0/#all/1a0a53aa74d3b1db). This takes precedence over older positioning in `PRODUCT.md`.
- The document’s one-page concept is treated as source material. The user’s current scope is exactly two rebuilt subpages, with the homepage kept as-is and nothing pushed.
- Match the homepage design system (see the design pass below): original logo, gold, Playfair/Satoshi pairing and personal photography. The supplied references inform composition and pacing, not their blue palettes or condensed sports typography.
- Recruitment covers multiple industries, including all role groups from the latest email. The automotive category has an invitation to discuss requirements rather than an invented role history.
- Use “Across Europe & Global Remote”; keep the requested Prague/English-speaking/expat coaching terms in relevant coaching copy without making recruitment Czech-only.
- Keep the full George and Danica reference text from the existing repository, accessible in the page HTML. Danica’s historical metrics remain inside her attributed reference, not repurposed as current results.
- The candidate testimonial is anonymous (Senior Infrastructure Specialist, Cloud & NetDevOps, placed candidate) under NDA. No candidate or client name appears anywhere on the pages. The case study text is Jana's own from the supplied docx. Do not identify a client, connect a named person to a placement, or repeat unsupported claims about immediate offer acceptance or successful probation.
- Include Onboarding Care before recruitment proof and a smaller Phone a Recruiter section near the end. These remain supporting services.
- Give expats and international professionals a distinct coaching section. Avoid hourly packages, invented prices, guaranteed outcomes or coaching-as-therapy claims.
- All introduction copy uses 20 minutes, superseding the older 15-minute concept.

## Design and implementation

Design pass (19 September): both pages were rebuilt on the homepage system instead of a private dark palette. They use the homepage `Navbar` and `Footer`, its section rhythm (dark hero, then white, cream and dark bands), its type roles (`--t-*`, Playfair 700 with a gold italic accent, Satoshi 400 body), gold pill buttons, 16px cards and the shared `.section-head`, `.eyebrow`, `.quote-card`, `.faq-item` and `.final-cta-card` classes. `services.module.css` now holds layout only and reads the homepage tokens. Removed as decorative filler: numbered section labels, most eyebrows (kept only where they name an offer or audience), the icon-and-card grids, the compass and Venn illustrations, the watermark word, the 10+ stamp, photo overlay captions, the breadcrumb and the custom footer. The recruitment hero reuses the homepage logo marquee under the same "Experience with global enterprises & hiring partners" label. Body copy from the supplied brief is unchanged apart from removing em dashes and dropping the invented captions.

Wireframe pass (recruitment, 19 September): the recruitment page follows the section structure of the Beyond the Court reference (full-bleed hero, numbered kickers 01–08, photo pair with stat trio, dark band with portrait and wired diagram, icon-row list beside a photo and CTA card, two offer cards flanking a tall photo, tabbed industry selector, three-column proof, CTA card) using Jana's palette, fonts and copy only. No reference colours, star ratings, pricing or video sections were taken. Interactions: scroll reveals, stat count-up, photo and card hovers, the insight diagram that follows the four questions, and the industry selector. The arrow-chip pill button is now sitewide, drawn in CSS in `globals.css` for `.cta-pill-button` and `.hero-v2-cta-primary`; the nav button and the homepage final-CTA button keep their own styles. The coaching page received the numbered kickers and the shared button only; its own wireframe pass is still to do.

Copy pass (19 September): headings and body copy on the recruitment page now come from `JANA AFFUM WEB.docx` (e.g. "A pivotal role is open. The right person is not applying.", "You do not need more CVs. You need greater certainty.", "Where headhunting meets coaching.", "From recruitment pressure to a process you can trust.", "Recruitment can be a surprisingly lonely profession.") and use the docx SEO themes naturally (international recruitment, executive search, technology recruitment, recruitment partner, headhunting) in headings and image alt text. Invented slogan headings were removed. Two Unsplash photos are self-hosted in `public/images/stock/` (credits in `CREDITS.md`) as headers of the two offer cards.

Shared service-only components live in `src/components/services/`: `ServiceShared` (buttons, schema), `ServiceFaq` (client accordion with the homepage FAQ markup), `ServiceContact` (homepage final-CTA card wrapping the enquiry form) and `service-data.ts` (page content).

Images are WebP derivatives of the supplied `jana affum - fotky` folder:

- `jana-ceo-8.png` → recruitment hero
- `Nova-fotka-jabna.png` → coaching hero
- `sitting.jpeg` → private thinking partnership
- `sitting2-cafe.jpeg` → international coaching

No generated likenesses or new stock photography were introduced. Hero images are prioritised; lower images load lazily with explicit layout dimensions. Both pages have unique canonical URLs, descriptions, social previews, a single H1, semantic sections and page-specific structured data. Markup follows [Google’s structured-data guidance](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data); no rich-result eligibility or ranking guarantee is claimed.

The PostCSS dependency is overridden to the patched 8.5.28-compatible range. The existing Next.js version is unchanged.

## Contact and launch status

The user explicitly requested filler because Jana’s Calendly link is not available. “Online booking coming soon” is intentional. Each enquiry form prepares a local email draft addressed to `janaaffum@gmail.com`; the visitor must open and send it in their email app. The UI never claims delivery or a completed reservation. A copy-message fallback is provided. No form data is submitted to a server, saved in local storage or sent to analytics.

Onboarding, mentoring and expat CTAs preselect the correct topic. Editing the form clears an older draft to prevent sending stale details. The forms also work with direct email links as a fallback.

Before a full live booking/form launch, replace the placeholder with Jana’s confirmed 20-minute event and connect the agreed delivery provider if direct web submission is desired. Client-approved privacy/candidate notices, analytics consent configuration, CMS and external directory work remain outside this two-page rebuild and should not be represented as completed. No tracking or third-party calendar embed was added.

## Verification

- Production build and static generation for homepage, both service pages and both social image routes.
- TypeScript type check.
- Dependency audit: zero known vulnerabilities reported after the PostCSS update.
- Browser checks at 1440, 820, 390 and 320 pixels: heading count, canonicals, parseable JSON-LD, image loading, local anchor targets and page overflow.
- Keyboard/mobile navigation, Escape handling, native FAQ/industry expansion and full-reference disclosure.
- Topic-specific CTAs, enquiry validation/draft creation, correct email recipient, no false sent status and stale-draft clearing.
- Social image routes return PNGs; service pages do not inherit homepage FAQ markup; homepage retains its original FAQ graph.
- Automated axe-core checks for WCAG 2/2.1 A/AA at desktop and 320px: zero detected violations on both pages after contrast fixes. Image-backed contrast still requires visual judgement; this is not a certification of complete WCAG conformance.
- Without JavaScript, the draft button is disabled and visitors can use direct email; the form does not fall back to placing personal details in URL parameters.
- No commits, pushes, deployment or external messages sent.

## Fullscreen mobile navigation follow-up

A shared native dialog in `src/components/FullscreenMobileMenu.tsx` now provides mobile navigation on all three pages. It uses the homepage hero’s black/brown/gold colour stops, an animated curtain reveal, staggered white serif links, a white introductory-call CTA and a quiet contact footer. Native modal behaviour keeps background content inert. Opening locks document scrolling; Escape/Close restores focus and scroll settings. Internal navigation waits for the closing animation, and the CTA moves to the current page’s booking section. Reduced-motion preference removes transitions. Desktop navigation remains visually unchanged.
