"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HiArrowDown } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { MagneticWrap } from "@/components/motion/magnetic-wrap";
import { homeHero, homeHopscotchHero } from "@/data/home-content";
import { useContactLead } from "@/components/contact/contact-lead-context";
import { Container } from "@/components/ui/container";

const HERO_VIDEO =
  "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_24fps.mp4";

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
        poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=70"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-mm-charcoal/88 via-mm-royal/16 to-mm-charcoal mm-mesh" />
      <div className="pointer-events-none absolute -left-[20%] top-[-18%] h-[56vh] w-[56vh] rounded-full bg-mm-gold/14 blur-[120px]" />
      <div className="pointer-events-none absolute -right-[14%] bottom-[-36%] h-[62vh] w-[62vh] rounded-full bg-mm-royal/14 blur-[130px]" />

      <motion.div style={{ opacity: opacityHero }} className="relative z-10 flex min-h-[100svh] flex-col">
        <div className="flex flex-1 flex-col justify-end pb-16 pt-[6.75rem] sm:px-0 lg:justify-center lg:pb-28 lg:pt-[5.5rem]">
          <Container className="max-w-[1200px]">
            <motion.div style={{ y: yMain }} className="max-w-[46rem]">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-[10px] font-semibold uppercase tracking-[0.48em] text-mm-gold"
              >
                {homeHopscotchHero.eyebrow}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-7 font-display text-[clamp(2rem,6.25vw,4.42rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-mm-cream"
              >
                {homeHopscotchHero.lineA}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.55 }}
                className="mt-8 max-w-2xl font-editorial text-lg leading-[1.7] text-mm-cream/[0.9] md:text-xl"
              >
                {homeHero.subhead}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.32, duration: 0.5 }}
                className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-mm-cream"
              >
                <span className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-mm-gold/95">
                  {homeHopscotchHero.lineB}
                </span>
                <button
                  type="button"
                  className="text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-cream/90 underline decoration-mm-gold/60 underline-offset-8 transition hover:text-mm-gold"
                  onClick={() => jump("expertise")}
                >
                  {homeHopscotchHero.discover}
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.6 }}
                className="mt-12 flex flex-wrap items-center gap-4 lg:gap-5"
              >
                <MagneticWrap>
                  <Button type="button" size="lg" className="px-9" onClick={openContact}>
                    Start a conversation
                  </Button>
                </MagneticWrap>
                <MagneticWrap strength={0.12}>
                  <Button asChild variant="outline" size="lg" className="border-mm-white/[0.12] px-9">
                    <Link href="/case-studies">View work</Link>
                  </Button>
                </MagneticWrap>
                <MagneticWrap strength={0.08}>
                  <Button asChild variant="ghost" size="lg" className="text-mm-light hover:text-mm-gold">
                    <Link href="/services">Expertise overview</Link>
                  </Button>
                </MagneticWrap>
              </motion.div>
            </motion.div>
          </Container>
        </div>

        <motion.button
          type="button"
          aria-label="Scroll to trades and sectors"
          className="absolute bottom-28 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-mm-light transition hover:text-mm-gold md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
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
