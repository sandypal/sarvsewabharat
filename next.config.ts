import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: '/dev',
  assetPrefix: '/dev',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
