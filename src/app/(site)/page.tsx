import { HomeHeroSection } from "@/components/home/home-hero-section";
import { HomeLocationsBand } from "@/components/home/home-locations-band";
import { ClientsMarqueeSection } from "@/components/home/clients-marquee-section";
import { CaseStudiesPreviewSection } from "@/components/home/case-studies-preview-section";
import { GlobalCtaSection } from "@/components/home/global-cta-section";

export default function HomePage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col bg-mm-charcoal">
      <HomeHeroSection />
      <HomeLocationsBand />
      <ClientsMarqueeSection />
      <CaseStudiesPreviewSection featuredCount={2} />
      <GlobalCtaSection compact />
    </main>
  );
}
