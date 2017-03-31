var path = require("path")

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    // main.48f5c2e6.bundle.js
    // hash:8 --- hash 8位
    // ------------------------
    // main.060f450a8b.bundle.js
    // hash:8 --- hash 10位
    filename: "[name].[hash:10].bundle.js",
    libraryTarget: "umd"
  },
  externals: {
    // why array ["./haha", "hello"] here is wrong
    HaHa: "haha"
  }
}
