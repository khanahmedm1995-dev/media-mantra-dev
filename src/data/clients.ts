/** Client names — order & spelling from approved website content PDF. */
export const clientLogos = [
  "Sony",
  "BOAT",
  "Falcons of Majlis",
  "Virgio",
  "Vattikuti foundation",
  "ieema",
  "OPG mobility",
  "Elecrama",
  "AIDA",
  "Swastik",
  "BNW Development",
  "Blaupunkt",
  "K-12",
  "ISMA",
  "Acatel",
  "Amirah Developers",
  "Haldirams",
  "Zuari Industries",
  "SYSTRA",
  "LPU",
  "Ministry of Culture",
  "Barista",
  "SebaMed",
  "FORE",
  "Centurion Properties",
  "Wehnk.",
  "Bradford International",
  "NutraONE",
  "Eastman Energy Ltd",
  "Horiba",
  "IVcA - Finance Minister and Niti Ayog",
  "DAV society - Shri Narendar Modi",
  "Crown Prince- Saudi Prince visit to India",
] as const;

/** Homepage pack: `public/clients/logo-01.png` … `logo-29.png` — slots follow `clientLogos` PDF order (first 29 names). Swap/rename files if a logo lands under the wrong brand. */
const MARQUEE_PACK_COUNT = 29;

function marqueeLogoPath(indexOneBased: number): string {
  return `/clients/logo-${String(indexOneBased).padStart(2, "0")}.png`;
}

/**
 * Maps approved PDF-order names → `/clients/logo-NN.png` from the delivered pack.
 * `(SVG or PNG)`. Remaining names render as text until assets are added.
 */
export const clientLogoFiles: Partial<Record<(typeof clientLogos)[number], string>> = Object.fromEntries(
  clientLogos.slice(0, MARQUEE_PACK_COUNT).map((name, i) => [name, marqueeLogoPath(i + 1)]),
) as Partial<Record<(typeof clientLogos)[number], string>>;

export function getClientLogoSrc(brandName: string): string | undefined {
  return (clientLogoFiles as Record<string, string | undefined>)[brandName];
}
