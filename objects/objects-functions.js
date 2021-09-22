let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723
}

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSumary: `${book.title} is ${book.pageCount} pages long`
  }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSumary)

// Challenge area
// Create function - take fahrenheit in - return object with all three

let tempConv = function (fahrenheit) {
  let celsuis = (fahrenheit - 32) * 5/9
  let kelvin = (fahrenheit + 459.67) * 5/9

  return temp = {
    fahrenheit: fahrenheit,
    celsuis: celsuis,
    kelvin: kelvin
  }
}

let tempOne = tempConv(32)

console.log(tempOne)

