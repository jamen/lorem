
// Lorem ipsum sources
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
const words = loremIpsum.toLowerCase().replace(/[.,]/g, '').split(/\s/)
const bySize = words
  .reduce((c, w) => {
    if (!c[w.length]) c[w.length] = [w]
    else c[w.length].push(w)
    return c
  }, {})

// Word size info
const sizes = Object.keys(bySize).map(x => parseInt(x)).sort((a, b) => a - b)
const min = sizes[0]
const max = sizes[sizes.length - 1]
const avgSize = Math.ceil(words.reduce((a, b) => a + b.length, 0) / words.length)

function lorem (n) {
  n-- // Exclude '.' in calculations

  // Cannot satisfy a full word.
  if (n < min) {
    let word = bySize['12'][0][Math.floor(Math.random() * 12)]
    return word[0].toUpperCase() + (n > 0 ? '.' : '')
  }

  // Cannot satisfy 'Lorem ipsum ' + a wold.
  if (n < 12 + min) {
    let targets = bySize[n]
    let word = targets[Math.floor(Math.random() * targets.length)] + '.'
    return word[0].toUpperCase() + word.slice(1)
  }

  // Generate random words
  let output = 'Lorem ipsum'
  let sentenceSize = 0
  let shouldCapitalize = false
  n -= output.length // Exclude prefix and first space from calculations

  while (n--) {
    let word

    if (n - min <= max) {
      // Write last and second to last words fitted to the byte size.
      let targets = bySize[min]
      if (n <= max) targets = bySize[n]
      word = targets[Math.floor(Math.random() * targets.length)]
    } else {
      // Write a random word
      let targets = bySize[Math.floor(Math.random() * (max - min) + min)]
      word = targets[Math.floor(Math.random() * targets.length)]
    }

    // Randomly insert punctuation
    if (sentenceSize > 5 && n > avgSize * 5 && Math.random() > 0.5) {
      // End of sentences are less common than commas
      if (Math.random() < 0.4) {
        // A statement is more common than a question.
        if (Math.random() < 0.6) {
          output += '.'
        } else {
          output += '?'
        }
        // Capitalize the word (its inserted after this punctuation)
        word = word[0].toUpperCase() + word.slice(1)
      } else {
        output += ','
      }
      sentenceSize = 0
      n--
    }

    output += ' ' + word
    n -= word.length
    sentenceSize++
  }

  return output + '.'
}

module.exports = lorem