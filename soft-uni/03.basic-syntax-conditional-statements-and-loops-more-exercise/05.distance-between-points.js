function calcDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2)
}

console.log(calcDistanceBetweenPoints(2, 4, 5, 0))
