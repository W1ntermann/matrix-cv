import type { NextConfig } from 'next';

const basePath = process.env.BASE_PATH || '';

const nextConfig: NextConfig = {
  basePath: basePath || undefined,
  reactStrictMode: true,
};

export default nextConfig;