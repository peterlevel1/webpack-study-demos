var path = require("path")
var webpack = require("webpack")

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  plugins: [
    // 1.
    // Not specifying the environment variable raises an "EnvironmentPlugin - ${key}
    // environment variable is undefined" error.
    // 2.
    // Unlike DefinePlugin, default values are applied to JSON.stringify by the EnvironmentPlugin.
    // 3.
    // To specify an unset default value, use null instead of undefined.
    new webpack.EnvironmentPlugin({
      // use 'development' unless process.env.NODE_ENV is defined
      // -------------------------------------------------------
      // command line:
      // NODE_ENV=production webpack
      // -------------------------------------------------------
      // development is the default value for the process.env.NODE_ENV
      NODE_ENV: JSON.stringify('development'),
      DEBUG: JSON.stringify(false)
    })
  ]
}
