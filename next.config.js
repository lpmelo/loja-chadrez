/** @type {import('next').NextConfig} */


module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.DEFAULT_API_ROUTE}/api/:path*`,
      },
    ];
  },
  env: {
    DEFAULT_API_ROUTE: process.env.DEFAULT_API_ROUTE,
  },
};
