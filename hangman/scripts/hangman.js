'use strict'

class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
  }
  calculateStatus() {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

    if (this.remainingGuesses === 0) {
      this.status = 'failed'
    } else if (finished) {
      this.status = 'finished'
    } else {
      this.status = 'playing'
    }
  }
  get puzzle() {
    let puzzle = ''
    this.word.forEach((letter) => this.guessedLetters.includes(letter) || letter === ' ' ? puzzle += letter : puzzle += '*')
    return puzzle
  }
  guessTracker(guesses) {
    if (guesses > 1) {
      return guesses
    } else if (guesses === 1) {
      return guesses
    } else {
      return 'You lost :('
    }
  }
  makeGuess(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (this.status !== 'playing') {
      return
    }

    if (isUnique) {
      this.guessedLetters.push(guess)
    }

    if (isUnique && isBadGuess) {
      this.remainingGuesses--
    }
    this.calculateStatus()
  }
  get statusMessage() {
    const answer = this.word.join('')
    if (this.status === 'failed') {
      return `Nice try! The word was ${answer}`
    } else if (this.status === 'playing') {
      return `Guesses left: ${this.remainingGuesses}`
    } else {
      return 'Great work! You guessed the word.'
    }
  }
}