/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, //  Désactive l’optimisation d’images
    },
};

module.exports = nextConfig;
