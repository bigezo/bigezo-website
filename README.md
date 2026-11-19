# Bigezo Technologies — Corporate Website

Official Angular corporate website for **Bigezo Technologies** (`...built to last`), aligned with [PRD.md](./PRD.md).

## Tech Stack
- **Angular 22** (Standalone Components, Reactive Forms, `HttpClient`)
- **Tailwind CSS v4** (`@tailwindcss/postcss`) + component-scoped `.scss`
- **Font Awesome Free** (`@fortawesome/fontawesome-free`)
- **SweetAlert2** (`sweetalert2`) wrapped behind `NotificationService`
- **Brand Typography:** `Odibee Sans` (Headings), `Ms Madi` (Script accents), `Outfit` (Body & UI)
- **Brand Palette:** `#45260B`, `#E68836`, `#FFFFFF`, `#000000`

## Architecture (SOLID & Separation of Concerns)
- `src/app/core/models/`: Domain interfaces (`catalog.models.ts`)
- `src/app/core/interfaces/`: Gateway abstractions (`CONTACT_GATEWAY` injection token)
- `src/app/core/data/`: Verified catalog content (`bigezo-catalog.data.ts`)
- `src/app/core/services/`: `ContactApiService` and `NotificationService`
- `src/app/shared/components/`: Reusable UI components (`SectionHeadingComponent`, `ProductCardComponent`), each with `.ts`, `.html`, and `.scss`
- `src/app/features/`: Section-level components (`SiteHeaderComponent`, `HeroSectionComponent`, `ValuePillarsSectionComponent`, `ExpertiseSectionComponent`, `ProductsShowcaseSectionComponent`, `ProcessInvestmentSectionComponent`, `ExperienceSectionComponent`, `ContactSectionComponent`, `SiteFooterComponent`, `HomePageComponent`)

## Development & Verification
```bash
npm start       # Run local dev server
npm run build   # Production build
npm test        # Run unit tests
```

## Connecting the Backend Contact API Later
Open `src/environments/environment.ts` and `src/environments/environment.prod.ts` and set `contactApiUrl` to your POST endpoint URL:

```ts
contactApiUrl: 'https://your-api-domain.com/v1/inquiries'
```

`ContactApiService` automatically switches from executive email/WhatsApp handoff mode to direct `POST` JSON delivery without changing any UI component.
