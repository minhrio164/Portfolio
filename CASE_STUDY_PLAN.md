# Case Study Screen Plan

## Source

- Figma file: `Port`
- URL: `https://www.figma.com/design/BuviC8xeE1bOkwoOMmYto5/Port?node-id=80-1147&t=sUqEx0ni9NP9y2k7-4`
- Source node: `80:1147`

## Goal

Build a reusable `case study template` that matches the Figma screen and becomes the target for the homepage `View Showcase` links.

The first implementation originally focused on:

- one working case study route
- reusable content schema
- placeholder visuals first
- sticky sidebar navigation
- section-based rendering with optional image layouts

## Current implementation status

The first implementation pass is now in the repo and has moved beyond placeholders:

- dynamic route exists at `src/app/work/[slug]/page.tsx`
- first sample slug exists at `/work/a-sense`
- homepage `View Showcase` links are connected
- sticky sidebar behavior is implemented
- section rendering is data-driven from `src/content/case-studies`
- the first case study has been updated to `Renew VPBank Portal`
- text content has been synced from the Figma `Port` case study frame
- real localized image assets are now stored under `public/images/case-studies`
- homepage featured project cards now read linked preview data from the case study detail file
- image captions are supported in the content model and rendered in the detail page

## Route Strategy

Use a dynamic route:

```text
src/app/work/[slug]/page.tsx
```

This makes it easy to scale to `4-5` case studies without duplicating page code.

## Content Model

Each case study should be data-driven and rendered from a single file.

Recommended folder structure:

```text
src/content/
  homepage.ts
  case-studies/
    index.ts
    a-sense.ts
    another-project.ts
```

Recommended schema:

```ts
export type CaseStudySection = {
  id: string;
  title: string;
  body: string[];
  layout?: "text" | "single-image" | "double-image";
  images?: string[];
  imageCaptions?: string[];
};

export type CaseStudyContent = {
  slug: string;
  title: string;
  overviewLabel: string;
  overviewText: string;
  platform: string;
  year: string;
  liveProjectLabel: string;
  liveProjectUrl: string;
  heroImage?: string;
  heroImageAlt?: string;
  sidebar: {
    summaryLabel: string;
    showcaseLinkLabel: string;
    items: Array<{
      id: string;
      label: string;
    }>;
  };
  sections: CaseStudySection[];
};
```

## Rendering Rules

The content rules already agreed in chat:

- sidebar should be `sticky`
- body text can be `plain text` split into paragraphs
- visuals can begin as placeholders, but the current first case study now uses localized real assets
- section structure can vary by project
- every content section follows the same grammar:
  - `title`
  - `body text`
  - `image optional`
  - `single image` or `double image`

## Component Plan

Recommended components:

```text
src/components/case-study/
  case-study-header.tsx
  case-study-back-link.tsx
  case-study-hero.tsx
  case-study-meta.tsx
  case-study-sidebar.tsx
  case-study-section.tsx
  case-study-image-block.tsx
  case-study-footer.tsx
```

## Layout Plan

### Top area

- light header
- brand on the left
- `Works` and `Experiences` nav on the right
- large display title

### Hero/meta area

- large hero image
- overview block
- meta row:
  - platform
  - year
  - live project button

### Main content area

- left sticky sidebar
- right long-form content
- sections rendered from data

### Footer

- reuse the current footer system
- keep the large `DIGITAL THINKER` display text

## Responsive Strategy

### Desktop

- closest match to Figma
- 2-column layout with sticky sidebar

### Tablet

- keep sidebar but reduce width
- maintain section reading rhythm

### Mobile

- stack layout
- turn sticky sidebar into top jump links or a simplified index block

## Homepage Integration

Homepage `View Showcase` should link to the first route after the template exists:

```text
/work/a-sense
```

This is now partially generalized:

- homepage cards with `showcaseSlug` link into `/work/[slug]`
- linked cards can also inherit:
  - preview image from the case study hero image
  - title from the case study title
  - description from the case study overview

Later, each homepage card can map to its own slug.

## Implementation Tasks

1. Keep refining the static template against the Figma frame for desktop first.
2. Continue refining sticky sidebar behavior and visual styling for multi-line labels and longer case study lists.
3. Normalize image aspect strategies now that real Figma screenshots are in use.
4. Add responsive behavior for tablet and mobile.
5. Polish type scale, spacing, and interaction states.
6. Add more real case study content files once the template stabilizes.
7. Remove or archive duplicate non-`-v2` case study images once no longer needed.

## Recommended Order

The most efficient order is:

1. schema
2. route
3. desktop layout
4. sidebar
5. dynamic section rendering
6. homepage link wiring
7. responsive pass

## Notes

- Keep this screen data-driven from day one.
- Do not build a custom editor yet.
- Use placeholders first so the template can be finalized before asset production.
- That placeholder phase is complete for the first case study; current work should prefer real localized assets.
- The current homepage content system has already been refactored into a section-based structure, so the case study layer should follow the same philosophy.
- The sidebar state logic should remain simple:
  - `active` when the corresponding section is triggered
  - `default` color `#C6C6C6`
  - `hover` only on non-active items
- Captions now exist as a first-class part of image content and should stay data-driven from the content file.
