module.exports = {
  reactStrictMode: true,
  source: '/:path*',
  destination: 'https://drive.google.com/:path*',
  env: {
    UNSPLASH_API_KEY: process.env.UNSPLASH_API_KEY
  },
  images: {
    loader: "akamai",
    path: "/",
  },
  webpack5: true,
  async headers() {
    return [
      {
        // matching all API routes
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
}
