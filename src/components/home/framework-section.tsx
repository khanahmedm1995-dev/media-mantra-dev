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
  /** Tighter typography and shorter cards for compact layouts */
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
      className={`relative scroll-mt-28 bg-mm-charcoal py-24 lg:scroll-mt-32 lg:py-32 ${condensed ? "lg:py-28" : ""}`}
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
            {homeFrameworkIntro.description ? (
              <p
                className={`mt-5 font-editorial leading-relaxed text-mm-light ${condensed ? "text-base" : "text-lg"}`}
              >
                {homeFrameworkIntro.description}
              </p>
            ) : null}
            <motion.div
              className="mt-10 hidden h-px w-40 bg-gradient-to-r from-mm-gold to-transparent lg:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className={condensed ? "space-y-2 md:grid md:gap-6 md:space-y-0 lg:grid-cols-2" : "space-y-3"}>
            {steps.map((s, idx) => (
              <motion.article
                data-framework-card
                key={s.title}
                className={`group relative border-l-2 border-mm-gold/35 bg-transparent pl-6 transition-colors hover:border-mm-gold/70 ${condensed ? "py-4" : "py-6"}`}
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
              >
                <div className="pr-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-mm-gold">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className={`mt-2 font-display font-semibold text-mm-cream ${condensed ? "text-[1.125rem] leading-snug md:text-xl" : "text-xl md:text-2xl"}`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`mt-3 font-editorial leading-relaxed text-mm-light ${condensed ? "line-clamp-3 text-[13px] md:text-sm" : "text-sm md:text-[15px]"}`}
                  >
                    {s.copy}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
