function printAndSumNumbersInRange(start, end) {
  const numbersInRange = Array.from({ length: end - start + 1 }, (_, index) => index + start)
  const sumOfNumbersInRange = numbersInRange.reduce((sum, number) => sum + number, 0)

  return `${numbersInRange.join(' ')}\nSum: ${sumOfNumbersInRange}`
}

console.log(printAndSumNumbersInRange(5, 10))
