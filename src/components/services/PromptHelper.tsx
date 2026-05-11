"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/shared/GlassCard";
import { MagneticButton } from "@/components/shared/MagneticButton";

interface PromptHelperProps {
  serviceName: string;
}

export function PromptHelper({ serviceName }: PromptHelperProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const template = `Hi Kanav,

My name is [Your Name] from [Company/Website].
I'm interested in ${serviceName} for [short description of need].

Budget range: [Budget range]
Timeline: [Rough timeline]
Current stack/tools: [Optional]

The main outcomes I want:
1. [Outcome 1]
2. [Outcome 2]
3. [Outcome 3]`;

  const handleCopy = async () => {
    if (textRef.current) {
      await navigator.clipboard.writeText(textRef.current.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleUseInForm = () => {
    if (textRef.current) {
      const msg = textRef.current.value;
      sessionStorage.setItem("tam-brief", msg);
      window.location.href = "/#contact";
    }
  };

  return (
    <>
      <GlassCard variant="cyan" className="mt-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">
              Get a project brief for {serviceName}
            </h3>
            <p className="text-muted-foreground text-sm max-w-lg">
              Answer a few quick fields and we&apos;ll generate a ready-to-send project brief.
              Takes 30 seconds.
            </p>
          </div>
          <MagneticButton
            variant="primary"
            onClick={() => setIsOpen(true)}
          >
            Generate My Brief ✨
          </MagneticButton>
        </div>
      </GlassCard>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Panel */}
            <motion.div
              className="relative z-10 w-full max-w-2xl glass-strong rounded-3xl p-8"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold">Your project brief</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                Edit the bracketed placeholders below, then copy or send directly via our contact form, email, or WhatsApp.
              </p>

              <textarea
                ref={textRef}
                defaultValue={template}
                rows={12}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-foreground font-mono leading-relaxed resize-none focus:outline-none focus:border-tam-cyan/50 focus:ring-1 focus:ring-tam-cyan/20"
                aria-label="Project brief template"
              />

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-6">
                <MagneticButton variant="primary" onClick={handleCopy}>
                  {copied ? "Copied! ✓" : "Copy Brief"}
                </MagneticButton>
                <MagneticButton variant="secondary" onClick={handleUseInForm}>
                  Use in Contact Form →
                </MagneticButton>
                <a
                  href="https://wa.me/918076056534"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-full px-6 py-3 text-sm font-medium text-center text-foreground tracking-wide hover:border-white/20 transition-all duration-300"
                >
                  Send via WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
