"use client";

import { HiArrowRight } from "react-icons/hi2";
import { homeContactStrip } from "@/data/home-content";
import { useContactLead } from "@/components/contact/contact-lead-context";

/** Hopscotch-style closing contact stripe */
export function HomeContactStrip() {
  const { openContact } = useContactLead();

  return (
    <section aria-label={homeContactStrip.label} className="bg-mm-cream px-6 py-12 sm:py-16">
      <div className="mx-auto flex max-w-[920px] flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.42em] text-mm-gold">{homeContactStrip.label}</p>
          <p className="mt-3 font-display text-xl font-semibold text-mm-royal sm:text-2xl">{homeContactStrip.line}</p>
        </div>
        <button
          type="button"
          onClick={openContact}
          className="group inline-flex items-center gap-3 rounded-full border border-mm-royal/25 bg-mm-white px-8 py-3.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-mm-royal transition hover:border-mm-royal/45 hover:bg-mm-white/90"
        >
          Message the desk
          <HiArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
        </button>
      </div>
    </section>
  );
}
