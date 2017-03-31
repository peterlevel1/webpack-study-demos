module.exports = "hello world !"

console.log(
  process.env.NODE_ENV,
  typeof process.env.NODE_ENV,
  process.env.NODE_ENV === "development",
  process.env.NODE_ENV === "production"
)

console.log(process.env.DEBUG, typeof process.env.DEBUG, process.env.DEBUG === false)
