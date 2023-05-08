/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    esmExternals: false, //fix out of heap memory
  },
  images:{
    domains:[
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
  ]
  }
}

module.exports = nextConfig
