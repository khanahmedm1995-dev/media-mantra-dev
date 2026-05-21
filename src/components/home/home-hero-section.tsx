"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HiArrowDown } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { MagneticWrap } from "@/components/motion/magnetic-wrap";
import { homeHero } from "@/data/home-content";
import { useContactLead } from "@/components/contact/contact-lead-context";
import { Container } from "@/components/ui/container";

/** Client hero — source: `public/videos/home-hero.mp4` (replace file to swap reel). */
const HERO_VIDEO = "/videos/home-hero.mp4";

/** Full-bleed video hero patterned after editorial comms benchmarks (Hopscotch-style pacing). */
export function HomeHeroSection() {
  const { openContact } = useContactLead();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yMain = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.88], [1, 0]);

  const jump = (id: string) =>
    typeof document !== "undefined" &&
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={ref}
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden bg-mm-charcoal"
      aria-label="Homepage hero"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-[0.48]"
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-mm-charcoal/90 via-mm-black/20 to-mm-charcoal mm-mesh" />
      <div className="pointer-events-none absolute -left-[20%] top-[-18%] h-[50vh] w-[50vh] rounded-full bg-mm-gold/12 blur-[110px]" />
      <div className="pointer-events-none absolute -right-[12%] bottom-[-40%] h-[55vh] w-[55vh] rounded-full bg-mm-white/[0.04] blur-[120px]" />

      <motion.div style={{ opacity: opacityHero }} className="relative z-10 flex min-h-[100svh] flex-col">
        <div className="flex flex-1 flex-col justify-end pb-16 pt-[6.75rem] sm:px-0 lg:justify-center lg:pb-28 lg:pt-[5.5rem]">
          <Container className="max-w-[1200px]">
            <motion.div style={{ y: yMain }} className="max-w-[46rem]">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[clamp(2rem,6.25vw,4.42rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-mm-cream"
              >
                {homeHero.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.16, duration: 0.55 }}
                className="mt-8 max-w-2xl font-editorial text-lg leading-[1.7] text-mm-cream/[0.92] md:text-xl"
              >
                {homeHero.agencyLine}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.22, duration: 0.55 }}
                className="mt-5 max-w-2xl font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-mm-gold/95 md:text-xs"
              >
                {homeHero.badge}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28, duration: 0.5 }}
                className="mt-7"
              >
                <button
                  type="button"
                  className="text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-cream/90 underline decoration-mm-gold/60 underline-offset-8 transition hover:text-mm-gold"
                  onClick={() => jump("intro")}
                >
                  Discover
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.6 }}
                className="mt-12 flex flex-wrap items-center gap-4 lg:gap-5"
              >
                <MagneticWrap>
                  <Button type="button" size="lg" className="px-9" onClick={openContact}>
                    Get in Touch
                  </Button>
                </MagneticWrap>
                <MagneticWrap strength={0.12}>
                  <Button asChild variant="outline" size="lg" className="border-mm-white/[0.12] px-9">
                    <Link href="/case-studies">See Our Work</Link>
                  </Button>
                </MagneticWrap>
                <MagneticWrap strength={0.08}>
                  <Button asChild variant="ghost" size="lg" className="text-mm-light hover:text-mm-gold">
                    <Link href="/contact">Book a Strategy Call</Link>
                  </Button>
                </MagneticWrap>
              </motion.div>
            </motion.div>
          </Container>
        </div>

        <motion.button
          type="button"
          aria-label="Scroll to intro"
          className="absolute bottom-28 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-mm-light transition hover:text-mm-gold md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 0.85, duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => jump("intro")}
        >
          <span className="text-[9px] uppercase tracking-[0.48em]">Scroll</span>
          <HiArrowDown className="h-5 w-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
