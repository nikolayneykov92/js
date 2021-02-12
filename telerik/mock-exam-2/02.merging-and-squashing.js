const input = ['4', '11', '23', '34', '45']
const print = this.print || console.log
const gets = this.gets || ((i) => () => input[i++])(0)

const n = +gets()

const { merged, squashed } = Array.from({ length: n }, gets).reduce(
  (result, currNum, index, array) => {
    const nextNum = array[index + 1]

    if (nextNum) {
      const [a, b] = currNum
      const [c, d] = nextNum

      result.merged.push(b + c)
      result.squashed.push(a + ((Number(b) + Number(c)) % 10) + d)
    }

    return result
  },
  { merged: [], squashed: [] }
)

print(merged.join(' '))
print(squashed.join(' '))

// const merged = []
// const squashed = []

// let prevNum = gets()

// for (let i = 0; i < n - 1; i++) {
//   let currNum = gets()

//   const a = prevNum[0]
//   const b = prevNum[1]
//   const c = currNum[0]
//   const d = currNum[1]

//   merged.push(b + c)
//   squashed.push(a + ((Number(b) + Number(c)) % 10) + d)

//   prevNum = currNum
// }

// print(merged.join(' '))
// print(squashed.join(' '))
