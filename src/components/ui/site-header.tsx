"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  brand: string;
  variant?: "dark" | "light";
  className?: string;
  worksHref: string;
  experiencesHref: string;
};

export function SiteHeader({
  brand,
  variant = "light",
  className,
  worksHref,
  experiencesHref,
}: SiteHeaderProps) {
  const prefersReducedMotion = useReducedMotion();
  const textClass =
    variant === "dark" ? "text-white" : "text-[var(--color-ink)]";

  return (
    <div className={cn("layout-container", className)}>
      <div className="flex items-center justify-between">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
        >
          <Link
            href="/"
            className={cn(
              "text-sm font-semibold leading-[1.25] tracking-[-0.018em] sm:text-lg md:text-[1.375rem]",
              textClass,
            )}
          >
            {brand}
          </Link>
        </motion.div>

        <motion.nav
          initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className={cn(
            "flex items-center gap-6 text-sm font-semibold leading-[1.25] tracking-[-0.018em] sm:gap-10 sm:text-lg md:gap-[3.75rem] md:text-[1.375rem]",
            textClass,
          )}
        >
          <Link href={worksHref}>Works</Link>
          <Link href={experiencesHref}>Experiences</Link>
        </motion.nav>
      </div>
    </div>
  );
}
