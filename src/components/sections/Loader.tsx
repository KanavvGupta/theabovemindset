"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [phase, setPhase] = useState<"boot" | "reveal" | "done">("boot");
  const progressRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);

  const completeLoader = useCallback(() => {
    setPhase("reveal");
    setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 600);
  }, [onComplete]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      const t = setTimeout(() => { setPhase("done"); onComplete(); }, 600);
      return () => clearTimeout(t);
    }

    const msgs = [
      "Initializing neural fabric",
      "Calibrating agent workflows",
      "Syncing agentic systems",
      "Ready",
    ];
    let idx = 0;
    const msgInt = setInterval(() => {
      if (statusRef.current && idx < msgs.length) {
        statusRef.current.textContent = msgs[idx];
        idx++;
      }
    }, 450);

    // Animate progress bar
    if (progressRef.current) {
      progressRef.current.style.transition = "width 2s cubic-bezier(0.76, 0, 0.24, 1)";
      requestAnimationFrame(() => {
        if (progressRef.current) progressRef.current.style.width = "100%";
      });
    }

    // Anime.js dynamic import for letter animation
    import("animejs").then(({ animate: animeAnimate }) => {
      animeAnimate(".loader-letter", {
        opacity: [0, 1],
        translateY: [20, 0],
        filter: ["blur(8px)", "blur(0px)"],
        delay: (_el: Element, i: number) => 200 + i * 60,
        duration: 600,
        ease: "outExpo",
      });
    }).catch(() => {
      document.querySelectorAll(".loader-letter").forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
      });
    });

    const t = setTimeout(() => { clearInterval(msgInt); completeLoader(); }, 2200);
    return () => { clearInterval(msgInt); clearTimeout(t); };
  }, [onComplete, completeLoader]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "oklch(0.06 0.01 260)" }}
          exit={{ opacity: 0, scale: 1.04, filter: "blur(12px)" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Gradient mesh from logo colors: green + teal + warm yellow hints */}
          <div className="absolute inset-0">
            {/* Teal blob (primary) */}
            <motion.div
              className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-[150px]"
              style={{
                background: "radial-gradient(circle, oklch(0.55 0.15 195 / 50%), transparent 70%)",
                top: "10%",
                left: "20%",
              }}
              animate={{
                x: [0, 70, -30, 0],
                y: [0, -40, 25, 0],
                scale: [1, 1.1, 0.92, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Green blob (logo band 1) */}
            <motion.div
              className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[130px]"
              style={{
                background: "radial-gradient(circle, oklch(0.50 0.16 155 / 40%), transparent 70%)",
                bottom: "15%",
                right: "10%",
              }}
              animate={{
                x: [0, -50, 35, 0],
                y: [0, 35, -20, 0],
                scale: [1, 0.88, 1.08, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Warm yellow/gold hint (logo band 4) */}
            <motion.div
              className="absolute w-[400px] h-[400px] rounded-full opacity-12 blur-[100px]"
              style={{
                background: "radial-gradient(circle, oklch(0.65 0.14 85 / 30%), transparent 70%)",
                top: "55%",
                left: "55%",
              }}
              animate={{
                x: [0, 25, -40, 0],
                y: [0, -25, 15, 0],
                scale: [1, 1.06, 0.94, 1],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Red accent (logo band 3) — very subtle */}
            <motion.div
              className="absolute w-[300px] h-[300px] rounded-full opacity-8 blur-[90px]"
              style={{
                background: "radial-gradient(circle, oklch(0.50 0.18 25 / 25%), transparent 70%)",
                top: "25%",
                right: "25%",
              }}
              animate={{
                x: [0, 15, -20, 0],
                y: [0, -15, 10, 0],
              }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Content */}
          <motion.div
            className="relative z-10 flex flex-col items-center px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Brand Logo */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              <img
                src="/THE-ABOVE-MINDSET-LOGO.jpg"
                alt="The Above Mindset Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-xl"
                style={{ filter: "brightness(1.1) contrast(1.05)" }}
              />
            </motion.div>

            {/* Wordmark */}
            <div className="flex items-center gap-2 sm:gap-3 mb-4 flex-wrap justify-center" aria-label="The Above Mindset">
              {"THE".split("").map((letter, i) => (
                <span
                  key={`the-${i}`}
                  className="loader-letter text-lg sm:text-2xl md:text-3xl font-bold tracking-[0.15em] text-white uppercase opacity-0"
                  style={{ display: "inline-block" }}
                >
                  {letter}
                </span>
              ))}
              <span className="loader-letter text-lg sm:text-2xl md:text-3xl font-black tracking-[0.15em] uppercase px-2 sm:px-3 py-1 border border-tam-cyan/30 bg-tam-cyan/5 text-tam-cyan opacity-0">
                ABOVE
              </span>
              {"MINDSET".split("").map((letter, i) => (
                <span
                  key={`mindset-${i}`}
                  className="loader-letter text-lg sm:text-2xl md:text-3xl font-bold tracking-[0.15em] text-white uppercase opacity-0"
                  style={{ display: "inline-block" }}
                >
                  {letter}
                </span>
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              className="text-sm md:text-base text-white/60 tracking-wide mb-8 text-center max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Agentic AI systems that actually ship.
            </motion.p>

            {/* Progress bar — logo colors gradient */}
            <div className="w-56 sm:w-64 md:w-80 h-[2px] bg-white/5 rounded-full overflow-hidden mb-4">
              <div
                ref={progressRef}
                className="h-full rounded-full"
                style={{
                  width: "0%",
                  background: "linear-gradient(90deg, oklch(0.65 0.18 155), oklch(0.75 0.15 195), oklch(0.78 0.16 85))",
                }}
              />
            </div>

            {/* Status */}
            <span ref={statusRef} className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/40 font-mono">
              Initializing neural fabric
            </span>
          </motion.div>

          {/* Corner decorations */}
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-6 h-6 sm:w-8 sm:h-8 border-l border-t border-tam-cyan/20" />
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-6 h-6 sm:w-8 sm:h-8 border-r border-t border-tam-cyan/20" />
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 w-6 h-6 sm:w-8 sm:h-8 border-l border-b border-tam-cyan/20" />
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-6 h-6 sm:w-8 sm:h-8 border-r border-b border-tam-cyan/20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
