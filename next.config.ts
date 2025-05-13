import type { NextConfig } from "next";
import { env } from "process";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // ...
    config.externals['@solana/web3.js'] = 'commonjs @solana/web3.js';
    config.externals['@solana/spl-token'] = 'commonjs @solana/spl-token';
    return config;
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
  allowedDevOrigins: [env.REPLIT_DOMAINS.split(",")[0]],
};

module.exports = nextConfig;
