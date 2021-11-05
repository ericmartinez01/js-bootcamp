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

const puzzle = getPuzzle((puzzle) => {
  console.log(puzzle)
})

// Making an HTTP request

// const countryCode = "US"
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange', (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText)
//     const country = data.find(country => country.alpha2Code === countryCode)
//     console.log(country.name)
//   } else if (e.target.readyState === 4) {
//     console.log('Unable to fetch data')
//   }
// })

// countryRequest.open('GET', 'http://api.countrylayer.com/v2/all?access_key=71eda2a074975c79c18ba8fc2755b7b3')
