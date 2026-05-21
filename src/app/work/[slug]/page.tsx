import Image from "next/image";
import { notFound } from "next/navigation";

import { CaseStudySidebar } from "@/components/case-study/case-study-sidebar";
import { FooterSection } from "@/components/home/footer-section";
import { getCaseStudyBySlug } from "@/content/case-studies";
import { homepageContent } from "@/content/homepage";
import { LiquidMetalLinkButton } from "@/components/ui/liquid-metal-link-button";
import { SiteHeader } from "@/components/ui/site-header";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="bg-[var(--color-surface)] text-[var(--color-ink)]">
      <header className="border-b border-[#dadada]">
        <SiteHeader
          brand={homepageContent.hero.brand}
          variant="light"
          className="py-[2.625rem]"
          worksHref="/#featured-projects"
          experiencesHref="/#experience"
        />
      </header>

      <section className="layout-container flex flex-col gap-[3.75rem] pt-8 pb-0 md:pt-10 md:pb-0">
        <h1 className="font-display text-[clamp(4.75rem,7.2vw,6rem)] leading-none tracking-[0]">
          {caseStudy.title}
        </h1>
      </section>

      <section className="layout-container flex flex-col gap-10 py-8 md:gap-10">
        <div className="flex flex-col gap-6 md:gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-[18px] leading-[1.44] tracking-[0.18px] text-[var(--color-ink-muted)]">
              {caseStudy.overviewLabel}
            </p>
            <p className="text-[22px] font-semibold leading-[1.25] tracking-[-0.396px] text-[var(--color-ink-soft)]">
              {caseStudy.overviewText}
            </p>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-[3.75rem]">
            <div className="flex flex-wrap gap-[3.75rem]">
              <div className="flex min-w-[4.5rem] flex-col gap-1">
                <p className="text-[18px] leading-[1.44] tracking-[0.18px] text-[var(--color-ink-muted)]">
                  Platform
                </p>
                <p className="text-[22px] font-semibold leading-[1.25] tracking-[-0.396px] text-[var(--color-ink-soft)]">
                  {caseStudy.platform}
                </p>
              </div>

              <div className="flex min-w-[4.5rem] flex-col gap-1">
                <p className="text-[18px] leading-[1.44] tracking-[0.18px] text-[var(--color-ink-muted)]">
                  Year
                </p>
                <p className="text-[22px] font-semibold leading-[1.25] tracking-[-0.396px] text-[var(--color-ink-soft)]">
                  {caseStudy.year}
                </p>
              </div>
            </div>

            <LiquidMetalLinkButton
              href={caseStudy.liveProjectUrl}
              label={caseStudy.liveProjectLabel}
            />
          </div>

          {caseStudy.heroImage ? (
            <div className="relative h-[600px] w-full overflow-hidden rounded-[11px] bg-[#f3f3f3]">
              <Image
                src={caseStudy.heroImage}
                alt={caseStudy.heroImageAlt ?? caseStudy.title}
                fill
                sizes="(min-width: 1440px) 1320px, calc(100vw - 120px)"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="h-[600px] w-full overflow-hidden rounded-[11px] bg-[#f3f3f3]" />
          )}
        </div>
      </section>

      <section className="layout-container flex flex-col gap-10 py-[3.75rem] lg:flex-row lg:items-start lg:gap-[3.75rem]">
        <aside className="lg:sticky lg:top-8 lg:w-[15rem] lg:shrink-0">
          <CaseStudySidebar
            summaryLabel={caseStudy.sidebar.summaryLabel}
            showcaseLinkLabel={caseStudy.sidebar.showcaseLinkLabel}
            items={caseStudy.sidebar.items}
            liveProjectUrl={caseStudy.liveProjectUrl}
          />
        </aside>

        <div className="min-w-0 flex-1 space-y-[5.1875rem]">
          {caseStudy.sections.map((section) => (
            <section key={section.id} id={section.id} className="space-y-10">
              <div className="space-y-[1.4375rem]">
                <h2 className="text-[40px] font-semibold leading-none">
                  {section.title}
                </h2>
                <div className="space-y-3 text-[18px] leading-[1.44] tracking-[0.18px] text-[var(--color-ink-soft)]">
                  {section.body.map((paragraph, index) => (
                    <p key={`${section.id}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {section.layout === "single-image" && section.images?.[0] && (
                <div className="space-y-4">
                  <div className="relative min-h-[22rem] w-full overflow-hidden rounded-[7px] bg-[#f3f3f3] md:min-h-[28.25rem]">
                    <Image
                      src={section.images[0]}
                      alt={section.imageCaptions?.[0] ?? section.title}
                      fill
                      sizes="(min-width: 1440px) 1052px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  {section.imageCaptions?.[0] && (
                    <p className="text-center text-[18px] leading-[1.44] tracking-[0.18px] text-[var(--color-ink-soft)]">
                      {section.imageCaptions[0]}
                    </p>
                  )}
                </div>
              )}

              {section.layout === "double-image" && section.images?.length && (
                <div className="grid gap-10 md:grid-cols-2">
                  {section.images.map((image, imageIndex) => (
                    <div key={`${section.id}-${imageIndex}`} className="space-y-4">
                      <div className="relative aspect-[506/548] overflow-hidden rounded-[8px] bg-[#f3f3f3]">
                        <Image
                          src={image}
                          alt={section.imageCaptions?.[imageIndex] ?? `${section.title} ${imageIndex + 1}`}
                          fill
                          sizes="(min-width: 1440px) 506px, (min-width: 768px) calc((100vw - 220px) / 2), 100vw"
                          className="object-cover"
                        />
                      </div>
                      {section.imageCaptions?.[imageIndex] && (
                        <p className="text-center text-[18px] leading-[1.44] tracking-[0.18px] text-[var(--color-ink-soft)]">
                          {section.imageCaptions[imageIndex]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
