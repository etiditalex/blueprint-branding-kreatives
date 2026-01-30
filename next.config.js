/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  webpack: (config, { dev }) => {
    // OneDrive / network-synced folders on Windows can miss file change events.
    // Polling makes HMR/rebuilds reliably pick up edits.
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules/**', '**/.git/**', '**/.next/**'],
      }
    }

    return config
  },
}

module.exports = nextConfig


