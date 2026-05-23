import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { homeExpertiseHub } from "@/data/home-content";
import { Container } from "@/components/ui/container";

/**
 * First band under video hero — deck: white canvas, headline + visual left, story + CTA right.
 */
export function HomeIntroExpertiseSection() {
  const { label, headline, intro, follow, cta, imageSrc, imageAlt } = homeExpertiseHub;

  return (
    <section id="expertise" className="scroll-mt-28 bg-mm-white py-16 text-mm-graphite lg:scroll-mt-32 lg:py-24" aria-labelledby="home-intro-expertise-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
          <div className="flex flex-col gap-10">
            <h2 id="home-intro-expertise-heading" className="mm-headline-brand-blue max-w-xl font-display text-[clamp(1.85rem,3.6vw,3rem)] font-semibold uppercase leading-[1.08] tracking-[0.06em]">
              {label}
            </h2>
            <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-mm-graphite/10 bg-mm-graphite/[0.04] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.25)]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 44vw"
                priority={false}
              />
            </figure>
          </div>

          <div className="space-y-6 self-center font-editorial text-base leading-relaxed text-mm-graphite/85 md:text-[17px]">
            <p className="font-medium text-mm-graphite">{headline}</p>
            <p>{intro}</p>
            <p>{follow}</p>
            <Link
              href={cta.href}
              className="group mt-2 inline-flex items-center gap-2 border-b border-mm-graphite/35 pb-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-mm-graphite transition hover:border-mm-gold hover:text-mm-graphite"
            >
              {cta.label}
              <HiArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
