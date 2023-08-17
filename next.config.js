const { protocol } = require('socket.io-client')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**'
      }
    ],
    domains: [
      'localhost',
      // 'https://caveman-is-just-a-nickname.s3.ap-southeast-1.amazonaws.com'

    ]
  }
}

module.exports = nextConfig
