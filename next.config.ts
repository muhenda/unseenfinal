import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [ // Use remotePatterns, NOT domains
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '', // Can be an empty string
        pathname: '/**', // Or a more specific path if needed
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