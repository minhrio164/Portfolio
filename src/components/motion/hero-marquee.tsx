"use client";

import { Sparkle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

type HeroMarqueeProps = {
  text: string;
  fontSize?: string;
};

function MarqueeContent({ text }: { text: string }) {
  const items = Array.from({ length: 6 }, (_, index) => `${text}-${index}`);

  return (
    <>
      {items.map((item) => (
        <span key={item} className="inline-flex items-center gap-6 pr-6">
          <span>{text}</span>
          <Sparkle className="h-[0.32em] w-[0.32em] fill-current" strokeWidth={1.6} />
        </span>
      ))}
    </>
  );
}

export function HeroMarquee({
  text,
  fontSize = "13.35vw",
}: HeroMarqueeProps) {
  const prefersReducedMotion = useReducedMotion();
  const marqueeStyle = {
    fontSize,
    lineHeight: "1",
  } as const;

  if (prefersReducedMotion) {
    return (
      <div
        className="flex min-w-max whitespace-nowrap font-display tracking-[0.01em] text-white"
        style={marqueeStyle}
      >
        <MarqueeContent text={text} />
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex min-w-max whitespace-nowrap font-display tracking-[0.01em] text-white will-change-transform"
        style={marqueeStyle}
      >
        <MarqueeContent text={text} />
        <MarqueeContent text={text} />
      </motion.div>
    </div>
  );
}
