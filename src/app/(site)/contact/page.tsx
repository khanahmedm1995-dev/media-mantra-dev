"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main id="main-content" className="flex-1">
      <section className="relative h-[min(38vh,320px)] w-full overflow-hidden border-b border-mm-graphite/15">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mm-graphite/90 via-mm-graphite/35 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 lg:p-12">
          <Container className="max-w-[1400px]">
            <h1 className="max-w-3xl font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold uppercase leading-tight tracking-[0.02em] text-mm-cream">
              Contact
            </h1>
            <p className="mt-4 max-w-xl font-editorial text-mm-cream/85">India · UAE · Singapore — we&apos;ll route you to the right desk.</p>
          </Container>
        </div>
      </section>

      <section className="bg-mm-white py-14 text-mm-graphite lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="space-y-10 border-b border-mm-graphite/10 pb-10 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-mm-graphite/50">Email</p>
              <a href="mailto:hello@mediamantraglobal.com" className="mt-2 block text-lg text-mm-brand-navy hover:underline">
                hello@mediamantraglobal.com
              </a>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-mm-graphite/50">Offices</p>
              <p className="mt-2 max-w-sm font-editorial text-mm-graphite/80">New Delhi · Dubai · Singapore</p>
            </div>
            <Link href="/careers" className="inline-flex text-sm font-semibold uppercase tracking-[0.25em] text-mm-brand-navy hover:text-mm-graphite">
              Explore careers →
            </Link>
          </div>

          <div className="rounded-[1.75rem] border border-mm-graphite/10 bg-mm-graphite px-6 py-8 text-mm-cream shadow-[0_24px_80px_-40px_rgba(0,0,0,0.35)] sm:px-8 sm:py-10">
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label className="block text-xs uppercase tracking-[0.25em] text-mm-light">
                Name
                <input required className="mt-3 w-full rounded-xl border border-mm-white/15 bg-mm-black/45 px-4 py-3 text-sm text-mm-cream outline-none ring-mm-gold/40 focus:ring-2" />
              </label>
              <label className="block text-xs uppercase tracking-[0.25em] text-mm-light">
                Work Email
                <input type="email" required className="mt-3 w-full rounded-xl border border-mm-white/15 bg-mm-black/45 px-4 py-3 text-sm text-mm-cream outline-none ring-mm-gold/40 focus:ring-2" />
              </label>
              <label className="block text-xs uppercase tracking-[0.25em] text-mm-light">
                Organization
                <input className="mt-3 w-full rounded-xl border border-mm-white/15 bg-mm-black/45 px-4 py-3 text-sm text-mm-cream outline-none ring-mm-gold/40 focus:ring-2" />
              </label>
              <label className="block text-xs uppercase tracking-[0.25em] text-mm-light">
                Brief Summary
                <textarea required rows={5} className="mt-3 w-full rounded-xl border border-mm-white/15 bg-mm-black/45 px-4 py-3 text-sm text-mm-cream outline-none ring-mm-gold/40 focus:ring-2" />
              </label>
              <Button type="submit" className="w-full">
                Send secure note
              </Button>
              {sent ? (
                <p className="text-center text-xs text-mm-gold">Message captured — strategy desk will coordinate follow-up.</p>
              ) : null}
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}
