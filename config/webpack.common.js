const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const progressHandler = require('./progress');

module.exports = {
  entry: {
    polyfills: ['./src/polyfills.ts'],
    vendor: ['./src/vendor.ts'],
    app: ['./src/main.ts'],
  },

  resolve: {
    extensions: ['', '.js', '.ts'],
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html',
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]',
      },
    ],
  },

  postcss: function() {
    return [autoprefixer({
      browsers: [
        'Android 2.3',
        'Android >= 4',
        'Chrome >= 20',
        'Firefox >= 24',
        'Explorer >= 8',
        'iOS >= 6',
        'Opera >= 12',
        'Safari >= 6',
      ],
    })];
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills'],
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),

    new webpack.ProgressPlugin(progressHandler),
  ],
};
