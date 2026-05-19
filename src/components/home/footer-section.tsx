import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { footerContent } from "@/content/homepage";

export function FooterSection() {
  return (
    <footer className="overflow-hidden bg-[var(--color-ink)] py-10 text-white md:py-12">
      <Container className="space-y-12 md:space-y-16">
        <Reveal className="flex flex-col gap-4 text-lg leading-[1.23] tracking-[-0.015em] text-white/75 md:flex-row md:flex-wrap md:gap-10 md:text-[1.625rem]">
          <div className="flex flex-wrap items-center gap-2">
            <span>{footerContent.emailLabel}</span>
            <span className="text-white">{footerContent.emailValue}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span>{footerContent.phoneLabel}</span>
            <span className="text-white">{footerContent.phoneValue}</span>
          </div>
        </Reveal>

        <Reveal className="overflow-hidden pb-1">
          <p className="font-display footer-fade-text headline-tight whitespace-nowrap text-[clamp(4.2rem,15vw,11.35rem)] tracking-[0.04em]">
            {footerContent.marquee}
          </p>
        </Reveal>
      </Container>
    </footer>
  );
}
