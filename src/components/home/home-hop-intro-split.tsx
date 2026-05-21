import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { homeHopIntroSplit } from "@/data/home-content";
import { Container } from "@/components/ui/container";

/**
 * Homepage intro — image-led band with minimal copy (full story on /about).
 */
export function HomeHopIntroSplit() {
  const { sectionLabel, headline, paragraphs, imageSrc, imageAlt, cta } = homeHopIntroSplit;

  return (
    <section
      id="intro-split"
      className="scroll-mt-28 border-t border-mm-graphite/10 bg-mm-cream py-[clamp(3.25rem,8vw,5.5rem)] text-mm-graphite lg:scroll-mt-32"
      aria-labelledby="home-intro-split-heading"
    >
      <Container className="grid items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-14 lg:px-10">
        <div className="relative order-1 min-h-[260px] w-full overflow-hidden rounded-2xl border border-mm-graphite/[0.08] bg-mm-white shadow-[0_28px_70px_-40px_rgba(0,0,0,0.28)] ring-1 ring-mm-graphite/[0.05] sm:min-h-[320px] lg:order-1 lg:min-h-[min(52vh,520px)] lg:rounded-3xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
            priority
          />
        </div>

        <div className="order-2 min-w-0 lg:order-2 lg:py-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-gold">{sectionLabel}</p>
          <h2
            id="home-intro-split-heading"
            className="mt-4 whitespace-pre-line font-display text-[clamp(1.65rem,3.4vw,2.45rem)] font-semibold uppercase leading-[1.08] tracking-tight text-mm-graphite"
          >
            {headline}
          </h2>
          <div className="mt-6 space-y-4 font-editorial text-[0.9375rem] leading-[1.65] text-mm-graphite/75 md:text-[1.02rem] md:leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Link
            href={cta.href}
            className="group/intro mt-8 inline-flex w-fit items-center gap-3 border-b border-mm-graphite/25 pb-1 text-[10px] font-semibold uppercase tracking-[0.34em] text-mm-graphite transition hover:border-mm-gold hover:text-mm-gold"
          >
            {cta.label}
            <HiArrowRight className="h-4 w-4 transition group-hover/intro:translate-x-1" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
