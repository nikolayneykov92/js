// Math.PI
// Math.abs
// Math.ceil - 5.1 -> 6, 5.5 -> 6, 5.9 -> 6
// Math.round - 5.1 -> 5, 5.4 -> 5, 5.5 -> 6
// Math.floor - 5.1 -> 5, 5.5 -> 5, 5.9 -> 5
// Math.random - фн, която връща рандом число в диапазон 0.00 - 1.00 
// Math.sqrt
// Math.pow
// Math.max 
// const maxNumber = [1, 2, 3]
// console.log(Math.max(maxNumber))
// Math.min

// 1. destructuring assignment of array
// 2. destructuring assignment of obj
// 3. rest operator array
// 4. rest operator obj
// 3. spread operator array
// 4. spread operator obj 

const names = ['Kiki', 'Leon', 'Lili', 'Lea', 'Miki']

// const kiki = names[0]
// const leon = names[1]
// const lili = names[2]
// const lea = names[3]
// const miki = names[4]
// console.log(kiki, leon, lili, lea, miki)

// const [kiki, leon, lili, lea, miki] = ['Kiki', 'Leon', 'Lili', 'Lea', 'Miki']
const [kiki, leon, lili, lea, miki] = names
console.log(kiki, leon, lili, lea, miki)


const person = { 
  firstName: 'John',
  lastName: 'Doe', 
  age: 27,
  sex: 'male',
  location: 'Sofia'
}

//* accessing value with bracket notation ['key']
// const firstName = person['firstName']
// const lastName = person['lastName']
// const age = person['age']
// const sex = person['sex']
// const location = person['location']

// console.log(firstName, lastName, age, sex, location);

//* accessing value with dot notation .key
// const firstName = person.firstName
// const lastName = person.lastName
// const age = person.age
// const sex = person.sex
// const location = person.location

// console.log(firstName, lastName, age, sex, location);

const { sex, firstName, lastName, age, location } = person
console.log(firstName, lastName, age, sex, location);