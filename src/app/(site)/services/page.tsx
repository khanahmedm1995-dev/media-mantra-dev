import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { HiArrowUpRight } from "react-icons/hi2";

export const metadata = createMetadata({
  title: "Services",
  pathname: "/services",
  description:
    "Integrated PR, founder branding, reputation, SEO, influencer, events, and content systems — engineered globally.",
});

export default function ServicesPage() {
  return (
    <main id="main-content" className="flex-1 bg-mm-black pb-24 pt-6 text-mm-cream lg:pb-32 lg:pt-8">
      <Container>
        <SectionLabel>Services</SectionLabel>
        <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.75rem,5vw,4.5rem)] font-semibold leading-[1.02]">
          Integrated communications, built for India, the UAE &amp; Singapore.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-mm-light">
          Eight practice areas — from strategic PR and founder reputation to SEO, influencer programmes, content, and
          global events — designed to compound visibility and credibility.
        </p>
      </Container>

      <Container className="mt-16 space-y-6">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group relative block overflow-hidden rounded-[2rem] border border-mm-white/10 bg-mm-white/[0.02] px-10 py-12 transition hover:border-mm-gold/35"
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-70 transition duration-700 group-hover:opacity-100 ${s.heroGradient}`}
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-mm-cream/70">
                  {String(s.index).padStart(2, "0")}
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">{s.title}</h2>
                <p className="mt-4 max-w-xl text-mm-cream/90">{s.tagline}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  {s.pillars.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-mm-cream/20 bg-mm-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-mm-cream/90 backdrop-blur"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-mm-cream">
                Immersive view <HiArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>
        ))}
      </Container>
    </main>
  );
}
