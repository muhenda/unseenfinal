import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  webpack: (config: Configuration) => {
    config.module?.rules?.push({ // Use optional chaining and nullish coalescing
      test: /\.js$/,
      exclude: /(src\/app\/assets\/js|node_modules)/,
    });
    return config;
  },
};

export default nextConfig;