import Link from "next/link";
import { homeNetworkBand } from "@/data/home-content";
import { Container } from "@/components/ui/container";

const STATS = [
  { value: "3", suffix: "", label: "Markets" },
  { value: "13", suffix: "+", label: "Years" },
  { value: "600", suffix: "+", label: "Programmes" },
] as const;

const LOCATIONS = [
  { label: "India", href: "/in" },
  { label: "UAE", href: "/ae" },
  { label: "Singapore", href: "/sg" },
] as const;

/** Hopscotch network fold — copy left, globe motif right, monospace stats floor */
export function HomeHopNetworkSplit() {
  const { label, headline, body, linkLabel, linkHref } = homeNetworkBand;

  return (
    <section id="network" className="mm-hop-grid-bg scroll-mt-28 py-20 text-mm-cream lg:scroll-mt-32 lg:py-28">
      <Container className="lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
          <div className="flex flex-col justify-between gap-14 lg:min-h-[520px]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-gold">{label}</p>
              <h2 className="mt-8 font-display text-[clamp(1.75rem,4.5vw,3rem)] font-semibold uppercase leading-[1.08] tracking-tight">
                {headline}
              </h2>
              <p className="mt-8 max-w-xl font-editorial text-base leading-relaxed text-mm-cream/72 md:text-lg">{body}</p>
              <Link
                href={linkHref}
                className="mt-10 inline-block border-b border-mm-cream/35 pb-1 text-[10px] font-semibold uppercase tracking-[0.34em] text-mm-cream transition hover:border-mm-gold hover:text-mm-gold"
              >
                {linkLabel}
              </Link>
            </div>

            <dl className="grid gap-6 font-mono text-[11px] uppercase tracking-[0.24em] text-mm-cream/90 sm:grid-cols-3">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="tabular-nums">{s.value}</span>
                    <span className="text-mm-gold">{s.suffix}</span>
                    <span className="mx-2 text-mm-cream/35">:</span>
                    <span className="text-mm-light">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="flex flex-wrap gap-x-10 gap-y-4 border-t border-mm-cream/[0.1] pt-10 font-mono text-[10px] uppercase tracking-[0.28em]">
              {LOCATIONS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-mm-light transition hover:text-mm-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Decorative globe */}
          <div className="relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center lg:max-w-none lg:justify-end">
            <div
              className="relative aspect-square w-[min(100%,420px)] rounded-full border border-mm-cream/[0.08]"
              aria-hidden
            >
              <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.14),transparent_42%),repeating-linear-gradient(-12deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_14px)] opacity-90" />
              <div className="absolute left-[22%] top-[28%] h-2 w-2 rounded-[1px] bg-mm-cream shadow-[24px_48px_0_0_rgba(255,255,255,0.85),120px_-40px_0_0_rgba(255,255,255,0.55),80px_90px_0_0_rgba(255,255,255,0.45)]" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
