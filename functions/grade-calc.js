// students score, total possible score
// 15/20 -> You got a C (75%)
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let grade = function (score, totalPossibleScore) {
  let studentsScore = (score / totalPossibleScore) * 100
  let letterGrade = ''
  
  if (studentsScore >= 90) {
     letterGrade = 'A'
  } else if (studentsScore >= 80) {
    letterGrade = 'B'
  } else if (studentsScore >= 70) {
    letterGrade = 'C'
  } else if (studentsScore >= 60) {
    letterGrade = 'D'
  } else {
    letterGrade = 'F'
  }
  return `You got a ${letterGrade} (${studentsScore}%!)`
}

let studentOne = grade(90, 100)
let studentTwo = grade(80, 100)
let studentThree = grade(70, 100)
let studentFour = grade(60, 100)
let studentFive = grade(50, 100)

console.log(studentOne)
console.log(studentTwo)
console.log(studentThree)
console.log(studentFour)
console.log(studentFive)