/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    localeDetection: true,
  },
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
