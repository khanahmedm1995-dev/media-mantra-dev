import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";

function chunkPairs<T>(arr: readonly T[]): [T, T | undefined][] {
  const out: [T, T | undefined][] = [];
  for (let i = 0; i < arr.length; i += 2) {
    out.push([arr[i], arr[i + 1]]);
  }
  return out;
}

/** Hopscotch trades fold — visual lane + sector grid */
export function HomeHopExpertiseSplit() {
  const lanes = services.slice(0, 7);
  const pairs = chunkPairs(industries);

  return (
    <section id="expertise" className="scroll-mt-28 bg-black py-20 text-mm-cream lg:scroll-mt-32 lg:py-24">
      <Container className="px-0 lg:px-10">
        <div className="grid overflow-hidden border border-mm-cream/[0.08] lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:border-none">
          {/* Left — canvas + stacked lanes */}
          <div className="relative min-h-[420px] bg-gradient-to-br from-mm-brand-navy/40 via-mm-graphite to-black lg:min-h-[560px]">
            <div className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(ellipse_at_70%_20%,rgba(210,180,80,0.12),transparent_55%),radial-gradient(circle_at_20%_80%,rgba(25,25,112,0.35),transparent_45%)]" />
            <div className="relative flex h-full flex-col justify-between p-8 lg:p-12">
              <ul className="space-y-4 lg:space-y-5">
                {lanes.map((s, idx) => (
                  <li key={s.slug} className={idx === 0 ? "text-mm-cream" : "text-mm-cream/55"}>
                    <Link
                      href={`/services/${s.slug}`}
                      className={`group inline-flex items-center gap-3 font-display text-[clamp(1.05rem,2.2vw,1.35rem)] font-semibold uppercase tracking-[0.06em] transition hover:text-mm-gold ${idx === 0 ? "" : "text-[95%]"}`}
                    >
                      {s.title}
                      <HiArrowUpRight className="h-4 w-4 shrink-0 opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Decorative carousel ticks */}
              <div className="flex items-center gap-3 pt-10">
                <span className="text-mm-cream/40" aria-hidden>
                  ❚❚
                </span>
                <div className="flex flex-1 gap-1">
                  {lanes.map((_, i) => (
                    <span key={i} className={`h-px flex-1 rounded-full ${i === 0 ? "bg-mm-cream" : "bg-mm-cream/25"}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — sector rows */}
          <div className="border-t border-mm-cream/[0.08] bg-black px-8 py-10 lg:border-l lg:border-t-0 lg:px-14 lg:py-14">
            <div className="space-y-0">
              {pairs.map(([a, b], row) => (
                <div
                  key={`${a.name}-${row}`}
                  className="grid gap-8 border-b border-mm-cream/[0.12] py-5 sm:grid-cols-2 sm:gap-12"
                >
                  <IndustryCell item={a} />
                  {b ? <IndustryCell item={b} /> : <div />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function IndustryCell({ item }: { item: { name: string } }) {
  return (
    <Link
      href="/industries"
      className="group flex items-start justify-between gap-4 text-left font-display text-[11px] font-semibold uppercase tracking-[0.26em] text-mm-cream transition hover:text-mm-gold"
    >
      <span>{item.name}</span>
      <HiArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
