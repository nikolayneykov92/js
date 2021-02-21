function isMatched(stringWithMissingChar, char, stringToCompare) {
  return stringWithMissingChar.replace('_', char) === stringToCompare ? 'Matched' : 'Not Matched'
}

console.log(isMatched('Str_ng', 'I', 'Strong'))
