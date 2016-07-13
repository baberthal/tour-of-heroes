'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../config/webpack.dev');
const logger = require('../config/logger')('Dev Server');

let PORT = process.env.PORT || 8080;

let publicPath = webpackConfig.output.publicPath = `http://localhost:${PORT}/`;

webpackConfig.entry.app.unshift(
    `webpack-dev-server/client?http://localhost:${PORT}`,
    'webpack/hot/dev-server');

let compiler = webpack(webpackConfig);

const devServer = new WebpackDevServer(compiler, {
  contentBase: `http://localhost:${PORT}`,
  publicPath: publicPath,
  progress: true,
  hot: true,
  inline: true,
  historyApiFallback: true,
  quiet: false,
  noInfo: false,
  lazy: false,
  stats: {
    colors: true,
    hash: false,
    version: false,
    chunks: false,
    children: false,
  },
});

const SUCCESS_MESSAGE_TEMPLATE = ' {orange:=>} 🔥  {blue:%s} %s {yellow:%d}';

devServer.listen(PORT, 'localhost', err => {
  if (err) {
    logger.prettyError(err);
  }
  logger.info(SUCCESS_MESSAGE_TEMPLATE, 'WebpackDevServer', 'running on', PORT);
});
