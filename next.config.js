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
    }
}

module.exports = nextConfig
