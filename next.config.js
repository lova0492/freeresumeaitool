/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/freeresumeaitool',     // 👈 repo name
  assetPrefix: '/freeresumeaitool/',
  trailingSlash: true,
};

module.exports = nextConfig;
