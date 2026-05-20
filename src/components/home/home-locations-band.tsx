import Link from "next/link";
import { Container } from "@/components/ui/container";

const locations = [
  { label: "India", href: "/in", line: "New Delhi · Nationwide counsel" },
  { label: "UAE", href: "/ae", line: "Dubai · Emirates-wide programmes" },
  { label: "Singapore", href: "/sg", line: "APAC HQ · Regional advisory" },
] as const;

export function HomeLocationsBand() {
  return (
    <section aria-labelledby="home-locations-heading" className="border-y border-mm-white/[0.06] py-14 lg:py-16">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-md">
            <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-mm-gold">Locations</p>
            <h2 id="home-locations-heading" className="mt-5 font-display text-2xl font-semibold text-mm-cream md:text-3xl lg:text-[2rem]">
              India, UAE, Singapore — wired as one desk.
            </h2>
          </div>
          <ul className="grid flex-1 gap-8 sm:grid-cols-3">
            {locations.map((loc) => (
              <li key={loc.href}>
                <Link
                  href={loc.href}
                  className="block transition hover:[&_h3]:text-mm-gold"
                >
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-mm-cream">{loc.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mm-light">{loc.line}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
