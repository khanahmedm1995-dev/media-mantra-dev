import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { createMetadata } from "@/lib/seo";
import { getServiceBySlug, services } from "@/data/services";
import { serviceDeepContent } from "@/data/service-deep-content";
import { ServiceDetailBody } from "@/components/services/service-detail-body";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return {};
  return createMetadata({
    title: svc.title,
    pathname: `/services/${slug}`,
    description: svc.excerpt,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();
  const rich = serviceDeepContent[svc.slug] ?? [
    {
      type: "p",
      text: svc.excerpt,
    },
    {
      type: "bullets",
      title: "What we orchestrate together",
      items: [...svc.deliverables.map((d) => d)],
    },
  ];

  return (
    <main id="main-content" className="flex-1 bg-mm-black text-mm-cream">
      <section
        className={`relative isolate overflow-hidden border-b border-mm-white/10 bg-gradient-to-br ${svc.heroGradient} pt-28 lg:pt-36`}
      >
        <div className="absolute inset-0 bg-mm-black/40" />
        <Container className="relative pb-20">
          <Link href="/services" className="text-[10px] font-semibold uppercase tracking-[0.35em] text-mm-cream/70">
            ← Back to Services
          </Link>
          <div className="mt-10 flex flex-wrap items-baseline gap-4">
            <span className="font-display text-sm font-semibold text-mm-gold">
              {String(svc.index).padStart(2, "0")}.
            </span>
            <SectionLabel className="text-mm-cream/80">{svc.title}</SectionLabel>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.06] md:text-[clamp(2.25rem,4.5vw,3.85rem)]">
            {svc.tagline}
          </h1>
          <p className="mt-8 max-w-2xl font-editorial text-lg leading-relaxed text-mm-cream/95">{svc.excerpt}</p>
        </Container>
      </section>

      <section className="border-b border-mm-white/10 py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.08fr_minmax(0,0.95fr)] lg:items-start lg:gap-20">
            <ServiceDetailBody blocks={rich} />
            <div className="lg:sticky lg:top-40">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-mm-white/15">
                <Image
                  src={svc.heroImage}
                  alt={svc.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 36vw"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mm-black via-transparent to-mm-royal/20" />
              </div>
              <div className="mt-10 space-y-3 rounded-[1.75rem] border border-mm-white/12 bg-mm-white/[0.03] px-8 py-6 backdrop-blur-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-mm-gold">Global advisory</p>
                <p className="font-editorial text-sm leading-relaxed text-mm-light">
                  Every engagement routes through strategists stationed across India, UAE, & Singapore — so counsel never
                  feels imported.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-mm-white/10 bg-mm-cream py-20 text-mm-graphite lg:py-24">
        <Container>
          <SectionLabel className="text-mm-royal">How we reinforce it</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-semibold md:text-4xl">Operating pillars.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {svc.pillars.map((pillar) => (
              <div key={pillar} className="rounded-2xl border border-mm-graphite/12 bg-mm-white/80 p-7 backdrop-blur">
                <p className="font-editorial text-base leading-relaxed text-mm-graphite/90">{pillar}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-mm-white/10 bg-mm-charcoal py-16">
        <Container className="flex flex-col gap-6 md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-10">
          {[
            { label: "Book a Strategy Call", href: "/contact" },
            { label: "See Our Work", href: "/case-studies" },
            { label: "Get in Touch", href: "/contact" },
          ].map((c) => (
            <Link
              key={c.label}
              href={c.href}
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-mm-gold transition hover:text-mm-cream md:text-[13px]"
            >
              <span aria-hidden className="text-mm-gold">
                →
              </span>
              {c.label}
            </Link>
          ))}
        </Container>
      </section>
    </main>
  );
}
