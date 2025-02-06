/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GITHUB: process.env.GITHUB,
    LINKED_IN: process.env.LINKED_IN,
  }
};

export default nextConfig;
