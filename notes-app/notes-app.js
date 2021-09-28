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

const filters = {
  searchText: ''
}

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  const notesDiv = document.querySelector('#notes')
  notesDiv.innerHTML = '' 

  filteredNotes.forEach(function(note) {
    const newEl = document.createElement('p')
    newEl.textContent = note.title
    notesDiv.appendChild(newEl)
  })
}

renderNotes(notes, filters)

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
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})