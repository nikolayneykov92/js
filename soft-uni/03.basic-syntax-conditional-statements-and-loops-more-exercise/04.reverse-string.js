// function reverseString(string) {
//   return string.split('').reverse().join('')
// }

// function reverseString(string) {
//   let reversedString = ''

//   for (let i = string.length - 1; i >= 0; i--) {
//     reversedString += string[i]
//   }

//   return reversedString
// }

// function reverseString(string) {
//   let reversedString = ''

//   for (let i = 0; i < string.length; i++) {
//     reversedString = string[i] + reversedString
//   }

//   return reversedString
// }

// function reverseString(string) {
//   let reversedString = ''

//   for (let i = 0; i < string.length; i++) {
//     reversedString += string[string.length - 1 - i]
//   }

//   return reversedString
// }

// function reverseString(string) {
//   let reversedElements = string.split('')

//   for (let i = 0; i < reversedElements.length / 2; i++) {
//     const leftIndex = i
//     const rightIndex = reversedElements.length - 1 - i
//     const leftElement = reversedElements[leftIndex]
//     const rightElement = reversedElements[rightIndex]

//     reversedElements[leftIndex] = rightElement
//     reversedElements[rightIndex] = leftElement
//   }

//   return reversedElements.join('')
// }

// function reverseString(string) {
//   let reversedElements = string.split('')
//   let leftIndex = 0
//   let rightIndex = string.length - 1

//   while (leftIndex < rightIndex) {
//     const leftElement = reversedElements[leftIndex]
//     const rightElement = reversedElements[rightIndex]

//     reversedElements[leftIndex] = rightElement
//     reversedElements[rightIndex] = leftElement

//     leftIndex++
//     rightIndex--
//   }

//   return reversedElements.join('')
// }

// function reverseString(string) {
//   return string.split('').map((_, index, array) => array[array.length - 1 - index], '').join('')
// }

function reverseString(string) {
  return string.split('').reduce((reversedString, char) => char + reversedString, '')
}

console.log(reverseString('12345'))
