import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.brandfetch.io",
      },
    ],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
}

export default nextConfig
