'use strict'

let todos = getSavedTodos()

const filters = {
  searchText: '',
  hideCompleted: false
}

renderTodos(todos, filters);

// Listen for filter change
document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

// Listen for form submit button. -- adding a new todo
document.querySelector('#new-todo').addEventListener('submit', (e) => {
  e.preventDefault()
  todos.push({
    id: uuidv4(),
    text: e.target.elements.text.value,
    completed: false
  })
  saveTodos(todos)
  renderTodos(todos, filters)
  e.target.elements.text.value = ''
})

document.querySelector('#completed-checkbox').addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked 
  renderTodos(todos, filters)
})