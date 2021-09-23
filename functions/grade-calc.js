// students score, total possible score
// 15/20 -> You got a C (75%)
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalc = function (score, totalPossibleScore) {
  const studentsScore = (score / totalPossibleScore) * 100
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

const result = gradeCalc(90, 100)
console.log(result)
