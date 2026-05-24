"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
}

export function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground border border-primary/10 hover:opacity-95 shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/25 font-semibold",
    secondary:
      "glass text-foreground border border-border hover:bg-muted/40 font-medium",
    ghost:
      "bg-transparent text-primary hover:bg-primary/5 border border-transparent font-medium",
  };

  const Component = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm tracking-wide transition-all duration-300 cursor-pointer",
          variantStyles[variant],
          className
        )}
      >
        {children}
      </Component>
    </motion.div>
  );
}
