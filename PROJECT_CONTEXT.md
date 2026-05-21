# Project Context

## Project

`Digital Thinker` portfolio website.

This repo currently contains the first implemented phase only:

1. Static homepage
2. Homepage-ready animation structure
3. Ongoing homepage polish and hero experimentation
4. First real case study route with synced content and localized assets

The internal showcase template is now implemented as a reusable route scaffold, connected from the homepage, and populated with the first production-facing VPBank case study content.

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
- Live case study data file: `src/content/case-studies/a-sense.ts`
- Sticky case study sidebar with working `active`, `default`, and `hover` states
- `LiquidMetalLinkButton` for the case study live-project CTA
- Local sidebar arrow asset wired from `public/images/arrow-right-circle-sidebar.svg`
- Homepage project card can now read linked title, overview, and preview image directly from the case study detail file
- The first case study now uses localized real screenshots exported from Figma instead of gray placeholders

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
- `public/images/case-studies/*`

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
- Synced `Port` case study content from Figma node `80:1147` into the codebase
- Replaced placeholder case study visuals with localized VPBank screenshots in `public/images/case-studies`
- Extended the case study content model with:
  - `heroImageAlt`
  - `imageCaptions`
- Updated the detail page renderer to use real images and captions
- Linked homepage featured project cards to case study detail data:
  - preview image outside uses the case study hero image
  - title outside uses the case study title
  - description outside uses the case study overview
- Refined case study interactions:
  - sidebar arrow now tracks the real hovered/active item position
  - image captions are centered and use the shared `18px / 144%` body treatment
  - liquid-metal live-project CTA icon spacing tightened
- Introduced `-v2` case study image filenames to force fresh asset pickup in the browser

## Next recommended step

Continue polishing the case study screen against Figma:

1. Clean up unused non-`-v2` case study image duplicates in `public/images/case-studies`
2. Continue aligning section order/content naming with the final Figma narrative
3. Add more real case study content files once the first content model feels stable
4. Consider extracting semantic typography utilities for repeated case study text styles

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
