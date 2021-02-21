function printEnglishNameOfTheLastDigit(number) {
  const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const lastDigit = number % 10

  return digits[lastDigit]
}

console.log(printEnglishNameOfTheLastDigit(512))
