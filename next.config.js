// next.config.js
const withSass = require('@zeit/next-sass');
module.exports = withSass({
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  cssModules: true,
});
