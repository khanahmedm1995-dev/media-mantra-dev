/** Homepage & global chrome — source: `Media Mantra Global Website Content` PDF (May 2026). */

const pdfSection2Body =
  "We are built for what's next, fueled by 13 years of experience turning bold ideas into measurable results. We started in traditional PR, grew into digital, and today we operate as a fully integrated communications agency, the only way we know how to work. From influencer ecosystems that move culture to digital and PR strategies that dominate search, we make communications the sharpest pillar of your marketing, whether the objective is a global launch, a viral strategy, or category ownership that lasts. Ranked the third-fastest growing agency in AMEA by PRovoke Media four times running, we measure success in categories owned and campaigns that people actually remember.";

const pdfSection3Locations =
  "India. UAE. Singapore. Three of the world's most distinct markets, and we don't just operate in them, we live in them. Our integrated international network brings a global vision to every brief with a local understanding of every market, the same uncompromising standard of quality in every relationship, here and everywhere else we work.";

export const homeHero = {
  lines: ["BEYOND COMMUNICATIONS.", "WE ARE GLOBAL INFLUENCE."] as const,
  agencyLine: "We are an independent global integrated communications agency",
  badge: "Powered by AI. Driven by creativity. Defined by strategy.",
} as const;

/** Long-form editorial body for regional landers — matches homepage intro + locations (PDF). */
export const homeHeroStory = [pdfSection2Body, pdfSection3Locations] as const;

export const homeHeroAside = ["India · UAE · Singapore · One integrated network.", "13 years shaping narratives that compound."];

export const homeIntro = {
  label: "Intro",
  paragraphs: [pdfSection2Body],
} as const;

export const homeLocations = {
  label: "Locations",
  paragraph: pdfSection3Locations,
} as const;

export const homeExpertiseHub = {
  label: "Our trades & sectors",
  headline:
    "360° communications expertise calibrated for boards, scrutiny, and market velocity.",
  intro:
    "Media Mantra Global combines editorial instinct with digital orchestration across India, the UAE, and Singapore — the same uncompromising standard in every market relationship.",
  follow:
    "From transformation mandates to launches, reputational arcs, visibility, retention, engagement, or category ownership — integrated is how we've always operated, long before we used the word everywhere else.",
  cta: { label: "Our expertise", href: "/services" as const },
} as const;

export const homeNetworkBand = {
  label: "Our integrated network",
  headline: "One command layer. Three commanding markets.",
} as const;

export const homePeopleBand = {
  label: "People",
  headline: "Bold, founder-led practitioners — built for prestige and pace.",
  cta: { label: "Join our talents", href: "/careers" as const },
  image:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
} as const;

export const homeInsightsRibbon = {
  label: "Our last news",
  cta: { label: "All insights", href: "/blog" as const },
} as const;

export const homeContactStrip = {
  label: "Contact",
  headline: "Let's Build Influence Together",
  lines: [
    "Your brand deserves to be known. Loudly. In the right rooms. Across the right markets.",
    "Let's figure out what that looks like, together.",
  ],
  primaryCta: "Get in Touch",
} as const;

export const homeClientsLead = {
  title: "Our Clients",
  description:
    "From Fortune 500 leaders to disruptive challengers, we help brands command influence where it matters most.",
} as const;

export const homeProven = {
  label: "Proven results across markets",
  headline: "Proven Results Across Markets",
  intro: "Numbers built across India, UAE & Singapore.",
  stats: [
    {
      key: "placements",
      label: "500+ MEDIA PLACEMENTS",
      dek: "Top-tier print, digital & broadcast coverage across 3 markets.",
      value: 500 as number,
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
  headline: "We built a system and that's the reason brand choose us",
  description: "",
};

export const homeWork = {
  sectionLabel: "Our Work",
  label: "Case Studies",
  headline: "We Let the Work Talk.",
  description:
    "Ideas truly worth their weight in gold across India, UAE, and Singapore",
} as const;

export const homeInsights = {
  label: "Insights",
  headline: "Thinking Out Loud.",
  description:
    "Notes from our desks — sharper briefs start with sharper reading.",
};

export const homeCta = {
  headline: "Let's Build Influence Together",
  description:
    "Your brand deserves to be known. Loudly. In the right rooms. Across the right markets. Let's figure out what that looks like, together.",
  primary: { label: "Get in Touch", href: "/contact" },
  secondary: { label: "See Our Work", href: "/case-studies" },
};

export const footerSeoParagraph =
  "Media Mantra Global is a leading global PR & integrated communications firm with presence in India, UAE, and Singapore. We work with high-growth brands, ambitious founders, and category-defining companies to build media visibility, digital authority, and the kind of influence that actually changes markets. If you're looking for the best PR agency in India, a trusted PR agency UAE, or PR Services in Singapore , you just found it.";

export const footerServicesLine =
  "Strategic PR & Media Relations · Founder & Leadership Branding · Digital PR & SEO Authority · Global Market Entry PR · Reputation & Crisis Management · Influencer Marketing · SEO & Performance Marketing";
