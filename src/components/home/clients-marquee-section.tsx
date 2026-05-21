"use client";

import Image from "next/image";
import { clientLogos, getClientLogoSrc } from "@/data/clients";
import { homeClientsLead } from "@/data/home-content";
import { Container } from "@/components/ui/container";

/** Logo strip — light field; renders `/public/clients/*` when mapped in `clientLogoFiles`. */
export function ClientsMarqueeSection() {
  const row = [...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="relative scroll-mt-28 bg-mm-cream py-16 lg:scroll-mt-32 lg:py-24">
      <Container className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-gold">Trust</p>
          <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-mm-graphite sm:text-[clamp(1.85rem,3vw,2.35rem)]">
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
        <div className="mm-marquee-track flex w-max items-center gap-x-14 gap-y-6 px-6">
          {row.map((name, i) => {
            const logoSrc = getClientLogoSrc(name);
            return (
              <div
                key={`${name}-${i}`}
                className="flex min-h-[44px] min-w-[max-content] items-center justify-center px-1"
              >
                {logoSrc ? (
                  <div className="relative h-10 w-[140px] opacity-80 transition hover:opacity-100">
                    <Image
                      src={logoSrc}
                      alt={name}
                      fill
                      className="object-contain object-center"
                      sizes="140px"
                    />
                  </div>
                ) : (
                  <span className="border-b border-transparent pb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-mm-graphite/45 transition hover:border-mm-gold/50 hover:text-mm-graphite sm:text-xs">
                    {name}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
