import { HomeHeroSection } from "@/components/home/home-hero-section";
import { HomeHopIntroSplit } from "@/components/home/home-hop-intro-split";
import { HomeLocationsBand } from "@/components/home/home-locations-band";
import { ClientsMarqueeSection } from "@/components/home/clients-marquee-section";
import { ProvenResultsSection } from "@/components/home/proven-results-section";
import { CaseStudiesPreviewSection } from "@/components/home/case-studies-preview-section";
import { HomeContactStrip } from "@/components/home/home-contact-strip";

/**
 * Homepage — Sections 1–7 content-driven flow; Section 8 footer via `SiteFooter` in shell.
 */
export default function HomePage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col bg-mm-graphite">
      <HomeHeroSection />
      <HomeHopIntroSplit />
      <HomeLocationsBand />
      <ClientsMarqueeSection />
      <ProvenResultsSection />
      <CaseStudiesPreviewSection layout="hopscotch" featuredCount={4} />
      <HomeContactStrip />
    </main>
  );
}
