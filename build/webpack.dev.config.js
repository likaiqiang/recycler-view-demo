const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config')();

const devConfig = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader?sourceMap'
        ]
      }
    ]
  },
  devServer: {
    port: 5211,
    hot: true
  }
};

module.exports = merge(baseConfig, devConfig);
