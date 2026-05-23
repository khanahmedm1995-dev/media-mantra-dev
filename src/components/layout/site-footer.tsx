import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { footerQuickLinks, offices, socialLinks } from "@/data/navigation";
import { footerSeoParagraph, footerServicesLine } from "@/data/home-content";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { MediaMantraLogo } from "@/components/brand/media-mantra-logo";

/** Site footer — graphite (not black), concise row + legal copy (no mega column grid). */
export function SiteFooter() {
  return (
    <footer className="relative mt-20 border-t border-mm-white/[0.07] bg-mm-graphite">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mm-gold/35 to-transparent" />
      <Container className="py-10 lg:py-14">
        <div className="flex flex-col gap-8 pb-8 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-x-10">
          <Link href="/" className="group inline-flex max-w-fit" aria-label="Media Mantra Global — Home">
            <MediaMantraLogo variant="onDark" density="full" />
          </Link>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="hidden h-10 w-px bg-mm-white/15 sm:block" aria-hidden />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-gold">Offices</p>
              <p className="mt-2 text-sm text-mm-light">{offices.map((o) => o.region).join(" | ")}</p>
            </div>
          </div>
        </div>

        <nav className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-b border-mm-white/[0.08] pb-8" aria-label="Footer quick links">
          {footerQuickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[10px] font-semibold uppercase tracking-[0.3em] text-mm-light transition hover:text-mm-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-10 text-sm leading-relaxed text-mm-light/85 lg:max-w-4xl">{footerSeoParagraph}</p>

        <p className="mt-6 text-sm leading-relaxed text-mm-light/80">{footerServicesLine}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4 pt-8">
          <a
            href={socialLinks.linkedin}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-mm-white/12 text-mm-cream transition hover:border-mm-gold hover:text-mm-gold"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-sm" />
          </a>
          <a
            href={socialLinks.instagram}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-mm-white/12 text-mm-cream transition hover:border-mm-gold hover:text-mm-gold"
            aria-label="Instagram"
          >
            <FaInstagram className="text-sm" />
          </a>
          <a
            href={socialLinks.x}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-mm-white/12 text-mm-cream transition hover:border-mm-gold hover:text-mm-gold"
            aria-label="X"
          >
            <FaXTwitter className="text-sm" />
          </a>
          <span className="mx-1 hidden text-mm-white/25 sm:inline" aria-hidden>
            /
          </span>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mm-light">
            © {new Date().getFullYear()} {siteConfig.legalName}.
          </p>
        </div>
      </Container>
    </footer>
  );
}
