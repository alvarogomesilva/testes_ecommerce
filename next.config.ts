import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.0.84',
        port: "4444",
        pathname: "/media/products/**",
      }
    ]
  }
};

export default nextConfig;
