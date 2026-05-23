import Link from "next/link";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { caseStudies } from "@/data/case-studies";
import { Container } from "@/components/ui/container";
import { HiArrowUpRight } from "react-icons/hi2";

export const metadata = createMetadata({
  title: "Case Studies",
  pathname: "/case-studies",
  description: "Editorial proofs — Archies, OPG Mobility, ISMA Crisis PR, Swastik Wellbeing, Barista, and beyond.",
});

/** Listing — Romans-style: light canvas, dense 2-column image grid, bold titles under art. */
export default function CaseStudiesPage() {
  return (
    <main id="main-content" className="flex-1 bg-mm-cream pb-24 pt-10 text-mm-graphite lg:pt-14">
      <Container>
        <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-mm-graphite/45">Our work</p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.25rem,4vw,3.25rem)] font-semibold leading-tight tracking-tight">
          Case studies
        </h1>
      </Container>

      <Container className="mt-14 md:mt-20">
        <div className="grid gap-12 sm:gap-14 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
          {caseStudies.map((c) => (
            <Link key={c.slug} href={`/case-studies/${c.slug}`} className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mm-gold">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-mm-graphite/[0.06]">
                <Image
                  src={c.heroImage}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </div>
              <h2 className="mt-6 font-display text-lg font-semibold uppercase leading-snug tracking-[0.04em] md:text-xl">{c.title}</h2>
            </Link>
          ))}
        </div>
      </Container>

      <section className="mt-24 border-t border-mm-graphite/10 bg-mm-cream py-12">
        <Container className="flex flex-col items-center gap-3 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 border-b border-mm-graphite/25 pb-0.5 text-[11px] font-semibold uppercase tracking-[0.32em] text-mm-graphite transition hover:border-mm-gold hover:text-mm-graphite"
          >
            Start a conversation
            <HiArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Container>
      </section>
    </main>
  );
}
