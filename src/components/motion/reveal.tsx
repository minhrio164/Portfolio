"use client";

import type { ReactNode } from "react";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  id?: string;
};

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 28,
  id,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className} id={id}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      id={id}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
