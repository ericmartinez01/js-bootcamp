let myAccount = {
  name: 'Eric Martinez',
  expenses: 0,
  income: 0
}

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount
}

// addIncome
let addIncome = function (account, amount) {
  account.income = account.income + amount
}
// resetAccount
let resetAccount = function (account) {
  account.expenses = 0
  account.income = 0
}

// getAccountSummary
// Account for Eric has $900. $1000 in income. $100 in expenses. 
let getAccountSummary = function (account) {
  let total = account.income - account.expenses
  return `Account for ${account.name} has $${total}. $${account.income} in income. $${account.expenses} in expenses.`
}

// addIncome
addIncome(myAccount, 100)
console.log(myAccount)
// addExpense
addExpense(myAccount, 50)
console.log(myAccount)
// addExpense
addExpense(myAccount, 10)
console.log(myAccount)
// getAccountSummary
console.log(getAccountSummary(myAccount))
// reset Account
resetAccount(myAccount)
// getAccountSummary
console.log(getAccountSummary(myAccount))
