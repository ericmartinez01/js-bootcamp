// Primitive value: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
const bodyEl = document.querySelector('body')

puzzleEl.textContent = game1.puzzle
guessEl.textContent = game1.statusMessage


window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)

  puzzleEl.textContent = game1.puzzle
  guessEl.textContent = game1.statusMessage
})

getPuzzle('2').then((puzzle) => {
  console.log(puzzle)
}).catch((err) => {
  console.log(`Error: ${err}`)
})

getLocation().then((location) => {
  return getCountry(location.country)
}).then((country) => {
  console.log(country.name)
}).catch((err) => {
  console.log(`Error: ${err}`)
})