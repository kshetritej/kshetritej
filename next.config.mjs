/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pinimg.com',
                // port: '',
                // pathname: '/account123/**',
                // search: '',
            },
        ],
    },
    i18n:{
        locales: ['en','ne', 'es', 'fr'],
        defaultLocale: 'en'
    }
};

export default nextConfig;
