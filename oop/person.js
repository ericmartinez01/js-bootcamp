// Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}.`

  this.likes.forEach((like) => {
    bio += ` ${this.firstName} likes ${like}.`
  })
  return bio
  }
  setName(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes)
    this.position = position
  }
  getBio() {
    return `${this.firstName} ${this.lastName} is a ${position}.`
  }
  getYearsLeft() {
    return 65 - this.age
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, studentGrade){
    super(firstName, lastName, age)
    this.studentGrade = studentGrade
  }
  getBio() {
    return (this.studentGrade >= 70) ? `${this.firstName} is passing the class` : `${this.firstName} is failing the class`
  }
  updateGrade(number) {
    this.studentGrade += number
  }
}

const newStudent = new Student('Andrew', 'Mead', 27, 80)
console.log(newStudent.getBio())
newStudent.updateGrade(-20)
console.log(newStudent.getBio())

// ** The lesser way to do OOP **
// const myPerson = new PersonClass('Andrew', 'Mead', 27, ['Teaching'])
// console.log(myPerson)

// const Person = function (firstName, lastName, age, likes = []) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.age = age
//   this.likes = likes
// }

// Person.prototype.getBio = function () {
//   let bio = `${this.firstName} is ${this.age}.`

//   this.likes.forEach((like) => {
//     bio += ` ${this.firstName} likes ${like}.`
//   })
//   return bio
// }

// Person.prototype.setName = function (fullName) {
//   const names = fullName.split(' ')
//   this.firstName = names[0]
//   this.lastName = names[1]
// }