"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  once?: boolean;
  trigger?: "inView" | "mount";
}

export function AnimatedText({
  text,
  className,
  wordClassName,
  delay = 0,
  once = true,
  trigger = "inView",
}: AnimatedTextProps) {
  const words = text.split(" ");

  const containerProps =
    trigger === "mount"
      ? { initial: "hidden" as const, animate: "visible" as const }
      : {
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport: { once, margin: "-50px" },
        };

  return (
    <motion.span
      className={cn("inline-flex flex-wrap justify-center", className)}
      {...containerProps}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={cn("inline-block mr-[0.3em]", wordClassName)}
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.5,
                delay: delay + i * 0.06,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
