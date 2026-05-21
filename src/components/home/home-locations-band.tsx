import Link from "next/link";
import { Container } from "@/components/ui/container";
import { homeLocations } from "@/data/home-content";

const officeLinks = [
  { label: "India", href: "/in", line: "New Delhi · Nationwide counsel" },
  { label: "UAE", href: "/ae", line: "Dubai · Emirates-wide programmes" },
  { label: "Singapore", href: "/sg", line: "APAC HQ · Regional advisory" },
] as const;

export function HomeLocationsBand() {
  return (
    <section
      id="locations"
      aria-labelledby="home-locations-heading"
      className="scroll-mt-28 bg-mm-charcoal py-16 lg:scroll-mt-32 lg:py-20"
    >
      <Container>
        <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-mm-gold">{homeLocations.label}</p>
        <h2 id="home-locations-heading" className="sr-only">
          India, UAE, Singapore
        </h2>
        <p className="mt-6 max-w-4xl font-editorial text-base leading-[1.85] text-mm-light md:text-[1.0625rem]">
          {homeLocations.paragraph}
        </p>

        <ul className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-12">
          {officeLinks.map((loc) => (
            <li key={loc.href}>
              <Link href={loc.href} className="block transition hover:[&_h3]:text-mm-gold">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-mm-cream">{loc.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mm-light">{loc.line}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
