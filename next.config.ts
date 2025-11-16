import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn-icons-png.flaticon.com"], // allow images from this domain
  },
};

export default nextConfig;
