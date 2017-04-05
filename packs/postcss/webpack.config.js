var path = require("path")
var webpack = require("webpack")

var precss = require("precss")
var autoprefixer = require('autoprefixer')

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
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: function () {
                return [
                  precss,
                  function () {
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        // React doesn't support IE8 anyway
                        'not ie < 9',
                      ],
                    })
                  }
                ];
              }
            }
          }
        ]
      }
    ]
  },
  plugins: []
}
