import Link from "next/link";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Badge } from "@/components/ui/badge";
import { HiArrowUpRight } from "react-icons/hi2";

export const metadata = createMetadata({
  title: "About Media Mantra Global",
  description:
    "Founded in 2012 — integrated PR, digital, content, and influence across India, UAE, and Singapore. Founder-led, award-winning, built for what's next.",
  pathname: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content" className="flex-1 bg-mm-black text-mm-cream">
      <section className="relative overflow-hidden border-b border-mm-white/10 pt-32 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute -left-[18%] top-0 h-[480px] w-[480px] rounded-full bg-mm-royal/45 blur-[120px]" />
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
            <p>
              It started in 2012 with two of India&apos;s youngest independent founders who dared to be aggressive,
              bold, and credible — values that still run through everything we do. Thirteen years later, Media Mantra
              Global operates as a fully integrated communications firm across India, the UAE, and Singapore. We combine
              data-driven content strategy, 360-degree planning, digital marketing, and influencer marketing. In an
              industry being rapidly reshaped by AI, we are the influence that the communications world needs: using
              it to move faster, think sharper, and tell stories that cut through louder than ever before.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-mm-white/10 py-20 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:items-start">
          <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] border border-mm-white/10 lg:aspect-auto lg:min-h-[560px]">
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

          <div className="max-w-xl space-y-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-mm-gold">Recognition</p>
              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-mm-white/10 bg-mm-white/[0.03] p-6 backdrop-blur-sm">
                  <Badge className="text-mm-gold">2025 · BW Excel Awards</Badge>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-mm-cream">PR Agency of the Year</p>
                </div>
                <div className="rounded-2xl border border-mm-white/10 bg-mm-white/[0.03] p-6 backdrop-blur-sm">
                  <Badge className="text-mm-gold">2024 · IMAGEXX Awards by Adgully</Badge>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-mm-cream">
                    Best Independent Agency of the Year
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6 font-editorial text-[1.05rem] leading-[1.85] text-mm-light">
              <p>
                Something the entire industry recognised: when the work consistently travels across markets without
                losing its edge. That ethos is why brands return — and refer.
              </p>
              <p>
                Whether it&apos;s a disruptive startup building credibility with stakeholders, or a multinational
                sharpening brand awareness, we customise the strategy — from securing coverage in top-tier publications
                and strategic influencer marketing through to founder storytelling or social-ready film. We help brands go
                viral in crowded markets across India, the UAE, and Singapore. People keep asking why they should choose
                Media Mantra Global over anyone else.
              </p>
            </div>
            <p className="font-display text-2xl font-semibold text-mm-cream">
              Fair question.
              <br />
              <span className="text-mm-gold">Keep reading.</span>
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-mm-white/10 py-20 lg:py-28">
        <Container>
          <SectionLabel>The founders</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-display text-[clamp(1.95rem,3.8vw,2.85rem)] font-semibold leading-tight">
            Meet the youngest independent founders
          </h2>

          <div className="mt-16 grid gap-12 lg:gap-16">
            <article className="grid gap-10 overflow-hidden rounded-[2rem] border border-mm-white/10 bg-mm-white/[0.02] lg:grid-cols-[minmax(0,340px)_1fr]">
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
                  <p>
                    Some people talk about disrupting an industry. Udit Pathak went ahead and did it. As one of
                    India&apos;s youngest independent PR and communications entrepreneurs, he founded Media Mantra Global
                    with a vision clear enough that it tolerated no mediocrity.
                  </p>
                  <p>
                    With almost two decades in public relations, he began his career with the India Today Group before
                    moving through some of the industry&apos;s leading agencies in India. Along the way, he honed how
                    narratives shape perception — and how the right strategy turns visibility into value.
                  </p>
                  <p>
                    In 2012, he built an independent communications firm that delivers measurable impact. Today he leads
                    business acquisition and the broader growth trajectory with a hands-on, analytical mindset:
                    spotting gaps, creating opportunities, and keeping the business ahead of the curve. Equal parts
                    strategic and approachable, he brings clarity, energy, and direction to every engagement.
                  </p>
                  <p>
                    Over the years, he has led communications mandates for startups and global corporations alike —
                    helping brands secure visibility, credibility, and, in many cases, critical funding momentum. Under his
                    leadership, Media Mantra Global has serviced 120+ retainer clients and expanded beyond India into a true
                    cross-market consultancy.
                  </p>
                </div>
              </div>
            </article>

            <article className="grid gap-10 overflow-hidden rounded-[2rem] border border-mm-white/10 bg-mm-white/[0.02] lg:grid-cols-[1fr_minmax(0,340px)]">
              <div className="p-8 pb-10 pt-8 lg:p-12">
                <h3 className="font-display text-2xl font-semibold md:text-3xl">Puja Pathak</h3>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-mm-gold">Founder &amp; Director</p>
                <div className="mt-8 space-y-5 font-editorial text-mm-light/[0.94] lg:text-[1.0625rem] lg:leading-[1.85]">
                  <p>
                    Puja Pathak founded Media Mantra Global and defined what it would become — and she did not do it alone.
                  </p>
                  <p>
                    With 15+ years in communications, she is the strategic and operational backbone of the firm: from client
                    strategy to day-to-day operations, overseeing it all with the hands-on leadership that keeps a multi-market
                    agency running like clockwork.
                  </p>
                  <p>
                    She looks at a brand brief and sees not only what needs to be said — but what needs to change —
                    crafting narratives that travel across markets without losing their edge and building editorial
                    relationships that move the needle.
                  </p>
                  <p>
                    The industry has taken note. Puja has earned recognition professionals spend careers chasing —
                    PR Professional of the Year, Woman Entrepreneur of the Year, Mentor of the Year, PR Agency Head of
                    the Year, and Best PR Professional of the Year. She has appeared twice on exchange4media&apos;s Top 100
                    Influential Game Changers list, been featured in Reputation Today, Campaign India, and IMAGEXX, and was
                    most recently named among 50+ influential voices in IIMC Delhi&apos;s Trailblazers initiative.
                  </p>
                  <p>
                    But awards aren&apos;t the story. Together, the founders built a communications firm engineered to deliver
                    influence with intent — and that intention shows up in every brief.
                  </p>
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

      <section className="bg-gradient-to-br from-mm-royal/25 via-mm-black to-mm-black py-20 lg:py-28">
        <Container className="max-w-4xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-mm-gold">Why it matters</p>
          <h2 className="mt-8 font-display text-3xl font-semibold md:text-4xl">Built for founders, boards, and category owners</h2>
          <p className="mt-8 font-editorial text-lg leading-[1.9] text-mm-light">
            You get the same calibre of editorial instinct, operational discipline, and digital fluency whether the
            brief starts in Delhi, Dubai, or Singapore — because integrated is how we&apos;ve always worked, not how we
            market ourselves.
          </p>
          <Link
            href="/contact"
            className="mt-12 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-mm-gold transition hover:text-mm-cream"
          >
            Start a conversation <HiArrowUpRight className="h-5 w-5" aria-hidden />
          </Link>
        </Container>
      </section>
    </main>
  );
}
