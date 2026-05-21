"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";

/** Official identity lockup — full-colour PNG (`public/brand/mm-global-lockup.png`). */
const LOGO_SRC = "/brand/mm-global-lockup.png";

type LogoVariant = "onDark" | "onLight";

type Props = {
  variant: LogoVariant;
  /** When false, still shows full lockup (PNG includes wordmark). */
  wordmark?: boolean;
  /** Unused — raster lockup already uses caps wordmark. */
  captionCaps?: boolean;
  /** Nav: compact height. Footer: slightly taller + optional lines below image. */
  density?: "compact" | "full";
  className?: string;
};

/**
 * Approved brand lockup (`public/brand/mm-global-lockup.png`).
 * Dark UI surfaces use a light backing so colours stay accurate (asset ships on white).
 */
export function MediaMantraLogo({
  variant,
  wordmark = true,
  captionCaps: _captionCaps = false,
  density = "compact",
  className,
}: Props) {
  const sub = variant === "onDark" ? "text-mm-light group-hover:text-mm-cream/90" : "text-mm-graphite/90";

  const backing =
    variant === "onDark"
      ? "rounded-lg bg-mm-cream px-2 py-px shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] ring-1 ring-black/10 sm:px-3 sm:py-0.5"
      : "rounded-lg bg-mm-white px-2 py-px ring-1 ring-mm-graphite/15 sm:px-3 sm:py-0.5";

  const imgHeight =
    density === "full" ? "h-[116px] sm:h-[136px]" : "h-[88px] sm:h-[96px] md:h-[104px]";

  return (
    <span className={cn("group inline-flex flex-col items-start gap-3", className)}>
      <span className={cn("inline-flex shrink-0 items-center justify-center", backing)}>
        <Image
          src={LOGO_SRC}
          alt="Media Mantra Global"
          width={1024}
          height={413}
          sizes={
            density === "compact"
              ? "(max-width: 768px) 360px, 440px"
              : "(max-width: 768px) 400px, 480px"
          }
          className={cn(
            "block w-auto max-w-none object-contain object-center align-top leading-none",
            imgHeight,
          )}
          priority={density === "compact"}
          draggable={false}
        />
      </span>

      {wordmark && density === "full" ? (
        <span className={cn("text-[7px] font-medium uppercase tracking-[0.42em]", sub)}>
          India · UAE · Singapore
        </span>
      ) : null}
    </span>
  );
}
