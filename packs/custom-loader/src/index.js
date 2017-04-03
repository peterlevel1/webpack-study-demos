var aHtml =  require("./a.ejs");
if (typeof aHtml === "function") {
  var str = aHtml({
    title: "New York Times",
    hello: "say hello to you guys !"
  })
  console.log(str)
} else {
  console.log(aHtml)
}

module.exports = "hello world !"
