function permutations (str) {
  if (!str || typeof str !== 'string') {
    return ' Error: enter a valid string'
  }
  return getPermutations(str)
}
function getPermutations (word) {
  if (word.length < 2) {
    return word
  }
  const permutationsArray = []
  for (let i = 0; i < word.length; ++i) {
    const char = word[i]

    if (word.indexOf(char) !== i) { continue }
    const remainingChars = word.slice(0, i) + word.slice(i + 1, word.length)
    for (const pernutation of getPermutations(remainingChars)) {
      permutationsArray.push(char + pernutation)
    }
  }
  return permutationsArray
}
console.log(permutations('Березень'))
