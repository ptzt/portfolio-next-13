/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
