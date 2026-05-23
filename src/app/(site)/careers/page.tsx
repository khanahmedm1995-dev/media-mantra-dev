"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ROLES = [
  { title: "Managing Consultant — Narrative Strategy", location: "Delhi" },
  { title: "Senior Media Relations Lead — Mobility", location: "Dubai" },
  { title: "Associate Creative Director — Film & Sonic", location: "Singapore" },
  { title: "Intelligence Analyst — Predictive Signals", location: "Hybrid" },
] as const;

export default function CareersPage() {
  const [sent, setSent] = useState(false);

  return (
    <main id="main-content" className="flex-1 bg-mm-black pb-24 pt-6 text-mm-cream lg:pt-8">
      <section className="relative h-[min(42vh,380px)] w-full overflow-hidden border-b border-mm-white/10">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mm-black via-mm-black/45 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 lg:p-14">
          <Container>
            <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-mm-light">Careers</p>
            <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-tight">Culture worth experiencing</h1>
            <p className="mt-4 max-w-2xl font-editorial text-mm-cream/85">
              We hire for craft, pace, and proof — tell us how you want to build influence.
            </p>
          </Container>
        </div>
      </section>

      <Container className="mt-14">
        <div className="space-y-3">
          {ROLES.map((r) => (
            <details
              key={r.title}
              className="group overflow-hidden rounded-2xl border border-mm-white/12 bg-mm-white/[0.02] open:border-mm-gold/25"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-sm font-semibold uppercase tracking-[0.12em] text-mm-cream marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="min-w-0">{r.title}</span>
                <span className="shrink-0 text-[10px] font-semibold tracking-[0.28em] text-mm-gold">{r.location}</span>
              </summary>
              <div className="border-t border-mm-white/10 px-6 py-5 font-editorial text-sm leading-relaxed text-mm-light">
                <p>
                  Share portfolio + role fit to{" "}
                  <a href="mailto:careers@mediamantraglobal.com" className="text-mm-gold underline-offset-4 hover:underline">
                    careers@mediamantraglobal.com
                  </a>
                  . We review every note within two weeks.
                </p>
              </div>
            </details>
          ))}
        </div>
      </Container>

      <Container className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 rounded-[2rem] border border-mm-white/10 bg-mm-white/[0.02] p-8">
          <h2 className="font-display text-xl">How we hire</h2>
          <p className="font-editorial text-mm-light">
            Shortlist → craft conversation → scenario session with strategists → offer. Hybrid-friendly across studios.
          </p>
          <Link href="/contact" className="inline-flex text-[11px] font-semibold uppercase tracking-[0.28em] text-mm-gold">
            Ask a question →
          </Link>
        </div>

        <form
          className="space-y-5 rounded-[2rem] border border-mm-white/15 bg-mm-black/80 p-8 backdrop-blur-xl"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <label className="block text-xs uppercase tracking-[0.25em] text-mm-light">
            Full Name
            <input required className="mt-3 w-full rounded-xl border border-mm-white/15 bg-mm-black/35 px-4 py-3 text-sm outline-none ring-mm-gold/40 focus:ring-2" />
          </label>
          <label className="block text-xs uppercase tracking-[0.25em] text-mm-light">
            Email
            <input type="email" required className="mt-3 w-full rounded-xl border border-mm-white/15 bg-mm-black/35 px-4 py-3 text-sm outline-none ring-mm-gold/40 focus:ring-2" />
          </label>
          <label className="block text-xs uppercase tracking-[0.25em] text-mm-light">
            Role Interest
            <input className="mt-3 w-full rounded-xl border border-mm-white/15 bg-mm-black/35 px-4 py-3 text-sm outline-none ring-mm-gold/40 focus:ring-2" />
          </label>
          <label className="block text-xs uppercase tracking-[0.25em] text-mm-light">
            Portfolio / Links
            <textarea rows={4} className="mt-3 w-full rounded-xl border border-mm-white/15 bg-mm-black/35 px-4 py-3 text-sm outline-none ring-mm-gold/40 focus:ring-2" />
          </label>
          <Button type="submit">Submit Interest</Button>
          {sent ? <p className="text-xs text-mm-gold">Transmission received — our talent desk will revert shortly.</p> : null}
        </form>
      </Container>
    </main>
  );
}
