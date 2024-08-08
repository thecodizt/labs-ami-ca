/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    distDir: 'dist',
    trailingSlash: true,
    assetPrefix: '.',
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
