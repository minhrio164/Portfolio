import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { homepageContent } from "@/content/homepage";

export function FooterSection() {
  return (
    <footer className="overflow-hidden bg-[var(--color-ink)] py-10 text-white md:min-h-[295px] md:py-[2.8125rem]">
      <Container className="space-y-12 md:space-y-14 lg:space-y-[4.25rem]">
        <Reveal className="flex flex-col gap-4 text-base leading-[1.3] tracking-[-0.015em] text-white/75 sm:text-lg md:flex-row md:flex-wrap md:gap-16 md:text-[1.625rem] lg:gap-20">
          <div className="flex flex-wrap items-center gap-2">
            <span>{homepageContent.footer.emailLabel}</span>
            <span className="text-white">{homepageContent.footer.emailValue}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span>{homepageContent.footer.phoneLabel}</span>
            <span className="text-white">{homepageContent.footer.phoneValue}</span>
          </div>
        </Reveal>

        <Reveal className="overflow-hidden pb-1">
          <p
            className="font-display footer-fade-text tracking-[0.01em] whitespace-normal md:whitespace-nowrap"
            style={{ fontSize: "clamp(4rem, 12vw, 11.33rem)", lineHeight: "1" }}
          >
            {homepageContent.footer.marquee}
          </p>
        </Reveal>
      </Container>
    </footer>
  );
}
