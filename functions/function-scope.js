// Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
  // Local scope (fahrenheit, celsius)
    // Local scope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9
  
  if (celsius <= 0) {
    let isFreezing = true
  }

  return celsius
}

let valueOne = convertFahrenheitToCelsius(32)
let valueTwo = convertFahrenheitToCelsius(68)

console.log(valueOne)
console.log(valueTwo)