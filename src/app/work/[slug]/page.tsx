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
          className="py-5 sm:py-6 md:py-8 lg:py-[2.625rem]"
          worksHref="/#featured-projects"
          experiencesHref="/#experience"
        />
      </header>

      <section className="layout-container flex flex-col gap-8 pt-6 pb-0 sm:pt-8 md:gap-10 md:pt-10 md:pb-0 lg:gap-[3.75rem]">
        <h1 className="font-display text-[clamp(3.75rem,11vw,6rem)] leading-[0.96] tracking-[0]">
          {caseStudy.title}
        </h1>
      </section>

      <section className="layout-container flex flex-col gap-8 py-6 sm:py-8 md:gap-10">
        <div className="flex flex-col gap-6 md:gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-base leading-[1.44] tracking-[0.18px] text-[var(--color-ink-muted)] md:text-[18px]">
              {caseStudy.overviewLabel}
            </p>
            <p className="max-w-[44rem] text-[18px] font-semibold leading-[1.35] tracking-[-0.02em] text-[var(--color-ink-soft)] sm:text-[20px] md:text-[22px] md:leading-[1.25] md:tracking-[-0.396px]">
              {caseStudy.overviewText}
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="flex flex-wrap gap-x-10 gap-y-5 md:gap-x-[3.75rem]">
              <div className="flex min-w-[4.5rem] flex-col gap-1">
                <p className="text-base leading-[1.44] tracking-[0.18px] text-[var(--color-ink-muted)] md:text-[18px]">
                  Platform
                </p>
                <p className="text-[18px] font-semibold leading-[1.25] tracking-[-0.02em] text-[var(--color-ink-soft)] sm:text-[20px] md:text-[22px] md:tracking-[-0.396px]">
                  {caseStudy.platform}
                </p>
              </div>

              <div className="flex min-w-[4.5rem] flex-col gap-1">
                <p className="text-base leading-[1.44] tracking-[0.18px] text-[var(--color-ink-muted)] md:text-[18px]">
                  Year
                </p>
                <p className="text-[18px] font-semibold leading-[1.25] tracking-[-0.02em] text-[var(--color-ink-soft)] sm:text-[20px] md:text-[22px] md:tracking-[-0.396px]">
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
            <div className="relative h-[16.5rem] w-full overflow-hidden rounded-[11px] bg-[#f3f3f3] sm:h-[24rem] md:h-[34rem] lg:h-[38rem]">
              <Image
                src={caseStudy.heroImage}
                alt={caseStudy.heroImageAlt ?? caseStudy.title}
                fill
                sizes="(min-width: 1440px) 1320px, (min-width: 1024px) calc(100vw - 120px), 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="h-[16.5rem] w-full overflow-hidden rounded-[11px] bg-[#f3f3f3] sm:h-[24rem] md:h-[34rem] lg:h-[38rem]" />
          )}
        </div>
      </section>

      <section className="layout-container flex flex-col gap-8 py-8 md:gap-10 md:py-10 lg:flex-row lg:items-start lg:gap-[3.75rem] lg:py-[3.75rem]">
        <aside className="lg:sticky lg:top-8 lg:w-[15rem] lg:shrink-0">
          <CaseStudySidebar
            summaryLabel={caseStudy.sidebar.summaryLabel}
            showcaseLinkLabel={caseStudy.sidebar.showcaseLinkLabel}
            items={caseStudy.sidebar.items}
            liveProjectUrl={caseStudy.liveProjectUrl}
          />
        </aside>

        <div className="min-w-0 flex-1 space-y-12 md:space-y-16 lg:space-y-[5.1875rem]">
          {caseStudy.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28 space-y-8 md:space-y-10">
              <div className="max-w-[48rem] space-y-5 md:space-y-[1.4375rem]">
                <h2 className="text-[30px] font-semibold leading-[1.02] sm:text-[34px] md:text-[40px]">
                  {section.title}
                </h2>
                <div className="space-y-3 text-[15px] leading-[1.6] tracking-[0.12px] text-[var(--color-ink-soft)] sm:text-base md:text-[18px] md:leading-[1.44] md:tracking-[0.18px]">
                  {section.body.map((paragraph, index) => (
                    <p key={`${section.id}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {section.layout === "single-image" && section.images?.[0] && (
                <div className="space-y-4">
                  <div className="relative min-h-[14rem] w-full overflow-hidden rounded-[7px] bg-[#f3f3f3] sm:min-h-[18rem] md:min-h-[24rem] lg:min-h-[28.25rem]">
                    <Image
                      src={section.images[0]}
                      alt={section.imageCaptions?.[0] ?? section.title}
                      fill
                      sizes="(min-width: 1440px) 1052px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  {section.imageCaptions?.[0] && (
                    <p className="text-center text-[14px] leading-[1.5] tracking-[0.12px] text-[var(--color-ink-soft)] sm:text-base md:text-[18px] md:leading-[1.44] md:tracking-[0.18px]">
                      {section.imageCaptions[0]}
                    </p>
                  )}
                </div>
              )}

              {section.layout === "double-image" && section.images?.length && (
                <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:gap-10">
                  {section.images.map((image, imageIndex) => (
                    <div key={`${section.id}-${imageIndex}`} className="space-y-4">
                      <div className="relative aspect-[1.02/1] overflow-hidden rounded-[8px] bg-[#f3f3f3] md:aspect-[506/548]">
                        <Image
                          src={image}
                          alt={section.imageCaptions?.[imageIndex] ?? `${section.title} ${imageIndex + 1}`}
                          fill
                          sizes="(min-width: 1440px) 506px, (min-width: 768px) calc((100vw - 220px) / 2), 100vw"
                          className="object-cover"
                        />
                      </div>
                      {section.imageCaptions?.[imageIndex] && (
                        <p className="text-center text-[14px] leading-[1.5] tracking-[0.12px] text-[var(--color-ink-soft)] sm:text-base md:text-[18px] md:leading-[1.44] md:tracking-[0.18px]">
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
