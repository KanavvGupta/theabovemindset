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
      "bg-tam-cyan/90 hover:bg-tam-cyan text-white font-semibold shadow-lg shadow-tam-cyan/20 hover:shadow-tam-cyan/30 border border-tam-cyan/30",
    secondary:
      "glass text-foreground font-medium border-foreground/15 hover:border-foreground/25",
    ghost:
      "bg-transparent text-tam-cyan hover:bg-tam-cyan/5 border border-transparent hover:border-tam-cyan/20",
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
