var path = require("path")
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  // entry: "./src/pageA.js",
  entry: {
    pageA: './src/pageA.js',
    pageB: './src/pageB.js',
    pageC: './src/pageC.js',
    // commons: "./src/commons.js"
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    // filename: '[name].[chunkhash].js',
    // chunkFilename: "[id].chunk.js"
  },
  resolve: {
    // alias: {
    //   commons: path.resolve("./src/commons.js")
    // }
  },
  plugins: [
    new CommonsChunkPlugin({
      // (the commons chunk name)
      // we define the chunks name for this common module
      name: "asas",

      // (the filename of the commons chunk)
      filename: "commons.js",

      // (Modules must be shared between 3 entries)
      minChunks: 3,

      // (Only use these entries)
      chunks: ["pageA", "pageB"],
    })
  ]
}
