import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { homepageContent } from "@/content/homepage";

export function ExperienceSection() {
  return (
    <section className="section-space bg-white md:min-h-[900px]">
      <Container className="space-y-10 md:space-y-[3.75rem]">
        <div className="space-y-8 md:space-y-10">
          <Reveal>
            <h2 className="font-display headline-tight text-[clamp(3.7rem,8vw,6rem)] text-[var(--color-ink)]">
              {homepageContent.experience.heading}
            </h2>
          </Reveal>
          <div className="h-px bg-[var(--color-border)]" />
        </div>

        <div className="grid gap-10 lg:grid-cols-[15.625rem_minmax(0,1fr)] lg:gap-[7.5rem]">
          <div className="space-y-8 sm:space-y-12 md:space-y-[3.75rem]">
            {homepageContent.experience.timeline.map((item, index) => (
              <Reveal key={`${item.year}-${index}`} delay={index * 0.07}>
                <p
                  className={`text-[clamp(2rem,3.3vw,2.5rem)] font-semibold leading-none ${
                    item.active ? "text-[var(--color-ink)]" : "text-[#bdbdbd]"
                  }`}
                >
                  {item.year}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="space-y-6">
            <Reveal>
              <article className="flex flex-col gap-5 sm:flex-row sm:gap-[2.875rem]">
                <div className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-2xl bg-[var(--color-ink)] text-lg font-semibold text-white">
                  Ai
                </div>
                <div className="min-w-0 flex-1 space-y-4">
                  <h3 className="font-display text-[1.625rem] leading-[1.23] tracking-[-0.015em] text-black">
                    {homepageContent.experience.role}
                  </h3>
                  <div className="space-y-2 md:space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-base leading-[1.44] tracking-[0.01em] text-[var(--color-ink-muted)] sm:text-lg">
                      <span>{homepageContent.experience.company}</span>
                      <span className="h-1 w-1 rounded-full bg-[var(--color-ink-muted)]" />
                      <span>{homepageContent.experience.duration}</span>
                    </div>
                    <p className="text-base leading-[1.44] tracking-[0.01em] text-[var(--color-ink-muted)] sm:text-lg">
                      {homepageContent.experience.dateRange}
                    </p>
                  </div>
                  <p className="max-w-[50rem] text-base leading-[1.44] tracking-[0.01em] text-[var(--color-ink-soft)] sm:text-lg">
                    {homepageContent.experience.description}
                  </p>
                </div>
              </article>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {[0, 1].map((item) => (
                <Reveal key={item} delay={0.12 + item * 0.08}>
                  <div className="h-52 bg-[var(--color-surface-soft)] transition duration-300 hover:-translate-y-1 md:h-[16.25rem]" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
