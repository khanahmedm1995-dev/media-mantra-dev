"use client";

import { clientLogos } from "@/data/clients";
import { homeClientsLead } from "@/data/home-content";
import { Container } from "@/components/ui/container";

/** Logo strip — light field, airy Hopscotch-style rhythm (no heavy card chrome). */
export function ClientsMarqueeSection() {
  const row = [...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="relative scroll-mt-28 border-y border-mm-graphite/[0.06] bg-mm-cream py-14 lg:scroll-mt-32 lg:py-16">
      <Container className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-gold">Trust</p>
          <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-mm-royal sm:text-[clamp(1.85rem,3vw,2.35rem)]">
            {homeClientsLead.title}
          </h2>
        </div>
        <p className="max-w-lg font-editorial text-[0.9375rem] leading-relaxed text-mm-graphite/75 md:text-[1rem]">
          {homeClientsLead.description}
        </p>
      </Container>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-mm-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-mm-cream to-transparent" />
        <div className="mm-marquee-track flex w-max gap-x-16 gap-y-8 px-6">
          {row.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex min-w-[max-content] items-center justify-center border-b border-transparent pb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-mm-graphite/45 transition hover:border-mm-gold/50 hover:text-mm-graphite sm:text-xs"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
