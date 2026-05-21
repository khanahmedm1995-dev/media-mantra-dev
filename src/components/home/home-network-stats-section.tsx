import Link from "next/link";
import { Container } from "@/components/ui/container";
import { homeNetworkBand } from "@/data/home-content";

const locations = [
  { label: "India", href: "/in", line: "New Delhi nucleus" },
  { label: "UAE", href: "/ae", line: "Dubai · Emirates-wide" },
  { label: "Singapore", href: "/sg", line: "APAC HQ" },
] as const;

const STATS = [
  { value: "3", suffix: "", label: "Markets wired as one" },
  { value: "13", suffix: "+", label: "Years of integrated craft" },
  { value: "600", suffix: "+", label: "Brand programmes delivered" },
] as const;

/** Hopscotch “network” — oversized typography, calm navy band */
export function HomeNetworkStatsSection() {
  return (
    <section id="network" className="scroll-mt-28 bg-mm-graphite py-16 text-mm-cream lg:scroll-mt-32 lg:py-24">
      <Container className="text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-gold">{homeNetworkBand.label}</p>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(1.5rem,3.5vw,2.25rem)] font-semibold leading-snug tracking-tight text-mm-cream/95">
          {homeNetworkBand.headline}
        </h2>

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 border-y border-mm-cream/[0.12] py-14 sm:grid-cols-3 sm:gap-8 sm:py-16">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <p className="font-display text-[clamp(3rem,12vw,5.75rem)] font-semibold leading-none tracking-tighter text-mm-cream tabular-nums">
                <span>{s.value}</span>
                {s.suffix ? <span className="text-mm-gold">{s.suffix}</span> : null}
              </p>
              <p className="mt-5 max-w-[14ch] text-[11px] font-semibold uppercase tracking-[0.28em] text-mm-light">{s.label}</p>
            </div>
          ))}
        </div>

        <ul className="mx-auto mt-14 flex flex-col flex-wrap justify-center gap-8 text-left sm:flex-row sm:gap-12 lg:gap-20">
          {locations.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="group block transition">
                <p className="text-[10px] font-semibold uppercase tracking-[0.36em] text-mm-gold group-hover:text-mm-cream">
                  {l.label}
                </p>
                <p className="mt-2 font-editorial text-sm text-mm-light group-hover:text-mm-cream">{l.line}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
