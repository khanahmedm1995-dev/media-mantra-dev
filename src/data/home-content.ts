/**
 * Homepage & global marketing copy — aligned with approved website brief (Sections 1–8).
 */

const introParagraphs = [
  "We are an independent global integrated communications agency Powered by AI. Driven by creativity. Defined by strategy.",
  "We are built for what's next, fueled by 13 years of experience turning bold ideas into measurable results. We started in traditional PR, grew into digital, and today we operate as a fully integrated communications agency, the only way we know how to work. From influencer ecosystems that move culture to digital and PR strategies that dominate search, we make communications the sharpest pillar of your marketing, whether the objective is a global launch, a viral strategy, or category ownership that lasts. Ranked the third-fastest growing agency in AMEA by PRovoke Media four times running, we measure success in categories owned and campaigns that people actually remember.",
] as const;

export const homeHero = {
  lines: ["Beyond communications.", "Global influence."] as const,
  lead: "India · UAE · Singapore · One integrated network.",
  badge: "",
} as const;

export const homeHeroStory = [introParagraphs[0], introParagraphs[1]] as const;

export const homeHeroAside = ["India · UAE · Singapore · One integrated network.", "13 years shaping narratives that compound."];

export const homeIntro = {
  label: "Introduction",
  paragraphs: [...introParagraphs],
} as const;

export const homeLocations = {
  label: "Locations",
  paragraph:
    "India. UAE. Singapore. Three of the world's most distinct markets, and we don't just operate in them, we live in them. Our integrated international network brings a global vision to every brief with a local understanding of every market, the same uncompromising standard of quality in every relationship, here and everywhere else we work.",
} as const;

/** Hero — second word gets blue highlight (`HomeHeroSection`). Leave empty to hide banner headline. */
export const homeHopscotchHero = {
  headline: "",
  subline: introParagraphs[0],
  tradeLinks: [
    { label: "Powered by AI", href: "/about" },
    { label: "Driven by creativity", href: "/about" },
    { label: "Defined by strategy", href: "/about" },
  ],
  discoverLabel: "Explore",
  discoverHref: "#intro-split" as const,
} as const;

/** Section 2 — intro split under video banner */
export const homeHopIntroSplit = {
  headline: "Beyond communications.\nWe are global influence.",
  paragraphs: introParagraphs,
  cta: { label: "Learn more", href: "/about" as const },
} as const;

export const homeCsrBand = {
  label: "CSR",
  headline: "Responsible creativity at the centre of how we build influence.",
  body:
    "Our strength lies in the quality of connections we build with audiences and communities. Sustainability and ethics inform how we counsel leadership, produce campaigns, and show up in sensitive markets.",
  cta: { label: "Our approach", href: "/about" as const },
} as const;

export const homeExpertiseHub = {
  label: "Our trades and sectors",
  headline:
    "360° communications expertise calibrated for boards, scrutiny, and market velocity.",
  intro:
    "Media Mantra Global combines editorial instinct with digital orchestration across India, the UAE, and Singapore — the same uncompromising standard in every market relationship.",
  follow:
    "From transformation mandates to launches, reputational arcs, visibility, retention, engagement, or category ownership — integrated is how we've always operated.",
  cta: { label: "Our expertise", href: "/services" as const },
} as const;

export const homeNetworkBand = {
  label: "Network",
  headline: "One command layer. Three commanding markets.",
  body: "India · UAE · Singapore — integrated counsel for boards, scrutiny, and velocity.",
  linkLabel: "Contact us",
  linkHref: "/contact" as const,
} as const;

export const homePeopleBand = {
  label: "People",
  headline: "Bold, founder-led practitioners — built for prestige and pace.",
  body: "Practitioner-led teams across India, UAE, and Singapore — built for prestige, pace, and proof.",
  cta: { label: "Join our talents", href: "/careers" as const },
  image:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
} as const;

export const homeInsightsRibbon = {
  label: "Insights",
  cta: { label: "View all", href: "/blog" as const },
} as const;

export type HomeHopNewsCard = {
  href: string;
  title: string;
  dek: string;
  category: string;
  date: string;
  coverImage: string;
  brandTag: string;
  ctaLabel: string;
};

export const homeHopNewsPreview: readonly HomeHopNewsCard[] = [
  {
    href: "/blog",
    title: "Latest perspective",
    dek: "Notes from our desks — sharper briefs start with sharper reading.",
    category: "Strategy",
    date: "2026-05-01",
    coverImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=70",
    brandTag: "Media Mantra Global",
    ctaLabel: "Read insight",
  },
] as const;

export const homeContactStrip = {
  label: "Contact",
  headline: "Let's Build Influence Together",
  lines: [
    "Your brand deserves to be known. Loudly. In the right rooms. Across the right markets.",
    "Let's figure out what that looks like, together.",
  ],
  primaryCta: "Get in Touch",
} as const;

/** Section 4 — clients marquee lead-in */
export const homeClientsLead = {
  eyebrow: "Trusted globally",
  title: "Our Clients",
  description:
    "From Fortune 500 leaders to disruptive challengers, we help brands command influence where it matters most.",
} as const;

/** Section 5 — proven metrics */
export const homeProven = {
  label: "Proven results across markets",
  headline: "Proven Results Across Markets",
  intro: "Numbers built across India, UAE & Singapore.",
  stats: [
    {
      key: "placements",
      label: "500+ MEDIA PLACEMENTS",
      dek: "Top-tier print, digital & broadcast coverage across 3 markets.",
      value: 500,
      suffix: "+" as const,
      displayType: "int" as const,
    },
    {
      key: "brands",
      label: "600+ BRANDS SERVED",
      dek: "Startups to Fortune 500s, across every growth stage.",
      value: 600,
      suffix: "+" as const,
      displayType: "int" as const,
    },
    {
      key: "visibility",
      label: "3X AVERAGE VISIBILITY INCREASE",
      dek: "Share of voice tripled, measurable, documented, repeatable.",
      value: 3,
      suffix: "X" as const,
      displayType: "mult" as const,
    },
    {
      key: "industries",
      label: "25+ INDUSTRIES COVERED",
      dek: "Tech · FMCG · Finance · Real Estate · Health · Luxury & more.",
      value: 25,
      suffix: "+" as const,
      displayType: "int" as const,
    },
  ],
};

export const homeFrameworkIntro = {
  label: "Framework",
  headline: "How we ship outcomes",
  description: "",
};

/** Section 6 — work preview */
export const homeWork = {
  sectionLabel: "Our Work",
  label: "Case Studies",
  headline: "We Let the Work Talk.",
  description: "Ideas truly worth their weight in gold across India, UAE, and Singapore",
} as const;

export const homeInsights = {
  label: "Insights",
  headline: "Thinking out loud.",
  description: "Notes from our desks — sharper briefs start with sharper reading.",
};

export const homeCta = {
  headline: "Let's Build Influence Together",
  description:
    "Your brand deserves to be known. Loudly. In the right rooms. Across the right markets. Let's figure out what that looks like, together.",
  primary: { label: "Get in Touch", href: "/contact" },
  secondary: { label: "See Our Work", href: "/case-studies" },
};

/** Section 8 — SEO footer paragraph */
export const footerSeoParagraph =
  "Media Mantra Global is a leading global PR & integrated communications firm with presence in India, UAE, and Singapore. We work with high-growth brands, ambitious founders, and category-defining companies to build media visibility, digital authority, and the kind of influence that actually changes markets. If you're looking for the best PR agency in India, a trusted PR agency UAE, or PR Services in Singapore , you just found it.";

export const footerServicesLine =
  "Strategic PR & Media Relations · Founder & Leadership Branding · Digital PR & SEO Authority · Global Market Entry PR · Reputation & Crisis Management · Influencer Marketing · SEO & Performance Marketing";

export const homeHopFooterLead = {
  discoverLabel: "View selected work",
} as const;
