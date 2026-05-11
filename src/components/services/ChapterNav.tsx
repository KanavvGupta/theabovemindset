"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Chapter } from "@/data/services";

interface ChapterNavProps {
  chapters: Chapter[];
  activeChapter: string;
  onSelect: (id: string) => void;
}

export function ChapterNav({ chapters, activeChapter, onSelect }: ChapterNavProps) {
  return (
    <nav className="space-y-1">
      <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 px-3">
        Chapters
      </p>
      {chapters.map((chapter) => {
        const isActive = chapter.id === activeChapter;
        return (
          <button
            key={chapter.id}
            onClick={() => onSelect(chapter.id)}
            className={cn(
              "relative w-full text-left px-4 py-2.5 rounded-xl text-sm transition-colors cursor-pointer",
              isActive
                ? "text-tam-cyan font-medium"
                : "text-muted-foreground hover:text-white hover:bg-white/[0.03]"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="chapterIndicator"
                className="absolute inset-0 bg-tam-cyan/8 border border-tam-cyan/15 rounded-xl"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{chapter.title}</span>
          </button>
        );
      })}
    </nav>
  );
}
