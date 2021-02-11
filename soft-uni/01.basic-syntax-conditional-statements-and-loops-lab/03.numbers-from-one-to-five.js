function getNumbersFromOneToFive() {
  const result = [];

  for (let i = 1; i <= 5; i++) {
    result.push(i);
  }

  return result.join("\n");
}

// function getNumbersFromOneToFive() {
//   return Array.from({ length: 5 }, (_, index) => index + 1).join("\n");
// }

console.log(getNumbersFromOneToFive());
