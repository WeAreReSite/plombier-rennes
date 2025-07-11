// components/ui/SectionHeader.tsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { manrope } from "@/lib/fonts";

interface SectionHeaderProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  title: string;
  subtitle?: string;
  id?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  centerText?: boolean;
  showAccentLine?: boolean;
  accentColor?: string;
}

export function SectionHeader({
  as = 'h2',
  title,
  subtitle,
  id,
  className,
  titleClassName,
  subtitleClassName,
  centerText = true,
  showAccentLine = true,
  accentColor = "bg-blue-700",
}: SectionHeaderProps) {
  const HeadingTag = as;

  const headingBaseStyles: { [key: string]: string } = {
    h1: "text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl",
    h2: "text-3xl font-bold tracking-tight sm:text-4xl",
    h3: "text-2xl font-semibold tracking-tight sm:text-3xl",
    h4: "text-xl font-semibold sm:text-2xl",
    h5: "text-lg font-semibold",
    h6: "text-base font-semibold",
  };

  const defaultTitleColors = "text-neutral-900 dark:text-neutral-100";
  const defaultSubtitleColors = "text-neutral-600 dark:text-neutral-400";

  return (
    <div
      className={cn(
        "py-10 md:py-12",
        centerText && "text-center",
        className
      )}
    >
      <HeadingTag
        id={id}
        className={cn(
          manrope.className,
          headingBaseStyles[HeadingTag] || headingBaseStyles.h2,
          defaultTitleColors,
          titleClassName
        )}
      >
        {title}
      </HeadingTag>

      {showAccentLine && (
        <div
          className={cn(
            "mt-3 h-1 w-16 rounded-full md:w-20",
            accentColor,
            centerText && "mx-auto"
          )}
        />
      )}

      {subtitle && (
        <p
          className={cn(
            manrope.className,
            "text-base leading-relaxed sm:text-lg",
            defaultSubtitleColors,
            centerText && "mx-auto max-w-2xl",
            showAccentLine ? "mt-4" : "mt-3",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}