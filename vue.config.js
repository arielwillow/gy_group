const pxToViewport = require('postcss-px-to-viewport');

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          pxToViewport({
            viewportWidth: 375,
          }),
        ],
      },
    },
  },
  configureWebpack: {
    performance: {
    hints:'warning',
    maxEntrypointSize: 50000000,
    maxAssetSize: 30000000,
    assetFilter: function(assetFilename) {
      return assetFilename.endsWith('.js');
      }
    }
  },
  // publicPath: process.env.NODE_ENV === 'production'
  //  ? '/GGGYYY/'
  //  : '/',
  // lintOnSave: false,
};