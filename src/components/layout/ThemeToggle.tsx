"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center w-[76px] h-9 rounded-full cursor-pointer overflow-hidden group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tam-cyan"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      style={{
        background: isDark
          ? "oklch(1 0 0 / 5%)"
          : "oklch(0 0 0 / 6%)",
        backdropFilter: "blur(20px) saturate(1.8)",
        border: isDark
          ? "1px solid oklch(1 0 0 / 10%)"
          : "1px solid oklch(0 0 0 / 10%)",
        boxShadow: isDark
          ? "inset 0 1px 1px oklch(1 0 0 / 4%), 0 0 20px oklch(0.75 0.15 195 / 5%)"
          : "inset 0 1px 2px oklch(0 0 0 / 4%), 0 2px 8px oklch(0 0 0 / 6%)",
      }}
    >
      {/* Liquid glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        animate={{
          boxShadow: isDark
            ? "0 0 0px oklch(0.75 0.15 195 / 0%)"
            : "0 0 0px oklch(0.78 0.16 75 / 0%)",
        }}
        whileHover={{
          boxShadow: isDark
            ? "0 0 20px oklch(0.75 0.15 195 / 15%)"
            : "0 0 20px oklch(0.78 0.16 75 / 15%)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Sliding pill indicator */}
      <motion.div
        className="absolute w-[34px] h-[28px] rounded-full"
        animate={{
          x: isDark ? 3 : 39,
          background: isDark
            ? "oklch(0.75 0.15 195 / 18%)"
            : "oklch(0.78 0.16 75 / 18%)",
        }}
        style={{
          border: isDark
            ? "1px solid oklch(0.75 0.15 195 / 25%)"
            : "1px solid oklch(0.78 0.16 75 / 25%)",
          boxShadow: isDark
            ? "0 0 12px oklch(0.75 0.15 195 / 10%)"
            : "0 0 12px oklch(0.78 0.16 75 / 10%)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
      />

      {/* Moon icon (dark) */}
      <div className="relative z-10 flex items-center justify-center w-[38px] h-full">
        <motion.svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{
            opacity: isDark ? 1 : 0.35,
            scale: isDark ? 1 : 0.8,
            rotate: isDark ? 0 : -30,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="text-tam-cyan"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </motion.svg>
      </div>

      {/* Sun icon (light) */}
      <div className="relative z-10 flex items-center justify-center w-[38px] h-full">
        <motion.svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{
            opacity: isDark ? 0.35 : 1,
            scale: isDark ? 0.8 : 1,
            rotate: isDark ? 0 : 90,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={isDark ? "text-muted-foreground" : "text-tam-amber"}
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.svg>
      </div>
    </button>
  );
}
