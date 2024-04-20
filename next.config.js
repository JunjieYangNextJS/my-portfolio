/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ["utfs.io"],
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
    ],
  },
};

module.exports = nextConfig;
