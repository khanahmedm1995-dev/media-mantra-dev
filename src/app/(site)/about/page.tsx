import Link from "next/link";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { FrameworkSection } from "@/components/home/framework-section";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  aboutClosing,
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

export default function AboutPage() {
  return (
    <main id="main-content" className="flex-1 bg-mm-graphite text-mm-cream">
      <section className="relative overflow-hidden pt-12 lg:pt-16">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-[18%] top-0 h-[480px] w-[480px] rounded-full bg-mm-gold/10 blur-[120px]" />
        </div>
        <Container className="relative pb-16 lg:pb-24">
          <h1 className="max-w-4xl font-display text-[clamp(2.35rem,4.8vw,3.95rem)] font-semibold leading-[1.05] tracking-tight text-mm-cream">
            Everyone Claims to Be Integrated.
            <br />
            Very Few Actually Are.
          </h1>
          <div className="mt-10 max-w-3xl border-l border-mm-gold/40 pl-6 font-editorial text-[1.0625rem] leading-[1.85] text-mm-light md:text-[1.125rem] lg:mt-14">
            {aboutHeroIntro.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mm-white py-20 text-mm-graphite lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
          <div className="relative aspect-[5/6] overflow-hidden rounded-2xl border border-mm-graphite/[0.08] lg:aspect-auto lg:min-h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1100&q=80"
              alt="Media Mantra Global team collaboration"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw,45vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mm-graphite/70 via-mm-graphite/15 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-display text-lg text-mm-cream md:text-xl">
                Integrated communications — calibrated for prestige, scrutiny, and speed across three distinct markets.
              </p>
            </div>
          </div>

          <div className="max-w-xl space-y-6 font-editorial text-[1.05rem] leading-[1.85] text-mm-graphite/82">
            {aboutRecognition.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            {aboutClosing.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            <p className="font-display text-2xl font-semibold tracking-tight text-mm-brand-navy md:text-[1.65rem]">
              {aboutFoundersPrompt.line}{" "}
              <span className="text-mm-graphite">{aboutFoundersPrompt.highlight}</span>
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-mm-cream/[0.08] bg-mm-graphite py-20 lg:py-28">
        <Container>
          <h2 className="max-w-3xl font-display text-[clamp(1.75rem,3.4vw,2.65rem)] font-semibold uppercase leading-tight tracking-[0.02em]">
            Meet the youngest independent founders
          </h2>

          <div className="mt-16 grid gap-12 lg:gap-16">
            <article className="grid gap-10 overflow-hidden rounded-2xl border border-mm-cream/[0.08] lg:grid-cols-[minmax(0,340px)_1fr]">
              <div className="relative h-72 lg:h-auto lg:min-h-[420px]">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
                  alt="Udit Pathak — Founder & Director, Media Mantra Global"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw,340px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-mm-graphite/55 to-transparent lg:bg-gradient-to-l" />
              </div>
              <div className="p-8 pb-10 pt-8 lg:p-12">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-display text-2xl font-semibold md:text-3xl">Udit Pathak</h3>
                </div>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-mm-light">Founder &amp; Director</p>
                <div className="mt-8 space-y-5 font-editorial text-mm-light/[0.94] lg:text-[1.0625rem] lg:leading-[1.85]">
                  {aboutUdit.map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                </div>
                <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-cream/70">Read more</p>
              </div>
            </article>

            <article className="grid gap-10 overflow-hidden rounded-2xl border border-mm-cream/[0.08] lg:grid-cols-[1fr_minmax(0,340px)]">
              <div className="p-8 pb-10 pt-8 lg:p-12">
                <h3 className="font-display text-2xl font-semibold md:text-3xl">Puja Pathak</h3>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-mm-light">Founder &amp; Director</p>
                <div className="mt-8 space-y-5 font-editorial text-mm-light/[0.94] lg:text-[1.0625rem] lg:leading-[1.85]">
                  {aboutPuja.map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                </div>
                <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-cream/70">Read more</p>
              </div>
              <div className="relative h-72 min-h-[280px] lg:h-auto lg:min-h-[460px]">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
                  alt="Puja Pathak — Founder & Director, Media Mantra Global"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw,340px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-mm-graphite/45 to-transparent" />
              </div>
            </article>
          </div>
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
