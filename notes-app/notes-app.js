const notes = getSavedNotes()

const filters = {
  searchText: ''
}

// Check for existing saved data
const notesJSON = localStorage.getItem('notes')

if (notesJSON !== null) {
  notes = JSON.parse(notesJSON)
}
renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
  notes.push({
    title: '',
    body: ''
  })
  saveNotes(notes)
  renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
  console.log(e.target.value);
})