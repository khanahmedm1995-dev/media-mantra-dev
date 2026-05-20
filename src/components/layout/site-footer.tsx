import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  footerColumns,
  footerQuickLinks,
  offices,
  socialLinks,
} from "@/data/navigation";
import { footerServicesLine } from "@/data/home-content";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="relative mt-16 border-t border-mm-white/[0.06] bg-mm-midnight/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mm-gold/50 to-transparent" />
      <Container className="py-10 lg:py-14">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-mm-white/[0.06] pb-8">
          <p className="font-display text-[11px] font-semibold uppercase tracking-[0.32em] text-mm-cream">{siteConfig.name}</p>
          <span className="hidden h-3 w-px bg-mm-white/15 sm:block" aria-hidden />
          <p className="text-sm text-mm-light">{offices.map((o) => o.region).join(" · ")}</p>
        </div>

        <nav className="mt-8 flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer quick links">
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

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-mm-gold">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-mm-light transition hover:text-mm-cream"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 line-clamp-3 text-sm leading-relaxed text-mm-light/85">{footerServicesLine}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-mm-white/[0.06] pt-8">
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
