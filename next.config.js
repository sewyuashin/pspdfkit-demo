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
      test: /\.worker\.(js|ts)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext][query]'
      }
    });
    return config;
  }
}

module.exports = nextConfig 