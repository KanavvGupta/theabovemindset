"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { GlassCard } from "@/components/shared/GlassCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "AI & Agents",
    tools: [
      { name: "OpenAI GPT-4o", icon: "🧠" },
      { name: "Claude", icon: "🤖" },
      { name: "LangChain", icon: "🔗" },
      { name: "CrewAI", icon: "👥" },
      { name: "Pinecone", icon: "🌲" },
      { name: "Supabase", icon: "⚡" },
    ],
  },
  {
    title: "Frontend & 3D",
    tools: [
      { name: "Next.js", icon: "▲" },
      { name: "React", icon: "⚛️" },
      { name: "Three.js", icon: "🔮" },
      { name: "GSAP", icon: "🎬" },
      { name: "Framer Motion", icon: "✨" },
      { name: "Tailwind CSS", icon: "🎨" },
    ],
  },
  {
    title: "Backend & Infra",
    tools: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "FastAPI", icon: "⚡" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Redis", icon: "🔴" },
      { name: "Docker", icon: "🐳" },
    ],
  },
  {
    title: "Automation & Ops",
    tools: [
      { name: "n8n", icon: "🔄" },
      { name: "Make", icon: "⚙️" },
      { name: "Vercel", icon: "▲" },
      { name: "AWS", icon: "☁️" },
      { name: "GitHub Actions", icon: "🚀" },
      { name: "Sentry", icon: "🛡️" },
    ],
  },
];

export default function Stack() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stack-category",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stack-grid",
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
      id="stack"
      className="relative section-y section-padding"
    >
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 w-80 h-80 bg-[radial-gradient(ellipse,oklch(0.78_0.16_75_/_4%)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Stack"
          title="Tools we"
          highlight="wield."
          description="A carefully selected toolkit spanning AI, frontend, backend, and automation. We pick the right tool for each job, not the trendiest."
          align="center"
        />

        <div className="stack-grid grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {categories.map((category) => (
            <GlassCard
              key={category.title}
              className="stack-category"
              variant="default"
            >
              <h3 className="text-lg font-bold mb-5 text-tam-cyan">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.tools.map((tool) => (
                  <motion.div
                    key={tool.name}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] transition-colors group cursor-default"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-lg">{tool.icon}</span>
                    <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
