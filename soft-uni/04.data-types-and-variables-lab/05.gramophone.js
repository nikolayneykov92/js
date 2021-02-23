function calculatePlateRotation(bandName, albumName, songName) {
  const songDuration = (albumName.length * bandName.length * songName.length) / 2
  const plateRotations = Math.ceil(songDuration / 2.5)

  return `The plate was rotated ${plateRotations} times.`
}

console.log(calculatePlateRotation('Black Sabbath', 'Paranoid', 'War Pigs'))
