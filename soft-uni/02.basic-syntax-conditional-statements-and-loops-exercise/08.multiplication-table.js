function printMultiplicationTable(n) {
  return Array.from({ length: 10 }, (_, i) => `${n} X ${i + 1} = ${n * (i + 1)}`).join('\n')
}

console.log(printMultiplicationTable(5))

// 5 X 1 = 5
// 5 X 2 = 10
// 5 X 3 = 15
// 5 X 4 = 20
// 5 X 5 = 25
// 5 X 6 = 30
// 5 X 7 = 35
// 5 X 8 = 40
// 5 X 9 = 45
// 5 X 10 = 50
