# BIGEZO TECHNOLOGIES — Website Product Requirements Document (PRD)

**Document status:** Draft for implementation  
**Product:** BIGEZO TECHNOLOGIES corporate website  
**Primary goal:** Generate qualified enquiries from serious businesses and institutions seeking custom software and advanced digital systems.

---

## 1. Product Overview

Build a polished, business-oriented corporate website for BIGEZO TECHNOLOGIES. The website must communicate the company’s technical credibility, service scope, business value, delivery approach, relevant experience, and selected digital products—without generic filler copy, decorative junk, or unnecessary illustrations.

The website should feel like an established software engineering partner: precise, confident, technically capable, practical, and built for long-term business relationships.

### Core positioning
**Advanced Digital Systems & Custom Software Development Solutions**

BIGEZO builds customized software solutions that help ambitious businesses and institutions streamline operations, serve customers better, and grow efficiently. It transforms complex requirements into practical, reliable digital systems designed around an organisation’s needs and built for long-term growth.

### Primary conversion
Encourage qualified prospective clients to contact BIGEZO to discuss a project, request a technical assessment, and receive a clear scope and quotation.

---

## 2. Audience

Prioritize:
- Established SMEs and medium-sized businesses with operational challenges that require custom software.
- Institutions and organizations needing digital systems, portals, workflows, integrations, or automation.
- Businesses with complex requirements that have not been adequately addressed by off-the-shelf tools.
- Decision-makers who value technical reliability, security, clear scope, and dependable delivery.

Do not optimize the site around bargain hunting, low-budget one-off requests, or a mass-market “we do everything” agency positioning.

---
## 3. Brand and Visual Direction

### Colors
Use only this core palette, with neutral shades derived as needed for contrast and hierarchy:
- Deep brown: `#45260B`
- Orange: `#E68836`
- White: `#FFFFFF`
- Black: `#000000`

### Typography
- **Headings:** Odibee Sans
- **Styled accent text / select short phrases:** Ms Madi
- **Body, UI, navigation, buttons:** Outfit

Load fonts efficiently and provide sensible fallback fonts.

### Design characteristics
- Premium, restrained, technical, editorial, and business-focused.
- Strong typographic hierarchy and purposeful whitespace.
- Deep-brown blocks used strategically to anchor key sections; orange used for emphasis, actions, labels, and small highlights.
- White backgrounds for reading clarity.
- Clean grid and alignment; clear visual rhythm; avoid over-decoration.
- Use subtle transitions only where they improve interaction feedback.
- Responsive design with mobile-first behavior.
- Avoid gradient-heavy layouts, excessive rounded cards, glassmorphism, stock-tech clichés, emoji, and decorative illustration sections.
- The catalog’s existing technical artwork may be used only where it supports the content. It must not dominate or clutter the site.

### Assets
Use existing assets from the supplied project directory when available:
- `favicon.png` or `favicon.ico`
- `Hand-Drawn Cloud Architecture Network.png`
- `Sepia Tech Office Collaboration.png`

The implementation must not invent asset filenames or assume these files have been copied into the Angular project. Add them to an organized assets directory and reference them consistently.

### Favicon
Use the supplied `favicon.png` as the primary favicon. Configure favicon links in the document head. If an `.ico` version is supplied or generated later, include it as an additional compatible format. Ensure the favicon is discoverable by crawlers and browsers; do not replace it with a generic icon.

---
## 4. Website Structure and Content Hierarchy

Build a single-page corporate website with anchor navigation and clearly separated sections. A multi-page architecture is not required for the initial version.

### 4.1 Header / Navigation
- BIGEZO logo/brand mark.
- Navigation links: Services, Expertise, Process, Products, Experience, Contact.
- Primary CTA: **Discuss Your Project**.
- Sticky header on scroll, with a compact mobile menu.
- Mobile menu must be keyboard accessible and close after navigation.

### 4.2 Hero Section
**Headline:** Advanced Digital Systems & Custom Software Development Solutions

**Supporting copy:** We build customized software solutions that help ambitious businesses and institutions streamline operations, serve customers better and grow efficiently.

**Primary CTA:** Discuss Your Project  
**Secondary CTA:** Explore Our Expertise

Use a confident layout with strong typography and an optional restrained use of existing technical artwork. The message must be immediately clear without relying on an image.

### 4.3 Our Focus
Explain the company’s focus in a short, high-impact block:

> From sophisticated business portals and e-commerce platforms to secure payment integrations and AI-powered automation, we transform complex business requirements into practical, reliable digital systems designed around your organisation’s needs and built for long-term growth.

Keep the copy concise. Avoid repeating the hero paragraph word-for-word.

### 4.4 Where We Add Value / Services
Present the four catalog service pillars with concise business outcomes:

1. **Custom Software Development** — Turn specialised business requirements and ambitious digital ideas into working solutions.
2. **Digital Customer Experiences** — Enable online bookings, orders, payments, and customer self-service.
3. **Intelligent Business Systems** — Use AI and advanced integrations to simplify complex tasks and improve decision-making.
4. **Business Automation** — Replace repetitive manual work with efficient, connected systems.

Each item should be visually distinct, with a consistent icon treatment and concise supporting text. Icons should be functional and monochrome/brand-colored, not decorative illustrations.

### 4.5 Our Expertise
Use a clear, readable section with the five expertise categories from the catalog:

- **Custom Business Platforms:** End-to-end booking portals, e-commerce, customer self-service accounts, CRM, ERP, and internal business management systems.
- **AI-Powered Business Tools:** Intelligent customer-support chatbots, AI-generated proposals and quotations, and AI-powered business data analysis.
- **Digital Forensics & Document Intelligence:** OCR-based document scanning, data extraction, document analysis, and digital forensic investigations.
- **Payments & API Integrations:** Secure integrations for MTN Mobile Money, Airtel Money, Visa/Mastercard, WhatsApp Business, and third-party ERPs.
- **Advanced Web & Mobile Applications:** High-performance corporate websites, Android/iOS apps, interactive maps, and live-tracking workflows.

Do not overload this section with lengthy technology lists. Prioritize capabilities and outcomes; technologies can be shown selectively if useful and accurate.

### 4.6 Project Engagement Process
Show the catalog’s five steps as a simple numbered process, with no complicated graphic:

1. Technical Assessment
2. Define Architecture & Scope
3. Clear, Itemized Quotation
4. Agree on Terms & SLAs
5. Build, Test, Deploy & Handover

Each step should have a one-sentence explanation. Make this section reassure clients that the engagement is structured and transparent.

### 4.7 Project Investment
Show a clear indicative project range:

**UGX 5M–50M+**

Supporting copy: **Price depends on scope and complexity.**

The investment section must explain that project pricing is established after technical assessment and scope definition. Do not make the range look like a fixed package price.

### 4.8 Selected Products — “Our Products”
This section is a required addition to the catalog website. Place it in the site hierarchy after the main expertise/services content and before proof/experience content, so it complements rather than interrupts the primary service pitch.


Display products as visually prominent, clean cards. Each card must feature:
- A **large, centered icon** (the visual focus of the card).
- A **vivid product name** in strong typography.
- Optional very short descriptor only when approved content is available.
- A link/action only when a verified product URL is available.


Cards should feel like product identities, not service cards. Use restrained color variations within the brand palette. Do not use screenshots, illustrations, or lengthy descriptions in this section. No fabricated product details or links.


Initial products based on the catalog:
- **BIGEZO** — `https://www.bigezo.com`
- **SOMERO** — `https://www.somero.ug`
- **Ecopharm Pharmacy CRM** — URL not specified in catalog; no link until supplied
- **Premium Rent App** — `https://premium-rent-app.web.app`
- **G-Realm Music App / Soki-Vibes** — `https://sokivibes.web.app`

If a product URL is not available, render the card as informational rather than a broken or guessed link. Product card design must be reusable and data-driven.

### 4.9 Proven Technical Experience
Use proof-oriented content from the catalog, without unsupported embellishment.

**Selected websites designed:**
- footnoteconsults.com
- peaceofmindpackage.com
- civitas.co.ug
- jalivingspaces.com
- kidsclubkampalaug.com
- mtotowafrikauganda.org
- albanislamic.org

**Advanced apps / digital products:**
- bigezo.com
- grealm.org
- somero.ug
- richieart.co
- Ecopharm Pharmacy CRM
- Premium Rent App
- G-Realm Music App / Soki-Vibes

Make these lists easy to scan. Use links only for verified URLs. Avoid logos unless available and approved.

### 4.10 Technical Leadership / Experience
Present catalog proof points:
- **12+ years experience**
- **30+ applications built**
- Corporate and institutional experience associated with technical leadership: World Vision Uganda, Vivo Energy, Monitor Publications Ltd, Ecopharm Pharmacy, and MK Publishers.

Phrase institutional names carefully as experience of technical leadership, not as current clients, endorsements, or direct BIGEZO contracts unless separately verified.

### 4.11 Engineered for Your Business
Use four compact capability statements:
- **Enterprise Application Security:** Role-based access controls, secure authentication, encrypted data, and protected API integrations.
- **Reliable Data:** High-performance databases, efficient record retrieval, transaction integrity, and automated backups.
- **Cost-Optimised Infrastructure:** Infrastructure configured to an application’s storage, processing, and expected traffic requirements.
- **Dependable Delivery:** Clearly defined scope, milestone-based development, rigorous testing, deployment, handover, and ongoing technical support.

### 4.12 Contact / Project Enquiry
Headline: **Tell us what you want to build.**

Supporting copy: We’ll help you understand the requirements, recommend the right approach, and provide a clear quotation.

Contact details:
- Phone / WhatsApp: `+256 773 913 902`
- Email: `ceo@bigezo.com`

Provide a contact form with fields:
- Full name (required)
- Company / organization (optional)
- Email (required)
- Phone / WhatsApp (required)
- Project type (select)
- Estimated budget (select; include “Not sure yet”)
- Project summary / business challenge (required)
- Consent checkbox (required)

Form behavior:
- Frontend validation and accessible field labels.
- Clear loading, success, and error states.
- Prevent duplicate submissions while a request is pending.
- Backend API integration must be isolated behind a service layer and configurable endpoint. API details will be supplied later; do not hardcode speculative API routes.
- Until API configuration is provided, implement a clean mock/service placeholder that can be replaced without changing the form component.
- Use SweetAlert2 for appropriate success/error notifications and confirmations; do not overuse modal alerts.
- Never claim an enquiry has been sent if the backend is not connected.

### 4.13 Footer
- BIGEZO brand mark.
- Short company positioning line.
- Anchor links to key sections.
- Contact email and phone.
- Copyright with current year generated dynamically.
- Avoid unnecessary social links unless actual official accounts are supplied.

---
## 5. Functional Requirements

- Responsive layout for mobile, tablet, laptop, and large desktop.
- Smooth, reduced-motion-aware section navigation.
- Sticky navigation with active/hover/focus states.
- Mobile navigation drawer or dropdown with accessible controls.
- Contact form validation, status feedback, and API service abstraction.
- Reusable product cards and service/expertise presentation components.
- All external links must be valid, deliberate, and configured to open safely.
- Accessibility: semantic HTML, keyboard operation, visible focus states, sufficient contrast, descriptive labels, and appropriate alt text.
- SEO: page title, meta description, canonical URL configuration, Open Graph metadata, descriptive heading structure, sitemap and robots file where applicable, and structured data for Organization/ProfessionalService using accurate details only.
- Use supplied favicon assets. Verify favicon path and browser rendering.
- Performance: lazy-load below-the-fold images, compress image assets, avoid large animation libraries, minimize unnecessary dependencies, and prevent layout shift.
- Add analytics only if a provider and tracking requirements are approved. Do not add trackers by default.

---
## 6. Technical Stack & Standards

- **Framework:** Angular, using standalone components.
- **Styling:** Tailwind CSS; no Bootstrap.
- **Component styling:** Each Angular component must have separate `.ts`, `.html`, and `.scss` files. Do not use inline templates or inline styles.
- **Icons:** Material Symbols or Font Awesome Free. Select one consistent icon system and use it consistently. Icons must support the visual hierarchy and remain brand-compatible.
- **Alerts / modals:** SweetAlert2 for selected form feedback and important user interactions.
- **Font loading:** Odibee Sans, Ms Madi, Outfit.
- **Forms:** Angular Reactive Forms.
- **Architecture:** SOLID principles, separation of concerns, reusable UI components, typed models, and clear service boundaries.
- **Quality:** Strict TypeScript, linting, consistent naming, and meaningful component/service tests for important logic.

Do not mix business logic into presentation components. Components should primarily manage presentation and user interaction; services should own API and data concerns.

---
## 7. Suggested Angular Project Structure

Organize by feature and responsibility. Adapt the exact paths to the Angular version and CLI conventions, but preserve the separation.


```text
src/
├── app/
│   ├── core/
│   │   ├── config/
│   │   │   └── app-config.ts
│   │   ├── models/
│   │   │   ├── contact-enquiry.model.ts
│   │   │   └── product.model.ts
│   │   └── services/
│   │       ├── contact-api.service.ts
│   │       └── contact-enquiry.service.ts
│   ├── shared/
│   │   ├── components/
│   │   │   ├── section-heading/
│   │   │   ├── primary-button/
│   │   │   ├── icon-display/
│   │   │   └── product-card/
│   │   └── utilities/
│   ├── features/
│   │   └── home/
│   │       ├── components/
│   │       │   ├── site-header/
│   │       │   ├── hero-section/
│   │       │   ├── focus-section/
│   │       │   ├── services-section/
│   │       │   ├── expertise-section/
│   │       │   ├── process-section/
│   │       │   ├── investment-section/
│   │       │   ├── products-section/
│   │       │   ├── experience-section/
│   │       │   ├── engineering-section/
│   │       │   ├── contact-section/
│   │       │   └── site-footer/
│   │       └── pages/
│   │           └── home-page/
│   ├── app.component.ts
│   ├── app.component.html
│   └── app.component.scss
├── assets/
│   ├── images/
│   │   ├── hand-drawn-cloud-architecture-network.png
│   │   └── sepia-tech-office-collaboration.png
│   └── icons/
│       └── favicon.png
└── styles.scss
```


Every component must have its own `.ts`, `.html`, and `.scss` file. Avoid monolithic components and do not put the entire page into `app.component.html`.


### Component responsibility guidelines
- `HomePageComponent`: assembles sections in correct order; no business logic.
- `SiteHeaderComponent`: navigation, sticky behavior, mobile menu state.
- `HeroSectionComponent`: hero message and CTA actions.
- `ServicesSectionComponent`: four service pillars.
- `ExpertiseSectionComponent`: five expertise items.
- `ProcessSectionComponent`: five steps.
- `ProductsSectionComponent`: product data and card list.
- `ProductCardComponent`: reusable, data-driven product card.
- `ExperienceSectionComponent`: selected websites, products, technical leadership proof points.
- `EngineeringSectionComponent`: security, reliability, infrastructure, delivery statements.
- `ContactSectionComponent`: form presentation and validation; delegates submission.
- `ContactEnquiryService`: form submission orchestration.
- `ContactApiService`: HTTP-specific backend communication, configurable endpoint, typed response.
- `SiteFooterComponent`: footer and contact information.
- Shared button/section-heading/icon components: reusable UI only, with no business-specific logic.

---
## 8. SOLID & Clean Code Requirements

- **Single Responsibility:** Components, services, models, and utilities each have one clear reason to change.
- **Open/Closed:** Product cards, service lists, and expertise lists should be driven by typed data, so content can be extended without rewriting presentation logic.
- **Liskov Substitution:** Shared abstractions must have predictable contracts; avoid unnecessary inheritance.
- **Interface Segregation:** Keep interfaces small and specific to the consumers that need them.
- **Dependency Inversion:** Components depend on abstractions/services rather than directly implementing HTTP calls.
- Keep component classes small and readable.
- Avoid duplicated markup/styles where reusable components make sense.
- Use typed interfaces for products, expertise items, enquiry payloads, and API responses.
- Avoid hardcoded magic values when configuration or named constants are appropriate.
- Do not introduce unnecessary abstractions or over-engineering.
- Use consistent naming and folder conventions.
- Ensure environment-specific values are not committed as secrets.

---
## 9. Content Rules

- All copy must be business-oriented, concise, and grounded in the catalog or approved company facts.
- No filler sections, generic slogans, lorem ipsum, fake testimonials, fake awards, fabricated client counts, or invented case studies.
- Do not claim certifications, partnerships, guarantees, client endorsements, or industry compliance unless supplied and verified.
- Do not add an “About us” essay or blog section unless requested.
- Avoid repeating the same paragraph across sections.
- Do not add a technology logo wall merely for decoration.
- Keep product cards visually distinct and concise; their primary purpose is to show product names and link to verified destinations.

---
## 10. SEO and Metadata

Initial metadata (adjust during implementation if needed):
- **Title:** BIGEZO Technologies | Custom Software & Digital Systems
- **Description:** Custom business platforms, advanced web and mobile applications, AI-powered tools, integrations, and automation for serious business needs.
- **Keywords:** custom software development, business platforms, web applications, mobile apps, business automation, AI business tools, payment integrations, Uganda software development

Implement:
- One clear H1.
- Logical H2/H3 hierarchy.
- Open Graph title, description, and image when a suitable branded image is available.
- Organization schema with verified name, URL, email, and telephone.
- Favicon metadata using the supplied asset.
- Sitemap and robots.txt.
- Search-friendly section names without keyword stuffing.

---
## 11. Contact and Backend Readiness

The frontend will connect to a separately hosted backend API later.
- API base URL must be environment/config driven.
- Use Angular HttpClient through a dedicated API service.
- Keep contact form submission behind a service boundary.
- Define typed request/response contracts and document assumptions.
- Handle timeout, network errors, validation errors, server errors, and success states.
- No secrets, credentials, or private API keys in frontend source.
- A frontend-only placeholder must clearly indicate in developer configuration that submission is not yet connected; it must not silently fake success.

---
## 12. Responsive and Interaction Requirements

### Desktop
- Wide, editorial layout with restrained section widths.
- Navigation stays readable and uncluttered.
- Services and expertise may use grids with consistent spacing.
- Products section uses large, centered icons and vivid names.

### Tablet
- Grids reduce naturally to fewer columns.
- Header navigation adapts without overcrowding.

### Mobile
- Mobile-first spacing and typography.
- Single-column content where appropriate.
- Touch-friendly buttons and links.
- Mobile navigation remains accessible.
- Contact form fields are comfortable to use.
- No horizontal overflow.

### Motion
- Subtle reveal/hover feedback only.
- Respect `prefers-reduced-motion`.
- No distracting continuous animation or parallax.

---
## 13. Acceptance Criteria

The website is ready for review when:
- [ ] All catalog service and expertise pillars are represented accurately.
- [ ] The brand colors and specified fonts are used consistently.
- [ ] Header navigation and CTAs work at all viewport sizes.
- [ ] The five-step process is displayed clearly.
- [ ] Project investment range and caveat are visible.
- [ ] The “Our Products” section appears in the correct hierarchy and uses reusable cards with centered large icons and vivid names.
- [ ] Product destinations are verified; unavailable URLs are not guessed.
- [ ] Technical experience and proof points are accurately represented.
- [ ] Contact form validates and has clear loading/success/error states.
- [ ] API logic is isolated and replaceable when backend endpoints are provided.
- [ ] Each Angular component has separate `.ts`, `.html`, and `.scss` files.
- [ ] Tailwind is used; Bootstrap is not introduced.
- [ ] SweetAlert2 and the selected free icon library are integrated appropriately.
- [ ] Accessibility basics are implemented and keyboard-tested.
- [ ] SEO metadata, favicon, sitemap, and robots configuration are present.
- [ ] Performance, responsive behavior, and layout shift have been reviewed.
- [ ] No filler copy, fabricated claims, unnecessary illustrations, or broken links remain.

---
## 14. Implementation Deliverables

1. Angular application with standalone components.
2. Responsive page layout and all approved sections.
3. Tailwind configuration and brand tokens.
4. Font setup for Odibee Sans, Ms Madi, and Outfit.
5. Shared UI components and typed data models.
6. Product card data/configuration.
7. Contact form and API-ready service architecture.
8. SweetAlert2 integration for selected feedback flows.
9. SEO metadata, favicon, robots.txt, sitemap.
10. README documenting project setup, scripts, component architecture, asset placement, and how to configure the contact API later.
11. Basic tests for contact form validation, service behavior, and reusable product rendering where appropriate.

---
## 15. Catalog Source Alignment

This PRD uses the supplied BIGEZO catalog as the content source for positioning, services, expertise, engagement process, indicative investment, selected websites and digital products, experience proof points, engineering principles, and contact details. The “Our Products” cards are the requested website addition. Any new claims or product descriptions should be approved before publication.
