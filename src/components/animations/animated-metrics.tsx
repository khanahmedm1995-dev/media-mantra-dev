"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';

interface AnimatedMetricProps {
  value: number;
  label: string;
  format?: 'number' | 'percentage' | 'currency';
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export function AnimatedMetric({
  value,
  label,
  format = 'number',
  suffix = '',
  prefix = '',
  duration = 2000,
  delay = 0,
  className,
  valueClassName,
  labelClassName,
}: AnimatedMetricProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  const formatValue = (val: number): string => {
    let formattedValue: string;

    switch (format) {
      case 'percentage':
        formattedValue = `${Math.round(val)}%`;
        break;
      case 'currency':
        formattedValue = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(val);
        break;
      case 'number':
      default:
        // For the metrics section, we want to show the raw numbers with suffixes
        formattedValue = Math.round(val).toString();
        break;
    }

    return `${prefix}${formattedValue}${suffix}`;
  };

  const animateValue = (startValue: number, endValue: number, animationDuration: number) => {
    setIsAnimating(true);
    const startTime = Date.now();
    const startDelay = delay;

    const animate = () => {
      const elapsed = Date.now() - startTime - startDelay;
      
      if (elapsed < 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min(elapsed / animationDuration, 1);
      
      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (endValue - startValue) * easeOut;
      
      setDisplayValue(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  // Intersection Observer for viewport trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimating) {
            animateValue(0, value, duration);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -18% 0px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value, duration, isAnimating]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex flex-col',
        className
      )}
    >
      <p
        className={cn(
          'font-display text-[clamp(2.25rem,4vw,3.25rem)] font-semibold tabular-nums tracking-tight text-mm-gold',
          valueClassName
        )}
      >
        {formatValue(displayValue)}
      </p>
      <p
        className={cn(
          'mt-6 text-[11px] font-semibold uppercase leading-snug tracking-[0.18em] text-mm-cream/95',
          labelClassName
        )}
      >
        {label}
      </p>
    </div>
  );
}

interface AnimatedMetricsGridProps {
  metrics: Array<{
    value: number;
    label: string;
    format?: 'number' | 'percentage' | 'currency';
    suffix?: string;
    prefix?: string;
  }>;
  className?: string;
  staggerDelay?: number;
}

export function AnimatedMetricsGrid({
  metrics,
  className,
  staggerDelay = 200,
}: AnimatedMetricsGridProps) {
  return (
    <div
      className={cn(
        'grid gap-14 sm:grid-cols-2 sm:gap-16 lg:grid-cols-4 lg:gap-0 lg:gap-y-0',
        className
      )}
    >
      {metrics.map((metric, index) => (
        <div
          key={`${metric.label}-${index}`}
          className={cn(
            'relative flex flex-col lg:border-l lg:px-10 lg:first:border-l-0 lg:first:pl-0',
            index % 2 === 0 ? 'lg:border-mm-cream/[0.1]' : 'lg:border-mm-gold/[0.22]',
          )}
        >
          <AnimatedMetric
            value={metric.value}
            label={metric.label}
            format={metric.format}
            suffix={metric.suffix}
            prefix={metric.prefix}
            delay={index * staggerDelay}
            duration={2100}
          />
        </div>
      ))}
    </div>
  );
}

// Hook for using animated metrics with custom configuration
export function useAnimatedMetric(
  value: number,
  options: {
    duration?: number;
    delay?: number;
    format?: 'number' | 'percentage' | 'currency';
    autoStart?: boolean;
  } = {}
) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number>();

  const {
    duration = 2000,
    delay = 0,
    format = 'number',
    autoStart = false,
  } = options;

  const startAnimation = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime - delay;
      
      if (elapsed < 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = value * easeOut;
      
      setDisplayValue(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const resetAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setDisplayValue(0);
    setIsAnimating(false);
  };

  useEffect(() => {
    if (autoStart) {
      startAnimation();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value, autoStart]);

  return {
    displayValue,
    isAnimating,
    startAnimation,
    resetAnimation,
  };
}