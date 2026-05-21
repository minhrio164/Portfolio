import type { CaseStudyContent } from "@/content/case-studies/types";

export const aSenseCaseStudy: CaseStudyContent = {
  slug: "a-sense",
  title: "Renew VPBank Portal",
  overviewLabel: "Overview",
  overviewText:
    "Designing a loyalty & booking ecosystem for a modern spa platform",
  platform: "Figma",
  year: "2025",
  liveProjectLabel: "Link to live Project",
  liveProjectUrl: "#",
  heroImage: "/images/case-studies/vpbank-hero-v2.png",
  heroImageAlt: "VPBank Portal hero preview",
  sidebar: {
    summaryLabel: "Summary",
    showcaseLinkLabel: "Showcase Link",
    items: [
      { id: "summary", label: "Summary" },
      { id: "my-contributions", label: "My Contributions" },
      { id: "information-architecture", label: "Information Architecture" },
      { id: "ui-design-library", label: "UI Design & Library" },
    ],
  },
  sections: [
    {
      id: "summary",
      title: "Summary",
      body: [
        "Before 2025, VPBank’s official website had become outdated in terms of technology, information architecture, and overall user experience compared to modern digital banking standards.",
        "The platform was originally developed and maintained through a long-term outsourcing contract, which created significant limitations in scalability, maintenance, and continuous product improvement. As the website evolved over the years, upgrading the system became increasingly complex and inefficient.",
        "To address these challenges, the Digital Factory Center (DF Center) decided to bring the platform in-house, aiming to rebuild and manage the VPBank Portal internally. This transition enabled the team to gain greater control over the product roadmap, accelerate feature development, improve cross-team collaboration, and establish a more scalable foundation for future digital experiences.",
      ],
      layout: "text",
    },
    {
      id: "my-contributions",
      title: "My Contributions",
      body: [
        "As a Product Designer, I collaborated closely with the marketing team to gather insights and feedback from existing customer touchpoints and data sources in order to better understand user behaviors and expectations across different customer segments. Based on these findings, I helped define the design direction for the new VPBank Portal by balancing the existing system architecture with future expansion opportunities, including the integration of an AI-powered assistant to replace the traditional chatbot experience.",
        "I also worked alongside cross-functional teams to restructure the platform’s information architecture, ensuring a more intuitive and scalable experience for diverse user journeys, while simultaneously building a scalable design system and reusable component foundation to support long-term consistency, maintainability, and future product growth across the platform.",
      ],
      layout: "double-image",
      images: [
        "/images/case-studies/vpbank-contribution-left-v2.png",
        "/images/case-studies/vpbank-contribution-right-v2.png",
      ],
      imageCaptions: [
        "This GenAI module is designed to be integrated across systems within the ecosystem.",
        "The GenAI module was integrated into the VPBank Portal live website",
      ],
    },
    {
      id: "information-architecture",
      title: "Information Architecture",
      body: [
        "Due to the complexity of multiple customer segments and a large number of micro-links across the platform, the information architecture was carefully planned and structured before the design phase began. The goal was to create a clear, scalable, and intuitive navigation system that could support diverse user journeys while maintaining consistency across the entire VPBank Portal ecosystem.",
      ],
      layout: "single-image",
      images: ["/images/case-studies/vpbank-smart-header-v2.png"],
      imageCaptions: ["Smart header with multi level"],
    },
    {
      id: "header-architecture",
      title: "Header Architecture",
      body: [],
      layout: "single-image",
      images: ["/images/case-studies/vpbank-header-architecture-v2.png"],
      imageCaptions: ["Header Architecture"],
    },
    {
      id: "ui-design-library",
      title: "UI Design & Library",
      body: [
        "The UI system was built on top of Atomic Design principles to ensure scalability, consistency, and long-term maintainability across the VPBank Portal ecosystem. A centralized design token structure was established for colors, typography, spacing, elevation, radius, and responsive behaviors, enabling a more systematic and reusable approach to interface development.",
      ],
      layout: "single-image",
      images: ["/images/case-studies/vpbank-component-library-v2.png"],
      imageCaptions: ["Component library ready to scale."],
    },
    {
      id: "functional-icon-system",
      title: "Functional Icon System",
      body: [],
      layout: "double-image",
      images: [
        "/images/case-studies/vpbank-icon-system-v2.png",
        "/images/case-studies/vpbank-atomic-design-v2.png",
      ],
      imageCaptions: [
        "Funcinal Icon System",
        "Component Build by atomic design",
      ],
    },
  ],
};
