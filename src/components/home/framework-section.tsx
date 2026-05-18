"use client";

import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { frameworkSteps } from "@/data/framework-steps";
import { homeFrameworkIntro } from "@/data/home-content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = frameworkSteps;

type FrameworkSectionProps = {
  /** Tighter typography and shorter cards for homepage */
  condensed?: boolean;
};

export function FrameworkSection({ condensed = false }: FrameworkSectionProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-framework-card]");
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0.35, scale: 0.98 },
          {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 40%",
              scrub: true,
            },
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "none",
            delay: index * 0.02,
          },
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="framework"
      className={`relative scroll-mt-28 border-y border-mm-white/10 bg-gradient-to-b from-mm-black via-mm-midnight to-mm-black lg:scroll-mt-32 ${condensed ? "py-20 lg:py-24" : "py-24 lg:py-32"}`}
    >
      <Container>
        <div className={`grid lg:grid-cols-[0.92fr_1.12fr] ${condensed ? "gap-12 lg:gap-16" : "gap-14 lg:gap-24"}`}>
          <div className="lg:sticky lg:top-32 lg:h-fit lg:self-start">
            <SectionLabel>{homeFrameworkIntro.label}</SectionLabel>
            <h2
              className={`mt-5 font-display font-semibold tracking-tight text-mm-cream ${condensed ? "text-3xl md:text-[2.55rem] md:leading-tight" : "text-4xl md:text-[2.85rem] md:leading-tight"}`}
            >
              {homeFrameworkIntro.headline}
            </h2>
            <p
              className={`mt-5 font-editorial leading-relaxed text-mm-light ${condensed ? "text-base" : "text-lg"}`}
            >
              {homeFrameworkIntro.description}
            </p>
            <motion.div
              className="mt-10 hidden h-px w-40 bg-gradient-to-r from-mm-gold to-transparent lg:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className={condensed ? "space-y-3 md:grid md:gap-4 md:space-y-0 lg:grid-cols-2" : "space-y-5"}>
            {steps.map((s, idx) => (
              <motion.article
                data-framework-card
                key={s.title}
                className={`group relative overflow-hidden rounded-3xl border border-mm-white/10 bg-mm-white/[0.03] backdrop-blur-2xl transition hover:border-mm-gold/35 ${condensed ? "px-6 py-5" : "px-8 py-7"}`}
                whileHover={{ scale: condensed ? 1 : 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-mm-gold">
                      {String(idx + 1).padStart(2, "0")}
                    </p>
                    <h3
                      className={`mt-3 font-display font-semibold text-mm-cream ${condensed ? "text-[1.125rem] leading-snug md:text-xl" : "text-xl md:text-2xl"}`}
                    >
                      {s.title}
                    </h3>
                    <p className={`mt-2 leading-relaxed text-mm-light ${condensed ? "line-clamp-2 text-[13px] md:text-sm" : "text-sm"}`}>{s.copy}</p>
                  </div>
                  <div className="hidden h-16 w-px bg-gradient-to-b from-mm-gold/60 to-transparent sm:block" />
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-mm-gold/10 via-transparent to-mm-royal/30" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
