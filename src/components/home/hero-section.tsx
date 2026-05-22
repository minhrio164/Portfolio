"use client";

import { motion, useReducedMotion } from "framer-motion";

import { HeroLiquidBackground } from "@/components/home/hero-liquid-background";
import { HeroLogoMarquee } from "@/components/motion/hero-logo-marquee";
import { Reveal } from "@/components/motion/reveal";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";
import { HomeHeader } from "@/components/home/home-header";
import { SiteHeader } from "@/components/ui/site-header";
import { homepageContent } from "@/content/homepage";

function HeroCopyBlock({
  headingClassName,
  buttonWrapClassName,
  alignClassName,
}: {
  headingClassName: string;
  buttonWrapClassName?: string;
  alignClassName?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`flex flex-col ${alignClassName ?? "items-center text-center"}`}>
      <div className={`flex flex-col ${alignClassName?.includes("items-start") ? "items-start" : "items-center"}`}>
        <h1 className={`${headingClassName} flex flex-col gap-5 leading-[1] ${alignClassName?.includes("items-start") ? "items-start text-left" : "items-center text-center"} md:gap-5 xl:gap-5`}><span className="block whitespace-nowrap">I&#39;m base on</span><span className="block whitespace-nowrap">VIETNAM</span><span className="block whitespace-nowrap">not Thread City</span></h1>
      </div>

      <motion.div
        className={buttonWrapClassName}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.62, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <LiquidMetalButton label={homepageContent.hero.ctaLabel} />
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative h-[100svh] min-h-[42rem] overflow-hidden bg-[var(--color-hero)] text-white md:min-h-[52rem] xl:min-h-[56.25rem]">
      <HeroLiquidBackground />

      <div className="relative z-10 h-full md:hidden">
        <HomeHeader />
        <div className="flex h-full items-center px-[var(--page-gutter)] pb-28 pt-24 sm:pb-32 sm:pt-28">
          <Reveal className="w-full max-w-[20rem] sm:max-w-[24rem]">
            <HeroCopyBlock
              headingClassName="font-display headline-tight text-[clamp(3.35rem,13vw,5.1rem)] text-white"
              buttonWrapClassName="mt-8"
              alignClassName="items-start text-left"
            />
          </Reveal>
        </div>
        <div className="absolute inset-x-0 bottom-6 overflow-hidden">
          <HeroLogoMarquee logoHeight={36} gapClassName="mr-8 sm:mr-10" />
        </div>
      </div>

      <div className="absolute inset-0 z-10 hidden md:block xl:hidden">
        <SiteHeader
          brand={homepageContent.hero.brand}
          variant="dark"
          className="absolute inset-x-0 top-0 py-7"
          worksHref="#featured-projects"
          experiencesHref="#experience"
        />

        <div className="flex h-full items-center justify-center px-10 pt-10 lg:px-14">
          <Reveal className="mx-auto max-w-[34rem] lg:max-w-[38rem]">
            <HeroCopyBlock
              headingClassName="font-display headline-tight text-[clamp(4.75rem,8.25vw,6.2rem)] text-white"
              buttonWrapClassName="mt-9"
              alignClassName="items-start text-left"
            />
          </Reveal>
        </div>

        <div className="absolute inset-x-0 bottom-6 overflow-hidden lg:bottom-8">
          <HeroLogoMarquee logoHeight={42} gapClassName="mr-10 lg:mr-12" />
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

        <div className="flex h-full items-center justify-center px-20 pt-10 2xl:px-24">
          <Reveal className="mx-auto max-w-[48rem]">
            <HeroCopyBlock
              headingClassName="font-display headline-tight text-[clamp(5.775rem,7vw,7.325rem)] text-white"
              buttonWrapClassName="mt-12"
            />
          </Reveal>
        </div>

        <div className="absolute inset-x-0 bottom-[30px] overflow-hidden">
          <HeroLogoMarquee logoHeight={56} gapClassName="mr-14" />
        </div>
      </div>
    </section>
  );
}
