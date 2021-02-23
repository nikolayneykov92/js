function printAmazingNumbers(number) {
  const sum = String(number)
    .split('')
    .map(Number)
    .reduce((sum, num) => sum + num, 0)
   
  return `${number} Amazing? ${String(sum).split('').includes('9') ? 'True' : 'False'}`
}

console.log(printAmazingNumbers(9992))

