/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["image.tmdb.org", "source.unsplash.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
