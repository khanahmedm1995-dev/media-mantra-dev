import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/india", destination: "/in", permanent: true },
      { source: "/singapore", destination: "/sg", permanent: true },
      { source: "/uae", destination: "/ae", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
  /** Windows: broken native/WASM SWC can crash during "Running TypeScript" — keep checking in IDE. */
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
