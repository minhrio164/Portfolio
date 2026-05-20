"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";

import { HeroMarquee } from "@/components/motion/hero-marquee";
import { Reveal } from "@/components/motion/reveal";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";
import { HomeHeader } from "@/components/home/home-header";
import { SiteHeader } from "@/components/ui/site-header";
import { homepageContent } from "@/content/homepage";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative h-[100svh] min-h-[45rem] overflow-hidden bg-[var(--color-hero)] text-white md:min-h-[56.25rem]">
      <div className="hero-shadow absolute inset-0">
        <Image
          src="/images/hero-waves.png"
          alt=""
          fill
          priority
          className="object-cover object-[60%_50%] md:object-center"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 h-full md:hidden">
        <HomeHeader />
        <div className="flex h-full flex-col justify-between pb-5 pt-28 sm:pt-32">
          <Reveal className="max-w-[18rem] px-[var(--page-gutter)] sm:max-w-[24rem]">
            <div className="flex flex-col gap-9">
              <div className="space-y-4">
                <p className="text-[clamp(2rem,3vw,2.5rem)] leading-none font-semibold text-white">
                  {homepageContent.hero.intro}
                </p>
                <p className="text-[clamp(1.125rem,3vw,2.5rem)] font-semibold leading-none text-white">
                  {homepageContent.hero.email}
                </p>
              </div>

              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.62, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <LiquidMetalButton label={homepageContent.hero.ctaLabel} />
              </motion.div>
            </div>
          </Reveal>

          <div className="relative overflow-hidden pb-2">
            <HeroMarquee text={homepageContent.hero.marquee} fontSize="13.35vw" />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-10 hidden md:block xl:hidden">
        <SiteHeader
          brand={homepageContent.hero.brand}
          variant="dark"
          className="absolute inset-x-0 top-0 py-8"
          worksHref="#featured-projects"
          experiencesHref="#experience"
        />

        <Reveal
          className="absolute"
          style={
            {
              left: "60px",
              top: "240px",
              width: "min(28rem, calc(100vw - 120px))",
            } as CSSProperties
          }
        >
          <div className="flex flex-col gap-12">
            <div className="space-y-5">
              <p className="text-[2rem] leading-none font-semibold text-white">
                {homepageContent.hero.intro}
              </p>
              <p className="text-[2rem] font-semibold leading-none text-white">
                {homepageContent.hero.email}
              </p>
            </div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <LiquidMetalButton label={homepageContent.hero.ctaLabel} />
            </motion.div>
          </div>
        </Reveal>

        <div className="absolute inset-x-0 bottom-4 overflow-hidden">
          <HeroMarquee text={homepageContent.hero.marquee} fontSize="14vw" />
        </div>
      </div>

      <div className="absolute inset-0 z-10 hidden xl:block">
        <SiteHeader
          brand={homepageContent.hero.brand}
          variant="dark"
          className="absolute inset-x-0 top-0 py-[42px]"
          worksHref="#featured-projects"
          experiencesHref="#experience"
        />

        <Reveal
          className="absolute"
          style={
            {
              left: "303px",
              top: "296px",
              width: "514px",
            } as CSSProperties
          }
        >
          <div className="flex flex-col gap-[68px]">
            <div className="space-y-6">
              <p className="text-[40px] leading-none font-semibold text-white">
                {homepageContent.hero.intro}
              </p>
              <p className="text-[40px] font-semibold leading-none text-white">
                {homepageContent.hero.email}
              </p>
            </div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <LiquidMetalButton label={homepageContent.hero.ctaLabel} />
            </motion.div>
          </div>
        </Reveal>

        <div className="absolute inset-x-0 bottom-[22px] overflow-hidden">
          <HeroMarquee text={homepageContent.hero.marquee} fontSize="181.276px" />
        </div>
      </div>
    </section>
  );
}
