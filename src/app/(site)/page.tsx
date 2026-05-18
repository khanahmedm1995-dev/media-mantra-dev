import { HomeHeroSection } from "@/components/home/home-hero-section";
import { ClientsMarqueeSection } from "@/components/home/clients-marquee-section";
import { ProvenResultsSection } from "@/components/home/proven-results-section";
import { FrameworkSection } from "@/components/home/framework-section";
import { CaseStudiesPreviewSection } from "@/components/home/case-studies-preview-section";
import { InsightsPreviewSection } from "@/components/home/insights-preview-section";
import { GlobalCtaSection } from "@/components/home/global-cta-section";

export default function HomePage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col bg-mm-black">
      <HomeHeroSection />
      <ClientsMarqueeSection />
      <ProvenResultsSection dense />
      <FrameworkSection condensed />
      <CaseStudiesPreviewSection featuredCount={2} />
      <InsightsPreviewSection variant="ribbon" />
      <GlobalCtaSection />
    </main>
  );
}
