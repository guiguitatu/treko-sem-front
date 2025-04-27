/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/dashboards',
        destination: '/modules/base/dashboards',
      },
      {
        source: '/orgs/:path*',
        destination: '/modules/base/orgs/:path*',
      },

    ]
  },
}

module.exports = nextConfig
