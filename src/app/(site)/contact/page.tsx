"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main id="main-content" className="flex-1 bg-mm-black pb-24 pt-28 text-mm-cream lg:pt-36">
      <Container>
        <SectionLabel>Contact</SectionLabel>
        <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.65rem,5vw,4.25rem)] font-semibold">Contact.</h1>
        <p className="mt-6 max-w-2xl text-xl font-editorial leading-relaxed text-mm-cream md:text-2xl">
          Let&apos;s chat. Get in touch by phone, email or just pop in.
        </p>
      </Container>

      <Container className="mt-14 grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-mm-gold">Email</p>
            <a href="mailto:hello@mediamantraglobal.com" className="mt-2 block text-lg text-mm-cream hover:underline">
              hello@mediamantraglobal.com
            </a>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-mm-gold">Studios</p>
            <p className="mt-2 text-mm-light">New Delhi · Dubai · Singapore</p>
          </div>
          <Link href="/careers" className="text-sm font-semibold uppercase tracking-[0.25em] text-mm-gold">
            Explore careers →
          </Link>
        </div>

        <form
          className="space-y-5 rounded-[2rem] border border-mm-white/15 bg-mm-white/[0.03] p-8 backdrop-blur-2xl"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <label className="block text-xs uppercase tracking-[0.25em] text-mm-light">
            Name
            <input required className="mt-3 w-full rounded-xl border border-mm-white/15 bg-mm-black/45 px-4 py-3 text-sm outline-none ring-mm-gold/40 focus:ring-2" />
          </label>
          <label className="block text-xs uppercase tracking-[0.25em] text-mm-light">
            Work Email
            <input type="email" required className="mt-3 w-full rounded-xl border border-mm-white/15 bg-mm-black/45 px-4 py-3 text-sm outline-none ring-mm-gold/40 focus:ring-2" />
          </label>
          <label className="block text-xs uppercase tracking-[0.25em] text-mm-light">
            Organization
            <input className="mt-3 w-full rounded-xl border border-mm-white/15 bg-mm-black/45 px-4 py-3 text-sm outline-none ring-mm-gold/40 focus:ring-2" />
          </label>
          <label className="block text-xs uppercase tracking-[0.25em] text-mm-light">
            Brief Summary
            <textarea required rows={5} className="mt-3 w-full rounded-xl border border-mm-white/15 bg-mm-black/45 px-4 py-3 text-sm outline-none ring-mm-gold/40 focus:ring-2" />
          </label>
          <Button type="submit" className="w-full">
            Send secure note
          </Button>
          {sent ? (
            <p className="text-center text-xs text-mm-gold">Message captured — strategy desk will coordinate follow-up.</p>
          ) : null}
        </form>
      </Container>
    </main>
  );
}
