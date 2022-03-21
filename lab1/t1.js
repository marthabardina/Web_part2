function StringToWords (str) {
  const result = str.split(' ')
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '') {
      result.splice(i, 1)
      i--
    }
  }
  return result
}

console.log(StringToWords('be kind to everyone, even yourself'))
