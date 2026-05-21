import { HomeHeroSection } from "@/components/home/home-hero-section";
import { HomeExpertiseHubSection } from "@/components/home/home-expertise-hub-section";
import { ClientsMarqueeSection } from "@/components/home/clients-marquee-section";
import { HomeNetworkStatsSection } from "@/components/home/home-network-stats-section";
import { HomePeopleCtaBand } from "@/components/home/home-people-cta-band";
import { HomeInsightsRibbonSection } from "@/components/home/home-insights-ribbon-section";
import { CaseStudiesPreviewSection } from "@/components/home/case-studies-preview-section";
import { HomeContactStrip } from "@/components/home/home-contact-strip";

/** Homepage structure aligned with editorial comms benchmarks (Hopscotch-style pacing + bands). */
export default function HomePage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col bg-mm-charcoal">
      <HomeHeroSection />
      <HomeExpertiseHubSection />
      <ClientsMarqueeSection />
      <HomeNetworkStatsSection />
      <HomePeopleCtaBand />
      <HomeInsightsRibbonSection />
      <CaseStudiesPreviewSection layout="hopscotch" featuredCount={4} />
      <HomeContactStrip />
    </main>
  );
}
