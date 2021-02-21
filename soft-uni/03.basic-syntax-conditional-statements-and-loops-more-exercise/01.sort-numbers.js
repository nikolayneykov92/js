function sortNumbers(...numbers) {
  return numbers.sort((a, b) => b - a).join('\n')
}

console.log(sortNumbers(2, 1, 3))
