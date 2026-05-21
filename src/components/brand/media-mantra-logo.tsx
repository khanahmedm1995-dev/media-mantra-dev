"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";

const GOLD = "#D2B450";
/** Mantra Navy — identity manual (second “mm” pair) */
const NAVY = "#191970";

type LogoVariant = "onDark" | "onLight";

/**
 * Brand **mm** symbol — joined lowercase *mm*: first pair Mantra Gold, second pair Mantra Navy
 * (Print & environment / brand applications).
 */
export function LogoMark({ variant: _variant, className }: { variant: LogoVariant; className?: string }) {
  const clipId = `mm-band-${useId().replace(/:/g, "")}`;

  return (
    <svg
      viewBox="0 0 108 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <defs>
        <clipPath id={clipId}>
          <rect width="108" height="18" x="0" y="0" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <ellipse cx="20" cy="34" rx="19" ry="30" fill={GOLD} />
        <ellipse cx="38" cy="34" rx="19" ry="30" fill={GOLD} />
        <ellipse cx="62" cy="34" rx="19" ry="30" fill={NAVY} />
        <ellipse cx="80" cy="34" rx="19" ry="30" fill={NAVY} />
      </g>
      <path d="M10 18h88" stroke={GOLD} strokeWidth="1.15" strokeLinecap="round" opacity={0.9} />
    </svg>
  );
}

type Props = {
  variant: LogoVariant;
  /** Mark + wordmark lines */
  wordmark?: boolean;
  /** Alternate lockup: all-caps wordmark under mark */
  captionCaps?: boolean;
  /** Nav bar: slim stack. Footer: adds gold tagline + markets line */
  density?: "compact" | "full";
  className?: string;
};

/**
 * Full lockup: mm mark + “Media Mantra Global” (sans wordmark styling).
 */
export function MediaMantraLogo({
  variant,
  wordmark = true,
  captionCaps = false,
  density = "compact",
  className,
}: Props) {
  const titleClass =
    variant === "onDark"
      ? "text-mm-cream group-hover:text-mm-gold"
      : "text-mm-graphite group-hover:text-mm-ink";
  const sub = variant === "onDark" ? "text-mm-light group-hover:text-mm-cream/90" : "text-mm-graphite/90";

  return (
    <span className={cn("inline-flex flex-col items-start gap-1.5", className)}>
      <LogoMark variant={variant} className="h-9 w-[5.1rem] sm:h-10 sm:w-[5.65rem]" />
      {wordmark ? (
        captionCaps ? (
          <span
            className={cn(
              "font-display text-[9px] font-semibold uppercase tracking-[0.42em]",
              variant === "onDark" ? "text-mm-cream" : "text-mm-graphite",
            )}
          >
            Media Mantra Global
          </span>
        ) : (
          <>
            <span className={cn("font-display text-[0.6875rem] font-medium leading-none tracking-[0.14em]", titleClass)}>
              Media Mantra Global
            </span>
            {density === "full" ? (
              <>
                <span
                  className={cn(
                    "font-display text-[8px] font-semibold uppercase tracking-[0.38em]",
                    variant === "onDark" ? "text-mm-gold/90" : "text-mm-gold/90",
                  )}
                >
                  Integrated communications
                </span>
                <span className={cn("text-[7px] font-medium uppercase tracking-[0.42em]", sub)}>
                  India · UAE · Singapore
                </span>
              </>
            ) : null}
          </>
        )
      ) : null}
    </span>
  );
}
