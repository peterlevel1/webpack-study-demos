var path = require("path")

// webpack --env.production --env.hello=world
// only --env can be used for definition
// ----------------------------------------------
// --env     Environment passed to the config, when it is a function
// when module.exports is function, env can be passed to the webpack.config.js
module.exports = function (env) {
  console.log(env)
  // { production: true, hello: 'world' }
  return {
    entry: "./index.js",
    output: {
      path: __dirname + "/dist",
      filename: "main.js"
    }
  }
}
