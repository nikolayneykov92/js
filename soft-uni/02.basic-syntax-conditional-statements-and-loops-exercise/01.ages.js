function getPersonMaturity(age) {
  const createMaturityList = (length, value) => {
    return Array.from({ length }, () => value)
  }

  const babyList = createMaturityList(3, 'baby')
  const childList = createMaturityList(11, 'child')
  const teenagerList = createMaturityList(6, 'teenager')
  const adultList = createMaturityList(46, 'adult')

  const maturityList = babyList.concat(childList, teenagerList, adultList)

  return age < 0 ? 'out of bounds' : maturityList[age] || 'elder'
}

console.log(getPersonMaturity(19))
