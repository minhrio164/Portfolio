# Case Study Screen Plan

## Source

- Figma file: `Port`
- URL: `https://www.figma.com/design/BuviC8xeE1bOkwoOMmYto5/Port?node-id=80-1147&t=sUqEx0ni9NP9y2k7-4`
- Source node: `80:1147`

## Goal

Build a reusable `case study template` that matches the Figma screen and becomes the target for the homepage `View Showcase` links.

The first implementation should focus on:

- one working case study route
- reusable content schema
- placeholder visuals first
- sticky sidebar navigation
- section-based rendering with optional image layouts

## Current implementation status

The first implementation pass is now in the repo:

- dynamic route exists at `src/app/work/[slug]/page.tsx`
- first sample slug exists at `/work/a-sense`
- homepage `View Showcase` links are connected
- sticky sidebar behavior is implemented
- section rendering is data-driven from `src/content/case-studies`
- placeholder image blocks are in place for visual layout iteration

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
- visuals should use `placeholder assets first`
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

- large hero placeholder image
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

Later, each homepage card can map to its own slug.

## Implementation Tasks

1. Polish the static template from the Figma frame for desktop first.
2. Continue refining sticky sidebar behavior and visual styling.
3. Add placeholder image blocks for `single-image` and `double-image`.
4. Add responsive behavior for tablet and mobile.
5. Polish type scale, spacing, and interaction states.
6. Add more real case study content files once the template stabilizes.

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
- The current homepage content system has already been refactored into a section-based structure, so the case study layer should follow the same philosophy.
- The sidebar state logic should remain simple:
  - `active` when the corresponding section is triggered
  - `default` color `#C6C6C6`
  - `hover` only on non-active items
