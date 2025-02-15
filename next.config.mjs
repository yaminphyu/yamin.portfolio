/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GITHUB: process.env.GITHUB,
    LINKED_IN: process.env.LINKED_IN,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
    RECEIVER_EMAIL: process.env.RECEIVER_EMAIL,
  }
};

export default nextConfig;
