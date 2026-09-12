import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH="/portfolio" when deploying to
// https://<user>.github.io/portfolio/ (GitHub Pages project site).
// Leave empty for local dev or root-domain hosting.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
