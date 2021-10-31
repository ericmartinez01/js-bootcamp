'use strict'

const Hangman = function (word, remainingGuesses,) {
  this.word = word.toLowerCase().split('')
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = ['c', 'e']
}

Hangman.prototype.getPuzzle = function () {
  let puzzle = ''
  this.word.forEach((letter) => this.guessedLetters.includes(letter) || letter === ' ' ? puzzle += letter : puzzle += '*')
  return puzzle
} 

const game1 = new Hangman('cat', 4)
console.log(game1.getPuzzle())

const game2 = new Hangman('mail man', 5)
console.log(game2.getPuzzle())