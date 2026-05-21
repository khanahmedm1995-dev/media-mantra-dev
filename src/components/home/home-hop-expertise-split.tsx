"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { HiArrowUpRight, HiPause, HiPlay } from "react-icons/hi2";
import { homeExpertiseSplitSectors } from "@/data/home-content";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";

const SLIDE_COUNT = 6;
const AUTOPLAY_MS = 6000;

function chunkPairs<T>(arr: readonly T[]): readonly (readonly [T, T | undefined])[] {
  const out: [T, T | undefined][] = [];
  for (let i = 0; i < arr.length; i += 2) {
    out.push([arr[i], arr[i + 1]]);
  }
  return out;
}

/**
 * Hopscotch-style band directly under the video hero: image slider + pause + progress ticks (left),
 * sector link grid with arrows (right).
 */
export function HomeHopExpertiseSplit() {
  const slides = useMemo(
    () =>
      services.slice(0, SLIDE_COUNT).map((s) => ({
        slug: s.slug,
        src: s.heroImage,
        title: s.title,
        href: `/services/${s.slug}` as const,
        lanes: [...s.pillars, s.tagline].slice(0, 6),
      })),
    [],
  );

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length === 0) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  const go = useCallback(
    (i: number) => {
      setActive(((i % slides.length) + slides.length) % slides.length);
    },
    [slides.length],
  );

  const pairs = chunkPairs(homeExpertiseSplitSectors);

  const current = slides[active] ?? slides[0];

  return (
    <section
      id="expertise"
      className="mm-hop-grid-bg scroll-mt-28 border-t border-mm-cream/[0.06] bg-black py-0 text-mm-cream lg:scroll-mt-32"
      aria-label="Services and sectors"
    >
      <Container className="px-0 lg:px-10">
        <div className="grid overflow-hidden border border-mm-cream/[0.08] lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:border-none">
          {/* Left — full-bleed image slider */}
          <div className="relative min-h-[380px] bg-mm-graphite lg:min-h-[min(72vh,640px)]">
            {slides.map((slide, i) => (
              <div
                key={slide.slug}
                className={`absolute inset-0 transition-opacity duration-[900ms] ease-out ${
                  i === active ? "z-[1] opacity-100" : "z-0 opacity-0"
                }`}
                aria-hidden={i !== active}
              >
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
              </div>
            ))}

            <div className="relative z-[2] flex h-full min-h-[380px] flex-col justify-between p-8 lg:min-h-[min(72vh,640px)] lg:p-12">
              <div className="max-w-xl">
                <Link
                  href={current?.href ?? "/services"}
                  className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mm-gold"
                >
                  <h2 className="font-display text-[clamp(1.35rem,3.2vw,2.25rem)] font-semibold uppercase leading-[1.12] tracking-[0.04em] text-mm-cream drop-shadow-sm transition group-hover:text-mm-gold">
                    {current?.title}
                  </h2>
                  <span className="mt-3 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-cream/50 transition group-hover:text-mm-cream/80">
                    View capability
                    <HiArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </Link>

                <ul className="mt-8 space-y-3 border-l border-mm-cream/15 pl-5">
                  {(current?.lanes ?? []).map((line) => (
                    <li key={line}>
                      <span className="font-editorial text-[0.9375rem] leading-snug text-mm-cream/55 md:text-base">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-3 pt-10">
                <button
                  type="button"
                  aria-label={paused ? "Play slides" : "Pause slides"}
                  onClick={() => setPaused((p) => !p)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-mm-cream/25 text-mm-cream transition hover:border-mm-cream/50 hover:bg-mm-cream/10"
                >
                  {paused ? <HiPlay className="h-4 w-4" /> : <HiPause className="h-4 w-4" />}
                </button>
                <div className="flex flex-1 gap-1.5">
                  {slides.map((s, i) => (
                    <button
                      key={s.slug}
                      type="button"
                      aria-label={`Show slide ${i + 1}: ${s.title}`}
                      aria-current={i === active}
                      onClick={() => go(i)}
                      className={`h-1 flex-1 rounded-full transition ${
                        i === active ? "bg-mm-cream" : "bg-mm-cream/25 hover:bg-mm-cream/45"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — sector rows */}
          <div className="border-t border-mm-cream/[0.08] bg-black px-7 py-10 lg:border-l lg:border-t-0 lg:px-12 lg:py-14">
            <div className="space-y-0">
              {pairs.map(([a, b], row) => (
                <div
                  key={`row-${row}`}
                  className="grid gap-8 border-b border-mm-cream/[0.12] py-5 sm:grid-cols-2 sm:gap-12"
                >
                  <IndustryCell item={a} />
                  {b ? <IndustryCell item={b} /> : <div />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function IndustryCell({ item }: { item: (typeof homeExpertiseSplitSectors)[number] }) {
  return (
    <Link
      href={item.href}
      className="group flex items-start justify-between gap-4 text-left font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-mm-cream transition hover:text-mm-gold"
    >
      <span className="leading-snug">{item.label}</span>
      <HiArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
