function mostUsedLetters (sourceString) {
  const filteredStr = sourceString.toLowerCase().replace(/[^а-я]/g, '')

  const charsCount = {}
  for (const chr of filteredStr) { charsCount[chr] = (charsCount[chr] || 0) + 1 }

  const result = Object.keys(charsCount)
    .map(chr => ({ letter: chr, count: charsCount[chr] }))

  return result.sort((a, b) => b.count - a.count)
}

const text = '\n свій біль, свій жаль, свої пісні у серці здавлюю на дні'

const top3 = mostUsedLetters(text).slice(0, 1)
console.log(text)
console.log(top3.map((obj, i) => ` \n Cимвол '${obj.letter}'   зустрічається ${obj.count} разів`).join('\n'))
