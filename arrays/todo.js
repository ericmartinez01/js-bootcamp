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

const deleteTodo = function (todos, textValue) {
    const todoIndex = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === textValue.toLowerCase()
  })

  if (todoIndex > -1) {
  todos.splice(todoIndex, 1)
  }
}

const getThingsToDo = function (todos) {
  return todos.filter(function (todo) {
    return !todo.completed
  })
}

const sortTodos = function (todos) {
  return todos.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1
    } else if (!b.completed && a.completed) {
      return 1
    } else {
      return 0
    }
  })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))