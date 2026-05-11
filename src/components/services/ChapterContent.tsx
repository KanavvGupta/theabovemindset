"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Chapter } from "@/data/services";

interface ChapterContentProps {
  chapter: Chapter;
}

export function ChapterContent({ chapter }: ChapterContentProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={chapter.id}
        initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{chapter.title}</h2>

        <div className="space-y-4">
          {chapter.subtopics.map((sub, i) => (
            <motion.div
              key={sub.title}
              className="group glass rounded-2xl p-5 hover:border-white/15 transition-all duration-300 hover:translate-y-[-2px]"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <h3 className="text-base font-semibold mb-1.5 group-hover:text-tam-cyan transition-colors">
                {sub.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {sub.intro}
              </p>
              {sub.tags && sub.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {sub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-tam-cyan/8 text-tam-cyan border border-tam-cyan/15 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
