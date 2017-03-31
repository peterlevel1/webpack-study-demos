### window.URL

main.bundle.js
```js
var blob = new Blob([css], { type: "text/css" });
var oldSrc = linkElement.href;
linkElement.href = URL.createObjectURL(blob);
if (oldSrc)
  URL.revokeObjectURL(oldSrc);
```

### css-modules

in a js file
```js
import styles1 from "./a.css";
import styles2 from "./b.css";
let obj = Object.assign({}, styles1, styles2)
```

Question 1.
if another js file import b.css, would it take more sizes,
even if it has been loaded in the pre loaded js file ?

Answer 1.
after test, just import those css files, the css-loader would
remember what css files loaded, it would not take more sizes.

### css-modules hash name
after css-modules work, the css class would like this
._2AMUFi5gqix7JBeAhnShx7

Question 1.
is there any way to add some prefix to save the src name with the hash ?

Answer 1.
css-loader: options:
localIdentName: '[path][name]__[local]--[hash:base64:5]'

result:
.src-mods-mod2__haha--2AMUF {}

#### attention `localIdentName` is not shown in the options of the css-loader guides,
#### but appear in a part of the readme.md

### keywords
```css
@value blue: #0c77f8;
@value red: #ff0000;
@value green: #aaf200;

@value colors: "./colors.css";
@value blue, red, green from colors;

/* :global */
/* :local ---- default*/
```

