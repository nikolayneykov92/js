// function getNumbersInRange(m, n) {
//   const numbers = []

//   for (let i = m; i >= n; i--) {
//     numbers.push(i)
//   }

//   return numbers.join('\n')
// }

function getNumbersInRange(m, n) {
  return Array.from({ length: m - n + 1 }, (_, i) => m - i).join('\n')
}

console.log(getNumbersInRange(6, 2))
