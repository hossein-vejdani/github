/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ['en-US'],
        defaultLocale: 'en-US',
        localeDetection: false,
        defaultLocale: 'en-US'
    }
}

module.exports = nextConfig
