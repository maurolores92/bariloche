/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for leaflet and other client-side libraries
  transpilePackages: ['leaflet', 'react-leaflet'],
  
  // Empty turbopack config to silence the warning
  turbopack: {},
  
  // Webpack configuration for production builds and fallback
  webpack: (config, { isServer }) => {
    // Fix for leaflet icons in SSR
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;