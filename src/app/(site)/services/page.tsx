import Image from "next/image";
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

/** Deck reference: vertical image cards — number, title, short line, Explore (no subline chips / pills on index). */
export default function ServicesPage() {
  return (
    <main id="main-content" className="flex-1 bg-mm-black pb-24 pt-6 text-mm-cream lg:pb-32 lg:pt-8">
      <section className="border-b border-mm-graphite/20 bg-mm-white px-6 py-12 text-mm-graphite sm:px-10 lg:px-12 lg:py-14">
        <Container className="max-w-[1400px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-graphite/45">Our core services</p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.25rem,4.8vw,3.5rem)] font-semibold uppercase leading-[1.02] tracking-[0.02em] mm-headline-brand-blue">
            Eight specialized practices. One integrated team.
          </h1>
          <p className="mt-5 max-w-2xl font-editorial text-base text-mm-graphite/72">
            Results you can measure — pick a capability or scroll the full catalogue.
          </p>
        </Container>
      </section>

      <Container className="mt-14 max-w-[1400px]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-3xl border border-mm-white/[0.08] bg-mm-graphite/30 sm:min-h-[460px]"
            >
              <div className="absolute inset-0">
                <Image
                  src={s.heroImage}
                  alt=""
                  fill
                  className="object-cover transition duration-[1.1s] ease-out group-hover:scale-[1.04]"
                  sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${s.heroGradient} opacity-65 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-mm-black via-mm-black/25 to-transparent" />
              </div>
              <div className="relative mt-auto flex flex-col p-8 pt-24">
                <span className="font-display text-xs font-semibold tabular-nums text-mm-gold/90">{String(s.index).padStart(2, "0")}</span>
                <h2 className="mt-3 font-display text-lg font-semibold uppercase leading-snug tracking-[0.06em] text-mm-cream">
                  {s.title}
                </h2>
                <p className="mt-4 line-clamp-3 font-editorial text-sm leading-relaxed text-mm-light/92">{s.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-mm-gold">
                  Explore
                  <HiArrowUpRight className="h-4 w-4 opacity-85 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
