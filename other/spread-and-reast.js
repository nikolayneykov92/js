// function createBoyfriend(hair, height, bodyType, ...optional) {
//   return `
//   - Hair: ${hair}
//   - Height: ${height}cm
//   - BodyType: ${bodyType}
//   - Optional: ${optional.join(', ')}
//   `
// }

// console.log(createBoyfriend('long and blond', 185, 'fit', 'green eyes','blond beard', 'good personality'))

//* arr ot el rest
function max(...numbers) {
  let maxNumber = Number.MIN_SAFE_INTEGER

  for(let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i]

    if(maxNumber < currentNumber) {
      maxNumber = currentNumber 
    }
  }

  return maxNumber
}

// console.log(max(1, 2, 3, 4, 5))

const numbers = [1, 2, 555, 4, 5]
console.log(max(...numbers))