/** Unified case study catalogue for listings + detail routes */
export type CaseStudy = {
  slug: string;
  title: string;
  brand: string;
  category: string;
  excerpt: string;
  challenge: string;
  strategy: string;
  execution: string[];
  results: { label: string; value: string }[];
  heroImage: string;
  accent: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "archies",
    title: "Archies · Love, Retold for Modern India",
    brand: "Archies",
    category: "Retail & Gifting",
    excerpt: "Seasonal resurgence anchored in cultural fluency and digital-first gifting rituals.",
    challenge:
      "Heritage gifting brand battling perception drift against agile DTC competitors and fragmented omnichannel narratives.",
    strategy:
      "Re-centered the romance economy through editorial partnerships, influencer proof, and storefront-to-scroll storytelling.",
    execution: ["Editorial gifting franchises", "Creator-led unwrap moments", "Localized PR corridor across metros"],
    results: [
      { label: "Earned placements", value: "180+" },
      { label: "Share of gifting voice", value: "+42%" },
      { label: "Campaign velocity", value: "3 regions" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1600&q=80",
    accent: "from-mm-gold/35 to-mm-royal/30",
  },
  {
    slug: "opg-mobility",
    title: "OPG Mobility · Engineering Trust at Scale",
    brand: "OPG Mobility",
    category: "Mobility & EV",
    excerpt: "B2B narratives reframed around engineering rigor and global supply partnerships.",
    challenge:
      "Complex industrial storylines lost in jargon-heavy communiqués lacking investor and policy fluency.",
    strategy:
      "Mapped proof points into executive arcs, anchored by film-first factory storytelling and calibrated press tours.",
    execution: ["Investor briefing series", "Factory documentary arc", "Policy desk engagement"],
    results: [
      { label: "Tier-1 business coverage", value: "64+" },
      { label: "Investor meeting pipeline", value: "2.4×" },
      { label: "Policy desk sessions", value: "14" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80",
    accent: "from-mm-royal/50 to-mm-graphite/50",
  },
  {
    slug: "isma-crisis-pr",
    title: "ISMA · Crisis PR & Signal Control",
    brand: "ISMA",
    category: "Crisis Communications",
    excerpt: "Rapid escalation room leadership with calibrated stakeholder sequencing.",
    challenge:
      "Escalating regulatory scrutiny and social amplification threatened stakeholder confidence across multiple markets.",
    strategy:
      "Activated war-room choreography, factual cadence protocols, and third-party validators before narrative lock-in.",
    execution: ["24/7 command center", "Legal & compliance sync", "Progressive disclosure cadence"],
    results: [
      { label: "Sentiment stabilization", value: "11 days" },
      { label: "Corrective headlines", value: "38%" },
      { label: "Leadership approvals", value: "100%" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80",
    accent: "from-mm-royal/60 to-mm-graphite/55",
  },
  {
    slug: "swastik-wellbeing",
    title: "Swastik Wellbeing · Science Meets Story",
    brand: "Swastik",
    category: "Health & Wellness",
    excerpt: "Clinical credibility translated into cultural relevance without dilution.",
    challenge:
      "Science-forward wellness brand competing in a noise-heavy category with skeptical consumer cohorts.",
    strategy:
      "Built physician advisory loops, documentary-style education, and creator proof with compliance guardrails.",
    execution: ["Advisory council launch", "Docu-series pilot", "Localized community circles"],
    results: [
      { label: "Clinical partnerships", value: "22" },
      { label: "Brand trust lift", value: "+31%" },
      { label: "Regional rollouts", value: "5" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80",
    accent: "from-mm-graphite/50 to-mm-gold/30",
  },
  {
    slug: "barista-coffee",
    title: "Barista Coffee · Café Culture Redux",
    brand: "Barista",
    category: "F&B",
    excerpt: "Urban café narrative elevated through sensory PR and sonic identity experiments.",
    challenge:
      "Legacy café footprint needed modernization signals without alienating habitual morning rituals.",
    strategy:
      "Layered influencer discovery journeys, sonic branding drops, and city-by-city editorial unveilings.",
    execution: ["Sonic café drops", "City editor tours", "UGC amplification loops"],
    results: [
      { label: "Store footfall uplift", value: "+18%" },
      { label: "Social chatter", value: "+2.1×" },
      { label: "Press tours", value: "9 cities" },
    ],
    heroImage:
      "https://images.unsplash.com/photo-1495474472887-a785a749e9d9?auto=format&fit=crop&w=1600&q=80",
    accent: "from-mm-gold/40 to-mm-royal/45",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
