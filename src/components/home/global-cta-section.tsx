"use client";

import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { MagneticWrap } from "@/components/motion/magnetic-wrap";
import { Container } from "@/components/ui/container";
import { homeCta } from "@/data/home-content";

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 17) % 100}%`,
  top: `${(i * 23) % 100}%`,
  delay: i * 0.08,
}));

const CTA_VIDEO =
  "https://videos.pexels.com/video-files/2611250/2611250-uhd_2560_1440_25fps.mp4";

export function GlobalCtaSection() {
  return (
    <section className="relative isolate overflow-hidden py-28 lg:py-36">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        src={CTA_VIDEO}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-mm-black via-mm-royal/70 to-mm-black" />

      <div className="pointer-events-none absolute inset-0">
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="absolute h-1 w-1 rounded-full bg-mm-gold/80 blur-[1px]"
            style={{ left: p.left, top: p.top }}
            animate={{ y: [-6, 6, -6], opacity: [0.3, 0.95, 0.3] }}
            transition={{
              duration: 5 + (p.id % 5),
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <Container className="relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.9 }}
          className="mx-auto max-w-[22ch] font-display text-[clamp(2.35rem,5.5vw,4.25rem)] font-semibold leading-[1.02] tracking-tight text-mm-cream"
        >
          {homeCta.headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-8 max-w-3xl font-editorial text-lg leading-[1.7] text-mm-light md:text-xl"
        >
          {homeCta.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.22 }}
          className="mt-11 flex flex-wrap justify-center gap-6"
        >
          <MagneticWrap>
            <Link
              href={homeCta.primary.href}
              className="group inline-flex items-center gap-2 rounded-full bg-mm-gold px-11 py-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-mm-graphite shadow-[0_0_55px_rgba(210,180,80,0.28)] transition hover:bg-mm-cream hover:shadow-[0_0_70px_rgba(255,255,227,0.35)]"
            >
              {homeCta.primary.label}
              <HiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
            </Link>
          </MagneticWrap>
          <MagneticWrap strength={0.14}>
            <Link
              href={homeCta.secondary.href}
              className="inline-flex rounded-full border border-mm-gold/55 bg-mm-black/40 px-10 py-3.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-mm-cream backdrop-blur-xl transition hover:border-mm-gold hover:bg-mm-white/5"
            >
              {homeCta.secondary.label}
            </Link>
          </MagneticWrap>
        </motion.div>
      </Container>
    </section>
  );
}
