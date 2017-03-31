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
            // |Name|Default|Description|
            // |:--:|:-----:|:----------|
            // |**`root`**|`/`|Path to resolve URLs, URLs starting with `/` will not be translated|
            // |**`modules`**|`false`|Enable/Disable CSS Modules|
            // |**`import`** |`true`| Enable/Disable @import handling|
            // |**`url`**|`true`| Enable/Disable `url()` handling|
            // |**`minimize`**|`false`|Enable/Disable minification|
            // |**`sourceMap`**|`false`|Enable/Disable Sourcemaps|
            // |**`camelCase`**|`false`|Export Classnames in CamelCase|
            // |**`importLoaders`**|`0`|Number of loaders applied before CSS loader|
            // |**`alias`**|`{}`|Create aliases to import certain modules more easily|
            loader: "css-loader",
            options: {
              modules: true,
              // if sourceMap + modules
              // <link type="text/css" rel="stylesheet" href="blob:null/bede1a01-3384-4f1c-8dad-db7918d0b59f">
              // so what is this ?
              // ------------------------------------------
              // sourceMap: true

              // root: ''

              // minimize: true,
              // sourceMap: true,
              // we'd better do not use alias
              // alias: {
              //   "alias$": "../alias/"
              // }
              // .src-mods-mod2__haha--2AMUF {}
              // localIdentName: '[path][name]__[local]--[hash:base64:5]'
              localIdentName: '[local]___[hash:base64:6]'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 1e+4
        }
      }
    ]
  },
  plugins: []
}
