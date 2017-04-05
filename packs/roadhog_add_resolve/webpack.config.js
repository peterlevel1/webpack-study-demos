import assert from "assert"
import {join} from "path"

// roadhog/utils/applyWebpackConfig
// ------------------------------------------------------------
// export default function applyWebpackConfig(config, env) {
//   const filePath = resolve('webpack.config.js');
//   if (existsSync(filePath)) {
//     return require(filePath)(config, env);  // eslint-disable-line
//   } else {
//     return config;
//   }
// }
// ------------------------------------------------------------

export default (config, env) => {
  console.log("====================")
  console.log("config")
  console.log(config)
  console.log()
  console.log("env")
  console.log(env)
  console.log("====================")

  assert.ok(!config.resolve.alias, "alias should not exist")
  config.resolve.alias = {
    haha: join(__dirname, "./libs/haha")
  }

  return config
}
