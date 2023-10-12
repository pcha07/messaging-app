/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig
module.exports = {
    experimental: {
      appDir: true,
    },
    images: {
      domains: [
        "res.cloudinary.com",
        "avatars.githubusercontent.com",
        "lh3.googleusercontent.com"
      ]
    }
  };
  
