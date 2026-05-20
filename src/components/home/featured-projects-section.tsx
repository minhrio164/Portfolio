import { ArrowDown } from "lucide-react";

import { ProjectCard } from "@/components/home/project-card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { homepageContent } from "@/content/homepage";

export function FeaturedProjectsSection() {
  return (
    <section className="section-space bg-white">
      <Container className="space-y-10 md:space-y-16">
        <div className="space-y-5 md:space-y-10">
          <p className="text-lg font-semibold leading-[1.25] tracking-[-0.018em] text-[var(--color-ink)] sm:text-[1.375rem]">
            {homepageContent.featuredProjects.eyebrow}
          </p>
          <h2 className="font-display headline-tight text-[clamp(3.7rem,8vw,6rem)] text-[var(--color-ink)]">
            {homepageContent.featuredProjects.heading}
          </h2>
        </div>

        <div className="grid gap-10 md:gap-16 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10">
          {homepageContent.featuredProjects.items.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} delay={index * 0.08} />
          ))}
        </div>

        <div className="flex justify-center pt-2 md:pt-6">
          <Button
            variant="ghost-pill"
            className="gap-2 px-6 py-5"
          >
            <span
              style={{
                fontSize: "22px",
                fontWeight: 600,
                lineHeight: "1.25",
                letterSpacing: "-0.396px",
              }}
            >
              {homepageContent.featuredProjects.ctaLabel}
            </span>
            <ArrowDown className="h-5 w-5" strokeWidth={2.1} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
