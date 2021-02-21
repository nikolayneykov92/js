// pyramid

// stone (bulk)
// marble (outer layer)
// lapis (every fifth step )
// gold

// input: integer(length of the pyramid)
// increment: height of each step

function printPyramidMaterialAmounts(base, increment) {
  const materials = {
    stone: 0,
    marble: 0, 
    lapis: 0,
    gold: (base % 2 === 0 ? 4 : 1) * increment
  }

  let currentLength = base
  let currentRow = 1

  while((currentLength % 2 === 0 && currentLength > 2) || (currentLength % 2 === 1 && currentLength > 1)) {
    const currentRowBlocks = Math.pow(currentLength, 2)
      const innerLayerBlocks = Math.pow(currentLength -2, 2)}
    const outerLayerBlocks = currentRowBlocks - innerLayerBlocks 

    materials.stone += innerLayerBlocks * increment
    if(currentRow % 5 === 0) {
      materials.lapis += outerLayerBlocks * increment
    } else {
      materials.marble += outerLayerBlocks * increment
    }

    currentLength -= 2
    currentRow++
  }

  return [
    `Stone required: ${Math.ceil(materials.stone)}`, 
    `Marble required: ${Math.ceil(materials.marble)}`,
    `Lapis Lazuli required: ${Math.ceil(materials.lapis)}`,
    `Gold required: ${Math.ceil(materials.gold)}`,
    `Final pyramid height: ${Math.floor(currentRow * increment)}`,
  ]
  .join('\n')
}

console.log(printPyramidMaterialAmounts(11, 1))

// 11
// 9
// 7
// 5
// 3
// 1