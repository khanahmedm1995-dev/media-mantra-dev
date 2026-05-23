import Link from "next/link";
import { Container } from "@/components/ui/container";
import { homeLocations } from "@/data/home-content";

const officeLinks = [
  { label: "India", href: "/in", line: "New Delhi · Nationwide" },
  { label: "UAE", href: "/ae", line: "Dubai · Emirates-wide" },
  { label: "Singapore", href: "/sg", line: "APAC hub" },
] as const;

function RevolvingGlobe() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[min(100%,340px)] lg:max-w-[380px]" aria-hidden>
      <div className="absolute inset-0 rounded-full border border-mm-cream/[0.12] bg-mm-black/20 shadow-[inset_0_0_60px_rgba(0,0,0,0.35)]" />
      <div className="mm-globe-spin absolute inset-[10%] rounded-full border border-dashed border-mm-gold/35" />
      <div className="absolute inset-[14%] overflow-hidden rounded-full">
        <div className="mm-globe-spin absolute inset-0 opacity-[0.95] bg-[radial-gradient(circle_at_35%_32%,rgba(255,255,227,0.16),transparent_46%),repeating-linear-gradient(-14deg,rgba(255,255,227,0.09)_0,rgba(255,255,227,0.09)_1px,transparent_1px,transparent_12px),radial-gradient(circle,rgba(210,180,80,0.12),transparent_62%)]" />
      </div>
      <div className="pointer-events-none absolute inset-[22%] rounded-full blur-[48px]" style={{ background: "radial-gradient(circle, rgba(210,180,80,0.28), transparent 55%)" }} />
    </div>
  );
}

export function HomeLocationsBand() {
  return (
    <section
      id="locations"
      aria-labelledby="home-locations-heading"
      className="scroll-mt-28 border-y border-mm-cream/[0.08] bg-mm-charcoal py-14 lg:scroll-mt-32 lg:py-16"
    >
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-mm-gold">{homeLocations.label}</p>
          <h2
            id="home-locations-heading"
            className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold uppercase tracking-[0.06em] text-mm-cream"
          >
            India · UAE · Singapore
          </h2>
          <p className="mt-5 max-w-xl border-l-2 border-mm-gold/40 pl-6 font-editorial text-sm leading-relaxed text-mm-light md:text-base">
            {homeLocations.paragraph}
          </p>

          <ul className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {officeLinks.map((loc) => (
              <li key={loc.href}>
                <Link href={loc.href} className="group block border-t border-mm-cream/15 pt-5 transition hover:border-mm-gold/40">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-mm-cream group-hover:text-mm-gold">{loc.label}</h3>
                  <p className="mt-2.5 font-editorial text-sm text-mm-light/90">{loc.line}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <RevolvingGlobe />
        </div>
      </Container>
    </section>
  );
}
