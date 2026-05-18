import { services } from "@/data/services";

/** Primary header — aligned with editorial sitemap (no Industries). */
export const serviceNavLinks = services.map((s) => ({
  href: `/services/${s.slug}` as const,
  label: s.title,
  index: s.index,
}));

export type MainNavItem =
  | { readonly kind: "link"; readonly label: string; readonly href: string }
  | {
      readonly kind: "mega";
      readonly label: string;
      readonly href: string;
      readonly children: typeof serviceNavLinks;
    };

export const mainNav: readonly MainNavItem[] = [
  { kind: "link", label: "Home", href: "/" },
  { kind: "link", label: "About", href: "/about" },
  { kind: "mega", label: "Services", href: "/services", children: serviceNavLinks },
  { kind: "link", label: "Case Studies", href: "/case-studies" },
  { kind: "link", label: "Insights", href: "/blog" },
  { kind: "link", label: "Careers", href: "/careers" },
  { kind: "link", label: "Contact", href: "/contact" },
] as const;

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Industries", href: "/industries" },
      { label: "Services", href: "/services" },
    ],
  },
  {
    title: "Regional",
    links: [
      { label: "India", href: "/india" },
      { label: "UAE", href: "/uae" },
      { label: "Singapore", href: "/singapore" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
] as const;

export type SocialKey = "linkedin" | "instagram" | "x";

export const socialLinks: Record<SocialKey, string> = {
  linkedin: "https://www.linkedin.com/company/mediamantaraglobal/",
  instagram: "https://www.instagram.com/",
  x: "https://x.com/",
};

export const offices = [
  {
    region: "India",
    lines: ["New Delhi · Nationwide counsel"],
  },
  {
    region: "UAE",
    lines: ["Dubai · Emirates-wide programmes"],
  },
  {
    region: "Singapore",
    lines: ["APAC HQ · Regional advisory"],
  },
] as const;
