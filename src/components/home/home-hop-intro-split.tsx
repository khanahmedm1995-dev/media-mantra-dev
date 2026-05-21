import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { homeHopIntroSplit } from "@/data/home-content";
import { Container } from "@/components/ui/container";

/** Section 2 — editorial split under video banner */
export function HomeHopIntroSplit() {
  const { headline, paragraphs, cta } = homeHopIntroSplit;

  return (
    <section id="intro-split" className="mm-hop-grid-bg scroll-mt-28 py-24 text-mm-cream lg:scroll-mt-32 lg:py-[clamp(6rem,18vw,10rem)]">
      <Container className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20 lg:px-12">
        <div>
          <h2 className="whitespace-pre-line font-display text-[clamp(1.85rem,4.5vw,3rem)] font-semibold uppercase leading-[1.08] tracking-tight text-mm-cream">
            {headline}
          </h2>
        </div>
        <div className="flex flex-col gap-8 border-t border-mm-cream/[0.12] pt-10 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-6">
          <div className="space-y-6 font-editorial text-base leading-[1.85] text-mm-cream/82 md:text-[1.0625rem]">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Link
            href={cta.href}
            className="group inline-flex w-fit items-center gap-3 border-b border-mm-cream/40 pb-1 text-[10px] font-semibold uppercase tracking-[0.34em] text-mm-cream transition hover:border-mm-gold hover:text-mm-gold"
          >
            {cta.label}
            <HiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
