/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**cache.tradeinn.com',
            },
        ],
    },
}

module.exports = nextConfig
