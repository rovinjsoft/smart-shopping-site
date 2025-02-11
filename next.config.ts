import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/smart-shopping-site',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
