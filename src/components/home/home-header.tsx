"use client";

import { Menu } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { heroContent } from "@/content/homepage";

export function HomeHeader() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Container className="absolute inset-x-0 top-0 z-20 py-6 md:py-10">
      <div className="flex items-center justify-between">
        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-white sm:text-base"
        >
          {heroContent.brand}
        </motion.p>
        <motion.button
          initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--color-ink)] transition hover:scale-[1.04] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/80 active:scale-[0.98]"
          type="button"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" strokeWidth={2.2} />
        </motion.button>
      </div>
    </Container>
  );
}
