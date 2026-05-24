"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "glass py-3" : "py-5 bg-transparent"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between section-padding">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 cursor-pointer group"
            aria-label="The Above Mindset — Home"
          >
            <img
              src="/THE-ABOVE-MINDSET-LOGO.jpg"
              alt="The Above Mindset Logo"
              className="w-8 h-8 object-contain rounded-md"
              style={{ filter: "brightness(1.1)" }}
            />
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="text-sm font-bold tracking-[0.15em] text-foreground uppercase">The</span>
              <span className="text-sm font-black tracking-[0.15em] text-tam-cyan uppercase px-1.5 py-0.5 border border-tam-cyan/40 bg-tam-cyan/5 group-hover:bg-tam-cyan/10 transition-colors">Above</span>
              <span className="text-sm font-bold tracking-[0.15em] text-foreground uppercase">Mindset</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className={cn(
                  "relative px-4 py-2 text-sm tracking-wide transition-colors duration-300 cursor-pointer rounded-full",
                  activeSection === item.href.replace("#", "")
                    ? "text-tam-cyan"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeSection === item.href.replace("#", "") && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute inset-0 bg-tam-cyan/8 rounded-full border border-tam-cyan/15"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Right side: Toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-primary text-primary-foreground border border-primary/10 hover:opacity-95 rounded-full px-5 py-2 text-sm font-semibold tracking-wide shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 cursor-pointer"
            >
              Start a Project
            </button>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex flex-col gap-1.5 cursor-pointer p-2"
              aria-label="Toggle menu"
            >
              <motion.span className="block w-6 h-[2px] bg-foreground" animate={isMobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} />
              <motion.span className="block w-6 h-[2px] bg-foreground" animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }} />
              <motion.span className="block w-6 h-[2px] bg-foreground" animate={isMobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 glass-strong flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="text-2xl font-semibold text-foreground tracking-wide hover:text-tam-cyan transition-colors cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollTo("#contact")}
              className="bg-primary text-primary-foreground border border-primary/10 hover:opacity-95 rounded-full px-8 py-3 text-lg font-semibold tracking-wide mt-4 cursor-pointer shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.08 }}
            >
              Start a Project
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
