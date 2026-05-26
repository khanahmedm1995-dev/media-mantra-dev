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
  /** Detail page gallery after “The idea” — local `/campaigns/...` paths or absolute URLs */
  campaignImages?: readonly string[];
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
    heroImage: "/campaigns/archies/campaign-02-banner.png",
    accent: "from-mm-gold/35 to-mm-royal/30",
    /** Add `campaign-01-event-merchandise.png` in `public/campaigns/archies/` to show the launch / ama composite as the first slide. */
    campaignImages: [
      "/campaigns/archies/campaign-02-banner.png",
      "/campaigns/archies/campaign-03-retail.png",
      "/campaigns/archies/campaign-04-storefront.png",
    ],
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
    heroImage: "/campaigns/opg-mobility/campaign-01-exhibition-booth.png",
    accent: "from-mm-royal/50 to-mm-graphite/50",
    campaignImages: [
      "/campaigns/opg-mobility/campaign-01-exhibition-booth.png",
      "/campaigns/opg-mobility/campaign-02-product-spokesperson.png",
      "/campaigns/opg-mobility/campaign-03-red-scooter-display.png",
      "/campaigns/opg-mobility/campaign-04-connected-dashboard.png",
    ],
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
    heroImage: "/campaigns/isma/campaign-02-sugarcane-farmer.png",
    accent: "from-mm-royal/60 to-mm-graphite/55",
    campaignImages: [
      "/campaigns/isma/campaign-01-smart-agri-post.png",
      "/campaigns/isma/campaign-02-sugarcane-farmer.png",
      "/campaigns/isma/campaign-03-et-now-dg-interview.png",
      "/campaigns/isma/campaign-04-moneycontrol-opinion.png",
    ],
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
    heroImage: "/campaigns/swastik/campaign-02-dhyan-vihar-aerial.png",
    accent: "from-mm-graphite/50 to-mm-gold/30",
    campaignImages: [
      "/campaigns/swastik/campaign-01-wellness-holiday-program.png",
      "/campaigns/swastik/campaign-02-dhyan-vihar-aerial.png",
      "/campaigns/swastik/campaign-03-resort-swing-lifestyle.png",
      "/campaigns/swastik/campaign-04-dining-experience.png",
    ],
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
    heroImage: "/campaigns/barista/campaign-02-diner-interior.png",
    accent: "from-mm-gold/40 to-mm-royal/45",
    campaignImages: [
      "/campaigns/barista/campaign-01-team-storefront-night.png",
      "/campaigns/barista/campaign-02-diner-interior.png",
      "/campaigns/barista/campaign-03-press-coverage.png",
      "/campaigns/barista/campaign-04-mountain-outdoor.png",
      "/campaigns/barista/campaign-05-celebration.png",
    ],
  },
  {
    slug: "blaupunkt-audio",
    title: "Blaupunkt · Earned Authority for Everyday Audio",
    brand: "Blaupunkt",
    category: "Consumer Electronics",
    excerpt:
      "Portfolio storytelling across lifestyle audio — from hero product drops to editor reviews, authored POV, and credible creator coverage.",
    challenge:
      "Competing in a crowded accessory market where spec sheets blur together and trust lives with reviewers, creators, and marquee publications.",
    strategy:
      "Threaded product proof into tier-1 reviews, leadership-byline narratives on listening trends, and high-signal video critique that still surfaces the brand rack.",
    execution: ["Retail & lifestyle press beats", "Authored industry POV", "Creator and long-form review arcs"],
    results: [
      { label: "Review & feature hits", value: "25+" },
      { label: "Authored & op-ed slots", value: "8" },
      { label: "Creator touchpoints", value: "12+" },
    ],
    heroImage: "/campaigns/blaupunkt/campaign-01-headphones-gaming-latency.png",
    accent: "from-mm-royal/45 to-mm-graphite/55",
    campaignImages: [
      "/campaigns/blaupunkt/campaign-01-headphones-gaming-latency.png",
      "/campaigns/blaupunkt/campaign-02-press-hindu-boombox.png",
      "/campaigns/blaupunkt/campaign-03-authored-spatial-audio.png",
      "/campaigns/blaupunkt/campaign-04-creator-sbw550-video.png",
    ],
  },
  {
    slug: "boat-middle-east",
    title: "boAt · Middle East Launch & Ramadan Rhythm",
    brand: "boAt",
    category: "Consumer Electronics · Regional",
    excerpt:
      "UAE market entry and cultural beats — retail storytelling, Ramadan gifting, and creator-grade social proof tuned for Dubai and the wider Gulf.",
    challenge:
      "Breaking through a prestige-heavy wearable-audio aisle while winning share of youth culture and gifting moments during condensed seasonal peaks.",
    strategy:
      "Anchored arrival with unmistakable Emirates cues, layered Ramadan family narratives, localized creator relatability, and tight product glamour stills.",
    execution: ["Launch & skyline key visual", "Seasonal gifting campaign", "City-native short-form arcs", "Product conversion assets"],
    results: [
      { label: "Hero market", value: "UAE" },
      { label: "Seasonal beats", value: "Ramadan" },
      { label: "Campaign visual sets", value: "4" },
    ],
    heroImage: "/campaigns/boat-middle-east/campaign-01-uae-launch.png",
    accent: "from-mm-royal/40 to-mm-gold/35",
    campaignImages: [
      "/campaigns/boat-middle-east/campaign-01-uae-launch.png",
      "/campaigns/boat-middle-east/campaign-02-ramadan-gifting.png",
      "/campaigns/boat-middle-east/campaign-03-dubai-creator-ramadan.png",
      "/campaigns/boat-middle-east/campaign-04-earbuds-product.png",
    ],
  },
  {
    slug: "elecrama",
    title: "ELECRAMA · Powering the Future of Energy",
    brand: "ELECRAMA",
    category: "B2B Events & Infrastructure",
    excerpt:
      "India’s flagship electrical and energy trade forum — from arrival architecture and anchor exhibitor presence to startup pavilions and leadership moments on the floor.",
    challenge:
      "Cutting through a dense hall of global OEMs and utilities to keep narrative clarity, prestige, and footfall choreography across multi-day editions.",
    strategy:
      "Led with unmistakable ingress branding and wayfinding cues, amplified tier-one booth storytelling, stitched leadership photo-ops into earned memory, and spotlighted innovation lanes like Electraverse.",
    execution: ["Event gateway & arrival journey", "Flagship pavilion PR", "Delegation & stakeholder stills", "Startup showcase corridor"],
    results: [
      { label: "Show editions pictured", value: "2023–24" },
      { label: "Floor narratives", value: "4+" },
      { label: "Pavilion arcs", value: "Flagship → Spark" },
    ],
    heroImage: "/campaigns/elecrama/campaign-01-gateway-2023.png",
    accent: "from-mm-royal/50 to-mm-graphite/40",
    campaignImages: [
      "/campaigns/elecrama/campaign-01-gateway-2023.png",
      "/campaigns/elecrama/campaign-02-eaton-booth.png",
      "/campaigns/elecrama/campaign-03-delegation-group.png",
      "/campaigns/elecrama/campaign-04-electraverse-startup.png",
    ],
  },
  {
    slug: "hartek",
    title: "Hartek · Power, Renewables & Proof on the Ground",
    brand: "Hartek",
    category: "Power & Renewable Infrastructure",
    excerpt:
      "From differentiated leadership profiling to utility-scale and floating PV — aligning Mohali HQ credibility with GW-scale optics and marquee project moments.",
    challenge:
      "Complex energy infrastructure narratives often flatten into interchangeable EPC claims in a subsidy-sensitive, credibility-first market.",
    strategy:
      "Paired marquee editorial profiles with human-scale leadership visuals, cinematic plant photography, and launch-footage proof for differentiated tech (rooftop, utility, floating).",
    execution: ["Business & regional press beats", "Founder / ED storytelling", "Site & asset imagery", "Project inauguration beats"],
    results: [
      { label: "Narrative lanes", value: "4" },
      { label: "Asset classes shown", value: "Rooftop → GW" },
      { label: "Innovation cue", value: "Floating PV" },
    ],
    heroImage: "/campaigns/hartek/campaign-03-utility-scale-sunset.png",
    accent: "from-mm-gold/45 to-mm-royal/40",
    campaignImages: [
      "/campaigns/hartek/campaign-01-press-leadership.png",
      "/campaigns/hartek/campaign-02-leader-rooftop-solar.png",
      "/campaigns/hartek/campaign-03-utility-scale-sunset.png",
      "/campaigns/hartek/campaign-04-floating-pv-launch.png",
    ],
  },
  {
    slug: "leadership",
    title: "Leadership · Founder Authority & Editorial Proof",
    brand: "Leadership",
    category: "Founder & Leadership Branding",
    excerpt:
      "Executive portraits and narrative systems that translate founder credibility into rooms that matter — from investor diligence to tier-one editorial.",
    challenge:
      "Leaders under scrutiny need authority that reads instantly across press, panels, and search — without vanity posting or disconnected personal brands.",
    strategy:
      "Built editorial-grade portrait systems, POV architectures, and visibility cadences anchored in earned proof — not hype cycles.",
    execution: ["Executive portrait direction", "Founder narrative mapping", "Media-ready positioning", "Cross-market visibility"],
    results: [
      { label: "Founder profiles", value: "2" },
      { label: "Markets counselled", value: "India · UAE · SG" },
      { label: "Editorial lanes", value: "Press → panels" },
    ],
    heroImage: "/campaigns/leadership/campaign-01-puja-pathak.png",
    accent: "from-mm-gold/45 to-mm-royal/50",
    campaignImages: [
      "/campaigns/leadership/campaign-01-puja-pathak.png",
      "/campaigns/leadership/campaign-02-udit-pathak.png",
    ],
  },
  {
    slug: "lpu",
    title: "LPU · Paris Olympics & National Pride",
    brand: "LPU",
    category: "Education & Sports Communications",
    excerpt:
      "Lovely Professional University’s Paris 2024 story — from the second-largest global Olympic contingent after Stanford to on-campus honouring moments for India’s medallists.",
    challenge:
      "Translating a deep roster of student-athletes into a coherent national narrative without reducing individual achievements to a single headline.",
    strategy:
      "Led with contingent-scale proof, amplified icon moments around Neeraj Chopra and team India, and choreographed on-campus honouring ceremonies into sustained earned coverage.",
    execution: ["Olympic contingent storytelling", "Medallist spotlight PR", "Honouring ceremony beats", "Cash award narrative"],
    results: [
      { label: "Paris 2024 athletes", value: "24" },
      { label: "Global contingent rank", value: "#2" },
      { label: "Honouring ceremonies", value: "Multi-athlete" },
    ],
    heroImage: "/campaigns/lpu/campaign-02-neeraj-chopra-gold.png",
    accent: "from-mm-royal/55 to-mm-gold/40",
    campaignImages: [
      "/campaigns/lpu/campaign-01-paris-olympics-contingent.png",
      "/campaigns/lpu/campaign-02-neeraj-chopra-gold.png",
      "/campaigns/lpu/campaign-03-vinesh-phogat-ceremony.png",
    ],
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
