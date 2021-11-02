// Primitive value: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// 1. Setup new "status" property with initial value of "playing"
// 2. Create method for recalculating status to "playing", "finished", or "failed"
// 3. Call that method after a guess is processed
// 4. Use console.log to print the status

// Start the game and see "playing"
// Make two incorrect guesses to "failed"
// Refresh the browser and guess "c", "a", and "t" to see finished

const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
const bodyEl = document.querySelector('body')
  
puzzleEl.textContent = game1.getPuzzle()
guessEl.textContent = game1.guessTracker(game1.remainingGuesses)


window.addEventListener('keypress', function (e) {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  
  puzzleEl.textContent = game1.getPuzzle()
  guessEl.textContent = game1.guessTracker(game1.remainingGuesses)
})