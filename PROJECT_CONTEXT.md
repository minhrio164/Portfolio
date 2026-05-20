# Project Context

## Project

`Digital Thinker` portfolio website.

This repo currently contains the first implemented phase only:

1. Static homepage
2. Homepage-ready animation structure
3. Ongoing homepage polish and hero experimentation
4. First case study route and data model

The internal showcase template is now partially implemented as a reusable route scaffold and is connected from the homepage.

## Figma source

- File: `Untitled`
- URL: `https://www.figma.com/design/BuviC8xeE1bOkwoOMmYto5/Untitled?node-id=80-1157&t=mFk8QUaTO7DqSRAE-4`
- Homepage source node: `80:1157`
- Case study file: `Port`
- Case study URL: `https://www.figma.com/design/BuviC8xeE1bOkwoOMmYto5/Port?node-id=80-1147&t=sUqEx0ni9NP9y2k7-4`
- Case study source node: `80:1147`

The homepage implementation was based on this Figma frame and adapted into a responsive Next.js structure.

## What is already implemented

- Responsive homepage shell
- Dark hero section with localized wave image
- Shared site header system
- Intro copy + email + CTA
- Large animated marquee text
- Featured project grid
- Experience section
- Footer with contact info and display text
- Basic hover/focus interaction states
- Motion layer separated into reusable helpers for future Joly UI compatibility
- Homepage content refactored into a section-based `homepageContent` object
- Local fonts moved to `next/font/local`
- Development-only `Agentation` overlay added
- Experimental `LiquidMetalButton` CTA added for hero iteration
- Hero composition is actively being tuned toward a stronger one-shot art-directed layout
- Homepage `View Showcase` links wired to the first case study route
- First case study route at `src/app/work/[slug]/page.tsx`
- Reusable case study content schema in `src/content/case-studies`
- Sample case study data file: `src/content/case-studies/a-sense.ts`
- Sticky case study sidebar with working `active`, `default`, and `hover` states
- `LiquidMetalLinkButton` for the case study live-project CTA
- Local sidebar arrow asset wired from `public/images/arrow-right-circle-sidebar.svg`

## Code structure

- `src/app/page.tsx`
  Homepage composition
- `src/components/home/*`
  Section-level homepage components
- `src/components/case-study/*`
  Case study-specific components such as the sticky sidebar
- `src/components/motion/*`
  Reusable motion wrappers and marquee behavior
- `src/components/ui/*`
  Reusable low-level primitives, shared header, and liquid-metal buttons
- `src/content/homepage.ts`
  Centralized homepage content object
- `src/content/case-studies/*`
  Case study schema, sample data, and registry
- `src/app/fonts.ts`
  Local font loader for Host Grotesk and Cracker Grotesk
- `CASE_STUDY_PLAN.md`
  Working plan plus implementation notes for the case study screen
- `src/app/globals.css`
  Design tokens and global styling

## Assets already localized

- `public/images/hero-waves.png`
- `public/images/arrow-right-circle-sidebar.svg`

This is the main hero background pulled from Figma and stored locally so the repo is portable.

## Fonts now included

The repo now includes:

- `public/fonts/HostGrotesk-Regular.ttf`
- `public/fonts/HostGrotesk-SemiBold.ttf`
- `public/fonts/CrackerGrotesk-Regular.otf`
- `public/fonts/CrackerGrotesk-Regular.woff2`

These are wired through `src/app/fonts.ts`, so the homepage now renders through `next/font/local` instead of manual `@font-face` bindings.

## Today’s major updates

- Moved homepage content into a cleaner section-based structure for easier editing
- Added `Agentation` for dev-only on-page feedback
- Installed `@paper-design/shaders` and built an experimental liquid-metal hero CTA
- Added local Cracker Grotesk `.otf` and switched display fonts to `next/font/local`
- Reworked hero composition multiple times to move toward a consistent one-shot scene
- Standardized the site header:
  - brand/logo on the left
  - `Works` and `Experiences` on the right
  - light/dark variants by page
- Implemented the first case study route scaffold from Figma node `80:1147`
- Added case study content schema and sample data file `a-sense`
- Wired homepage `View Showcase` links to `/work/a-sense`
- Added a case study sticky sidebar and fixed its state behavior so:
  - `active` follows the currently triggered section
  - `default` uses `#C6C6C6`
  - `hover` only applies to default items
- Replaced the case study live-project CTA with a liquid-metal link button
- Added and wired the custom sidebar arrow SVG asset
- Fixed local preview confusion by replacing the stale process on port `3000`

## Next recommended step

Continue polishing the case study screen against Figma:

1. Tighten hero/meta spacing and proportions for the case study top area
2. Polish the `Showcase Link` block styling
3. Refine placeholder image block ratios and spacing to match the design more closely
4. Continue adding more real case study content files once the template is visually stable

## Useful commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Handoff note

If you continue this repo on another machine, read in this order:

1. `README.md`
2. `PROJECT_CONTEXT.md`
3. `CASE_STUDY_PLAN.md`

That sequence gives the current project status, the implementation context, and the next-screen plan.
