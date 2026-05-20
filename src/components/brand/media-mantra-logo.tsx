import { cn } from "@/lib/cn";

const GOLD = "#D2B450";
const NAVY = "#191970";

type LogoVariant = "onDark" | "onLight";

/**
 * Stylized intertwined "mm" mark — mantra gold (#D2B450) + mantra navy (#191970).
 * On dark surfaces, second arches use cream/white per brand reversed lockup.
 */
export function LogoMark({ variant, className }: { variant: LogoVariant; className?: string }) {
  const secondary = variant === "onDark" ? "#ffffe3" : NAVY;
  /** Four rounded arches clipped to upper band — evokes brand “four arches” system */
  const id = variant === "onDark" ? "mm-clip-dark" : "mm-clip-light";

  return (
    <svg
      viewBox="0 0 112 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <defs>
        <clipPath id={id}>
          <rect x="2" y="0" width="108" height="36" ry="4" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>
        <ellipse cx="38" cy="52" rx="34" ry="42" fill={GOLD} />
        <ellipse cx="74" cy="52" rx="34" ry="42" fill={secondary} />
      </g>
      {/* Subtle grounding line — aligns with letterhead divider */}
      <path
        d="M14 52h84"
        stroke={GOLD}
        strokeOpacity={0.75}
        strokeWidth={1}
        strokeLinecap="round"
      />
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
 * Brand lockup: intertwined mm + wordmark (guideline colours & reversed-on-dark behaviour).
 */
export function MediaMantraLogo({
  variant,
  wordmark = true,
  captionCaps = false,
  density = "compact",
  className,
}: Props) {
  const titleClass =
    variant === "onDark" ? "text-mm-cream group-hover:text-mm-gold" : "text-[#191970] group-hover:text-mm-royal";
  const sub = variant === "onDark" ? "text-mm-light group-hover:text-mm-cream/90" : "text-mm-graphite";

  return (
    <span className={cn("inline-flex flex-col items-start gap-1.5", className)}>
      <LogoMark variant={variant} className="h-9 w-[4.85rem] sm:h-10 sm:w-[5.35rem]" />
      {wordmark ? (
        captionCaps ? (
          <span
            className={cn(
              "font-display text-[9px] font-semibold uppercase tracking-[0.42em]",
              variant === "onDark" ? "text-mm-cream" : "text-mm-royal",
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
                    variant === "onDark" ? "text-mm-gold/90" : "text-mm-royal/85",
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
