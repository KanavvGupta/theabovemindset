"use client";

import { useRef, useEffect } from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We start with a deep-dive into your business, operations, and goals. No generic questionnaires — we map your actual workflows and pinpoint where AI creates the most leverage.",
    duration: "1–2 weeks",
  },
  {
    number: "02",
    title: "Architecture & Design",
    description:
      "System architecture, data flow diagrams, prompt engineering strategy, and UI/UX design. We prototype the critical path first, validating feasibility before building anything at scale.",
    duration: "1–2 weeks",
  },
  {
    number: "03",
    title: "Build & Integrate",
    description:
      "Modular development sprints. Agents, APIs, frontends, and automations are built in parallel tracks. Continuous integration with your existing stack. Weekly demos, no surprises.",
    duration: "3–6 weeks",
  },
  {
    number: "04",
    title: "Test & Harden",
    description:
      "Adversarial testing, edge-case handling, prompt injection defence, load testing, and UX refinement. We don't ship until it handles the weird stuff gracefully.",
    duration: "1–2 weeks",
  },
  {
    number: "05",
    title: "Deploy & Evolve",
    description:
      "Production deployment with monitoring, analytics, and feedback loops baked in. Post-launch, we tune agent behaviour, optimize costs, and iterate based on real usage data.",
    duration: "Ongoing",
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
          stagger: 0.2,
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
      className="relative section-y section-padding"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Process"
          title="How we"
          highlight="operate."
          description="A structured, transparent process refined over dozens of engagements. From first call to production in weeks, not months."
        />

        <div className="process-timeline relative max-w-3xl">
          {/* Vertical timeline line */}
          <div className="absolute left-[18px] md:left-[22px] top-0 bottom-0 w-[2px] bg-white/5">
            <div className="process-line absolute inset-0 bg-gradient-to-b from-tam-cyan via-tam-cyan/50 to-tam-amber origin-top" />
          </div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={step.number} className="process-step relative pl-14 md:pl-16">
                {/* Dot */}
                <div className="absolute left-2.5 md:left-3 top-1 w-[14px] h-[14px] rounded-full border-2 border-tam-cyan bg-background z-10" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-tam-cyan tracking-widest">
                      {step.number}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mt-1 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs font-mono text-muted-foreground bg-white/5 px-3 py-1 rounded-full mt-1 hidden md:block">
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
