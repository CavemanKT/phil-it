/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      domains: [
        'localhost',
        // 'https://caveman-is-just-a-nickname.s3.ap-southeast-1.amazonaws.com'
  
      ]
    }
}

module.exports = nextConfig
