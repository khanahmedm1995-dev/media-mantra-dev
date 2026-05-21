"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";
import { HiEnvelope } from "react-icons/hi2";
import { homeHopFooterLead } from "@/data/home-content";
import { footerQuickLinks, socialLinks } from "@/data/navigation";
import { siteConfig } from "@/lib/site-config";
import { useContactLead } from "@/components/contact/contact-lead-context";

/** Hopscotch-style closing strip — white discover bar + black contact bar (no raster lockup). */
export function HomeHopFooterBand() {
  const { openContact } = useContactLead();

  return (
    <div className="border-t border-mm-graphite/10">
      <div className="bg-mm-white px-6 py-10 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-mm-graphite underline-offset-[10px] transition hover:text-mm-graphite/70"
          >
            <span className="border-b border-mm-graphite pb-0.5 group-hover:border-mm-graphite/40">
              {homeHopFooterLead.discoverLabel}
            </span>
            <HiArrowUpRight className="h-4 w-4" />
          </Link>
          <p className="max-w-md font-editorial text-sm text-mm-graphite/60">{siteConfig.description}</p>
        </div>
      </div>

      <div className="bg-black px-6 py-14 text-mm-cream sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-display text-[10px] font-semibold uppercase tracking-[0.48em] text-mm-cream/60">Media Mantra Global</p>
            <button
              type="button"
              onClick={openContact}
              className="mt-8 inline-flex items-center gap-3 border border-mm-cream/40 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-cream transition hover:border-mm-gold hover:text-mm-gold"
            >
              <HiEnvelope className="h-4 w-4" aria-hidden />
              Contact us
            </button>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-4" aria-label="Footer">
            {footerQuickLinks.slice(0, 6).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="border-b border-transparent text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-cream/70 transition hover:border-mm-gold/50 hover:text-mm-cream"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={socialLinks.linkedin}
              className="text-mm-cream transition hover:text-mm-gold"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-lg" />
            </a>
            <a
              href={socialLinks.instagram}
              className="text-mm-cream transition hover:text-mm-gold"
              aria-label="Instagram"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a href={socialLinks.x} className="text-mm-cream transition hover:text-mm-gold" aria-label="X">
              <FaXTwitter className="text-lg" />
            </a>
          </div>
        </div>
        <p className="mx-auto mt-14 max-w-[1400px] text-center font-mono text-[10px] uppercase tracking-[0.2em] text-mm-cream/45">
          © {new Date().getFullYear()} {siteConfig.legalName ?? siteConfig.name}
        </p>
      </div>
    </div>
  );
}
