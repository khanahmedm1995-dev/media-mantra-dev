import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";
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
      <section className="border-b border-mm-graphite/20 bg-mm-white px-6 py-12 text-mm-graphite sm:px-10 lg:px-12 lg:py-14">
        <Container className="max-w-[1400px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-graphite/45">Capabilities</p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.35rem,4.8vw,3.85rem)] font-semibold uppercase leading-[1.02] tracking-[0.02em] text-mm-brand-navy">
            Integrated communications.
          </h1>
        </Container>
      </section>

      <Container className="mt-14 max-w-[1400px] space-y-5">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group flex items-center justify-between gap-8 border border-mm-white/12 bg-mm-white/[0.03] px-8 py-9 transition hover:border-mm-gold/35 hover:bg-mm-white/[0.05] lg:px-12 lg:py-10"
          >
            <div className="flex min-w-0 items-baseline gap-5 lg:gap-8">
              <span className="shrink-0 font-display text-xs font-semibold tabular-nums text-mm-gold/90">{String(s.index).padStart(2, "0")}</span>
              <h2 className="min-w-0 font-display text-[clamp(1.2rem,2.8vw,1.95rem)] font-semibold uppercase leading-snug tracking-[0.04em]">
                {s.title}
              </h2>
            </div>
            <HiArrowUpRight className="h-5 w-5 shrink-0 text-mm-light transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-mm-gold" />
          </Link>
        ))}
      </Container>
    </main>
  );
}
