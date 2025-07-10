import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.freepik.com',
        port: '',
        pathname: '/free-photo/**',
      },
    ],
  },
};

export default nextConfig;
