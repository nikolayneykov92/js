function printMonth(monthNumber) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  return months[monthNumber - 1] || 'Error!'
}

console.log(printMonth(1))
console.log(printMonth(13))
