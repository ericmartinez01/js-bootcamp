const todos = [
  {
    text:'study',
    completed: true
  }, {
    text: 'study some more',
    completed: false
  }, { 
    text: 'build a JS project',
    completed: true
  }, {
    text: 'buy food',
    completed: false
  }, {
    text: 'before bed time study session',
    completed: true
  }]

const filters = {
  searchText: ''
}

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed
  })

  document.querySelector('#todos').innerHTML = ''

  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodos.length} todos left`
  document.querySelector('#todos').appendChild(summary)

  filteredTodos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('#todos').appendChild(p)
  })
}

renderTodos(todos, filters);

// Listen for filter change
document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters);
})

// Listen for form submit button. -- adding and a new todo
document.querySelector('#new-todo').addEventListener('submit', function (e) {
  e.preventDefault()
  todos.push({
    text: e.target.elements.text.value,
    completed: false
  })
  e.target.elements.text.value = ''
  renderTodos(todos, filters)
})