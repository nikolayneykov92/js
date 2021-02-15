function getBiggestDivision(number) {
  const dividers = [10, 7, 6, 3, 2]
  const biggestDivider = dividers.find((divider) => number % divider === 0)

  return biggestDivider ? `The number is divisible by ${biggestDivider}` : 'Not divisible'
}

console.log(getBiggestDivision(1643))
