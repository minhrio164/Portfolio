import { ExperienceSection } from "@/components/home/experience-section";
import { FeaturedProjectsSection } from "@/components/home/featured-projects-section";
import { FooterSection } from "@/components/home/footer-section";
import { HeroSection } from "@/components/home/hero-section";

export default function HomePage() {
  return (
    <main className="bg-[var(--color-surface)] text-[var(--color-ink)]">
      <HeroSection />
      <FeaturedProjectsSection />
      <ExperienceSection />
      <FooterSection />
    </main>
  );
}
