"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HiArrowDown, HiSparkles } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { MagneticWrap } from "@/components/motion/magnetic-wrap";
import { homeHero, homeHeroAside } from "@/data/home-content";

const HERO_VIDEO =
  "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_24fps.mp4";

export function HomeHeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.88], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden bg-mm-black"
      aria-label="Homepage hero"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-[0.42]"
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=70"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-mm-black/92 via-mm-royal/45 to-mm-black mm-mesh" />
      <div className="pointer-events-none absolute -left-[22%] top-[-14%] h-[62vh] w-[62vh] rounded-full bg-mm-gold/18 blur-[130px] mm-glow-orb" />
      <div className="pointer-events-none absolute -right-[12%] bottom-[-30%] h-[68vh] w-[68vh] rounded-full bg-mm-royal/40 blur-[140px]" />

      <motion.div style={{ opacity: opacityHero }} className="relative z-10 flex min-h-[100svh] flex-col">
        <div className="flex flex-1 flex-col justify-center px-5 pb-20 pt-[7.25rem] sm:px-8 lg:px-12 xl:pb-28">
          <div className="mx-auto flex w-full max-w-[940px] flex-col xl:max-w-[1100px]">
            <motion.div style={{ y: yText }} className="space-y-9 xl:space-y-11">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-light md:text-[11px]"
              >
                <span className="inline-flex items-center gap-3 rounded-full border border-mm-white/12 bg-mm-white/[0.04] px-4 py-2 backdrop-blur-xl">
                  <HiSparkles className="text-mm-gold" aria-hidden />
                  {homeHero.chip}
                </span>
                <span className="hidden text-mm-white/35 sm:inline" aria-hidden>
                  ·
                </span>
                <span className="font-medium uppercase tracking-[0.28em] text-mm-cream/88">{homeHero.badge}</span>
              </motion.div>

              <h1 className="font-display text-[clamp(2.65rem,7.75vw,5.95rem)] font-semibold leading-[0.9] tracking-[-0.03em] text-mm-cream">
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.04 }}
                    className="block"
                  >
                    {homeHero.lines[0]}
                  </motion.span>
                </span>
                <span className="mt-2 block overflow-hidden md:mt-3">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.14 }}
                    className="block text-mm-light/92"
                  >
                    {homeHero.lines[1]}
                  </motion.span>
                </span>
                <span className="relative mt-2 block overflow-hidden md:mt-3">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.24 }}
                    className="block bg-gradient-to-r from-mm-gold via-mm-cream to-mm-gold/80 bg-clip-text text-transparent"
                  >
                    {homeHero.lines[2]}
                  </motion.span>
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.75 }}
                className="max-w-2xl font-editorial text-lg leading-[1.7] text-mm-cream/[0.92] md:text-xl md:leading-snug"
              >
                {homeHero.subhead}
              </motion.p>

              <div className="grid gap-5 border-y border-mm-white/10 py-8 sm:grid-cols-2 sm:gap-10 sm:py-10">
                {homeHeroAside.map((line) => (
                  <p key={line} className="text-[13px] font-semibold uppercase tracking-[0.22em] text-mm-light/82">
                    {line}
                  </p>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52, duration: 0.75 }}
                className="flex flex-wrap items-center gap-5"
              >
                <MagneticWrap>
                  <Button asChild size="lg" className="px-10">
                    <Link href="/contact">Book a strategy call</Link>
                  </Button>
                </MagneticWrap>
                <MagneticWrap strength={0.12}>
                  <Button asChild variant="outline" size="lg" className="px-10">
                    <Link href="/services">Explore services</Link>
                  </Button>
                </MagneticWrap>
                <MagneticWrap strength={0.1}>
                  <Button asChild variant="ghost" size="lg" className="text-mm-light hover:bg-transparent hover:text-mm-gold">
                    <Link href="/case-studies">See our work →</Link>
                  </Button>
                </MagneticWrap>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.button
          type="button"
          aria-label="Scroll to content"
          className="absolute bottom-28 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-mm-light transition hover:text-mm-gold md:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1, duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => document.getElementById("clients")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="text-[9px] uppercase tracking-[0.5em]">Scroll</span>
          <HiArrowDown className="h-5 w-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
