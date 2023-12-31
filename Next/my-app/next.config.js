/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.dicebear.com',
          port: '',
          pathname: '/7.x/pixel-art-neutral/svg',
        },
      ],
  }
};

module.exports = nextConfig;
