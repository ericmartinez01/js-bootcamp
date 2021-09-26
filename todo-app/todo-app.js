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

// You have 2 todos left (p element)
// Add a p for each a todo above (use text value)

const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('body').appendChild(p)
})