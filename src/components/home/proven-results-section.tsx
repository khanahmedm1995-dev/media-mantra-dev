"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { homeProven } from "@/data/home-content";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = homeProven.stats;

type ProvenResultsSectionProps = {
  /** Omit stat body copy for a quieter homepage rhythm */
  dense?: boolean;
};

export function ProvenResultsSection({ dense = false }: ProvenResultsSectionProps) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      stats.forEach((s, i) => {
        const num = el.querySelector(`[data-stat-index="${i}"]`);
        if (!(num instanceof HTMLElement)) return;
        const end = s.value;
        const obj = { v: 0 };
        ScrollTrigger.create({
          trigger: num,
          start: "top 82%",
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              v: end,
              duration: 2.1,
              ease: "power3.out",
              onUpdate: () => {
                let display: string;
                if (s.displayType === "mult") {
                  display = obj.v.toFixed(1).replace(/\.0$/, "");
                } else {
                  display = Math.round(obj.v).toString();
                }
                num.textContent = `${display}${s.suffix}`;
              },
              onComplete: () => {
                const display = s.displayType === "mult" ? end.toString() : Math.round(end).toString();
                num.textContent = `${display}${s.suffix}`;
              },
            });
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="results"
      className="relative scroll-mt-28 overflow-hidden bg-mm-black py-20 lg:scroll-mt-32 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-[-18%] h-[72vh] w-[72vh] -translate-x-1/2 rounded-full bg-mm-royal/35 blur-[140px] mm-mesh" />
      </div>
      <Container className="relative z-10">
        <div className="max-w-3xl space-y-3">
          <SectionLabel>{homeProven.label}</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,4.2vw,3.35rem)] font-semibold leading-[1.05] tracking-tight text-mm-cream">
            {homeProven.headline}
          </h2>
          <p className="max-w-xl font-editorial text-base leading-relaxed text-mm-light md:text-lg">{homeProven.intro}</p>
        </div>

        <div className={dense ? "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" : "mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"}>
          {stats.map((s, i) => (
            <div
              key={s.key}
              className={`relative flex flex-col overflow-hidden rounded-[1.75rem] border border-mm-white/10 bg-mm-white/[0.03] backdrop-blur-xl ${dense ? "p-6" : "p-7"}`}
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-mm-gold/15 blur-2xl" />
              <p
                data-stat-index={i}
                className="font-display text-[clamp(2.25rem,4vw,3.25rem)] font-semibold tabular-nums tracking-tight text-mm-gold"
              >
                {`0${s.suffix}`}
              </p>
              <p className="mt-6 text-[11px] font-semibold uppercase leading-snug tracking-[0.18em] text-mm-cream/95">
                {s.label}
              </p>
              {!dense ? <p className="mt-3 font-editorial text-sm leading-relaxed text-mm-light md:text-[15px]">{s.dek}</p> : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
