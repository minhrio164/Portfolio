# Digital Thinker Portfolio

Portfolio homepage built with `Next.js`, `Tailwind CSS`, and `Framer Motion`, based on the Figma homepage design at node `80:1157`.

## Current status

- Homepage is implemented and split into reusable sections.
- The current scope is homepage only.
- Showcase pages are intentionally not built yet.
- The hero background asset has already been localized to `public/images/hero-waves.png`.
- Typography is wired for local font files, but the real `Host Grotesk` and `Cracker Grotesk` files are still missing.

## Stack

- Next.js App Router
- React 19
- Tailwind CSS v4
- Framer Motion
- Lucide React

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
- Homepage sections: `src/components/home`
- Motion helpers: `src/components/motion`
- UI primitives: `src/components/ui`
- Homepage placeholder content: `src/content/homepage.ts`
- Localized hero asset: `public/images/hero-waves.png`

## Fonts still needed

Add these local files when available:

- `public/fonts/HostGrotesk-Regular.woff2`
- `public/fonts/HostGrotesk-Regular.woff`
- `public/fonts/HostGrotesk-SemiBold.woff2`
- `public/fonts/HostGrotesk-SemiBold.woff`
- `public/fonts/CrackerGrotesk-Regular.woff2`
- `public/fonts/CrackerGrotesk-Regular.woff`

The site already has fallback fonts, so it runs without them, but visual fidelity to Figma will improve once they are added.

## Notes for GitHub push

- `node_modules` and `.next` are already ignored in `.gitignore`.
- You can push this repo as-is to GitHub and continue on another machine with `npm install`.
- The temporary default SVGs in `public/` are harmless, but not part of the real design.

See [PROJECT_CONTEXT.md](/Users/digitalfactory/Documents/Portfolio/PROJECT_CONTEXT.md) for the full project handoff note.
