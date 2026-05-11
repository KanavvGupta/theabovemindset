"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChapterNav } from "./ChapterNav";
import { ChapterContent } from "./ChapterContent";
import { PromptHelper } from "./PromptHelper";
import type { ServiceData } from "@/data/services";

interface ServiceLibraryProps {
  service: ServiceData;
}

export function ServiceLibrary({ service }: ServiceLibraryProps) {
  const [activeChapter, setActiveChapter] = useState(service.chapters[0].id);
  const currentChapter = service.chapters.find((c) => c.id === activeChapter) ?? service.chapters[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Gradient background wash — softer, distinct from loader/card hovers */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full blur-[160px]"
          style={{
            background: `radial-gradient(circle, oklch(0.55 0.1 210 / 20%), transparent 70%)`,
            top: "-10%",
            right: "-5%",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, 20, -15, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[130px]"
          style={{
            background: `radial-gradient(circle, oklch(0.6 0.1 160 / 15%), transparent 70%)`,
            bottom: "5%",
            left: "-3%",
          }}
          animate={{
            x: [0, -25, 15, 0],
            y: [0, -20, 10, 0],
            scale: [1, 0.95, 1.08, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding pt-28 pb-20">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-tam-cyan transition-colors mb-10 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to services
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{service.icon}</span>
            <Badge variant="outline" className="border-tam-cyan/30 text-tam-cyan bg-tam-cyan/5 text-xs tracking-widest uppercase">
              Service
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {service.shortDescription}
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {service.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-tam-cyan/5 text-tam-cyan border border-tam-cyan/15">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Library layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Sidebar */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="glass rounded-2xl p-4 lg:p-5">
              <ChapterNav
                chapters={service.chapters}
                activeChapter={activeChapter}
                onSelect={setActiveChapter}
              />
            </div>
          </div>

          {/* Content */}
          <div className="min-w-0">
            <ChapterContent chapter={currentChapter} />
            <PromptHelper serviceName={service.title} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
