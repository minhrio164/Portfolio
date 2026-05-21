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
}: {
  headingClassName: string;
  buttonWrapClassName?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex flex-col items-center">
        <h1 className={`${headingClassName} flex flex-col items-center gap-5 md:gap-5 xl:gap-5 leading-[1]`}><span className="block whitespace-nowrap">I&#39;m base on</span><span className="block whitespace-nowrap">VIETNAM</span><span className="block whitespace-nowrap">not Thread City</span></h1>
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
    <section className="relative h-[100svh] min-h-[45rem] overflow-hidden bg-[var(--color-hero)] text-white md:min-h-[56.25rem]">
      <HeroLiquidBackground />

      <div className="relative z-10 h-full md:hidden">
        <HomeHeader />
        <div className="flex h-full items-center justify-center px-[var(--page-gutter)] pb-10 pt-28 sm:pt-32">
          <Reveal className="mx-auto max-w-[22rem] sm:max-w-[28rem]">
            <HeroCopyBlock
              headingClassName="font-display headline-tight text-[clamp(3.975rem,12.6vw,5.575rem)] text-white"
              buttonWrapClassName="mt-9"
            />
          </Reveal>
          <div className="relative overflow-hidden pb-3 pt-8">
            <HeroLogoMarquee logoHeight={44} gapClassName="mr-10" />
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

        <div className="flex h-full items-center justify-center px-16 pt-12">
          <Reveal className="mx-auto max-w-[36rem]">
            <HeroCopyBlock
              headingClassName="font-display headline-tight text-[clamp(5.075rem,8.1vw,6.625rem)] text-white"
              buttonWrapClassName="mt-10"
            />
          </Reveal>
        </div>

        <div className="absolute inset-x-0 bottom-8 overflow-hidden">
          <HeroLogoMarquee logoHeight={48} gapClassName="mr-12" />
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

        <div className="flex h-full items-center justify-center px-24 pt-10">
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
