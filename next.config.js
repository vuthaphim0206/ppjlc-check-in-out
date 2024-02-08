/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
 distDir: 'dist',
 experimental: {
    optimizeImages: true,
  },
}

module.exports = nextConfig;
