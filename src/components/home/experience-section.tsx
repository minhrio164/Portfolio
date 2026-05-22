"use client";

import { useState } from "react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { homepageContent } from "@/content/homepage";

export function ExperienceSection() {
  const entries = homepageContent.experience.entries;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEntry = entries[activeIndex] ?? entries[0];

  return (
    <section className="section-space bg-white md:min-h-[900px]">
      <Container className="space-y-10 md:space-y-12 lg:space-y-[3.75rem]">
        <div className="space-y-8 md:space-y-10">
          <Reveal>
            <h2 className="font-display headline-tight text-[clamp(3.7rem,8vw,6rem)] text-[var(--color-ink)]">
              {homepageContent.experience.heading}
            </h2>
          </Reveal>
          <div className="h-px bg-[var(--color-border)]" />
        </div>

        <div className="grid gap-10 md:gap-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-[5rem] xl:grid-cols-[15.625rem_minmax(0,1fr)] xl:gap-[7.5rem]">
          <div className="flex flex-wrap gap-x-8 gap-y-5 border-b border-[var(--color-border)] pb-8 md:border-b-0 md:pb-0 lg:flex-col lg:items-start lg:gap-y-8 xl:gap-y-[3.75rem]">
            {entries.map((item, index) => (
              <Reveal
                key={`${item.label}-${index}`}
                delay={index * 0.07}
                className="w-fit"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`inline-flex w-fit text-left transition-colors ${
                    index === activeIndex
                      ? "text-[var(--color-ink)]"
                      : "text-[#bdbdbd] hover:text-[var(--color-ink-soft)]"
                  }`}
                  style={{
                    fontSize: "40px",
                    lineHeight: "1",
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </button>
              </Reveal>
            ))}
          </div>

          <div className="space-y-8 md:space-y-10">
            <Reveal key={activeEntry.label}>
              <article className="flex flex-col gap-4">
                <div className="min-w-0 flex-1 space-y-4">
                  <h3 className="font-display text-[1.5rem] leading-[1.15] tracking-[-0.015em] text-black sm:text-[1.625rem]">
                    {activeEntry.role}
                  </h3>
                  <div className="space-y-2 md:space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-[15px] leading-[1.44] tracking-[0.01em] text-[var(--color-ink-muted)] sm:text-base md:text-lg">
                      <span>{activeEntry.company}</span>
                      <span className="h-1 w-1 rounded-full bg-[var(--color-ink-muted)]" />
                      <span>{activeEntry.duration}</span>
                    </div>
                    <p className="text-[15px] leading-[1.44] tracking-[0.01em] text-[var(--color-ink-muted)] sm:text-base md:text-lg">
                      {activeEntry.dateRange}
                    </p>
                  </div>
                  <p className="max-w-[44rem] text-[15px] leading-[1.5] tracking-[0.01em] text-[var(--color-ink-soft)] sm:text-base md:text-lg md:leading-[1.44]">
                    {activeEntry.description}
                  </p>
                </div>
              </article>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 md:gap-6">
              {[0, 1].map((item) => (
                <Reveal key={item} delay={0.12 + item * 0.08}>
                  <div className="h-48 rounded-[10px] bg-[var(--color-surface-soft)] transition duration-300 hover:-translate-y-1 sm:h-52 md:h-[16.25rem]" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
