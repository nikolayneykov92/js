function getFullStudentInformation(name, age, grade) {
  return `Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`
}

console.log(getFullStudentInformation('John', 15, 5.54678))
