const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function () {
  return {
    entry: [
      path.resolve('src/app.js'),
    ],
    output: {
      path: path.resolve('docs'),
      filename: 'index.js',
      publicPath: '/recycler-view-demo'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.hbs$/,
          use: ['handlebars-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('src/app.hbs')
      })
    ],
    devtool: 'source-map'
  }
};
