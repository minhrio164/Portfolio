"use client";

import { motion, useReducedMotion } from "framer-motion";

type HeroMarqueeProps = {
  text: string;
  inverted?: boolean;
};

export function HeroMarquee({ text, inverted = false }: HeroMarqueeProps) {
  const prefersReducedMotion = useReducedMotion();
  const repeatedText = `${text} * ${text}`;

  if (prefersReducedMotion) {
    return (
      <div
        className={`flex min-w-max gap-6 whitespace-nowrap text-[clamp(4rem,15vw,11.35rem)] tracking-[0.04em] text-white ${
          inverted ? "justify-end" : ""
        }`}
      >
        <span>{repeatedText}</span>
      </div>
    );
  }

  return (
    <motion.div
      animate={{ x: inverted ? [0, -120, 0] : [0, 120, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      className={`flex min-w-max gap-6 whitespace-nowrap text-[clamp(4rem,15vw,11.35rem)] tracking-[0.04em] text-white ${
        inverted ? "justify-end" : ""
      }`}
    >
      <span>{repeatedText}</span>
      <span aria-hidden="true">{repeatedText}</span>
    </motion.div>
  );
}
