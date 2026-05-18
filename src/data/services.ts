export type Service = {
  slug: string;
  index: number;
  title: string;
  tagline: string;
  excerpt: string;
  pillars: readonly string[];
  deliverables: readonly string[];
  heroGradient: string;
  heroImage: string;
};

export const services: Service[] = [
  {
    index: 1,
    slug: "strategic-pr-media-relations",
    title: "Strategic PR & Media Relations",
    tagline: "Most PR is forgettable. Ours isn't.",
    excerpt:
      "Strategic PR that shapes perception across media, digital, search, and social — built to travel beyond single placements.",
    pillars: ["Ecosystem mindset", "Editorial credibility", "Always-on relevance"],
    deliverables: ["Narratives", "Relationships", "Multi-channel amplification"],
    heroGradient: "from-mm-royal/80 via-mm-graphite/60 to-mm-gold/20",
    heroImage:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    index: 2,
    slug: "founder-branding",
    title: "Founder & Leadership Branding",
    tagline: "The brand is the business. The founder is the brand.",
    excerpt:
      "Authority systems for leaders under scrutiny across India, UAE, and Singapore — designed for credibility first, hype second.",
    pillars: ["Editorial proofs", "Strategic narratives", "Market transitions"],
    deliverables: ["Media mapping", "POV architectures", "Team visibility"],
    heroGradient: "from-mm-gold/40 via-mm-royal/70 to-mm-graphite",
    heroImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1400&q=80",
  },
  {
    index: 3,
    slug: "digital-social-media",
    title: "Digital & Social Media",
    tagline: "Boring content is invisible.",
    excerpt:
      "Integrated digital ecosystems blending sharp creative with platform intelligence across every feed that matters.",
    pillars: ["Channel fluency", "Performance craft", "Cultural resonance"],
    deliverables: ["Platform strategy", "Content systems", "Always-on optimisation"],
    heroGradient: "from-mm-graphite via-mm-royal to-mm-cream",
    heroImage:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    index: 4,
    slug: "reputation-management",
    title: "Reputation & Crisis Management",
    tagline: "Your reputation took years to build.",
    excerpt:
      "Reputation systems that reinforce trust daily — plus battle-tested escalation rooms when timelines compress.",
    pillars: ["Signals", "Readiness", "Recovery"],
    deliverables: ["Monitoring", "Crisis playbooks", "Stakeholder choreography"],
    heroGradient: "from-mm-royal/90 via-mm-graphite to-mm-black",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  },
  {
    index: 5,
    slug: "seo-performance-marketing",
    title: "SEO & Performance Marketing",
    tagline: "Performance has changed for the AI-era.",
    excerpt:
      "Organic authority plus precision paid — optimised for SERPs, answer surfaces, generative overlays, and real conversion.",
    pillars: ["Discovery science", "Engineering readiness", "Attribution honesty"],
    deliverables: ["Technical SEO", "Content moats", "Paid acceleration"],
    heroGradient: "from-mm-graphite/90 via-mm-gold/30 to-mm-royal/60",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    index: 6,
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    tagline: "The right voice, in the right feed.",
    excerpt:
      "Partnerships calibrated for cultural truth — layered micro-and-macro programmes that convert, not congratulate.",
    pillars: ["Creator intelligence", "Community truth", "Measurable impact"],
    deliverables: ["Casting matrices", "Always-on arcs", "Attribution overlays"],
    heroGradient: "from-mm-gold/60 via-mm-cream to-mm-graphite",
    heroImage: "/services/influencer-marketing-hero.jpg",
  },
  {
    index: 7,
    slug: "content-marketing",
    title: "Content Marketing",
    tagline: "Relevant content is still king.",
    excerpt:
      "Editorial franchises, campaign languages, SEO-grade articles, and kinetic formats unified under one differentiated POV.",
    pillars: ["Narrative IP", "Modular slicing", "Channel-native craft"],
    deliverables: ["Content OS", "Editorial franchises", "Distribution"],
    heroGradient: "from-mm-graphite via-mm-royal/80 to-mm-gold/40",
    heroImage:
      "https://images.unsplash.com/photo-1542435503-9c7643fc8427?auto=format&fit=crop&w=1400&q=80",
  },
  {
    index: 8,
    slug: "global-event-management",
    title: "Global Event Management",
    tagline: "Moments are easy. Impact isn't.",
    excerpt:
      "Strategy-to-stage-to-screen experiences across India, UAE, Singapore — choreographed beyond the ballroom.",
    pillars: ["Immersive design", "Amplification choreography", "Logistics sovereignty"],
    deliverables: ["Summits & launches", "Roadshows", "Live capture"],
    heroGradient: "from-mm-royal via-mm-black to-mm-gold/50",
    heroImage:
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1400&q=80",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
