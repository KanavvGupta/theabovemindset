import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize Three.js bundling
  transpilePackages: ["three"],

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Production-ready headers for security & performance
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },

  // Enable React strict mode for better dev experience
  reactStrictMode: true,

  // Powered-by header removed for production
  poweredByHeader: false,
};

export default nextConfig;
