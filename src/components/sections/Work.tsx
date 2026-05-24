"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { GlassCard } from "@/components/shared/GlassCard";
import { Badge } from "@/components/ui/badge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "neural-crm",
    title: "Neural CRM Agent",
    category: "Agentic AI",
    year: "2025",
    description:
      "A multi-agent CRM system that autonomously qualifies leads, researches prospects, drafts personalized outreach, and schedules follow-ups. Reduced sales team manual work by 70%.",
    results: ["70% less manual work", "3x response rate", "24/7 autonomous operation"],
    stack: ["CrewAI", "GPT-4o", "Supabase", "n8n"],
    color: "from-tam-cyan/20 to-tam-cyan/5",
  },
  {
    id: "immersive-portfolio",
    title: "3D Product Configurator",
    category: "Immersive Web",
    year: "2025",
    description:
      "A WebGL-powered product customization experience for a furniture brand. Real-time material swapping, AR preview, and AI-generated room mockups. Tripled average session duration.",
    results: ["3x session duration", "45% conversion lift", "Sub-2s LCP"],
    stack: ["Three.js", "React", "GSAP", "WebGi"],
    color: "from-tam-amber/20 to-tam-amber/5",
  },
  {
    id: "knowledge-bot",
    title: "Enterprise Knowledge Agent",
    category: "Conversational AI",
    year: "2024",
    description:
      "A RAG-powered internal knowledge assistant for a 500-person company. Ingests Confluence, Slack, and Notion. Answers questions with source citations. Handles 2,000+ queries/day.",
    results: ["2K+ queries/day", "92% accuracy", "40% fewer support tickets"],
    stack: ["LangChain", "Pinecone", "Claude", "Next.js"],
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    id: "auto-content",
    title: "AI Content Pipeline",
    category: "Automation",
    year: "2024",
    description:
      "An automated content production system for a media company. Researches topics, writes drafts, generates images, formats for multiple platforms, and queues for publishing. One click, full pipeline.",
    results: ["10x content output", "85% cost reduction", "Multi-platform"],
    stack: ["n8n", "GPT-4o", "DALL-E", "Vercel"],
    color: "from-green-500/20 to-green-500/5",
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".work-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".work-grid",
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
      id="work"
      className="relative section-y section-padding"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Work"
          title="Selected"
          highlight="projects."
          description="A curated selection of projects that demonstrate our depth across AI agents, automation, and immersive web experiences."
        />

        <div className="work-grid grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="work-card"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <GlassCard className="h-full group" variant="default">
                {/* Project gradient accent */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <Badge
                      variant="outline"
                      className="border-foreground/10 text-muted-foreground text-xs"
                    >
                      {project.category}
                    </Badge>
                    <span className="text-xs font-mono text-muted-foreground">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-tam-cyan transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    {project.results.map((result) => (
                      <span
                        key={result}
                        className="text-xs font-semibold text-tam-cyan bg-tam-cyan/8 px-3 py-1.5 rounded-full"
                      >
                        {result}
                      </span>
                    ))}
                  </div>

                  {/* Stack */}
                  <div className="flex items-center gap-2 pt-4 border-t border-foreground/5">
                    <span className="text-xs text-muted-foreground mr-1">Built with:</span>
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded bg-foreground/5 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
