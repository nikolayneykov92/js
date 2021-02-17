function printTriangleOfNumbers(n) {
  let triangle = ''

  for (let row = 1; row <= n; row++) {
    let currentLine = ''

    for (let col = 1; col <= row; col++) {
      currentLine += row + ' '
    }

    triangle += currentLine + '\n'
  }

  return triangle
}

console.log(printTriangleOfNumbers(5))

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
