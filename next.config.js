/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/pspdfkit-demo',
  assetPrefix: '/pspdfkit-demo/',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(worker\.js|worker\.js\.map|wasm)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext][query]'
      }
    });
    return config;
  },
  // Add static file serving configuration
  async rewrites() {
    return [
      {
        source: '/pspdfkit-lib/:path*',
        destination: '/pspdfkit-lib/:path*',
      },
    ];
  },
}

module.exports = nextConfig 