const fruits = ['Strawberry', 'Watermelon', 'Cherry']
const vegetables = ['Tomato', 'Onion', 'Carrot']

const vegetarianFood = [fruits[0], fruits[1], fruits[2], vegetables[0], vegetables[1], vegetables[2]]
console.log(vegetarianFood)

// const vegetarianFood = [...fruits, ...vegetables]
// console.log(vegetarianFood)

// const vegetarianFood = [ ...vegetables, ...fruits]
// console.log(vegetarianFood)

const userInfo = {
  id: 42,
  username: 'leon',
  password: '12345'
}

const profileInfo = {
  firstName: 'Leon',
  lastName: 'Star',
  age: 27
}

const user = {
  id: userInfo.id,
  username: userInfo.username,
  password: userInfo.password,
  firstName: profileInfo.firstName,
  lastName: profileInfo.lastName,
  age: profileInfo.age
}
console.log(user)

// const user = { ...userInfo, ...profileInfo }
// console.log(user)
