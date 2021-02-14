function getLanguage(country) {
  const availableLanguage = {
    USA: 'English',
    England: 'English',
    Spain: 'Spanish',
    Argentina: 'Spanish',
    Mexico: 'Spanish'
  }

  return availableLanguage[country] || 'unknown'
}

console.log(getLanguage('Austria'))
console.log(getLanguage('USA'))
