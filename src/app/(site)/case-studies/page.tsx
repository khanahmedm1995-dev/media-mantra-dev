import Link from "next/link";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { caseStudies } from "@/data/case-studies";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Badge } from "@/components/ui/badge";

export const metadata = createMetadata({
  title: "Case Studies",
  pathname: "/case-studies",
  description: "Editorial proofs — Archies, OPG Mobility, ISMA Crisis PR, Swastik Wellbeing, Barista, and beyond.",
});

export default function CaseStudiesPage() {
  return (
    <main id="main-content" className="flex-1 bg-mm-black pb-24 pt-6 text-mm-cream lg:pt-8">
      <Container>
        <SectionLabel>Evidence</SectionLabel>
        <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.75rem,5vw,4.25rem)] font-semibold leading-tight">
          Case studies sculpted for reputational uplift.
        </h1>
        <p className="mt-6 max-w-2xl text-mm-light">
          Every engagement is anchored in clarity of challenge, rigor of strategy, and unmistakable signatures of craft.
        </p>
      </Container>

      <Container className="mt-16 space-y-14">
        {caseStudies.map((c) => (
          <Link key={c.slug} href={`/case-studies/${c.slug}`} className="group grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div className="relative h-[340px] overflow-hidden rounded-[2rem] border border-mm-white/15">
              <Image
                src={c.heroImage}
                alt={c.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="45vw"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${c.accent} opacity-65 mix-blend-multiply`} />
            </div>
            <div className="flex flex-col justify-center">
              <Badge className="w-fit">{c.category}</Badge>
              <h2 className="mt-6 font-display text-3xl font-semibold">{c.title}</h2>
              <p className="mt-4 text-mm-light">{c.excerpt}</p>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-mm-gold">Read study →</p>
            </div>
          </Link>
        ))}
      </Container>
    </main>
  );
}
