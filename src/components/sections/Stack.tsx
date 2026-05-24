"use client";

import { useRef, useEffect } from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { useTheme } from "@/providers/ThemeProvider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Custom High-Fidelity Colored Brand Logos (OG Logos)
const OpenAI_Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.7,11.3c0-0.7-0.1-1.3-0.5-1.9c0.4-0.8,0.4-1.8,0-2.6c-0.4-0.8-1.2-1.3-2.1-1.5c-0.4-0.7-1.1-1.2-1.9-1.4 c-0.8-0.2-1.7-0.1-2.4,0.3c-0.6-0.6-1.4-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9C9.8,3.7,8.9,3.6,8.1,3.8C7.3,4,6.6,4.5,6.2,5.2 C5.3,5.4,4.5,5.9,4.1,6.7C3.7,7.5,3.7,8.5,4.1,9.3C3.7,9.9,3.5,10.6,3.5,11.3c0,0.7,0.1,1.3,0.5,1.9c-0.4,0.8-0.4,1.8,0,2.6 c0.4,0.8,1.2,1.3,2.1,1.5c0.4,0.7,1.1,1.2,1.9,1.4c0.4,0.1,0.9,0.1,1.3,0c0.3,0.5,0.7,0.9,1.1,1.2c0.7,0.5,1.5,0.8,2.4,0.8 c0.8,0,1.6-0.3,2.2-0.9c0.7,0.4,1.6,0.5,2.4,0.3c0.8-0.2,1.5-0.7,1.9-1.4c0.9-0.2,1.7-0.7,2.1-1.5c0.4-0.8,0.4-1.8,0-2.6 C21.5,12.7,21.7,12,21.7,11.3z M12.8,20.5c-0.6,0.3-1.3,0.3-1.9,0.1l3.5-2l1.7,1C15.8,20,15.3,20.3,12.8,20.5z M8.1,18.9 c-0.4-0.4-0.7-0.9-0.8-1.5l3.5-2v2.1l-1.8,1C8.7,18.7,8.4,18.9,8.1,18.9z M5.3,14.6c-0.2-0.6-0.1-1.3,0.2-1.9l3.5,2H4.9 C5,14.1,5.2,13.7,5.3,14.6z M5.9,10.1C6.1,9.5,6.6,9.1,7.1,8.8l3.5,2v-4.1c-0.5,0.1-1,0.3-1.4,0.6c-0.2,0.2-0.5,0.5-0.6,0.9 l-1,1.8C7.3,9.8,7.2,10,5.9,10.1z M10.2,7.3c0.6-0.3,1.3-0.3,1.9-0.1l-3.5,2l-1.7-1C7.2,7.8,7.7,7.5,10.2,7.3z M14.9,8.9 c0.4,0.4,0.7,0.9,0.8,1.5l-3.5,2V10.3l1.8-1C14.3,9.1,14.6,8.9,14.9,8.9z M17.7,13.2c0.2,0.6,0.1,1.3-0.2,1.9l-3.5-2h4.1 C18,13.7,17.8,14.1,17.7,13.2z M17.1,17.7c-0.2,0.6-0.7,1-1.2,1.3l-3.5-2v4.1c0.5-0.1,1-0.3,1.4-0.6c0.2-0.2,0.5-0.5,0.6-0.9 l1-1.8C15.7,18,15.8,17.8,17.1,17.7z" fill="#10A37F" />
  </svg>
);

const Claude_Icon = () => (
  <svg viewBox="0 0 24 24" fill="#D97757" xmlns="http://www.w3.org/2000/svg">
    <path d="M12,2A1.5,1.5,0,0,1,13.5,3.5v3.1A5.5,5.5,0,0,1,17,8.7l2.2-2.2a1.5,1.5,0,1,1,2.1,2.1L19.1,10.8a5.5,5.5,0,0,1,2.1,3.5h3.1a1.5,1.5,0,1,1,0,3H21.2a5.5,5.5,0,0,1-2.1,3.5l2.2,2.2a1.5,1.5,0,1,1-2.1,2.1l-2.2-2.2a5.5,5.5,0,0,1-3.5,2.1V20.5a1.5,1.5,0,1,1-3,0V17.4a5.5,5.5,0,0,1-3.5-2.1l-2.2,2.2a1.5,1.5,0,1,1-2.1-2.1l2.2-2.2a5.5,5.5,0,0,1-2.1-3.5H1.5a1.5,1.5,0,1,1,0-3H4.6A5.5,5.5,0,0,1,6.7,8.7L4.5,6.5A1.5,1.5,0,1,1,6.6,4.4l2.2,2.2A5.5,5.5,0,0,1,12,6.6V3.5A1.5,1.5,0,0,1,12,2Z" />
  </svg>
);

const Gemini_Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gemini-grad-a" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1A73E8" />
        <stop offset="50%" stopColor="#9C27B0" />
        <stop offset="100%" stopColor="#FF7043" />
      </linearGradient>
      <linearGradient id="gemini-grad-b" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8AB4F8" />
        <stop offset="100%" stopColor="#C5A5FF" />
      </linearGradient>
    </defs>
    <path d="M12 2c0 3.866-3.134 7-7 7 3.866 0 7 3.134 7 7 0-3.866 3.134-7 7-7-3.866 0-7-3.134-7-7z" fill="url(#gemini-grad-a)" />
    <path d="M19 11c0 2.209-1.791 4-4 4 2.209 0 4 1.791 4 4 0-2.209 1.791-4 4-4-2.209 0-4-1.791-4-4z" fill="url(#gemini-grad-b)" opacity="0.8" />
  </svg>
);

const Perplexity_Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#10A98F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2v20" />
    <path d="M12 7.5c2.5-3 5.5-3 5.5 0c0 3.5-3.5 5.5-5.5 6.5" />
    <path d="M12 7.5c-2.5-3-5.5-3-5.5 0c0 3.5 3.5 5.5 5.5 6.5" />
    <path d="M12 16.5c2.5 3 5.5 3 5.5 0c0-3.5-3.5-5.5-5.5-6.5" />
    <path d="M12 16.5c-2.5 3-5.5 3-5.5 0c0-3.5 3.5-5.5 5.5-6.5" />
    <path d="M4 12h16" stroke="#10A98F" opacity="0.25" strokeWidth="1.2" />
  </svg>
);

const Kimi_Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#FF6A13" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <line x1="6" y1="3" x2="6" y2="21" />
    <path d="M18 4l-11 8 11 8" />
    <line x1="12" y1="12" x2="18" y2="12" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.6" />
  </svg>
);

const LangChain_Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#13B08C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);

const CrewAI_Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="5" r="3" fill="#4F46E5" fillOpacity="0.15" />
    <circle cx="6" cy="18" r="3" fill="#4F46E5" fillOpacity="0.15" />
    <circle cx="18" cy="18" r="3" fill="#4F46E5" fillOpacity="0.15" />
    <line x1="12" y1="8" x2="6" y2="15" />
    <line x1="12" y1="8" x2="18" y2="15" />
  </svg>
);

const Pinecone_Icon = () => (
  <svg viewBox="0 0 24 24" fill="#006341" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L8 6h8l-4-4zm-4 6l-3 4h14l-3-4H8zm-3 6l-2 4h18l-2-4H5zm7 6v2h-2v-2h2z" />
  </svg>
);

const Supabase_Icon = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="supabase-grad-a" x1="53.974" x2="94.163" y1="54.974" y2="71.829" gradientTransform="translate(29.387 60.096) scale(1.1436)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#249361" />
        <stop offset="1" stopColor="#3ecf8e" />
      </linearGradient>
      <linearGradient id="supabase-grad-b" x1="36.156" x2="54.484" y1="30.578" y2="65.081" gradientTransform="translate(29.387 60.096) scale(1.1436)" gradientUnits="userSpaceOnUse">
        <stop offset="0" />
        <stop offset="1" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path fill="url(#supabase-grad-a)" d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z" transform="translate(-27.722 -60.338)" />
    <path fill="url(#supabase-grad-b)" fillOpacity=".2" d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z" transform="translate(-27.722 -60.338)" />
    <path fill="#3ecf8e" d="M53.484 2.128c3.267-4.117 9.905-1.862 9.977 3.396l.508 76.907H12.902c-9.365 0-14.587-10.817-8.764-18.149z" />
  </svg>
);

const Nextjs_Icon = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="64" fill="#000000" />
    <path fill="url(#next-grad-a)" d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z" />
    <path fill="url(#next-grad-b)" d="M81.778 38.4h8.533v51.2h-8.533z" />
    <defs>
      <linearGradient id="next-grad-a" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="next-grad-b" x1="121" x2="120.799" y1="54" y2="106.875" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const React_Icon = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <g fill="#61DAFB">
      <circle cx="64" cy="64" r="11.4" />
      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
    </g>
  </svg>
);

const Threejs_Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const Gsap_Icon = () => (
  <svg viewBox="0 0 24 24" fill="#88CE02" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5h-2v-2h2v2zm0-4.5h-2V7h2v6z" />
  </svg>
);

const FramerMotion_Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="framer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF007A" />
        <stop offset="50%" stopColor="#7B00FF" />
        <stop offset="100%" stopColor="#00F0FF" />
      </linearGradient>
    </defs>
    <path d="M12 2L2 12h7v10l10-10h-7V2z" fill="url(#framer-grad)" />
  </svg>
);

const Tailwind_Icon = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38BDF8" />
  </svg>
);

const Nodejs_Icon = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path fill="url(#node-grad-a)" d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z" />
    <path fill="url(#node-grad-b)" d="M116.897 29.76 66.841.825A8.161 8.161 0 0 0 65.302.23L9.21 96.798a6.251 6.251 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.702 3.702 0 0 0-1.302-1.072z" />
    <path fill="url(#node-grad-c)" d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z" />
    <defs>
      <linearGradient id="node-grad-a" x1="34.513" x2="27.157" y1="15.535" y2="30.448" gradientTransform="translate(-129.242 -73.715) scale(6.18523)" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3F873F" />
        <stop offset=".33" stopColor="#3F8B3D" />
        <stop offset=".637" stopColor="#3E9638" />
        <stop offset=".934" stopColor="#3DA92E" />
        <stop offset="1" stopColor="#3DAE2B" />
      </linearGradient>
      <linearGradient id="node-grad-b" x1="30.009" x2="50.533" y1="23.359" y2="8.288" gradientTransform="translate(-129.242 -73.715) scale(6.18523)" gradientUnits="userSpaceOnUse">
        <stop offset=".138" stopColor="#3F873F" />
        <stop offset=".402" stopColor="#52A044" />
        <stop offset=".713" stopColor="#64B749" />
        <stop offset=".908" stopColor="#6ABF4B" />
      </linearGradient>
      <linearGradient id="node-grad-c" x1="21.917" x2="40.555" y1="22.261" y2="22.261" gradientTransform="translate(-129.242 -73.715) scale(6.18523)" gradientUnits="userSpaceOnUse">
        <stop offset=".092" stopColor="#6ABF4B" />
        <stop offset=".287" stopColor="#64B749" />
        <stop offset=".598" stopColor="#52A044" />
        <stop offset=".862" stopColor="#3F873F" />
      </linearGradient>
    </defs>
  </svg>
);

const Python_Icon = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <linearGradient id="python-grad-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
      <stop offset="0" stopColor="#5A9FD4" />
      <stop offset="1" stopColor="#306998" />
    </linearGradient>
    <linearGradient id="python-grad-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
      <stop offset="0" stopColor="#FFD43B" />
      <stop offset="1" stopColor="#FFE873" />
    </linearGradient>
    <path fill="url(#python-grad-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)" />
    <path fill="url(#python-grad-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)" />
  </svg>
);

const FastAPI_Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#009688" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" fill="#009688" fillOpacity="0.2" />
  </svg>
);

const PostgreSQL_Icon = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path fill="#336791" d="M115.731 77.44c-13.925 2.873-14.882-1.842-14.882-1.842 14.703-21.816 20.849-49.51 15.545-56.287C101.924.823 76.875 9.566 76.457 9.793l-.135.024c-2.751-.571-5.83-.911-9.291-.967-6.301-.103-11.08 1.652-14.707 4.402 0 0-44.684-18.408-42.606 23.151.442 8.842 12.672 66.899 27.26 49.363 5.332-6.412 10.483-11.834 10.483-11.834 2.559 1.699 5.622 2.567 8.833 2.255l.25-.212c-.078.796-.042 1.575.1 2.497-3.758 4.199-2.654 4.936-10.167 6.482-7.602 1.566-3.136 4.355-.22 5.084 3.534.884 11.712 2.136 17.237-5.598l-.221.882c1.473 1.18 2.507 7.672 2.334 13.557-.174 5.885-.29 9.926.871 13.082 1.16 3.156 2.316 10.256 12.192 8.14 8.252-1.768 12.528-6.351 13.124-13.995.422-5.435 1.377-4.631 1.438-9.49l.767-2.3c.884-7.367.14-9.743 5.225-8.638l1.235.108c3.742.17 8.639-.602 11.514-1.938 6.19-2.871 9.861-7.667 3.758-6.408z" />
  </svg>
);

const Redis_Icon = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path fill="#A41E11" d="M121.8 93.1c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.9-11.5 3.8-17.3 1S13 98.1 6.3 94.9c-3.3-1.6-5-2.9-5-4.2V78s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9v12.5c0 1.3-1.5 2.7-4.9 4.4z" />
    <path fill="#D82C20" d="M121.8 80.5C115.1 84 80.4 98.2 73 102.1c-7.4 3.9-11.5 3.8-17.3 1-5.8-2.8-42.7-17.7-49.4-20.9C-.3 79-.5 76.8 6 74.3c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.9z" />
    <path fill="#A41E11" d="M121.8 72.5C115.1 76 80.4 90.2 73 94.1c-7.4 3.8-11.5 3.8-17.3 1C49.9 92.3 13 77.4 6.3 74.2c-3.3-1.6-5-2.9-5-4.2V57.3s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9V68c0 1.3-1.5 2.7-4.9 4.5z" />
    <path fill="#D82C20" d="M121.8 59.8c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.8-11.5 3.8-17.3 1C49.9 79.6 13 64.7 6.3 61.5s-6.8-5.4-.3-7.9c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.9z" />
    <path fill="#A41E11" d="M121.8 51c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.8-11.5 3.8-17.3 1C49.9 70.9 13 56 6.3 52.8c-3.3-1.6-5.1-2.9-5.1-4.2V35.9s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9v12.5c.1 1.3-1.4 2.6-4.8 4.4z" />
    <path fill="#D82C20" d="M121.8 38.3C115.1 41.8 80.4 56 73 59.9c-7.4 3.8-11.5 3.8-17.3 1S13 43.3 6.3 40.1s-6.8-5.4-.3-7.9c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.8z" />
  </svg>
);

const Docker_Icon = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" fill="#3A4D54" d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6V50.8h11.3V39.6h22.5V28.3h13.5v22.5z" />
    <path fill="#00AADA" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7H18.6c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z" />
    <path fill="#28B8EB" d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.4.1-.5.2z" />
    <path fill="#028BB8" d="M18.7 71.8c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26H18.7v-.1z" />
    <path fill="#019BC6" d="M23.5 71.8c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1H23.5z" />
    <path fillRule="evenodd" clipRule="evenodd" fill="#00ACD3" d="M28.4 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3-12h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z" />
    <path fillRule="evenodd" clipRule="evenodd" fill="#23C2EE" d="M39.6 52.7h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z" />
    <path fillRule="evenodd" clipRule="evenodd" fill="#00ACD3" d="M50.9 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z" />
    <path fillRule="evenodd" clipRule="evenodd" fill="#23C2EE" d="M50.9 41.5h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3.1 10.4H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z" />
    <path fillRule="evenodd" clipRule="evenodd" fill="#00ACD3" d="M62.2 41.5H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z" />
    <path fillRule="evenodd" clipRule="evenodd" fill="#23C2EE" d="M62.2 30.2H72V40h-9.8v-9.8zm.8.8h.8v8.1H63V31zm1.5 0h.8v8.1h-.8V31zm1.4 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31z" />
    <path fillRule="evenodd" clipRule="evenodd" fill="#00ACD3" d="M73.5 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z" />
  </svg>
);

const N8n_Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#FF6C37" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12h16M12 4v16" strokeLinecap="round" />
    <circle cx="12" cy="12" r="3" fill="#FF6C37" />
  </svg>
);

const Make_Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="6" r="3" fill="#EA2C7C" />
    <circle cx="6" cy="16" r="3" fill="#EA2C7C" />
    <circle cx="18" cy="16" r="3" fill="#EA2C7C" />
    <line x1="12" y1="6" x2="6" y2="16" stroke="#EA2C7C" strokeWidth="1.5" />
    <line x1="12" y1="6" x2="18" y2="16" stroke="#EA2C7C" strokeWidth="1.5" />
  </svg>
);

const Vercel_Icon = () => (
  <svg viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 22h20L12 2z" />
  </svg>
);

const AWS_Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 15c4.5 3.5 13.5 3.5 18 0" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M18.5 12.5l2.5 2.5-3 1" fill="#FF9900" stroke="#FF9900" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GitHub_Icon = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" fill="#EEEEEE" />
</svg>
);

const Sentry_Icon = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path d="M74.012 13.328c-2.16-3.582-6.039-5.777-10.227-5.777s-8.062 2.195-10.223 5.777L36.734 42.145a82.34 82.34 0 0 1 45.383 68.164H70.309a70.78 70.78 0 0 0-39.527-58.09l-15.57 26.926c12.648 5.676 21.543 17.398 23.598 31.113H11.68a1.94 1.94 0 0 1-1.582-2.836l7.516-12.781c-2.547-2.129-5.457-3.773-8.59-4.859l-7.445 12.781c-1.562 2.684-1.988 5.887-1.172 8.883s2.789 5.547 5.492 7.07a11.9 11.9 0 0 0 5.781 1.535h37.152a49.63 49.63 0 0 0-20.453-44.258l5.902-10.227c17.797 12.227 27.813 32.945 26.336 54.484H92.09a91.74 91.74 0 0 0-41.953-81.305l11.938-20.453a1.97 1.97 0 0 1 2.684-.691c1.355.742 51.879 88.898 52.828 89.922a1.95 1.95 0 0 1-.035 1.949 1.96 1.96 0 0 1-1.707.941h-12.168a103.89 103.89 0 0 1 0 9.742h12.219a11.73 11.73 0 0 0 11.813-11.789 11.47 11.47 0 0 0-1.582-5.832zm0 0" fill="#E1567C" />
  </svg>
);

interface Tool {
  name: string;
  icon: React.ComponentType;
  colorClass: string;
  glowColor: string;
  isSpecial?: boolean;
}

interface Category {
  title: string;
  isHero?: boolean;
  badge?: string;
  tools: Tool[];
}

const categories: Category[] = [
  {
    title: "AI & Agents",
    isHero: true,
    badge: "Production Focus",
    tools: [
      { name: "OpenAI", icon: OpenAI_Icon, colorClass: "text-[#10A37F]", glowColor: "oklch(0.65 0.18 155)" },
      { name: "Claude", icon: Claude_Icon, colorClass: "text-[#D97757]", glowColor: "oklch(0.70 0.15 48)", isSpecial: true },
      { name: "Gemini", icon: Gemini_Icon, colorClass: "text-[#4B5EAA]", glowColor: "oklch(0.60 0.20 260)" },
      { name: "Perplexity", icon: Perplexity_Icon, colorClass: "text-[#10A98F]", glowColor: "oklch(0.70 0.14 185)" },
      { name: "Kimi", icon: Kimi_Icon, colorClass: "text-[#FF6A13]", glowColor: "oklch(0.68 0.18 35)" },
      { name: "LangChain", icon: LangChain_Icon, colorClass: "text-[#13B08C]", glowColor: "oklch(0.75 0.15 195)" },
      { name: "CrewAI", icon: CrewAI_Icon, colorClass: "text-[#4F46E5]", glowColor: "oklch(0.60 0.15 240)" },
      { name: "Pinecone", icon: Pinecone_Icon, colorClass: "text-[#006341]", glowColor: "oklch(0.55 0.15 140)" },
      { name: "Supabase", icon: Supabase_Icon, colorClass: "text-[#3ECF8E]", glowColor: "oklch(0.65 0.18 155)" },
    ],
  },
  {
    title: "Frontend & 3D",
    tools: [
      { name: "Next.js", icon: Nextjs_Icon, colorClass: "text-white", glowColor: "var(--text-title)" },
      { name: "React", icon: React_Icon, colorClass: "text-[#61DAFB]", glowColor: "oklch(0.75 0.15 195)" },
      { name: "Three.js", icon: Threejs_Icon, colorClass: "text-[#FFFFFF]", glowColor: "var(--text-title)" },
      { name: "GSAP", icon: Gsap_Icon, colorClass: "text-[#88CE02]", glowColor: "oklch(0.75 0.20 120)" },
      { name: "Framer Motion", icon: FramerMotion_Icon, colorClass: "text-[#FF007A]", glowColor: "var(--text-title)" },
      { name: "Tailwind CSS", icon: Tailwind_Icon, colorClass: "text-[#38BDF8]", glowColor: "oklch(0.70 0.15 190)" },
    ],
  },
  {
    title: "Backend & Infra",
    tools: [
      { name: "Node.js", icon: Nodejs_Icon, colorClass: "text-[#68A063]", glowColor: "oklch(0.68 0.15 142)" },
      { name: "Python", icon: Python_Icon, colorClass: "text-[#3776AB]", glowColor: "oklch(0.75 0.15 195)" },
      { name: "FastAPI", icon: FastAPI_Icon, colorClass: "text-[#009688]", glowColor: "oklch(0.65 0.15 175)" },
      { name: "PostgreSQL", icon: PostgreSQL_Icon, colorClass: "text-[#336791]", glowColor: "oklch(0.55 0.15 240)" },
      { name: "Redis", icon: Redis_Icon, colorClass: "text-[#D82C20]", glowColor: "oklch(0.58 0.20 25)" },
      { name: "Docker", icon: Docker_Icon, colorClass: "text-[#2496ED]", glowColor: "oklch(0.65 0.15 210)" },
    ],
  },
  {
    title: "Automation & Ops",
    tools: [
      { name: "n8n", icon: N8n_Icon, colorClass: "text-[#FF6C37]", glowColor: "oklch(0.65 0.18 40)" },
      { name: "Make", icon: Make_Icon, colorClass: "text-[#EA2C7C]", glowColor: "oklch(0.58 0.22 340)" },
      { name: "Vercel", icon: Vercel_Icon, colorClass: "text-white", glowColor: "var(--text-title)" },
      { name: "AWS", icon: AWS_Icon, colorClass: "text-[#FF9900]", glowColor: "oklch(0.75 0.15 70)" },
      { name: "GitHub Actions", icon: GitHub_Icon, colorClass: "text-[#EEEEEE]", glowColor: "var(--text-title)" },
      { name: "Sentry", icon: Sentry_Icon, colorClass: "text-[#E1567C]", glowColor: "oklch(0.55 0.15 300)" },
    ],
  },
];

export default function Stack() {
  const sectionRef = useRef<HTMLElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Flatten tools and split into 2 rows for vertical tracks
  const allTools = categories.flatMap(cat => cat.tools);
  const row1 = allTools.slice(0, 14);
  const row2 = allTools.slice(14, 27);

  useEffect(() => {
    // Desktop vertical 3D scroll conveyor
    let pinCtx: gsap.Context;

    if (window.innerWidth >= 768) {
      pinCtx = gsap.context(() => {
        const col1 = col1Ref.current;
        const col2 = col2Ref.current;
        if (!col1 || !col2) return;

        const col1Height = col1.scrollHeight;
        const col2Height = col2.scrollHeight;
        const viewportHeight = window.innerHeight;

        // Calculate translation distances
        const dist1 = Math.max(200, col1Height - viewportHeight + 80);
        const dist2 = Math.max(200, col2Height - viewportHeight + 80);
        const maxDist = Math.max(dist1, dist2);

        // Pin the section
        ScrollTrigger.create({
          trigger: sectionRef.current,
          pin: true,
          start: "top top",
          end: () => `+=${maxDist * 1.2}`,
          scrub: 1,
          anticipatePin: 1,
        });

        // Scroll Col 1 upwards (from 0 to -dist1)
        gsap.fromTo(
          col1,
          { y: 0 },
          {
            y: -dist1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: () => `+=${maxDist * 1.2}`,
              scrub: 1,
            },
          }
        );

        // Scroll Col 2 downwards (from -dist2 to 0)
        gsap.fromTo(
          col2,
          { y: -dist2 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: () => `+=${maxDist * 1.2}`,
              scrub: 1,
            },
          }
        );

        // 3D velocity tilt on the columns container AND 3D cylindrical rotation on each card
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${maxDist * 1.2}`,
          scrub: 1,
          onUpdate: (self) => {
            // 1. Column tilt based on scroll velocity
            const velocity = self.getVelocity() * 0.003;
            const tilt = Math.max(-6, Math.min(6, velocity));
            gsap.to(".columns-container", {
              rotateX: 8 + tilt,
              skewY: tilt * 0.15,
              duration: 0.4,
              overwrite: "auto",
              ease: "power1.out",
            });

            // 2. 3D Cylindrical drum conveyor effect on cards using high-performance algebraic math (Zero Reflow)
            const viewportHeight = window.innerHeight;
            const centerY = viewportHeight / 2;

            const y1 = gsap.getProperty(col1, "y") as number;
            const y2 = gsap.getProperty(col2, "y") as number;

            // Pitch is 144px (120px height + 24px gap)
            const col1Cards = col1.children;
            for (let i = 0; i < col1Cards.length; i++) {
              const card = col1Cards[i] as HTMLElement;
              const cardCenter = i * 144 + y1 + 60;
              const distRatio = (cardCenter - centerY) / (viewportHeight * 0.45);
              const clampedRatio = Math.max(-1.5, Math.min(1.5, distRatio));

              const rotateX = clampedRatio * -28;
              const translateZ = -Math.abs(clampedRatio) * 100;
              const scale = 1 - Math.abs(clampedRatio) * 0.1;
              const opacity = 1 - Math.abs(clampedRatio) * 0.6;

              card.style.transform = `rotateX(${rotateX}deg) translateZ(${translateZ}px) scale(${scale})`;
              card.style.opacity = `${Math.max(0.15, opacity)}`;
            }

            const col2Cards = col2.children;
            for (let i = 0; i < col2Cards.length; i++) {
              const card = col2Cards[i] as HTMLElement;
              const cardCenter = i * 144 + y2 + 60;
              const distRatio = (cardCenter - centerY) / (viewportHeight * 0.45);
              const clampedRatio = Math.max(-1.5, Math.min(1.5, distRatio));

              const rotateX = clampedRatio * -28;
              const translateZ = -Math.abs(clampedRatio) * 100;
              const scale = 1 - Math.abs(clampedRatio) * 0.1;
              const opacity = 1 - Math.abs(clampedRatio) * 0.6;

              card.style.transform = `rotateX(${rotateX}deg) translateZ(${translateZ}px) scale(${scale})`;
              card.style.opacity = `${Math.max(0.15, opacity)}`;
            }
          },
        });
      }, sectionRef);
    }

    return () => {
      if (pinCtx) pinCtx.revert();
    };
  }, []);

  useEffect(() => {
    // Passive cursor spotlight listener
    const cards = document.querySelectorAll(".premium-logo-card");
    const activeListeners = new Map<Element, (e: MouseEvent) => void>();

    cards.forEach((card) => {
      const updateCoord = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      };

      const onMouseEnter = () => {
        card.addEventListener("mousemove", updateCoord as EventListener, { passive: true });
      };

      const onMouseLeave = () => {
        card.removeEventListener("mousemove", updateCoord as EventListener);
        // Smoothly glide the mesh gradient back to the center on exit
        (card as HTMLElement).style.setProperty("--mouse-x", "50%");
        (card as HTMLElement).style.setProperty("--mouse-y", "50%");
      };

      card.addEventListener("mouseenter", onMouseEnter);
      card.addEventListener("mouseleave", onMouseLeave);

      activeListeners.set(card, updateCoord);
    });

    return () => {
      cards.forEach((card) => {
        const updateCoord = activeListeners.get(card);
        if (updateCoord) {
          card.removeEventListener("mousemove", updateCoord as EventListener);
        }
      });
    };
  }, []);

  // Multi-color mesh gradient mapping for each card
  const getMeshColors = (toolName: string, darkTheme: boolean) => {
    let c1 = "oklch(0.75 0.15 195)"; // brand default (teal/cyan)
    let c2 = "oklch(0.65 0.18 155)"; // accent (green)
    let c3 = "oklch(0.60 0.15 240)"; // base (royal blue)
    let shadow = "oklch(0.75 0.15 195 / 8%)";

    switch (toolName) {
      case "OpenAI":
        c1 = "oklch(0.65 0.18 155)";
        c2 = "oklch(0.55 0.15 175)";
        c3 = "oklch(0.12 0.005 260)";
        shadow = "oklch(0.65 0.18 155 / 10%)";
        break;
      case "Claude":
        c1 = "oklch(0.70 0.15 48)";
        c2 = "oklch(0.60 0.18 35)";
        c3 = "oklch(0.80 0.12 65)";
        shadow = "oklch(0.70 0.15 48 / 12%)";
        break;
      case "Gemini":
        c1 = "oklch(0.60 0.20 260)";
        c2 = "oklch(0.50 0.22 300)";
        c3 = "oklch(0.78 0.16 85)";
        shadow = "oklch(0.60 0.20 260 / 12%)";
        break;
      case "Perplexity":
        c1 = "oklch(0.70 0.14 185)";
        c2 = "oklch(0.60 0.15 210)";
        c3 = "oklch(0.15 0.005 260)";
        shadow = "oklch(0.70 0.14 185 / 10%)";
        break;
      case "Kimi":
        c1 = "oklch(0.68 0.18 35)";
        c2 = "oklch(0.58 0.20 25)";
        c3 = "oklch(0.78 0.16 85)";
        shadow = "oklch(0.68 0.18 35 / 10%)";
        break;
      case "LangChain":
        c1 = "oklch(0.75 0.15 195)";
        c2 = "oklch(0.65 0.18 155)";
        c3 = "oklch(0.12 0.005 260)";
        shadow = "oklch(0.75 0.15 195 / 10%)";
        break;
      case "CrewAI":
        c1 = "oklch(0.60 0.15 240)";
        c2 = "oklch(0.50 0.18 280)";
        c3 = "oklch(0.55 0.22 25)";
        shadow = "oklch(0.60 0.15 240 / 10%)";
        break;
      case "Pinecone":
        c1 = "oklch(0.55 0.15 140)";
        c2 = "oklch(0.65 0.18 155)";
        c3 = "oklch(0.78 0.16 85)";
        shadow = "oklch(0.55 0.15 140 / 10%)";
        break;
      case "Supabase":
        c1 = "oklch(0.65 0.18 155)";
        c2 = "oklch(0.15 0.005 260)";
        c3 = "oklch(0.75 0.15 195)";
        shadow = "oklch(0.65 0.18 155 / 10%)";
        break;
      case "Next.js":
        c1 = darkTheme ? "oklch(0.95 0 0)" : "oklch(0.14 0.02 260)";
        c2 = "oklch(0.50 0.01 260)";
        c3 = darkTheme ? "oklch(0.15 0.005 260)" : "oklch(0.95 0 0)";
        shadow = darkTheme ? "oklch(0.95 0 0 / 8%)" : "oklch(0.14 0.02 260 / 6%)";
        break;
      case "React":
        c1 = "oklch(0.75 0.15 195)";
        c2 = "oklch(0.60 0.15 240)";
        c3 = "oklch(0.85 0.12 195)";
        shadow = "oklch(0.75 0.15 195 / 10%)";
        break;
      case "Three.js":
        c1 = "oklch(0.65 0.15 280)";
        c2 = "oklch(0.75 0.15 195)";
        c3 = "oklch(0.95 0 0)";
        shadow = "oklch(0.65 0.15 280 / 10%)";
        break;
      case "GSAP":
        c1 = "oklch(0.75 0.20 120)";
        c2 = "oklch(0.65 0.18 155)";
        c3 = "oklch(0.78 0.16 85)";
        shadow = "oklch(0.75 0.20 120 / 10%)";
        break;
      case "Framer Motion":
        c1 = "oklch(0.60 0.22 330)";
        c2 = "oklch(0.65 0.15 280)";
        c3 = "oklch(0.78 0.16 85)";
        shadow = "oklch(0.60 0.22 330 / 12%)";
        break;
      case "Tailwind CSS":
        c1 = "oklch(0.70 0.15 190)";
        c2 = "oklch(0.75 0.15 195)";
        c3 = "oklch(0.60 0.15 240)";
        shadow = "oklch(0.70 0.15 190 / 10%)";
        break;
      case "Node.js":
        c1 = "oklch(0.68 0.15 142)";
        c2 = "oklch(0.55 0.15 155)";
        c3 = "oklch(0.78 0.16 85)";
        shadow = "oklch(0.68 0.15 142 / 10%)";
        break;
      case "Python":
        c1 = "oklch(0.75 0.15 195)";
        c2 = "oklch(0.78 0.16 85)";
        c3 = "oklch(0.60 0.15 240)";
        shadow = "oklch(0.75 0.15 195 / 10%)";
        break;
      case "FastAPI":
        c1 = "oklch(0.65 0.15 175)";
        c2 = "oklch(0.60 0.22 330)";
        c3 = "oklch(0.75 0.15 195)";
        shadow = "oklch(0.65 0.15 175 / 10%)";
        break;
      case "PostgreSQL":
        c1 = "oklch(0.55 0.15 240)";
        c2 = "oklch(0.65 0.15 210)";
        c3 = "oklch(0.75 0.15 195)";
        shadow = "oklch(0.55 0.15 240 / 10%)";
        break;
      case "Redis":
        c1 = "oklch(0.58 0.20 25)";
        c2 = "oklch(0.68 0.18 35)";
        c3 = "oklch(0.55 0.22 25)";
        shadow = "oklch(0.58 0.20 25 / 10%)";
        break;
      case "Docker":
        c1 = "oklch(0.65 0.15 210)";
        c2 = "oklch(0.70 0.15 190)";
        c3 = "oklch(0.55 0.15 240)";
        shadow = "oklch(0.65 0.15 210 / 10%)";
        break;
      case "n8n":
        c1 = "oklch(0.65 0.18 40)";
        c2 = "oklch(0.78 0.16 85)";
        c3 = "oklch(0.58 0.22 25)";
        shadow = "oklch(0.65 0.18 40 / 10%)";
        break;
      case "Make":
        c1 = "oklch(0.58 0.22 340)";
        c2 = "oklch(0.60 0.22 300)";
        c3 = "oklch(0.70 0.16 25)";
        shadow = "oklch(0.58 0.22 340 / 10%)";
        break;
      case "Vercel":
        c1 = darkTheme ? "oklch(0.95 0 0)" : "oklch(0.14 0.02 260)";
        c2 = "oklch(0.40 0.01 260)";
        c3 = darkTheme ? "oklch(0.15 0.005 260)" : "oklch(0.95 0 0)";
        shadow = darkTheme ? "oklch(0.95 0 0 / 8%)" : "oklch(0.14 0.02 260 / 6%)";
        break;
      case "AWS":
        c1 = "oklch(0.75 0.15 70)";
        c2 = "oklch(0.68 0.18 35)";
        c3 = "oklch(0.78 0.16 85)";
        shadow = "oklch(0.75 0.15 70 / 10%)";
        break;
      case "GitHub Actions":
        c1 = darkTheme ? "oklch(0.90 0 0)" : "oklch(0.20 0.01 260)";
        c2 = "oklch(0.50 0.15 240)";
        c3 = "oklch(0.10 0.005 260)";
        shadow = darkTheme ? "oklch(0.90 0 0 / 8%)" : "oklch(0.20 0.01 260 / 6%)";
        break;
      case "Sentry":
        c1 = "oklch(0.55 0.15 300)";
        c2 = "oklch(0.60 0.22 330)";
        c3 = "oklch(0.50 0.15 240)";
        shadow = "oklch(0.55 0.15 300 / 10%)";
        break;
    }

    // Adjust opacities for light theme to maintain high readability
    if (!darkTheme) {
      c1 = c1.replace(/oklch\((0\.\d+)/, (m, g) => `oklch(${Math.max(0.38, parseFloat(g) - 0.22)}`);
      c2 = c2.replace(/oklch\((0\.\d+)/, (m, g) => `oklch(${Math.max(0.32, parseFloat(g) - 0.18)}`);
      c3 = c3.replace(/oklch\((0\.\d+)/, (m, g) => `oklch(${Math.max(0.30, parseFloat(g) - 0.15)}`);
      shadow = shadow.replace(/oklch\((0\.\d+)/, (m, g) => `oklch(${Math.max(0.40, parseFloat(g) - 0.20)}`);
    }

    return {
      c1,
      c2,
      c3,
      shadow,
      border: c1.replace(/\d+%\)/, darkTheme ? "25%)" : "18%)"),
      bloom: c1.replace(/\d+%\)/, darkTheme ? "12%)" : "8%)"),
    };
  };

  const getCardStyles = (tool: Tool, darkTheme: boolean) => {
    const colors = getMeshColors(tool.name, darkTheme);
    return {
      "--glow-c1": colors.c1,
      "--glow-c2": colors.c2,
      "--glow-c3": colors.c3,
      "--glow-border-color": colors.border,
      "--glow-radial-color": colors.bloom,
      "--glow-shadow-color": colors.shadow,
    } as React.CSSProperties;
  };

  const renderCard = (tool: Tool) => {
    const Icon = tool.icon;
    return (
      <div
        key={tool.name}
        className={`premium-logo-card select-none ${tool.isSpecial ? "claude-card" : ""}`}
        style={getCardStyles(tool, isDark)}
      >
        <div className="card-inner">
          <div className="card-ambient-bloom" />
          <div className="card-grain" />
          <div className="logo-center-wrapper">
            <div className={`logo-icon-container ${tool.colorClass}`}>
              <Icon />
            </div>
            <span className="logo-hover-label">{tool.name}</span>
          </div>

          {/* Core Indicator for Claude */}
          {tool.isSpecial && (
            <div className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-tam-amber/15 px-2 py-0.5 rounded font-mono text-[7px] text-tam-amber font-semibold uppercase tracking-wider scale-90 z-30">
              <span className="w-1 h-1 rounded-full bg-tam-amber animate-pulse" />
              Core
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="stack"
      className="relative overflow-hidden bg-background z-20"
    >
      {/* Sunlight atmospheric soft ambient background */}
      <div className="absolute top-[-100px] left-[-150px] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-tam-amber/10 to-tam-cyan/5 blur-[120px] pointer-events-none z-0 light:opacity-90 dark:opacity-15 transition-opacity duration-500" />
      <div className="absolute right-[-150px] bottom-[-100px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse,oklch(0.75_0.15_195_/_3%)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Desktop Split-Layout Sticky Pin Scroll */}
        <div className="hidden md:grid grid-cols-[350px_1fr] min-h-screen items-center relative">
          
          {/* Left Pinned Heading */}
          <div className="flex flex-col justify-center h-full pr-10 border-r border-foreground/5 z-20 bg-background/80 backdrop-blur-sm sticky top-0">
            <SectionHeader
              badge="Stack"
              title="Tools we"
              highlight="wield."
              description="A carefully selected, production-hardened toolkit. We build real intelligence, immersive interfaces, and scalable automations."
              align="left"
            />
          </div>

          {/* Right Sliding Track */}
          <div className="overflow-hidden flex items-center h-full pl-12">
            <div className="columns-container flex gap-8 w-full justify-center">
              
              {/* Column 1 (scrolling up) */}
              <div ref={col1Ref} className="flex flex-col gap-6 w-[210px] will-change-transform">
                {row1.map((tool) => renderCard(tool))}
              </div>

              {/* Column 2 (scrolling down) */}
              <div ref={col2Ref} className="flex flex-col gap-6 w-[210px] will-change-transform">
                {row2.map((tool) => renderCard(tool))}
              </div>

            </div>
          </div>

        </div>

        {/* Mobile Grid Layout Fallback */}
        <div className="block md:hidden section-y section-padding">
          <SectionHeader
            badge="Stack"
            title="Tools we"
            highlight="wield."
            description="A carefully selected, production-hardened toolkit. We build real intelligence, immersive interfaces, and scalable automations."
            align="center"
          />
          <div className="grid grid-cols-2 gap-4 mt-12 select-none relative z-10 px-1">
            {allTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.name}
                  className={`premium-logo-card w-full h-[110px] active:scale-95 transition-transform duration-300 ${tool.isSpecial ? "claude-card" : ""}`}
                  style={getCardStyles(tool, isDark)}
                >
                  <div className="card-inner">
                    <div className="card-ambient-bloom" />
                    <div className="card-grain" />
                    <div className="logo-center-wrapper">
                      <div className={`logo-icon-container ${tool.colorClass}`}>
                        <Icon />
                      </div>
                    </div>

                    {tool.isSpecial && (
                      <div className="absolute top-2.5 right-2.5 flex items-center bg-tam-amber/15 px-1.5 py-0.5 rounded font-mono text-[7px] text-tam-amber font-semibold uppercase tracking-wider z-30">
                        Core
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Global style overrides for the rebuilt Tools Section */}
      <style jsx global>{`
        /* 3D Perspective track containers */
        .hidden.md\\:grid {
          perspective: 1200px;
          perspective-origin: 50% 50%;
        }

        .columns-container {
          transform-style: preserve-3d;
          transform: rotateY(-10deg) rotateX(8deg);
          will-change: transform;
        }

        /* Card border follow-light styling */
        .premium-logo-card {
          position: relative;
          border-radius: 1.25rem;
          padding: 1.25px; /* Padded border width */
          overflow: hidden;
          width: 100%;
          height: 110px;
          flex-shrink: 0;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          will-change: transform, opacity;
          cursor: pointer;
          box-sizing: border-box;
          transform-style: preserve-3d;
        }

        @media (min-width: 768px) {
          .premium-logo-card {
            width: 200px;
            height: 120px;
          }
        }

        /* Card border glows */
        .dark .premium-logo-card {
          background: radial-gradient(130px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--glow-border-color), transparent 70%), rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.03);
        }

        .light .premium-logo-card {
          background: radial-gradient(130px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--glow-border-color), transparent 70%), rgba(0, 0, 0, 0.04);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        @media (hover: hover) {
          .premium-logo-card:hover {
            box-shadow: 0 15px 35px var(--glow-shadow-color), 0 4px 12px rgba(0, 0, 0, 0.1);
          }
        }

        /* Inner card surface overlay */
        .premium-logo-card .card-inner {
          position: relative;
          border-radius: 18px;
          height: 100%;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          box-sizing: border-box;
          transform-style: preserve-3d;
        }

        .dark .premium-logo-card .card-inner {
          background: #0b0b0c; /* Solid dark background to reveal the inner mesh gradient clearly */
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.05);
        }

        .light .premium-logo-card .card-inner {
          background: #fcfcfd;
          box-shadow: inset 0 1px 1.5px rgba(255, 255, 255, 0.8);
        }

        /* Saturated dynamic gradient background layer */
        .premium-logo-card .card-ambient-bloom {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          transition: opacity 0.5s ease;
          opacity: 0.85; /* Highly visible solid panel! */
        }

        .dark .premium-logo-card .card-ambient-bloom {
          background-image: 
            radial-gradient(circle 120px at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--glow-c1) 0%, var(--glow-c2) 50%, var(--glow-c3) 100%);
        }

        .light .premium-logo-card .card-ambient-bloom {
          background-image: 
            radial-gradient(circle 120px at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--glow-c1) 0%, var(--glow-c2) 60%, var(--glow-c3) 100%);
          opacity: 0.7;
        }

        @media (hover: hover) {
          .premium-logo-card:hover .card-ambient-bloom {
            opacity: 0.98;
          }
        }

        /* Digital grain texture overlay */
        .premium-logo-card .card-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.16'/%3E%3C/svg%3E");
          mix-blend-mode: overlay;
          pointer-events: none;
          z-index: 2; /* Overlays on top of the gradient orb, below the logo content */
        }

        /* Logo centered container layout */
        .logo-center-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 20;
          transform-style: preserve-3d;
        }

        .logo-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          transform-origin: center;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        /* Large brand logos */
        .logo-icon-container svg {
          width: 2.75rem !important; /* 44px wide */
          height: 2.75rem !important;
        }

        @media (hover: hover) {
          .premium-logo-card:hover .logo-icon-container {
            transform: translateY(-8px) scale(1.1) translateZ(15px);
          }
        }

        /* Hover text label that slides up */
        .logo-hover-label {
          position: absolute;
          bottom: -2px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--foreground);
          opacity: 0;
          transform: translateY(8px) translateZ(10px);
          transition: opacity 0.35s ease, transform 0.35s ease;
          white-space: nowrap;
        }

        @media (hover: hover) {
          .premium-logo-card:hover .logo-hover-label {
            opacity: 0.95;
            transform: translateY(0) translateZ(10px);
          }
        }

        /* Claude specific sheen sweep animation */
        @keyframes sheen-sweep {
          0% { transform: translate(-100%, -100%) rotate(45deg); }
          80% { transform: translate(100%, 100%) rotate(45deg); }
          100% { transform: translate(100%, 100%) rotate(45deg); }
        }

        .premium-logo-card.claude-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 45%,
            rgba(217, 119, 87, 0.3) 50%,
            transparent 55%
          );
          opacity: 0;
          pointer-events: none;
          transform: translate(-100%, -100%) rotate(45deg);
          z-index: 15;
        }

        @media (hover: hover) {
          .premium-logo-card.claude-card:hover::after {
            opacity: 0.15;
            animation: sheen-sweep 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite;
          }
        }

        /* Touch safe states for mobile devices */
        @media (hover: none) {
          .premium-logo-card:active {
            transform: scale(0.96);
          }
        }
      `}</style>
    </section>
  );
}
