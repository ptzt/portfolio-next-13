/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'source.unsplash.com',
      'lastfm.freetls.fastly.net',
      'i.scdn.co',
      'cdn.discordapp.com',
    ],
  },
  experimental: {
    appDir: true
  },
}



module.exports = nextConfig
