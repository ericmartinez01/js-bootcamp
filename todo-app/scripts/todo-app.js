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

// 1. Get a trimmed version of the input
// 2. Only add a new todo if it has content

// Listen for form submit button. -- adding a new todo
document.querySelector('#new-todo').addEventListener('submit', (e) => {
  const text = e.target.elements.text.value.trim()
  e.preventDefault()
  if (text.length > 0) {
    todos.push({
      id: uuidv4(),
      text,
      completed: false
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
  }
})

document.querySelector('#completed-checkbox').addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked 
  renderTodos(todos, filters)
})