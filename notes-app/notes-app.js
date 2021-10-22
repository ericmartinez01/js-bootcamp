let notes = getSavedNotes()

const filters = {
  searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
  const id = uuidv4()
  notes.push({
    id: id,
    title: '',
    body: ''
  })
  saveNotes(notes)
  location.assign(`edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
  console.log(e.target.value);
})

window.addEventListener('storage', function (e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
  }
})

// 1. Create two dates in the past (use string for Date)
// 2. Get timestamps for both
// 3. Figure out which is first and print its time (use toString)

const date1 = new Date('February 14 1987')
const date2 = new Date('November 17 1987')

const timestamp1 = date1.getTime()
const timestamp2 = date2.getTime()

if (timestamp1 > timestamp2) {
  console.log(date2.toString())
} else {
  console.log(date1.toString());
}