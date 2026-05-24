"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { AnimatedText } from "@/components/shared/AnimatedText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Dynamically import original ParticleField to prevent SSR issues
const ParticleField = dynamic(
  () => import("@/components/three/ParticleField"),
  { ssr: false }
);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 bg-background"
    >
      {/* 1. Star Constellation Particle System - Active in both themes with adapted colors */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleField className="w-full h-full" />
      </div>

      {/* 2. Soft ambient backlight overlays for readability */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {/* Center Text Backlight Highlight */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full dark:opacity-100 light:opacity-40"
          style={{
            background: "radial-gradient(circle, oklch(0.75 0.15 195 / 6%) 0%, transparent 68%)",
          }}
        />

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* 3. Hero Content Layer */}
      <div className="hero-content relative z-10 text-center section-padding max-w-5xl mx-auto mt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2.5 text-xs tracking-[0.25em] uppercase text-tam-cyan font-mono font-semibold bg-tam-cyan/5 border border-tam-cyan/20 px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-tam-cyan animate-pulse" />
              AI Studio — New Delhi
            </span>
          </div>

          {/* Heading using premium Anton Font styled cleanly */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-8 font-anton uppercase font-normal text-foreground">
            <AnimatedText text="We Build" delay={0.5} trigger="mount" />
            <br />
            <AnimatedText
              text="Agentic Intelligence"
              delay={0.8}
              trigger="mount"
              wordClassName="text-primary text-glow-cyan"
            />
          </h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            AI-native websites, autonomous agents, and intelligent automations
            that transform how businesses operate. Strategy to deployment.
          </motion.p>

          {/* CTAs */}
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-mono">
          Scroll
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border border-foreground/10 flex items-start justify-center pt-1.5 bg-background/10 backdrop-blur-sm"
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
