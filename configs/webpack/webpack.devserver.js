const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    allowedHosts: [],
    contentBase: path.join(__dirname, 'dist'),
    openPage: 'home.html',
    open: true,
    compress: true,
    port: 9000,
    historyApiFallback: {
      disableDotRule: true
    },
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../public/index.html')
    })
  ]
};
