"use client";

import { useEffect, useRef } from "react";

export function useLenis() {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    let lenis: any;
    let raf: number;

    async function init() {
      const Lenis = (await import("@studio-freight/lenis")).default;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
        infinite: false,
      });

      lenisRef.current = lenis;

      function animate(time: number) {
        lenis.raf(time);
        raf = requestAnimationFrame(animate);
      }

      raf = requestAnimationFrame(animate);
    }

    init();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (lenis) lenis.destroy();
    };
  }, []);

  return lenisRef;
}
