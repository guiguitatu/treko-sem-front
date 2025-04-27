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
      {
        source: '/representatives/:path*',
        destination: '/modules/base/representative/:path*',
      },
      {
        source: '/representatives',
        destination: '/modules/base/representative',
      },
      {
        source: '/orgs',
        destination: '/modules/base/orgs',
      },

    ]
  },
}

module.exports = nextConfig
