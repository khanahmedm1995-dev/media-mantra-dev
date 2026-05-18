import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "@/components/providers/app-providers";
import { OrganizationJsonLd } from "@/components/seo/organization-jsonld";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Media Mantra Global — Beyond Communications.",
  pathname: "/",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Syne:wght@400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <OrganizationJsonLd />
        <AppProviders>
          <div className="mm-noise" aria-hidden />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
