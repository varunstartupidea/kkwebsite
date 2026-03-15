/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/KK_website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/KK_website/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
