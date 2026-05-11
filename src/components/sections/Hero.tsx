"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { AnimatedText } from "@/components/shared/AnimatedText";
import { useTheme } from "@/providers/ThemeProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParticleField = dynamic(
  () => import("@/components/three/ParticleField"),
  { ssr: false }
);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: -100,
        opacity: 0,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Light mode: morning sky gradient (underneath the 3D canvas) */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.8 }}
        style={{
          background: isDark
            ? "transparent"
            : "linear-gradient(180deg, oklch(0.82 0.03 240) 0%, oklch(0.90 0.025 210) 35%, oklch(0.95 0.015 195) 65%, oklch(0.97 0.02 80) 100%)",
        }}
      />

      {/* 3D environment: Stars (dark) or Morning Motes (light) */}
      <div className="absolute inset-0 z-[1]">
        <ParticleField className="w-full h-full" />
      </div>

      {/* Radial gradients / fade */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{
            background: isDark
              ? "radial-gradient(ellipse, oklch(0.75 0.15 195 / 6%) 0%, transparent 70%)"
              : "radial-gradient(ellipse, oklch(0.78 0.16 85 / 8%) 0%, transparent 70%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 text-center section-padding max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-tam-cyan font-mono">
              <span className="w-2 h-2 rounded-full bg-tam-cyan animate-pulse" />
              AI Studio — New Delhi
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6">
            <AnimatedText text="We Build" delay={0.5} trigger="mount" />
            <br />
            <AnimatedText text="Agentic Intelligence" delay={0.8} trigger="mount" wordClassName="text-tam-cyan text-glow-cyan" />
          </h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            AI-native websites, autonomous agents, and intelligent automations
            that transform how businesses operate. Strategy to deployment.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <MagneticButton variant="primary" href="#contact">
              Start a Project
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </MagneticButton>
            <MagneticButton variant="secondary" href="#work">
              View Our Work
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          Scroll
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-tam-cyan"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
