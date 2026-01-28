import type { NextConfig } from "next";

const nextConfig = {
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/nextjsmarketplace' : ''
};

export default nextConfig;
