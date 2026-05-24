import { HomeHeroSection } from "@/components/home/home-hero-section";
import { HomeIntroExpertiseSection } from "@/components/home/home-intro-expertise-section";
import { ClientsMarqueeSection } from "@/components/home/clients-marquee-section";
import { AnimatedMetricsSection } from "@/components/home/animated-metrics-section";
import { CaseStudiesPreviewSection } from "@/components/home/case-studies-preview-section";
import { HomeSeeWorkStrip } from "@/components/home/home-see-work-strip";

/** Homepage — deck flow: video → intro (+ image) → clients → metrics → work preview → thin case-studies strip (no duplicate intro / locations band). */
export default function HomePage() {
  return (
    <main id="main-content" className="flex min-h-[100svh] flex-1 flex-col bg-mm-white">
      <HomeHeroSection />
      <HomeIntroExpertiseSection />
      <ClientsMarqueeSection />
      <AnimatedMetricsSection dense />
      <CaseStudiesPreviewSection layout="hopscotch" featuredCount={4} />
      <HomeSeeWorkStrip />
    </main>
  );
}
