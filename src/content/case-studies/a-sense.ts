import type { CaseStudyContent } from "@/content/case-studies/types";

export const aSenseCaseStudy: CaseStudyContent = {
  slug: "a-sense",
  title: "Feature Card",
  overviewLabel: "Overview",
  overviewText:
    "Designing a loyalty & booking ecosystem for a modern spa platform",
  platform: "Figma",
  year: "2025",
  liveProjectLabel: "Link to live Project",
  liveProjectUrl: "#",
  sidebar: {
    summaryLabel: "Summary",
    showcaseLinkLabel: "Showcase Link",
    items: [
      { id: "summary", label: "Summary" },
      { id: "discovery", label: "Discovery" },
      { id: "ui-design-1", label: "UI Design" },
    ],
  },
  sections: [
    {
      id: "summary",
      title: "Summary",
      body: [
        "a.Sense is a mobile-first spa platform designed to improve customer retention through memberships, recurring self-care routines, and personalized service experiences.",
        "The product focuses on simplifying the end-to-end wellness journey — from multi-service booking and package management to loyalty programs and membership engagement.",
      ],
      layout: "text",
    },
    {
      id: "discovery",
      title: "Discovery",
      body: [
        "This feature offers a streamlined approach to data analysis, providing users with actionable insights in real-time.",
        "Leverage our intuitive interface to unlock hidden patterns, predict future trends, and make data-driven decisions with confidence.",
      ],
      layout: "single-image",
      images: ["/images/placeholders/case-study-wide.png"],
    },
    {
      id: "ui-design-1",
      title: "Discovery",
      body: [
        "This feature offers a streamlined approach to data analysis, providing users with actionable insights in real-time.",
        "Leverage our intuitive interface to unlock hidden patterns, predict future trends, and make data-driven decisions with confidence.",
      ],
      layout: "double-image",
      images: [
        "/images/placeholders/case-study-left.png",
        "/images/placeholders/case-study-right.png",
      ],
    },
  ],
};
