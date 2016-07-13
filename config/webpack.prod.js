/* eslint node: true */
'use strict';

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common');
const helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',
  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js',
  },
  htmlLoader: {
    minimize: false,
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss'),
      },
      {
        test: /\.scss$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract(
            'style', 'css?sourceMap!postcss!sass?sourceMap'),
      },
      {
        test: /\.scss$/,
        include: helpers.root('src', 'app'),
        loaders: ['raw', 'css?sourceMap', 'postcss', 'sass?sourceMap'],
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loaders: ['raw', 'css?sourceMap', 'postcss'],
      },

    ],
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV),
      },
    }),
  ],
  progress: true,
  profile: true,
  bail: true,
});
