import Link from "next/link";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
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
    <main id="main-content" className="flex-1 bg-mm-black text-mm-cream">
      <section className="relative overflow-hidden pt-12 lg:pt-16">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-[18%] top-0 h-[480px] w-[480px] rounded-full bg-mm-gold/10 blur-[120px]" />
        </div>
        <Container className="relative pb-20 lg:pb-28">
          <SectionLabel>About Media Mantra</SectionLabel>
          <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.4rem,4.8vw,3.85rem)] font-semibold leading-[1.05] tracking-tight">
            Everyone Claims to Be Integrated.
            <br />
            <span className="bg-gradient-to-r from-mm-gold to-mm-cream bg-clip-text text-transparent">
              Very Few Actually Are.
            </span>
          </h1>
          <div className="mt-12 max-w-3xl space-y-7 font-editorial text-[1.0625rem] leading-[1.85] text-mm-light md:text-[1.125rem]">
            {aboutHeroIntro.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:items-start">
          <div className="relative aspect-[5/6] overflow-hidden rounded-sm lg:aspect-auto lg:min-h-[560px]">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1100&q=80"
              alt="Media Mantra Global team collaboration"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw,45vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mm-black via-mm-black/15 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-display text-lg text-mm-cream md:text-xl">
                Integrated communications — calibrated for prestige, scrutiny, and speed across three distinct markets.
              </p>
            </div>
          </div>

          <div className="max-w-xl space-y-6 font-editorial text-[1.05rem] leading-[1.85] text-mm-light">
            {aboutRecognition.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            {aboutClosing.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            <p className="font-display text-2xl font-semibold text-mm-cream">
              {aboutFoundersPrompt.line}
              <br />
              <span className="text-mm-gold">{aboutFoundersPrompt.highlight}</span>
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <SectionLabel>The founders</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(1.95rem,3.8vw,2.85rem)] font-semibold leading-tight">
            Meet the youngest independent founders
          </h2>

          <div className="mt-16 grid gap-12 lg:gap-16">
            <article className="grid gap-10 overflow-hidden rounded-sm bg-mm-white/[0.02] lg:grid-cols-[minmax(0,340px)_1fr]">
              <div className="relative h-72 lg:h-auto lg:min-h-[420px]">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
                  alt="Udit Pathak — Founder &amp; Director, Media Mantra Global"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw,340px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-mm-black/50 to-transparent lg:bg-gradient-to-l" />
              </div>
              <div className="p-8 pb-10 pt-8 lg:p-12">
                <h3 className="font-display text-2xl font-semibold md:text-3xl">Udit Pathak</h3>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-mm-gold">Founder &amp; Director</p>
                <div className="mt-8 space-y-5 font-editorial text-mm-light/[0.94] lg:text-[1.0625rem] lg:leading-[1.85]">
                  {aboutUdit.map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                </div>
              </div>
            </article>

            <article className="grid gap-10 overflow-hidden rounded-sm bg-mm-white/[0.02] lg:grid-cols-[1fr_minmax(0,340px)]">
              <div className="p-8 pb-10 pt-8 lg:p-12">
                <h3 className="font-display text-2xl font-semibold md:text-3xl">Puja Pathak</h3>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-mm-gold">Founder &amp; Director</p>
                <div className="mt-8 space-y-5 font-editorial text-mm-light/[0.94] lg:text-[1.0625rem] lg:leading-[1.85]">
                  {aboutPuja.map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                </div>
              </div>
              <div className="relative h-72 min-h-[280px] lg:h-auto lg:min-h-[460px]">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
                  alt="Puja Pathak — Founder &amp; Director, Media Mantra Global"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw,340px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-mm-black/40 to-transparent" />
              </div>
            </article>
          </div>
        </Container>
      </section>

      <FrameworkSection />

      <section className="bg-gradient-to-br from-mm-cream/8 via-mm-charcoal to-mm-charcoal py-20 lg:py-28">
        <Container className="max-w-4xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-mm-gold">Contact</p>
          <h2 className="mt-8 font-display text-3xl font-semibold md:text-4xl">Let&apos;s Build Influence Together</h2>
          <p className="mt-8 font-editorial text-lg leading-[1.9] text-mm-light">
            Your brand deserves to be known. Loudly. In the right rooms. Across the right markets. Let&apos;s figure out what
            that looks like, together.
          </p>
          <Link
            href="/contact"
            className="mt-12 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-mm-gold transition hover:text-mm-cream"
          >
            Get in Touch <HiArrowUpRight className="h-5 w-5" aria-hidden />
          </Link>
        </Container>
      </section>
    </main>
  );
}
