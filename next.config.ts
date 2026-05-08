import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If deploying to a subpath on GitHub Pages (e.g. /portfolio),
  // uncomment and set this:
  // basePath: "/portfolio",
};

export default nextConfig;
