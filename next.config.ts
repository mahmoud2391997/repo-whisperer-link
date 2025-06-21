import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
    localeDetection: false,
  },
  images: {
    domains: ['cdn.salla.sa'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.salla.sa',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
