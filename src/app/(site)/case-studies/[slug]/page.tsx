import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";
import { createMetadata } from "@/lib/seo";
import { CaseStudyProgressNav } from "@/components/case-study/case-study-progress-nav";
import { Container } from "@/components/ui/container";
import { HiArrowUpRight } from "react-icons/hi2";

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

function CampaignVisual() {
  const imgs = [
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1529333166437-af0dfc5c086c?auto=format&fit=crop&w=1200&q=80",
  ];
  return (
    <section className="space-y-6">
      {imgs.map((src) => (
        <div key={src} className="relative aspect-[16/10] w-full overflow-hidden bg-mm-graphite/[0.06]">
          <Image src={src} alt="" fill className="object-cover" sizes="100vw" />
        </div>
      ))}
    </section>
  );
}

/** Internal case — deck: banner image, campaign + brand, brief; THE IDEA (merged challenge + strategy); execution → results; related cards. */
export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const related = caseStudies.filter((c) => c.slug !== slug).slice(0, 4);

  return (
    <main id="main-content" className="flex-1 bg-mm-cream pb-28 text-mm-graphite">
      <section className="relative isolate h-[min(72vh,640px)] w-full overflow-hidden">
        <Image src={study.heroImage} alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mm-graphite/30 via-transparent to-mm-graphite/40" />
        <Container className="relative pt-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-mm-cream hover:text-mm-cream"
          >
            ← Case studies
          </Link>
        </Container>
      </section>

      <Container className="mt-12 grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
        <aside className="hidden lg:block lg:sticky lg:top-32 lg:h-fit lg:self-start">
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-graphite/45">Sections</p>
          <CaseStudyProgressNav className="mt-6" />
          <Link
            href="/contact"
            className="mt-12 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-mm-graphite underline decoration-mm-gold/50 underline-offset-4 hover:text-mm-graphite"
          >
            Brief us
            <HiArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </aside>

        <div className="space-y-20 lg:space-y-24">
          <section id="brief" className="scroll-mt-36 pb-16 text-center">
            <h1 className="mx-auto max-w-[28rem] font-display text-[clamp(1.85rem,3.8vw,2.85rem)] font-semibold leading-[1.12]">{study.title}</h1>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-graphite/40">Brand</p>
            <p className="mt-4 mm-headline-brand-blue font-display text-4xl font-semibold md:text-6xl">{study.brand}</p>
            <div className="mx-auto mt-14 max-w-3xl border-t border-mm-graphite/15 pt-12">
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.38em] text-mm-graphite/45">Brief</h2>
              <p className="mt-5 font-editorial text-left text-base leading-relaxed text-mm-graphite/80 md:text-lg">{study.excerpt}</p>
            </div>
          </section>

          <CaseStudyProgressNav className="lg:hidden" />

          <section id="idea" className="scroll-mt-36">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:gap-16">
              <h2 className="font-display text-2xl font-semibold uppercase leading-tight tracking-tight md:text-3xl">The idea</h2>
              <div className="space-y-6 font-editorial text-base leading-relaxed text-mm-graphite/80 md:text-[17px]">
                <p>{study.challenge}</p>
                <p>{study.strategy}</p>
              </div>
            </div>
          </section>

          <CampaignVisual />

          <section id="execution" className="scroll-mt-36">
            <h2 className="font-display text-2xl font-semibold uppercase leading-tight tracking-tight md:text-3xl">Execution</h2>
            <ul className="mt-8 space-y-4 border-l-2 border-mm-gold/50 pl-6 text-mm-graphite/85">
              {study.execution.map((e) => (
                <li key={e} className="font-editorial text-base md:text-[17px]">
                  {e}
                </li>
              ))}
            </ul>
          </section>

          <section id="results" className="scroll-mt-36 border border-mm-graphite/[0.1] bg-mm-white/60 px-8 py-10 md:px-12 md:py-14">
            <h2 className="font-display text-2xl font-semibold uppercase leading-tight tracking-tight md:text-3xl">Results</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {study.results.map((r) => (
                <div key={r.label} className="border-t border-mm-graphite/15 pt-4">
                  <p className="font-display text-3xl font-semibold text-mm-graphite">{r.value}</p>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-mm-graphite/50">{r.label}</p>
                </div>
              ))}
            </div>
          </section>

          {related.length > 0 ? (
            <section className="border-t border-mm-graphite/15 pt-16" aria-labelledby="more-work-heading">
              <h2 id="more-work-heading" className="text-[10px] font-semibold uppercase tracking-[0.36em] text-mm-graphite/45">
                More case studies
              </h2>
              <div className="mt-10 grid gap-10 sm:grid-cols-2">
                {related.map((c) => (
                  <Link key={c.slug} href={`/case-studies/${c.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-mm-graphite/[0.06]">
                      <Image
                        src={c.heroImage}
                        alt=""
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width:640px) 100vw, 50vw"
                      />
                    </div>
                    <p className="mt-5 font-display text-sm font-semibold uppercase tracking-[0.05em]">{c.title}</p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </Container>
    </main>
  );
}
