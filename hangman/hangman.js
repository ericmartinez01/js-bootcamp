'use strict'

const Hangman = function (word, remainingGuesses, status) {
  this.word = word.toLowerCase().split('')
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = []
  this.status = 'playing'
}

Hangman.prototype.calculateStatus = function () {
 const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

  if (this.remainingGuesses === 0) {
    this.status = 'failed'
  } else if (finished) {
    this.status = 'finished'
  } else {
    this.status = 'playing'
  }
}

Hangman.prototype.getPuzzle = function () {
  let puzzle = ''
  this.word.forEach((letter) => this.guessedLetters.includes(letter) || letter === ' ' ? puzzle += letter : puzzle += '*')
  return puzzle
} 

Hangman.prototype.guessTracker = function (guesses) {
    if(guesses > 1) {
      return guesses
    } else if (guesses === 1) {
      return guesses
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
  this.calculateStatus()
}



const game1 = new Hangman('Cat', 2)