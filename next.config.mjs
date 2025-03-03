/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  productionBrowserSourceMaps: false,
  images: {
    formats: ['image/avif', 'image/webp']
  }
};

export default nextConfig;
