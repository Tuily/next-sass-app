// next.config.js

const path = require('path');
const withSass = require('@zeit/next-sass');
module.exports = withSass({
  /* bydefault config  option Read For More Optios
here https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
  cssModules: true,
});
module.exports = {
  /* Add Your Scss File Folder Path Here */
  reactStrictMode: true,
  productionBrowserSourceMaps: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
