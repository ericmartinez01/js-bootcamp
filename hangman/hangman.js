'use strict'

// 1. Disable a new guesses unless "playing"
// 2. Setup a new method to get back a status message

// Playing -> Guesses left: 3
// Failed -> Nice try! The word was "Cat".
// Finished -> Great work! You guessed the word.

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

  if (this.status !== 'playing') {
   return 
  }

  if(isUnique) {
    this.guessedLetters.push(guess)
  }

  if (isUnique && isBadGuess ) {
    this.remainingGuesses --
  }
  this.calculateStatus()
}

Hangman.prototype.getStatus = function () {
  const answer = this.word.join('')
  if (this.status === 'failed') {
    return `Nice try! The word was ${answer}`
  } else if (this.status === 'playing') {
    return `Guesses left: ${this.remainingGuesses}`
  } else {
    return 'Great work! You guesses the word.'
  }
}



const game1 = new Hangman('Cat', 2)