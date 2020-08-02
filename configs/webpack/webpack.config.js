const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNodeExternals = require('webpack-node-externals');

const frontendConfiguration = {
  entry: path.resolve(__dirname, '../../src/render/client/index.tsx'),
  mode: 'development',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, '../../dist/client')
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [],
  externals: [WebpackNodeExternals()]
};
/************************************* */
const backendConfiguration = {
  entry: path.resolve(__dirname, '../../src/render/server/index.ts'),
  target: 'node',
  mode: 'development',
  /*   node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  }, */
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../../dist/server'),
    libraryTarget: 'commonjs2'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  plugins: [
    /* new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../public/index.html')
    }) */
  ],
  externals: [WebpackNodeExternals()]
};

const frontendConfigBuild = function (env) {
  return frontendConfiguration;
};

const backendConfigBuild = function (env) {
  return backendConfiguration;
};

module.exports = [frontendConfigBuild, backendConfigBuild];
