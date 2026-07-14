import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages: `next build` emits plain HTML/CSS/JS into out/
  output: "export",
  // The Image Optimization API needs a server, which GitHub Pages doesn't have
  images: { unoptimized: true },
};

export default nextConfig;
