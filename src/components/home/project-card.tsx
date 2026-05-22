"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Reveal } from "@/components/motion/reveal";
import { getCaseStudyBySlug } from "@/content/case-studies";
import type { ProjectCardContent } from "@/content/homepage";

export function ProjectCard({
  project,
  delay = 0,
}: {
  project: ProjectCardContent;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const caseStudy = project.showcaseSlug
    ? getCaseStudyBySlug(project.showcaseSlug)
    : undefined;
  const href = project.showcaseSlug ? `/work/${project.showcaseSlug}` : "#";
  const displayTitle = caseStudy?.title ?? project.title;
  const displaySummary = caseStudy?.overviewText ?? project.summary;
  const previewImage = caseStudy?.heroImage;
  const previewImageAlt = caseStudy?.heroImageAlt ?? displayTitle;
  const isLinked = href !== "#";

  return (
    <Reveal delay={delay} className="group">
      <article className="flex h-full flex-col gap-7 md:gap-9 lg:gap-10">
        <motion.div
          whileHover={prefersReducedMotion ? undefined : { scale: 1.015 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[1.08/1] overflow-hidden rounded-[10px] bg-[#f1f1f1] sm:aspect-[1.2/1] md:h-[430px] md:aspect-auto"
        >
          {isLinked ? (
            <Link href={href} className="absolute inset-0 block">
              {previewImage ? (
                <Image
                  src={previewImage}
                  alt={previewImageAlt}
                  fill
                  sizes="(min-width: 1024px) 645px, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.9),rgba(231,231,231,0.85))]" />
              )}
            </Link>
          ) : (
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.9),rgba(231,231,231,0.85))]" />
          )}
        </motion.div>

        <div className="flex flex-col gap-5 md:gap-8 lg:gap-10">
          <div className="space-y-3 md:space-y-4">
            <h3 className="w-full text-[clamp(1.85rem,4vw,2.5rem)] font-semibold leading-[0.98] text-[var(--color-ink)]">
              {isLinked ? (
                <Link
                  href={href}
                  className="transition-colors hover:text-[var(--color-ink-soft)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ink)]"
                >
                  {displayTitle}
                </Link>
              ) : (
                displayTitle
              )}
            </h3>
            <p className="max-w-[60ch] text-[15px] leading-[1.5] tracking-[0.01em] text-[var(--color-ink-soft)] sm:text-base md:text-lg md:leading-[1.44]">
              {isLinked ? (
                <Link
                  href={href}
                  className="transition-colors hover:text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ink)]"
                >
                  {displaySummary}
                </Link>
              ) : (
                displaySummary
              )}
            </p>
          </div>

          <Link
            href={href}
            className="inline-flex w-fit items-center gap-2 text-[var(--color-ink-soft)] transition hover:text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ink)]"
          >
            <span
              style={{
                fontSize: "clamp(18px, 2.6vw, 22px)",
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
