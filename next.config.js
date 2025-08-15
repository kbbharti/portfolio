/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/portfolio', // Repository name-based basePath
    assetPrefix: '/portfolio',
  }),
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig