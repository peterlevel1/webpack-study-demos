const Path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
  entry: Path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'main.js',
    path: Path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // 2. style-loader(处理css-loader生成的结果) <- 1. css-loader(先加载css文件)
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|ttc)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: yaml.parse,
        },
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: json5.parse,
        },
      },
      {
        test: /\.md/i,
        // 2. html-loader(处理markdown-loader生成的结果) <- 1. markdown-loader(先加载markdown文件)
        use: ['html-loader', 'markdown-loader']
      }
    ]
  }
};
