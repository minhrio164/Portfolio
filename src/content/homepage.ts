export type ProjectCardContent = {
  title: string;
  summary: string;
  showcaseSlug?: string;
};

export type ExperienceEntry = {
  label: string;
  role: string;
  company: string;
  duration: string;
  dateRange: string;
  description: string;
};

export type HomePageContent = {
  hero: {
    brand: string;
    intro: string;
    email: string;
    ctaLabel: string;
    marquee: string;
  };
  featuredProjects: {
    eyebrow: string;
    heading: string;
    ctaLabel: string;
    items: ProjectCardContent[];
  };
  experience: {
    heading: string;
    entries: ExperienceEntry[];
  };
  footer: {
    emailLabel: string;
    emailValue: string;
    phoneLabel: string;
    phoneValue: string;
    marquee: string;
  };
};

export const homepageContent: HomePageContent = {
  hero: {
    brand: "Minh Pham",
    intro: "Base on VietNam not Thread City",
    email: "lucaspham@gmail.com",
    ctaLabel: "Discover my works",
    marquee: "Product Portfolio",
  },
  featuredProjects: {
    eyebrow: "Design that gets results",
    heading: "Feature Card",
    ctaLabel: "View more works",
    items: [
      {
        title: "Designing a Gen AI ecosystem from zero mobile.",
        summary:
          "Led product design for Provenance's AI wedding tools, designing the MVP and scaling to 200,000+ users while maintaining a world-class NPS score",
        showcaseSlug: "a-sense",
      },
      {
        title: "Designing a Gen AI ecosystem from zero mobile.",
        summary:
          "Led product design for Provenance's AI wedding tools, designing the MVP and scaling to 200,000+ users while maintaining a world-class NPS score",
      },
      {
        title: "Designing a Gen AI ecosystem from zero mobile.",
        summary:
          "Led product design for Provenance's AI wedding tools, designing the MVP and scaling to 200,000+ users while maintaining a world-class NPS score",
      },
      {
        title: "Designing a Gen AI ecosystem from zero mobile.",
        summary:
          "Led product design for Provenance's AI wedding tools, designing the MVP and scaling to 200,000+ users while maintaining a world-class NPS score",
      },
    ],
  },
  experience: {
    heading: "Experience",
    entries: [
      {
        label: "VPBank",
        role: "Product Designer",
        company: "VPBank",
        duration: "3 Years 4 Months",
        dateRange: "20/10/2024 - Present",
        description:
          "Led the redesign of major portal experiences, helping structure information architecture, define reusable UI patterns, and improve cross-team collaboration between product, marketing, and engineering.",
      },
      {
        label: "Vietinbank",
        role: "Senior Product Designer",
        company: "Vietinbank",
        duration: "2 Years 1 Month",
        dateRange: "01/08/2022 - 30/09/2024",
        description:
          "Worked on digital banking flows focused on trust, clarity, and service discoverability, while building stronger design consistency across multiple customer-facing journeys.",
      },
      {
        label: "Starack",
        role: "Product Designer",
        company: "Starack",
        duration: "1 Year 8 Months",
        dateRange: "01/01/2021 - 31/07/2022",
        description:
          "Designed product experiences for fast-moving internal and client-facing initiatives, with a focus on rapid iteration, scalable interface systems, and clear UX communication.",
      },
    ],
  },
  footer: {
    emailLabel: "Reach this Project ;",
    emailValue: "a@gmail.com",
    phoneLabel: "Phone;",
    phoneValue: "+84 091 0928 301",
    marquee: "Minh Pham",
  },
};
