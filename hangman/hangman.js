'use strict'

const Hangman = function (word, remainingGuesses, status) {
  this.word = word.toLowerCase().split('')
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = []
  this.status = 'playing'
}

Hangman.prototype.getStatus = function () {
  const isFinished = () => {
    let completeStatus = true
    this.word.forEach((letter) => {
      if (!this.guessedLetters.includes(letter)) {
        return completeStatus = false
      }
      
    })
    return completeStatus
  }

  if(this.remainingGuesses > 0 && !isFinished()) {
    return this.status = 'playing'
  } else if (this.remainingGuesses === 0 && !isFinished()) {
    return this.status = 'failed'
  } else {
    return this.status = 'finished'
  }
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
  this.getStatus()
}



const game1 = new Hangman('Cat', 2)