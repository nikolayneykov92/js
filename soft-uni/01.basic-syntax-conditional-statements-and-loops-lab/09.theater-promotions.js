function getTicketPrice(dayType, age) {
  const createPriceList = (length, price) => {
    return Array.from({ length }, () => price)
  }

  const prices = {
    Weekday: createPriceList(18, '12$').concat(createPriceList(47, '18$'), createPriceList(58, '12$')),
    Weekend: createPriceList(18, '15$').concat(createPriceList(47, '20$'), createPriceList(58, '15$')),
    Holiday: createPriceList(18, '5$').concat(createPriceList(47, '12$'), createPriceList(58, '10$'))
  }

  return (prices[dayType] || [])[age] || 'Error!'
}

console.log(getTicketPrice('Weekday', 122))
