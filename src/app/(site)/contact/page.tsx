"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaClock,
  FaEnvelope,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { contactPageContent } from "@/data/contact-content";
import { socialLinks } from "@/data/navigation";

/** Deck mix: banner image, white column + graphite form card; Offices not Studios; no gold “Contact” eyebrow strip. */
export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const c = contactPageContent;

  return (
    <main id="main-content" className="flex-1">
      <section className="relative h-[min(44vh,400px)] w-full overflow-hidden border-b border-mm-graphite/15">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mm-graphite/95 via-mm-graphite/5 to-mm-graphite/40" />
        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 lg:p-14">
          <Container className="max-w-[1400px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-mm-cream/75">— {c.eyebrow}</p>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(2rem,4.6vw,3.35rem)] font-semibold uppercase leading-[1.05] tracking-[0.02em] text-mm-cream">
              {c.headline}
            </h1>
            <p className="mt-5 max-w-2xl font-editorial text-base leading-relaxed text-mm-cream/88">{c.intro}</p>
          </Container>
        </div>
      </section>

      <section className="relative bg-mm-white py-14 text-mm-graphite lg:py-[4.25rem]">
        <Container className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.06fr)] lg:gap-16 xl:gap-20">
          <div className="space-y-10 lg:pr-4">
            <div className="space-y-6">
              <h2 className="font-display text-xl font-semibold tracking-tight text-mm-graphite md:text-2xl">Our office</h2>
              <ul className="space-y-4 font-editorial text-mm-graphite/82">
                {c.officesLines.map((line) => (
                  <li key={line} className="flex gap-3">
                    <FaMapMarkerAlt className="mt-1 shrink-0 text-mm-brand-navy" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex gap-3">
                <FaPhone className="mt-0.5 shrink-0 text-mm-brand-navy" aria-hidden />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-graphite/45">Phone</p>
                  <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="mt-2 block font-editorial text-mm-graphite hover:underline">
                    {c.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <FaEnvelope className="mt-0.5 shrink-0 text-mm-brand-navy" aria-hidden />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-graphite/45">Email</p>
                  <a href={`mailto:${c.email}`} className="mt-2 block break-all font-editorial text-mm-brand-navy hover:underline">
                    {c.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <FaGlobe className="mt-0.5 shrink-0 text-mm-brand-navy" aria-hidden />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-graphite/45">Website</p>
                  <a href={`https://${c.websiteLabel}`} className="mt-2 block font-editorial text-mm-graphite underline-offset-2 hover:underline">
                    {c.websiteLabel}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <FaClock className="mt-0.5 shrink-0 text-mm-brand-navy" aria-hidden />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-graphite/45">Business hours</p>
                  <p className="mt-2 font-editorial text-sm leading-relaxed text-mm-graphite/82">{c.hours}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-graphite/45">Careers</p>
              <Link href="/careers" className="mt-3 inline-flex text-sm font-semibold text-mm-brand-navy underline-offset-4 hover:underline">
                Explore opportunities →
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={socialLinks.linkedin}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-mm-graphite/15 text-mm-graphite transition hover:border-mm-gold hover:text-mm-gold"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={socialLinks.instagram}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-mm-graphite/15 text-mm-graphite transition hover:border-mm-gold hover:text-mm-gold"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={socialLinks.x}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-mm-graphite/15 text-mm-graphite transition hover:border-mm-gold hover:text-mm-gold"
                aria-label="X"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>

          <div className="rounded-[1.85rem] border border-mm-white/12 bg-mm-graphite px-6 py-9 text-mm-cream shadow-[0_32px_100px_-48px_rgba(0,0,0,0.45)] sm:px-9 sm:py-11">
            <h2 className="font-display text-xl font-semibold text-mm-cream">Send us a message</h2>
            <p className="mt-2 font-editorial text-sm text-mm-light">
              Share a briefing — routing is manual and strategist-led across India, UAE, and Singapore.
            </p>
            <form
              className="mt-10 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-light">
                Your name
                <input
                  required
                  className="mt-3 w-full rounded-xl border border-mm-white/14 bg-mm-black/35 px-4 py-3 text-sm text-mm-cream outline-none ring-mm-gold/35 focus:ring-2"
                />
              </label>
              <label className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-light">
                Your email
                <input
                  type="email"
                  required
                  className="mt-3 w-full rounded-xl border border-mm-white/14 bg-mm-black/35 px-4 py-3 text-sm text-mm-cream outline-none ring-mm-gold/35 focus:ring-2"
                />
              </label>
              <label className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-light">
                Phone number
                <input
                  type="tel"
                  className="mt-3 w-full rounded-xl border border-mm-white/14 bg-mm-black/35 px-4 py-3 text-sm text-mm-cream outline-none ring-mm-gold/35 focus:ring-2"
                />
              </label>
              <label className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-light">
                Company / Organization
                <input className="mt-3 w-full rounded-xl border border-mm-white/14 bg-mm-black/35 px-4 py-3 text-sm text-mm-cream outline-none ring-mm-gold/35 focus:ring-2" />
              </label>
              <label className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-light">
                Subject
                <input className="mt-3 w-full rounded-xl border border-mm-white/14 bg-mm-black/35 px-4 py-3 text-sm text-mm-cream outline-none ring-mm-gold/35 focus:ring-2" />
              </label>
              <label className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-light">
                Your message
                <textarea required rows={5} className="mt-3 w-full rounded-xl border border-mm-white/14 bg-mm-black/35 px-4 py-3 text-sm text-mm-cream outline-none ring-mm-gold/35 focus:ring-2" />
              </label>
              <label className="flex gap-3 text-xs leading-snug text-mm-light/95">
                <input type="checkbox" required className="mt-0.5" />
                <span>I agree to the Privacy Policy and Terms regarding this inquiry.</span>
              </label>
              <Button type="submit" className="w-full">
                Send message
              </Button>
              {sent ? (
                <p className="text-center text-xs text-mm-gold">Note received — coordination desk replies within two business days.</p>
              ) : null}
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}
