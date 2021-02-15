function getVacationPrice(groupSize, groupType, day) {
  const priceTable = {
    students: { friday: 8.45, saturday: 9.8, sunday: 10.46 },
    business: { friday: 10.9, saturday: 15.6, sunday: 16.0 },
    regular: { friday: 15.0, saturday: 20.0, sunday: 22.5 }
  }

  const price = priceTable[groupType.toLowerCase()][day.toLowerCase()]
  const totalPrice = price * groupSize

  const discountTable = {
    students: groupSize >= 30 ? totalPrice * 0.15 : 0,
    business: groupSize >= 100 ? price * 10 : 0,
    regular: groupSize >= 10 && groupSize <= 20 ? totalPrice * 0.05 : 0
  }

  const discount = discountTable[groupType.toLowerCase()]
  const finalPrice = totalPrice - discount

  return `Total price: ${finalPrice.toFixed(2)}`
}

console.log(getVacationPrice(100, 'Business', 'Saturday'))
