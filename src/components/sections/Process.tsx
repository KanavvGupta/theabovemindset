"use client";

import { useRef, useEffect } from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "STAGE 01",
    badge: "Foundation",
    title: "Technical & Operational Audit",
    description:
      "Strategy isn't about slide decks; it's about mapping your technical realities. We audit your existing data pipes, locate operations bottlenecks, and define the exact scope that moves the needle.",
    colorClass: "bg-tam-cyan/10 text-tam-cyan border-tam-cyan/20",
  },
  {
    number: "STAGE 02",
    badge: "System Design",
    title: "Architecture & Blueprinting",
    description:
      "We outline the technical blueprint. This means detailed data schemas, prompt strategies, model selection matrices, and modular service diagrams. We design it to scale, not shatter.",
    colorClass: "bg-tam-cyan/10 text-tam-cyan border-tam-cyan/20",
  },
  {
    number: "STAGE 03",
    badge: "Build Sprint",
    title: "Modular Development Sprints",
    description:
      "Pure execution in modular tracks. While the backend engineers wire model endpoints and vector stores, frontend developers craft premium glass interfaces. We demo every Friday so you know exactly where we stand.",
    colorClass: "bg-tam-amber/10 text-tam-amber border-tam-amber/20",
  },
  {
    number: "STAGE 04",
    badge: "Hardening",
    title: "Adversarial Testing & Safety",
    description:
      "Putting the build through extreme trials. We run model evaluation suites, stress-test API latency, patch prompt-injection vectors, and harden critical edge cases. If it fails here, it doesn't ship.",
    colorClass: "bg-tam-cyan/10 text-tam-cyan border-tam-cyan/20",
  },
  {
    number: "STAGE 05",
    badge: "Launch Support",
    title: "Production & Telemetry Tuning",
    description:
      "Seamless transition into production. We configure automated cost-guardrails, deploy live latency telemetry, and establish feedback loops that refine agent performance based on actual user interactions.",
    colorClass: "bg-tam-cyan/10 text-tam-cyan border-tam-cyan/20",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the timeline line growing
      gsap.fromTo(
        ".process-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".process-timeline",
            start: "top 70%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );

      // Stagger steps
      gsap.fromTo(
        ".process-step",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-timeline",
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative section-y section-padding overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Process"
          title="How we"
          highlight="operate."
          description="Our engineered delivery framework. We strip away agency bloat and deliver robust production solutions through five rigorous stages."
          align="center"
        />

        {/* Global style overrides for the Process section */}
        <style jsx global>{`
          .dark {
            --dot-bg: oklch(0.08 0.008 260);
          }
          .light {
            --dot-bg: oklch(0.97 0.006 220);
          }

          /* Glass Cards for steps */
          .process-glass-card {
            background: var(--card-bg);
            backdrop-filter: blur(24px) saturate(1.8);
            border: 1px solid var(--glass-border);
            box-shadow: 
              0 4px 30px rgba(0, 0, 0, 0.01),
              inset 0 1px 1px var(--glass-inner-border);
            transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            position: relative;
            overflow: hidden;
          }

          .dark .process-glass-card {
            box-shadow: 
              0 8px 32px rgba(0, 0, 0, 0.3),
              inset 0 1px 1px var(--glass-inner-border);
          }

          .process-glass-card:hover {
            transform: translateY(-2px);
          }
          
          .dark .process-glass-card:hover {
            border-color: oklch(0.75 0.15 195 / 20%);
            box-shadow: 
              0 12px 40px oklch(0.75 0.15 195 / 5%),
              inset 0 1px 1.5px oklch(1 0 0 / 12%);
          }
          .light .process-glass-card:hover {
            border-color: oklch(0.45 0.18 195 / 15%);
            box-shadow: 
              0 12px 40px oklch(0.45 0.18 195 / 4%),
              inset 0 1px 1.5px oklch(1 0 0 / 95%);
          }

          /* Mathematical alignment vertical line background overrides */
          .dark .vertical-line-container {
            background-color: rgba(255, 255, 255, 0.05);
          }
          .light .vertical-line-container {
            background-color: rgba(0, 0, 0, 0.05);
          }

          /* Interactive connection: hover row lights up the timeline dot & step number */
          .process-step:hover .timeline-dot {
            border-color: var(--color-primary);
            background-color: var(--color-primary);
            box-shadow: 0 0 10px var(--color-primary-glow);
            transform: scale(1.25);
          }

          .process-step:hover .step-num-text {
            color: var(--color-primary);
            transform: translateX(2px);
          }

          .step-num-text {
            transition: color 0.3s ease, transform 0.3s ease;
            display: inline-block;
          }

          .title-theme {
            color: var(--text-title);
          }
          .muted-theme {
            color: var(--text-muted);
          }

          .timeline-dot {
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                        border-color 0.3s ease, 
                        background-color 0.3s ease, 
                        box-shadow 0.3s ease;
          }
        `}</style>

        <div className="process-timeline relative max-w-3xl mx-auto mt-16 md:mt-24">
          
          {/* Perfectly mathematically centered timeline line */}
          <div className="vertical-line-container absolute top-4 bottom-4 left-5 md:left-7 w-[2px] -translate-x-1/2 z-0">
            <div className="process-line absolute inset-0 bg-gradient-to-b from-tam-cyan via-tam-cyan/40 to-tam-amber origin-top" />
          </div>

          <div className="space-y-10 md:space-y-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className="process-step grid grid-cols-[40px_1fr] md:grid-cols-[56px_1fr] gap-6 md:gap-8 items-start relative z-10"
              >
                {/* Marker Center */}
                <div className="flex justify-center items-center h-8 relative">
                  <div className="timeline-dot w-[14px] h-[14px] rounded-full border-2 border-tam-cyan/40 bg-[var(--dot-bg)] z-10" />
                </div>

                {/* Content Card */}
                <div className="process-glass-card p-6 md:p-8 rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <span className="step-num-text text-xs font-mono font-semibold text-tam-cyan tracking-wider">
                        {step.number}
                      </span>
                      <span className={`text-[10px] tracking-widest uppercase font-mono border px-2.5 py-0.5 rounded font-bold ${step.colorClass}`}>
                        {step.badge}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 title-theme">
                      {step.title}
                    </h3>
                    <p className="muted-theme leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
