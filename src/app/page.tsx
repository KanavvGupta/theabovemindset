"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import { useLenis } from "@/hooks/useLenis";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Dynamic imports for code-splitting and to avoid SSR issues with animation libs
const Loader = dynamic(() => import("@/components/sections/Loader"), {
  ssr: false,
});
const Hero = dynamic(() => import("@/components/sections/Hero"), {
  ssr: false,
});
const About = dynamic(() => import("@/components/sections/About"), {
  ssr: false,
});
const Services = dynamic(() => import("@/components/sections/Services"), {
  ssr: false,
});
const Process = dynamic(() => import("@/components/sections/Process"), {
  ssr: false,
});
const Stack = dynamic(() => import("@/components/sections/Stack"), {
  ssr: false,
});
const Work = dynamic(() => import("@/components/sections/Work"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/sections/Contact"), {
  ssr: false,
});

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize smooth scrolling
  useLenis();

  const handleLoaderComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* Loading experience */}
      <AnimatePresence>
        {!isLoaded && <Loader onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      {/* Main content */}
      <div
        className={`transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Process />
          <Stack />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

