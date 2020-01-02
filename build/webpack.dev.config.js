const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config')();

const devConfig = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    port: 5211,
    hot: true
  }
};

module.exports = merge(baseConfig, devConfig);
