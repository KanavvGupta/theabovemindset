"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { GlassCard } from "@/components/shared/GlassCard";
import { services } from "@/data/services";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Distinct accent colors for each service card hover gradient
const serviceAccents = [
  "from-[oklch(0.65_0.15_195)] via-[oklch(0.55_0.12_210)] to-transparent", // Agentic AI - deep cyan
  "from-[oklch(0.55_0.14_250)] via-[oklch(0.45_0.12_270)] to-transparent", // AI-Native - indigo
  "from-[oklch(0.55_0.12_310)] via-[oklch(0.45_0.10_290)] to-transparent", // Conversational - purple
  "from-[oklch(0.6_0.14_150)] via-[oklch(0.5_0.12_160)] to-transparent",  // Workflow - emerald
  "from-[oklch(0.65_0.14_75)] via-[oklch(0.55_0.12_60)] to-transparent",  // Strategy - amber
  "from-[oklch(0.55_0.14_340)] via-[oklch(0.45_0.12_330)] to-transparent", // 3D - magenta
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: ".services-grid", start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative section-y section-padding">
      {/* Background glow */}
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-[radial-gradient(ellipse,oklch(0.78_0.16_75_/_4%)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Services"
          title="What we"
          highlight="build."
          description="Six core capabilities, each refined through dozens of real deployments. Click any service to explore the full playbook."
        />

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="service-card block"
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <GlassCard
                className={`h-full group cursor-pointer relative overflow-hidden ${
                  service.featured ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
                }`}
                variant={service.featured ? "cyan" : "default"}
              >
                {/* Gradient motion blob — blurred, behind glass content */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 30% 40%, oklch(0.55 0.12 ${195 + i * 30} / 30%), transparent 70%)`,
                    filter: "blur(40px)",
                  }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{
                    opacity: hoveredIdx === i ? 0.7 : 0,
                    scale: hoveredIdx === i ? 1.2 : 0.7,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                <div className={`relative z-10 flex flex-col h-full ${service.featured ? "justify-between" : ""}`}>
                  <div>
                    <span className="text-3xl mb-4 block">{service.icon}</span>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-tam-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.span
                      className="text-xs text-muted-foreground group-hover:text-tam-cyan transition-colors flex items-center gap-1"
                      animate={{
                        x: hoveredIdx === i ? 4 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      Explore
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.span>
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
