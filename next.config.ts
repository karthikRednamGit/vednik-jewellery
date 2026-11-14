import type { NextConfig } from "next";

const cloudflarePagesExport = process.env.CLOUDFLARE_PAGES_EXPORT === "1";

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
  cacheComponents: !cloudflarePagesExport,
  partialPrefetching: !cloudflarePagesExport,
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
