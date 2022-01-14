const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//相对路径转绝对路径
const resolvePath = _path => path.resolve(__dirname, _path);

const baseConfig = {
  entry: resolvePath('../src/index.js'),
  output: {
    path: resolvePath('../dist'),
    filename: '[name]-[fullhash:10].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [/* 'style-loader', */MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader',]
      },
      {
        test: /\.less$/,
        use: [/* 'style-loader', */MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('../public/index.html'),
      filename: 'index.html',
      title: 'React App',
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash:10].css',
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    modules: ["node_modules", path.resolve(__dirname, "../node_modules")],
  },
};

module.exports = {
  resolvePath,
  baseConfig
}