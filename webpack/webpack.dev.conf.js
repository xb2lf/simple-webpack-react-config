const { merge } = require('webpack-merge');
const { resolvePath, baseConfig } = require('./webpack.base.conf');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    compress: true,
    port: 9000,
    open: true,
    host: '127.0.0.1',
    devMiddleware: {
      writeToDisk: true,
    },
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin()
  ]
});