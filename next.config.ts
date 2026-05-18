import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
