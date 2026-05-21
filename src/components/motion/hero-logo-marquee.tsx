/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useReducedMotion } from "framer-motion";

const logos = [
  { src: "/images/logos/apple-music.svg", alt: "Apple Music" },
  { src: "/images/logos/1password.svg", alt: "1Password" },
  { src: "/images/logos/affinity-designer.svg", alt: "Affinity Designer" },
  { src: "/images/logos/alibaba.svg", alt: "Alibaba" },
  { src: "/images/logos/amazon.svg", alt: "Amazon" },
] as const;

type HeroLogoMarqueeProps = {
  logoHeight?: number;
  gapClassName?: string;
};

function LogoTrack({ logoHeight, gapClassName }: HeroLogoMarqueeProps) {
  return (
    <>
      {logos.map((logo, index) => (
        <div
          key={`${logo.alt}-${index}`}
          className={`flex shrink-0 items-center justify-center ${gapClassName ?? "mr-14"}`}
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="w-auto max-w-none opacity-60 grayscale brightness-0 invert"
            style={{ height: `${logoHeight ?? 32}px` }}
          />
        </div>
      ))}
    </>
  );
}

export function HeroLogoMarquee({
  logoHeight = 32,
  gapClassName = "mr-14",
}: HeroLogoMarqueeProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="overflow-hidden">
        <div className="flex min-w-max items-center whitespace-nowrap">
          <LogoTrack logoHeight={logoHeight} gapClassName={gapClassName} />
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="flex min-w-max items-center whitespace-nowrap will-change-transform"
      >
        <LogoTrack logoHeight={logoHeight} gapClassName={gapClassName} />
        <LogoTrack logoHeight={logoHeight} gapClassName={gapClassName} />
      </motion.div>
    </div>
  );
}
