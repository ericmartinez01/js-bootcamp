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

// Listen for new todo creation
document.querySelector('#create-todo').addEventListener('click', function (e) {
  console.log('I added a button and an event listener')
})

// Listen for todo text change
document.querySelector('#new-todo-text').addEventListener('input', function (e) {
  console.log(e.target.value)
})

// Listen for filter change
document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters);
})