import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <div className="flex min-h-[100svh] flex-col">{children}</div>
      <SiteFooter />
    </>
  );
}
