const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.wikimedia.org',
            },
        ],
    },
}

module.exports = nextConfig

