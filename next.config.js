/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/kkwebsite',
  assetPrefix: '/kkwebsite/',
  images: { unoptimized: true },
};

module.exports = nextConfig;