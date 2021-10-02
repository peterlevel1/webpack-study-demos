const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: Path.resolve(__dirname, './src/index.js'),
    print: Path.resolve(__dirname, './src/print.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: Path.resolve(__dirname, './dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出'
    })
  ]
};
