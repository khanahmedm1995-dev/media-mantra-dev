import Link from "next/link";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { FrameworkSection } from "@/components/home/framework-section";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  aboutClosing,
  aboutFounderImages,
  aboutFoundersPrompt,
  aboutHeroIntro,
  aboutPuja,
  aboutRecognition,
  aboutUdit,
} from "@/data/about-content";

export const metadata = createMetadata({
  title: "About Media Mantra Global",
  description:
    "Founded in 2012 — integrated PR, digital, content, and influence across India, UAE, and Singapore. Founder-led, award-winning, built for what's next.",
  pathname: "/about",
});

const PREVIEW_PARAS = 2;

/** Deck: biography photo on top of each founder block + collapsible “Read more”; Puja precedes Udit. */
function FounderStackedBio({
  name,
  role,
  paragraphs,
  imageSrc,
  imageAlt,
}: {
  name: string;
  role: string;
  paragraphs: readonly string[];
  imageSrc: string;
  imageAlt: string;
}) {
  const lead = paragraphs.slice(0, PREVIEW_PARAS);
  const extra = paragraphs.slice(PREVIEW_PARAS);

  return (
    <article className="overflow-hidden rounded-[1.65rem] border border-mm-cream/[0.1] bg-mm-graphite/25">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-mm-graphite/40 sm:aspect-[10/13] lg:aspect-auto lg:h-[min(460px,48vw)] lg:max-h-[520px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-top"
          sizes="(max-width:1024px) 100vw, 70vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mm-graphite/90 via-mm-graphite/15 to-transparent" />
      </div>
      <div className="p-8 pb-10 pt-10 lg:p-12">
        <h3 className="font-display text-2xl font-semibold md:text-3xl">{name}</h3>
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-mm-light">{role}</p>
        <div className="mt-8 space-y-5 font-editorial text-mm-light/[0.94] lg:text-[1.0625rem] lg:leading-[1.85]">
          {lead.map((p) => (
            <p key={p.slice(0, 52)}>{p}</p>
          ))}
        </div>
        {extra.length > 0 ? (
          <details className="group mt-8 border-t border-mm-cream/10 pt-6">
            <summary className="cursor-pointer list-none text-[11px] font-semibold uppercase tracking-[0.3em] text-mm-gold marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="inline-flex items-center gap-2 border-b border-mm-gold/40 pb-1 transition group-open:border-mm-gold">
                Read more
                <HiArrowUpRight className="h-4 w-4 transition group-open:rotate-45" aria-hidden />
              </span>
            </summary>
            <div className="mt-6 space-y-5 font-editorial text-mm-light/[0.94] lg:text-[1.0625rem] lg:leading-[1.85]">
              {extra.map((p) => (
                <p key={p.slice(0, 52)}>{p}</p>
              ))}
            </div>
          </details>
        ) : null}
      </div>
    </article>
  );
}

export default function AboutPage() {
  return (
    <main id="main-content" className="flex-1 bg-mm-graphite text-mm-cream">
      <section className="relative isolate min-h-[min(92svh,720px)] overflow-hidden lg:min-h-[min(88vh,760px)]">
        <Image
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          className="object-cover brightness-[0.45]"
          sizes="100vw"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mm-graphite/93 via-mm-graphite/82 to-mm-black/76" />

        <Container className="relative flex min-h-[min(92svh,720px)] flex-col justify-end pb-20 pt-[6.75rem] lg:min-h-[min(88vh,760px)] lg:justify-center lg:pb-28 lg:pt-28">
          <div className="max-w-[42rem]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-mm-cream/75">Integrated communications</p>
            <h1 className="mt-6 font-display text-[clamp(2.05rem,4.6vw,3.85rem)] font-semibold leading-[1.06] tracking-tight text-mm-white">
              A house built for prestige, scrutiny, and global ambition.
              <span className="block text-mm-gold">Storytellers with systems.</span>
            </h1>
            <div className="mt-10 max-w-2xl space-y-4 border-l border-mm-gold/40 pl-6 font-editorial text-[1.0625rem] leading-[1.82] text-mm-light md:text-[1.125rem]">
              <p>Aggressive · Bold · Credible — founder-led practitioners across India, UAE, and Singapore.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative z-[1] -mt-[2px] border-t border-mm-cream/10 bg-mm-white py-20 text-mm-graphite lg:py-[5.75rem]">
        <Container className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
          <div className="space-y-6 font-editorial text-[1.05rem] leading-[1.85] text-mm-graphite/82">
            <h2 className="font-display text-[clamp(1.95rem,3vw,2.45rem)] font-semibold uppercase leading-[1.14] tracking-tight text-mm-graphite">
              Everyone claims to be integrated.
              <span className="mt-5 block normal-case tracking-normal text-mm-graphite">Very few actually are.</span>
            </h2>
          </div>
          <div className="relative aspect-[5/6] overflow-hidden rounded-2xl border border-mm-graphite/[0.08] lg:aspect-auto lg:min-h-[480px]">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1100&q=80"
              alt="Team collaborating"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw,45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mm-graphite/75 via-mm-graphite/12 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-display text-lg text-mm-cream md:text-xl">
                Media Mantra Global — calibrated for prestige, scrutiny, and speed across three distinct markets.
              </p>
            </div>
          </div>
        </Container>

        <Container className="mt-14 max-w-3xl space-y-5 font-editorial text-[1.05rem] leading-[1.85] text-mm-graphite/82 lg:mt-20">
          {aboutHeroIntro.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          {aboutRecognition.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          {aboutClosing.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          <p className="font-display text-2xl font-semibold tracking-tight text-mm-brand-navy md:text-[1.65rem]">
            {aboutFoundersPrompt.line} <span className="text-mm-graphite">{aboutFoundersPrompt.highlight}</span>
          </p>
        </Container>
      </section>

      <section className="scroll-mt-24 border-y border-mm-cream/[0.08] bg-mm-graphite py-20 lg:scroll-mt-32 lg:py-28">
        <Container className="max-w-[860px] text-center lg:mx-auto lg:max-w-3xl">
          <h2 className="font-display text-[clamp(1.95rem,3.3vw,2.75rem)] font-semibold uppercase leading-tight tracking-[0.04em] text-mm-cream">
            Meet the youngest independent founders
          </h2>
        </Container>

        <Container className="mt-14 max-w-[900px] space-y-16 lg:mx-auto lg:max-w-[960px]">
          <FounderStackedBio
            name="Puja Pathak"
            role="Founder & Director"
            paragraphs={aboutPuja}
            imageSrc={aboutFounderImages.puja}
            imageAlt="Puja Pathak — Founder & Director, Media Mantra Global"
          />

          <FounderStackedBio
            name="Udit Pathak"
            role="Founder & Director"
            paragraphs={aboutUdit}
            imageSrc={aboutFounderImages.udit}
            imageAlt="Udit Pathak — Founder & Director, Media Mantra Global"
          />
        </Container>
      </section>

      <FrameworkSection />

      <section className="border-y border-mm-cream/10 bg-mm-graphite/80 py-8">
        <Container className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-mm-light">Work</p>
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 border-b border-mm-gold/50 pb-0.5 text-[11px] font-semibold uppercase tracking-[0.32em] text-mm-cream transition hover:border-mm-gold hover:text-mm-gold"
          >
            See our work
            <HiArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Container>
      </section>
    </main>
  );
}
