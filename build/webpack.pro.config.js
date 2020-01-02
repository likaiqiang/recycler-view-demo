const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config')();
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const proConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};

module.exports = merge(baseConfig, proConfig);
