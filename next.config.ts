import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config: Configuration) => {
    config.module?.rules?.push({
      test: /\.js$/,
      exclude: /(src\/app\/assets\/js|node_modules)/,
    });
    return config;
  },
};

export default nextConfig;
