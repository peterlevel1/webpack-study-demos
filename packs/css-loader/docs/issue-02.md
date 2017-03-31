### issues 02 alias
1.
  css-loader/lib/loader.js
    even if we set the alias object,
    the behavior of css-loader would not take our intentions
    e.g.
      intention:
        - webpack.config.js
        alias: {
          m: "../src/mod1.css"
        }
        - some.css
        @import "m";
        m would not equal "../src/mod1.css"
