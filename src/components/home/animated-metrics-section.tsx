"use client";

import React from 'react';
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { AnimatedMetricsGrid } from "@/components/animations/animated-metrics";
import { GraphiteSection } from "@/components/theme/section-theme-wrapper";
import { homeProven } from "@/data/home-content";
import { cn } from "@/lib/cn";

interface AnimatedMetricsSectionProps {
  /** Omit stat body copy for a quieter homepage rhythm */
  dense?: boolean;
}

export function AnimatedMetricsSection({ dense = false }: AnimatedMetricsSectionProps) {
  // Transform the stats data for the AnimatedMetricsGrid component
  const metricsData = homeProven.stats.map(stat => ({
    value: stat.value,
    label: stat.label,
    format: 'number' as const,
    suffix: stat.suffix,
  }));

  return (
    <GraphiteSection
      sectionId="metrics"
      className="scroll-mt-28 overflow-hidden py-24 lg:scroll-mt-32 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute left-1/2 top-[-22%] h-[70vh] w-[70vh] -translate-x-1/2 rounded-full bg-mm-gold/10 blur-[130px] mm-mesh" />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl space-y-4 border-b border-mm-cream/10 pb-10">
          <SectionLabel>{homeProven.label}</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,4.2vw,3.35rem)] font-semibold leading-[1.05] tracking-tight text-mm-cream">
            {homeProven.headline}
          </h2>
          {homeProven.intro.trim() ? (
            <p className="max-w-xl font-editorial text-base leading-relaxed text-mm-light md:text-lg">
              {homeProven.intro}
            </p>
          ) : null}
        </div>

        <div className={`${homeProven.intro.trim() ? "mt-20 lg:mt-24" : "mt-12 lg:mt-16"}`}>
          <AnimatedMetricsGrid
            metrics={metricsData}
            className="grid-cols-2 lg:grid-cols-4 gap-14 sm:gap-16 lg:gap-0"
            staggerDelay={300}
          />
          
          {/* Additional details for each metric if not dense */}
          {!dense && (
            <div className="grid gap-14 sm:grid-cols-2 sm:gap-16 lg:grid-cols-4 lg:gap-0 mt-8">
              {homeProven.stats.map((stat, i) => (
                <div
                  key={stat.key}
                  className="relative flex flex-col lg:border-l lg:px-10 lg:first:border-l-0 lg:first:pl-0 lg:border-mm-cream/[0.1]"
                >
                  <p className="mt-3 font-editorial text-sm leading-relaxed text-mm-light md:text-[15px]">
                    {stat.dek}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </GraphiteSection>
  );
}