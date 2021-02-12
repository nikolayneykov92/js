const input = ['anagram', '6', 'gramana', 'aaagrnm', 'anagra', 'margana', 'abc', 'xy']
const print = this.print || console.log
const gets = this.gets || ((i) => () => input[i++])(0)

const word = gets().split('').sort().join('')
const n = +gets()

for (let i = 0; i < n; i++) {
  const currentWord = gets().split('').sort().join('')

  if (word === currentWord) {
    print('Yes')
  } else {
    print('No')
  }
}
