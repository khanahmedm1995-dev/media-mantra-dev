"use client";

import Image from "next/image";
import { clientLogos, getClientLogoSrc } from "@/data/clients";
import { homeClientsLead } from "@/data/home-content";
import { Container } from "@/components/ui/container";

/** Logo strip — card rails, soft gradient shell, marquee pause on hover */
export function ClientsMarqueeSection() {
  const row = [...clientLogos, ...clientLogos];
  const { eyebrow, title, description } = homeClientsLead;

  return (
    <section
      id="clients"
      className="relative scroll-mt-28 overflow-hidden bg-gradient-to-b from-mm-white via-[#f7f6f2] to-mm-cream py-20 lg:scroll-mt-32 lg:py-[clamp(5rem,12vw,7.5rem)]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(210,180,80,0.11),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mm-graphite/12 to-transparent"
        aria-hidden
      />

      <Container className="relative z-[1] mb-12 lg:mb-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-14">
          <div className="max-w-xl">
            {eyebrow.trim() ? (
              <div className="flex items-center gap-3">
                <span className="h-px w-12 bg-gradient-to-r from-mm-gold to-mm-gold/30" aria-hidden />
                <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-gold">{eyebrow}</p>
              </div>
            ) : null}
            <h2
              className={`font-display text-[clamp(2rem,4.2vw,2.85rem)] font-semibold uppercase leading-[1.05] tracking-[0.02em] text-mm-graphite ${eyebrow.trim() ? "mt-6" : ""}`}
            >
              {title}
            </h2>
          </div>
          <p className="max-w-md font-editorial text-[0.9375rem] leading-relaxed text-mm-graphite/72 lg:max-w-[28rem] lg:text-right lg:text-[1.0625rem] lg:leading-[1.65]">
            {description}
          </p>
        </div>
      </Container>

      <div className="relative z-[1] mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-10">
        <div className="relative rounded-[28px] border border-mm-graphite/[0.09] bg-mm-white/65 shadow-[0_28px_90px_-48px_rgba(26,22,18,0.35)] backdrop-blur-md ring-1 ring-mm-graphite/[0.04]">
          <div className="relative overflow-hidden rounded-[28px] py-10 lg:py-12">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-mm-white via-mm-white/95 to-transparent sm:w-24 lg:w-28" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-mm-white via-mm-white/95 to-transparent sm:w-24 lg:w-28" />

            <div className="mm-marquee-track-clients flex w-max items-center gap-x-6 px-8 sm:gap-x-8 sm:px-10 lg:gap-x-12 lg:px-12">
              {row.map((name, i) => {
                const logoSrc = getClientLogoSrc(name);
                return (
                  <div
                    key={`${name}-${i}`}
                    className="flex h-[58px] shrink-0 items-center justify-center sm:h-[68px] lg:h-[76px] [width:min(340px,calc((100vw-3rem)/2))] sm:[width:min(340px,calc((100vw-4rem)/3))]"
                  >
                    <div className="group/logo flex h-full w-full items-center justify-center rounded-2xl border border-mm-graphite/[0.08] bg-gradient-to-b from-mm-white to-mm-white/85 px-5 py-2.5 shadow-[0_8px_28px_-18px_rgba(0,0,0,0.22)] ring-1 ring-mm-graphite/[0.03] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-mm-gold/40 hover:shadow-[0_14px_36px_-20px_rgba(0,0,0,0.28)] sm:px-6">
                      {logoSrc ? (
                        <div className="relative h-10 w-full max-h-[52px] opacity-90 transition duration-300 group-hover/logo:opacity-100 sm:h-12 lg:h-14">
                          <Image
                            src={logoSrc}
                            alt={name}
                            fill
                            className="object-contain object-center"
                            sizes="(max-width: 768px) 30vw, 340px"
                          />
                        </div>
                      ) : (
                        <span className="line-clamp-2 text-center text-[9px] font-semibold uppercase leading-snug tracking-[0.18em] text-mm-graphite/55 transition hover:text-mm-graphite sm:text-[10px] sm:tracking-[0.2em]">
                          {name}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
