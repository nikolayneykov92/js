function getNumbersDivisibleByThree() {
  return Array.from({ length: 100 }, (_, index) => index + 1)
    .filter((number) => number % 3 === 0)
    .join('\n')
}

console.log(getNumbersDivisibleByThree())
