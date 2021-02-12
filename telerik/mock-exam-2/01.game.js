const input = ['185']
const print = this.print || console.log
const gets = this.gets || ((i) => () => input[i++])(0)

const [a, b, c] = gets()
  .split('')
  .map((digit) => +digit)

const result = Math.max(a * b * c, a + b + c, a * b + c, a + b * c)

print(result)
