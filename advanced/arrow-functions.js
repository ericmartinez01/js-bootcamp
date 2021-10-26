const square = (num) => num * num

const squareLong = (num) => {
  return num * num
}

console.log(square(2))


const people = [{
  name: 'Andrew',
  age: 27
}, {
  name: 'Vik',
  age: 31
}, {
  name: 'Jess',
  age: 22
}]

const person = people.find((person) => person.age === 22)
console.log(person.name)

