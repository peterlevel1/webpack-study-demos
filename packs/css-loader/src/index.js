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
