let name = ' Eric Martinez ';

// Length property
console.log(name.length);

console.log(name.toUpperCase());

console.log(name.toLowerCase());

// Includes method
let password = 'abc123password';
console.log(password.includes('password'));

// Trim
console.log(name.trim());

// Challenge area

// isValidPassword
// length id more than 8 - and it doesn't contain the word password
function isValidPassword (str) {
  return str.length >= 8 && !str.includes('password')
}


console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!!@#$'));
console.log(isValidPassword('asdfjgdsgdsljgfopassword'));

