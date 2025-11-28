/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost", pathname: "/uploads/coverImage/**", port: "5000" },
      { protocol: "http", hostname: "localhost", pathname: "/uploads/avatar/**", port: "5000" },
    ],
  },
  logging: {
    fetches: {
      // fullUrl: true,
    },
  },
};

export default nextConfig;
