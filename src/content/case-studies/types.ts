export type CaseStudySectionLayout = "text" | "single-image" | "double-image";

export type CaseStudySection = {
  id: string;
  title: string;
  body: string[];
  layout?: CaseStudySectionLayout;
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
