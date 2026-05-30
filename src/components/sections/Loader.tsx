"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, animate } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

const COLUMNS = [
  { color: "#DE6B35" }, // Rust Orange
  { color: "#3FA736" }, // Green
  { color: "#27BDBE" }, // Cyan/Teal
  { color: "#C9252A" }, // Red
  { color: "#E5AE07" }, // Gold/Yellow
  { color: "#3C70CD" }, // Blue
];

export default function Loader({ onComplete }: LoaderProps) {
  const [bgPhaseComplete, setBgPhaseComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  const completeLoader = useCallback(() => {
    // Elegant delay after reaching 100% to let the user see the complete banner
    const t = setTimeout(() => {
      onComplete();
    }, 450);
    return () => clearTimeout(t);
  }, [onComplete]);

  useEffect(() => {
    // 1. Animate background of loader container from white to black
    const bgAnim = animate("#loader-container", {
      backgroundColor: "#000000"
    }, {
      duration: 0.8,
      ease: "easeOut",
      onComplete: () => {
        setBgPhaseComplete(true);
      }
    });

    return () => bgAnim.stop();
  }, []);

  useEffect(() => {
    if (!bgPhaseComplete) return;

    // Check for prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setProgress(100);
      onComplete();
      return;
    }

    // 2. High-performance majestic animation of progress state (60 FPS smooth, takes its time)
    const controls = animate(0, 100, {
      duration: 2.2, // majestic, controlled speed
      ease: [0.76, 0, 0.24, 1], // premium cubic-bezier easing
      onUpdate: (latest) => {
        setProgress(latest);
      },
      onComplete: () => {
        completeLoader();
      },
    });

    return () => controls.stop();
  }, [bgPhaseComplete, completeLoader, onComplete]);

  // Calculate reveal scaleY (0 to 1) for each column
  const getColumnScaleY = (index: number, currentProgress: number) => {
    const segmentWidth = 100 / COLUMNS.length;
    const start = index * segmentWidth;
    const end = (index + 1) * segmentWidth;

    if (currentProgress <= start) return 0;
    if (currentProgress >= end) return 1;

    return (currentProgress - start) / (end - start);
  };

  return (
    <motion.div
      id="loader-container"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden select-none"
      style={{ backgroundColor: "#ffffff" }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }}
    >
      {/* 6-Column GPU-Accelerated Banner Reveal Background Layer (60 FPS) */}
      <div className="absolute inset-0 grid grid-cols-6 w-full h-full pointer-events-none z-0 bg-black">
        {COLUMNS.map((col, i) => {
          const scaleY = getColumnScaleY(i, progress);
          return (
            <div key={i} className="relative h-full w-full">
              <div
                className="absolute top-0 left-0 w-full h-full origin-top"
                style={{
                  transform: `scaleY(${scaleY})`,
                  backgroundColor: col.color,
                  willChange: "transform",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Subtle overlay to keep text extremely readable above the background colors */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none bg-black/15 backdrop-blur-[1px]"
        style={{
          background: "radial-gradient(circle at center, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.3) 100%)"
        }}
      />

      {/* Content Container (Fades in as the background turns black) */}
      <motion.div 
        className="relative z-10 flex flex-col items-center px-4 sm:px-6 text-center"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        {/* Wordmark (Anton font structure matching the banner - optimized to not wrap on small screens) */}
        <div
          className="flex items-center gap-1.5 sm:gap-4 mb-4 flex-nowrap justify-center font-anton"
          style={{ textShadow: "0 4px 12px rgba(0,0,0,0.35)" }}
        >
          <span className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide text-white uppercase leading-none">
            THE
          </span>
          <span className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide uppercase px-2 sm:px-4 py-0.5 sm:py-1 bg-white text-black leading-none inline-block">
            ABOVE
          </span>
          <span className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide text-white uppercase leading-none">
            MINDSET
          </span>
        </div>

        {/* Tagline ("STAY ABOVE THE NOISE." matching stronger brand language - scaled for mobile) */}
        <div
          className="flex items-center gap-1.5 sm:gap-2 mb-8 flex-nowrap justify-center font-anton tracking-[0.2em] text-[10px] sm:text-sm md:text-base"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.35)" }}
        >
          <span className="text-white uppercase">STAY</span>
          <span className="px-1.5 py-0.5 bg-white text-black font-anton uppercase text-[8px] sm:text-xs">
            ABOVE
          </span>
          <span className="text-white uppercase">THE NOISE.</span>
        </div>

        {/* Loading Bar sits directly under the words */}
        <div
          className="w-48 sm:w-64 md:w-80 h-[4px] bg-white/10 rounded-full overflow-hidden relative shadow-lg shadow-black/25"
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #DE6B35, #3FA736, #27BDBE, #C9252A, #E5AE07, #3C70CD)",
              transition: "width 0.05s linear",
            }}
          />
        </div>
      </motion.div>

      {/* Subtle clean corners */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-6 h-6 sm:w-8 sm:h-8 border-l border-t border-white/10 pointer-events-none" />
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-6 h-6 sm:w-8 sm:h-8 border-r border-t border-white/10 pointer-events-none" />
      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 w-6 h-6 sm:w-8 sm:h-8 border-l border-b border-white/10 pointer-events-none" />
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-6 h-6 sm:w-8 sm:h-8 border-r border-b border-white/10 pointer-events-none" />
    </motion.div>
  );
}
