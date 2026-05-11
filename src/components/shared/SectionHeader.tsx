"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  highlight,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16 md:mb-20 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <Badge
          variant="outline"
          className="mb-4 border-tam-cyan/30 text-tam-cyan bg-tam-cyan/5 px-3 py-1 text-xs tracking-widest uppercase"
        >
          {badge}
        </Badge>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-gradient-cyan">{highlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
