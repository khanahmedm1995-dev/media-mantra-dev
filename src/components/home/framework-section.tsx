"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { frameworkSteps } from "@/data/framework-steps";
import { homeFrameworkIntro } from "@/data/home-content";

type FrameworkSectionProps = {
  condensed?: boolean;
};

/** About — deck reference: light band, serif-style headline split, six columns for six framework steps. */
export function FrameworkSection({ condensed: _condensed = false }: FrameworkSectionProps) {
  return (
    <section id="framework" className="scroll-mt-28 bg-mm-cream py-24 text-mm-graphite lg:scroll-mt-32 lg:py-28">
      <Container>
        <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-mm-graphite/50">{homeFrameworkIntro.label}</p>
        <h2 className="mt-6 max-w-4xl font-display text-[clamp(2.35rem,4.5vw,3.85rem)] font-semibold leading-[1.06] tracking-tight text-mm-graphite md:text-[clamp(2.6rem,4.8vw,4rem)]">
          {homeFrameworkIntro.headline}
          <span className="mt-3 block bg-gradient-to-r from-mm-brand-navy via-mm-gold to-mm-brand-navy bg-clip-text font-serif italic text-transparent">
            {homeFrameworkIntro.headlineAccent}
          </span>
        </h2>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14 xl:grid-cols-6 xl:gap-x-6">
          {frameworkSteps.map((s, idx) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="border-t border-mm-graphite/[0.12] pt-6"
            >
              <p className="font-display text-xs font-semibold tabular-nums text-mm-graphite/40">{String(idx + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-mm-graphite md:text-xl">{s.title}</h3>
              <p className="mt-4 font-editorial text-sm leading-relaxed text-mm-graphite/75 md:text-[15px] xl:text-[13px] xl:leading-snug">{s.copy}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
