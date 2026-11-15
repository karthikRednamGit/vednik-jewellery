import type { NextConfig } from "next";

const cloudflarePagesExport =
  process.env.CLOUDFLARE_PAGES_EXPORT === "1" || process.env.CF_PAGES === "1";

const nextConfig: NextConfig = {
  /* config options here */
  ...(cloudflarePagesExport ? { output: "export" as const } : {}),
  ...(cloudflarePagesExport ? { distDir: ".next-cloudflare" } : {}),
  images: {
    ...(cloudflarePagesExport ? { unoptimized: true } : {}),
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    agentFeedback: true,
  },
  // Cache Components relies on Node.js event-loop behavior that workerd does
  // not guarantee. This storefront does not use `use cache`, so keep it off
  // for Cloudflare Workers and use Next.js's standard route rendering.
  cacheComponents: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
