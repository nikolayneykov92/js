function getSumOfOddNumbers(n) {
  const oddNumbers = Array.from({ length: n * 2 }, (_, index) => index + 1).filter((number) => number % 2 === 1)
  const sumOfOddNumbers = oddNumbers.reduce((sum, number) => sum + number , 0)
  
  return `${oddNumbers.join('\n')}\nSum: ${sumOfOddNumbers}`
}

console.log(getSumOfOddNumbers(5))
