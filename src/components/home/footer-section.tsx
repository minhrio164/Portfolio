import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { homepageContent } from "@/content/homepage";

export function FooterSection() {
  return (
    <footer className="overflow-hidden bg-[var(--color-ink)] py-10 text-white md:min-h-[295px] md:py-[2.8125rem]">
      <Container className="space-y-12 md:space-y-[4.25rem]">
        <Reveal className="flex flex-col gap-4 text-lg leading-[1.23] tracking-[-0.015em] text-white/75 md:flex-row md:flex-wrap md:gap-20 md:text-[1.625rem]">
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
            className="font-display footer-fade-text whitespace-nowrap tracking-[0.01em]"
            style={{ fontSize: "min(12.59vw, 11.33rem)", lineHeight: "1" }}
          >
            {homepageContent.footer.marquee}
          </p>
        </Reveal>
      </Container>
    </footer>
  );
}
