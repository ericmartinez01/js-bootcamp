// Primitive value: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
const bodyEl = document.querySelector('body')
  
puzzleEl.textContent = game1.getPuzzle()
guessEl.textContent = game1.getStatus()


window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    
    puzzleEl.textContent = game1.getPuzzle()
    guessEl.textContent = game1.getStatus()
})