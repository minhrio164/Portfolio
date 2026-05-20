export type CaseStudySectionLayout = "text" | "single-image" | "double-image";

export type CaseStudySection = {
  id: string;
  title: string;
  body: string[];
  layout?: CaseStudySectionLayout;
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
