import type { NextConfig } from "next"

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.brandfetch.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
}
export default nextConfig
