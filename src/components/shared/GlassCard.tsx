"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  variant?: "default" | "cyan" | "strong";
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  variant = "default",
  hover = true,
  ...props
}: GlassCardProps) {
  const variants = {
    default: "glass",
    cyan: "glass-cyan",
    strong: "glass-strong",
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl p-6 transition-all duration-500",
        variants[variant],
        hover && "hover:scale-[1.02] hover:border-foreground/10",
        variant === "cyan" && hover && "hover:glow-cyan",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
