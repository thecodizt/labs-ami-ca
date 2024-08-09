/** @type {import('next').NextConfig} */
const nextConfig = {
    outdir: 'dist',
    output: 'export',
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
