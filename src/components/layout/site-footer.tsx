import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  footerColumns,
  footerQuickLinks,
  offices,
  socialLinks,
} from "@/data/navigation";
import { footerSeoParagraph, footerServicesLine } from "@/data/home-content";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-mm-white/10 bg-mm-black">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mm-gold/70 to-transparent" />
      <Container className="py-16 lg:py-24">
        <div className="flex flex-wrap justify-between gap-x-10 gap-y-6 border-b border-mm-white/10 pb-12">
          {footerQuickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold uppercase tracking-[0.32em] text-mm-light transition hover:text-mm-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="grid gap-12 pt-14 lg:grid-cols-[1.3fr_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="font-display text-xl font-semibold uppercase tracking-[0.28em] text-mm-cream md:text-2xl">
              {siteConfig.name}
            </p>
            <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.35em] text-mm-gold">Offices</p>
            <p className="mt-4 text-sm leading-relaxed text-mm-cream sm:text-base">
              {offices.map((o) => o.region).join("  ·  ")}
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {offices.map((o) => (
                <div key={o.region}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-mm-light">{o.region}</p>
                  {o.lines.map((line) => (
                    <p key={line} className="mt-2 font-editorial text-sm text-mm-light/90">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-mm-gold">Services</p>
              <p className="mt-5 font-editorial text-sm leading-relaxed text-mm-light/90 md:text-base">
                {footerServicesLine}
              </p>
            </div>
          </div>

          <nav className="grid gap-10 sm:grid-cols-2 lg:gap-12" aria-label="Footer navigation">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-mm-gold">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-mm-light transition hover:text-mm-cream hover:underline hover:decoration-mm-gold/60"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-mm-white/10 pt-12">
          <a
            href={socialLinks.linkedin}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-mm-white/10 text-mm-cream transition hover:border-mm-gold hover:text-mm-gold"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href={socialLinks.instagram}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-mm-white/10 text-mm-cream transition hover:border-mm-gold hover:text-mm-gold"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href={socialLinks.x}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-mm-white/10 text-mm-cream transition hover:border-mm-gold hover:text-mm-gold"
            aria-label="X"
          >
            <FaXTwitter />
          </a>
          <span className="hidden text-mm-white/25 sm:inline" aria-hidden>
            /
          </span>
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-mm-gold">{siteConfig.name}</p>
        </div>

        <div className="mt-12 border-t border-mm-white/10 pt-10">
          <p className="font-editorial text-[15px] leading-[1.8] text-mm-light/90 md:text-[1.05rem]">{footerSeoParagraph}</p>
          <p className="mt-8 text-[11px] text-mm-light/40">
            © {new Date().getFullYear()} {siteConfig.legalName}.
          </p>
        </div>
      </Container>
    </footer>
  );
}
