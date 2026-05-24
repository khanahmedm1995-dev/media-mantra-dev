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
    "India · UAE · Singapore — one network, local fluency, one standard of craft.",
} as const;

/** Hero — video only on homepage: leave strings empty (no overlay copy over the film). */
export const homeHopscotchHero = {
  headline: "",
  subline: "",
  tradeLinks: [] as readonly { label: string; href: string }[],
  discoverLabel: "",
  discoverHref: "#expertise" as const,
} as const;

/** Section 2 — homepage intro: minimal copy; full story on /about */
export const homeHopIntroSplit = {
  sectionLabel: "Intro",
  headline: "Beyond communications.\nWe are global influence.",
  paragraphs: [
    "Independent integrated communications across India, the UAE & Singapore — powered by AI, creativity, and strategy. The full story is on About.",
  ] as const,
  imageSrc:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=82",
  imageAlt: "Team collaborating on communications strategy",
  cta: { label: "About", href: "/about" as const },
} as const;

export const homeCsrBand = {
  label: "CSR",
  headline: "Responsible creativity at the centre of how we build influence.",
  body:
    "Our strength lies in the quality of connections we build with audiences and communities. Sustainability and ethics inform how we counsel leadership, produce campaigns, and show up in sensitive markets.",
  cta: { label: "Our approach", href: "/about" as const },
} as const;

/** Homepage band under hero — intro: white two-column layout (deck); paste final copy from Content Doc when ready. */
export const homeExpertiseHub = {
  label: "Our trades and sectors",
  headline:
    "360° communications expertise calibrated for boards, scrutiny, and market velocity.",
  intro:
    "Media Mantra Global combines editorial instinct with digital orchestration across India, the UAE, and Singapore — the same uncompromising standard in every market relationship.",
  follow:
    "From transformation mandates to launches, reputational arcs, visibility, retention, engagement, or category ownership — integrated is how we've always operated.",
  cta: { label: "Our expertise", href: "/services" as const },
  /** Swap for client asset — `docs/CLIENT_IMAGE_SPECS.md` */
  imageSrc:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=82",
  imageAlt: "Strategy and analytics on laptop — communications capability",
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
  label: "Our last news",
  cta: { label: "All blogs", href: "/blog" as const },
} as const;

export const homeContactStrip = {
  label: "Contact",
  headline: "Let's build influence together",
  lines: ["India · UAE · Singapore — tell us what you're building next."] as const,
  primaryCta: "Get in Touch",
} as const;

/** Section 4 — clients marquee lead-in */
export const homeClientsLead = {
  eyebrow: "",
  title: "Our Clients",
  description: "From Fortune 500s to challengers — influence where it counts.",
} as const;

/** Section 5 — proven metrics */
export const homeProven = {
  label: "Proven results across markets",
  headline: "Proven Results Across Markets",
  intro: "",
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
  label: "Media Mantra Global Framework",
  /** Primary line — reference deck “disciplines” headline */
  headline: "Six disciplines.",
  headlineAccent: "One unified intelligence.",
  description: "",
} as const;

/** Section 6 — work preview */
export const homeWork = {
  sectionLabel: "Our work",
  label: "Case Studies",
  headline: "We let the work talk",
  description: "",
} as const;

export const homeInsights = {
  label: "Blogs",
  headline: "Notes from our teams",
  description: "Practical perspective on communications, markets, and craft.",
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
  "Strategic PR & Media Relations | Founder & Leadership Branding | Digital PR & SEO Authority | Global Market Entry PR | Reputation & Crisis Management | Influencer Marketing | SEO & Performance Marketing";

export const homeHopFooterLead = {
  discoverLabel: "Discover our work",
} as const;

/** Homepage black footer — section 8 (also uses `footerSeoParagraph`, `footerServicesLine`) */
export const homePageFooter = {
  officesHeading: "Offices",
  officesLine: "India | UAE | Singapore",
  servicesHeading: "Services",
  tagline: "Media Mantra Global",
} as const;
