"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CareersPage() {
  const [sent, setSent] = useState(false);

  return (
    <main id="main-content" className="flex-1 bg-mm-black pb-24 pt-6 text-mm-cream lg:pt-8">
      <Container>
        <SectionLabel>Careers</SectionLabel>
        <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.65rem,5vw,4.25rem)] font-semibold">Culture worth experiencing</h1>
        <p className="mt-8 max-w-3xl font-editorial text-lg leading-[1.9] text-mm-light">
          Every bold idea we&apos;ve ever launched came from someone who was encouraged to think bigger. And it&apos;s
          not because of the foosball tables and Fridays off. It&apos;s the energy of a team that runs at problems, not away
          from them — people who question the obvious, chase the uncomfortable, and show up with something to prove.
        </p>
      </Container>

      <Container className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-[2rem] border border-mm-white/10 bg-mm-white/[0.02] p-8">
          <h2 className="font-display text-2xl">Open Studios</h2>
          <ul className="space-y-5 text-mm-light">
            <li>Managing Consultant — Narrative Strategy (Delhi)</li>
            <li>Senior Media Relations Lead — Mobility (Dubai)</li>
            <li>Associate Creative Director — Film & Sonic (Singapore)</li>
            <li>Intelligence Analyst — Predictive Signals (Hybrid)</li>
          </ul>
          <p className="text-sm text-mm-light">
            Send portfolio + rationale to{" "}
            <a href="mailto:careers@mediamantraglobal.com" className="text-mm-gold underline-offset-4 hover:underline">
              careers@mediamantraglobal.com
            </a>
          </p>
        </div>

        <form
          className="space-y-5 rounded-[2rem] border border-mm-white/15 bg-mm-royal/15 p-8 backdrop-blur-xl"
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
