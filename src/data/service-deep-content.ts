export type ServiceContentBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "bullets"; title?: string; items: readonly string[] }
  | { type: "ctas"; items: readonly { label: string; href: string }[] }
  | { type: "image"; src: string; alt: string };

/** Rich editorial layouts for `/services/[slug]` — keyed by slug */
export const serviceDeepContent: Record<string, readonly ServiceContentBlock[]> = {
  "strategic-pr-media-relations": [
    {
      type: "p",
      text: "Strategic PR today shapes perception across an ecosystem — media, digital, search, and social. Knowing what to say matters; knowing where, when, and how it travels is what makes it work. At Media Mantra Global we operate at that intersection.",
    },
    {
      type: "p",
      text: "We understand how editorial rooms think, how algorithms rank, how audiences engage, and how narratives evolve across India, the UAE, and Singapore. From earned media to amplification, nothing we build stops at one placement.",
    },
    {
      type: "p",
      text: "That knowledge is your unfair advantage.",
    },
    {
      type: "bullets",
      title: "What Strategic PR Actually Looks Like",
      items: [
        "Media strategy aligned to business objectives — not chasing vanity hits",
        "Targeted outreach to journalists and outlets that sway your audiences",
        "Press releases crafted and distributed globally to cut through noise",
        "Thought leadership through features, commentary, and expert profiles",
        "Always-on relationships so launches never start from cold outreach",
        "Print, digital, broadcast, and trade wherever your audiences actually consume",
      ],
    },
    {
      type: "p",
      text: "Good PR is why your audience believes what they read about you.",
    },
    {
      type: "h2",
      text: "Let's Build Your Media Presence",
    },
    {
      type: "p",
      text: "Whether you're launching, entering new markets, or tired of being the industry's best-kept secret — let's talk.",
    },
    {
      type: "ctas",
      items: [
        { label: "Get a PR Strategy", href: "/contact" },
        { label: "See Our Work", href: "/case-studies" },
      ],
    },
  ],
  "founder-branding": [
    {
      type: "p",
      text: "Your audience Googles you before the meeting; investors vet you before the call; editors research you before the quote.",
    },
    {
      type: "p",
      text: "Founder branding is not vanity or a LinkedIn side project — it's leverage. Across India, the UAE, and Singapore, audiences buy leaders as much as products.",
    },
    {
      type: "h2",
      text: "What We Build",
    },
    {
      type: "bullets",
      title: "Founder PR & credibility systems",
      items: [
        "Founder strategies that position category authority",
        "CEO branding anchored in tangible editorial credibility",
        "Leadership narratives tied to fundraising, M&A, and expansion milestones",
        "Executive visibility for founding teams — not vanity posting",
        "Media mapping for placements that carry weight",
        "Thought leadership voiced authentically, in rooms that matter",
      ],
    },
    {
      type: "h2",
      text: "The Difference Between Visible and Credible",
    },
    {
      type: "p",
      text: "Credibility is earned coverage — reporters quoting you, publications profiling peers citing your worldview. That's the authority that doesn't evaporate when ad spend stops.",
    },
    {
      type: "ctas",
      items: [
        { label: "Build My Personal Brand", href: "/contact" },
        { label: "Talk to Our Team", href: "/contact" },
      ],
    },
  ],
  "digital-social-media": [
    {
      type: "p",
      text: "Your audience moves past hundreds of branded posts daily. Algorithms choose what survives. Strategy + distinctive creative chooses what converts.",
    },
    {
      type: "p",
      text: "We orchestrate ecosystems where creativity performs — informed by realtime intelligence.",
    },
    {
      type: "bullets",
      title: "What Digital & Social Actually Looks Like",
      items: [
        "Platforms tied to tangible business KPIs — not vanity dashboards",
        "Management across Instagram, LinkedIn, X, YouTube, WhatsApp ecosystems",
        "Content calibrated for dwell time, resonance, shareability — not templated filler",
        "Influencers selected for affinity, credibility, frictionless fit",
        "SEO-aware storytelling so branded IP gets discovered deliberately",
        "Paid plans engineered for pinpoint audiences and ruthless measurement",
      ],
    },
    {
      type: "bullets",
      title: "How We Work",
      items: [
        "AI-informed trend scouting that anticipates what breaks next",
        "Predictive performance signals that refine drafts before publishing",
        "Optimisation rhythms across formats, captions, creatives, pacing",
      ],
    },
    {
      type: "ctas",
      items: [{ label: "Build Your Digital Strategy", href: "/contact" }],
    },
  ],
  "reputation-management": [
    {
      type: "p",
      text: "Reputation takes years — perception can reshuffle overnight. Narratives outperform facts unless preparation, sequencing, and poise converge under pressure.",
    },
    {
      type: "h2",
      text: "Proactive Reputation Building",
    },
    {
      type: "bullets",
      items: [
        "Always-on surveillance across feeds, desks, stakeholder networks",
        "Strategic storyline architecture aligned leadership + commercial reality",
        "Executive visibility safeguarding institutional trust",
        "Search architectures designed so SERPs reflect stature",
      ],
    },
    {
      type: "h2",
      text: "Crisis Architecture & Rapid Response",
    },
    {
      type: "bullets",
      items: [
        "Preparedness rehearsals before turbulence hits",
        "Cross-market war rooms calibrated to global news cycles",
        "Disciplined comms hierarchies bridging internal/external audiences",
        "Post-mortem reputational rewiring rebuilding durable faith",
      ],
    },
    {
      type: "ctas",
      items: [
        { label: "Build Your Reputation Strategy", href: "/contact" },
        { label: "Talk to Our Team", href: "/contact" },
      ],
    },
  ],
  "seo-performance-marketing": [
    {
      type: "p",
      text: "Performance-era discovery isn't ten blue links — it's surfaced inside responses, previews, conversational layers. If you're absent inside those strata, you've forfeited deliberation outright.",
    },
    {
      type: "h2",
      text: "SEO Systems That Cement Authority",
    },
    {
      type: "bullets",
      items: [
        "Answer-engine optimisation aligning brand proof with conversational outputs",
        "Generative optimisation tuned to how frontier models summarise categories",
        "Technical foundations optimised for crawl clarity + schema fluency",
        "Editorial calibrated for intent-heavy queries + voice modalities",
      ],
    },
    {
      type: "h2",
      text: "Performance Marketing That Converts",
    },
    {
      type: "bullets",
      items: [
        "Precision-paid orchestration bridging search-social-display",
        "Behavioural clustering beyond crude demographic guesswork",
        "Measurement frameworks tracing outcomes over vanity counts",
      ],
    },
    {
      type: "ctas",
      items: [
        { label: "Build Your Growth Strategy", href: "/contact" },
        { label: "Talk to Our Team", href: "/contact" },
      ],
    },
  ],
  "influencer-marketing": [
    {
      type: "p",
      text: "Influence isn't follower counts — resonance within communities drives conversion. Loud partnerships without fidelity register as intrusion.",
    },
    {
      type: "image",
      src: "/services/influencer-inline-1.jpg",
      alt: "Collaborative team shaping community-led brand stories",
    },
    {
      type: "h2",
      text: "Campaign Architecture",
    },
    {
      type: "bullets",
      items: [
        "Strategy-led arcs mapped to funnel + cultural moments",
        "Creator identification powered by behavioural overlap",
        "Micro programmes building trust-heavy pockets",
        "Macro programmes amplifying marquee tentpole beats",
      ],
    },
    {
      type: "image",
      src: "/services/influencer-inline-2.jpg",
      alt: "Creator content and social feeds where culture converts",
    },
    {
      type: "p",
      text: "Micro sparks conviction; Macro stages spectacle — proportioning mixes on commercial truth, never vanity decks.",
    },
    {
      type: "ctas",
      items: [{ label: "Talk To Our Team", href: "/contact" }],
    },
  ],
  "content-marketing": [
    {
      type: "p",
      text: "Content abundance without narrative spine is camouflage — more posts, diminishing recall.",
    },
    {
      type: "p",
      text: "We engineer systems where language scales — across search-social-site-funnel-touchpoints simultaneously.",
    },
    {
      type: "bullets",
      title: "Practice Components",
      items: [
        "Calendars governed by differentiated POVs",
        "Longform authority engines — owned + earned",
        "Visual-first storytelling optimised per channel grammar",
      ],
    },
    {
      type: "ctas",
      items: [{ label: "Build Your Content Strategy With Us", href: "/contact" }],
    },
  ],
  "global-event-management": [
    {
      type: "p",
      text: "Events default forgettable logistics — transformational experiences anchor memory + amplification.",
    },
    {
      type: "bullets",
      title: "Integrated Event Stack",
      items: [
        "Strategy-to-guest-journey coherence",
        "Production + crisis-proof logistics",
        "Launch moments + investor salons + stakeholder roadshows",
        "Live storytelling + capture feeding digital extensions",
      ],
    },
    {
      type: "ctas",
      items: [{ label: "Plan Your Event With Us", href: "/contact" }],
    },
  ],
};
