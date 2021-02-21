const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const [monday, ...restDays] = daysOfWeek
console.log(monday)
console.log(restDays)

// const [monday, tuesday, ...restDays] = daysOfWeek
// console.log(monday, tuesday)
// console.log(restDays)

// const [monday, tuesday, wednesday, ...restDays] = daysOfWeek
// console.log(monday, tuesday, wednesday)
// console.log(restDays)

// const [monday, tuesday, wednesday, thursday, ...restDays] = daysOfWeek
// console.log(monday, tuesday, wednesday, thursday)
// console.log(restDays)

// const [monday, tuesday, wednesday, thursday, friday,  ...restDays] = daysOfWeek
// console.log(monday, tuesday, wednesday, thursday, friday)
// console.log(restDays)

// const [monday, tuesday, wednesday, thursday, friday, saturday, ...restDays] = daysOfWeek
// console.log(monday, tuesday, wednesday, thursday, friday, saturday)
// console.log(restDays)

// const [monday, tuesday, wednesday, thursday, friday, saturday, sunday, ...restDays] = daysOfWeek
// console.log(monday, tuesday, wednesday, thursday, friday, saturday, sunday)
// console.log(restDays)

const product = {
  id: 42,
  name: 'Kiwi',
  price: 2.59
}

const { id, ...restProductInfo } = product
console.log(id)
console.log(restProductInfo)
