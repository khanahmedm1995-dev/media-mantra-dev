import { HomeHeroSection } from "@/components/home/home-hero-section";
import { HomeHopExpertiseSplit } from "@/components/home/home-hop-expertise-split";
import { HomeHopIntroSplit } from "@/components/home/home-hop-intro-split";
import { HomeLocationsBand } from "@/components/home/home-locations-band";
import { ClientsMarqueeSection } from "@/components/home/clients-marquee-section";
import { ProvenResultsSection } from "@/components/home/proven-results-section";
import { CaseStudiesPreviewSection } from "@/components/home/case-studies-preview-section";
import { HomeContactStrip } from "@/components/home/home-contact-strip";

/** Homepage — video → expertise → intro → … (no Hopscotch footer band; global `SiteFooter` still renders). */
export default function HomePage() {
  return (
    <main id="main-content" className="flex min-h-0 flex-1 flex-col bg-mm-white">
      <HomeHeroSection />
      <HomeHopExpertiseSplit />
      <HomeHopIntroSplit />
      <HomeLocationsBand />
      <ClientsMarqueeSection />
      <ProvenResultsSection dense />
      <CaseStudiesPreviewSection layout="hopscotch" featuredCount={4} />
      <HomeContactStrip />
    </main>
  );
}
