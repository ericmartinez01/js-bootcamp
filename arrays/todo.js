const todos = ['study', 'study some more', 'build a JS project', 'study some more', 'before bed time study session']

// Delete the 3rd item
// Add a new item onto the end
// Remove the first item from the list

todos.splice(2, 1)
todos.unshift('you forgot to love to study')
todos.pop()

console.log(`You have ${todos.length} todos`)
console.log(todos)