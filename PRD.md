# BIGEZO TECHNOLOGIES — Website Product Requirements Document (PRD)

**Document Version:** 2.0 (Unified Specification)  
**Document Status:** Approved for Implementation  
**Business Entity:** Bigezo Technologies (`...built to last`)  
**Primary Contact:** `+256 773 913 902` | `ceo@bigezo.com`

---

## 1. Executive Summary & Core Positioning

Build a polished, business-oriented corporate web application for **Bigezo Technologies** that translates the official company catalog into a high-trust digital presence for serious businesses and institutions.

### Core Positioning
**Advanced Digital Systems & Custom Software Solutions**

Bigezo Technologies builds customized software solutions that help ambitious businesses and institutions streamline operations, serve customers better, and grow efficiently. From sophisticated business portals and e-commerce platforms to secure payment integrations and AI-powered automation, complex business requirements are transformed into practical, reliable digital systems designed around an organisation's needs and built for long-term growth.

### Primary Conversion Goal
Convert qualified enterprise, SME, and institutional decision-makers into structured project enquiries (technical assessment, scope definition, and itemized quotation) without filler copy, generic marketing clichés, or decorative clutter.

---

## 2. Target Audience

Prioritize:
- **Established SMEs & Enterprises** with operational complexity that off-the-shelf software fails to solve.
- **Institutions & Organizations** requiring custom portals, CRM/ERP systems, document intelligence, integrations, or automated workflows.
- **Technical & Executive Decision-Makers** who value application security, data integrity, clear SLAs, and milestone-based delivery.

Do **not** optimize positioning around bargain-hunting, mass-market templates, or unverified claims.

---

## 3. Brand Identity & Visual Design System

### 3.1 Color Palette (Strict Brand Fidelity)
Use only the official brand palette, deriving neutral hairlines or surface borders strictly from these tones where required for contrast and accessibility:

| Token | Hex | Usage |
| :--- | :--- | :--- |
| **Espresso Brown** | `#45260B` | Primary dark section surfaces, brand badges, high-authority headers, structural framing |
| **Bigezo Amber** | `#E68836` | Primary CTAs, accent sub-labels, metrics banner, product icons, active highlights |
| **Pure White** | `#FFFFFF` | High-clarity reading surfaces, primary text on Espresso Brown, card backgrounds |
| **Pure Black** | `#000000` | High-contrast body copy on White, footer/trim accents |

### 3.2 Typography
Load via Google Fonts with clean fallbacks and `font-display: swap`:

| Role | Font Family | Usage |
| :--- | :--- | :--- |
| **Display & Headings** | `Odibee Sans` | Main headlines, section headers, uppercase capability titles, product names, investment range |
| **Styled Script Accents** | `Ms Madi` | Editorial accent phrases (*"Our Focus"*, *"Where we add Value"*, *"Our Expertise"*, *"Our Products"*, *"5 Easy Steps"*, *"Why Us?"*, *"Tell us what you want to build."*) |
| **Body & UI Copy** | `Outfit` | Paragraphs, navigation links, form inputs, buttons, lists, descriptions |

### 3.3 Approved Visual Assets & Restraint Rules
- **Logo & Favicon:** `favicon.png` (plus compatible `.ico` fallback in `public/` for universal crawler and browser discovery). Never replace with a generic framework icon.
- **Approved Catalog Imagery:**
  - `office-collaboration.png` (from `Sepia Tech Office Collaboration.png`)
  - `cloud-architecture-network.png` (from `Hand-Drawn Cloud Architecture Network.png`)
- **Strict Visual Restraint:**
  - Avoid glassmorphism, gradient-heavy layouts, decorative illustration sections, emoji clutter, or generic stock photography.
  - Use subtle motion/transitions only for interaction feedback, respecting `prefers-reduced-motion`.

---

## 4. Information Architecture & Section Hierarchy

A single-page corporate experience with semantic landmarks, sticky anchor navigation, and clear visual rhythm:

### 4.1 Header / Sticky Navigation (`SiteHeaderComponent`)
- Brand mark (`favicon.png`) + `BIGEZO TECHNOLOGIES`.
- Keyboard-accessible anchor links: `Focus`, `Services`, `Expertise`, `Products`, `Process`, `Experience`, `Contact`.
- Primary CTA: **Discuss Your Project**.
- Responsive mobile drawer/menu that closes automatically on link selection and supports `Escape` / focus management.

### 4.2 Hero & Our Focus (`HeroSectionComponent`)
- **Surface:** Espresso Brown (`#45260B`).
- **Badge:** `BIGEZO TECHNOLOGIES` (`...built to last`).
- **H1 Headline (`Odibee Sans`):** `Advanced Digital Systems & Custom Software Development Solutions`
- **Script Accent (`Ms Madi`):** `Our Focus`
- **Non-Redundant Copy:** Concise high-impact mission statement drawn directly from the catalog (without repeating paragraphs word-for-word elsewhere).
- **CTAs:**
  - Primary: **Tell Us What You Want to Build** (`#contact`)
  - Secondary: **Explore Our Products** (`#products`)
- **Visual Pairing:** Restrained, crisp framing of `office-collaboration.png`.

### 4.3 Where We Add Value (`ValuePillarsSectionComponent`)
- **Surface:** White (`#FFFFFF`).
- **Script Heading:** `Where we add Value`
- **Four Core Pillars:**
  1. **Custom Software Development** — Turn specialised business requirements and ambitious digital ideas into working solutions.
  2. **Digital Customer Experiences** — Enable online bookings, orders, payments, and customer self-service.
  3. **Intelligent Business Systems** — Use AI and advanced integrations to simplify complex tasks and improve decision-making.
  4. **Business Automation** — Replace repetitive manual work with efficient, connected systems.

### 4.4 Our Expertise (`ExpertiseSectionComponent`)
- **Surface:** Espresso Brown (`#45260B`).
- **Script Heading:** `Our Expertise`
- **Five Technical Domains:**
  1. **Custom Business Platforms** — End-to-end booking portals, e-commerce, customer self-service accounts, CRM, ERP, and internal business management systems.
  2. **AI-Powered Business Tools** — Intelligent customer-support chatbots, AI-generated proposals and quotations, and AI-powered business data analysis.
  3. **Digital Forensics & Document Intelligence** — OCR-based document scanning, data extraction, document analysis, and digital forensic investigations.
  4. **Payments & API Integrations** — Secure integrations for MTN Mobile Money, Airtel Money, Visa/Mastercard, WhatsApp Business, and third-party ERPs.
  5. **Advanced Web & Mobile Applications** — High-performance corporate websites, Android/iOS apps, interactive maps, and live tracking workflows.

### 4.5 Our Products — Dedicated Showcase (`ProductsSectionComponent`)
- **Placement Rationale:** Placed immediately after *Our Expertise* and before *Engagement Process & Proven Experience* so visitors see tangible shipped products right after understanding Bigezo's technical capabilities.
- **Card Design (`ProductCardComponent`):**
  - Clean, product-identity cards using restrained brand palette contrast.
  - **Large centered icon** (primary visual anchor) + **vivid product name** (`Odibee Sans`).
  - Zero screenshots, zero decorative clutter, zero fabricated descriptions or guessed URLs.
  - Verified URLs open safely (`rel="noopener noreferrer"`) or via a concise SweetAlert2 product summary modal.
- **Selected Products Roster:**
  1. **BIGEZO** — `https://www.bigezo.com`
  2. **G-Realm** — `https://www.grealm.org`
  3. **Somero** — `https://www.somero.ug`
  4. **Premium Rent App** — `https://premium-rent-app.web.app`
  5. **G-Realm Music App (Sokivibes)** — `https://sokivibes.web.app`

### 4.6 Engagement Process & Project Investment (`ProcessInvestmentSectionComponent`)
- **5 Easy Steps (`Ms Madi` + numbered timeline):**
  1. Technical Assessment
  2. Define Architecture & Scope
  3. Clear, Itemized Quotation
  4. Agree on Terms & SLAs
  5. Build, Test, Deploy & Handover
- **Project Investment Block:**
  - Headline range: **UGX 5M – 50M+**
  - Caveat: *Price Depends on Scope and Complexity.* (Clarifies that pricing is determined after technical assessment and scope definition, not as a fixed package).
  - Scope highlights: **Advanced Mobile Apps** | **Advanced Websites**.
- **Visual Pairing:** Restrained use of `cloud-architecture-network.png` supporting scalable architecture narrative.

### 4.7 Why Us? — Proven Technical Experience (`ExperienceSectionComponent`)
- **Metrics Banner (`#E68836`):** `12+ Years Experience | 30+ Applications Built`
- **Corporate & Institutional Experience of Our Technical Leadership:**
  - `World Vision Uganda`, `Vivo Energy`, `Monitor Publications Ltd`, `Ecopharm Pharmacy`, `MK Publishers`
  - *Content Accuracy Rule:* Phrased strictly as *"Corporate & Institutional Experience of Our Technical Leadership"* per the catalog—never misrepresented as client endorsements.
- **Selected Websites Designed (Verified URLs):**
  - `www.footnoteconsults.com`
  - `www.peaceofmindpackage.com`
  - `www.civitas.co.ug`
  - `www.jalivingspaces.com`
  - `www.kidsclubkampalaug.com`
  - `www.mtotowafrikauganda.org`
  - `www.albanislamic.org`

### 4.8 Engineered For Your Business (`EngineeringSectionComponent`)
Four crisp engineering commitment cards:
1. **Enterprise Application Security** — Role-based access controls, secure authentication, encrypted data, and protected API integrations.
2. **Reliable Data** — High-performance databases, efficient record retrieval, transaction integrity, and automated backups.
3. **Cost-Optimised Infrastructure** — Dedicated VPS hosting configured to your application's storage, processing, and expected traffic requirements.
4. **Dependable Delivery** — Clearly defined scope, milestone-based development, rigorous testing, deployment, handover, and ongoing technical support.

### 4.9 Contact Us Today (`ContactSectionComponent`)
- **Headline (`Ms Madi`):** `Tell us what you want to build.`
- **Supporting Copy:** *We'll help you understand the requirements, recommend the right approach and provide a clear quotation.*
- **Direct Executive Channels:**
  - Phone / WhatsApp: `+256 773 913 902`
  - Email: `ceo@bigezo.com`
- **Reactive Form Fields:**
  - Full Name *(required)*
  - Company / Organization *(optional)*
  - Email Address *(required, validated)*
  - Phone / WhatsApp Number *(required)*
  - Project Type *(select: Custom Business Platform, AI-Powered Business Tool, Digital Forensics & Document Intelligence, Payments & API Integration, Advanced Web / Mobile App, Other)*
  - Estimated Investment Range *(select: `Not sure yet`, `UGX 5M – 15M`, `UGX 15M – 30M`, `UGX 30M – 50M+`)*
  - Project Summary / Business Challenge *(required, min length validated)*
  - Consent Checkbox *(required)*
- **Honest Backend-Readiness Behavior:**
  - Duplicate submission prevention while request is pending.
  - **Never falsely claim an enquiry was delivered to a server when no backend endpoint is configured.** Until `environment.contactApiUrl` is populated, the service validates the structured payload, informs the user transparently via SweetAlert2 that direct API delivery is awaiting endpoint configuration, and provides one-click handoff buttons to send the pre-filled brief directly via **Email (`ceo@bigezo.com`)** or **WhatsApp (`+256 773 913 902`)**.

### 4.10 Footer (`SiteFooterComponent`)
- Brand mark (`favicon.png`), `Bigezo Technologies`, `...built to last`.
- Quick anchor navigation.
- Direct contact links (`+256 773 913 902`, `ceo@bigezo.com`).
- Dynamic copyright year.

---

## 5. Technical Architecture & Engineering Standards

### 5.1 Stack
- **Framework:** Angular (Standalone Components, Angular Reactive Forms, `HttpClient`)
- **Styling:** Tailwind CSS + component-scoped `.scss` (no Bootstrap)
- **Icons:** Font Awesome Free (`@fortawesome/fontawesome-free`) — used consistently across all sections and **Our Products** cards
- **Modals & Notifications:** SweetAlert2 (`sweetalert2`) encapsulated in `NotificationService`
- **Component File Rule:** Every Angular component strictly has separate `.component.ts`, `.component.html`, and `.component.scss` files.

### 5.2 SOLID Design & Separation of Concerns
- **Single Responsibility (SRP):** Presentation components render typed `@Input()` / `input()` data and emit user actions; `bigezo-catalog.data.ts` owns verified copy; `NotificationService` owns SweetAlert2 presentation; `ContactApiService` owns HTTP/deferred submission.
- **Open/Closed (OCP) & Liskov Substitution (LSP):** Sections render from typed data arrays; `CONTACT_GATEWAY` abstraction allows swapping the pre-API handler for the live REST API client without altering `ContactSectionComponent`.
- **Interface Segregation (ISP):** Focused TypeScript interfaces (`ValuePillar`, `ExpertiseItem`, `ProductItem`, `ProcessStep`, `WebsiteShowcaseItem`, `EngineeringPillar`, `ContactInquiryPayload`, `ContactSubmissionResult`).
- **Dependency Inversion (DIP):** UI components inject `CONTACT_GATEWAY` and `NotificationService` abstractions rather than coupling to `HttpClient` or `Swal.fire`.

### 5.3 Future Backend API Contract
When the backend URL is set in `src/environments/environment.ts` / `environment.prod.ts` (`contactApiUrl`), `ContactApiService` sends a `POST` request with `application/json`:
```json
{
  "fullName": "string",
  "organization": "string",
  "email": "string",
  "phone": "string",
  "serviceCategory": "string",
  "budgetRange": "string",
  "projectDetails": "string",
  "submittedAt": "ISO-8601 string"
}
```
Handles loading state, timeout, HTTP validation/server error responses, and confirmed success feedback cleanly via SweetAlert2.

---

## 6. SEO, Accessibility & Content Integrity

- **SEO:** Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`), single `<h1>`, logical `<h2>`–`<h3>` hierarchy, Open Graph tags, `favicon.png` + `favicon.ico`, `robots.txt`, `sitemap.xml`, and JSON-LD `Organization` / `ProfessionalService` structured data containing strictly verified facts.
- **Accessibility:** Keyboard-navigable links/drawer, visible `:focus-visible` states, high contrast across `#45260B` / `#FFFFFF` / `#000000` / `#E68836`, descriptive `alt` text, and `aria-*` attributes on interactive controls.
- **Content Integrity:** Zero Lorem Ipsum, zero fake testimonials or awards, zero unverified client claims, zero speculative links.

---

## 7. Acceptance Criteria

1. Verified business copy and positioning from the catalog with zero junk text or unapproved illustrations.
2. Exact color palette (`#45260B`, `#E68836`, `#FFFFFF`, `#000000`) and fonts (`Odibee Sans`, `Ms Madi`, `Outfit`).
3. **Our Products** section in optimal visual hierarchy showing the 5 selected products (`BIGEZO`, `G-Realm`, `Somero`, `Premium Rent App`, `G-Realm Music App (Sokivibes)`) as clean cards with a large centered icon and vivid product name.
4. Every Angular component uses separate `.ts`, `.html`, and `.scss` files adhering to SOLID principles.
5. Tailwind CSS, Font Awesome Free, and SweetAlert2 integrated with no Bootstrap.
6. Contact form validates rigorously, uses an isolated API gateway ready for future backend URL configuration, and never fakes server delivery when unconnected.
7. Production build (`ng build`) and unit tests (`ng test`) pass cleanly.
