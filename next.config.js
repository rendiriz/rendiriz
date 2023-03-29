const withPlugins = require('next-compose-plugins');
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    nextScriptWorkers: true,
  },
};

module.exports = withPlugins([[withContentlayer({})]], nextConfig);
