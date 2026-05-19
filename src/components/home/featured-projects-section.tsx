import { ArrowDown } from "lucide-react";

import { ProjectCard } from "@/components/home/project-card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { featureProjects } from "@/content/homepage";

export function FeaturedProjectsSection() {
  return (
    <section className="bg-white py-[var(--section-space)]">
      <Container className="space-y-10 sm:space-y-14">
        <div className="space-y-5">
          <p className="text-lg font-semibold tracking-[-0.018em] text-[var(--color-ink)] sm:text-[1.375rem]">
            Design that gets results
          </p>
          <h2 className="font-display headline-tight text-[clamp(3.7rem,8vw,6rem)] text-[var(--color-ink)]">
            Feature Card
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-16">
          {featureProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} delay={index * 0.08} />
          ))}
        </div>

        <div className="flex justify-center pt-2 sm:pt-4">
          <Button
            variant="ghost-pill"
            className="gap-2 px-6 py-5 text-base font-semibold tracking-[-0.018em] sm:text-[1.375rem]"
          >
            <span>View more works</span>
            <ArrowDown className="h-5 w-5" strokeWidth={2.1} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
