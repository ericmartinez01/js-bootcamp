// const myAge = 27
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'
// console.log(message)

const myAge = 27 
const showPage = () => {
  return 'Showing the page'
}

const showErrorPage = () => {
  return 'Showing the error page'
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ['Tyler', 'Porter', 'Pete', 'Kerry']

team.length < 4 ? console.log(`Team size: ${team.length}`) : console.log('Too many people on your team')
