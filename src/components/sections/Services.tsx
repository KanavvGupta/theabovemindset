"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { GlassCard } from "@/components/shared/GlassCard";
import { services } from "@/data/services";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Sophisticated brand spotlights for each service card
// Standard spotlights use refined cyan/teal brand tones; select cards get custom-tuned accents
const serviceSpotlights = [
  // 1. Agentic AI Systems (cyan / teal intelligence pulse)
  {
    bgDark: "rgba(191, 240, 252, 0.08)",
    borderDark: "rgba(191, 240, 252, 0.38)",
    bgLight: "rgba(45, 133, 155, 0.06)",
    borderLight: "rgba(45, 133, 155, 0.28)",
  },
  // 2. AI-Native Websites (electric blue sweep)
  {
    bgDark: "rgba(59, 130, 246, 0.08)",
    borderDark: "rgba(59, 130, 246, 0.38)",
    bgLight: "rgba(29, 78, 216, 0.06)",
    borderLight: "rgba(29, 78, 216, 0.28)",
  },
  // 3. Conversational AI & Chatbots (subtle soft signal glow)
  {
    bgDark: "rgba(147, 197, 253, 0.06)",
    borderDark: "rgba(147, 197, 253, 0.28)",
    bgLight: "rgba(29, 78, 216, 0.04)",
    borderLight: "rgba(29, 78, 216, 0.20)",
  },
  // 4. Workflow Automation (amber / copper system flow)
  {
    bgDark: "rgba(251, 146, 60, 0.08)",
    borderDark: "rgba(251, 146, 60, 0.38)",
    bgLight: "rgba(194, 65, 12, 0.06)",
    borderLight: "rgba(194, 65, 12, 0.28)",
  },
  // 5. AI Strategy & Consulting (refined cerebral glow)
  {
    bgDark: "rgba(196, 181, 253, 0.07)",
    borderDark: "rgba(196, 181, 253, 0.32)",
    bgLight: "rgba(109, 40, 217, 0.05)",
    borderLight: "rgba(109, 40, 217, 0.24)",
  },
  // 6. 3D & Immersive Experiences (cool dimensional shimmer)
  {
    bgDark: "rgba(165, 243, 252, 0.06)",
    borderDark: "rgba(165, 243, 252, 0.30)",
    bgLight: "rgba(14, 116, 144, 0.05)",
    borderLight: "rgba(14, 116, 144, 0.22)",
  },
  // 7. WhatsApp Automation (emerald / green-teal live motion)
  {
    bgDark: "rgba(110, 231, 183, 0.09)",
    borderDark: "rgba(110, 231, 183, 0.40)",
    bgLight: "rgba(4, 120, 87, 0.07)",
    borderLight: "rgba(4, 120, 87, 0.30)",
  },
  // 8. Growth Systems / Marketing Automation (warm data-flow glow)
  {
    bgDark: "rgba(253, 186, 116, 0.08)",
    borderDark: "rgba(253, 186, 116, 0.38)",
    bgLight: "rgba(180, 83, 9, 0.06)",
    borderLight: "rgba(180, 83, 9, 0.28)",
  },
];

// Video source — single asset cached by browser, recolored per card via CSS filters
const MOTION_VIDEO_SRC = "/videos/wave-motion.mp4";



export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isLightMode, setIsLightMode] = useState(false);

  // Assign video ref for a card index
  const setVideoRef = useCallback((el: HTMLVideoElement | null, index: number) => {
    videoRefs.current[index] = el;
  }, []);

  // Performance-focused autoplay and viewport visibility loop
  useEffect(() => {
    // Auto-play all videos initially
    videoRefs.current.forEach((video) => {
      if (video) {
        video.playbackRate = 1.0;
        video.play().catch(() => {
          // Autoplay blocked - browser will handle gracefully
        });
      }
    });

    // IntersectionObserver to pause videos when scrolled out of view (saves CPU/GPU resources)
    let observer: IntersectionObserver | null = null;
    if (sectionRef.current && typeof window !== "undefined" && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            videoRefs.current.forEach((video) => {
              if (!video) return;
              if (entry.isIntersecting) {
                video.play().catch(() => {});
              } else {
                video.pause();
              }
            });
          });
        },
        { threshold: 0.05 }
      );
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Dynamic theme observer to update light mode states
    const checkTheme = () => {
      setIsLightMode(document.documentElement.classList.contains("light"));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // GSAP staggered entry animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".services-grid", start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => {
      observer.disconnect();
      ctx.revert();
    };
  }, []);

  // Parses markdown-like **bolding** to apply cohesive brand accent and subtle glow
  const renderHighlightedText = (text: string, index: number, isHovered: boolean) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, idx) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const cleanText = part.slice(2, -2);
        return (
          <strong
            key={idx}
            className={`font-bold transition-all duration-500 ${
              isHovered ? "service-highlight" : "text-inherit"
            }`}
          >
            {cleanText}
          </strong>
        );
      }
      return part;
    });
  };

  // Performance-optimized cursor coordinate tracker
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    // Graceful touch-device degradation
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Direct style update bypasses React re-render lags for 60FPS fluid motion
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section ref={sectionRef} id="services" className="relative section-y section-padding">
      {/* Background glow ambient gradient */}
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-[radial-gradient(ellipse,oklch(0.78_0.16_75_/_4%)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Services"
          title="What we"
          highlight="build."
          description="Eight core capabilities, each refined through dozens of real deployments. Click any service to explore the full playbook."
        />

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const spotlight = serviceSpotlights[i] || serviceSpotlights[0];
            const spotlightBg = isLightMode ? spotlight.bgLight : spotlight.bgDark;
            const spotlightBorder = isLightMode ? spotlight.borderLight : spotlight.borderDark;
            const isWhatsApp = service.slug === "whatsapp-automation";
            const isAgentic = service.featured;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-card block"
              >
                <GlassCard
                  className={`h-full group cursor-pointer relative overflow-hidden transition-all duration-500 border border-white/5 ${
                    isAgentic ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
                  } ${
                    isWhatsApp ? "ring-1 ring-tam-green/10" : ""
                  }`}
                  variant={isAgentic ? "cyan" : "default"}
                  onMouseMove={(e) => handleMouseMove(e, i)}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* ===== 1. DARK SCRIM — jet black void on hover ===== */}
                  {/* Sits below everything so the motion glows THROUGH the darkness */}
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none z-[1] transition-opacity duration-700 ease-out"
                    style={{
                      opacity: hoveredIdx === i ? 1 : 0,
                      background: "oklch(0.03 0.008 260 / 92%)",
                    }}
                  />

                  {/* ===== 2. MOTION VIDEO — glows through the dark void ===== */}
                  <video
                    ref={(el) => setVideoRef(el, i)}
                    className={`service-motion-video service-motion-${i} z-[2]`}
                    src={MOTION_VIDEO_SRC}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                  />

                  {/* ===== 3. Gradient fade mask — softens motion edges ===== */}
                  <div className="service-motion-mask z-[3]" />

                  {/* ===== 4. Pointer spotlight bloom ===== */}
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[4] overflow-hidden"
                    style={{
                      background: `radial-gradient(320px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), ${spotlightBg}, transparent 80%)`,
                    }}
                  />

                  {/* ===== 5. Ambient blur blob ===== */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none z-[5]"
                    style={{
                      background: `radial-gradient(ellipse at 30% 40%, oklch(0.55 0.12 ${195 + (i % 6) * 30} / 12%), transparent 70%)`,
                      filter: "blur(40px)",
                    }}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{
                      opacity: hoveredIdx === i ? 0.5 : 0.1,
                      scale: hoveredIdx === i ? 1.2 : 0.85,
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />

                  {/* ===== 6. Border glow (XOR mask) ===== */}
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30"
                    style={{
                      padding: "1px",
                      background: `radial-gradient(220px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), ${spotlightBorder}, transparent 80%)`,
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "exclude",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "dest-out",
                    }}
                  />

                  {/* ===== 7. TEXT CONTENT — pops crisp over blazing motion ===== */}
                  <div
                    className={`relative z-10 flex flex-col h-full transition-all duration-500 ${isAgentic ? "justify-between" : ""}`}
                    style={{
                      textShadow: hoveredIdx === i
                        ? "0 1px 3px oklch(0 0 0 / 80%), 0 2px 12px oklch(0 0 0 / 50%), 0 0 24px oklch(0 0 0 / 30%)"
                        : "none",
                    }}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl block">{service.icon}</span>
                        {isWhatsApp && (
                          <span className="text-[10px] uppercase tracking-widest font-extrabold px-2.5 py-0.5 rounded-full bg-tam-green/10 text-tam-green border border-tam-green/20 animate-pulse">
                            Meta Partner
                          </span>
                        )}
                        {isAgentic && (
                          <span className="text-[10px] uppercase tracking-widest font-extrabold px-2.5 py-0.5 rounded-full bg-tam-cyan/10 text-tam-cyan border border-tam-cyan/20">
                            Flagship
                          </span>
                        )}
                      </div>
                      
                      <h3
                        className="text-xl font-bold mb-3 transition-all duration-500"
                        style={{
                          color: hoveredIdx === i ? "oklch(0.90 0.15 195)" : undefined,
                          textShadow: hoveredIdx === i ? "0 0 20px oklch(0.75 0.15 195 / 40%)" : "none",
                        }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed transition-colors duration-500 text-muted-foreground"
                        style={{
                          color: hoveredIdx === i ? "oklch(0.85 0 0)" : undefined,
                        }}
                      >
                        {renderHighlightedText(service.shortDescription, i, hoveredIdx === i)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <div className="flex flex-wrap gap-1.5">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 rounded-full transition-all duration-500"
                            style={{
                              background: hoveredIdx === i ? "oklch(1 0 0 / 10%)" : "oklch(1 0 0 / 5%)",
                              color: hoveredIdx === i ? "oklch(0.85 0 0)" : undefined,
                              borderWidth: "1px",
                              borderStyle: "solid",
                              borderColor: hoveredIdx === i ? "oklch(1 0 0 / 15%)" : "oklch(1 0 0 / 5%)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <motion.span
                        className="text-xs flex items-center gap-1 shrink-0 transition-colors duration-500"
                        style={{
                          color: hoveredIdx === i ? "oklch(0.90 0.15 195)" : undefined,
                        }}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

