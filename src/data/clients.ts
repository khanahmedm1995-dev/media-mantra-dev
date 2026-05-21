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

/**
 * When Drive assets land: map exact `clientLogos` string → public path under `/clients/…`
 * (SVG or PNG). Example: `{ Sony: "/clients/sony.svg" }`
 */
export const clientLogoFiles: Partial<Record<(typeof clientLogos)[number], string>> = {};

export function getClientLogoSrc(brandName: string): string | undefined {
  return (clientLogoFiles as Record<string, string | undefined>)[brandName];
}
