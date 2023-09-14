/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/home',
            }
        ]
    },
    images: {
        domains: ['cdn.discordapp.com']
    },
    env: {
        DISCORD_API_WEBHOOK: process.env.DISCORD_API_WEBHOOK
    }
}

module.exports = nextConfig