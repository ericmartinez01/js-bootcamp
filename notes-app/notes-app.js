const notes = [{
  title: 'my next trip',
  body: 'I would like to go to Spain'
}, {
  title: 'Habbits to work on',
  body: 'Exercise. Eating a bit better'
}, {
  title: 'Office modification',
  body: 'Get a new seat'
}]

document.querySelector('#create-note').addEventListener('click', function (e) {
  console.log('Did this work?')
  e.target.textContent = 'Button has been clicked!'
})


document.querySelector('#remove-all').addEventListener('click', function () {
  document.querySelectorAll('.note').forEach(function (note) {
    note.remove()
  })
})

document.querySelector('#search-text').addEventListener('input', function (e) {
  console.log(e.target.value)
})