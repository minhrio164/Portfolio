export type ProjectCardContent = {
  title: string;
  summary: string;
  showcaseSlug?: string;
};

export type ExperienceEntry = {
  year: string;
  active?: boolean;
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
    timeline: ExperienceEntry[];
    role: string;
    company: string;
    duration: string;
    dateRange: string;
    description: string;
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
    intro: "I design product with purpose and meticulous attention to detail.",
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
    timeline: [
      { year: "2000-2001", active: true },
      { year: "2000-2001" },
      { year: "2000-2001" },
    ],
    role: "Lorem Ipsum",
    company: "Company",
    duration: "3 Years 4 Months",
    dateRange: "20/10/2024 - 20/10/202",
    description:
      "I spearheaded the development of innovative solutions, driving a 30% increase in user engagement and a 15% reduction in customer churn.",
  },
  footer: {
    emailLabel: "Reach this Project ;",
    emailValue: "a@gmail.com",
    phoneLabel: "Phone;",
    phoneValue: "+84 091 0928 301",
    marquee: "Minh Pham",
  },
};
