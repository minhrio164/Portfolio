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
  const avatarClass =
    variant === "dark"
      ? "border-white bg-white text-[var(--color-ink)] shadow-[0_8px_24px_rgba(0,0,0,0.22)]"
      : "border-[var(--color-ink)] bg-[var(--color-ink)] text-white";

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
              "flex items-center gap-2.5 text-sm leading-[1.1] tracking-[-0.015em] sm:gap-3 sm:text-lg md:text-[1.375rem]",
              textClass,
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[0.68rem] font-semibold uppercase tracking-[0.08em] sm:h-10 sm:w-10 sm:text-[0.72rem]",
                avatarClass,
              )}
            >
              MP
            </span>
            <span className="font-display pt-[0.08em]">{brand}</span>
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
