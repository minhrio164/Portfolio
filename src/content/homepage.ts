export type ProjectCardContent = {
  title: string;
  summary: string;
};

export type ExperienceEntry = {
  year: string;
  active?: boolean;
};

export const heroContent = {
  brand: "Digital Thinker",
  email: "a@gmail.com",
  intro: "I design product with purpose and meticulous attention to detail.",
  cta: "Discover more",
  marquee: "DIGITAL THINKER",
};

export const featureProjects: ProjectCardContent[] = [
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
  {
    title: "Designing a Gen AI ecosystem from zero mobile.",
    summary:
      "Led product design for Provenance's AI wedding tools, designing the MVP and scaling to 200,000+ users while maintaining a world-class NPS score",
  },
];

export const experienceTimeline: ExperienceEntry[] = [
  { year: "2000-2001", active: true },
  { year: "2000-2001" },
  { year: "2000-2001" },
];

export const experienceDetail = {
  company: "Company",
  duration: "3 Years 4 Months",
  dateRange: "20/10/2024 - 20/10/202",
  description:
    "I spearheaded the development of innovative solutions, driving a 30% increase in user engagement and a 15% reduction in customer churn.",
  role: "Lorem Ipsum",
};

export const footerContent = {
  emailLabel: "Reach this Project ;",
  emailValue: "a@gmail.com",
  phoneLabel: "Phone;",
  phoneValue: "+84 091 0928 301",
  marquee: "DIGITAL THINKER",
};
