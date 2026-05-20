"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt2, HiChevronDown, HiX } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { MediaMantraLogo } from "@/components/brand/media-mantra-logo";
import { useContactLead } from "@/components/contact/contact-lead-context";

export function SiteHeader() {
  const pathname = usePathname();
  const { openContact } = useContactLead();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMegaOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setMegaOpen(false), 160);
  }, [cancelClose]);

  useEffect(() => () => cancelClose(), [cancelClose]);

  const navLinkClass = (href: string) =>
    cn(
      "group relative text-[11px] font-semibold uppercase tracking-[0.26em] text-mm-light transition hover:text-mm-cream",
      (href === "/blog" ? pathname.startsWith("/blog") : pathname === href) && "text-mm-cream",
    );

  const isServicesActive =
    pathname === "/services" || pathname.startsWith("/services/");

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[120] transition-all duration-500",
          scrolled
            ? "border-b border-mm-white/5 bg-mm-black/60 py-3 backdrop-blur-2xl"
            : "bg-gradient-to-b from-mm-black/90 via-mm-black/25 to-transparent py-5",
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="group flex items-start"
            aria-label="Media Mantra Global — Home"
          >
            <MediaMantraLogo variant="onDark" density="compact" />
          </Link>

          <nav className="relative hidden items-center gap-8 lg:flex" aria-label="Primary">
            {mainNav.map((item) => {
              if (item.kind === "link") {
                return (
                  <Link key={item.href} href={item.href} className={navLinkClass(item.href)}>
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-mm-gold transition group-hover:scale-x-100",
                        (item.href === "/blog" ? pathname.startsWith("/blog") : pathname === item.href) &&
                          "scale-x-100",
                      )}
                    />
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    setMegaOpen(true);
                  }}
                  onMouseLeave={scheduleClose}
                  onFocus={() => {
                    cancelClose();
                    setMegaOpen(true);
                  }}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) scheduleClose();
                  }}
                  aria-haspopup="dialog"
                  aria-expanded={megaOpen}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.href}
                      className={cn(
                        "group relative text-[11px] font-semibold uppercase tracking-[0.26em] transition hover:text-mm-cream",
                        isServicesActive ? "text-mm-cream" : "text-mm-light",
                      )}
                    >
                      {item.label}
                      <span
                        className={cn(
                          "absolute -bottom-1 left-0 h-px w-full origin-left bg-mm-gold transition",
                          isServicesActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                        )}
                      />
                    </Link>
                    <button
                      type="button"
                      tabIndex={-1}
                      aria-hidden
                      className={cn(
                        "rounded p-0.5 text-mm-light transition hover:text-mm-cream",
                        megaOpen && "text-mm-gold",
                      )}
                    >
                      <HiChevronDown className={cn("h-4 w-4 transition", megaOpen && "rotate-180")} />
                    </button>
                  </div>

                  <AnimatePresence>
                    {megaOpen ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className="pointer-events-auto absolute left-1/2 top-full z-[130] w-[min(92vw,640px)] -translate-x-1/2 pt-3"
                        onMouseEnter={cancelClose}
                        onMouseLeave={scheduleClose}
                      >
                        <div className="overflow-hidden rounded-2xl border border-mm-white/12 bg-mm-midnight/95 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
                          <div className="grid gap-px bg-mm-white/10 sm:grid-cols-2">
                            {item.children.map((svc) => (
                              <Link
                                key={svc.href}
                                href={svc.href}
                                className="group/item flex gap-4 bg-mm-black/90 px-5 py-4 transition hover:bg-mm-white/[0.06]"
                              >
                                <span className="font-display text-[11px] font-semibold tabular-nums tracking-widest text-mm-gold/90">
                                  {String(svc.index).padStart(2, "0")}
                                </span>
                                <span className="text-[12px] font-semibold uppercase leading-snug tracking-[0.12em] text-mm-cream transition group-hover/item:text-mm-gold">
                                  {svc.label}
                                </span>
                              </Link>
                            ))}
                          </div>
                          <div className="border-t border-mm-white/10 bg-mm-black/95 px-5 py-3">
                            <Link
                              href="/services"
                              className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-mm-gold transition hover:text-mm-cream"
                            >
                              All services overview
                              <HiArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="outline" size="sm" type="button" className="border-mm-white/10" onClick={openContact}>
              Get in touch
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-mm-white/15 p-3 text-mm-cream transition hover:border-mm-gold hover:text-mm-gold lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiX className="h-5 w-5" /> : <HiOutlineMenuAlt2 className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobilenav"
            className="fixed inset-0 z-[110] bg-mm-black/95 backdrop-blur-3xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex h-full flex-col gap-8 overflow-y-auto px-10 pb-12 pt-[22vh]" aria-label="Mobile primary">
              {mainNav.map((item, index) =>
                item.kind === "link" ? (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      className="font-display text-3xl uppercase tracking-[0.08em] text-mm-cream"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06 }}
                    className="border-b border-mm-white/10 pb-8"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 text-left font-display text-3xl uppercase tracking-[0.08em] text-mm-cream"
                      aria-expanded={mobileServicesOpen}
                      onClick={() => setMobileServicesOpen((v) => !v)}
                    >
                      Services
                      <HiChevronDown className={cn("h-6 w-6 shrink-0 text-mm-gold transition", mobileServicesOpen && "rotate-180")} />
                    </button>
                    <AnimatePresence initial={false}>
                      {mobileServicesOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-8 space-y-4 pl-2">
                            {item.children.map((svc) => (
                              <li key={svc.href}>
                                <Link
                                  href={svc.href}
                                  className="flex items-baseline gap-3 text-mm-light transition hover:text-mm-gold"
                                >
                                  <span className="font-display text-xs tabular-nums text-mm-gold">
                                    {String(svc.index).padStart(2, "0")}
                                  </span>
                                  <span className="font-editorial text-base text-mm-cream">{svc.label}</span>
                                </Link>
                              </li>
                            ))}
                            <li>
                              <Link
                                href="/services"
                                className="inline-flex items-center gap-2 pt-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-mm-gold"
                              >
                                View all services
                              </Link>
                            </li>
                          </ul>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.div>
                ),
              )}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
