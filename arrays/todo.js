const todos = ['study', 'study some more', 'build a JS project', 'study some more', 'before bed time study session']

todos.splice(2, 1)
todos.push('you forgot to love to study')
todos.shift()

console.log(`You have ${todos.length} todos`)

todos.forEach(function (todo, index) {
  const num = index + 1
  console.log(`${num}. ${todo}`)
})
