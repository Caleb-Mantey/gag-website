import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // AVIF first: about 28% smaller than WebP on our photos, with WebP as the fallback
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
