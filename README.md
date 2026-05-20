# Digital Thinker Portfolio

Portfolio site built with `Next.js`, `Tailwind CSS`, and `Framer Motion`, based on the Figma homepage design at node `80:1157` and the case study design at node `80:1147`.

## Current status

- Homepage is implemented and split into reusable sections.
- Homepage content is now centralized in a section-based data file.
- A first case study route is implemented at `/work/a-sense`.
- Homepage `View Showcase` links now route into the case study flow.
- The case study page now has a sticky sidebar with working `active`, `default`, and `hover` states.
- A dedicated `case study template plan` exists and the first scaffold is already in code.
- The hero background asset has already been localized to `public/images/hero-waves.png`.
- Typography now uses local `Host Grotesk` and `Cracker Grotesk` files via `next/font/local`.
- Development-only tooling now includes `Agentation`.
- The homepage CTA has an experimental `Liquid Metal Button` implementation inspired by Joly UI.
- The case study live-project CTA now uses a matching `Liquid Metal` link button.
- The shared site header is now unified across homepage and case study:
  - logo on the left
  - `Works` and `Experiences` on the right
  - light/dark variants by page

## Stack

- Next.js App Router
- React 19
- Tailwind CSS v4
- Framer Motion
- Lucide React
- Agentation
- @paper-design/shaders

## Run locally

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3000`.

## Verification

```bash
npm run lint
npm run build
```

Both commands passed on this machine during implementation.

## Important paths

- App entry: `src/app/page.tsx`
- Global styles and font wiring: `src/app/globals.css`
- Local font loader: `src/app/fonts.ts`
- Homepage sections: `src/components/home`
- Motion helpers: `src/components/motion`
- UI primitives: `src/components/ui`
- Homepage content source: `src/content/homepage.ts`
- Case study route: `src/app/work/[slug]/page.tsx`
- Case study content source: `src/content/case-studies`
- Case study sidebar component: `src/components/case-study/case-study-sidebar.tsx`
- Case study screen plan: `CASE_STUDY_PLAN.md`
- Localized hero asset: `public/images/hero-waves.png`
- Sidebar arrow asset: `public/images/arrow-right-circle-sidebar.svg`

## Fonts included

The repo now includes:

- `public/fonts/HostGrotesk-Regular.ttf`
- `public/fonts/HostGrotesk-SemiBold.ttf`
- `public/fonts/CrackerGrotesk-Regular.otf`
- `public/fonts/CrackerGrotesk-Regular.woff2`

These are wired through `src/app/fonts.ts` and used across the homepage.

## Case study progress

The first working sample is:

- `/work/a-sense`

Implemented pieces:

- light case study header
- large display title
- overview + meta row
- liquid-metal `Link to live Project` CTA
- sticky sidebar
- data-driven sections rendered from `src/content/case-studies`
- placeholder image blocks for current layout exploration
- footer reuse from the homepage system

## Notes for GitHub push

- `node_modules` and `.next` are already ignored in `.gitignore`.
- Local temporary cache folders like `.next-cache-*` and `.next-stale-font-cache` are now ignored too.
- You can push this repo as-is to GitHub and continue on another machine with `npm install`.
- The temporary default SVGs in `public/` are harmless, but not part of the real design.

See [PROJECT_CONTEXT.md](/Users/digitalfactory/Documents/Portfolio/PROJECT_CONTEXT.md) for the full project handoff note.
