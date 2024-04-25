const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  swcMinify: true,
  trailingSlash: true,
  // output: "standalone",
  env: {}
};

module.exports = withBundleAnalyzer(nextConfig);
