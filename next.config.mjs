/** @type {import('next').NextConfig} */
const nextConfig = {
  // Externalize heavy server-only packages so Next.js doesn't bundle them
  serverExternalPackages: ["@prisma/client", "@prisma/extension-accelerate", "openai"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
