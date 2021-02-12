// function getNumbersFromNtoOne(n) {
//   let newArray = []

//   for (let i = n; i >= 1; i--) {
//     newArray.push(i)
//   }

//   return newArray.join('\n')
// }

// function getNumbersFromNtoOne(n) {
//   return Array.from({ length: n }, (_, index) => index + 1)
//     .reverse()
//     .join('\n')
// }

function getNumbersFromNtoOne(n) {
  return Array.from({ length: n }, (_, index) => n - index).join('\n')
}

//! 0 1 2 3 4 5 6 7
//! 8 8 8 8 8 8 8 8
//! 8 7 6 5 4 3 2 1

console.log(getNumbersFromNtoOne(8))
// console.log(getNumbersFromNtoOne(5))
// console.log(getNumbersFromNtoOne(3))

function arrayFrom({ length }, mapFn) {
  let newArray = []

  for (let i = 0; i < length; i++) {
    newArray.push(mapFn(undefined, i))
  }

  return newArray
}

console.log(arrayFrom({ length: 5 }, (_, index) => index + 1))
