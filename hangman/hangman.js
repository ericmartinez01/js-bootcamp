'use strict'

// 1. Display the puzzle to the browser instead of the console
// 2. Display the guesses left to the browser instead of console
// 3. Separate the Hangman definition from the rest of the app code (use app.js)

const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('')
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
  let puzzle = ''
  this.word.forEach((letter) => this.guessedLetters.includes(letter) || letter === ' ' ? puzzle += letter : puzzle += '*')
  return puzzle
} 

Hangman.prototype.guessTracker = function (guesses) {
    if(guesses > 1) {
      return `${guesses} guesses left`
    } else if (guesses === 1) {
      return 'Last guess. Make it worth it!'
    } else {
      return 'You lost :('
    }
}

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase()
  const isUnique = !this.guessedLetters.includes(guess)
  const isBadGuess = !this.word.includes(guess)

  if(isUnique) {
    this.guessedLetters.push(guess)
  }

  if (isUnique && isBadGuess ) {
    this.remainingGuesses --
  }
}

const game1 = new Hangman('Cat', 2)

const gameEl = document.querySelector('#game')
const h1El = document.createElement('h1')
const guessEl = document.createElement('p')
  
h1El.textContent = game1.getPuzzle()
gameEl.appendChild(h1El)
guessEl.textContent = game1.guessTracker(game1.remainingGuesses)
gameEl.appendChild(guessEl)


window.addEventListener('keypress', function (e) {
  gameEl.textContent = ''

  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  
  h1El.textContent = game1.getPuzzle()
  gameEl.appendChild(h1El)
  guessEl.textContent = game1.guessTracker(game1.remainingGuesses)
  gameEl.appendChild(guessEl)
})