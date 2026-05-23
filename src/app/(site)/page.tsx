import { HomeHeroSection } from "@/components/home/home-hero-section";
import { HomeIntroExpertiseSection } from "@/components/home/home-intro-expertise-section";
import { HomeHopIntroSplit } from "@/components/home/home-hop-intro-split";
import { HomeLocationsBand } from "@/components/home/home-locations-band";
import { ClientsMarqueeSection } from "@/components/home/clients-marquee-section";
import { ProvenResultsSection } from "@/components/home/proven-results-section";
import { CaseStudiesPreviewSection } from "@/components/home/case-studies-preview-section";
import { HomeContactStrip } from "@/components/home/home-contact-strip";

/** Homepage — video → expertise → intro → … (no Hopscotch footer band; global `SiteFooter` still renders). */
export default function HomePage() {
  return (
    <main id="main-content" className="flex min-h-[100svh] flex-1 flex-col bg-mm-white">
      <HomeHeroSection />
      <HomeIntroExpertiseSection />
      <HomeHopIntroSplit />
      <HomeLocationsBand />
      <ClientsMarqueeSection />
      <ProvenResultsSection dense />
      <CaseStudiesPreviewSection layout="hopscotch" featuredCount={4} />
      <HomeContactStrip />
    </main>
  );
}
