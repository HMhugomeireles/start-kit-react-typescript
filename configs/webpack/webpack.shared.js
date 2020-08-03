const path = require('path');

// Entry files
const clientEntry = path.resolve(__dirname, '../../src/render/client/index.tsx');
const serverEntry = path.resolve(__dirname, '../../src/render/server/index.tsx');

// Files names output
const clientOutPutFile = {
  filename: 'app.js',
  path: path.resolve(__dirname, '../../dist/client')
};
const serverOutPutFile = {
  filename: 'server.js',
  path: path.resolve(__dirname, '../../dist/server')
};

const extensionsResolve = ['.ts', '.tsx'];

const moduleRules = [
  {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-react']
      }
    }
  },
  { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
];

const plugins = [];

module.exports = {
  entries: {
    client: clientEntry,
    server: serverEntry
  },
  output: {
    client: clientOutPutFile,
    server: serverOutPutFile,
    globalObject: 'this'
  },
  extensionsResolve: extensionsResolve,
  modulesRules: moduleRules
};
