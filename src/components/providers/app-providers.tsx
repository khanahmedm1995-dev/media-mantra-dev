"use client";

import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { PageLoader } from "@/components/layout/page-loader";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { ScrollProgress } from "@/components/layout/scroll-progress";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />
      {children}
    </SmoothScroll>
  );
}
