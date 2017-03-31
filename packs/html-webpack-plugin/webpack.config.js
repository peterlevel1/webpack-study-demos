var path = require("path")
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
var fs = require("fs");
var str = fs.readFileSync("./partial.ejs", "utf8")
console.log(str)

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      // {
      //   test: /\.ejs$/,
      //   loader: 'ejs-loader',
      //   query: {
      //     // title: "aaaaaaaaaaaaaa"
      //     // evaluate
      //     // interpolate
      //     // escapse
      //   }
      // },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'assets/admin.html',
      template: "t.ejs",
      opts: {
        hello: "and cc is hansome, right ?"
      }
    }),
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'assets/hello.html',
      template: "t2.ejs",
      opts2: {
        hello: "so, what's up",
        here: str
      }
    })
  ]
};
