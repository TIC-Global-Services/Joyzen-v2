import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    domains: ["ik.imagekit.io"],
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
