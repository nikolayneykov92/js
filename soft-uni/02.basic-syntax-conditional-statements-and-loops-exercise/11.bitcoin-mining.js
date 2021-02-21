// function mineBitcoins(minedGold) {
//   let firstBitcoinDay = 0
//   let bitcoins = 0
//   let bgn = 0

//   for (let index = 0; index < minedGold.length; index++) {
//     const currentDay = index + 1
//     const currentGold = minedGold[index] * (currentDay % 3 === 0 ? 0.7 : 1)
//     bgn += currentGold * 67.51

//     if (bgn >= 11949.16) {
//       if (firstBitcoinDay === 0) {
//         firstBitcoinDay = currentDay
//       }

//       const bitcoinsToBuy = Math.floor(bgn / 11949.16)
//       bitcoins += bitcoinsToBuy
//       bgn -= bitcoinsToBuy * 11949.16
//     }
//   }

//   const messages = []
//   messages.push(`Bought bitcoins: ${bitcoins}`)

//   if (firstBitcoinDay !== 0) {
//     messages.push(`Day of the first purchased bitcoin: ${firstBitcoinDay}`)
//   }

//   messages.push(`Left money: ${bgn.toFixed(2)} lv.`)

//   return messages.join('\n')
// }

function mineBitcoins(minedGold) {
  const { firstBitcoinDay, bitcoins, bgn } = minedGold.reduce(
    (acc, gold, index) => {
      const currentDay = index + 1
      const currentGold = gold * (currentDay % 3 === 0 ? 0.7 : 1)
      acc.bgn += currentGold * 67.51

      if (acc.bgn >= 11949.16) {
        if (acc.firstBitcoinDay === 0) {
          acc.firstBitcoinDay = currentDay
        }

        const bitcoinsToBuy = Math.floor(acc.bgn / 11949.16)
        acc.bitcoins += bitcoinsToBuy
        acc.bgn -= bitcoinsToBuy * 11949.16
      }

      return acc
    },
    { firstBitcoinDay: 0, bitcoins: 0, bgn: 0 }
  )

  const messages = []
  messages.push(`Bought bitcoins: ${bitcoins}`)

  if (firstBitcoinDay !== 0) {
    messages.push(`Day of the first purchased bitcoin: ${firstBitcoinDay}`)
  }

  messages.push(`Left money: ${bgn.toFixed(2)} lv.`)

  return messages.join('\n')
}

console.log(mineBitcoins([100, 200, 300]))
