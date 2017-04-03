var path = require("path")
var webpack = require("webpack")

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ejs$/,
         use: [
          {
            loader: 'cc-ejs-loader',
            options: {
              local: {
                title: "cc is good"
              },
              config: {
                //a: { hello: "world ! this is ejs template !" },
                a1: { hello: "world ! hahaha !" }
              }
            }
          }
        ]
      }
    ]
  }
}
