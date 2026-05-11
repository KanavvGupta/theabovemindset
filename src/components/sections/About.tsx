"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "3+", label: "Years Building AI" },
  { value: "12+", label: "Agent Systems Live" },
  { value: "100%", label: "Remote & Global" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-stat",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-stats-grid",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative section-y section-padding"
    >
      {/* Subtle gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse,oklch(0.75_0.15_195_/_3%)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text */}
          <div>
            <SectionHeader
              badge="About"
              title="An AI studio that"
              highlight="ships intelligence."
              description="The Above Mindset is a focused AI consultancy based in New Delhi, working with founders and teams globally. We don't just build websites — we architect agentic systems, deploy conversational AI, and automate workflows that would otherwise require entire departments."
            />

            <motion.p
              className="text-muted-foreground leading-relaxed mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Every project starts with strategy: understanding what intelligence
              your business actually needs, then designing the minimal system that
              delivers it. No bloat. No demo-ware. Real agents solving real
              problems.
            </motion.p>
          </div>

          {/* Right: Stats Grid */}
          <div className="about-stats-grid grid grid-cols-2 gap-4 lg:mt-12">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="about-stat glass rounded-2xl p-6 flex flex-col items-start"
              >
                <span className="text-4xl md:text-5xl font-bold text-gradient-cyan">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground mt-2 tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
