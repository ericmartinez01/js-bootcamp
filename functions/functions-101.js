// Function - input (argument), code, output

let greetUser = function () {
  console.log('Welcome user!')
}

greetUser()

let square = function (num) {
  let result = num * num
  return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// Challenge area

// convertFahrenheitToCelsius
let convertFahrenheitToCelsius = function (fahrenheit) {
  return (fahrenheit - 32) * 5/9
}

// Call a couple of times (32 -> 0) (68 -> 20)
let valueOne = convertFahrenheitToCelsius(32)
let valueTwo = convertFahrenheitToCelsius(68)

// Print the converted values

console.log(valueOne)
console.log(valueTwo)