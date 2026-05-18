"use client";

import { clientLogos } from "@/data/clients";
import { homeClientsLead } from "@/data/home-content";
import { SectionLabel } from "@/components/ui/section-label";
import { Container } from "@/components/ui/container";

export function ClientsMarqueeSection() {
  const row = [...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="relative scroll-mt-28 border-y border-mm-white/10 bg-mm-charcoal py-12 lg:scroll-mt-32">
      <Container className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <SectionLabel>Our Clients</SectionLabel>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-mm-cream sm:text-[2.15rem] sm:leading-tight">
            {homeClientsLead.title}
          </h2>
        </div>
        <p className="max-w-xl font-editorial text-base leading-relaxed text-mm-light md:text-lg">{homeClientsLead.description}</p>
      </Container>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-mm-charcoal to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-mm-charcoal to-transparent" />
        <div className="mm-marquee-track flex w-max gap-10 px-6">
          {row.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="group flex min-w-[180px] items-center justify-center rounded-2xl border border-mm-white/10 bg-mm-white/[0.03] px-8 py-6 text-center text-sm font-semibold uppercase tracking-[0.18em] text-mm-light/70 backdrop-blur-md transition duration-500 grayscale hover:scale-[1.02] hover:border-mm-gold/40 hover:grayscale-0 hover:text-mm-cream sm:min-w-[220px]"
            >
              <span className="transition duration-500 group-hover:text-mm-gold">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
