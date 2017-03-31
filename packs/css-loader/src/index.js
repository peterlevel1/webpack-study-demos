require("./2")

var css = require("./index.css");
var cssMod1 = require("./mod1.css");

module.exports = "hello world !"

// no css modules, this would be an empty object
// -----------------------------------------
// if css modules enabled
// the classnames would be within this object
console.log(css);
console.log(cssMod1);

// what the difference between css-loader with dva is that
// dva auto handle this step, only req the css would be fine
// so css.div1 is undefined here
document.querySelector(".div1").setAttribute("class", cssMod1.div1)

document.querySelector(".div2").setAttribute("class", css.div2)
document.querySelector(".emoji01").setAttribute("class", css.emoji01)
