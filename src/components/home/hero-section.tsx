"use client";

import Image from "next/image";
import { ArrowRight, Sparkle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { HeroMarquee } from "@/components/motion/hero-marquee";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HomeHeader } from "@/components/home/home-header";
import { heroContent } from "@/content/homepage";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--color-hero)] text-white">
      <div className="hero-shadow absolute inset-0">
        <Image
          src="/images/hero-waves.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <HomeHeader />

      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-between pb-8 pt-28 sm:pt-32 md:pt-40">
        <Reveal className="max-w-[32rem]">
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <p className="max-w-[18rem] text-[clamp(1.95rem,3.2vw,2.5rem)] leading-none font-semibold text-white">
                {heroContent.intro}
              </p>
              <p className="text-[1.1rem] font-semibold leading-none text-white sm:text-[2.5rem]">
                {heroContent.email}
              </p>
            </div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button className="gap-4 px-5 py-1.5 text-[0.95rem] font-semibold tracking-[-0.01em] sm:px-6 sm:py-1.5 sm:text-lg">
                <span>{heroContent.cta}</span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-ink)] text-white sm:h-11 sm:w-11">
                  <motion.span
                    whileHover={prefersReducedMotion ? undefined : { x: 3, y: -3 }}
                    transition={{ type: "spring", stiffness: 320, damping: 20 }}
                  >
                    <ArrowRight className="h-5 w-5 rotate-90" strokeWidth={2.4} />
                  </motion.span>
                </span>
              </Button>
            </motion.div>
          </div>
        </Reveal>

        <div className="relative mt-10 flex items-end overflow-hidden pb-2">
          <div className="pointer-events-none absolute bottom-[1.6rem] left-1/2 z-10 -translate-x-1/2 text-white/95 sm:bottom-[2.2rem] md:bottom-[3.4rem]">
            <Sparkle className="h-7 w-7 fill-current sm:h-10 sm:w-10" strokeWidth={1.5} />
          </div>
          <div className="w-full space-y-[-0.7rem] sm:space-y-[-1.2rem]">
            <HeroMarquee text={heroContent.marquee} />
            <HeroMarquee text={heroContent.marquee} inverted />
          </div>
        </div>
      </Container>
    </section>
  );
}
