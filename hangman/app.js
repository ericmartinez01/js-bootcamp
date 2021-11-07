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

getPuzzle("2", (error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(puzzle)
  }
})

getCountry("US", (error, country) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(country.name)
  }
})
