const webpackConfigShared = require('./webpack.shared');
const WebpackNodeExternals = require('webpack-node-externals');

//todo
const frontendConfiguration = {
  entry: webpackConfigShared.entries.client,
  output: {
    ...webpackConfigShared.output.client
  },
  resolve: {
    extensions: webpackConfigShared.extensionsResolve
  },
  module: {
    rules: webpackConfigShared.modulesRules
  },
  externals: [WebpackNodeExternals()]
};
/************************************* */
const backendConfiguration = {
  entry: webpackConfigShared.entries.server,
  target: 'node',
  output: {
    ...webpackConfigShared.output.server
  },
  resolve: {
    extensions: webpackConfigShared.extensionsResolve
  },
  module: {
    rules: webpackConfigShared.modulesRules
  },

  externals: [WebpackNodeExternals()]
};

const isProduction = process.NODE_ENV === 'production';
const isDevelopment = process.NODE_ENV === 'development';
const isTesting = process.NODE_ENV === 'testing';

function getModeByENV() {
  if (isProduction) {
    return 'production';
  }
  return 'development';
}

const frontendConfigBuild = function (env) {
  console.log(`[Build Environment]-[Frontend]`, env);
  return {
    ...frontendConfiguration,
    mode: getModeByENV(),
    devtool: isProduction ? '' : 'source-map'
  };
};

const backendConfigBuild = function (env) {
  console.log(`[Build Environment]-[Backend]`, env);
  return {
    ...backendConfiguration,
    mode: getModeByENV(),
    devtool: isProduction ? '' : 'source-map'
  };
};

module.exports = [frontendConfigBuild, backendConfigBuild];
