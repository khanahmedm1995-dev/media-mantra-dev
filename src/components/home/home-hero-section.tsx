"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HiArrowDown } from "react-icons/hi2";
import { homeHopscotchHero } from "@/data/home-content";
import { useContactLead } from "@/components/contact/contact-lead-context";
import { Container } from "@/components/ui/container";

const HERO_VIDEO = "/videos/home-hero.mp4";

/** Video banner — full-bleed film + grid; main site nav lives in `SiteHeader`. */
export function HomeHeroSection() {
  const { openContact } = useContactLead();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacityHero = useTransform(scrollYProgress, [0, 0.88], [1, 0]);

  const jump = (id: string) =>
    typeof document !== "undefined" && document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const { headline, subline, tradeLinks, discoverLabel, discoverHref } = homeHopscotchHero;
  const words = headline.trim().split(/\s+/).filter(Boolean);
  const hasVisibleHeadline = words.length > 0;
  const hasVisibleSubline = subline.trim().length > 0;
  const highlightAt = hasVisibleHeadline ? Math.min(1, Math.max(0, words.length - 1)) : 0;
  const hasVisibleTradeLinks = tradeLinks.length > 0;
  const hasDiscover = discoverLabel.trim().length > 0;
  const showMarketingBlock =
    hasVisibleHeadline || hasVisibleSubline || hasVisibleTradeLinks || hasDiscover;

  return (
    <section
      ref={ref}
      id="home"
      className="mm-hop-grid-bg relative isolate min-h-[100svh] min-h-[100dvh] overflow-hidden"
      aria-label="Homepage hero"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <video
          className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover saturate-[1.05]"
          src={HERO_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mm-graphite/15 via-mm-graphite/22 to-mm-graphite/35" />
      </div>

      <motion.div
        style={{ opacity: opacityHero }}
        className="relative z-10 flex min-h-[100svh] flex-col pt-[4.75rem] lg:pt-[4rem]"
      >
        {showMarketingBlock ? (
          <div className="flex flex-1 flex-col justify-end px-5 pb-20 pt-10 sm:px-8 lg:pb-28">
            <Container className="max-w-[1100px]">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-center lg:text-left"
              >
                <h1 className="font-display text-[clamp(1.65rem,6.5vw,4rem)] font-semibold uppercase leading-[0.98] tracking-tight text-mm-cream">
                  {!hasVisibleHeadline ? (
                    <span className="sr-only">Media Mantra Global</span>
                  ) : (
                    <>
                      <span className="sr-only">Media Mantra Global — </span>
                      {words.map((w, i) =>
                        i === highlightAt ? (
                          <span
                            key={i}
                            className="mx-1 inline-block bg-[#0d47cc] px-2 py-1 align-middle text-mm-cream sm:px-3 sm:py-1.5"
                          >
                            {w}
                          </span>
                        ) : (
                          <span key={i}>{w} </span>
                        ),
                      )}
                    </>
                  )}
                </h1>

                {hasVisibleSubline ? (
                  <p
                    className={`font-editorial text-[0.9375rem] uppercase tracking-[0.28em] text-mm-cream/55 ${hasVisibleHeadline ? "mt-6" : "mt-0"}`}
                  >
                    {subline}
                  </p>
                ) : null}

                {hasVisibleTradeLinks ? (
                  <nav
                    className={`mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-mm-cream/82 lg:mx-0 lg:justify-start`}
                    aria-label="Practice areas"
                  >
                    {tradeLinks.map((t, i) => (
                      <span key={t.href} className="inline-flex flex-wrap items-center gap-x-2">
                        {i > 0 ? (
                          <span className="text-mm-cream/35" aria-hidden>
                            —
                          </span>
                        ) : null}
                        <Link href={t.href} className="border-b border-mm-cream/25 transition hover:border-mm-gold hover:text-mm-gold">
                          {t.label}
                        </Link>
                      </span>
                    ))}
                  </nav>
                ) : null}

                {hasDiscover ? (
                  <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-mm-cream/88 lg:mx-0 lg:justify-start">
                    <Link
                      href={discoverHref}
                      className="border-b border-mm-gold pb-0.5 text-mm-gold transition hover:text-mm-cream"
                    >
                      {discoverLabel}
                    </Link>
                    <span className="text-mm-cream/35" aria-hidden>
                      ·
                    </span>
                    <button
                      type="button"
                      onClick={openContact}
                      className="border-b border-transparent pb-0.5 transition hover:border-mm-cream"
                    >
                      Contact
                    </button>
                  </div>
                ) : null}
              </motion.div>
            </Container>
          </div>
        ) : (
          <div className="flex flex-1 flex-col">
            <h1 className="sr-only">Media Mantra Global — integrated communications across India, UAE, and Singapore</h1>
          </div>
        )}

        <motion.button
          type="button"
          aria-label="Scroll to content"
          className="absolute bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 rounded-full px-3 py-2 text-mm-light transition hover:text-mm-gold md:bottom-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 5, 0] }}
          transition={{ delay: 0.85, duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => jump("expertise")}
        >
          <span className="text-[9px] uppercase tracking-[0.48em]">Scroll</span>
          <HiArrowDown className="h-5 w-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
