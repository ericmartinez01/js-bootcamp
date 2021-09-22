let temp = 65

// Logical And Operator - True if both sides are true. False otherwise
// Logical or Operator - True if at least one side is ture, False otherwise

if (temp >= 60 && temp <= 90) {
  console.log('It is pretty nice out')
}

if (temp <= 0 || temp >= 120) {
  console.log('Do not go outside')
}

// Challenge are

let isGuestOneVegan = false
let isGuestTwoVegan = false

// Are both vegan? Only offer up vegan dishes.
// At least one vegan? Make sure to offer up some vegan options.
// Else, Offer up anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Here are our vegan options.')
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('Here is our menu and the vegan options are on the back.')
} else {
  console.log('Everything on the menu is not vegan.')
}