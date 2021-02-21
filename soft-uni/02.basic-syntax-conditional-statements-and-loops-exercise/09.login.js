function login([username, firstInput, secondInput, thirdInput, fourthInput]) {
  const defaultMsg = 'Incorrect password. Try again.'
  const password = username.split('').reverse().join('')
  const messages = []

  if (firstInput === password) {
    messages.push(`User ${username} logged in.`)
  } else if (secondInput === password) {
    messages.push(defaultMsg, `User ${username} logged in.`)
  } else if (thirdInput === password) {
    messages.push(defaultMsg, defaultMsg, `User ${username} logged in.`)
  } else if (fourthInput === password) {
    messages.push(defaultMsg, defaultMsg, defaultMsg, `User ${username} logged in.`)
  } else {
    messages.push(defaultMsg, defaultMsg, defaultMsg, `User ${username} blocked!`)
  }

  return messages.join('\n')
}

console.log(login(['Acer', 'login', 'go', 'let me in', 'rec']))
