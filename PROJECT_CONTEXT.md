# Project Context

## Project

`Digital Thinker` portfolio website.

This repo currently contains the first implemented phase only:

1. Static homepage
2. Homepage-ready animation structure

The internal showcase template has not been started yet.

## Figma source

- File: `Untitled`
- URL: `https://www.figma.com/design/BuviC8xeE1bOkwoOMmYto5/Untitled?node-id=80-1157&t=mFk8QUaTO7DqSRAE-4`
- Homepage source node: `80:1157`

The homepage implementation was based on this Figma frame and adapted into a responsive Next.js structure.

## What is already implemented

- Responsive homepage shell
- Dark hero section with localized wave image
- Header with menu button
- Intro copy + email + CTA
- Large animated marquee text
- Featured project grid
- Experience section
- Footer with contact info and display text
- Basic hover/focus interaction states
- Motion layer separated into reusable helpers for future Joly UI compatibility

## Code structure

- `src/app/page.tsx`
  Homepage composition
- `src/components/home/*`
  Section-level homepage components
- `src/components/motion/*`
  Reusable motion wrappers and marquee behavior
- `src/components/ui/*`
  Reusable low-level primitives
- `src/content/homepage.ts`
  Placeholder homepage content copied from current Figma text
- `src/app/globals.css`
  Design tokens, font-face declarations, and global styling

## Assets already localized

- `public/images/hero-waves.png`

This is the main hero background pulled from Figma and stored locally so the repo is portable.

## Assets still missing

The real font files are not yet in the repo.

Expected future files:

- `public/fonts/HostGrotesk-Regular.woff2`
- `public/fonts/HostGrotesk-Regular.woff`
- `public/fonts/HostGrotesk-SemiBold.woff2`
- `public/fonts/HostGrotesk-SemiBold.woff`
- `public/fonts/CrackerGrotesk-Regular.woff2`
- `public/fonts/CrackerGrotesk-Regular.woff`

Without them, the site uses fallback fonts and remains functional.

## Next recommended step

Finish homepage polish before starting showcase:

1. Replace fallback fonts with the real local font files
2. Review visual fidelity against Figma on desktop and mobile
3. Tune homepage animation timing and motion behavior
4. Then begin the internal showcase template

## Useful commands

```bash
npm install
npm run dev
npm run lint
npm run build
```
