// function getSumOfIntegerOrFloat([a, b, c]) {
//   const sum = a + b + c

//   return Number.isInteger(sum) ? `${sum} - Integer` : `${sum} - Float`
// }

// console.log(getSumOfIntegerOrFloat([9, 100, 1.1]))

function getSumOfIntegerOrFloat(a, b, c) {
  const sum = a + b + c

  return sum % 1 === 0 ? `${sum} - Integer` : `${sum} - Float`
}

console.log(getSumOfIntegerOrFloat(9, 100, 1.1))

