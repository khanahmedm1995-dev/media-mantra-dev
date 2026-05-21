import Link from "next/link";
import { Container } from "@/components/ui/container";
import { homeLocations } from "@/data/home-content";

const officeLinks = [
  { label: "India", href: "/in", line: "New Delhi · Nationwide" },
  { label: "UAE", href: "/ae", line: "Dubai · Emirates-wide" },
  { label: "Singapore", href: "/sg", line: "APAC hub" },
] as const;

export function HomeLocationsBand() {
  return (
    <section
      id="locations"
      aria-labelledby="home-locations-heading"
      className="scroll-mt-28 bg-mm-charcoal py-14 lg:scroll-mt-32 lg:py-[4.5rem]"
    >
      <Container>
        <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-mm-gold">{homeLocations.label}</p>
        <h2
          id="home-locations-heading"
          className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold uppercase tracking-[0.06em] text-mm-cream"
        >
          India · UAE · Singapore
        </h2>
        <p className="mt-5 max-w-2xl font-editorial text-sm leading-relaxed text-mm-light/95 md:text-base">{homeLocations.paragraph}</p>

        <ul className="mt-12 grid gap-10 border-t border-mm-cream/10 pt-12 sm:grid-cols-3 sm:gap-12">
          {officeLinks.map((loc) => (
            <li key={loc.href}>
              <Link href={loc.href} className="block transition hover:[&_h3]:text-mm-gold">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-mm-cream">{loc.label}</h3>
                <p className="mt-2.5 text-sm text-mm-light/90">{loc.line}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
