var path = require("path")
var webpack = require("webpack")

// @import "sth.css"
//

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[local]___[hash:base64:6]'
            }
          }
        ]
      }
    ]
  },
  plugins: []
}
