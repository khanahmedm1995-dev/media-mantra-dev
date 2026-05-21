"use client";

import { HiArrowRight } from "react-icons/hi2";
import { homeContactStrip } from "@/data/home-content";
import { useContactLead } from "@/components/contact/contact-lead-context";

/** Homepage closing strip — PDF section 7. */
export function HomeContactStrip() {
  const { openContact } = useContactLead();

  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-mm-cream px-6 py-12 sm:py-16 lg:scroll-mt-32"
      aria-label={homeContactStrip.headline}
    >
      <div className="mx-auto flex max-w-[920px] flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div className="max-w-xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-gold">{homeContactStrip.label}</p>
          <h2 className="mt-3 font-display text-xl font-semibold text-mm-graphite sm:text-2xl">{homeContactStrip.headline}</h2>
          <div className="mt-5 space-y-3 font-editorial text-base leading-relaxed text-mm-graphite/85">
            {homeContactStrip.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={openContact}
          className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-mm-graphite/20 bg-mm-white px-8 py-3.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-mm-graphite transition hover:border-mm-gold/45 hover:bg-mm-white/90"
        >
          {homeContactStrip.primaryCta}
          <HiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
        </button>
      </div>
    </section>
  );
}
