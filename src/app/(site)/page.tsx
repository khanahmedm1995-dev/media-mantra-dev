import { HomeHeroSection } from "@/components/home/home-hero-section";
import { HomeIntroSection } from "@/components/home/home-intro-section";
import { HomeLocationsBand } from "@/components/home/home-locations-band";
import { ClientsMarqueeSection } from "@/components/home/clients-marquee-section";
import { ProvenResultsSection } from "@/components/home/proven-results-section";
import { CaseStudiesPreviewSection } from "@/components/home/case-studies-preview-section";
import { HomeContactStrip } from "@/components/home/home-contact-strip";

/**
 * Homepage: video banner → intro → locations → clients → metrics → work → contact (client framework).
 * Framework detail lives on About; blogs listing is `/blog` only.
 */
export default function HomePage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col bg-mm-charcoal">
      <HomeHeroSection />
      <HomeIntroSection />
      <HomeLocationsBand />
      <ClientsMarqueeSection />
      <ProvenResultsSection />
      <CaseStudiesPreviewSection layout="hopscotch" featuredCount={4} />
      <HomeContactStrip />
    </main>
  );
}
