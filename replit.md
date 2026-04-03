# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   └── api-server/         # Express API server
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, lib/integrations/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly. Running `tsc` inside a single package will fail if its dependencies haven't been built yet.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite...etc, not `tsc`.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array. `tsc --build` uses this to determine build order and skip up-to-date packages.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/landing-pages` (`@workspace/landing-pages`)

React + Vite landing pages for BH Labs Recovery Pod — a biohacking/wellness company that installs turnkey recovery pods in commercial and residential spaces.

- Landing pages with wouter routing:
  - `/` — Hotels & Resorts (targeting hotel operators for wellness revenue)
  - `/residential` — Luxury Residential / HOAs (targeting property managers and HOA boards)
  - `/fitness` — Fitness & Sports Clubs
  - `/athletics` — University Athletics
- Standalone campaign landing pages (no navbar/footer, optimized for paid ad traffic):
  - `/campaign/hotels` — Hotels & Resorts campaign page
  - `/campaign/fitness` — Fitness & Sports Clubs campaign page
  - `/campaign/residential` — Luxury Residential campaign page
  - `/campaign/athletics` — University Athletics campaign page
  - Each follows 7-section structure: Hero → Value Proposition → Outcomes/ROI → How It Works → Lead Capture Form → Trust/Credibility → Final CTA
  - All CTAs read "Request a Meeting"
  - Self-contained with BH Labs branding inline, no cross-references to other verticals
- Frontend-only (no backend required)
- Uses framer-motion for scroll-triggered animations
- Real equipment photos (7 modalities) with `-auto-orient` processing, `object-contain`, max-height 400px
- Logo files: `logo-dark.png` (light sections), `logo-light.png` (dark sections) — 400×400px, transparent bg
- Interactive ROI Calculator immediately below hero on both pages:
  - Hotel: sliders for rooms, surcharge/night, occupancy, sessions/day, session price, operating cost
  - Residential: sliders for units, monthly fee, participation rate, operating cost
  - Real-time results with loss aversion messaging, cap-rate property value estimate, emerald green results panel
  - "Get My Full Property Projection" CTA
- Loss aversion "cost of NOT acting" sections (red-themed) on both pages
- TL;DR answer blocks for AEO (40-90 word citable summaries)
- Question-based H2 headings throughout for AI answer engines
- Source citations: Global Wellness Institute (2024/2025)
- FAQ sections with accordion UI and matching FAQPage JSON-LD schema
- Contact form with thank-you state overlay, qualification fields (unit count, property type), UTM capture
- Prominent green ROI Calculator button in navbar (upper right)
- SEO/AEO optimized:
  - JSON-LD: Organization, Product, FAQPage, BreadcrumbList, WebPage (all with dateModified)
  - Per-route canonical URLs, OG/Twitter meta tags
  - `robots.txt` allowing AI crawlers (OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot)
  - `llms.txt` for AI system site comprehension
  - `<meta name="robots" content="index, follow">`
  - Lazy loading on below-fold images, width/height for CLS
  - Title tags under 60 chars with primary keyword
- Brand: Do NOT use "Medical-Grade" for Red Light Therapy
- Contact: info@thebiohacklab.com | www.bh-labs.com | 954-870-5814

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

- Entry: `src/index.ts` — reads `PORT`, starts Express
- App setup: `src/app.ts` — mounts CORS, JSON/urlencoded parsing, routes at `/api`
- Routes: `src/routes/index.ts` mounts sub-routers; `src/routes/health.ts` exposes `GET /health` (full path: `/api/health`)
- Depends on: `@workspace/db`, `@workspace/api-zod`
- `pnpm --filter @workspace/api-server run dev` — run the dev server
- `pnpm --filter @workspace/api-server run build` — production esbuild bundle (`dist/index.cjs`)
- Build bundles an allowlist of deps (express, cors, pg, drizzle-orm, zod, etc.) and externalizes the rest

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. Exports a Drizzle client instance and schema models.

- `src/index.ts` — creates a `Pool` + Drizzle instance, exports schema
- `src/schema/index.ts` — barrel re-export of all models
- `src/schema/<modelname>.ts` — table definitions with `drizzle-zod` insert schemas (no models definitions exist right now)
- `drizzle.config.ts` — Drizzle Kit config (requires `DATABASE_URL`, automatically provided by Replit)
- Exports: `.` (pool, db, schema), `./schema` (schema only)

Production migrations are handled by Replit when publishing. In development, we just use `pnpm --filter @workspace/db run push`, and we fallback to `pnpm --filter @workspace/db run push-force`.

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config (`orval.config.ts`). Running codegen produces output into two sibling packages:

1. `lib/api-client-react/src/generated/` — React Query hooks + fetch client
2. `lib/api-zod/src/generated/` — Zod schemas

Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec (e.g. `HealthCheckResponse`). Used by `api-server` for response validation.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec (e.g. `useHealthCheck`, `healthCheck`).

### `artifacts/hotel-deck` (`@workspace/hotel-deck`)

Slide deck artifact for BH Labs Recovery Pod generic hotel pitch. 9 slides covering title, opportunity, problem, solution, pricing, guest experience, ROI projections, competitive landscape, and closing CTA.

- Built with React + Tailwind CSS (slides artifact type)
- BH Labs branding: dark emerald (#0A2E1C) primary, gold (#C8A951) accent, cream (#F5F1EA) background
- Typography: Playfair Display (display serif) + Inter (body sans)
- Uses existing equipment photos from landing-pages + AI-generated hero/resort images
- Static ROI table with Conservative/Moderate/Demonstrated scenarios
- Competitive comparison: Traditional Spa vs Restore vs Major Chain vs BH Labs
- Generic language (no chain-specific references) for broad hotel/resort market
- Exportable to PPTX via slides viewer

### `artifacts/fitness-landing` (`@workspace/fitness-landing`)

Standalone conversion-focused landing page for BH Labs Recovery Pod — Fitness and Sports Club vertical. Designed as a single-page ad campaign destination with no navigation to other verticals.

- Single-page app (no router), renders fitness page directly
- Minimal sticky header: BH Labs logo + green "Calculate My Revenue" button + "Book a Strategy Call" button
- No navbar links, no footer — fully standalone for paid ad traffic
- CTA hierarchy: "Calculate My Revenue Potential" (primary) / "Book a Strategy Call" (secondary)
- Section order: Hero → Why This Matters Now → ROI Calculator → Proof/Credibility → Premium Recovery Offering → Equipment (by member outcome) → Turnkey Installation → Opportunity Cost → FAQ → Lead Form
- ROI Calculator: fitness-specific inputs (totalMembers, premiumUptake %, premiumPrice, dropInSessions, dropInPrice, operatingCost), methodology accordion, illustrative disclaimer
- Equipment grouped by member outcome: Performance Recovery, Stress & Nervous System Reset, Circulation & Regeneration
- Premium Recovery Offering section: 4 monetization models (premium tier, drop-in, athlete programs, brand positioning)
- Opportunity cost section: elegant stone-colored (not red fear-based)
- FAQ: 9 questions focused on buyer objections
- 2-step contact form with progress indicator:
  - Step 1: contact info + facility basics (required)
  - Step 2: qualification (facility type, existing recovery, primary goal, buyer stage, available space, timeline, custom ROI estimate)
  - Back button on step 2, thank-you overlay on submit
- UTM parameter capture (sessionStorage → form payload)
- SEO: JSON-LD (Organization, Product, FAQPage, WebPage), OG/Twitter meta, canonical URL
- Same visual theme and branding as hotel-landing artifact

### `artifacts/residential-landing` (`@workspace/residential-landing`)

Standalone landing page for BH Labs Recovery Pod — Luxury Residential vertical. Designed as a single-page ad campaign destination with no navigation to other verticals.

- Single-page app (no router), renders residential page directly
- Minimal sticky header: BH Labs logo + green "ROI Calculator" button + "Request a Meeting" button
- No navbar links, no footer — fully standalone for paid ad traffic
- All CTAs read "Request a Meeting"
- Content sections: Hero → ROI Calculator → Summary bar → Value proposition (2 stat cards) → Loss aversion → Equipment grid (7 modalities) → Turnkey installation (4 steps) → Operations/maintenance → Social proof → FAQ → Contact form
- Residential-specific contact form with:
  - Role dropdown (Property Manager, HOA Board Member, Developer, etc.)
  - Property Type dropdown (Condo, HOA, Mixed-Use, etc.)
  - Current Amenities multi-select checkboxes
  - Available Space number-only input
  - Amenity/Wellness Fees dropdown with conditional fee amount field
  - Decision Stage dropdown
  - UTM parameter capture
- ROI Calculator: sliders for units, monthly wellness fee, participation rate, operating cost
- SEO: JSON-LD (Organization, Product, FAQPage, WebPage), OG/Twitter meta, canonical URL
- Same visual theme and branding as hotel-landing artifact
- Messaging focus: elevated resident wellness, luxury lifestyle differentiation, property value increase, wellness-forward positioning

### `artifacts/athletics-landing` (`@workspace/athletics-landing`)

Standalone landing page for BH Labs Recovery Pod — University Athletics vertical. Designed as a single-page ad campaign destination with no navigation to other verticals.

- Single-page app (no router), renders athletics page directly
- Minimal sticky header: BH Labs logo + green "ROI Calculator" button + "Request a Meeting" button
- No navbar links, no footer — fully standalone for paid ad traffic
- All CTAs read "Request a Meeting"
- Content sections: Hero → Summary bar → ROI Calculator → Value proposition (4 stat cards) → Loss aversion → Equipment grid (7 modalities) → Turnkey installation (4 steps) → Social proof → FAQ → Contact form
- Athletics-specific contact form with:
  - Role dropdown (Athletic Director, Head Athletic Trainer, Director of Sports Medicine, etc.)
  - University Name input
  - Number of Sports Programs and Total Athletes
  - Current Recovery Methods multi-select checkboxes
  - Available Space number-only input
  - Primary Goal dropdown
  - Target Timeline dropdown
  - UTM parameter capture
- ROI Calculator: sliders for number of athletes, current annual recovery spend; shows first-year net savings, cost reduction %, payback period, cost per athlete
- SEO: JSON-LD (Organization, Product, FAQPage, WebPage), OG/Twitter meta, canonical URL
- Same visual theme and branding as hotel-landing and fitness-landing artifacts
- Messaging focus: athlete recovery and performance, return-to-play acceleration, recruiting advantage, cost savings vs outsourcing, operational simplicity

### `scripts` (`@workspace/scripts`)

Utility scripts package. Each script is a `.ts` file in `src/` with a corresponding npm script in `package.json`. Run scripts via `pnpm --filter @workspace/scripts run <script>`. Scripts can import any workspace package (e.g., `@workspace/db`) by adding it as a dependency in `scripts/package.json`.
