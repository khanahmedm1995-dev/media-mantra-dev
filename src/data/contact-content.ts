/** Contact page — deck-aligned copy & details (finalize phone/hours when client confirms). */

export const contactPageContent = {
  eyebrow: "Get in touch",
  headline: "We're here to help you grow",
  intro:
    "India · UAE · Singapore — brief us once; we route you to strategists across markets with the same standard of counsel.",
  phone: "+91 85951 06501",
  email: "hello@mediamantraglobal.com",
  websiteLabel: siteUrlLabel(),
  hours: "Mon–Fri · 9am–7pm IST / GST-friendly coverage for GCC & Singapore",
  officesLines: ["New Delhi", "Dubai · UAE", "Singapore"],
} as const;

function siteUrlLabel() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mediamantaraglobal.com";
  try {
    return new URL(raw).hostname.replace(/^www\./, "");
  } catch {
    return "mediamantraglobal.com";
  }
}
