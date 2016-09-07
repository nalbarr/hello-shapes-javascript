/* eslint no-process-env: 0 */
/* eslint no-var: 0 */
const _ = require('lodash');
const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');

const DEBUG = !argv.release;

const GLOBALS = {
  __DEBUG__: DEBUG
};

module.exports = {
  entry: path.resolve(__dirname, 'src', 'server.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    publicPath: '/assets/',
    sourcePrefix: '  '
  },
  target: 'node',
  externals: [nodeExternals()],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },
  cache: DEBUG,
  debug: DEBUG,
  devtool: DEBUG ? '#inline-source-map' : false,
  stats: {
    colors: true,
    reasons: DEBUG
  },
  resolve: {
    alias: {
      __ROOT__: path.resolve(__dirname),
      __SRC__: path.resolve(__dirname, 'src')
    },
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.BannerPlugin('require("source-map-support").install();',
      {raw: true, entryOnly: false})
  ],
  module: {
    loaders: [
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};