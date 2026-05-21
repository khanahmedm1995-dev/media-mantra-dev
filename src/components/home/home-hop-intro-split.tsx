import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { homeHopIntroSplit } from "@/data/home-content";
import { Container } from "@/components/ui/container";

/**
 * Homepage intro — explicit “Intro” band + image so it reads clearly after the video hero.
 * Full editorial story lives on /about; this strip stays short and visual.
 */
export function HomeHopIntroSplit() {
  const { sectionLabel, headline, paragraphs, imageSrc, imageAlt, cta } = homeHopIntroSplit;

  return (
    <section
      id="intro-split"
      className="scroll-mt-28 border-t border-mm-graphite/10 bg-mm-cream py-[clamp(4.5rem,10vw,7rem)] text-mm-graphite lg:scroll-mt-32"
      aria-labelledby="home-intro-split-heading"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:px-10">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-gold">{sectionLabel}</p>
          <h2
            id="home-intro-split-heading"
            className="mt-5 whitespace-pre-line font-display text-[clamp(1.75rem,3.6vw,2.65rem)] font-semibold uppercase leading-[1.08] tracking-tight text-mm-graphite"
          >
            {headline}
          </h2>
          <div className="mt-8 space-y-5 font-editorial text-[1.0625rem] leading-[1.8] text-mm-graphite/78 md:text-lg">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Link
            href={cta.href}
            className="group/intro mt-10 inline-flex w-fit items-center gap-3 border-b border-mm-graphite/25 pb-1 text-[10px] font-semibold uppercase tracking-[0.34em] text-mm-graphite transition hover:border-mm-gold hover:text-mm-gold"
          >
            {cta.label}
            <HiArrowRight className="h-4 w-4 transition group-hover/intro:translate-x-1" aria-hidden />
          </Link>
        </div>

        <div className="relative min-h-[220px] w-full overflow-hidden rounded-2xl border border-mm-graphite/[0.08] bg-mm-white shadow-[0_28px_70px_-40px_rgba(0,0,0,0.3)] ring-1 ring-mm-graphite/[0.05] sm:min-h-[280px] lg:aspect-[4/3] lg:min-h-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 42vw"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
