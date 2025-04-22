/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  distDir: 'dist',
  cleanDistDir: true,
  swcMinify: true,
  compress: true
};

module.exports = nextConfig;