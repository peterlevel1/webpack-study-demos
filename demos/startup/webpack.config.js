const Path = require('path');

module.exports = {
  entry: Path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'main.js',
    path: Path.resolve(__dirname, './dist')
  }
};
