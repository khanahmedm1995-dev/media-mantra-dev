import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { createMetadata } from "@/lib/seo";
import { getServiceBySlug, services } from "@/data/services";
import { serviceDeepContent } from "@/data/service-deep-content";
import { ServiceDetailBody } from "@/components/services/service-detail-body";
import { HiArrowUpRight } from "react-icons/hi2";

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
      {/* Banner — service title only */}
      <section className={`relative isolate overflow-hidden border-b border-mm-white/10 bg-gradient-to-br ${svc.heroGradient} pt-10 lg:pt-14`}>
        <div className="absolute inset-0 bg-mm-black/55" />
        <Container className="relative pb-16 lg:pb-20">
          <Link href="/services" className="text-[10px] font-semibold uppercase tracking-[0.35em] text-mm-cream/70">
            ← Services
          </Link>
          <h1 className="mt-12 max-w-4xl font-display text-[clamp(2.2rem,5vw,3.75rem)] font-semibold uppercase leading-[1.05] tracking-[0.02em] text-mm-cream">
            {svc.title}
          </h1>
          <p className="mt-6 max-w-2xl font-editorial text-base leading-relaxed text-mm-light md:text-lg">{svc.excerpt}</p>
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
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-mm-white/10 bg-mm-graphite py-14 lg:py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-[clamp(1.85rem,3.5vw,2.5rem)] font-semibold leading-tight text-mm-cream">
            Let&apos;s build your media presence
          </h2>
          <p className="mt-6 font-editorial text-base leading-relaxed text-mm-light/90 md:text-lg">
            Whether you&apos;re launching, entering new markets, or tired of being the industry&apos;s best-kept secret —
            let&apos;s talk.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-mm-gold"
            >
              <span aria-hidden>→</span> Get a PR strategy
              <HiArrowUpRight className="h-4 w-4 opacity-70 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-mm-gold"
            >
              <span aria-hidden>→</span> See our work
              <HiArrowUpRight className="h-4 w-4 opacity-70 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
