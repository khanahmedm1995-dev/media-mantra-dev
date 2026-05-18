import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";
import { createMetadata } from "@/lib/seo";
import { CaseStudyProgressNav } from "@/components/case-study/case-study-progress-nav";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return createMetadata({
    title: study.title,
    pathname: `/case-studies/${slug}`,
    description: study.excerpt,
  });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <main id="main-content" className="flex-1 bg-mm-black pb-28 text-mm-cream">
      <section className="relative h-[420px] w-full overflow-hidden border-b border-mm-white/10 lg:h-[520px]">
        <Image src={study.heroImage} alt={study.title} fill priority className="object-cover" sizes="100vw" />
        <div className={`absolute inset-0 bg-gradient-to-tr ${study.accent} opacity-85 mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-mm-black via-mm-black/40 to-transparent" />
        <Container className="relative flex h-full flex-col justify-end pb-12 pt-36">
          <Link href="/case-studies" className="text-[10px] font-semibold uppercase tracking-[0.35em] text-mm-cream/80">
            ← Cases
          </Link>
          <Badge className="mt-8 w-fit border-mm-white/40 bg-mm-black/35 text-mm-cream">{study.category}</Badge>
          <h1 className="mt-6 max-w-4xl scroll-mt-48 font-display text-4xl font-semibold lg:text-5xl">
            {study.title}
          </h1>
        </Container>
      </section>

      <Container className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_2fr]">
        <aside className="lg:sticky lg:top-36 lg:h-fit lg:self-start">
          <SectionLabel>Journey map</SectionLabel>
          <CaseStudyProgressNav className="mt-8" />
          <Link
            href="/contact"
            className="mt-10 inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-mm-gold hover:underline"
          >
            Start a similar briefing →
          </Link>
        </aside>
        <div className="space-y-14">
          <section id="brand-intro" className="scroll-mt-40">
            <h2 className="font-display text-2xl font-semibold">{study.brand} — Brand Intro</h2>
            <p className="mt-4 text-base leading-relaxed text-mm-light">{study.excerpt}</p>
          </section>
          <section id="challenge" className="scroll-mt-40 border-y border-mm-white/10 py-10">
            <h2 className="font-display text-2xl font-semibold">Challenge</h2>
            <p className="mt-4 text-base leading-relaxed text-mm-light">{study.challenge}</p>
          </section>
          <section id="strategy" className="scroll-mt-40">
            <h2 className="font-display text-2xl font-semibold">Strategy</h2>
            <p className="mt-4 text-base leading-relaxed text-mm-light">{study.strategy}</p>
          </section>
          <section id="execution" className="scroll-mt-40">
            <h2 className="font-display text-2xl font-semibold">Execution</h2>
            <ul className="mt-6 space-y-3 text-mm-light">
              {study.execution.map((e) => (
                <li key={e} className="border-l border-mm-gold/35 pl-4">
                  {e}
                </li>
              ))}
            </ul>
          </section>
          <section id="results" className="scroll-mt-40 rounded-[2rem] border border-mm-gold/25 bg-mm-gold/5 p-8">
            <h2 className="font-display text-2xl font-semibold text-mm-gold">Results</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {study.results.map((r) => (
                <div key={r.label} className="rounded-2xl border border-mm-gold/20 bg-mm-black/40 p-5">
                  <p className="font-display text-3xl font-semibold text-mm-cream">{r.value}</p>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-mm-light">{r.label}</p>
                </div>
              ))}
            </div>
          </section>
          <GalleryStrip />
        </div>
      </Container>
    </main>
  );
}

function GalleryStrip() {
  const imgs = [
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1529333166437-af0dfc5c086c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  ];
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {imgs.map((src, i) => (
        <div key={src} className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-mm-white/10">
          <Image src={src} alt="" fill className="object-cover transition duration-700 hover:scale-105" sizes="33vw" />
          <span className="absolute left-4 top-4 rounded-full bg-mm-black/50 px-2 py-1 text-[9px] font-semibold uppercase tracking-widest text-mm-gold">
            Frame {i + 1}
          </span>
        </div>
      ))}
    </section>
  );
}
