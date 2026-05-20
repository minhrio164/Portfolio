"use client";

import { homepageContent } from "@/content/homepage";
import { SiteHeader } from "@/components/ui/site-header";

export function HomeHeader() {
  return (
    <SiteHeader
      brand={homepageContent.hero.brand}
      variant="dark"
      className="absolute inset-x-0 top-0 z-20 py-6 md:py-[2.625rem]"
      worksHref="#featured-projects"
      experiencesHref="#experience"
    />
  );
}
