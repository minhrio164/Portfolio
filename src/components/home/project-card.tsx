"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Reveal } from "@/components/motion/reveal";
import type { ProjectCardContent } from "@/content/homepage";

export function ProjectCard({
  project,
  delay = 0,
}: {
  project: ProjectCardContent;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Reveal delay={delay} className="group">
      <article className="flex h-full flex-col gap-8 md:gap-10">
        <motion.div
          whileHover={prefersReducedMotion ? undefined : { scale: 1.015 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[1.24/1] overflow-hidden bg-[#f1f1f1] md:h-[430px] md:aspect-auto"
        >
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.9),rgba(231,231,231,0.85))]" />
        </motion.div>

        <div className="flex flex-col gap-6 md:gap-10">
          <div className="space-y-3 md:space-y-4">
            <h3 className="w-full text-[clamp(2rem,3vw,2.5rem)] font-semibold leading-none text-[var(--color-ink)]">
              {project.title}
            </h3>
            <p className="max-w-[58ch] text-base leading-[1.44] tracking-[0.01em] text-[var(--color-ink-soft)] sm:text-lg">
              {project.summary}
            </p>
          </div>

          <Link
            href={project.showcaseSlug ? `/work/${project.showcaseSlug}` : "#"}
            className="inline-flex w-fit items-center gap-2 text-[var(--color-ink-soft)] transition hover:text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ink)]"
          >
            <span
              style={{
                fontSize: "22px",
                fontWeight: 600,
                lineHeight: "1.25",
                letterSpacing: "-0.396px",
              }}
            >
              View Showcase
            </span>
            <motion.span
              whileHover={prefersReducedMotion ? undefined : { x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <ArrowRight className="h-5 w-5" strokeWidth={2.3} />
            </motion.span>
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
