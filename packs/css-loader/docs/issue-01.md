### issues 01
1.
  src/index.css
    if :global not added before .emoji01,
    webpack compilation would fail as the root option with css-loader options
  webpack.config.js
    css-loader options:
      root: "../../../assets"
2.
  src/index.css
    if :global added before .emoji01,
  src/index.js:
    css would only take the .div1 as attrs

src/index.css
```css
@import "./mod1.css";

.div2 {
  margin-top: 20px;
  height: 200px;
  background-color: red;
}

:global .emoji01 {
  width: 20px;
  height: 20px;
  background-color: blue;
  background-image: url(/logo-20-20.png);
}
```

mod1.css
```css
.div1 {
  margin-top: 20px;
  height: 200px;
  background-color: green;
}
```

webpack.config.js
```js
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
              root: '../../../assets'
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
```

src/index.js
```js
var css = require("./index.css");

module.exports = "hello world !"

// no css modules, this would be an empty object
// -----------------------------------------
// if css modules enabled
// the classnames would be within this object
console.log(css);

document.querySelector(".div1").setAttribute("class", css.div1)
document.querySelector(".div2").setAttribute("class", css.div2)
document.querySelector(".emoji01").setAttribute("class", css.emoji01)

```

