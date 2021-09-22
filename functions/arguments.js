// Multiple arguments
let add = function (a, b, c) {
  return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
  return `Name: ${name} - Score: ${score}`
  // return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge area
// total, tipPercent .2

let tip = function (total, tipPercent = .2) {
  return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`
}

let tipAmountOne = tip(40, .25)
console.log(tipAmountOne)

let name = 'Eric'
console.log(`Hey, my name is ${name}!`)